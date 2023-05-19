import { useEffect, useState } from "react";
import AllToy from "./AllToy";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    // console.log(allToys);
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div>
            <div className="w-1/2 mx-auto flex gap-1 mt-5 mb-7">
                <input type="text" className="bg-gray-100 rounded p-5 w-full" name="" id="" />
                <button className="btn py-6">Search</button>
            </div>
            <div>
                <div className=" p-7  mx-20 bg-gray-200">
                    <span className="mx-14 font-bold">Toy Name</span>
                    <span className="mx-14 font-bold">Sub-category</span>
                    <span className="mx-14 font-bold">Available Quantity</span>
                    <span className="mx-14 font-bold">Price</span>
                    <span className="mx-14 font-bold">Button</span>


                    {
                        allToys.map(alltoy => <AllToy
                            key={alltoy._id}

                            alltoy={alltoy}
                        ></AllToy>)
                    }

                </div>


            </div>

        </div>
    );
};

export default AllToys;