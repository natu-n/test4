# 今回の目的

## 今回の目的

### 責務の明確化(第一弾)

+ BpDatagidとDatagridにわけた
  + BpDatagidはView
  + DatagridはViewModel

### 次回行うこと

+ 現行
  + BpCart(TS以外)
  + Chart(TS)

+ 変更後
  + BpChart(Viewガワの初期表示)
  + Reactive用のデータ選択、Viewへの送信

```javascript
chart: {
    type: 'line'
}

  yaxis: {
      show: true,
      showAlways: true,
      showForNullSeries: true,
      seriesName: undefined,
      opposite: false,
      reversed: false,
      logarithmic: false,
      logBase: 10,
      tickAmount: 6,
      min: 6,
      max: 6,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
          show: true,
          align: 'right',
          minWidth: 0,
          maxWidth: 160,
          style: {
              colors: [],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: (value) => { return val },
      },
      axisBorder: {
          show: true,
          color: '#78909C',
          offsetX: 0,
          offsetY: 0
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#78909C',
          width: 6,
          offsetX: 0,
          offsetY: 0
      },
      title: {
          text: undefined,
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-title',
          },
      },
      crosshairs: {
          show: true,
          position: 'back',
          stroke: {
              color: '#b6b6b6',
              width: 1,
              dashArray: 0,
          },
      },
      tooltip: {
          enabled: true,
          offsetX: 0,
      },
  }
  //
  legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      labels: {
          colors: undefined,
          useSeriesColors: false
      },
      markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
      itemMargin: {
          horizontal: 5,
          vertical: 0
      },
      onItemClick: {
          toggleDataSeries: true
      },
      onItemHover: {
          highlightDataSeries: true
      },
  }
//
series: [
    {
        name: "Series 1",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    }
];

stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 2,
    dashArray: 0,
},
//
  xaxis: {
      type: 'category',
      categories: [],
      tickAmount: undefined,
      tickPlacement: 'between',
      min: undefined,
      max: undefined,
      range: undefined,
      floating: false,
      decimalsInFloat: undefined,
      overwriteCategories: undefined,
      position: 'bottom',
      labels: {
          show: true,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 120,
          style: {
              colors: [],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          format: undefined,
          formatter: undefined,
          datetimeUTC: true,
          datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'HH:mm',
          },
      },
      axisBorder: {
          show: true,
          color: '#78909C',
          height: 1,
          width: '100%',
          offsetX: 0,
          offsetY: 0
      },
      axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },

      title: {
          text: undefined,
          offsetX: 0,
          offsetY: 0,
          style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
          },
      },
      crosshairs: {
          show: true,
          width: 1,
          position: 'back',
          opacity: 0.9,
          stroke: {
              color: '#b6b6b6',
              width: 0,
              dashArray: 0,
          },
          fill: {
              type: 'solid',
              color: '#B1B9C4',
              gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
              },
          },
          dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 1,
              opacity: 0.4,
          },
      },
      tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: 0,
            fontFamily: 0,
          },
      },
  }
```
