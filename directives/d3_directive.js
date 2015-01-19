
myApp.directive('radarChart',function(){

    function link($scope, element, attr){


        //Make an SVG Container
        var svgContainer = d3.select("radar-chart").append("svg")
            .attr("width", 800)
            .attr("height", 800);

        //Draw the Circle
        var circle = svgContainer.append("circle")
            .attr("cx", 30)
            .attr("cy", 30)
            .attr("r", 20);

////////////////////////////////////////////////////////////////////////////////////////////////
        var data = [4, 8, 15, 16, 23, 42, 150];

        d3.select("radar-chart")
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .style("width", function(d) { return d * 10 + "px"; })
            .text(function(d) { return d; });




        /// working w/ axis
        var axisScale = d3.scale.linear()
            .domain([0, 100])
            .range([0, 400]);

        //Create the Axis
        var xAxis = d3.svg.axis()
            .scale(axisScale);

        var xAxisGroup = svgContainer.append("g")
            .call(xAxis);





    }

    return {
        restrict: 'E',
        /*scope: { 'data': '=' },*/ // this is creating an isolated scope
        link: link
        /*template: '<h1>city: {{customers.city}} - {{name}}</h1>'*/
    }


});

