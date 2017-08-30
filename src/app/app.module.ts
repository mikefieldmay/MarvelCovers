import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { ComicListComponent } from './comic/comic-list/comic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ComicListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
