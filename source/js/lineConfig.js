const lineConfig = {
  type: 'line',
  globals: {
    fontFamily: 'Poppins',
  },
  utc: true,
  plotarea: {
    margin: 'dynamic 45 60 dynamic',
  },
  legend: {
    margin: '18 auto 15 auto',
    backgroundColor: 'none',
    borderWidth: '0px',
    layout: 'float',
    align: 'center',
    item: {
      fontColor: '#707d94',
      fontSize: '14px',
      cursor: 'pointer',
    },
    marker: {
      type: 'square',
      lineWidth: '2px',
      size: 5,
      cursor: 'pointer',
    },
    shadow: false,
  },
  scaleX: {
    shadow: 0,
    step: 3600000 * 6,
    transform: {
      type: 'date',
      all: '%D, %d %M<br />%h:%i %A',
      guide: {
        visible: false,
      },
      item: {
        visible: false,
      },
    },
    label: {
      visible: false,
    },
    minorTicks: 0,
  },
  scaleY: {
    lineColor: '#f6f7f8',
    shadow: 0,
    guide: {
      lineStyle: 'solid',
    },
    label: {
      text: 'Average FCP',
    },
    minorTicks: 0,
    thousandsSeparator: ',',
  },
  crosshairX: {
    lineColor: '#efefef',
    plotLabel: {
      borderRadius: '5px',
      borderWidth: '1px',
      borderColor: '#f6f7f8',
      padding: '10px',
      fontWeight: 'bold',
    },
    scaleLabel: {
      fontColor: '#000',
      backgroundColor: '#f6f7f8',
      borderRadius: '5px',
    },
  },
  tooltip: {
    visible: false,
  },
  plot: {
    highlight: true,
    tooltipText: '%t views: %v<br>%k',
    shadow: 0,
    lineWidth: '2px',
    marker: {
      type: 'circle',
      size: 3,
    },
    highlightState: {
      lineWidth: 3,
    },
    animation: {
      effect: 1,
      sequence: 2,
      speed: 100,
    },
  },
  series: [],
};
