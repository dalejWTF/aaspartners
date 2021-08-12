import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aaspartners';
  imagenes:any[]=[
    {
      url:'../assets/ejm.png'
    },
    {
      url:'../assets/render_cocina.png'
    },
    {
      url:'../assets/repisas.png'
    }
  ]

  constructor(private _config:NgbCarouselConfig){
    _config.interval=3000;
  }
}
