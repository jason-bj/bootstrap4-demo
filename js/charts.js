function barChart() {
  var ctx = document.getElementById('barChart').getContext('2d');
  data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };
  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  //draw on the dom
  var myChart = new Chart(ctx, {
    type: 'bar',
    data,
    options
  });
}
function lineChart() {
  new Chart(document.getElementById("lineChart"), { "type": "line", "data": { "labels": ["January", "February", "March", "April", "May", "June", "July"], "datasets": [{ "label": "My First Dataset", "data": [65, 59, 80, 81, 56, 55, 40], "fill": false, "borderColor": "rgb(75, 192, 192)", "lineTension": 0.1 }] }, "options": {} });
}
function chartjs() {
  barChart();
  lineChart();
}

function echartBar() {
  var myChart = echarts.init(document.getElementById('echartBar'));
  option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
      { type: 'bar' },
      { type: 'bar' },
      { type: 'bar' }
    ]
  };
  myChart.setOption(option);
}

function echartLine() {
  var myChart = echarts.init(document.getElementById('echartLine'));

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  };
  // use configuration item and data specified to show chart
  myChart.setOption(option);
}

function echart() {
  //must set width and height for echart
  echartLine();
  echartBar();
}

function gpie() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('googlepie'));

    chart.draw(data, options);
  }

}
function ggauge() {
  google.charts.load('current', {'packages':['gauge']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ]);

    var options = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('googlegauge'));

    chart.draw(data, options);

    setInterval(function() {
      data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 13000);
    setInterval(function() {
      data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
      chart.draw(data, options);
    }, 5000);
    setInterval(function() {
      data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
      chart.draw(data, options);
    }, 26000);
  }

}
function googlechart() {
  gpie();
  ggauge();
}
$(document).ready(function () {
  chartjs();
  echart();
  googlechart();
});