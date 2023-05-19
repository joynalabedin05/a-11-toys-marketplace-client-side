import { Link } from "react-router-dom";


const AllToy = ({ alltoy }) => {
    
    const { _id, name, sub_category, available_quantity, price
    } = alltoy;


    return (
        <div>
           
            <div>
                <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{name}</span>
                <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{sub_category}</span>
                <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{available_quantity
                }</span>
                <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{price}</span>
                <Link to={`/toydetails/${_id}`}><button className="mx-12 rounded bg-slate-700 text-white p-4 my-4">View details</button></Link>
            </div>


        </div>
    )
};

export default AllToy;