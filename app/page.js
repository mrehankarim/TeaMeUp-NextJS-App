import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center ga-4 text-white h-[66vh]'>
        <div className='font-bold text-5xl flex items-center justify-center gap-2'>Buy Me a Tee <span><img src="/tea.gif" width={77} alt="" /></span></div>
        <p className='text-gray-400 mt-[-10px]'>Support your favorite contributors with a refreshing cup of tea!</p>
        <div className='mt-3'>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>

      </div>
      <div className='bg-white h-1 opacity-5'>

      </div>
      <div className='text-white container mx-auto pb-32 pt-14'>
        <h1 className='text-3xl font-bold text-center mb-14'>Your fans can buy you a Tea</h1>
        <div className='flex gap-5 justify-around '>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className='bg-slate-500 rounded-full p-2' src="/man.gif" width={88} alt="" />
            <p className='font-bold'>Fans want to Help</p>
            <p>Your fans available for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className='bg-slate-500 rounded-full p-2' src="/coin.gif" width={88} alt="" />
            <p className='font-bold'>Fans want to Help</p>
            <p>Your fans available for you to help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className='bg-slate-500 rounded-full p-2' src="/group.gif" width={88} alt="" />
            <p className='font-bold'>Fans want to Help</p>
            <p>Your fans available for you to help</p>
          </div>
        </div>
      </div>

      <div className='bg-white h-1 opacity-5'></div>
      <div className='text-white container mx-auto pb-32 pt-14'>
        <h1 className='text-3xl font-bold text-center mb-14'>Leran More About Us</h1>
        <div className='w-full flex  justify-center items-center'><iframe className='rounded-md' width="560" height="315"  src="https://www.youtube.com/embed/L_MWpvMm5tk?si=1B1KOMelvz7hgq1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      </div>



    </>
  )
}

export default page
