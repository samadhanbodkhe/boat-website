import React from 'react'

const SecCarousel = () => {
    return <>
        {/* carousel start */}

        <div className='hidden sm:block md:block lg:block'>
            <div className="carousel w-100% mx-5 " style={{ height: 350 }}>
                <div id="slide01" className="carousel-item relative w-full">
                    <div className='flex justify-center items-center bg-gray-300 w-2/5'>
                        <img height={50} width={200} src="https://www.boat-lifestyle.com/cdn/shop/files/mint_0566185f-75d7-4819-a2a2-e2acc4535e78_231x.png?v=1649066803" alt="" />
                    </div>
                    <div className='w-full bg-slate-200 flex justify-center items-center'>
                        <div className='w-1/2 text-center  font-bold text-3xl'>
                            <i className='bi-emoji-smile text-5xl text-yellow-600'></i>
                            <p className='text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-40 ">
                        <a href="#slide04" className="btn btn-circle">❮</a>
                        <a href="#slide02" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide02" className="carousel-item relative w-full">
                    <div className='flex justify-center items-center bg-gray-300 w-2/5'>
                        <img height={50} width={200} src="https://www.boat-lifestyle.com/cdn/shop/files/gadgets360_1_6a0c2c78-109a-4cbc-be58-05b893a41d4a_231x.png?v=1649066821" alt="" />
                    </div>
                    <div className='w-full bg-slate-200 flex justify-center items-center'>
                        <div className='w-1/2 text-center  font-bold text-3xl'>
                            <i className='bi-emoji-smile text-5xl text-yellow-600'></i>
                            <p className='text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-40">
                        <a href="#slide01" className="btn btn-circle">❮</a>
                        <a href="#slide03" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide03" className="carousel-item relative w-full">
                    <div className='flex justify-center items-center bg-gray-300 w-2/5'>
                        <img height={50} width={200} src="https://www.boat-lifestyle.com/cdn/shop/files/ET_1_9f80aa59-c905-4886-b75f-5b96808f2903_231x.png?v=1649066820" alt="" />
                    </div>
                    <div className='w-full bg-slate-200 flex justify-center items-center'>
                        <div className='w-1/2 text-center  font-bold text-3xl'>
                            <i className='bi-emoji-smile text-5xl text-yellow-600'></i>
                            <p className='text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-40">
                        <a href="#slide02" className="btn btn-circle">❮</a>
                        <a href="#slide04" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide04" className="carousel-item relative w-full">
                    <div className='flex justify-center items-center bg-gray-300 w-2/5'>
                        <img height={50} width={200} src="https://www.boat-lifestyle.com/cdn/shop/files/techradar_1_ba476d16-16de-4a29-baa2-537f33fc7f88_231x.png?v=1649066820" alt="" />
                    </div>
                    <div className='w-full bg-slate-200 flex justify-center items-center'>
                        <div className='w-1/2 text-center  font-bold text-3xl'>
                            <i className='bi-emoji-smile text-5xl text-yellow-600'></i>
                            <p className='text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-40">
                        <a href="#slide03" className="btn btn-circle">❮</a>
                        <a href="#slide01" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className=' sm:hidden'>
            <div className="carousel w-80% " style={{ height: 570 }}>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/MOB_SHOPNOW_600x.jpg?v=1701927738" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide8" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/Lunar_TIgon_MOB_Banner_600x.jpg?v=1701333135" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_MOB_600x.gif?v=1701695574" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide8" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/Crest-banner-dark_93311138-f47b-45ec-aa53-3f864c62ab32_600x.png?v=1699269046" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div> */}


        {/* sd */}



        {/* carousel end */}
    </>
}

export default SecCarousel