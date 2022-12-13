import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { FakeBet } from 'src/app/modele/fake/fakeBet';


@Component({
  selector: 'app-the-bet-template',
  templateUrl: './the-bet-template.component.html',
  styleUrls: ['./the-bet-template.component.scss']
})
export class TheBetTemplateComponent implements OnInit {

  /**
   * Retrieving the data from the parent component ( the-bet-list),
   * with @Input and passing the data from the-bet-list.html
   * ( <app-the-bet-template [theBet] ... )
   * Then give it a type from the class fakeBets.ts (which itself
   * contains fakeGamblers.ts)
   */
  
  @Input() theBet?: FakeBet;

  constructor() { }

  ngOnInit(): void {
  }

}
