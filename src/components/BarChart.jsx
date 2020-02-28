import React, {Component} from 'react'
import { Bar } from 'react-chartjs-2';



class Charts extends Component {

  state = {
    ChartData:{
        labels: ['Lag', 'Kan', 'Kad', 'Edo', 'Del', 'Bay'],
        datasets: [
          {
            label: 'Enrolled',
            backgroundColor: '#8EC2FF',
            data: [28, 22, 22, 18, 22, 20]
          },
          {
            label: 'Empowered',
            backgroundColor: '#9b9b9b',
            data: [26, 24, 17, 24, 18, 22]
          }
        ],
    }
}




    render ()  {


        return (
            <div>
                 <Bar 
                    options={{
                        responsive:true, 
                        
                        legend:{
                        display:true,     
                        position: "top",  
                        align:"end",  
                        labels: {
                            usePointStyle: true,
                            // fontSize: 13
                            boxWidth: 8,
                         }
                    }, 
                    layout: {
                        padding: {
                            // left: 50,
                            // right: 50,
                            // top: 0,
                            // bottom: 0
                        }
                    },                
                        scales: {
                          xAxes: [{
                              gridLines: {
                                  display:false,
                              }
                          }],
                          yAxes: [{
                              gridLines: {
                                  display:true
                              }   
                          }]
                        }
                    }}
                    data={this.state.ChartData}
                />
            </div>
        )
    }
}


export default Charts