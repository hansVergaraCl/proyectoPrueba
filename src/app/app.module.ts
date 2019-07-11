import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material Imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule} from '@angular/material';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { HomeComponent } from './home/home.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    HomeComponent,
    MenuDesplegableComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ComponenteCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
