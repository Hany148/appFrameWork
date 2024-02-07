import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _ElementRef: ElementRef) {

  }


  ngAfterViewInit() {
    const nav = this._ElementRef.nativeElement.querySelector('nav');
    window.addEventListener('scroll', function () {
      let scrollY = Math.floor(this.window.scrollY);
      if (scrollY > 30.1) {
        nav.classList.add('padding-0');
        nav.classList.remove('padding-4');
      }
      else  {
        nav.classList.add('padding-4');
        nav.classList.remove('padding-0');
      }
      
    })
  }

}





