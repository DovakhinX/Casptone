import React from 'react';
import './Confirmation.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function Confirmation (){
    return(
        <div className='box-main'>
            <Header/>
            <main>
                <p>Your Reservation was successfull</p>
            </main>

            <Footer/>

        </div>



    )

}


export default Confirmation;