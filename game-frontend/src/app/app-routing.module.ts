import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HomeComponent }, // homepage
  // { path: 'first', component: MapComponent },
  // { path: 'second', component: MapComponent },
  // { path: 'third', component: MapComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


