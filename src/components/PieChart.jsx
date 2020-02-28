import React, {Component} from 'react'
import { Doughnut } from 'react-chartjs-2';



class Charts extends Component {

  state = {
    ChartData:{
        datasets: [
          {
            label: ['Recovered, Unrecovered'],
            backgroundColor: ['#268aff', "#f4f4cb"],
            data: [18, 5,]
          },
        ],
        labels: ['Recovered', 'Unrecovered'],
    }
}




    render ()  {


        return (
            <div>
                 <Doughnut 
                    options={{
                        responsive:true, 
                        legend:{
                            display:true,
                            position: "right",  
                            // align:"start",  
                            labels: {
                                usePointStyle: true,
                             }},
                        // layout: { margin: 5 }, 
                                                          
                    }}
                    data={this.state.ChartData}
                />
            </div>
        )
    }
}


export default Charts