import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    TopbarComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent    
    ],
  imports: [
    CommonModule,
  ],
  exports: [
    TopbarComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ControlModule { }
