import { Link } from "react-router-dom";


const AllToy = ({ toys }) => {
    
    const { _id, name, sub_category, available_quantity, price
    } = toys;

    return (
        <tbody>
        <tr>
            <th className="px-5 py-6">{name}</th>
            <td className="px-5 py-6">{sub_category}</td>
            <td className="px-5 py-6">{available_quantity}</td>
            <td className="px-5 py-6">{price}</td>
            <Link to={`/toydetails/${_id}`}><button className="mx-12 rounded bg-slate-700 text-white p-4 my-4">View details</button></Link> 
            
        </tr>
        </tbody>
    )
};

export default AllToy;
