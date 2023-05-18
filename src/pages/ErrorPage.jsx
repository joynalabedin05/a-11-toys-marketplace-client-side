import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img className="w-100 h-[500px]" src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="" />
           <div className="bg-red-300 p-5 m-8 w-48 text-2xl rounded">
             <Link to={'/'}>Back to home</Link>
           </div>
        </div>
    );
};

export default ErrorPage;