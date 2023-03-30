import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MiServicioService } from 'src/app/services/mi-servicio.service';


@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent  implements OnInit {

  allCharacters: any;

  constructor(
    private MiService: MiServicioService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.MiService.getAllCharacters().then( (res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    });
  }

}
