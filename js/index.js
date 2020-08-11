Chart.defaults.global.defaultFontFamily = "'Open Sans', 'sans-serif'";

window.chartColors = {
    primary: '#3F84FC',
    secondary: '#727F94',
    success: '#1DAB47',
    info: '#8A3FFC',
    warning: '#FCAE3F',
    superwarning: '#fd7e14',
    danger: '#FC413F',
};
$(document).ready(function () {
  var ctx = document.getElementById("spurChartjsBar").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [{
        label: 'Blue',
        data: [12, 19, 3, 5, 2],
        backgroundColor: window.chartColors.primary,
        borderColor: 'transparent'
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
});