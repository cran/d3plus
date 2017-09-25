HTMLWidgets.widget({

  name: 'd3plus',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        document.getElementById(el.id).innerHTML = "";

        var dta = HTMLWidgets.dataframeToD3(x.data);
        var nds = HTMLWidgets.dataframeToD3(x.nodes);
        var lnks = HTMLWidgets.dataframeToD3(x.links);

        console.log(x);
        console.log(dta);
        console.log(nds);
        console.log(lnks);

        window.x = x;
        window.el = el;

        var chart;

        switch (x.type){
            case "treemap":
                chart = new d3plus.Treemap()
                  .data(dta);
                break;
            case "line":
                chart = new d3plus.LinePlot()
                  .data(dta);
                break;
            case "point":
                chart = new d3plus.Plot()
                  .data(dta);
                break;
            case "bar":
                chart = new d3plus.BarChart()
                  .data(dta);
                break;
            case "hbar":
                chart = new d3plus.BarChart()
                  .data(dta)
                  .discrete("y")
                  .x("y")
                  .y("x");
                break;
            case "area":
                chart = new d3plus.AreaPlot()
                  .data(dta);
                break;
            case "network":
                chart = new d3plus.Network()
                  .links(lnks)
                  .nodes(nds);
                break;
            default:
                chart = null;
        }


        chart
          .select("#" + el.id);


        setTimeout(function() { chart.render(); }, 10);


      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
