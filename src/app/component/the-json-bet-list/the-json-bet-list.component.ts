import { Component, OnInit } from '@angular/core';

// #####
// work with the tsconfig.json with the line 
// "resolveJsonModule": true 

// OR USING json-typing.d.ts file

// import from the data folder in app folder :
import * as data from 'src/app/data/fake-bet-data.json';
// or from the asset folder : 
import * as dataBet from '../../../assets/data/fake-bet-data.json';
 // #####

// #####
// work with tsconfig.json with "resolveJsonModule": true 
// AND "esModuleInterop": true (to enabled standard import)

// OR USINg json-typing.d.ts file:

// import from the data folder in app folder
import jsonData from 'src/app/data/fake-bet-data.json';
// import from the data folder in assets folder
import jsonFakeBet from '../../../assets/data/fake-bet-data.json';


import { FakeBet } from 'src/app/modele/fake/fakeBet';
import { FakeGambler } from 'src/app/modele/fake/fakeGambler';
// #####

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

  // Using the modele :
  public fBL?: FakeBet[] = jsonData;


  constructor() { }

  ngOnInit(): void {

    console.log(data); // object
    console.log(this.fakeJsonList3); // array from objet
    console.log(dataBet); // object

    console.log(jsonData); // array
    console.log(jsonFakeBet); // array

    console.log(this.fBL); // array
  }

}
