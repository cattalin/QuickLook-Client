import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private previewLinkSource = new Subject<any>();
  previewLink$ = this.previewLinkSource.asObservable();

  constructor() { }

  triggerPreviewLink(newPreviewLink){
    this.previewLinkSource.next(newPreviewLink);
  }
}
