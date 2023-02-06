import React from 'react';
import './Confirmation.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import img from "../../assets/reserve2.jpg";


function Confirmation (){
    return(
        <div className='box-main'>
            <Header/>
            <main className='final'>
                <p className='finaltxt'>Your Reservation was successfull !!</p>
                <img src={img} height={300} className='finalimg'/>
            </main>

            <Footer/>

        </div>



    )

}


export default Confirmation;