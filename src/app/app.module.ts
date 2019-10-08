import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridpatternComponent } from './components/gridpattern/gridpattern.component';
import { GenerateComponent } from './components/generate/generate.component';

@NgModule({
  declarations: [
    AppComponent,
    GridpatternComponent,
    GenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
