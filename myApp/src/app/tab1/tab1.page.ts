import { Component, OnInit  } from '@angular/core';
import { MiServicioService } from '../services/mi-servicio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  allCharacters:any;

  constructor(
    private serviceOne: MiServicioService
  ) {}

  ngOnInit() {
    this.serviceOne.getAllCharacters().then( (res: any) => {
    this.allCharacters = res;
    console.log (this.allCharacters);
  });
}
}
    


