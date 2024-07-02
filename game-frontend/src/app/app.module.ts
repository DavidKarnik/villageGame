import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { VillagePageComponent } from './village-page/village-page.component';
import { VillageImageComponent } from './village-image/village-image.component';
import { MainBuildingModalComponent } from './modal-building-main/modal-building-main.component';
import { ModalBuildingSmithComponent } from './modal-building-smith/modal-building-smith.component';
import { ModalBuildingBarracksComponent } from './modal-building-barracks/modal-building-barracks.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    LoginComponent,
    HomeComponent,
    VillagePageComponent,
    VillageImageComponent,
    MainBuildingModalComponent,
    ModalBuildingSmithComponent,
    ModalBuildingBarracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    // Zajistěte, že MatDialogModule je zde zahrnut

  ],
  providers: [],
  bootstrap: [AppComponent] // první zobrazená komponenta
})
export class AppModule { }
