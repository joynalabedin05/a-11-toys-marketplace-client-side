import { useEffect, useState } from "react";
import AllToy from "./AllToy";
// import MyToysDetails from "./MyToysDetails";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]); 
    // console.log(allToys);
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);

    // console.log(toys);
    return (
        <div>
            <div className="w-1/2 mx-auto flex gap-1 mt-5 mb-7">
                <input type="text" className="bg-gray-100 rounded p-5 w-full" name="" id="" />
                <button className="btn py-6">Search</button>
            </div>          
            <div className="overflow-x-auto mx-14">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>  
                            <th>Toy Name</th>
                            <th>Sub category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Button</th>
                            
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