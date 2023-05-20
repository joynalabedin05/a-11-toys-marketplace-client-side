import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
   const toys = useLoaderData();
   console.log(toys._id);
    return (
        <div className="mx-16 my-6">
            <div className="bg-slate-500 p-12 mx-auto rounded text-white">
                <img className="rounded mb-3" src={toys.picture} alt="" />
                <h4 className="text-xl font-bold">Name: {toys.toy_name}</h4>
                <p>Price: {toys.price}</p>
                <p>Available quantity: {toys.available_quantity}</p>
                <p>Rating: {toys.rating}</p>
                
            </div>
            
        </div>
    );
};

export default ToysDetails;