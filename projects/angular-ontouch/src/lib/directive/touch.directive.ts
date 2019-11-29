import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[ng-touch]'
})
export class TouchDirective {

  @Output()
  touch = new EventEmitter();

  @Input()
  timemove: number;

  countTouchMove = 0;

  @HostListener('click', ['$event']) onclick($event) {
    if (event.cancelable) {
      event.preventDefault();
    }
  }

  @HostListener('touchstart', ['$event']) ontouchstart($event) {
    if (this.timemove === 0) {
      this.touch.emit();
    }
  }

  @HostListener('touchmove', ['$event']) ontouchmove($event) {
    this.countTouchMove++;
  }

  @HostListener('touchend', ['$event']) ontouchend($event) {
    if (event.cancelable) {
      event.preventDefault();
      event.stopPropagation();
    }
    const time = this.timemove || 3;
    if (this.countTouchMove < time) {
      this.touch.emit();
    }
    this.countTouchMove = 0;

  }

  constructor(
  ) { }

}
