import React from 'react'

const LifeStyle = () => {
    return <>

        <div className='text-3xl mt-10 mx-12 font-serif'>
            <p>Shop by <strong>Lifestyle</strong></p>
        </div>


        <div className='flex  overflow-x-scroll hide-scroll-bar'>
            <div className='flex gap gap-2 px-4 '  >
                <div className="w-60 ">
                    <figure><img className='w-full' src="https://www.boat-lifestyle.com/cdn/shop/files/shreyas-chronos-new.png?v=1696843687" alt="Shoes" /></figure>

                    <div className="card-body bg-slate-200 rounded-b-2xl">
                        <div className='text-center text-xl'>
                            <strong>For Fitness</strong>
                        </div>
                        <button className='font-bold'>View All <i class="bi bi-arrow-right-circle-fill"></i> </button>
                    </div>
                </div>

                <div className=" w-60 ">
                    <figure><img className='w-full' src="https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745" alt="Shoes" /></figure>

                    <div className="card-body bg-slate-200 rounded-b-2xl">
                        <div className='text-center text-xl'>
                            <strong>For Work</strong>
                        </div>
                        <button className='font-bold'>View All <i class="bi bi-arrow-right-circle-fill"></i> </button>
                    </div>
                </div>

                <div className="w-60  ">
                    <figure><img className='w-full' src="https://www.boat-lifestyle.com/cdn/shop/files/Entertainment_2.png?v=1685083746" alt="Shoes" /></figure>
                    <div className="card-body bg-slate-200 rounded-b-2xl">
                        <div className='text-center text-xl'>
                            <strong>For Entertainment</strong>
                        </div>
                        <button className='font-bold'>View All <i class="bi bi-arrow-right-circle-fill"></i> </button>
                    </div>
                </div>

                <div className="w-60  ">
                    <figure><img className='w-full' src="https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_5.png?v=1696328658" alt="Shoes" /></figure>
                    <div className="card-body bg-slate-200 rounded-b-2xl">
                        <div className='text-center text-xl '>
                            <strong>For Audiophiles</strong>
                        </div>
                        <button className='font-bold'>View All <i class="bi bi-arrow-right-circle-fill"></i> </button>
                    </div>
                </div>

                <div className="w-60  ">
                    <figure><img className='w-full' src="https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349" alt="Shoes" /></figure>
                    <div className="card-body bg-slate-200 rounded-b-2xl">
                        <div className='text-center text-xl'>
                            <strong>For Parties</strong>
                        </div>
                        <button className='font-bold'>View All <i class="bi bi-arrow-right-circle-fill"></i> </button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default LifeStyle