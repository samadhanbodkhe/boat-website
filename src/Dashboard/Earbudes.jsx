import React from 'react'

const Earbudes = () => {
    const allCard = [
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 235 V2",
            price: "₹999",
            price2: "₹2,990",
            discount: "67% 0ff",
            disc: "10 mm drivers",
            disc2: "Fast Charging",
            time: "8 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305.jpg?v=1682573437",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,299",
            price2: "₹3,990",
            discount: "67% 0ff",
            disc: "10mm drivers",
            disc2: "Boat Signature Sound",
            time: "40 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_245v2.jpg?v=1702027042",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,099",
            price2: "₹2,990",
            discount: "63% 0ff",
            disc: "10mm drivers",
            disc2: "IPX5 Water Resistance",
            time: "8 Hours Playback"
        },
        {
            img: "https://www.boat-lifestyle.com/cdn/shop/products/main4_300x.png?v=1641801688",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,299",
            price2: "₹2,990",
            discount: "57% 0ff",
            disc: "boAt Signature Audio",
            disc2: "Metallic Control panel",
            time: "10 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-333_c4dfdc62-742d-4908-b630-31785876585e.jpg?v=1682408982",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,199",
            price2: "₹3,990",
            discount: "70% 0ff",
            disc: "boAt Signature Audio",
            disc2: "Metallic Control panel",
            time: "8 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/R103_Pro.jpg?v=1687523180",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,099",
            price2: "₹2,490",
            discount: "56% 0ff",
            disc: "",
            disc2: "",
            time: "12 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_255.jpg?v=1692340413",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,299",
            price2: "₹2,990",
            discount: "75% 0ff",
            disc: "10mm drivers",
            disc2: "Boat Signature Sound",
            time: "6 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_255_Pro_e3ad8e25-f783-4a5d-9de8-402b76b1ae4d.jpg?v=1698402384",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,299",
            price2: "₹2,990",
            discount: "75% 0ff",
            disc: "Bluetooth v5.0 ",
            disc2: "IPX5 water resistant",
            time: "6 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_385v2.jpg?v=1698402384",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,999",
            price2: "₹4,990",
            discount: "75% 0ff",
            disc: "IPX6 Water Resistance",
            disc2: "ASAP Charge",
            time: "40 Hours Playback"
        },
        {
            img: "https://www.boat-lifestyle.com/cdn/shop/products/103-wireless-black_300x.png?v=1613734178",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,199",
            price2: "₹1,990",
            discount: "75% 0ff",
            disc: "IPX6 Water Resistance",
            disc2: "ASAP Charge",
            time: "40 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-330-Pro.jpg?v=1682579854",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,499",
            price2: "₹4,990",
            discount: "75% 0ff",
            disc: "IPX6 Water Resistance",
            disc2: "ASAP Charge",
            time: "40 Hours Playback"
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_333_ANC.jpg?v=1698402384",
            flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
            icon: <i class="bi bi-star-fill text-yellow-500"></i>,
            text: "Rockerz 255 Pro+",
            price: "₹1,699",
            price2: "₹5,990",
            discount: "72% 0ff",
            disc: "25 hours playback",
            disc2: "ASAP Charge",
            time: "40 Hours Playback"
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

export default Earbudes