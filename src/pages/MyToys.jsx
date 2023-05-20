import { useEffect, useState } from "react";
import MyToysDetails from "./MyToysDetails";


const MyToys = () => {
    const [allToys, setAllToys] = useState([]);
    // console.log(allToys);
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);
    return (
        <div>
            <h3 className="text-center text-2xl my-7 font-bold">My Added Toys </h3>
            <div className="overflow-x-auto mx-14">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>  
                            <th>Toy Name</th>
                            <th>Sub category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Button</th>
                            <th>Button</th>
                            
                        </tr>
                    </thead>
                    {
                        allToys.map(toys=> <MyToysDetails
                        toys={toys}
                        key={toys._id}
                        ></MyToysDetails>)
                    }                                             
                </table>
            </div>
        </div>
    );
};

export default MyToys;