import React from 'react'

const NewLaunch = () => {
    return <>
        <div className='text-3xl ml-12 font-serif'>
            <p>New <strong>Launches</strong></p>
        </div>
        <div className="flex  overflow-x-scroll my-10 mx-5 hide-scroll-bar ">

        <div className="flex flex-nowrap pt-3 px-12">

            {/* <div className='flex'> */}

            <div className="card card-compact w-64 bg-base-100 shadow-xl mx-5">
                <figure><img className='h-64 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_Archies.jpg?v=1701508203" alt="Shoes" /></figure>
                <div className='bg-slate-800 text-white px-1 mt-8 rounded-lg absolute '>
                    <strong className='text-sm font-mono'>🎉New Launch</strong>
                </div>
                <div className='bg-yellow-300 px-2 rounded-lg absolute mx-11 bottom-36'>
                    <strong>6 Hours Playback</strong>
                </div>
                <div className="card-body">
                    <strong>Stone Majestic Riverdale Rocker - Pre Order</strong>
                    <div className='flex'>
                        <strong>₹9,999</strong><p className='flex mx-1'>₹21,990 <strong className='mx-2 text-green-500'>55%off</strong></p>
                    </div>
                    <div className='flex'>
                        <i class="bi bi-star-fill text-yellow-500"></i>
                        <p>Be first to review</p>
                        <button className="btn bg-black text-white w-32">Pre-Order</button>

                    </div>
                </div>
            </div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl mx-5">
                <figure><img className='h-64 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Tigon.jpg?v=1701317535" alt="Shoes" /></figure>
                <div className='bg-slate-800 text-white px-2 mt-8 rounded-lg absolute '>
                    <strong className='text-sm font-mono'>🎉New Launch</strong>
                </div>
                <div className='bg-yellow-300 px-2 rounded-lg absolute mx-20 bottom-36'>
                    <strong>BT Calling</strong>
                </div>
                <div className="card-body">
                    <strong>Launar Tigon</strong>
                    <div className='flex'>
                        <strong>₹2,899</strong><p className='flex mx-1'>₹11,990 <strong className='mx-2 text-green-500'>76%off</strong></p>
                    </div>
                    <div className='flex'>
                        <i class="bi bi-star-fill text-yellow-500"></i>
                        <p>Be first to review</p>
                        <button className="btn bg-black text-white w-32">Pre-Order</button>

                    </div>
                </div>
            </div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl mx-5">
                <figure><img className='h-64 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_121_v2_Plus.jpg?v=1700485056" alt="Shoes" /></figure>
                <div className='bg-slate-800 text-white px-2 mt-8 rounded-lg absolute '>
                    <strong className='text-sm font-mono'>🎉New Launch</strong>
                </div>
                <div className='bg-yellow-300 px-2 rounded-lg absolute mx-12 bottom-36'>
                    <strong>50 Hours Playback</strong>
                </div>
                <div className="card-body">
                    <strong>Airdopes 121v2 Plus</strong>
                    <div className='flex'>
                        <strong>₹1,499</strong><p className='flex mx-1'>₹4,990 <strong className='mx-2 text-green-500'>70%off</strong></p>
                    </div>
                    <div className='flex'>
                        <i class="bi bi-star-fill text-yellow-500"></i>
                        <p>Be first to review</p>
                        <button className="btn bg-black text-white w-32">Pre-Order</button>

                    </div>
                </div>
            </div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl mx-5">
                <figure><img className='h-64 w-80' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Peak.jpg?v=1698819324" alt="Shoes" /></figure>
                <div className='bg-slate-800 text-white px-2 mt-8 rounded-lg absolute '>
                    <strong className='text-sm font-mono '>🎉New Launch</strong>
                </div>
                <div className='bg-yellow-300 px-2 rounded-lg absolute mx-11 bottom-36'>
                    <strong>ALMOLED Display</strong>
                </div>
                <div className="card-body">
                    <strong>Lanur Peak</strong>
                    <div className='flex'>
                        <strong>₹2,499</strong><p className='flex mx-1'>₹6,990 <strong className='mx-2 text-green-500'>64%off</strong></p>
                    </div>
                    <div className='flex'>
                        <i class="bi bi-star-fill text-yellow-500"></i>
                        <p>4.8  | 8 </p>

                        <button className="btn bg-black text-white w-32">Pre-Order</button>

                    </div>
                </div>
            </div>
            {/* </div> */}

        </div>
        </div>

    </>
}

export default NewLaunch