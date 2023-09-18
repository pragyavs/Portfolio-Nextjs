import axios from 'axios';
import Head from 'next/head'
import Animation from './Animation';
import MyImage from './image';
import React, { useState } from 'react';
import { weatherApiApp } from '@/config/config';


export default function Weather() {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState(null);
    const [isDate, setDate] = useState('');
    const [sunrise, Sunrises] = useState(null);
    const [sunset, Sunsets] = useState(null);
    const [message, Data] = useState(null);
    const [lat, setLat] = useState([]);
    const [lon, setLong] = useState([]);
    const [description, descript] = useState([]);
    const [error, setError] = useState('');
    const getWeather = async () => {
        try {
            const apiKey = weatherApiApp;
            console.log(apiKey);
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: { q: city, units: 'metric', appid: apiKey },
            });
            const latitude = response.data.coord.lat;
            const longitude = response.data.coord.lon;
            const temperature = response.data.main.temp;
            const Date = response.data.main.isDate;
            const Sunrise = response.data.sys.sunrise;
            const Sunset = response.data.sys.sunset;
            const d = response.data.message;
            const desc = response.data.weather[0].description;
            console.log("Response Data: ", response.data)
            console.log("Desc: ", description)
            console.log(Sunrise)
            setTemp(temperature);
            descript(desc);
            setDate(Date);
            Data(message)
            setLat(latitude);
            setLong(longitude);
            Sunrises(Sunrise);
            Sunsets(Sunset);

        } catch (error) {
            console.error("Error:", error);
            setError('The entered city is not correct.');
        }
    };
    function moment() {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <Head>
                <title>Weather Forecast</title>
                <link rel="icon" href="/storm.png" />
                <meta name="description" content="Weather Forcast site "></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta property="og:title" content="Pragya Singh" key="ogtitle" />
                <meta property="og:description" content="A Backend Developer and a youtuber" key="ogdesc" />
                <meta name="twitter:card" content="Weather Forecast"></meta>
                <meta name="whatsapp:card" content="Weather Forecast"></meta>
                <meta name="instagram:card" content="Weather Forecast"></meta>
            </Head>
            <div className="w-full h-screen font-bodyFont bg-bodyColor text-white
        overflow-x-hidden overflow-y-scroll">
                <section className="max-w-containerSmall mx-auto py-10 lgl:py-33 flex flex-col gap-8 items-center ">
                    <h1 className="font-titleFont text-5xl font-semibold flex items-center justify-between p-5">Weather Forecast</h1>
                    <div>
                        <Animation />
                    </div>
                    <div className="flex sm:flex-col">
                        <input
                            type="text"
                            placeholder='City You want to search'
                            className='px-2 py-1 rounded-md text-textGreen text-[25px] border border-textGreen hover:bg-hoverColor duration-300 p-2'
                            onChange={e => setCity(e.target.value)}
                        />
                        <br></br>
                        <button
                            onClick={getWeather}
                            className="px-2 py-1 rounded-md text-textGreen text-[25px]  flex border border-textGreen hover:bg-hoverColor duration-300 p-2">
                            Search
                        </button>
                    </div>
                    <br></br>


                    <div>
                        <h2 className='font-titleFont text-3xl font-semibold flex items-center justify-between p-5'>"Embrace the elements and plan your day with nature's script in mind."</h2>
                    </div>

                    {temp && lat && lon && sunrise && sunset && description ? (
                        <div className='bg-[#112240] text-sm md:text-base p-8 md:p-9 rounded-md'>
                            <MyImage />

                            <div className="w-full h-50 rounded-lg text-3xl bg-black p-9 text-center flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 display: flex align-items: flex-start">
                                <p>Message:{message}</p>
                                <p>Temperature : {temp} ° C</p>
                                <p>Sunrise : {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                <p>Sunset : {new Date(sunset * 1000).toLocaleTimeString('en-IN')}</p>
                                <p>Latitude : {lat}</p>
                                <p>Longitude : {lon}</p>
                                <p>Description : {description}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='bg-[#112240] text-sm md:text-base p-8 md:p-9 rounded-md'>
                            <div className="w-full h-50 rounded-lg text-3xl bg-black p-9 text-center flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 display: flex align-items: flex-start">
                                {error ? (
                                    <p>{error}</p>
                                ) :
                                    <p>Welcome</p>}
                            </div>
                        </div>

                    )}

                </section>


            </div>
        </>
    );

};
