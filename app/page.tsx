import React from "react";

import { Sidebar } from "./components/Sidebar/Sidebar";

export default function Page() {
    return (
        <div className="flex-1 ml-64 px-40 flex justify-center py-5 pt-[70px]">
            <Sidebar />
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="@container">
                    <div className="@[480px]:p-4">
                        <div
                            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/550dedf5-b451-4d74-ae56-383341b67464.png")' }}
                        >
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center" >
                                Discover the best recipes from top chefs
                            </h1>
                            <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                    <div
                                        className="text-[#9a6e4c] flex border border-[#e7dacf] bg-[#fcfaf8] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                                        data-icon="MagnifyingGlass"
                                        data-size="20px"
                                        data-weight="regular"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path
                                                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Search for recipes" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border border-[#e7dacf] bg-[#fcfaf8] focus:border-[#e7dacf] h-full placeholder:text-[#9a6e4c] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"                                    />
                                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#e7dacf] bg-[#fcfaf8] pr-[7px]">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee7f2b] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]" >
                                            <span className="no-select truncate">Search</span>
                                        </button>   
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured chef</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0c7716e4-75d5-4cf2-9202-f07a3a13fb3c.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Chef John</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">1.2M followers</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/b00f2e01-38b3-410a-bac4-53426ee203b4.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Alton Brown</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">3.4M followers</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/76d131b7-6f42-4c55-adbd-9ad70acf5a1b.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Gordon Ramsay</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">7.8M followers</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured recipes</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/c9679c53-718a-4d4b-8fb0-887fa77c14c2.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Pasta with tomato sauce</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">By Chef John</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/b7d6e709-d1eb-4b48-b583-a93303f98f26.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Roast chicken</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">By Alton Brown</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/49d5d1bc-c9dd-4cf0-bdba-a19ce6936553.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Chocolate cake</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">By Gordon Ramsay</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/6c458534-162d-4450-990c-1978cfdbb37d.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Pasta with tomato sauce</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">By Chef John</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/987d541d-3b46-478d-bc35-af447d71e4b0.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Roast chicken</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">By Alton Brown</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/d9ad07f5-b21e-46b1-95b0-e0c0da1fd6b0.png")' }}
                        ></div>
                        <div>
                            <p className="text-[#1b130d] text-base font-medium leading-normal">Chocolate cake</p>
                            <p className="text-[#9a6e4c] text-sm font-normal leading-normal">By Gordon Ramsay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}