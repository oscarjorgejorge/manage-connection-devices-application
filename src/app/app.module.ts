import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormComponent } from './components/form/form.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';

// -- routes
const routes: Routes = [
  { path: '',  component: HomePageComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormComponent,
    DeviceListComponent,
    DeviceCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
