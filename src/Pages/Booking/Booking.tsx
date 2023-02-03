import React, { useReducer } from 'react';
import './Booking.css';
import { useNavigate } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import image from '../../assets/reserve.jpg';
import BookingForm from './BookingForm/BookingForm';
import { fetchAPI, submitAPI } from '../../../public/api';


export interface State {

    availableTimes: string[];
}

export interface formData {
    date: Date;
    time: string;
    guest: number;
    occasion: string;
}

interface Action {
    type: 'SET_DATE';
    date: Date;
}

interface BookingProps {

}


const initialState: State = {
    availableTimes: [],
};

export type Dispatch = React.Dispatch<Action>;

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_DATE':
            return {
                ...state,
                availableTimes: getAvailableTimes(action.date),
            };
        default:
            return state;
    }
}

function getAvailableTimes(date: Date): string[] {
    return fetchAPI(date);
}






function Booking({ }: BookingProps) {
    const navigate = useNavigate();

    function submitForm(data: formData) {
        submitAPI(data) ? navigate('/confirm') : alert("Your request Failed!!");


    }


    const [state, dispatch] = useReducer(reducer, initialState);









    return (
        <div className='main box'>
            <Header />
            <main className='res'>
                <div className='res-box'>
                    <p className='res-head'>Reserve your Table</p>
                    <BookingForm state={state} dispatch={dispatch} onSubmit={submitForm} />
                </div>
                <img src={image} className="filler-img" />
            </main>
            <Footer />
        </div>

    )
}

export default Booking;