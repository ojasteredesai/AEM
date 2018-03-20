import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {RouterModule} from '@angular/router';
import {CourseDetailComponent} from '../course/course.component';
import {WorkshopComponent} from '../workshop/workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    WorkshopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'course', component:CourseDetailComponent},
      {path: 'course/:id', component:CourseDetailComponent},
      {path: 'workshop', component:WorkshopComponent},
      {path: 'workshop/:id', component:WorkshopComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
