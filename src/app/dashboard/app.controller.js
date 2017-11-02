(function() {
    'use strict';

    angular
    .module('dashboard')
    .controller('AppController', AppController)
    .run(function() {
      console.log('AppController started');
    });

    function AppController () {
      var $ctrl = this;

      $ctrl.$onInit = _onInit;

      function _onInit() {
        $ctrl.chart = {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          datasets: [
          {
            fillColor: "#fff",
            strokeColor: "#fff",
            pointColor: "#fff",
            pointStrokeColor: "#e67e22",
            data: [4, 3, 5, 4, 6,7,10],
            fill:false,
            backgroundColor:"#fff",
            borderColor: '#ef0000',
          },
          {
            fillColor: "#fff",
            strokeColor: "#fff",
            pointColor: "#fff",
            pointStrokeColor: "#e67e22",
            data: [5,4,5,6,8,9,4],
            fill:false,
            backgroundColor:"#fff",
            borderColor: '#5c9df5',
          },
          {
            fillColor: "#fff",
            strokeColor: "#fff",
            pointColor: "#fff",
            pointStrokeColor: "#e67e22",
            data: [5,7,11,2,33,4,12],
            fill:false,
            backgroundColor:"#fff",
            borderColor: '#ef0000',
          }
          ]
        }
        var ctx = document.getElementById("dvCanvas").getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: $ctrl.chart ,
          options: {
            responsive: false,
             angleLineColor : false,
            pointDot : true,
            datasetFill : true
          }
        });
      }
  }
})();
