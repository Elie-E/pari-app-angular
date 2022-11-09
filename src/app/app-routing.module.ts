import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TheBetListComponent } from './component/the-bet-list/the-bet-list.component';
import { TabtestComponent } from './component/tabtest/tabtest.component';
import { TheBetDetailComponent } from './component/the-bet-detail/the-bet-detail.component';
import { TheJsonBetListComponent } from './component/the-json-bet-list/the-json-bet-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/bet-list', pathMatch: 'full' },
  { path: 'bet-list', component: TheBetListComponent},
  { path: 'bet-detail', component: TheBetDetailComponent},
  { path: 'json-bet-list', component: TheJsonBetListComponent},
  { path: 'tabtest', component: TabtestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
