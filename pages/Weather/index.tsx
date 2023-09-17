import axios from 'axios';
import Animation from './Animation';
import { useState } from 'react';
import { weatherApiApp } from '@/config/config';


export default function Weather() {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState(null);
    const [isDate, setDate] = useState('');
    const [sunrise, Sunrises] = useState(null);
    const [sunset, Sunsets] = useState(null);
    const [lat, setLat] = useState([]);
    const [lon, setLong] = useState([]);
    const [description, descript] = useState([]);
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
            const desc = response.data.weather[0].description;
            console.log("Response Data: ", response.data)
            console.log("Desc: ", description)
            console.log(Sunrise)
            setTemp(temperature);
            descript(desc);
            setDate(Date);
            setLat(latitude);
            setLong(longitude);
            Sunrises(Sunrise);
            Sunsets(Sunset);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    function moment() {
        throw new Error('Function not implemented.');
    }

    return (

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
                        className='px-4 py-2 rounded-md text-textGreen text-[35px] border border-textGreen hover:bg-hoverColor duration-300 p-5'
                        onChange={e => setCity(e.target.value)}
                    />
                    <br></br>
                    <button
                        onClick={getWeather}
                        className="px-2 py-1 rounded-md text-textGreen text-[35px]  flex border border-textGreen hover:bg-hoverColor duration-300 p-2">
                        Search
                    </button>
                </div>
                <br></br>


                <div>
                    <h2 className='font-titleFont text-3xl font-semibold flex items-center justify-between '>"Embrace the elements and plan your day with nature's script in mind."</h2>
                </div>
                {temp && lat && lon && sunrise && sunset && description && (
                    <div className='bg-[#112240] text-sm md:text-base p-8 md:p-9 rounded-md'>

                        <div className="w-full h-50 rounded-lg text-3xl bg-black p-9 text-center flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 display: flex align-items: flex-start">
                            <p>Temperature : {temp} ° C</p>
                            <p>Sunrise : {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                            <p>Sunset : {new Date(sunset * 1000).toLocaleTimeString('en-IN')}</p>
                            <p>Latitude : {lat}</p>
                            <p>Longitude : {lon}</p>
                            <p>Description : {description}</p>
                        </div>


                    </div>)}

            </section>


        </div>

    );

};
