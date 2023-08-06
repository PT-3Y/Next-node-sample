"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

function Home() {
  return (
    <main className="p-[150px] mb-[150px]">
      <div  className={ 'grid '+ styles.bgrid+' place-items-center flex justify-center'} >
        <div className="mt-[120px] rounded-[28px] w-[312px] h-[454px] bg-[#ECE6F0]">
          <div className="p-[24px] gap-[16px] h-[196px]">
            <h2 className="text-[24px] my-[4px]">Upwork</h2>
            <p className="text-[14px] font-normal">
              Upwork connects businesses with independent professionals and
              agencies around the globe. Where companies and freelancers work
              together in new ways that...
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center px-3 pt-3 pb-2 text-center border-b-[1px] border-[#E456F0] border-opacity-10">
              <div className="w-[40px] h-[40px] rounded-full bg-[#EADDFF] flex justify-center items-center">
                A
              </div>
              <div className="w-[139px] text-left">List Item</div>
              <div className="flex gap-2 items-center">
                <span>100+</span>
                <input type="checkbox" className="w-5 h-5 accent-[#6750a4]" />
              </div>
            </div>
            <div className="flex justify-between items-center  px-3 pt-3 pb-2 text-center border-b-[1px] border-[#E456F0] border-opacity-10">
              <div className="w-[40px] h-[40px] rounded-full bg-[#EADDFF] flex justify-center items-center">
                A
              </div>
              <div className="w-[139px] text-left">List Item</div>
              <div className="flex gap-2 items-center">
                <span>100+</span>
                <input type="checkbox" className="w-5 h-5 accent-[#6750a4]" />
              </div>
            </div>
            <div className="flex justify-between items-center px-3 pt-3 pb-2 text-center border-b-[1px] border-[#E456F0] border-opacity-10">
              <div className="w-[40px] h-[40px] rounded-full bg-[#EADDFF] flex justify-center items-center">
                A
              </div>
              <div className="w-[139px] text-left">List Item</div>
              <div className="flex gap-2 items-center">
                <span>100+</span>
                <input type="checkbox" className="w-5 h-5 accent-[#6750a4]" />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-row-reverse  px-3 gap-2 h-[88px] text-[#6750a4] font-medium">
            <button className="w-[77px] h-[40px]">Action 1</button>
            <button className="w-[77px] h-[40px]">Action 2</button>
          </div>
        </div>

        <div className="mt-[120px] w-[417px] h-[397px] p-[40px] bg-[#D9D9D9] flex flex-col justify-between mb-[20px]">
          <div className="flex justify-between text-center">
            <Link
              className="w-[143px] h-[137px] flex justify-center items-center  bg-[#FFE3E3]"
              href="/Catfact"
            >
              Catfact
            </Link>
            <Link
              className="w-[143px] h-[137px] flex justify-center items-center  bg-[#FFE3E3]"
              href="/Bitcoin"
            >
              Bitcoin Price
            </Link>
          </div>
          <div className="flex justify-between">
            <Link
              className="flex w-[143px] h-[137px] justify-center items-center  bg-[#FFE3E3]"
              href="/Activity"
            >
              Activity
            </Link>
            <Link
              className="flex w-[143px] h-[137px] justify-center items-center  bg-[#FFE3E3]"
              href="/Random"
            >
              Dog image
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
