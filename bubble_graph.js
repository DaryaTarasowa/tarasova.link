let bubbleChart = function () {
    let width = 600,
    height = 400;

    function chart(selection){
        // you gonna get here

    }

	chart.width = function(value) {
        if (!arguments.length) { return width; }
        width = value;

        return chart;
    }
    chart.height = function(value) {
        if (!arguments.length) { return height; }
        height = value;

        return chart;
    }

    return chart;
}

function search(selection,str) {
  	pattern = new RegExp(str,"i")
  	return _(selection).filter(function(d) { return pattern.exec(d.GENERIC_NAME); });
}
