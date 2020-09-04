import React, { useState } from 'react'

export default function FewItems({ numOfImg, setnumOfImg, item }) {
    const [activeItem, setactiveItem] = useState(0)

    const colors = item.variants.map((variant, i) => {
        return (
            <button onClick={()=>setactiveItem(i)} key={variant.color + '-' + i} className={activeItem === i ? "activeVariant "+variant.color : variant.color}></button>
        )
    })


    return (
        <>


            <div className="row">
                <div className="col-12 col-md-6 textBlock">

                    <h2>{item.name}</h2>
                    <p className='id'>#{item.variants[activeItem].id}</p>
                    <hr className="line" />


                    <h4>Choose color:</h4>
                    <div className="variants">
                        {colors}
                    </div>
                    <hr className="line" />

                    <h4>Price:</h4>
                    <div className={`priceBlock ${item.variants[activeItem].available}`}>
                        <p>{item.variants[activeItem].price}€</p>
                        <p>{item.variants[activeItem].available}</p>
                    </div>
                    <hr className="line" />

                    <h4>Description:</h4>
                    <h5>{item.description}</h5>
                    <hr className="line" />

                    <h4>Material:</h4>
                    <h5>{item.material}</h5>
                    <hr className="line" />

                    <h4>Measurements:</h4>
                    <h5>{item.variants[activeItem].dimensions}</h5>

                </div>



                <div className="col-12 col-md-6 imageBlock">
                    <img
                        src={require('../../../images/' + item.variants[activeItem].images[numOfImg] + '')}
                        alt={item.name + "-photo-" + 1}
                    />
                    <div className="imageRow">
                        {item.variants[activeItem].images.map((image, i) => {

                            return (
                                <button onClick={() => setnumOfImg(i)} key={"imageInROw " + i}>
                                    <img className={i === numOfImg ? "activeImg" : "none"}
                                        src={require('../../../images/' + image + '')}
                                        alt={item.name + "-photo-" + i}
                                    />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
