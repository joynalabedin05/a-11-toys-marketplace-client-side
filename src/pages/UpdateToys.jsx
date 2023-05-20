import { useLoaderData } from "react-router-dom";


const UpdateToys = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    const handleUpdate =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const available_quantity
        = form.quantity.value;
        const description = form.description.value;
        const updatedData = {name, price,available_quantity,description};

        console.log(updatedData);

        fetch(`http://localhost:5000/alltoys/${loadedData._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
              },
            body: JSON.stringify(updatedData)  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('data updated succefully');
            }
        })

    }
    return (
        <div className="mx-16 my-8 text-center">
             <h2 className="text-center my-8 font-bold text-3xl">Update Toy: {loadedData.name}</h2> 
           <form onSubmit={handleUpdate}>
            <h2 className="font-bold">Car Name</h2>
            <input className="px-5 py-3 bg-gray-200 my-2 rounded" type="text" name="name" defaultValue={loadedData?.name} id="" />
            <h2 className="font-bold">Price</h2>

            <input className="px-5 py-3 bg-gray-200 my-2 rounded" type="text" name="price" defaultValue={loadedData?.price} id="" />
            <h2 className="font-bold">Availabe Quantity</h2>

            <input className="px-5 py-3 bg-gray-200 my-2 rounded" type="text" name="quantity" defaultValue={loadedData?.available_quantity} id="" />

            <h2 className="font-bold">Description</h2>
            <input className="px-5 py-3 bg-gray-200 my-2 rounded" type="text" name="description" id="" /> <br />
            
            <input className="btn px-6" type="submit" value="update" />
           </form>
        </div>
    );
};

export default UpdateToys;