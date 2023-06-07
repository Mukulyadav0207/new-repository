import React from "react";
import {BsGithub} from "react-icons/bs"
import { BsArchiveFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineDescription } from "react-icons/md";
import { Bs0Square } from "react-icons/bs";
import {} from "react-icons/bs";
import DumbChip from "../sharedComponents/ChipComponent";
import Modal from "./ClientsEditModal";
import Button from "../sharedComponents/ButtonComponent";

const features = [
  {
    title: "Ongoing Projects",
    icon: BsGithub,
    description1: "Git hub",
    description2: "Git hub",
    description3: "Git hub",
  icon4: BsGithub,
  },
  {
    title: "Past Projects",
    icon: BsGithub,
    description1: "ABCDE",
    description2: "XYZDE",
    description3: "SDFGH",
    description4: "DFGRT",
    icon4: BsGithub,
  },
];



function ClientGeneral() {




  return (
    <>
      <div className="flex gap-8 ">
        <div className="flex m-2 ml-0 ">
          <div className="m-4 ml-0 bg-white rounded-md ">
            <div className="flex items-start mt-2 justify-end pr-2 ">
              <div className="flex-col gap-2 ml-32 w-max">
                <Bs0Square className="flex ml-10 text-5xl text-gray-400 " />
                <p className="flex justify-center text-xl font-bold ">
                  Project Name
                </p>
                <p className="flex justify-center mb-2">Client Name</p>
              </div>
              <div className="flex items-center justify-end gap-2 mt-2 mr-2 text-2xl ml-28">
                <Modal />
                <DumbChip
                  label="Ongoing"
                  textColor="white"
                  backgroundColor="#00D100"
                  fontSize={13}
                />
              </div>
            </div>
            <div className="p-4 m-4 rounded-md bg-[#E9F8F8] ">
              <p className="text-gray-400">Company Name</p>
              <p className="font-semibold">Abc Pvt. Ltd.</p>
              <div className="flex">
                <div className="flex items-center m-2">
                  <BsFillEnvelopeFill />
                </div>
                <div>
                  <p className="text-gray-400">Email Address</p>
                  <p className="font-semibold">xyz@domain.com</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center m-2">
                  <TbPhoneCall />
                </div>
                <div className="m-2">
                  <p className="text-gray-400">Contact Info</p>
                  <p className="font-semibold">XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-start m-2">
                  <MdOutlineDescription />
                </div>
                <div>
                  <p className="text-gray-400">Description</p>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia consequuntur tenetur quibusdam labore hic numquam
                    dolorum ipsum? Autem natus repellendus illo possimus
                    numquam? Consequatur repellendus molestias, tempore quis
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" gap-y-30">
            <div>
              {features.map((feature, index) => (
                <div className="p-2 pl-3 pr-3 bg-[#FFFFFF] border rounded-lg  w-[311px] h-[146px] mt-4">
                  <p className="text-[#413F3F] font-bold text-[18px]">
                    {feature.title}
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-x-3">
                      {<feature.icon className="text-[#0000FF] text-3xl " />}
                      <p className="text-[#413F3F] tracking-tight text-[16px] font-semibold ">
                        {feature.description1}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      {<feature.icon className="text-[#0000FF] text-3xl " />}
                      <p className="text-[#413F3F] tracking-tight text-[16px] font-semibold ">
                        {feature.description2}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-x-3">
                      {<feature.icon className="text-[#0000FF] text-3xl " />}
                      <p className="text-[#413F3F] tracking-tight text-[16px] font-semibold ">
                        {feature.description3}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      {index === 1 ? (
                        <feature.icon4 className="text-[#0000FF] text-3xl" />
                      ) : null}

                      <p className="text-[#413F3F] tracking-tight text-[16px] font-semibold ">
                        {feature.description4}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="justify-end mt-6 ">
          <Button
            icon={<BsArchiveFill />}
            label="Archive"
            borderColor="#FE0012"
            textColor="#FE0012"
            padding="8px 9px"
            border="1px solid black"
            backgroundColor="white"
          />
        </div>
      </div>
    </>
  );
}
export default ClientGeneral;
