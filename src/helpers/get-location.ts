import axios from 'axios';
import { GetLocationT } from 'src/types/utils';

export class ClientLocation {
  constructor(
    private locationUrl = 'https://get.geojs.io/v1/ip/geo/',
    private tempUrl = 'https://api.open-meteo.com/v1/forecast ',
  ) {}
  async getLocation(ip: string): Promise<GetLocationT> {
    try {
      const response = await axios.get(`${this.locationUrl}${ip}.json`);
      const temp = await this.getTemperature({
        latitude: response.data.latitude,
        longitude: response.data.latitude,
      });
      return {
        ...response.data,
        ...temp,
      };
    } catch (error) {
      return;
    }
  }

  async getTemperature({ longitude, latitude }) {
    try {
      const temp = await axios.get(this.tempUrl, {
        params: {
          latitude,
          longitude,
          hourly: 'temperature_2m',
        },
      });
      return temp.data;
    } catch (error) {
      return;
    }
  }
}
