import * as React from 'react';
import './About.css';
import Header from '../../Components/Header/Header';
import image from '../../assets/chef.jpg';
import Footer from '../../Components/Footer/Footer';


function About() {




    return (
        <div className='whole'>
            <Header />
            <main>
                <div className='mainbox'>
                    <div className='contextbox'>
                        <p className='about-head'>About us</p>
                        <p className='about-cont'>
                            Welcome to Little Lemon Restaurant, located in the heart of Chicago. We are a family-owned and operated business that has been serving delicious, authentic Mediterranean cuisine for over 10 years.

                            Our menu features a wide variety of dishes, including traditional favorites such as falafel, shawarma, and hummus, as well as creative, contemporary options that incorporate the freshest, locally-sourced ingredients.

                            Our chefs, who are from Mediterranean countries, are passionate about cooking and are dedicated to providing our guests with a memorable dining experience. We use only the highest quality ingredients, and we make everything from scratch, including our sauces and dressings.

                            In addition to our delicious food, we offer a warm and inviting atmosphere that is perfect for casual dining, special occasions, and group events. Our friendly staff is always happy to help you choose the perfect dish for your taste and dietary needs.

                            We are open for lunch and dinner, seven days a week. We also have a catering service available for any occasion.

                            Thank you for choosing Little Lemon Restaurant. We look forward to serving you soon!

                        </p>
                    </div>
                    <div className='picbox'>
                        <img src={image} height={'350'} className='filler' />
                    </div>
                </div>
            </main>
            <Footer />





        </div>


    )




}

export default About;