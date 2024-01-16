import React from 'react'
import { Link } from 'react-router-dom'


const BestSeller = () => {

    return <>
        <div className='mx-5 my-5 text-2xl'>
            <h3>Explore <strong>Bestsellers</strong></h3>
        </div>

        {/* video card start */}
        <div class="flex flex-col mb-5">
            <div class="flex mx-2 overflow-x-scroll hide-scroll-bar"  >
                <div class="flex flex-nowrap">
                    <Link to="/watchCard" class="inline-block px-3">
                        <div class="w-80 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"                        >
                            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4"></video>
                        </div>
                        <div className='text-center  text-lg my-2'>
                            <strong>Smart Watch</strong>
                        </div>
                    </Link>
                    <Link to="/wirelessearbudes" class="inline-block px-3">
                        <div
                            class="w-80 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4"></video>
                        </div>
                        <div className='text-center text-lg my-2'>
                            <strong>Wireless Earbuds</strong>
                        </div>
                    </Link>
                    <Link to="/earbudes" class="inline-block px-3">
                        <div
                            class="w-80 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4"></video>
                        </div>
                        <div className='text-center text-lg my-2 '>
                            <strong>Neckbands</strong>
                        </div>
                    </Link>
                    <Link to="/headphone" class="inline-block px-3">
                        <div
                            class="w-80 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4"></video>
                        </div>
                        <div className='text-center text-lg my-2 '>
                            <strong>Headphones</strong>
                        </div>
                    </Link>
                    <Link to="/speakers" class="inline-block px-3">
                        <div
                            class="w-80 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <video src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4"></video>
                        </div>
                        <div className='text-center text-lg my-2 '>
                            <strong>Wireless Speakers</strong>
                        </div>
                    </Link>
                </div>
            </div>
        </div >

        {/* video card end */}

        <div div className='mx-5 text-2xl' >
            <h3>Today's <strong>Strong</strong></h3>
            <div className='mt-5'>
                <img className='rounded-lg' src="https://www.boat-lifestyle.com/cdn/shop/files/Strip_Web_copy_1_1600x.png?v=1701415389" alt="" />
            </div>
        </div >

        <div className="flex overflow-x-scroll my-8 mx-5 hide-scroll-bar ">
            <div className="flex gap-5">
                <div className="card card-compact w-72 bg-base-100 shadow-xl ">
                    <figure><img className='h-72 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049" alt="Shoes" /></figure>
                    <div className='bg-yellow-300 px-2 rounded-lg absolute mx-16 bottom-32'>
                        <strong>60 Hours Playback</strong>
                    </div>
                    <div className="card-body">
                        <strong>Airdopes 131</strong>
                        <div className='flex'>
                            <strong>₹899</strong><p className='flex mx-1'>₹2,999 <strong className='mx-2 text-green-500'>70%off</strong></p>
                        </div>
                        <div className='flex'>
                            <i class="bi bi-star-fill text-yellow-500"></i>
                            <p>4.8   | 1336</p>
                            <button className="btn bg-black text-white w-32">Add To Card</button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl ">
                    <figure><img className='h-72 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917" alt="Shoes" /></figure>
                    <div className='bg-yellow-300 px-2 rounded-lg absolute mx-16 bottom-32'>
                        <strong>40 Hours Playback</strong>
                    </div>
                    <div className="card-body">
                        <strong>Airdopes 161</strong>
                        <div className='flex'>
                            <strong>₹999</strong><p className='flex mx-1'>₹2,499 <strong className='mx-2 text-green-500'>60%off</strong></p>
                        </div>
                        <div className='flex'>
                            <i class="bi bi-star-fill text-yellow-500"></i>
                            <p>4.9   | 150</p>
                            <button  className="btn bg-black text-white w-32">Add To Card</button>
                            
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl ">
                    <figure><img className='h-72 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_ea76e8ff-d95c-49da-b6c9-fca4304dce11.jpg?v=1685686978" alt="Shoes" /></figure>
                    <div className='bg-yellow-300 px-2 rounded-lg absolute mx-16 bottom-32'>
                        <strong>8 Hours Playback</strong>
                    </div>
                    <div className="card-body">
                        <strong>Rockerz 235 V2</strong>
                        <div className='flex'>
                            <strong>₹999</strong><p className='flex mx-1'>₹2,990 <strong className='mx-2 text-green-500'>67%off</strong></p>
                        </div>
                        <div className='flex'>
                            <i class="bi bi-star-fill text-yellow-500"></i>
                            <p>4.8   | 1047</p>
                            <button className="btn bg-black text-white w-32">Add To Card</button>

                        </div>
                    </div>
                </div>
                <div className="card card-compact w-72 bg-base-100 shadow-xl ">
                    <figure><img className='h-72 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141_d277995b-31ae-420d-b5b4-1161515335ed.jpg?v=1687428689" alt="Shoes" /></figure>
                    <div className='bg-yellow-300 px-2 rounded-lg absolute mx-16 bottom-32'>
                        <strong>60 Hours Playback</strong>
                    </div>
                    <div className="card-body">
                        <strong>Airdopes 141</strong>
                        <div className='flex'>
                            <strong>₹1,299</strong><p className='flex mx-1'>₹4,990 <strong className='mx-2 text-green-500'>71%off</strong></p>
                        </div>
                        <div className='flex'>
                            <i class="bi bi-star-fill text-yellow-500"></i>
                            <p>4.9   | 647</p>
                            <button className="btn bg-black text-white w-32 h-7">Add To Card</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default BestSeller