function(data, event) {
  var widget = $(this);

  nv.addGraph(function() {
    var chart = nv.models.multiBarHorizontalChart()
        .showLegend(false)
        .showControls(false)
        .margin({top: 30, right: 60, bottom: 50, left: 80})

    chart.xAxis
        .tickFormat(d3.format('d'))

    chart.yAxis
        .axisLabel('change to previous month')
        .tickFormat(d3.format('d'))

    var svg = d3.select('#' + widget.attr("id"))
        .attr("class", "graph-svg-component")
        .datum(data)
        .transition().duration(500)
        .call(chart)

    svg.selectAll("rect")
        .attr("fill", function(d) {
          if (d.y >= 0)
            return "rgb(31, 119, 180)"
          else
            return  "rgb(214, 39, 40)"
          })

    nv.utils.windowResize(chart.update)

    return chart;
  });
}