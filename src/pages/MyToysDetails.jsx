import { Link } from "react-router-dom";

const MyToysDetails = ({ toys, handleDelete }) => {
    const {_id, name, sub_category, available_quantity, price
    } = toys;
    return (
            <tbody>
                <tr>
                    <th className="px-8 py-6">{name}</th>
                    <td className="px-8 py-6">{sub_category}</td>
                    <td className="px-8 py-6">{available_quantity}</td>
                    <td className="px-8 py-6">{price}</td>
                    <td className="px-8 py-6"><Link to={`/update/${_id}`}>Edit</Link></td>
                    <td className="px-8 py-6"><button onClick={()=>handleDelete(_id)}>Delete</button></td>
                </tr>
          </tbody>
    );
};

export default MyToysDetails;