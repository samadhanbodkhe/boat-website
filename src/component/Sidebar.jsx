import React from 'react'

const Sidebar = () => {
  
  return <>
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Add to cart</label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
          {/* Sidebar content here */}
          <h4>Your Cart</h4>
          <div className='flex justify-items-center align-items-center'>
            <p>Sign in to Redeem boAt reward points on this order</p>
            <button className="btn btn-sm btn-primary">Sign in now</button>
          </div>

          <div className='flex justify-items-center align-items-center p-1'>
            <img className='h-20 w-20' src="https://m.media-amazon.com/images/I/51xxA+6E+xL._SL1500_.jpg" alt="" />
            <div className='flex flex-col justify-items-center align-center px-3'>
              <p className=''>Avante bar</p>
              <p className='mt-1'>₹ 7894</p>
              <div className="badge badge-success mt-1 p-3">Midnight</div>
            </div>
            <div className='flex flex-col justify-items-center align-center px-3 gap-3'>
              <button className="btn btn-sm btn-primary">Del</button>
              <div className="join">
                <button className="join-item btn-sm btn">+</button>
                <button className="join-item btn-sm btn">-</button>
              </div>
            </div>
          </div>

          <div className='absolute bottom-5 flex justify-items-center  '>
            <div className="dropdown dropdown-top">
              <div tabIndex={0} role="button" className="btn w-32">
                <p>₹ 7894</p>
                <p className='text-xs'>incusive of all taxes</p>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            <button type="button" class="btn w-40 btn-primary">Confirm order</button>
          </div>

        </ul>
      </div>
    </div>
  </>
}

export default Sidebar