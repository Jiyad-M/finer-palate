import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className="a">
                <h1>Contact Us to Book a Culinary Experience</h1>
                <p>Finer Palate is a versatile, trusted caterer based in Richmond, Virginia.  We offer exclusive catering for all types of events.  Need a caterer you can trust for your next event?  Get in touch with us to book a culinary experience you’ll never want to forget.  Whatever vision you have for your event, we’ll turn it into a reality.  Get in touch today.

                </p>
            </div>
            <div className="b">
                <div className="b1">
                    <h1>Phone</h1>
                    <p>8547989535</p>
                </div>
                <div className="b1">
                    <h1>Email</h1>
                    <p>jiyad8201@gmail.com</p>
                </div>
                <div className="b1">
                    <h1>Follow Us</h1>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-solid fa-square-xmark"></i>
                </div>

            </div>
            <div className="c">
                <form action="" method="post">
                    <label htmlFor="name">Name</label>
                    <input placeholder='Jiyad' name='name' type="text" /> 
                    <label htmlFor="email">Email</label>

                    <input placeholder='jiyad@gmail.com' id='email' name='email' type="email" />
                    <label htmlFor="phone">Phone</label>
                <input placeholder='08547989535' name='phone' type="tel" />
                <label htmlFor="message">message</label>
                    <input className='big' id='message' placeholder='message' name='message' type="text" />

                    <button type="submit">Send</button>
                </form>
                <img src="https://finerpalate.com/wp-content/uploads/2022/08/Pork-Belly-4-600x600-1.png" alt="" />



            </div>

        </div>
    )
}

export default Contact