export const mapbox_layers = [
  'hochwasser',
  'sturmfluten',
  'verdichtungsraeume',
  'klimazonen',
]

export const zeitreiheDataKeys = [
  'air_temperature_max',
  'air_temperature_mean',
  'drought_index',
  'frost_days',
  'hot_days',
  'ice_days',
  'precipGE30mm_days',
  'precipitation',
  'snowcover_days',
  'summer_days',
]

const isLocal = false

export const s3Url = 'https://locobss-story-co2.s3.eu-central-1.amazonaws.com/'
export const s3UrlRisk = isLocal
  ? 'data/'
  : 'https://locobss-story-risk.s3.eu-central-1.amazonaws.com/'
export const zipCodesUrl = `${s3Url}postcodes.txt`

export const styles = {
  fluvial_flood: {
    fill: '#3C76F2',
    stroke: '#3C76F2',
    'line-width': 1.5,
    'fill-opacity': 0.15,
    'line-opacity': 0.1,
  },
  postcode_geom: {
    fill: 'white',
    stroke: 'black',
    'line-width': 2.5,
    'fill-opacity': 0.6,
    'line-opacity': 1,
  },
  postcode_buff_geom: {
    fill: 'red',
    stroke: 'black',
    'line-width': 1,
    'fill-opacity': 0,
    'line-opacity': 1,
  },
}

export const zeitreiheDataGradients = {
  air_temperature_max: ['#C7A168', '#B46250'],
  air_temperature_mean: ['#C7A168', '#B46250'],
  drought_index: ['#C7A168', '#B46250'],
  hot_days: ['#C7A168', '#B46250'],
  summer_days: ['#C7A168', '#B46250'],
  frost_days: ['#C5DCDB', '#6FA9AD'],
  ice_days: ['#C5DCDB', '#6FA9AD'],
  snowcover_days: ['#C5DCDB', '#6FA9AD'],
  precipGE30mm_days: ['#7ACB9A', '#9681B0'],
  precipitation: ['#7ACB9A', '#9681B0'],
}

export const stateCentroids = {
  'Baden-Württemberg': [9.7 - 0.6, 48.8 - 0.3],
  Bayern: [12.3 - 0.6, 49 - 0.3],
  Berlin: [13.4, 52.45],
  Brandenburg: [13.7, 51.9],
  Bremen: [8.67, 53.1],
  Hamburg: [9.98, 53.5],
  Hessen: [9.8 - 0.6, 50.9 - 0.3],
  'Mecklenburg-Vorpommern': [13.3 - 0.6, 54 - 0.3],
  Niedersachsen: [9.4, 52.5],
  'Nordrhein-Westfalen': [8.2 - 0.6, 51.7 - 0.3],
  'Rheinland-Pfalz': [7.1, 50.2],
  Saarland: [7, 49.3],
  'Sachsen-Anhalt': [11.5, 52],
  Sachsen: [13.9 - 0.6, 51.2 - 0.3],
  'Schleswig-Holstein': [9.3, 54.15],
  Thüringen: [11.7 - 0.6, 50.9 - 0.3],
}

export const STATE_LABELS = {
  1: 'Schleswig-Holstein',
  2: 'Hamburg',
  3: 'Niedersachsen',
  4: 'Bremen',
  5: 'Nordrhein-Westfalen',
  6: 'Hessen',
  7: 'Rheinland-Pfalz',
  8: 'Baden-Württemberg',
  9: 'Bayern',
  10: 'Saarland',
  11: 'Berlin',
  12: 'Brandenburg',
  13: 'Mecklenburg-Vorpommern',
  14: 'Sachsen',
  15: 'Sachsen-Anhalt',
  16: 'Thüringen',
}

export const zeitreiheHeadlines = {
  air_temperature_max: {
    min: 'Mindest-',
    max: 'Maximal-',
    avg: 'Durchschnittstemperaturen',
    metricHeadline: 'in °C',
    metric: '°C',
  },
  air_temperature_mean: {
    min: 'Mindest-',
    max: 'Maximal-',
    avg: 'Durchschnittlichstemperaturen',
    metricHeadline: 'in °C',
    metric: '°C',
  },
  drought_index: {
    min: 'Mindest-',
    max: 'Maximal-',
    avg: 'Durchschnitts-Index',
    metricHeadline: 'als Indikator',
    metric: '°C',
  },
  frost_days: {
    min: 'Minimale',
    max: 'maximale',
    avg: 'durchschnittliche',
    metricHeadline: 'Anzahl Frosttage',
    metric: 'Tage',
  },
  hot_days: {
    min: 'Minimale',
    max: 'maximale',
    avg: 'durchschnittliche',
    metricHeadline: 'Anzahl heißer Tage',
    metric: 'Tage',
  },
  ice_days: {
    min: 'Minimale',
    max: 'maximale',
    avg: 'durchschnittliche',
    metricHeadline: 'Anzahl Tage unter 0°C',
    metric: '°C',
  },
  precipGE30mm_days: {
    min: 'Minimale',
    max: 'maximale',
    avg: 'durchschnittliche',
    metricHeadline: 'Anzahl Tage mit viel Niederschlag (>30&thinsp;mm)',
    metric: 'Tage',
  },
  precipitation: {
    min: 'Mindest-',
    max: 'Maximal-',
    avg: 'Durchschnitts-Niederschläge',
    metricHeadline: 'in mm',
    metric: 'mm',
  },
  snowcover_days: {
    min: 'Minimale',
    max: 'maximale',
    avg: 'durchschnittliche',
    metricHeadline: 'Anzahl schneebedeckter Tage',
    metric: 'Tage',
  },
  summer_days: {
    min: 'Minimale',
    max: 'maximale',
    avg: 'durchschnittliche',
    metricHeadline: 'Anzahl sommerlicher Tage (>30°&thinsp;C)',
    metric: 'Tage',
  },
}

export const droughtColors = [
  '#ffe0a9',
  '#ffbe84',
  '#ff986d',
  '#f47361',
  '#e35056',
  '#cb2f44',
  '#ae112a',
  '#8b0000',
]

export const klimazonenIds = [1, 40, 99, 297, 2892, 4089]
