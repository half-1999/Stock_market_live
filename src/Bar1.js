import React,{useState , useEffect} from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

export default function Bar1() {

    const [chartData, setChartData] = useState({
        datasets:[]
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels:["Stock1","Stock2","Stock3","Stock4","Stock5"],
            datasets:[{
                label:"Stocks",
                data:[12,13,14,14,1,45,22],
                borderColor:"rgb(53,162,235)",
                backgroundColor:"rgba(53,162,235,0.4)"
              }]
        })

        setChartOptions({
              responsive:true,
              plugins:{
                legend:{
                  position:"top"
                },
                title:{
                  display:true,
                  text:"Stock Market"
                },
              },
             })
    }, [])

  return (
    <div>
        <Bar options={chartOptions} data={chartData} />
    </div>
  )
}
