import React from 'react';
import { Bar } from "react-chartjs-2";

function Chart1() {
  
    return (
        <div className="flex flex-col col-span-full sm:col-span-6">
        <header className="px-5 py-4 border-b border-gray-100 flex items-center">
            <h2 className="font-semibold text-gray-800">Sales Over Time (all stores)</h2>
        </header>
        <Bar
    data={{
      labels: [
        "Africa",
        "Asia",
        "Europe",
        "Latin America",
        "North America"
      ],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850"
          ],
          data: [2478, 5267, 734, 784, 433]
        }
      ]
    }}
    options={{
      legend: { display: false },
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050"
      }
    }}
  />
        </div>
    );
}

export default Chart1;