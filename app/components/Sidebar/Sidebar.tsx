import React from 'react'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <div className="w-[360px] h-screen bg-[#f0f2f5] fixed left-0 top-[70px] p-2 border-r border-gray-300">
      <nav className="space-y-1">
        {/* Main Navigation */}
        <div className="space-y-1">
          <div className="border-b border-gray-300 pb-2">
            <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/7eca9ffe-2884-4259-97b6-9685f4138343.png")' }}></div>
              <span className="text-[15px] font-medium ml-3 truncate max-w-[250px]">User Name</span>
            </Link>
            <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
              <div className="bg-[#d8d8d8] rounded-full size-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#65676B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                </svg>
              </div>
              <span className="text-[15px] font-medium ml-3">Create a new post</span>
            </Link>
            <Link href="/" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
              <div className="bg-[#d8d8d8] rounded-full size-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#65676B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <span className="text-[15px] font-medium ml-3">Massage Chat</span>
            </Link>
          </div>

          {/* Following */}
          <div className="mt-4">
            <h3 className="text-[#65676B] text-[17px] font-semibold px-2 mb-1">Following</h3>
            <div className='h-[170px] overflow-y-auto scrollCustom'>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0c7716e4-75d5-4cf2-9202-f07a3a13fb3c.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[170px]">Chef John</span>
                <span className="text-[13px] font-normal ml-auto text-[#65676B]">1.1M followers</span>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0c7716e4-75d5-4cf2-9202-f07a3a13fb3c.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[170px]">Chef John</span>
                <span className="text-[13px] font-normal ml-auto text-[#65676B]">1.1M followers</span>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0c7716e4-75d5-4cf2-9202-f07a3a13fb3c.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[170px]">Chef John</span>
                <span className="text-[13px] font-normal ml-auto text-[#65676B]">1.1M followers</span>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0c7716e4-75d5-4cf2-9202-f07a3a13fb3c.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[170px]">Chef John</span>
                <span className="text-[13px] font-normal ml-auto text-[#65676B]">1.1M followers</span>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0c7716e4-75d5-4cf2-9202-f07a3a13fb3c.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[170px]">Chef John</span>
                <span className="text-[13px] font-normal ml-auto text-[#65676B]">1.1M followers</span>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0c7716e4-75d5-4cf2-9202-f07a3a13fb3c.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[170px]">Chef John</span>
                <span className="text-[13px] font-normal ml-auto text-[#65676B]">1.1M followers</span>
              </Link>
            </div>
          </div>

          {/* Highlight */}
          <div className="mt-4">
            <h3 className="text-[#65676B] text-[17px] font-semibold px-2 mb-1">Recipes Highlight</h3>
            <div className='h-[170px] overflow-y-auto scrollCustom'>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/550dedf5-b451-4d74-ae56-383341b67464.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[230px]">Pasta with tomato sauce</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-auto text-[#65676B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/550dedf5-b451-4d74-ae56-383341b67464.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[230px]">Pasta with tomato sauce</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-auto text-[#65676B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/550dedf5-b451-4d74-ae56-383341b67464.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[230px]">Pasta with tomato sauce</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-auto text-[#65676B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </Link>
              <Link href="/category/breakfast" className="flex items-center p-2 rounded-lg hover:bg-[#e4e6e9] transition-colors">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-10" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/550dedf5-b451-4d74-ae56-383341b67464.png")' }}></div>
                <span className="text-[15px] font-medium ml-5 truncate max-w-[230px]">Pasta with tomato sauce</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-auto text-[#65676B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-4">
            <h3 className="text-[#65676B] text-[17px] font-semibold px-2 mb-1">Popular Tags</h3>
            <div className="flex flex-wrap gap-2 px-2">
              <span className="px-3 py-1.5 bg-[#e4e6e9] rounded-full text-[13px] font-medium text-[#65676B] hover:bg-[#c3c6c9] cursor-pointer">#Thai Food</span>
              <span className="px-3 py-1.5 bg-[#e4e6e9] rounded-full text-[13px] font-medium text-[#65676B] hover:bg-[#c3c6c9] cursor-pointer">#Italian</span>
              <span className="px-3 py-1.5 bg-[#e4e6e9] rounded-full text-[13px] font-medium text-[#65676B] hover:bg-[#c3c6c9] cursor-pointer">#Easy Recipes</span>
              <span className="px-3 py-1.5 bg-[#e4e6e9] rounded-full text-[13px] font-medium text-[#65676B] hover:bg-[#c3c6c9] cursor-pointer">#Healthy</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
