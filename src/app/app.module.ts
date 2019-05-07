import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemandComponent } from './components/demand/demand.component';
import { DemandRowComponent } from './components/demand-row/demand-row.component';
import { DemandCreateDateComponent } from './components/demand-create-date/demand-create-date.component';
import { DemandUserComponent } from './components/demand-user/demand-user.component';
import { DemandDescriptionComponent } from './components/demand-description/demand-description.component';


@NgModule({
  declarations: [
    AppComponent,
    DemandComponent,
    DemandRowComponent,
    DemandCreateDateComponent,
    DemandUserComponent,
    DemandDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//what is it? can delete
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{}


