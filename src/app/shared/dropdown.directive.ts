import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  private show = false;
  @Input() dropdownMenu: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  @HostListener('click') toggleDropdown() {
    this.show = !this.show;
    if (this.show) {
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }

}
