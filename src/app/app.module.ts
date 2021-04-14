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
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import {SidenavbarComponent} from './components/sidenavbar/sidenavbar.component'
import {routing} from './app.routing';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    KeysPipe,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    SidenavbarComponent,
    NavigationComponent
  
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(StudentDataService),
    routing,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [StudentDataService,
  GenerateInfoService,
NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
