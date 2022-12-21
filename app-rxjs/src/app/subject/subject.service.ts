import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubjectService {
public message = new Subject<string>();

setMessage(value: string) {
    this.message.next(value); 
  }
}