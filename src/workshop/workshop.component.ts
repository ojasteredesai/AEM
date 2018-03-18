import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { IWorkshop } from "./workshop";

@Component({
    templateUrl: './workshop.component.html',
    styleUrls:['./workshop.component.css']
})

export class WorkshopComponent implements OnInit{
    constructor(private _route : ActivatedRoute,    private _router: Router) {
        _route.params.subscribe(val => {
        });
    }

    ngOnInit(){
    }
}