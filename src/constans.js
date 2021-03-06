// hardcoded ids to render as demo:
export const DEMO_LIST = [
  'F-yeKCV2Mrk',
  'TUfyUUauuoY',
  '3E1vOhBcsdg',
  'FJe99BjV8bM',
  'VRzbQYmgJ2Q',
  'KTT7i3SKpMQ',
  'vyKj-WsStFc',
  'facmiPgeMNM',
  'hd0fXhDkH84',
  'Zfm_y0OJmN4',
  'luW--mtTPtA',
  '0_0imzGKNjA',
  'tJJiGL8orfY',
  'n-kg9zhq-xE',
  'EMAlaNCMSgE',
  'JbBKOJH4dh0',
  'P8vGytRX7S0',
  'ErsxQkch7ec',
  'ugHGotF7tR0',
  'oIMaTKOZG-8',
  '_308KNAuFkg',
  'spjp49HFd84',
  'iPMiD3Wu74Q',
  'r874E6s4cQ',
  '4DKkueqcKmQ',
  'h3RG5dztrXM',
  '535769506',
  '220555992',
  '226441556',
  '248465461',
  '87452303',
  '99144904',
  '241916506',
  '1522709',
  '43974197',
  '71715434',
  '99227117',
  '139592600',
  '476216027',
  '137623605',
  '287060952',
  '188653769',
  '259132930',
  '11768506',
  '301188466',
  '111481788',
  '44026236',
  '388213806',
  '230586645',
  '233459603',
  '211452489',
];

// regular expressions used to handle with user's input in url/id field. This can be developed by adding extra api providers in the app: just add new regular expression to handle desired input:
export const REG_EXP = {
  youtube_input: new RegExp(
    `^https://www.youtube.com/watch\\?v=\\S{11}$|^https://youtu.be/\\S{11}$|^\\S{11}$`
  ),
  vimeo_input: new RegExp(`^https://vimeo.com/\\d{7,9}$|^\\d{7,9}$`),
  youtube_id: new RegExp(`\\S{11}$`),
  vimeo_id: new RegExp(`\\d{7,9}$`),
};
