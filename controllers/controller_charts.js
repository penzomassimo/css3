
myApp.controller('controller_charts', function ($scope) {

    $scope.items = {name:"todoText", city:"new york"};

    // Chart.js Data
    $scope.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'rgba(220,220,220,0.2)',
                strokeColor: 'rgba(220,220,220,1)',
                pointColor: 'rgba(220,220,220,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [120, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                fillColor: 'rgba(151,187,205,0.2)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    $scope.data2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'rgba(220,220,220,0.2)',
                strokeColor: 'rgba(220,220,220,1)',
                pointColor: 'rgba(220,220,220,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [0, 0, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                fillColor: 'rgba(151,187,205,0.2)',
                strokeColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    // Chart.js Options
    $scope.options =  {

        // Sets the chart to be responsive
        responsive: true,

        animation: false,

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,

        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth : 1,

        //Boolean - Whether the line is curved between points
        bezierCurve : false,

        //Number - Tension of the bezier curve between points
        bezierCurveTension : 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot : true,

        //Number - Radius of each point dot in pixels
        pointDotRadius : 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,

        // Function - on animation progress
        onAnimationProgress: function(){},

        // Function - on animation complete
        onAnimationComplete: function(){},

        //String - A legend template
        legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };

    // Chart.js Data
    $scope.data3 = [
        {
            value: 300,
            color:'#F7464A',
            highlight: '#FF5A5E',
            label: 'Red'
        },
        {
            value: 50,
            color: '#46BFBD',
            highlight: '#5AD3D1',
            label: 'Green'
        },
        {
            value: 100,
            color: '#FDB45C',
            highlight: '#FFC870',
            label: 'Yellow'
        },
        {
            value: 40,
            color: '#949FB1',
            highlight: '#A8B3C5',
            label: 'Grey'
        },
        {
            value: 120,
            color: '#4D5360',
            highlight: '#616774',
            label: 'Dark Grey'
        }
    ];

    // Chart.js Options
    $scope.options3 =  {

        // Sets the chart to be responsive
        responsive: true,

        //Boolean - Show a backdrop to the scale label
        scaleShowLabelBackdrop : true,

        //String - The colour of the label backdrop
        scaleBackdropColor : 'rgba(255,255,255,0.75)',

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,

        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY : 2,

        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX : 2,

        //Boolean - Show line for each value in the scale
        scaleShowLine : true,

        //Boolean - Stroke a line around each segment in the chart
        segmentShowStroke : true,

        //String - The colour of the stroke on each segement.
        segmentStrokeColor : '#000000',

        //Number - The width of the stroke value in pixels
        segmentStrokeWidth : 1,

        //Number - Amount of animation steps
        animationSteps : 100,

        //String - Animation easing effect.
        animationEasing : 'easeOutBounce',

        //Boolean - Whether to animate the rotation of the chart
        animateRotate : true,

        //Boolean - Whether to animate scaling the chart from the centre
        animateScale : false,

        //String - A legend template
        legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };





});


