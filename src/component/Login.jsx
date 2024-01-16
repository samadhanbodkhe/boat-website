import React from 'react'

const Login = () => {
  return <>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex  items-center mb-6 text-2xl font-serif text-gray-900 dark:text-white">
          <img class="w-14 h-14 mr-2 rounded-full" src="https://yt3.googleusercontent.com/tnN3ygJ11XKzKhySq8M3g7S_tOMf2EOzwFqBv1dP7wZheTKcfyrkC9osYZhf6y3-jLe6jBnh=s900-c-k-c0x00ffffff-no-rj" alt="logo" />
          Boat LIfeStyle
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-serif leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" class="block font-serif mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border font-serif border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required="" />
              </div>
              <div>
                <label for="password" class="block font-serif mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter Your Password" class="bg-gray-50 border font-serif border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 font-serif dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-serif text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
                  <div>
                    <button className='btn bg-black text-white font-serif text-2xl w-full' >Login</button>
                  </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </>
}

export default Login