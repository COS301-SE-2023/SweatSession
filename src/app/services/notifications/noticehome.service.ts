import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticehomeService {

  send_data = new Subject<any>();
  
  constructor() { }
}
