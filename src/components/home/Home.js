import React, { useState } from 'react'
import "./Home.css"
import Menu from '../menuhome/Menu'
import data1 from '../../json/data1.json'
function Home() {
    const [data, setdata] = useState(data1
    )

    console.log(data)
    return (

        <div className='home'>
            <div className="coverpic">
                <h1>Tast Beyond The Table</h1>
            </div>
            <div className="about">
                <div className="pic">
                    <img src="https://finerpalate.com/wp-content/uploads/2022/08/Crudo-Snapper-800x588-1.png" alt="" />
                </div>
                <div className="disc">
                    <div className="disc1"><h1>About Us</h1>
                        <p>Finer Palate is a family-owned business that serves high-end food. We provide catering for private and corporate events, from plated dinners for 10 of your closest friends to large-scale functions with 200+ attendees.</p>
                        <a href="">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="menu"></div>
            <div className="scratch"></div>
            <div className="bluecolor">
                <div className="all-item">
                    <div className="text">
                        <h1>Lorem ipsum, dolor sit</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt aspernatur provident quidem libero aliquid saepe dolorem ea sequi incidunt!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi nulla ullam nostrum. Similique quas repudiandae at dolorum. Fugiat iste dolore numquam voluptatibus ipsum vel corporis labore blanditiis veniam quidem.</p>
                    </div>
                    <div className="photos">

                        {data.map((obj) => { return <Menu data={obj} /> })}
                    </div>
                    <div className="num">
                        <div className="even">
                            <i class="fa-solid fa-calendar-days"></i>
                            <h1>205</h1>
                            <h2>CATERED EVENTS</h2>
                        </div><div className="">
                            <i class="fa-solid fa-clock"></i>                            <h1>30</h1>
                            <h2>YEAR OF EXPERIENCE</h2>
                        </div><div className="even">
                            <i class="fa-solid fa-list"></i>
                            <h1>162</h1>
                            <h2>DISHES TO CHOOSE FROM</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home