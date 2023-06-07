

import React from 'react';

function ProjectsResourceTree() {
  const employees = [
    {
      id: 1,
      name: 'Pratham Singh',
      profile: 'Team Lead',
      time: '09 Hrs/Day',
      src: '',
      children: [
        {
          id: 2,
          name: 'Sagar Singh',
          profile: 'Full Time Employee',
          time: '09 Hrs/Day',
          src: '',
          children: [
            {
              id: 3,
              name: 'Priya Shukla',
              profile: 'Intern',
              time: '09 Hrs/Day',
              src: '',
              children: [],
            },
            {
              id: 4,
              name: 'Aditi Mishra',
              profile: 'Intern',
              time: '09 Hrs/Day',
              src: '',
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: 'Aditya Rai',
          profile: 'Full Time Employee',
          time: '09 Hrs/Day',
          src: '',
          children: [
            {
              id: 6,
              name: 'Nidhi Mishra',
              profile: 'Intern',
              time: '09 Hrs/Day',
              src: '',
              children: [],
            },
            {
              id: 7,
              name: 'Pranav Malviya',
              profile: 'Employee',
              time: '09 Hrs/Day',
              src: '',
              children: [],
            },
            {
              id: 8,
              name: 'Ankita Singh',
              profile: 'Intern',
              time: '09 Hrs/Day',
              src: '',
              children: [],
            },
          ],
        },
      ],
    },
  ];

  const renderEmployee = (employee) => {
    return (
      <div key={employee.id} className="my-2 text-sm">
        <div className="items-center">
          <div className="w-[150px] h-[100px] rounded-lg bg-white mr-2 flex-col flex items-center ">
            <p className="mr-2 font-bold">{employee.name}</p>
            <p className="text-sm text-gray-500">{employee.profile}</p>
            <p className="text-sm border rounded-md bg-[#E9F8F8] px-3 py-1 ">
              {employee.time}
            </p>
          </div>
        </div>
        {employee.children.length > 0 && (
          <div className="pl-6">
            {employee.children.map((child) => (
              <div key={child.id} className="relative">
                <div className="absolute border-l border-[#0000FF] top-4 left-0 h-full"></div>
                {renderEmployee(child)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return <div className="mt-4">{employees.map((employee) => renderEmployee(employee))}</div>;
}

export default ProjectsResourceTree;