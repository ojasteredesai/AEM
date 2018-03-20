import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {RouterModule} from '@angular/router';
import {CourseDetailComponent} from '../course/course.component';
import {WorkshopComponent} from '../workshop/workshop.component';
import {WelcomeComponent} from '../app/home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    WorkshopComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component:WelcomeComponent},
      {path: 'course', component:CourseDetailComponent},
      {path: 'course/:id', component:CourseDetailComponent},
      {path: 'workshop', component:WorkshopComponent},
      {path: 'workshop/:id', component:WorkshopComponent},
      {path: 'app/home', component:WelcomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
