import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {

    const [gadgets, setGadgets] = useState([])

   useEffect(()=>{
    axios.get(`http://localhost:5000/gadgets`)
    .then(data=>{
        setGadgets(data.data)
        
    })
   },[])
    
    return (
        <section className="mt-12">
            <div className="bg-orange-400 p-5 rounded-xl">
                <h1 className="font-bold text-4xl text-center text-white mb-8">Explore our all gadgets</h1>
                
                <div className="flex flex-wrap gap-8 items-center justify-center">
                <div>
                <label htmlFor="" className="text-white">Price </label>
                <select className="select select-info w-full max-w-lg">
                    <option >Low to High</option>
                    <option>High to Low</option>
                </select>
                </div>
                <div>
                <label htmlFor="" className="text-white">Date </label>
                <select className="select select-info w-full  max-w-lg">
                    <option >Newest First</option>
                    <option>Oldest First</option>
                </select>
                </div>

                <div>
    <label htmlFor="brand" className="text-white">Brand </label>
    <select id="brand" className="select select-info w-full max-w-lg">
        <option value="All">All</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Google">Google</option>
        <option value="OnePlus">OnePlus</option>
        <option value="Xiaomi">Xiaomi</option>
        <option value="Asus">Asus</option>
        <option value="Fitbit">Fitbit</option>
        <option value="Garmin">Garmin</option>
        <option value="Amazfit">Amazfit</option>
        <option value="TicWatch">TicWatch</option>
        <option value="Fossil">Fossil</option>
        <option value="Huawei">Huawei</option>
        <option value="Withings">Withings</option>
        <option value="Honor">Honor</option>
        <option value="Suunto">Suunto</option>
        <option value="Motorola">Motorola</option>
        <option value="Realme">Realme</option>
        <option value="Sony">Sony</option>
        <option value="Oppo">Oppo</option>
        <option value="Vivo">Vivo</option>
    </select>
</div>

                <div>
                <label htmlFor="" className="text-white">Category </label>
                <select className="select select-info w-full  max-w-lg">
                    <option value="All">All</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Watch">Watch</option>
                </select>
                </div>
                </div>

                <div  className="flex flex-wrap gap-8 justify-center items-center mt-5">
                    
                <div>
                    <label htmlFor="" className="text-white block">Start Price</label>
                    <input
                        type="number"
                        name="startPrice"
                        placeholder="0"
                        className="input input-bordered input-info max-w-lg w-auto" />
                </div>
                <div>
                    <label htmlFor="" className="text-white block">End Price</label>
                    <input
                        type="number"
                        name="endPrice"
                        placeholder="1299"
                        className="input input-bordered input-info w-auto max-w-lg" />
                </div>

                <div>
                    <label htmlFor="" className="text-white block">Search by name</label>
                    <input
                        type="text"
                        name="endPrice"
                        placeholder="Samsung"
                        className="input input-bordered input-info w-auto max-w-lg" />
                </div>
                </div>

            </div>


            {/* Card */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    gadgets?.map(gadget=> <Card key={gadget._id} gadget={gadget} />)
                }
            </div>
        </section>
    );
};

export default Home;