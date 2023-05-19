import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className=" bg-base-200 py-8">
            <div className="md:w-1/2 mx-auto ">
                <h4 className=" text-center font-bold text-4xl mb-6">Please Login?</h4>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        
                        <div className="flex flex-col md:w-1/2 mx-auto mt-4 border-opacity-50">
                            <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                            <div>
                            <h3>Dont have any account? <Link className="text-blue-900  text-xl font-bold" to='/register '>Register</Link> </h3>
                            </div>
                            </div>
                            <div className="divider">OR</div>
                            <div className="grid p-3  card bg-base-300 rounded-box place-items-center">
                                <button className=" text-xl font-bold w-full">Google SignIn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;