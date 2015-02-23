function(data, event) {
  var widget = $(this);
  var rows = data.rows
  var chartData = {};
  chartData.key = 'avg lifetime (days)';
  chartData.values = [];
  helpObject = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: []
  };

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var startMonth = row.key.split('-')[1];
    startMonth = parseInt(startMonth);
    docLifetime = getDocLifetime(row.doc);
    
    helpObject[startMonth].push(docLifetime);
  };

  for (var key in helpObject) {
    if (helpObject[key].length > 0) {
      var value = {
        "x": key,
        "y": (addArrVal(helpObject[key]) / helpObject[key].length)
      }
      chartData.values.push(value);
    } else {
      chartData.values.push({"x": key, "y": 0});
    }
    
  }

  createChart(widget, [chartData]);
}

function addArrVal (arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    count += arr[i];
  };
  return count
}

function getDocLifetime (doc) {
  var creationDate = new Date(doc['opened_at']);
  var today
  if (doc['closed_at']) {
    today = new Date(doc['closed_at']);
  } else {
    var today = new Date();  
  }
  var timeDiff = Math.abs(today.getTime() - creationDate.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  
}

function createChart (widget, data) {
 
  nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
        .showLegend(false)
        .showControls(false)
        .reduceXTicks(false)
        .margin({top: 30, right: 60, bottom: 50, left: 80})

    chart.xAxis
        .axisLabel('month')
        .tickFormat(d3.format(',f'))

    chart.yAxis
        .axisLabel('avg lifetime (days)')
        .tickFormat(d3.format('d'));

    d3.select('#' + widget.attr("id"))
        .attr("class", "graph-svg-component")
        .datum(data)
        .transition().duration(500)
        .call(chart)

    nv.utils.windowResize(chart.update);

    return chart;
  });
}