import { Component, OnInit } from '@angular/core';

// work with the tsconfig.json with the line 
// "resolveJsonModule": true 
// OR USING json-typing.d.ts file :
// from the data folder in app folder :
import * as data from 'src/app/data/fake-bet-data.json';
// or from the asset folder : 
import * as dataBet from '../../../assets/data/fake-bet-data.json';

// import from the data folder in app folder, work with 
// ONLY with json-typing.d.ts file
import jsonData from 'src/app/data/fake-bet-data.json';
// import from the data folder in assets folder, work 
// ONLY with the json-typing.d.ts file :
import jsonFakeBet from '../../../assets/data/fake-bet-data.json';

@Component({
  selector: 'app-the-json-bet-list',
  templateUrl: './the-json-bet-list.component.html',
  styleUrls: ['./the-json-bet-list.component.scss']
})
export class TheJsonBetListComponent implements OnInit {

  //This two line return the same Object
  public fakeJsonList:{id: number, bet: number, gambler: {id:number, name: string}}[] = data;
  public fakeJsonList2: Object = data;
  // This make the object available to use in the .html
  public fakeJsonList3?: any = (data as any).default;

  public fakeBetList?:{id: number, bet: number, gambler: {id:number, name:string}}[] = jsonData;
  public fakeBetList2?:{id: number, bet: number, gambler: {id:number, name:string}}[] = jsonFakeBet;


  constructor() { }

  ngOnInit(): void {

    console.log(data); // object
    console.log(this.fakeJsonList3); // array from objet
    console.log(dataBet); // object

    console.log(jsonData); // array
    console.log(jsonFakeBet); // array
  }

}
