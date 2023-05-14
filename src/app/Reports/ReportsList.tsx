import React from "react";
import { BiXCircle } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";

const data = [
  { name: "Object 1", items: ["Item 1.1", "Item 1.2", "Item 1.3"] },
  {
    name: "Object 2",
    items: ["Item 2.1", "Item 2.2", "Item 2.3"],
  },
  {
    name: "Object 3",
    items: ["Item 3.1", "Item 3.2", "Item 3.3"],
  },
];




function Report() {
  const keyValuePairs = [
    { key: "Apple", value: 10 },
    { key: "Banana", value: 20 },
    { key: "Orange", value: 15 },
  ];

  const icons = [
    <i className="fas fa-apple"></i>,
    <i className="fas fa-banana"></i>,
    <i className="fas fa-orange"></i>,
  ];

  const keyValuePairsWithIcons = keyValuePairs.map((pair, index) => {
    const icon = icons[index];
    return (
      <div key={index}>
        {icon} {pair.key}: {pair.value}
      </div>
    );
  });

  return (
    <div>
      <h1>Key-Value Pairs with Icons</h1>
      {keyValuePairsWithIcons}
    </div>
  );
};

export default Report;
