import React, { Component } from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './Carousel.css';
import one from '../Home/Image/one.jpg'
import two from '../Home/Image/two.jpg';
import three from '../Home/Image/three.jpg';
import four from '../Home/Image/four.jpg';

const items = [
    {
        id: 0,
        src: one,
        altText: '',
        caption: '-1-'
    },
    {
        id: 1,
        src: two,
        altText: '',
        caption: '-2-'
    },
    {
        id: 2,
        src: three,
        altText: '',
        caption: '-3-'
    },
    {
        id: 3,
        src: four,
        altText: '',
        caption: '-4-'
    }
];

class Caroussel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <img className="image-caroussel" src={item.src} />
                    <CarouselCaption className="text" captionHeader={item.caption} captionText={item.altText} />
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: ;
              }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default Caroussel;
