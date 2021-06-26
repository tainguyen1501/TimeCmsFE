import React from 'react';
import { Doughnut } from "react-chartjs-2";

function Chart3() {
    return (
        <div className="flex flex-col col-span-full sm:col-span-6 relative p-8 h-50">
        <Doughnut
        data={{
          labels: [
            "Net Profit",
            "Paypal Fee",
            "Shipping",
            "Tax",
            "Cost"
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
              data: [42478, 5267, 12734, 7284, 2433]
            }
          ]
        }}
        
        option={{
          plugins: {
            datalabels: {
              display: false
            }
          },
          
          title: {
            display: false,
            text: "Predicted world population (millions) in 2050",
            maintainAspectRatio: false,
            responsive: true,
          }
        }}
      />

        </div>
    );
}

export default Chart3;