import { useContext, useEffect, useState } from "react";
import MyToysDetails from "./MyToysDetails";
import { AuthContex } from "../provider/AuthProvider";
import useTitle from "../hooks/UseTitle";


const MyToys = () => {
    const {user} = useContext(AuthContex);

    const [allToys, setAllToys] = useState([]);
    // console.log(allToys);
    useTitle('My Toys')
    useEffect(() => {
        fetch(`https://a-11-toys-marketplace-server.vercel.app/myJobs/${user?.email}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [user]);

    const handleDelete=(id)=>{
        const proceed = confirm('are you sure you want to delete');
        if(proceed){
            fetch(`https://a-11-toys-marketplace-server.vercel.app/bookings/${id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount> 0){
                    alert('data deleted successfully');
                    const remaining = allToys.filter(booking=> booking._id !== id);
                    setAllToys(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h3 className="text-center text-2xl my-7 font-bold">My Added Toys </h3>
            <div className="overflow-x-auto mx-24 mb-5">
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
                        handleDelete={handleDelete}
                        ></MyToysDetails>)
                    }                                             
                </table>
            </div>
        </div>
    );
};

export default MyToys;