import { Component, OnInit } from '@angular/core';
import { FakeBet } from 'src/app/modele/fake/fakeBet';

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
    gamblerBet: 10
  }
  fakeBet2: FakeBet = {
    id: 2,
    gambler: {
      id: 2,
      name: 'alban'
    },
    gamblerBet: 100
  }
  fakeBet3: FakeBet = {
    id: 3,
    gambler: {
      id: 2,
      name: 'alban'
    },
    gamblerBet: 50
  }

  fakeBets: FakeBet[] = [
    {
      id: 1,
      gambler: {
        id: 1,
        name: 'alma'
      },
      gamblerBet: 10
    },
    {
      id: 2,
      gambler: {
        id: 2,
        name: 'alban'
      },
      gamblerBet: 100
    },
    {
      id: 3,
      gambler: {
        id: 2,
        name: 'alban'
      },
      gamblerBet: 50
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
