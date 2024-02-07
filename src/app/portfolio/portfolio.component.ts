import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private _ElementRef: ElementRef) {

  }


  close(layer:any) {
    layer.addEventListener('click', function () {
      layer.classList.add('d-none')

    })
  }



  ngAfterViewInit() {

    const image = this._ElementRef.nativeElement.querySelector('.image');
    const layer = this._ElementRef.nativeElement.querySelector('.layer');
    const parent_image = this._ElementRef.nativeElement.querySelectorAll('.parent-image');
    const layer_img = this._ElementRef.nativeElement.querySelectorAll('.layer-img');
    const for_image = this._ElementRef.nativeElement.querySelectorAll('.for-image');



    for (let i = 0; i < layer_img.length; i++) {

      parent_image[i].addEventListener('click', function (e: any) {

        if (e.srcElement == e.target) {
          layer.classList.remove('d-none')
          image.setAttribute('src', layer_img[i].src);
        }



      })




    }


    this.close(layer);




  }



}
