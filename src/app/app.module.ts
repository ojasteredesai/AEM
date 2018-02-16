import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {RouterModule} from '@angular/router';
import {CourseDetailComponent} from '../course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'course', component:CourseDetailComponent},
      {path: 'course/:name', component:CourseDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
