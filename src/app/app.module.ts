import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlModule } from './control/control.module';
import { LifeStyleCardService } from './service/lifestyle-card.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { DiscountsComponent } from './page/discounts/discounts.component';
import { SpendingComponent } from './page/spending/spending.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ControlModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LifeStyleCardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
