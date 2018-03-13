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
/*
  $(".dropdown").click(
    function () {

        $('.dropdown-menu').slideUp("100");
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
        $(this).toggleClass('open');
    }

);
$(document).mouseup(function (e) {
  var container = $(".dropdown-menu");

  if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
      container.hide();
  }
});*/
  }
  
  OnCourseClick(event){
   // alert(event.target.id);
  //  this.router.navigate(['/course','']);
    this.router.navigate(['/course',event.target.id]);
  }
}
