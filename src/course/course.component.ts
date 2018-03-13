import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './course.component.html',
    styleUrls:['./course.component.css']
})

export class CourseDetailComponent implements OnInit{
    name: string = '';
    constructor(private _route : ActivatedRoute,    private _router: Router) {
        _route.params.subscribe(val => {
            this.name = this._route.snapshot.paramMap.get('name');       
        });
    }

    ngOnInit(){
    }
}