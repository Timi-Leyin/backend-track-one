import { Injectable } from '@nestjs/common';
import { ResponseObjectT } from './types/utils';

@Injectable()
export class AppService {
  getHello({ ip, visitor_name, city, temp }) {
    return {
      client_ip: ip,
      location: `${city}`,
      greeting: `Hello ${(visitor_name as string).replace(/\"|\'/gi, '')}!, the temperature is ${temp} degrees Celcius in ${city}`,
    };
  }
}
