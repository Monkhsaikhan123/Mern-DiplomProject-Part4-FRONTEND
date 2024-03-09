import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const options = {
    indexAxis:'y',
    elements:{
        bar:{
            borderWidth:2,
        },
    },
    responsive:true,
    plugins:{
        legend:{
            position:'left',
        },
        title:{
            display:true,
            text:'Chart.js Horintal Bar Chart'
        }
    }
}
const label = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const data = {
    label,
    datasets:[
        {
            label:"Dataset 1",
            data:[1,2,3,4,5,4],
            borderColor:'rgb(255,99,132)',
            backgroundColor:'rgb(255,99,132,0.5)',
        },
        {
            label:"Dataset 2",
            data:[1,2,3,4,5,4],
            borderColor:'rgb(53,162,232)',
            backgroundColor:'rgb(53,162,232,0.5)',
        }
    ]
}

const Chart = () => {

    
  return (
    <div>
        <div style={{width:'80', height:'50%'}}>
            <Bar data={data} options={options}/>
        </div>
    </div>
        
  )
}

export default Chart