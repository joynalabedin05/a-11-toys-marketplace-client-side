
import { FaTwitter } from 'react-icons/fa';
const FeedBack = () => {
    return (
        <div className='mx-20 mt-12 mb-10 '>
           <h3 className="text-center text-4xl mb-12 text-orange-800 ">What People Say</h3> 
           <div className='grid md:grid-cols-2 gap-20 bg-slate-700 p-14 rounded-xl'>
            <div className='text-xl space-y-4 relative '>
                <img className='rounded-full w-[60px] absolute -left-8 -top-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7sCe3BYgPLjIvTRVehjn3o4Fx2VklDVR9yDdfwuDK4Q9_pAlkujq3Tst--k6yzalO-o&usqp=CAU" alt="" />
                <div className='bg-gray-300 space-y-4  p-3 rounded'>
                    <p>“@TrueCar seriously helped me with my car deal. Anyone looking to get a car should just use it. #lifesaver”</p>
                    <p>Athziri</p>
                    <div className='flex items-center gap-2'>
                        <FaTwitter  />
                        <span>@Cee_OhWhattt</span>
                    </div>
                </div>
            </div>
            <div className='text-xl space-y-4 relative '>
                <img className='rounded-full w-[60px] absolute -left-8 -top-8' src="https://pbs.twimg.com/profile_images/1645551949708767236/FrBIo1no_400x400.jpg" alt="" />
                <div className='bg-gray-300 space-y-4 p-3 rounded'>
                    <p>“@TrueCar seriously helped me with my car deal. Anyone looking to get a car should just use it. #lifesaver”</p>
                    <p>Athziri</p>
                    <div className='flex items-center gap-2'>
                        <FaTwitter  />
                        <span>@Cee_OhWhattt</span>
                    </div>
                </div>
            </div>
            <div className='text-xl space-y-4 relative '>
                <img className='rounded-full w-[60px] absolute -left-8 -top-8' src="https://cse.uiu.ac.bd/wp-content/uploads/sites/2/2021/04/Saidul.jpg" alt="" />
                <div className='bg-gray-300 space-y-4 p-3 rounded'>
                    <p>“@TrueCar seriously helped me with my car deal. Anyone looking to get a car should just use it. #lifesaver”</p>
                    <p>Athziri</p>
                    <div className='flex items-center gap-2'>
                        <FaTwitter  />
                        <span>@Cee_OhWhattt</span>
                    </div>
                </div>
            </div>
            <div className='text-xl space-y-4 relative '>
                <img className='rounded-full w-[60px] absolute -left-8 -top-8' src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg" alt="" />
                <div className='bg-gray-300 space-y-4 p-3 rounded'>
                    <p>“@TrueCar seriously helped me with my car deal. Anyone looking to get a car should just use it. #lifesaver”</p>
                    <p>Athziri</p>
                    <div className='flex items-center gap-2'>
                        <FaTwitter  />
                        <span>@Cee_OhWhattt</span>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default FeedBack;