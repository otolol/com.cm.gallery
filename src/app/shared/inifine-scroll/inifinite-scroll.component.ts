import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'xm-inifnite-scroll',
  template: `<div class="container">
    <ng-content></ng-content>
    <div class="anchor" #anchor></div>
  </div>`,
  styleUrls: ['./inifinite-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InifiniteScrollComponent implements OnInit, OnDestroy {
  
  /**
   * emits when div with #anchor is shown
   */
  @Output() scrolled = new EventEmitter();

  /**
   * 
   */
  @ViewChild('anchor', { static: true }) anchor!: ElementRef;

  private observer: IntersectionObserver | undefined;

  constructor(private host: ElementRef) {}

  ngOnInit() {
    const options = {
      root: this.host.nativeElement,
      threshold: 0,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  get element() {
    return this.host.nativeElement;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
