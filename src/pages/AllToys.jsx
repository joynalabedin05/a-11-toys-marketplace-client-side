import { useEffect, useState } from "react";
import AllToy from "./AllToy";
import useTitle from "../hooks/UseTitle";
// import MyToysDetails from "./MyToysDetails";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]); 
    // console.log(allToys);
    useTitle('All Toys')
    useEffect(() => {
        fetch('https://a-11-toys-marketplace-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    // console.log(toys);
    return (
        <div>
            <div className="w-1/2 mx-auto flex gap-1 mt-2 mb-10">
                <input type="text" className="bg-gray-100 rounded p-3 w-full" name="" placeholder="i.e SEARCH  Ascending or descending" id="" />
                <button className="btn mx-2 py-6">Search</button>
            </div>          
            <div className="overflow-x-auto mx-32">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>  
                            <th>Toy Name</th>
                            <th>Sub category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th><button className="ml-16">BUTTON</button></th>
                            
                        </tr>
                    </thead>
                    {
                        allToys.map(toys=> <AllToy
                        toys={toys}
                        key={toys._id}
                        ></AllToy>)
                    }                                             
                </table>
            </div>
        </div>
    );
};

export default AllToys;