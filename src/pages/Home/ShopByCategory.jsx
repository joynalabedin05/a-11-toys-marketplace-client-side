
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
    return (
        <div className='mx-16 mt-12 bg-slate-600 text-white p-5 text-xl rounded  font-semi-bold'>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Police Car</Tab>
                </TabList>

                <TabPanel className='space-x-4 mt-5'>
                    <button className='btn btn-primary'>standard sports cars</button>
                    <button className='btn btn-primary'>high-performance sports</button>
                    <button className='btn btn-primary'>supercars</button>
                </TabPanel>
                <TabPanel className='space-x-4 mt-5'>
                    <button className='btn btn-primary'>Hatchback</button>
                    <button className='btn btn-primary'>Sedan</button>
                    <button className='btn btn-primary'>Pickup Truck</button>
                </TabPanel>
                <TabPanel className='space-x-4 mt-5'>
                    <butto className='btn btn-primary'>Patrol cars</butto>
                    <butto className='btn btn-primary'>Armored Vehicles</butto>
                    <butto className='btn btn-primary'>Specialty Vehicles</butto>
                </TabPanel>
            </Tabs>
            <div className='my-7'>
                
            </div>
        </div>
    );
};

export default ShopByCategory;
