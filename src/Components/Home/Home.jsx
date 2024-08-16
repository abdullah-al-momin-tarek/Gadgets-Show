import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {

    const [gadgets, setGadgets] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [priceOrder, setPriceOrder] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const [brand, setBrand] = useState("")
    const [dateSort, setDateSort] = useState("newestFirst")
    const count = 40;
    const itemPerPage = 9;
    const totalPage = Math.ceil(count / itemPerPage);

    const pages = []
        for(let i = 0; i<totalPage; i++){
            pages.push(i)
        }
        // Previous btn
        const handlePrevious = () =>{
            if(currentPage >0){
                setCurrentPage(currentPage -1)
            }
        }
        // Next btn
        const handleNext = () =>{
            if(currentPage < pages.length-1 ){
                setCurrentPage(currentPage+1)
            }
        }
        // Search
        const searchName = e =>{
            e.preventDefault()
            setSearch(e.target.value)
            
        }
        // Price sort
        const handlePriceOrder= e =>{
            setPriceOrder(e.target.value)
            
        }
        // Date sort
        const handleDateSort = e =>{
            setDateSort(e.target.value)
            
        }

        // category
        const handleCategory = e =>{
            setCategory(e.target.value)
            console.log(e.target.value);
            
        }
        // Brand
        const handleBrand = e =>{
            setBrand(e.target.value);
        }

        const handlePriceRange = e =>{
            setPriceRange(e.target.value)
        }
        
    console.log("test", gadgets);
    

   useEffect(()=>{
   
    axios.get(`https://gadgets-show-server.vercel.app/gadgets`, {
        params: {
            page: currentPage,
            size: itemPerPage,
            search: search,
            priceOrder: priceOrder,
            dateSort: dateSort,
            category: category,
            brand: brand,
            priceRange: priceRange
        }
    })
    .then(data=>{
        setGadgets(data.data)
        
    })
   },[brand, category, currentPage, dateSort, priceOrder, priceRange, search])
   
    
    return (
        <section className="mt-12">
            <div className="bg-orange-400 p-5 rounded-xl">
                <h1 className="font-bold text-4xl text-center text-white mb-8">Explore our all gadgets</h1>
                
                <div className="flex flex-wrap gap-8 items-center justify-center">
                <div>
                <label htmlFor="" className="text-white">Price </label>
                <select value={priceOrder} onChange={handlePriceOrder} className="select select-info w-full max-w-lg">
                    <option disabled value="">Select Order</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
                </div>
                <div>
                <label htmlFor="" className="text-white">Date </label>
                <select value={dateSort} onChange={handleDateSort} className="select select-info w-full  max-w-lg">
                    <option value="newetsFirst">Newest First</option>
                    <option value="oldestFirst">Oldest First</option>
                </select>
                </div>

                <div>
    <label htmlFor="brand" className="text-white">Brand </label>
    <select value={brand} onChange={handleBrand} id="brand" className="select select-info w-full max-w-lg">
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
                <select value={category} onChange={handleCategory} className="select select-info w-full  max-w-lg">
                    <option value="All">All</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Watch">Watch</option>
                </select>
                </div>
                </div>

                <div  className="flex flex-wrap gap-8 justify-center items-center mt-5">
                    
                <div>
                <label htmlFor="" className="text-white">Price Range </label>
                <select value={priceRange} onChange={handlePriceRange} className="select select-info w-full  max-w-lg">
                    <option value="All">All</option>
                    <option value="50to199">50$ - 199$</option>
                    <option value="200to399">200$ - 399$</option>
                    <option value="400to599">400$ - 599$</option>
                    <option value="600to799">600$ - 799$</option>
                    <option value="800to1000">800$ - 1000+$</option>
                </select>
                </div>

                <div>
                    <label htmlFor="" className="text-white block">Search by name</label>
                    <input onChange={searchName}
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


            {/* pagination */}
            <div className="flex justify-center space-x-1 mt-5">
	<button onClick={handlePrevious} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-slate-700 text-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
        pages.map(page=><button key={page} type="button" onClick={()=>setCurrentPage(page)} className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md  text-white ${page ===currentPage ? "bg-orange-500 " : "bg-slate-700"}`} title="Page 4">{page}</button>)
    }
	
	<button onClick={handleNext} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-slate-700 text-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
</div>

        </section>
    );
};

export default Home;