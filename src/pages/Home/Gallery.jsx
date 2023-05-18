

const Gallery = () => {
    return (
        <div className="mx-16 mt-8">
            <h3 className="text-center mb-10 text-4xl text-orange-800">Feature Gallery</h3>
            <div className="grid md:grid-cols-3 gap-8 rounded bg-slate-700 p-5">
                <div className="hover:skew-y-3">
                    <img className="w-full rounded " src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/800px-McLaren_P1.jpg" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="w-full rounded" src="https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-966.jpg" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="w-full h-full rounded" src="https://e0.pxfuel.com/wallpapers/1007/589/desktop-wallpaper-car-live-for-pc-best-of-car-car-live-for-pc-background-rainbow-car.jpg" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="w-full h-full rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsHWEOHosdY0iDHk7sOAOu3QAYZS2Og6YpQ&usqp=CAU" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="h-full rounded" src="https://www.reuters.com/resizer/rr7kFDarUIWP878l5E82mu-Lh1g=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UJULRTTCDFNBTEJAC4Y3SXIKW4.jpg" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="rounded" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_03_m.jpg" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="rounded" src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maserati/Levante/7547/1582365134672/front-left-side-47.jpg?impolicy=resize&imwidth=480" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="h-full rounded" src="https://stylesatlife.com/wp-content/uploads/2019/08/race-car.jpg" alt="" />
                </div>
                <div className="hover:skew-y-3">
                    <img className="h-full rounded" src="https://i0.wp.com/iasbabuji.com/wp-content/uploads/2021/07/IAS-Officer-Car.-DMs-Car.jpg?fit=600%2C300&ssl=1" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;