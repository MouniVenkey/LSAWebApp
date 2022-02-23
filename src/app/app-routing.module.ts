import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
// import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { MyAccountComponent } from './page/my-account/my-account.component';
import { RoundUpForChangeComponent } from './page/round-up-for-change/round-up-for-change.component';
import { ClaimformComponent } from './page/claimform/claimform.component';
import { NgChartsModule } from 'ng2-charts';
import { DataTablesModule } from "angular-datatables";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'MyAccount', component: MyAccountComponent },
  { path: 'RoundUpForChange', component: RoundUpForChangeComponent },
  { path: 'claimForm', component: ClaimformComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    MyAccountComponent,
    RoundUpForChangeComponent,
    ClaimformComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    ButtonModule,
    TableModule,
    NgChartsModule,
    DataTablesModule,
    // NgbModule,  
    // NgbCarouselModule,
    RouterModule.forRoot(routes, {
           useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
