import { Component, OnInit } from '@angular/core';

import { FakeBet } from 'src/app/modele/fake/fakeBet';

import { FAKEBETS } from 'src/app/data/fake-bets';

@Component({
  selector: 'app-the-bet-list',
  templateUrl: './the-bet-list.component.html',
  styleUrls: ['./the-bet-list.component.scss']
})
export class TheBetListComponent implements OnInit {

  fakeBet: FakeBet = {
    id: 1,
    gambler: {
      id: 1,
      name: 'alma'
    },
    bet: 10
  }
  fakeBet2: FakeBet = {
    id: 2,
    gambler: {
      id: 2,
      name: 'alban'
    },
    bet: 100
  }
  fakeBet3: FakeBet = {
    id: 3,
    gambler: {
      id: 2,
      name: 'alban'
    },
    bet: 50
  }

  fakeBets: FakeBet[] = [
    {
      id: 1,
      gambler: {
        id: 1,
        name: 'alma'
      },
      bet: 10
    },
    {
      id: 2,
      gambler: {
        id: 2,
        name: 'alban'
      },
      bet: 100
    },
    {
      id: 3,
      gambler: {
        id: 2,
        name: 'alban'
      },
      bet: 50
    }
  ]

  /**
   * Here FAKEBETS is a constant in /data folder
   * We can access it in differents way :
   */

  theFakeBets = FAKEBETS;   // Just the object

  theFakeBetsItems = FAKEBETS['fakeBetItems']; // Using object property to return content
  theFakeBetsItems2 = FAKEBETS.fakeBetItems; // Using object property to return content

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.theFakeBets['fakeBetItems']); // Using object property to return content
    console.log(this.theFakeBets.fakeBetItems); // Using object property to return content

    console.log(this.theFakeBetsItems);  // Object content
    console.log(this.theFakeBetsItems2); // Object content
  }

}
