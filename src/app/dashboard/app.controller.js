(function() {
    'use strict';

    angular
    .module('dashboard')
    .controller('AppController', AppController)
    .run(function() {
      console.log('AppController started');
    });

    function AppController (DashboardService) {
      var $ctrl = this;

      $ctrl.$onInit = _onInit;

      function _onInit() {
        $ctrl.data1 = []
        $ctrl.data2 = []
        $ctrl.data3 = []
        $ctrl.labels = []

        angular.forEach(DashboardService.getData(),function(value,key){
          $ctrl.data1.push(value.data.count);
          $ctrl.data2.push(value.data.speed);
          $ctrl.data3.push(value.data.time);
          $ctrl.labels.push(value.zoneId);
        });

        $ctrl.chart = {
          labels: $ctrl.labels,
          datasets: [
          {
            fillColor: "#fff",
            strokeColor: "#fff",
            pointColor: "#fff",
            pointStrokeColor: "#e67e22",
            data: $ctrl.data1,
            fill:true,
            backgroundColor:"#fff",
            borderColor: '#ef0000',
          },
          {
            fillColor: "#fff",
            strokeColor: "#fff",
            pointColor: "#fff",
            pointStrokeColor: "#e67e22",
            data: $ctrl.data2,
            fill:true,
            backgroundColor:"#fff",
            borderColor: '#5c9df5',
          },
          {
            fillColor: "#fff",
            strokeColor: "#fff",
            pointColor: "#fff",
            pointStrokeColor: "#e67e22",
            data: $ctrl.data3,
            fill:true,
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

        var ctx1 = document.getElementById("dvCanvas1").getContext('2d');

        var myChart1 = new Chart(ctx1, {
          type: 'bar',
          data: $ctrl.chart ,
          options: {
            responsive: false,
             angleLineColor : false,
            pointDot : true,
            datasetFill : true,
            fill : true
          }
        });

        var ctx2 = document.getElementById("dvCanvas2").getContext('2d');

        var myChart2 = new Chart(ctx2, {
          type: 'doughnut',
          data: $ctrl.chart ,
          options: {
            responsive: false,
             angleLineColor : false,
            pointDot : true,
            datasetFill : true,
            fill : true
          }
        });
      }
  }
})();
