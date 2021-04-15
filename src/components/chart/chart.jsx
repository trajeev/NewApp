import React from 'react';
import Chart from 'chart.js'

class LineChart extends React.Component {
  constructor (props) {
    super(props) 
    this.chartRef = React.createRef()
  }

  componentDidMount () {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 30
              }
            }
          ]
        }
      },
      data: {
        labels: this.props.lists.length ? (this.props.lists.map(list => list.franchiseName)) : [],
        datasets: [{
          label: 'orders',
          data: this.props.lists.length ? (this.props.lists.map(list => list.storeNo)) : [],
          backgroundColor: 'grey'
        }]
      }
    })
  }

  componentDidUpdate () {
    this.myChart.data.labels = this.props.lists.length ? (this.props.lists.map(list => list.franchiseName)) : []
    this.myChart.data.datasets[0].data = this.props.lists.length ? (this.props.lists.map(list => list.storeNo)) : []
    this.myChart.update()
  }
  
  render () {
    return <div style = {{width: '70%', margin: 'auto', marginBottom: '50px'}}>
      <canvas ref = {this.chartRef} />
    </div>
  }
}


 
export default LineChart