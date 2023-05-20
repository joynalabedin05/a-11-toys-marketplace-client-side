
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
    return (
       <div>
        <h3 className='text-center mt-10 mb-10 text-4xl text-orange-800'>Tab category </h3>
         <div className='md:mx-16 mt-12 bg-slate-600 text-white p-5 text-xl rounded  font-semi-bold'>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                <TabPanel>
                    <div className='md:flex gap-10'>
                    <div className='space-y-3'>
                        <img className='rounded' src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg" alt="" />
                       <div className='text-center space-y-3'>
                       <h3 className='text-3xl'>Ferrari Monza SP1 </h3>
                        <p>Price: $1200</p>
                        <p> Rating: 4.4</p>
                        <button className='btn-primary p-3 rounded'>View Details</button>
                       </div>
                    </div>
                    <div className='space-y-3'>
                        <img className='rounded' src="https://is2-ssl.mzstatic.com/image/thumb/Purple/v4/d4/36/4f/d4364fe8-c931-ff9c-f0ab-e43bacad554c/source/256x256bb.jpg" alt="" />
                        <h3 className='text-3xl'>CAMITOY Sports Racing Car</h3>
                        <p>Price: $1400</p>
                        <p> Rating: 4.8</p>
                        <button className='btn-primary p-3 rounded'>View Details</button>
                    </div> 
                    </div>
                </TabPanel>
                <TabPanel className='space-x-4 mt-5'>
                <div className='md:flex gap-10'>
                    <div className='space-y-3'>
                        <img className='rounded' src="https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg" alt="" />
                       <div className='text-center space-y-3'>
                       <h3 className='text-3xl'>Melissa & Doug</h3>
                        <p>Price: $1200</p>
                        <p> Rating: 4.4</p>
                        <button className='btn-primary p-3 rounded'>View Details</button>
                       </div>
                    </div>
                    <div className='space-y-3'>
                        <img className='rounded' src="https://is2-ssl.mzstatic.com/image/thumb/Purple/v4/d4/36/4f/d4364fe8-c931-ff9c-f0ab-e43bacad554c/source/256x256bb.jpg" alt="" />
                        <h3 className='text-3xl'>Toy Vehicles</h3>
                        <p>Price: $1400</p>
                        <p> Rating: 4.8</p>
                        <button className='btn-primary p-3 rounded'>View Details</button>
                    </div> 
                    </div>
                    
                </TabPanel>
                <TabPanel className='space-x-4 mt-5'>
                <div className='md:flex gap-10'>
                    <div className='space-y-3'>
                        <img className='rounded' src="https://media.istockphoto.com/id/942526180/photo/3d-illustration-of-red-generic-sports-coupe-car-on-white.jpg?b=1&s=170667a&w=0&k=20&c=20pAee_2L6MedJRWnL7gU8lI5mH-S1JWMNaUiP40qpo=" alt="" />
                       <div className='text-center space-y-3'>
                       <h3 className='text-3xl'>Cherokee</h3>
                        <p>Price: $1200</p>
                        <p> Rating: 4.4</p>
                        <button className='btn-primary p-3 rounded'>View Details</button>
                       </div>
                    </div>
                    <div className='space-y-3'>
                        <img className='rounded' src="https://buzzbytes.net/wp-content/uploads/2022/12/0x0.jpg" alt="" />
                        <h3 className='text-3xl'>Dodge Charger</h3>
                        <p>Price: $1400</p>
                        <p> Rating: 4.8</p>
                        <button className='btn p-3 rounded'>View Details</button>
                    </div> 
                    </div>
                   
                </TabPanel>
            </Tabs>
            <div className='my-7'>
                
            </div>
        </div>
       </div>
    );
};

export default ShopByCategory;
