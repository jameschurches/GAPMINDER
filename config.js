var CONFIG = {
 "data": {
  "_lastModified": 1709972535062,
  "hasNameColumn": false,
  "lastModified": 1709972535062,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/Life expectancy.csv",
  "reader": "ext-csv",
  "sheet": "",
  "timeInColumns": false,
  "ddfPath": "./data/Life expectancy.csv"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "Entity",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "Entity",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "time"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "time"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "time",
    "syncModels": [],
    "use": "indicator",
    "which": "Year",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log"
     ]
    },
    "autoconfig": {
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "syncModels": [],
    "use": "indicator",
    "which": "Life expectancy",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "0": "#4cd843",
     "1": "#e83739",
     "2": "#ff7f00",
     "3": "#c027d4",
     "4": "#d66425",
     "5": "#0ab8d8",
     "6": "#bcfa83",
     "7": "#ff8684",
     "8": "#ffb04b",
     "9": "#f599f5",
     "10": "#f4f459",
     "11": "#7fb5ed",
     "_default": "#ffb600"
    },
    "paletteHiddenKeys": [],
    "paletteLabels": null,
    "scaleType": "ordinal",
    "spaceRef": "entities",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "Entity"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "Entity"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "Year",
   "end": "2016",
   "endBeforeForecast": "2023",
   "endOrigin": null,
   "endSelected": "2016",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": true,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": true,
   "start": "1800",
   "startOrigin": null,
   "startSelected": "1800",
   "step": 1,
   "unit": "year",
   "value": "2016"
  }
 },
 "ui": {
  "buttons": [
   "colors",
   "find",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "curve": "curveMonotoneX",
   "labels": {
    "min_number_of_entities_when_values_hide": 2
   },
   "showForecastOverlay": false,
   "whenHovering": {
    "hideVerticalNow": false,
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true,
    "showTooltip": false
   }
  },
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false,
     "panelMode": "show"
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "colors",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find"
   ]
  },
  "presentation": true,
  "sidebarCollapse": false,
  "splash": false
 },
 "chartType": "LineChart"
};