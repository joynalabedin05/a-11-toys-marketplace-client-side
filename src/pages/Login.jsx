import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import useTitle from "../hooks/UseTitle";
// import { useState } from "react";


const Login = () => {
    const {signIn, googleSignin} = useContext(AuthContex);
    // const [user, setUser] = useState();
    useTitle('login');
    const location  = useLocation();
    // console.log(location);
    const from = location.state?.from?.pathname || '/';
    const nagivate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            nagivate(from, {replace: true});
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleGoogle = ()=>{
        googleSignin()
        .then(result=>{
            const user = result.user;
            console.log(user);
            nagivate(from, {replace: true});

        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className=" bg-base-200 py-8">
            <div className="md:w-1/2 mx-auto ">
                <h4 className=" text-center font-bold text-4xl mb-6">Please Login?</h4>
                <div className="card pb-8 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body w-full">
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
                            <input type="password"  name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        
                      
                    </form>
                    <div className="flex flex-col md:w-1/2 mx-auto mt-4 border-opacity-50">
                            <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                            <div>
                            <h3>Dont have any account? <Link className="text-blue-900  text-xl font-bold" to='/register '>Register</Link> </h3>
                            </div>
                            </div>
                            <div className="divider">OR</div>
                            <div className="grid p-3  card bg-base-300 rounded-box place-items-center">
                                <button onClick={handleGoogle} className=" text-xl font-bold w-full">Google SignIn</button>
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;