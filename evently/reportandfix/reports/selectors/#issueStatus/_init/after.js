function(data, event) {
  var widget = $(this);
  var rows = data.rows
  var chartData = [
    {
      "key": "open",
      "values": [
        {"x":1,"y":0},
        {"x":2,"y":0},
        {"x":3,"y":0},
        {"x":4,"y":0},
        {"x":5,"y":0},
        {"x":6,"y":0},
        {"x":7,"y":0},
        {"x":8,"y":0},
        {"x":9,"y":0},
        {"x":10,"y":0},
        {"x":11,"y":0},
        {"x":12,"y":0}
      ]
    },
    {
      "key":"in progress",
      "values":[
        {"x":1,"y":0},
        {"x":2,"y":0},
        {"x":3,"y":0},
        {"x":4,"y":0},
        {"x":5,"y":0},
        {"x":6,"y":0},
        {"x":7,"y":0},
        {"x":8,"y":0},
        {"x":9,"y":0},
        {"x":10,"y":0},
        {"x":11,"y":0},
        {"x":12,"y":0}
      ]
    }, 
    {
      "key":"closed",
      "values":[
        {"x":1,"y":0},
        {"x":2,"y":0},
        {"x":3,"y":0},
        {"x":4,"y":0},
        {"x":5,"y":0},
        {"x":6,"y":0},
        {"x":7,"y":0},
        {"x":8,"y":0},
        {"x":9,"y":0},
        {"x":10,"y":0},
        {"x":11,"y":0},
        {"x":12,"y":0}
      ]
    }
  ];

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var doc = row.doc;
    var startMonth = row.key.split('-')[1];
    startMonth = parseInt(startMonth);
    var updateObj = chartData[getIssueStatus(doc)].values[startMonth-1]; 
    updateObj['y'] += 1;
    
  };

  createChart(widget, chartData);
  
}

function getIssueStatus (doc) {
  if (doc.closed_at) return 2;
  if (doc.usr_id) return 1;
  if (doc.org_id) return 1;
  return 0;
}

function createChart (widget, data) {
  

  nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
        .showLegend(false)
        .showControls(false)
        .stacked(true)
        .reduceXTicks(false)
        .margin({top: 30, right: 60, bottom: 50, left: 80})

    chart.xAxis
        .axisLabel('month')
        .tickFormat(d3.format(',f'))

    chart.yAxis
        .axisLabel('issues per status')
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