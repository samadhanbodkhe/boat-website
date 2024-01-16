import React from 'react'

const Headphone = () => {
    const allCard = [
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"30 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹4,999",
            price2: "₹7,990",
            discount: "44% 0ff",
            disc: "40mm drivers",
            disc2: "ASPim Charge",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_400.gif?v=1691387449",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            time:"60 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹1,999",
            price2: "₹6,990",
            discount: "44% 0ff",
            disc: "50mm drivers",
            disc2: "Real RGB LEDs",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockid_Rush.jpg?v=1692598817",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            time:"20 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹1,499",
            price2: "₹2,990",
            discount: "40% 0ff",
            disc: "84 db loudness limit",
            disc2: "soft and push earcups",
        },
        {
            img: "https://www.boat-lifestyle.com/cdn/shop/products/7499af44-9d7a-489c-80f0-51f7799289e4_c39c5220-2527-4793-8165-f18e874bf6b2_300x.png?v=1678075255",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            time:"15 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹1,499",
            price2: "₹2,990",
            discount: "40% 0ff",
            disc: "84 db loudness limit",
            disc2: "soft and push earcups",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/immortal_1300.gif?v=1691387451",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            time:"60 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹1,499",
            price2: "₹2,990",
            discount: "40% 0ff",
            disc: "drivereless 3d sound",
            disc2: "soft and push earcups",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_200.psb.jpg?v=1699501201",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            time:"10 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹1,599",
            price2: "₹3,990",
            discount: "45% 0ff",
            disc: "84 db loudness limit",
            disc2: "soft and push earcups",
        },
    ]
    return <>
        <div className='my-9  mx-10 flex justify-center items-center'>
            <div className='grid grid-cols-12 gap-3 '>


                {
                    allCard && allCard.map(item => <div className='col-span-4  card card-side w-full  h-52 rounded-xl overflow-hidden flex bg-slate-200'>
                        <div class="">
                            <div>
                                <img class="w-40 h-44 " src={item.img} alt="" />
                            </div>
                            <p className='ps-2 rounded-b-md text-center font-semibold bg-yellow-400'>{item.time}</p>
                        </div>
                        <div className='ps-2'>
                            <div className='flex justify-between'>
                                <div className='flex justify-between'>
                                    <p className='pe-5'>6|12</p>
                                    <p className='px-5'>6|12</p>
                                </div>
                                <div className="badge bg-cyan-50">
                                    <img className='w-3' src={item.flipimg} alt="" />
                                    <span className='badge badge-xs' >best seller</span></div>
                            </div>
                            <p className='font-bold'>{item.text}</p>
                            <div className='flex '>
                                <div className='flex justify-around'>
                                    <p className='font-bold px-1'>{item.price}</p>
                                    <del className='px-1'>{item.price2}</del>
                                    <p className='font-bold text-green-500 px-1'>{item.discount}</p>
                                </div>
                                <div>
                                    color
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className='w-full h-0.5 my-3 bg-gray-400'></div>
                            </div>
                            <div className='flex gap-2'>
                                <div className="badge badge-xs px-2 bg-slate-100 ">{item.disc}</div>
                                <div className=" badge badge-xs px-2 bg-slate-100">{item.disc2}</div>
                            </div>
                            <div className='text-center'>
                                <button onClick={e => setShow(item)} className="btn btn-sm bg-black text-white px-12 w-52 h-10 my-12    ">Add To Cart</button>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    </>
}

export default Headphone