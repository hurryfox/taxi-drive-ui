import {EventEmitter, Injectable} from '@angular/core'


@Injectable()
export class SharedService {
  onMainEvent: EventEmitter<any> = new EventEmitter();
}
