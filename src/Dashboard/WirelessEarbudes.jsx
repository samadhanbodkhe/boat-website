import React from 'react'

const WirelessEarbudes = () => {
    const allCard = [
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes 131",
          price: "₹899",
          price2: "₹2,990",
          discount: "70% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"60 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-181.jpg?v=1682576552",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes 181",
          price: "₹1,099",
          price2: "₹2,990",
          discount: "63% 0ff",
          disc: "clear calling",
          disc2: "Beat Mode",
          time:"60 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes 161",
          price: "₹999",
          price2: "₹2,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"60 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-115_1.jpg?v=1686139410",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes 161",
          price: "₹999",
          price2: "₹2,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"60 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-Atom-83.jpg?v=1682576552",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹1,399",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹1,399",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141_d277995b-31ae-420d-b5b4-1161515335ed.jpg?v=1687428689",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹1,399",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_170.jpg?v=1688452927",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹1,199",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_131.gif?v=1698386535",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹1,699",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Unity_ANC.jpg?v=1698919280",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹1,699",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Alpha.jpg?v=1688452927",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹899",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/141_ANC.jpg?v=1690870925",
          flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
          icon: <i class="bi bi-star-fill text-yellow-500"></i>,
          text: "Airdopes Atom 83",
          price: "₹1,799",
          price2: "₹3,490",
          discount: "60% 0ff",
          disc: "13 mm drivers",
          disc2: "AWP Technology",
          time:"50 Hours Playback"
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
export default WirelessEarbudes