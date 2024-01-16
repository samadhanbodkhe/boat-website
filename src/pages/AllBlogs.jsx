import React from 'react'

const AllBlogs = () => {

    const alldetails = [
        {
            date: "23 Sep, 2023",
            image: "https://www.boat-lifestyle.com/cdn/shop/articles/3_2_600x.jpg?v=1695972107",
            heading: "What is Active Noise  Read more at...",
            para: "Check out how with our DIY Watch Face Studio and customisable watch Read more alt"
        },
        {
            date: "01 Nov, 2021",
            image: "https://www.boat-lifestyle.com/cdn/shop/articles/noise_cancellation_800x.jpg?v=1635923382",
            heading: "The Power of Personalisation: Custom Watch Faces in...",
            para: "Admit it, boAt fam: There’s no greater vibe killer than outside noise leaking Read more at"
        },
        {
            date: "20 Aug, 2023",
            image: "https://www.boat-lifestyle.com/cdn/shop/articles/Aman_800x.png?v=1669814321",
            heading: "Aman Gupta boAt Custom Watch Faces in...",
            para: "Check out how with our DIY Watch Face Studio and customisable watch Read more alt"
        },
        {
            date: "28 Jul, 2023",
            image: "https://www.boat-lifestyle.com/cdn/shop/articles/2_2_800x.jpg?v=1696425405",
            heading: "The Power of Personalisation: Custom Watch Faces in...",
            para: "Check out how with our DIY Watch Face Studio and customisable watch Read more alt"
        },
    ]

    return <>
        <div className='mx-5 my-5 text-2xl'>
            <h3><strong>All Blogs</strong></h3>
        </div>
        <div className="flex  overflow-x-scroll my-10 mx-5 hide-scroll-bar ">
            <div className='flex flex-grow gap-5'>
                {
                    alldetails.map(item => <div class="w-72 rounded-xl overflow-hidden  bg-slate-200">
                        <img class="w-full" src={item.image} alt="Sunset in the mountains" />
                        <div class="px-3 py-4 ">
                            <p> {item.date} </p>
                            <div class="font-bold text-lg mb-2">
                                {item.heading}
                            </div>
                            <p class="text-gray-700 text-base">
                                {item.para}
                            </p>
                        </div>
                        <div className='w-full  text-center'>
                            <button class="bg-white border border-gray-400 w-64 mb-5 text-black  py-2 px-4 rounded-xl">
                                Read More
                            </button>
                        </div>
                    </div>)
                }

            </div>
        </div>
        {/* carousel */}
        {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> */}

    </>
}

export default AllBlogs