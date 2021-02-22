/**
 * To capture camera - live video in browser and capture image from it.
 * Learning References
 * https://stackblitz.com/edit/angular-user-media-video?file=src%2Fapp%2Fapp.component.html
 * https://x-team.com/blog/webcam-image-capture-angular/
 * https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl
 * https://medium.com/better-programming/saving-an-html5-canvas-as-an-image-with-todataurl-f9b7cb61595d
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera-comp1',
  templateUrl: './camera-comp1.component.html',
  styleUrls: ['./camera-comp1.component.css']
})
export class CameraComp1Component implements OnInit, OnDestroy {
@ViewChild('video') video:ElementRef<HTMLVideoElement>;
@ViewChild("canvas") canvas: ElementRef;
captures: Array<any>;
currentImg:any;
  constructor(@Inject(PLATFORM_ID) private _platform: Object) { }

  ngOnInit(): void {
  }
  onStart(){
    if(isPlatformBrowser(this._platform) && 'mediaDevices' in navigator){
      navigator.mediaDevices.getUserMedia({video:true}).then((ms:MediaStream)=>{
        const _video = this.video.nativeElement;
        _video.srcObject = ms;
        _video.play();
      });
    }
  }
  onStop() {
    this.video.nativeElement.pause();
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
    this.video.nativeElement.srcObject = null;
  }
  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    // this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.currentImg = this.canvas.nativeElement.toDataURL("image/png");
}


  ngOnDestroy() {
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
  }
}
