import { Component} from '@angular/core';
import { Invention } from './invention.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Invention]

})
export class AppComponent {
  title = 'app';

  // public model: Invention;

  namemodel: string;
  inventorModel: string;
  yearModel: number;
  inventions: Invention[];


  constructor() {
    // this.model = new Invention();
    // this.model.name = 'Gmc';
    // this.model.invention = 'midsize truck';
    // this.model.year = 2018;
    this.namemodel = '';
    this.inventorModel = '';
    this.yearModel = 0;

    // tslint:disable-next-line:prefer-const
    let otherInvention: Invention = {
      name: 'viper',
      invention: 'Dodge',
      year: 2018
    };
    this.inventions = [ otherInvention ];
  }


  updatedInvention() {
    // tslint:disable-next-line:prefer-const
    let nuevoInvention: Invention = {
      name: this.namemodel,
      invention: this.namemodel,
      year: this.yearModel
    };

    this.inventions.push( nuevoInvention );
    
    this.namemodel = this.yearModel = this.inventorModel = '';
  }


}
