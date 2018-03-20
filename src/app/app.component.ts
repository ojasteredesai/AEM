import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Router} from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private router: Router) {
    
  }
  pageTitle: string = 'ACME Product Management';
  ngOnInit(){
    $(".dropdown").hover(            
      function() {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
          $(this).toggleClass('open');        
      },
      function() {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
          $(this).toggleClass('open');       
      }
  );
  }
  
  OnCourseClick(event){
    this.router.navigate(['/course',event.target.id]);
  }

  OnWorkshopClick(event){
    this.router.navigate(['/workshop',event.target.id]);
  }

  OnHomeClick(){
    this.router.navigate(['/app/home']);
  }

  OnContactClick(){
    this.router.navigate(['/contact']);
  }
}
