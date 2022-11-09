import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FakeBet } from 'src/app/modele/fake/fakeBet';

@Component({
  selector: 'app-the-bet-template',
  templateUrl: './the-bet-template.component.html',
  styleUrls: ['./the-bet-template.component.scss']
})
export class TheBetTemplateComponent implements OnInit {

  @Input() theBet?: FakeBet;

  constructor() { }

  ngOnInit(): void {
  }

}
