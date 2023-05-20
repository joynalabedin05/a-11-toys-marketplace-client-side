import { Link } from 'react-router-dom';
import logo from '../../../public/norev.png';
import { useContext } from 'react';
import { AuthContex } from '../../provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContex);
  const logout =()=>{
    logOut();
  }
    return (
      <div className="navbar bg-base-100 px-12 my-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li tabIndex={0}>
              <a className="justify-between">
                About
              
              </a>
             
            </li>
            <li><Link to='/blogs'>Blogs</Link></li>
            {
              user? 
              <li><button>LouOut</button></li> :
              <li><Link to='/login'>Login</Link></li>
            }

          </ul>
        </div>
        <Link className="flex gap-2">
          <img className='w-8' src={logo} alt="" />
          <h3 className='font-bold text-2xl'><span className='text-4xl text-blue-700'>N</span>OREV</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
        <li><Link to='/'>Home</Link></li>
          <li tabIndex={0}>
          <Link to='/allToys'>All Toys</Link>
           
          </li>
          <li><Link to='/blogs'>Blogs</Link></li>
          {
              user? 
              <div className='flex'>
                <span className=' tooltip' data-tip={user?.displayName}><img className='w-10' src={user?.photoURL} alt="" /></span>
               <li> <Link to='/books'>Add a Toys</Link></li>              
                <li><Link to='/mytoys'>My Toys</Link></li>
                <button onClick={logout}>LouOut</button>
              </div> :
              <li><Link to='/login'>Login</Link></li>
            }
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn sm:d-none">Get started</a>
      </div>
    </div>
    );
};

export default Navbar;