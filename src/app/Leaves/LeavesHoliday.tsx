
import DeleteConfermation from "./LeavesDeleteConfirmation";



const features = [
  {
    title: "Holiday",
    icon: DeleteConfermation,
    data: [
      {
        Date: "15/04/2023",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing . ",
        "Created By": "Piyush Mishra ",
        "Created At": "12/01/2023",
      },
    ],
  },
  {
    title: "Holiday",
    icon: DeleteConfermation,
    data: [
      {
        Date: "15/04/2023",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit  adipiscing . ",
        "Created By": "Piyush Mishra ",
        "Created At": "12/01/2023",
      },
    ],
  },
];












function Holidays() {
  return (
    <>
      <div className="flex gap-8 mt-5">
        
          <>
            {features.map((feature) => (
              <div className="   p-4 bg-white w-[394px] h-[249px] border rounded-lg ">
                <div className="flex items-center justify-between text-xl font-bold">
                  <p className="text-[#000000]">{feature.title}</p>
                  <feature.icon />
                </div>

                {feature.data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col  mt-5 rounded-md   gap-y-1.5  w-[350px] h-[152px]  "
                  >
                    {Object.entries(item).map(([key, value]) => {
                      return (
                        <p key={key} className="flex justify-between ">
                          <p className="text-[#A59F9F] font-semibold w-[100px] h-fit">
                        
                            {key}
                          </p>

                          <p className="text-[#000000] font-semibold  w-[200px] h-fit">
                        
                            {value}
                          </p>
                        </p>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </>
        

        <div>
          <select className="border border-gray-400 rounded-md ml-36">
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default Holidays;
