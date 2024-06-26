import React, { useState } from 'react'
import './index.css'
import ArrowIcon from "./assets/icon-arrow.svg";

const App = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const [dayError, setDayError] = useState(false);
    const [monthError, setMonthError] = useState(false);
    const [yearError, setYearError] = useState(false);


    if (parseInt(day) > 31 || parseInt(day) < 1) {
        setDayError(true);
        setDay('31');
    }

    if (parseInt(month) > 12 || parseInt(month) < 1) {
        setMonthError(true);
        setMonth('12');
    }

    if (parseInt(year) > new Date().getFullYear()) {
        setYearError(true);
        setYear(new Date().getFullYear());
    }


    return (
        <div className='w-[50%] m-auto mt-20 p-9 bg-white '>
            <form >
                <div className='flex gap-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="day" className='tracking-widest font-bold text-gray-500 text-sm block mb-2'>DAY</label>
                        <input
                            value={day}
                            onChange={e => setDay(e.target.value)}
                            type="number"
                            placeholder='DD'
                            id='day'
                            className={`placeholder:font-extrabold border border-slate-300 px-3 py-2 rounded-md placeholder:text-lg w-32  focus:border-indigo-600 focus:outline-none focus:caret-indigo-600 ${dayError ? "focus:caret-red-500 focus:border-red-500" : ""} `} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="month" className='tracking-widest font-bold text-gray-500 text-sm block mb-2'>MONTH</label>
                        <input
                            value={month}
                            onChange={e => setMonth(e.target.value)}
                            type="number"
                            placeholder='MM'
                            id='month'
                            className={`${monthError ? "" : `placeholder:font-extrabold border border-slate-300 px-3 py-2 rounded-md placeholder:text-lg w-32  focus:border-indigo-600 focus:outline-none focus:caret-indigo-600`}`} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="year" className='tracking-widest font-bold text-gray-500 text-sm block mb-2'>YEAR</label>
                        <input
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            type="number"
                            placeholder='YYYY'
                            id='year'
                            className={`${yearError ? "" : `placeholder:font-extrabold border border-slate-300 px-3 py-2 rounded-md placeholder:text-lg w-32  focus:border-indigo-600 focus:outline-none focus:caret-indigo-600`}`} />
                    </div>
                </div>

                <div className='flex'>
                    <span className="block w-full border-t-[0.1px] border-slate-300 my-10"></span>
                    <button type="submit" className='bg-violet-500 p-5 rounded-full'>
                        <img src={ArrowIcon} alt="arrow" />
                    </button>
                </div>

            </form >


        </div >
    )
}

export default App