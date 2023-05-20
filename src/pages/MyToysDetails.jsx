
const MyToysDetails = ({ toys }) => {
    const { name, sub_category, available_quantity, price
    } = toys;
    return (
            <tbody>
                <tr>
                    <th className="px-8 py-6">{name}</th>
                    <td className="px-8 py-6">{sub_category}</td>
                    <td className="px-8 py-6">{available_quantity}</td>
                    <td className="px-8 py-6">{price}</td>
                    <td className="px-8 py-6"><button className="">Edit</button></td>
                    <td className="px-8 py-6"><button className="">Delete</button></td>
                </tr>
          </tbody>
    );
};

export default MyToysDetails;