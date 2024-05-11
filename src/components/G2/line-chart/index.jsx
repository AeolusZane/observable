import React, { Component } from "react";
import { Chart } from "@antv/g2";
class LineChartG2 extends Component {
  componentDidMount() {
    const { data } = this.props;
    const height = 300;
    const width = 1000;

    var chart = new Chart({
      container: document.getElementById("line"),
      animate: false,
      height,
      width,
      tooltip: false,
    });
    chart.data(data);
    chart.axis("data", {
      title: "data",
    });
    chart.axis("value", {
      title: "value",
    });
    // chart.tooltip({
    //   crosshairs: {
    //     type: 'rect'
    //   }
    // });
    chart
      .line()
      .encode("x", "data")
      .encode("y", "value")
      .tooltip(false)
    chart.render();
  }
  render() {
    return (
      <div>
        <div id="line" />
      </div>
    );
  }
}

export default LineChartG2;
