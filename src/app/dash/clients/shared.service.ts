import {EventEmitter, Injectable} from '@angular/core'

@Injectable()
export class SharedService {
  onClientEvent: EventEmitter<any> = new EventEmitter();
  onAlertEvent: EventEmitter<any> = new EventEmitter();
  priceEvaluationData: EventEmitter<any> = new EventEmitter();
}
