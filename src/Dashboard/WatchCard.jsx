import React, { useState } from 'react'

const WatchCard = () => {
  const [show, setShow] = useState()
  const allCard = [
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Force.jpg?v=1702361107",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Strom call",
      price: "₹1,499",
      price2: "₹7,990",
      discount: "81% 0ff",
      disc: "2.5D Curved Display",
      disc2: "Save Upto 10 Contacts",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Flex_Connect.jpg?v=1689751649",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave Flex Connect",
      price: "₹1,499",
      price2: "₹7,990",
      discount: "81% 0ff",
      disc: "HD curved display",
      disc2: "10 dayst battery life",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Connect.jpg?v=1686904362",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Lunar Connect",
      price: "₹1,799",
      price2: "₹7,999",
      discount: "81% 0ff",
      disc: "100+ Sports ",
      disc2: "Modes ENx™ Technology",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Velocity.gif?v=1698984629",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave Flex call",
      price: "₹1,499",
      price2: "₹6,499",
      discount: "77% 0ff",
      disc: "HD curved display",
      disc2: "10 dayst battery life",
    },

    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call__1.jpg?v=1689751649",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave Flex Connect",
      price: "₹1,499",
      price2: "₹7,990",
      discount: "81% 0ff",
      disc: "HD curved display",
      disc2: "10 dayst battery life",
    },

    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Glory_8f5ee246-4a00-4184-9655-fe0e9529b2ed.webp?v=1701692614",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave call",
      price: "₹1,699",
      price2: "₹7,990",
      discount: "79% 0ff",
      disc: "HD curved display",
      disc2: "save upto 10 connects ",
    },

    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Arcade.jpg?v=1702448795",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave electra",
      price: "₹1,799",
      price2: "₹7,990",
      discount: "81% 0ff",
      disc: "HD display",
      disc2: "100% watch faces",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Wave-Neo.jpg?v=1682583585",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave Arcade",
      price: "₹2,199",
      price2: "₹7,990",
      discount: "72% 0ff",
      disc: "Build in games",
      disc2: "BT calling",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Leap_Call.jpg?v=1698909797",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave Flex Connect",
      price: "₹1,499",
      price2: "₹7,990",
      discount: "81% 0ff",
      disc: "HD curved display",
      disc2: "10 dayst battery life",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave-Lite.jpg?v=1682408982",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave Flex Connect",
      price: "₹1,499",
      price2: "₹7,990",
      discount: "81% 0ff",
      disc: "HD curved display",
      disc2: "10 dayst battery life",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call_2.webp?v=1698984630",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave leap call",
      price: "₹1,799",
      price2: "₹6,990",
      discount: "74% 0ff",
      disc: "100% watch face",
      disc2: "1.83 Hd Display  ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Fury.webp?v=1702287204",
      flipimg: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Flipkart.png?v=1691406536",
      icon: <i class="bi bi-star-fill text-yellow-500"></i>,
      text: "Wave Flex Astra",
      price: "₹1,999",
      price2: "₹6,999",
      discount: "71% 0ff",
      disc: "1.83 Hd Display",
      disc2: "700+ Active Modes",
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
              <p className='ps-2 rounded-b-md text-center font-semibold bg-yellow-400'>BT calling</p>
            </div>
            <div className='ps-2'>
              <div className='flex justify-between'>
                <div className='flex justify-between'>
                  <p>{item.icon}</p>
                  <p className='pe-5'>6|12</p>
                  <p className='px-5'>6|12</p>
                </div>
                <div className="badge bg-cyan-50">
                  <img className='w-3' src={item.flipimg} alt="" />
                  <span className='ps-1'>best seller</span></div>
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
              <div>
                <div className="badge badge-ghost p-3">{item.disc}</div>
                <div className="badge badge-ghost p-3 mt-2">{item.disc2}</div>
              </div>
              <div className='text-center'>
                <button onClick={e => setShow(item)} className="btn btn-sm bg-black text-white px-12 w-52 h-10 my-2">Add To Cart</button>
              </div>
            </div>
          </div>)
        }


      </div>
    </div>

  </>
}

export default WatchCard