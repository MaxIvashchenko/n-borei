import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CardImage({ images, name }) {
    const imageMap = images.map((image, i) => {
        return (
            <Carousel.Item key={i} >
                <img
                    className="d-block w-100"
                    src={require('../../../images/' + image + '')}
                    alt={name + "-photo-" + i + 1}
                />
            </Carousel.Item>

        )
    })

    function OneCard() {
        return (
            <>
                <div className="border-img">
                    <img className="card_img" src={require('../../../images/' + images[0] + '')} alt={name + "-photo"} />
                </div>
            </>
        )
    }

    return (
        <>
            {images.length > 1 ? <Carousel className="border-img" indicators={false} >{imageMap}</Carousel> : <OneCard />}
        </>
    )
}