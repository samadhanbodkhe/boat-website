import React from 'react'

const Speakers = () => {
    const allCard = [
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_350.jpg?v=1701847157",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"12 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹1,299",
            price2: "₹3,590",
            discount: "44% 0ff",
            disc: "Huge 2200 mAh Battery",
            disc2: "IPX7 Water Resistance",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone-105.jpg?v=1695273592",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"10 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹999",
            price2: "₹2,490",
            discount: "44% 0ff",
            disc: "Bluetooth V5.0",
            disc2: "TWS function",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_180.jpg?v=1702014281",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹2,299",
            price2: "₹3,590",
            discount: "44% 0ff",
            disc: "Lightwight design",
            disc2: "IPX7 Water Resistance",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_1200.jpg?v=1702014281",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"8 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹1,299",
            price2: "₹2,590",
            discount: "69% 0ff",
            disc: "Bluetooth V5.0  ",
            disc2: "4.1 Channel Sound IPX7 Water Resistance",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_750.jpg?v=1699500834",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹2,299",
            price2: "₹3,590",
            discount: "44% 0ff",
            disc: "14W Signature Sound",
            disc2: "IPX7 Water Resistance",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_620.jpg?v=1701847157",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹2,299",
            price2: "₹3,590",
            discount: "44% 0ff",
            disc: "Lightwight design",
            disc2: "IPX7 Water Resistance",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_1800.jpg?v=1695273373",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹8,999",
            price2: "₹3,590",
            discount: "44% 0ff",
            disc: "Lightwight design",
            disc2: "IPX7 Water Resistance",
        },
        {
            img: "https://www.boat-lifestyle.com/cdn/shop/products/1200f_main3_300x.png?v=1673002201",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"10 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹2,299",
            price2: "₹3,590",
            discount: "44% 0ff",
            disc: "Up to 09HRS Playback",
            disc2: "RGB red lights",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Partypal_400.psb.jpg?v=1699524655",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹2,299",
            price2: "₹3,590",
            discount: "44% 0ff",
            disc: "Lightwight design",
            disc2: "IPX7 Water Resistance",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PP_185.jpg?v=1695976203",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Nirvanaa 751 ANC",
            price: "₹7,499",
            price2: "₹13,590",
            discount: "55% 0ff",
            disc: "Multi-Compatibility ",
            disc2: " 6 Hours Playback",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Partypal_200.jpg?v=1699524655",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Party pal 200",
            price: "₹8,999",
            price2: "₹9,990",
            discount: "10% 0ff",
            disc: "Up to 07HRS Playback",
            disc2: "Multi Compatibility",
        },
        {
            img: "https://www.boat-lifestyle.com/cdn/shop/products/main---1_300x.png?v=1640081208",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
           
            time:"15 Hours Playback",
            text: "Party pal 50",
            price: "₹3,999",
            price2: "₹7,999",
            discount: "50% 0ff",
            disc: "IPX5 Water Resistance",
            disc2: "RGB LED Lights",
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

export default Speakers