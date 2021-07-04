//Traffic chart
let trafficCanvas = document.getElementById('traffic-chart');
const navUl = document.getElementById('traffic-list');

const hourlyLabels = ['16-22','23-29','30-5','6-12','13-19','20-26','27-3', '4-10','11-17','18-24','25-31'];
const hourlyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

const dailyLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dailyData = [22000, 24000, 19500, 17000, 23500, 18000, 24500];

const weeklyLabels = ['27-3', '4-10', '11-17', '18-24', '25-31', '1-7'];
const weeklyData = [60000, 45000, 65000, 50000, 55000, 40000];

const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthlyData = [150000, 200000, 230000, 175000, 160000, 240000, 230000, 140000, 250000, 165000, 185000, 155000];

let trafficData = {
    labels: hourlyLabels,
    datasets: [{
      data: hourlyData,
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
      borderColor: 'rgba(112, 127, 194, .3)', 
      pointStyle: 'circle',
      tension: .5,
      fill: {
          target: 'origin',
          below: 'rgba(112, 127, 194, .3)'
      },
      clip: 0
    }]
  };

 let trafficOptions ={
     aspectRatio: 2,
     scales: {
         y: {beginAtZero: true
     }
    },
    plugins:
    {
        legend:{
            display: false
        }
    }
}
   //make first chart
    let trafficChart = new Chart(trafficCanvas,{
    type: 'line',
    data: trafficData,  
    options: trafficOptions
  });

  //dynamic updating of chart

  function updateData(datatype){
    if(datatype === "Hourly"){
        trafficData.datasets[0].data = hourlyData;
        trafficData.labels = hourlyLabels;          
     }else if(datatype === "Daily"){
       trafficData.datasets[0].data = dailyData;  
       trafficData.labels = dailyLabels;  
     }else if(datatype ==="Weekly"){
       trafficData.datasets[0].data = weeklyData;
       trafficData.labels = weeklyLabels; 
     }else if(datatype === "Monthly"){
       trafficData.datasets[0].data = monthlyData;
       trafficData.labels = monthlyLabels; 
     }
     updateChart(trafficChart, trafficData);
};

function updateChart(chart, data){
    chart.update({
        duration: 100,
        easing: 'linear',
    });
  };

  navUl.addEventListener ('click', (e) => {
      let target = e.target;
      let datatype = target.textContent;
      updateData(datatype);
      updateChart(trafficChart, trafficData);
  });


  //Daily Traffic Bar Chart
  let dailyTrafficCanvas = document.getElementById('daily-chart');

  let dailyTrafficData = {
          labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          datasets: [{
              label: 'Number of Visits',
              data: [75, 115, 175, 125, 225, 200, 100],
              borderWidth: 1,
              backgroundColor: 'rgba(61, 28, 206, 0.61)'
          }]
      };

  let dailyTrafficOptions = {
    scales:{
        y:{
            beginAtZero: true
        }
    },
    plugins:{
        legend:{
            display: false
        }
    }
  };

  let dailyTrafficBarChart = new Chart(dailyTrafficCanvas, {
      type: 'bar',
      data: dailyTrafficData,
      options: dailyTrafficOptions
  });

//Doughnut chart
let mobileUsersCanvas = document.getElementById('doughnut-chart');

let mobileUserData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: 'percent of users',
        data: [66, 17, 17],
        backgroundColor: ['rgba(61, 28, 206, 0.61)', 'rgba(92, 212, 160, 0.82)', 'rgba(92, 207, 226, 1)'],
        borderWidth: 0
    }]
};

let mobileUsersOptions = {
    plugins: {
        legend: {
            position: 'right'
        }
    }
};

let mobileUserDoughnutChart = new Chart(mobileUsersCanvas, {
    type: 'doughnut',
    data: mobileUserData,
    options: mobileUsersOptions
});