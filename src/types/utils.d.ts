export interface ResponseObjectT {
  message: string;
  data?: any;
}

type HourlyUnits = { time: string; temperature_2m: string };
type Hourly = {
  temperature_2m: string[];
};
export interface GetLocationT {
  ip: string;
  latitude: string;
  longitude: string;
  city: string;
  region: string;
  hourly: Hourly;
  hourly_units?: HourlyUnits;
}
