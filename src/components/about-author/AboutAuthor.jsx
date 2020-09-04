import React from 'react'
import autorImg from './autor.jpg'
import materialsImg from './materials.jpg'
import { Animated } from 'react-animated-css'

export default function AboutAuthor({getSelected}) {
    const blocks = {
        autor: {
            title: 'About author',
            img: autorImg,
            text1: 'My name is Natalia. I am the author and creator of a jewelry brand titled Natali Borei. The artwork for me is a sense of being, a desire of creativity going on outside of space and time.',
            text2: 'I call my artwork etudes as the stories narrated by beads because each article has its personal storyline and an idea that has been born as a result of a unique flow of creative inspiration.',
            text3: 'This flow is alike to the wind – soft and self-governed. That is why, the brand title is Borei – northern wind that comes from mysterious and legendary Hyperborei bearing aurora borealis sparkles around the globe to bring the more light and fairy tale worldwide.',
        },
        materials: {
            title: 'Materials',
            img: materialsImg,
            text1: 'Each beads story exists and lives on due to the unique design and implementation thereof. Technique combination of beads wickerwork, embroidery and needlework by luvinel hook makes an article to look as voluminous and eye-catching.',
            text2: 'A beads story would sound bright because jewelry articles are made of LUX materials such as: crystals and pearls Swarovski, Japanese beads (as well as gold coated), French sequins, tinsel thread - all that makes an article to look like as jewelry artwork.',
            text3: 'For the conception and the creative idea to come true the articles are often made of semi-precious stones and natural pearls.',
        }
    }

    return (
        <Animated className="container About">
      
        
            <div className="row">
                <div className=" col-12">
                    <div className="row">
                        <div className="col-xl-7 textAbout">
                            <h2>{blocks.autor.title}</h2>
                            <p>{blocks.autor.text1}</p>
                            <p>{blocks.autor.text2}</p>
                            <p>{blocks.autor.text3}</p>
                        </div>
                        <div className="col-xl-5 imgAbout"><img src={blocks.autor.img} alt="autor" />
                        </div>
                    </div>
                </div>
                <div className=" col-12">
                    <div className="row">
                        <div className="col-lg-5 imgAbout"><img src={blocks.materials.img} alt="materials" />
                        </div>
                        <div className="col-lg-7 textAbout">
                            <h2>{blocks.materials.title}</h2>
                            <p>{blocks.materials.text1}</p>
                            <p>{blocks.materials.text2}</p>
                            <p>{blocks.materials.text3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Animated>
    )
}
