import React from 'react'

const Carousel = () => {
    return <>
        {/* carousel start */}

        <div className='hidden sm:block md:block lg:block'>
            <div className="carousel w-100% " style={{ height: 475 }}>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/WEB_52332b2d-471f-46e8-ad85-04413b6f7ddf_1440x.jpg?v=1701619395" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/Lunar_TIgon_WEB_Banner_1440x.jpg?v=1701333079" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/Ion_Banner_WEB_1440x.gif?v=1701695553" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.boat-lifestyle.com/cdn/shop/files/Crest-banner-dark-desktop_1600x.png?v=1699269025" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

        <div className=' sm:hidden'>
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
        </div>

        {/* carousel end */}
    </>
}

export default Carousel