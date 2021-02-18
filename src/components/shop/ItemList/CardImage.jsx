import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageLoader from 'react-imageloader';
function preloader() {
    return (
        <div className="d-flex justify-content-center">
            <div style={{color: '#7a5940'}} className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default function CardImage({ images, name }) {
    const imageMap = images.map((image, i) => {
        return (
            <Carousel.Item key={i} >
                <ImageLoader
                    className="d-block w-100 card_img"
                    src={require('../../../images/' + image + '')}
                    alt={name + "-photo-" + i + 1}
                    preloader={preloader}
                />
            </Carousel.Item>

        )
    })

    function OneCard() {
        return (
            <ImageLoader className="card_img" src={require('../../../images/' + images[0] + '')} alt={name + "-photo"} />
        )
    }

    return (
        <>
            {images.length > 1 ? <Carousel className="border-img" indicators={false} >{imageMap}</Carousel> : <OneCard />}
        </>
    )
}