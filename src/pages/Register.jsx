import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContex);
    const [error, setError] =useState();
    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,password, photo);

        if(password.length< 6){
            return setError('Password must be 6 characters')
        }

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
   
    return (
        <div className=" bg-base-200 py-8">
            <div className="md:w-1/2 mx-auto ">
                <h4 className=" text-center font-bold text-4xl mb-6">Please Register?</h4>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body  w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name"  required placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email"  required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Register" />
                        </div>
                        <p className="text-xl text-red-600">
                            {error}
                        </p>
                        
                        <div className="flex flex-col md:w-1/2 mx-auto mt-4 border-opacity-50">
                            <div className="grid w-full p-3 card bg-base-300 rounded-box place-items-center">
                            <div>
                            <h3>Already have any account? <Link className="text-blue-900  text-xl font-bold" to='/login '>Login</Link> </h3>
                            </div>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;