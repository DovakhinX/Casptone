import React, { useState } from 'react';
import './BookingForm.css';
import { State, Dispatch, formData } from '../Booking';




interface FormProps {
    state: State;
    dispatch: Dispatch;
    onSubmit: (data: formData) => void;
}



function BookingForm({ state, dispatch, onSubmit }: FormProps) {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');


    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        let errors: { [key: string]: string } = {};
        if (!time) {
            errors.time = "Time is required";
        }
        if (!date) {
            errors.date = "Date is required";
        }
        if (guest < 2 || guest > 10) {
            errors.guestCount = "Guest count must be between 2 and 10";
        }
        if (!occasion) {
            errors.occasion = "Occasion is required";
        }
        if (Object.keys(errors).length === 0) {
            onSubmit({ time, date, guest, occasion });

        } else {
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    alert(errors[key]);

                }
            }
        }



    }



    return (
        <form className='res-form' onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"  id="res-date" value={date.toISOString().substring(0, 10)} onChange={(event) => {
                setDate(new Date(event.target.value));
                dispatch({ type: 'SET_DATE', date: new Date(event.target.value) })
            }} />
            <label htmlFor="res-time" >Choose time</label>
            <select id="res-time" value={time} onChange={(event) => setTime(event.target.value)}>
                {state.availableTimes.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}


            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGuest(parseInt(e.target.value))} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOccasion(e.target.value)}>
                <option value={'Birthday'}>Birthday</option>
                <option value={'Anniversary'}>Anniversary</option>
            </select>
            <button type="submit" className='button-res' aria-label="On Click" > Make Your reservation </button>
        </form>

    )
}


export default BookingForm;