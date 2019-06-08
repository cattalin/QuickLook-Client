import { SafeUrl, DomSanitizer, SafeValue } from '@angular/platform-browser';
import { GlobalService } from '@app/services/global.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss']
})
export class PreviewModalComponent implements OnInit, OnDestroy {

  previewUrl: string = "";

  subscriber: Subscription;
  constructor(
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.subscriber = this.globalService.previewLink$.subscribe(
      res => {
        this.previewUrl = res;
      }
    );
  }

  resetPreviewUrl() {
    this.previewUrl = "";
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}