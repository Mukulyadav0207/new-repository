import React from "react";
function Timeline(){
  return (
    <div className="w-[1050px] h-[470px] bg-white p-6 overflow-y-scroll mt-4 ">
      <div className='flex justify-end'>
        <button className="px-2 font-medium text-white bg-blue-700 border border-blue-500 rounded-md border- w-50 hover:bg-blue-600">
          + Incidents
        </button>
      </div>
      <div className=" ml-8 w-[450px]">
        <h2 className="text-3xl font-bold text-gray-400">NOVEMBER 2021</h2>

        <div className="py-16 mt-3 border-l-4 border-gray-200 ml-9 timeline space-y-14">
          <div className="relative">
            <div className="absolute dot top-5 -left-3.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white">
              {" "}
            </div>
            <div className="pl-10">
              <span className="text-xs font-bold tracking-widest timeline-date opacity-40">
                {" "}
                12 NOVEMBER 2021
              </span>
              <h3 className="mb-2 font-semibold tracking-wide timeline-title">
            Addede to Devslane
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, repellat ipsam cupiditate optio earum autem expedita
                neque blanditiis omnis culpa ex hic impedit iure sunt
                consequuntur eaque sint inventore quidem.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute dot top-5 -left-3.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white"></div>
            <div className="pl-10">
              <span className="text-xs font-bold tracking-widest timeline-date opacity-40">
                18 NOVEMBER 2021
              </span>
              <h3 className="mb-2 font-semibold tracking-wide timeline-title">
                Project 1
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, repellat ipsam cupiditate optio earum autem expedita
                neque blanditiis omnis culpa ex hic impedit iure sunt
                consequuntur eaque sint inventore quidem.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute dot top-5 -left-3.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white">
            
            </div>
            <div className="pl-10">
              <span className="text-xs font-bold tracking-widest timeline-date opacity-40">
        
                18 NOVEMBER 2021
              </span>
              <h3 className="mb-2 font-semibold tracking-wide timeline-title">
                Project 1
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, repellat ipsam cupiditate optio earum autem expedita
                neque blanditiis omnis culpa ex hic impedit iure sunt
                consequuntur eaque sint inventore quidem.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-3xl font-bold text-gray-400">DECEMBER 2021</h2>
        </div>
        <div className="py-16 mt-3 border-l-4 border-gray-200 ml-9 timeline space-y-14">
          <div className="relative">
            <div className="absolute dot top-5 -left-3.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white">
              
            </div>
            <div className="pl-10">
              <span className="text-xs font-bold tracking-widest timeline-date opacity-40">

                5 DECEMBER 2021
              </span>
              <h3 className="mb-2 font-semibold tracking-wide timeline-title">
                Project 4
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, repellat ipsam cupiditate optio earum autem expedita
                neque blanditiis omnis culpa ex hic impedit iure sunt
                consequuntur eaque sint inventore quidem.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute dot top-5 -left-3.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white"></div>
            <div className="pl-10">
              <span className="text-xs font-bold tracking-widest timeline-date opacity-40">
                16 DECEMBER 2021
              </span>
              <h3 className="mb-2 font-semibold tracking-wide timeline-title">
                Project 5
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, repellat ipsam cupiditate optio earum autem expedita
                neque blanditiis omnis culpa ex hic impedit iure sunt
                consequuntur eaque sint inventore quidem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Timeline
