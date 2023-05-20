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
      <div className="navbar bg-base-100 p-12">
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
              <button>LouOut</button> :
              <li><Link to='/login'>Login</Link></li>
            }

          </ul>
        </div>
        <Link className="">
          <img className='w-32' src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><Link to='/'>Home</Link></li>
          <li tabIndex={0}>
          <Link to='/allToys'>All Toys</Link>
           
          </li>
          <li><Link to='/blogs'>Blogs</Link></li>
          {
              user? 
              <div className='flex'>
                <span className='mx-3 tooltip' data-tip={user?.displayName}><img className='w-14' src={user?.photoURL} alt="" /></span>
                <Link>My Toys</Link>
                <Link to='/books' className='mx-3'>Add a Toys</Link>
                <button onClick={logout}>LouOut</button>
              </div> :
              <li><Link to='/login'>Login</Link></li>
            }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
    );
};

export default Navbar;