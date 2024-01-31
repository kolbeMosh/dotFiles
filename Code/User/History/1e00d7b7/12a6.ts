export enum CacheTags {
  LOGGED_IN_USER = 'LOGGED_IN_USER',
  GET_WISHLISTS = 'GET_WISHLISTS',
  GET_CUSTOMERS = 'GET_CUSTOMERS'
}

export const Months = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December'
};

export const StatesAndProvinces = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming'
};

export const Countries = {
  US: 'United States',
  CA: 'Canada',
  GB: 'United Kingdom',
  AU: 'Australia',
  FR: 'France',
  DE: 'Germany',
  ES: 'Spain',
  IT: 'Italy',
  JP: 'Japan',
  CN: 'China',
  IN: 'India',
  BR: 'Brazil',
  RU: 'Russia',
  KR: 'South Korea',
  MX: 'Mexico',
  AR: 'Argentina',
  ZA: 'South Africa',
  NZ: 'New Zealand',
  NL: 'Netherlands',
  CH: 'Switzerland',
  SE: 'Sweden',
  NO: 'Norway',
  DK: 'Denmark',
  IE: 'Ireland',
  SG: 'Singapore',
  GR: 'Greece',
  IL: 'Israel',
  EG: 'Egypt',
  SA: 'Saudi Arabia',
  AE: 'United Arab Emirates'
};

export const Grades = [
  'Pre-Kindergarten',
  'Kindergarten',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
  '6th Grade',
  '7th Grade',
  '8th Grade',
  'Adult'
];

export const ReadingLevels = {
  GRA: 'Guided Reading Level (GRL)',
  LEX: 'Lexile (LEX)',
  DRA: 'Development Reading Assessment (DRA)',
  AR: 'Accelerated Reader (AR)',
  NA: 'N/A'
};

export enum CustomerGroups {
  NONE = 0,
  PARENT = 1,
  TEACHER = 2
}

export const CustomerAttributes = {
  PARENT_DATA_ID: { name: 'PARENT_DATA_ID', id: 5 },
  TEACHER_DATA_ID: { name: 'TEACHER_DATA_ID', id: 6 }
};

export enum TeacherWishlists {
  CLASSROOM_WISHLIST = 'Classroom wishlist',
  RECOMMENDATIONS = 'Recommendations',
  SAVE_FOR_LATER = 'Save for later',
  RAISE_FUNDS = 'Raise funds'
}

export const STORE_CONTEXT_KEY = '__ibc_store_context__';
