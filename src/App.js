import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Logo from './images/sydney-trains-logo.png'
import logo from './Assest/sydney-trains-logo.png'
import logo2 from './Assest/NSW.png'
import logo3 from './Assest/SydTrains_2.png'
// Import Highcharts
import Highcharts from "highcharts/highstock";
import Chart from "./components/Chart";
require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);



function App() {
  const  [data,setData] = useState({})

  console.log("datra",data);

  useEffect(() => {
    axios
      .get('http://localhost:3004/posts')
      .then(response => {
        setData(response.data)
      })
  }, [])

  const chartOptions = {
    chart: {
      width: 300,
      type: "gauge",
      // height:700
    },
  
    pane: {
      center: ["50%", "85%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -70,
      },
      stops: [
        [0.1, "#55BF3B"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 0,
      labels: {
        y: 16,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [0],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  
  const chartOptions1 = {
    chart: {
      width: 150,
      height: 166,
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "green",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "sector 1 100.0%",
        y: -50,
      },
      stops: [
        [0.1, "#008000"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 3,
      labels: {
        y: 10,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 6,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [100],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px ;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartOptions2 = {
    chart: {
      width: 150,
      height: 166,
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "#FF8C00",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "sector 2 100.0%",
        y: -50,
      },
      stops: [
        [0.1, "#e67c2c"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 10,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 6,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [72],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartOptions3 = {
    chart: {
      width: 150,
      height: 166,
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "yellow ",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "sector 3 100.0%",
        y: -50,
      },
      stops: [
        [0.1, "#e6c42c"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 10,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 6,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [93],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartOptions4 = {
    chart: {
      width: 150,
      height: 166,
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "green",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "sector 4 100.0%",
        y: -50,
      },
      stops: [
        [0.1, "#55BF3B"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 10,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 6,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [100],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartOptions5 = {
    chart: {
      width: 150,
      height: 166,
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "#FF8C00",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "sector 5 100.0%",
        y: -50,
      },
      stops: [
        [0.1, "#e67c2c"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 10,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 6,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [80],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartOptions7 = {
    chart: {
      width: 230,
  
      height: 270,
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "#FF8C00",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -70,
      },
      stops: [
        [0.1, "#7c2c"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 3,
      labels: {
        y: 16,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [85.9],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartOptions8 = {
    chart: {
      width: 230,
      height: 270,
  
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85%"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "#FF8C00",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -70,
      },
      stops: [
        [0.1, "#e67c2c"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 3,
      labels: {
        y: 16,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [88.6],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartOptions6 = {
    chart: {
      width: 150,
      height: 166,
      type: "gauge",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "#FF8C00",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "",
      },
    },
  
    tooltip: {
      enabled: false,
    },
  
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "sector 6 100.0%",
        y: -50,
      },
      stops: [
        [0.1, "#e67c2c"], // green
        // [0.5, "#DDDF0D"], // yellow
        // [0.9, "#DF5353"] // red
      ],
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      labels: {
        y: 10,
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 6,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    title: null,
    series: [
      {
        name: "",
        data: [88],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar9 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["#FF8C00"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [87],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar10 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["yellow"],
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
    },
  
    yAxis: {
      min: 0,
      // max: 100,
      tickAmount: 0,
      title: {
        text: "",
        // y: -50
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 0,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    series: [
      {
        data: [92.9],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        // tooltip: {
        //   valueSuffix: ""
        // }
      },
    ],
  };
  const chartBar11 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["#FF8C00 "],
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
    },
  
    yAxis: {
      min: 0,
      // max: 100,
      tickAmount: 0,
      title: {
        text: "",
        // y: -50
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 0,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    series: [
      {
        data: [67.6],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        // tooltip: {
        //   valueSuffix: ""
        // }
      },
    ],
  };
  const chartBar12 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["#FF8C00"],
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
  
    pane: {
      center: ["50%", "85"],
      size: "100%",
    },
  
    yAxis: {
      min: 0,
      // max: 100,
      tickAmount: 0,
      title: {
        text: "",
        // y: -50
      },
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 0,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    series: [
      {
        data: [62.6],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        // tooltip: {
        //   valueSuffix: ""
        // }
      },
    ],
  };
  const chartBar13 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["#FF8C00"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [66.7],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar14= {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["#FF8C00"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [54.5],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar15= {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["green"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [100],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar16 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["green"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [100],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar17 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["green"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [96.7],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar18= {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["green"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [100],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };  
  const chartBar19 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["yellow"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [92.8],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar20= {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["yellow"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [94.1],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar21 = {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["green"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [97.1],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  const chartBar22= {
    chart: {
      width: 300,
      height: 80,
      type: "bar",
    },
    title: {
      text: "",
    },
    colors: ["green"],
  
    legend: {
      enabled: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "black",
    },
    // labels:{
    //   enabled:false
    // },
    labels: {
      overflow: "",
      enabled: false,
    },
    pane: {
      // center: ["50%", "85"],
      // size: "100%",s
    },
  
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "",
        y: -50,
      },
      // lineWidth: 0,
      // minorTickInterval: null,
      // tickAmount: 2,
      // labels: {
      //   y: 10
      // }
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 2,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    //  title: null,
    series: [
      {
        name: "",
        data: [97.7],
        dataLabels: {
          format:
            '<div style="text-align:center"><span style="font-size:16px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              "black") +
            '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver"></span></div>',
        },
        tooltip: {
          valueSuffix: "",
        },
      },
    ],
  };
  return (
    <div className="highcharts-figure">
      <div className="header">
        <div className="Logo">
          <img src={logo} alt="" />
        </div>
        <div className="left-header">
            <h1>Sydney Trais Network</h1>
            <div className="two-logos">
              <div className="NSW-Logo">
                <img src={logo2} alt="" />
              </div>
              <div className="logo3">
                <img src={logo3} alt="" />
              </div>
            </div>
        </div>
      </div>
      <div className="header-2">
        <div className="dropdown">
          <select name="" id="">
            <option value="">Combined Network</option>
            <option value="">AM Peak</option>
            <option value="">PM Peak</option>
            <option value="">AM+PM Peak</option>
          </select>
          <select name="" id="">
            <option value="">Sydney Trains</option>
            <option value="">Sydney Trains</option>
            <option value="">Sydney Trains</option>
            <option value="">Sydney Trains</option>
          </select>
          <select name="" id="">
            <option value="">New TrainLink</option>
            <option value="">New</option>
            <option value="">New</option>
            <option value="">New</option>
          </select>
        </div>
          <div class="weather-widget">
          <a class="weatherwidget-io" href="https://forecast7.com/en/n33d87151d21/sydney/" data-label_1="SYDNEY"   data-label_2="WEATHER" data-days="5" data-theme="pure" >SYDNEY WEATHER</a>
          </div>       
      </div>
  <div className="all-charts">
      <li className="firstchart">
        
        <div className="first-chart ">
          <div className="">
            <h5>24*7 Progressing <br/><br/>
            Lost Customer Minutes</h5>
          </div>
          <div>
            <Chart
              options={chartOptions}
              highcharts={Highcharts}
              className="element"
              />
          </div>
        </div>
      </li>
    <div className="two-down-charts"> 



      <div className="top-2-charts">
      <div className="chartOptions7">
        <h4>Peak Constumer Om Time </h4>
        <Chart options={chartOptions7} highcharts={Highcharts} />
        <div className="chartOptions8">
          <h4>Peak (Services) Punctuality </h4>
          <Chart options={chartOptions8} highcharts={Highcharts} />
        </div>
      </div>
    
      </div>
      <div className="top-3-charts">
      <li>
        <Chart
          options={chartOptions1}
          highcharts={Highcharts}
          className="element"
        />
      </li>

      <li>
        <Chart
          options={chartOptions2}
          highcharts={Highcharts}
          className="element"
        />
      </li>

      <li>
        <Chart
          options={chartOptions3}
          highcharts={Highcharts}
          className="element"
        />
      </li>
      <li>
        <Chart
          options={chartOptions4}
          highcharts={Highcharts}
          className="element"
        />
      </li>

      <li>
        <Chart
          options={chartOptions5}
          highcharts={Highcharts}
          className="element"
        />
      </li>

      <li>
        <Chart
          options={chartOptions6}
          highcharts={Highcharts}
          className="element"
        />
      </li>
      </div>
    </div>
  </div>
      <div id="tables">
        <div className="tables-1">
          <table>
            <tr>
              <th></th>
              <th colSpan={3}>Train Impact</th>
            </tr>
            <tr>
              <td></td>
              <td>Metropolitan</td>
              <td>Intercity</td>
              <td>Network</td>
            </tr>
            <tr>
              <td className="tcl-1 clr">Planned Services</td>
              <td className="clr">327</td>
              <td className="clr">35</td>
              <td className="clr">362</td>
            </tr>
            <tr>
              <td className="tcl-1">Not Run Yet</td>
              <td>90</td>
              <td>0</td>
              <td>90</td>
            </tr>
            <tr>
              <td className="tcl-1 clr">On-Time</td>
              <td className="clr">
                <tr>
                  <td>207</td>
                  <td>87.3%</td>
                </tr>
              </td>
              <td className="clr">
                <tr>
                  <td>34</td>
                  <td>91.1%</td>
                </tr>
              </td>
              <td className="clr">
                <tr>
                  <td>241</td>
                  <td>88.6%</td>
                </tr>
              </td>
            </tr>
            <tr>
              <td className="tcl-1">Late</td>
              <td>27</td>
              <td>1</td>
              <td>28</td>
            </tr>
            <tr>
              <td className="tcl-1 clr">Cancelaation</td>
              <td className="clr">3</td>
              <td className="clr">0</td>
              <td className="clr">3</td>
            </tr>
          </table>

          <br />
          <br />
          <table>
            <tr>
              <th></th>
              <th colSpan={3}>Constumer Impact</th>
            </tr>
            <tr>
              <td></td>
              <td>Metropolitan</td>
              <td>Intercity</td>
              <td>Network</td>
            </tr>
            <tr>
              <td className="tcl-1 clr">Planned Customers</td>
              <td className="clr ">30998</td>
              <td className="clr">2253</td>
              <td className="clr">33251</td>
            </tr>
            <tr>
              <td className="tcl-1">Customer on-Time</td>
              <td>
                <tr>
                  <td>15651</td>
                  <td>84.7%</td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>1720</td>
                  <td>97.6%</td>
                </tr>
              </td>
              <td>
                <tr>
                  <td>17371</td>
                  <td>85.9%</td>
                </tr>
              </td>
            </tr>
            <tr>
              <td className="tcl-1 clr">Customer Not On-Time</td>
              <td className="clr">
                <tr>
                  <td>2819</td>
                  <td>15.3%</td>
                </tr>
              </td>
              <td className="clr">
                <tr>
                  <td>43</td>
                  <td>2.4%</td>
                </tr>
              </td>
              <td className="clr">
                <tr>
                  <td>2862</td>
                  <td>14.1%</td>
                </tr>
              </td>
            </tr>
          </table>
        </div>

        <div className="table-2">
          <table>
            <tr>
              <th>
                {/* <span>Top 1 IIMS Incident</span> */}
                <p>Top 1 IIMS Incident </p>
                <div class="circle"></div>
              </th>
              <th>
                <p>Top 2 IIMS Incident</p>
                <div class="circle"></div>
              </th>
              <th>
                <p>Top 3 IIMS Incident</p>
                <div class="circle"></div>
              </th>
            </tr>
            <tr>
              <td>Incident Time:</td>
              <td>Incident Time:</td>
              <td>Incident Time:</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>Type:</td>
              <td>Type:</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>Location:</td>
              <td>Location:</td>
            </tr>
            <tr>
              <td>Train Delay:</td>
              <td>Train Delay:</td>
              <td>Train Delay:</td>
            </tr>
            <tr>
              <td className="pass-row">Passanger Delay:</td>
              <td className="pass-row">Passanger Delay:</td>
              <td className="pass-row">Passanger Delay:</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="text">
        <h2>Trip Network Performance-Punctuality and Customer On-Time</h2>
      </div>

      <div>
        <div className="flowchart">
          <div className="parent-1">
            <div className="leftside-chart">
              <div className="parent-1">
            <div className="toggle">
              <h1>T1 </h1>
            </div>
            <div className="charts">
              <div className="upperChart-1">
                <div className="location-upper">
                  <p className="discript">North Shor</p>
                  <div>
                    <p className="discript-2">
                      POST:<span style={{ color: "#FF0000" }}>87.0%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar9}
                      highcharts={Highcharts}
                      className="element"
                    />
                  </div>
                </div>
              </div>
              <div className="lowerChart-1">
                <div className="location-upper">
                  <p className="discript">& Western Line</p>
                  <div>
                    <p className="discript-2">
                      COT:<span style={{ color: "#FF8C00" }}>92.9%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar10}
                      highcharts={Highcharts}
                      className="element testing-nihal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="rightside-chart">
              <div className="parent-1">
            <div className="toggle">
              <h1>T2 </h1>
            </div>
            <div className="charts">
              <div className="upperChart-1">
                <div className="location-upper">
                  <p className="discript">InnerWest <br/>& LEppington<br/>Line</p>
                  <div>
                    <p className="discript-2">
                      POST:<span style={{ color: "#FF0000" }}>67.6%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar11}
                      highcharts={Highcharts}
                      className="element"
                    />
                  </div>
                </div>
              </div>
              <div className="lowerChart-1">
                <div className="location-upper">
                  <p className="discript"></p>
                  <div>
                    <p className="discript-2">
                      COT:<span style={{ color: "#FF8C00" }}>62.6%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar12}
                      highcharts={Highcharts}
                      className="element testing-nihal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
{/* ********************************************************************************** */}

             <div className="parent-2">
            <div className="leftside-chart">
              <div className="parent-1">
            <div className="toggle">
              <h1>T3</h1>
            </div>
            <div className="charts">
              <div className="upperChart-1">
                <div className="location-upper">
                  <p className="discript">Bankstown</p>
                  <div>
                    <p className="discript-2">
                      POST:<span style={{ color: "#FF0000" }}>66.7%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar13}
                      highcharts={Highcharts}
                      className="element"
                    />
                  </div>
                </div>
              </div>
              <div className="lowerChart-1">
                <div className="location-upper">
                  <p className="discript">Line</p>
                  <div>
                    <p className="discript-2">
                      COT:<span style={{ color: "#FF8C00" }}> 54.5%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar14}
                      highcharts={Highcharts}
                      className="element testing-nihal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="rightside-chart">
              <div className="parent-1">
            <div className="toggle">
              <h1>T4</h1>
            </div>
            <div className="charts">
              <div className="upperChart-1">
                <div className="location-upper">
                  <p className="discript">Eastern<br/>Suburbs<br/>& Illwarro Line</p>
                  <div>
                    <p className="discript-2">
                      POST:<span style={{ color: "#FF0000" }}>100%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar15}
                      highcharts={Highcharts}
                      className="element"
                    />
                  </div>
                </div>
              </div>
              <div className="lowerChart-1">
                <div className="location-upper">
                  <p className="discript"></p>
                  <div>
                    <p className="discript-2">
                      COT:<span style={{ color: "#FF8C00" }}>100%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar16}
                      highcharts={Highcharts}
                      className="element testing-nihal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div> 

{/* ********************************************************************************** */}

          <div className="parent-3">
            <div className="leftside-chart">
              <div className="parent-1">
            <div className="toggle">
              <h1>T8</h1>
            </div>
            <div className="charts">
              <div className="upperChart-1">
                <div className="location-upper">
                  <p className="discript">Airport &</p>
                  <div>
                    <p className="discript-2">
                      POST:<span style={{ color: "#FF0000" }}>96.7%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar17}
                      highcharts={Highcharts}
                      className="element"
                    />
                  </div>
                </div>
              </div>
              <div className="lowerChart-1">
                <div className="location-upper">
                  <p className="discript">South Line</p>
                  <div>
                    <p className="discript-2">
                      COT:<span style={{ color: "#FF8C00" }}> 100%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar18}
                      highcharts={Highcharts}
                      className="element testing-nihal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="rightside-chart">
              <div className="parent-1">
            <div className="toggle">
              <h1>T9</h1>
            </div>
            <div className="charts">
              <div className="upperChart-1">
                <div className="location-upper">
                  <p className="discript">Northen</p>
                  <div>
                    <p className="discript-2">
                      POST:<span style={{ color: "#FF0000" }}>94.1%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar19}
                      highcharts={Highcharts}
                      className="element"
                    />
                  </div>
                </div>
              </div>
              <div className="lowerChart-1">
                <div className="location-upper">
                  <p className="discript">Line</p>
                  <div>
                    <p className="discript-2">
                      COT:<span style={{ color: "#FF8C00" }}>92.8%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar20}
                      highcharts={Highcharts}
                      className="element testing-nihal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
{/************************************************************************************ */}       


          <div className="parent-4">
            <div className="leftside-chart">
              <div className="parent-1">
            <div className="toggle">
              <h1>Intercity</h1>
            </div>
            <div className="charts">
              <div className="upperChart-1">
                <div className="location-upper">
                  <p className="discript"></p>
                  <div>
                    <p className="discript-2">
                      POST:<span style={{ color: "#FF0000" }}>97.1%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar21}
                      highcharts={Highcharts}
                      className="element"
                    />
                  </div>
                </div>
              </div>
              <div className="lowerChart-1">
                <div className="location-upper">
                  <p className="discript"></p>
                  <div>
                    <p className="discript-2">
                      COT:<span style={{ color: "#FF8C00" }}> 97.7%</span>
                    </p>
                  </div>
                  <div className="chart-1">
                    <Chart
                      options={chartBar22}
                      highcharts={Highcharts}
                      className="element testing-nihal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="rightside-chart">
            
          
            </div>
          </div> 
{/************************************************************************************ */}      
        </div>
      </div>
      
    </div>
  );
}

export default App;



