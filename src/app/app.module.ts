import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Invention } from './invention.model';
// import { FormsModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //  FormsModule
  ],
  providers: [Invention],
  bootstrap: [AppComponent]
})
export class AppModule { }
