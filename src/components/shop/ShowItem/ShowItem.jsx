import React, { useState } from 'react'
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'
import backImg from '../../../images/back.svg'
import FewItems from './FewItems'

export default function Item(props) {
    const item = props.location.state.item
    const [numOfImg, setnumOfImg] = useState(0)

    return (
        <Animated animationInDuration={1000} animationIn="fadeIn" className="ShowItem">
            <div className="container-fluid">
                <Link className="backImg" to='/shop'>
                    <img src={backImg} alt="back-icon" />
                </Link>
                {item.variants ? <FewItems numOfImg={numOfImg} setnumOfImg={setnumOfImg} item={item} /> :
                    <>


                        <div className="row">
                            <div className="col-12 col-md-6 textBlock">

                                <h2>{item.name}</h2>
                                <p className='id'>#{item.id}</p>
                                <hr className="line" />

                                <h4>Price:</h4>
                                <div className={`priceBlock ${item.available}`}>
                                    <p>{item.price}€</p>
                                    <p>{item.available}</p>
                                </div>
                                <hr className="line" />

                                <h4>Description:</h4>
                                <h5>{item.description}</h5>
                                <hr className="line" />

                                <h4>Material:</h4>
                                <h5>{item.material}</h5>
                                <hr className="line" />

                                <h4>Measurements:</h4>
                                <h5>{item.dimensions}</h5>

                            </div>



                            <div className="col-12 col-md-6 imageBlock">
                                <img
                                    src={require('../../../images/' + item.images[numOfImg] + '')}
                                    alt={item.name + "-photo-" + 1}
                                />
                                <div className="imageRow">
                                    {item.images.map((image, i) => {

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
                }
            </div>



        </Animated>
    )
}
