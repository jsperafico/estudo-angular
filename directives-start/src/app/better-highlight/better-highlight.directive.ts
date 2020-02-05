import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }
}
