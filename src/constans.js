export const DEMO_YOUTUBE = [
  'ENrzD9HAZK4',
  'vn3tm0quoqE',
  'fsVL_xrYO0w',
  'ahCwqrYpIuM',
  'Mus_vwhTCq0',
  'h33Srr5J9nY',
  'NIq3qLaHCIs',
  'O6P86uwfdR0',
  'kK_Wqx3RnHk',
  'THL1OPn72vo',
  '0ZJgIjIuY7U',
  'wofz0k6FCMU',
  'SOIO3V7_zTs',
  'HUlZl0FvBF0',
  '7pPQcBySLmQ',
  'XwFBZRqUMyA',
  'C8gOdLWH2aE',
  'RYiAvn0buPQ',
  'awct4aukQTQ',
  'Z7IFp58NsVg',
];

export const REG_EXP = {
  youtube_input: new RegExp(
    `^https://www.youtube.com/watch\\?v=\\w{11}$|^https://youtu.be/\\w{11}$|^\\w{11}$`
  ),
  vimeo_input: new RegExp(`^https://vimeo.com/\\d{9}$|^\\d{9}$`),
  youtube_id: new RegExp(`\\w{11}$`),
  vimeo_id: new RegExp(`\\d{9}$`),
};
