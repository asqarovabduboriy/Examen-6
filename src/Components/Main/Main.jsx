import React from 'react'
import './Main.css'
import { card__main, main_data } from '../Data/Data'

const Main = () => {
    let data = main_data?.map((el, i) => (
        <li key={i}>{el}</li>
    ))

    const card = card__main?.map((el) => (
        <div className={el.class} key={el.id}>
            <div className="main_img"><img src={el.img} alt={el.Title} /></div>
            <h4>{el.Title}</h4>
            <p>{el.item}</p>
        </div>
    ))
    return (
        <>
            <div className='container'>
                <div className='main_title'>
                    <h1>Featured Categories</h1>
                    <ul>
                        {data}
                    </ul>
                </div>
                <div className="main_card_flex">
                    {card}
                </div>
                <div className='main_card_flex_two'>
                <div className='main_card_two_section' >
                        <h2>Everyday Fresh &
                            Clean with Our
                            Products</h2>
                        <button>Buy Now</button>
                    </div>
                    <div className='main_card_two_section_one' >
                        <h2>Everyday Fresh &
                            Clean with Our
                            Products</h2>
                        <button>Buy Now</button>
                    </div>
                    <div className='main_card_two_section_two' >
                        <h2>Everyday Fresh &
                            Clean with Our
                            Products</h2>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main