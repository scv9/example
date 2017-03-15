import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() {
    console.log("Logging Service Created");
  }

  public error(args: any[]): void {
    console.error(args);
  }

  public info(args: any[]): void {
    console.info(args);
  }

  public warn(args: any[]): void {
    console.warn(args);
  }
}
