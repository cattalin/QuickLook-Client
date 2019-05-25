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

  previewUrl: string = "https://mdbootstrap.com/docs/angular/forms/checkbox/";
  sanitizedUrl: SafeUrl;

  subscriber: Subscription;
  constructor(
    private globalService: GlobalService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.subscriber = this.globalService.previewLink$.subscribe(
      res => {
        console.log(res);
        this.previewUrl = res;
        this.sanitizedUrl = this.cleanURL(res);
      }
    );
  }

  ngOnDestroy(){
    console.log('123')
    this.subscriber.unsubscribe();
  }

  cleanURL(url): SafeUrl {
    console.log(url);
    console.log(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    // return new MySafeUrl();
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}