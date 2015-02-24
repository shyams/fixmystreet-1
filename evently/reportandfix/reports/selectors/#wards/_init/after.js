function(data, event) {
  var widget = $(this);

  nv.addGraph(function() {
    var chart = nv.models.stackedAreaChart()
        .showControls(false)
        .showLegend(false)
        .margin({top: 30, right: 60, bottom: 50, left: 80})

    chart.xAxis
        .axisLabel('month')
        .tickFormat(d3.format(',f'))

    chart.yAxis
        .axisLabel('issues per ward')
        .tickFormat(d3.format('d'))

    d3.select('#' + widget.attr("id"))
        .attr("class", "graph-svg-component")
        .datum(data)
        .transition().duration(500)
        .call(chart)

    nv.utils.windowResize(chart.update)

    return chart;
  });
}
