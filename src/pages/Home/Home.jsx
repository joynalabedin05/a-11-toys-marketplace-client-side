import Banner from "./Banner";
import FeedBack from "./FeedBack";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import WhyCar from "./WhyCar";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ShopByCategory></ShopByCategory>
           <Gallery></Gallery>
           <WhyCar></WhyCar>
           <FeedBack></FeedBack>
        </div>
    );
};

export default Home;