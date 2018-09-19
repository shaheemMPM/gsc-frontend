var ctx = document.getElementById('chartMonth').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
          label: "Monthly Activity",
          backgroundColor: 'rgb(16, 186, 47)',
          borderColor: 'rgb(16, 186, 47)',
          data: [160, 170, 180, 170, 170, 160, 150, 140, 150, 120, 110, 140],
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
