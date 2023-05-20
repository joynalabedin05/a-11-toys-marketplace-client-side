import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const AddAToy = () => {
    const { user } = useContext(AuthContex);
    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.sellername.value;
        const price = form.price.value;
        const subCategory = form.subcategory.value;
        const ratinng = form.rating.value;
        const email = form.email.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        const booking = {
            name,price,subCategory,ratinng,email,availableQuantity,description
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('data added successfully')
            }
        })
    }
    return (
        <div className="mx-14">
            <h3 className="text-center text-3xl">Book service</h3>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellername" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="i.e $15.67" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name="subcategory" placeholder="i.e sports car" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" placeholder="ie 4.5" name="rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="i.e  7" name="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-block" value="Add to Cart" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default AddAToy;