import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Chart_Props } from "./type";

const ChartWidget = (props: Chart_Props) => {

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const myChartRef = chartRef.current?.getContext('2d');
  
  useEffect(() => {
    if (myChartRef) {
      const config = {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
      new Chart(myChartRef, config);
    }
  }, []);


  return(
    <div className="container">
      <div className="">
        Data Title
      </div>
        <canvas ref={chartRef}></canvas>
      <div className="w-64 h-64">
      </div>
    </div>
  )
}

export default ChartWidget;