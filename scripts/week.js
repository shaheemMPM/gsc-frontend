var ctx = document.getElementById('chartWeek').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [{
          label: "Weekly Activity",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [40, 35, 30, 30, 20, 25, 28],
          fill: origin,
      }]
  },

  // Configuration options go here
  options: {
    elements: {
      line: {
        tension: 0.4
      }
    }
  }
});
