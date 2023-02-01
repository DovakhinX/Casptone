import React, { useReducer} from 'react';
import './Booking.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import image from '../../assets/reserve.jpg';
import BookingForm from './BookingForm/BookingForm';


interface TimeAction {
    type:string;
    payload:string[];
}


const availableTimesReducer=(state:string[],action:TimeAction)=>{
    switch(action.type){
        case 'INITIALIZE':
            return action.payload;
            case 'UPDATE':
                return action.payload;
                default:
                    return state;
    }
};



function Booking() {

    const [availableTimes, dispatch] = useReducer(availableTimesReducer,[]);

    const intializeTimes=()=>{
        dispatch({type:'INITIALIZE',payload:["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]});
    };

    const updateTimes=(newTimes:string[])=>{
        dispatch({type:'UPDATE',payload:newTimes});
    };




 




    return (
        <div className='main box'>
            <Header />
            <main className='res'>
                <div className='res-box'>
                    <p className='res-head'>Reserve your Table</p>
                    <BookingForm data={availableTimes} updateTimes={updateTimes}/>
                </div>
                <img src={image} className="filler-img" />
            </main>
            <Footer />
        </div>

    )
}

export default Booking;