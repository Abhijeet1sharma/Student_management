import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'  
import { StudentDataService } from './services/student-data.service';
import {GenerateInfoService} from './services/generate-info.service';
import { HttpClientModule } from '@angular/common/http'

import {KeysPipe} from './keys.pipe';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    KeysPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(StudentDataService)
  ],
  providers: [StudentDataService,
  GenerateInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
