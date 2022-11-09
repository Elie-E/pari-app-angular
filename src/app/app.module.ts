import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheNavigationComponent } from './component/the-navigation/the-navigation.component';
import { TheBetListComponent } from './component/the-bet-list/the-bet-list.component';
import { TheBetDetailComponent } from './component/the-bet-detail/the-bet-detail.component';
import { TheBetTemplateComponent } from './component/the-bet-template/the-bet-template.component';
import { TabtestComponent } from './component/tabtest/tabtest.component';
import { TheJsonBetListComponent } from './component/the-json-bet-list/the-json-bet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TheNavigationComponent,
    TheBetListComponent,
    TheBetDetailComponent,
    TheBetTemplateComponent,
    TabtestComponent,
    TheJsonBetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
