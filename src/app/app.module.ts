import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { ComicListComponent } from './comic/comic-list/comic-list.component';
import { DataService } from 'app/comic/data-service.service';

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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
