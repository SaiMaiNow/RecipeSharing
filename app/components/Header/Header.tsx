import React from 'react'

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3ece7] px-10 py-3 bg-white">
            <div className="flex items-center gap-4 text-[#1b130d]">
                <div className="size-4">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <h2 className="text-[#1b130d] text-lg font-bold leading-tight tracking-[-0.015em]">Recipe Sharing</h2>
            <div className="flex flex-1 justify-end gap-8">
                <label className="flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                            className="text-[#9a6e4c] flex border-none bg-[#f3ece7] items-center justify-center pl-4 rounded-l-xl border-r-0"
                            data-icon="MagnifyingGlass"
                            data-size="24px"
                            data-weight="regular"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                ></path>
                            </svg>
                        </div>
                        <input type="text" placeholder="Search" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-full placeholder:text-[#9a6e4c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" />
                    </div>
                </label>
                <button
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f3ece7] text-[#1b130d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                    <div className="text-[#1b130d]" data-icon="Bell" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                            ></path>
                        </svg>
                    </div>
                </button>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/7eca9ffe-2884-4259-97b6-9685f4138343.png")' }}
                ></div>
            </div>
        </header>
    )
}