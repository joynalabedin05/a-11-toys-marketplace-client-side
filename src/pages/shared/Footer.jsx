import logo from '../../../public/norev.png';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
       <div>
         <footer className="footer p-16 bg-base-200 text-base-content">
            <div>
                <p> 
                <img className='w-16 mb-3' src={logo} alt="" />
               NOREV Industries Ltd.<br />Providing reliable CARS since 1992</p>
            </div>
            <div>
                <span className="footer-title">Contact us</span>
                <a className="link link-hover">Mail: hellow@norev.com</a>
                <a className="link link-hover">Tel: +33(0)43774566</a>
                <a className="link link-hover">(9h-12h)(14h-17h)</a>
            </div>
            <div>
                <span className="footer-title">Norev</span>
                <a className="link link-hover">Our store</a>
                <a className="link link-hover">Delivery and Returns</a>
                <a className="link link-hover">GTC</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div >
                <span className="footer-title">Follow us on</span>
               <div className='flex gap-5'>
               <a className="link link-hover"><FaFacebook /></a>
                <a className="link link-hover"><FaTwitter /></a>
                <a className="link link-hover"><FaInstagram /></a>
                <a className="link link-hover"><FaLinkedin /></a>
               </div>
            </div>
        </footer>
        <div className='bg-slate-600 w-1/2 mx-auto h-[3px]'>
            <hr />
        </div>
        <div className='my-6 text-center'>
            All rights reserved by @ Norev Industries Ltd developed by tecnical team in 1992 
        </div>
       </div>
    );
};

export default Footer;