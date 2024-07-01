import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import * as requestIp from 'request-ip';
import { ClientLocation } from './helpers/get-location';
import { Request } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getHello(
    @Query('visitor_name') visitor_name: string,
    @Req() req: Request,
  ) {
    const clientLocation = new ClientLocation();
    const clientIp = requestIp.getClientIp(req) ?? '102.89.47.25';
    const $location = await clientLocation.getLocation(clientIp);
    return this.appService.getHello({
      ip: clientIp ?? 'N/A',
      city: $location.city ?? 'N/A',
      temp:
        $location && $location.hourly
          ? $location.hourly.temperature_2m[0]
          : 'N/A',
      visitor_name: visitor_name ?? 'There😁',
    });
  }
}
