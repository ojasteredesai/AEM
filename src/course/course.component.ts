import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './course.component.html',
    styleUrls:['./course.component.css']
})

export class CourseDetailComponent implements OnInit{
    name: string = '';
    constructor(private _route : ActivatedRoute,    private _router: Router) {}

    ngOnInit(){     
        this.name = this._route.snapshot.paramMap.get('name');    
    }
}