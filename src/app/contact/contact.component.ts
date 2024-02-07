import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private _ElementRef: ElementRef) {

  }
  ngAfterViewInit() {
    const input = this._ElementRef.nativeElement.querySelectorAll('input')
    const label = this._ElementRef.nativeElement.querySelectorAll('label')


    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('input', function (e: any) {
        if (e.target.value != '') {
           label[i].classList.add('label-input');

        }
        else{
          label[i].classList.remove('label-input');
        }
        
      })
    }

  }
}

