import React,{useState} from 'react';
import './BookingForm.css';


interface model{
    data:string[];
    updateTimes:(newTimes:string[])=>void;
}


function BookingForm(props:model) {
 
    const[date,setDate]=useState('');
    const[time,setTime]=useState('');
    const[guest,setGuest]=useState(0);
    const[occasion,setOccasion]=useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(date,time,guest,occasion);

    }




    return (
        <form className='res-form' onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setDate(e.target.value);props.updateTimes([...props.data,`${time}`])}} />
            <label htmlFor="res-time" >Choose time</label>
            <select id="res-time" value={time} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setTime(e.target.value)}>
                {props.data.map((item)=>(
                    <option key={item} value={item}>{item}</option>
                ))}
                
               
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setGuest(parseInt(e.target.value))} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" className='button-res' />
        </form>

    )
}


export default BookingForm;