import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable()
export class OrganizationService {

  constructor(private loggingService:LoggingService) { this.loggingService["info"](["SharedService Constructed"]);}

}
