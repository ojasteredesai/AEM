import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { IWorkshop } from "./workshop";

@Component({
    templateUrl: './workshop.component.html',
    styleUrls:['./workshop.component.css']
})

export class WorkshopComponent implements OnInit{
    id: string = '';
    selectedWorkshop: IWorkshop;
    workshops: IWorkshop[] = [
        {
            "id" : "1",
            "description":`
            <p class="para-font">Basic Trauma Care</p>
            <br/>
            <br/><table align = "center" width = "100%">
            <tr>
                <td width="50%">
                    <ul> 
                        <font size="5">                   
                        <li><b>Initial Management</li>
                        <br/>
                        <li>Spine Importance</li>
                        <br/>
                        <li>Practical Approach</li>
                        <br/>
                        <li>Emergency Procedures</b></li>
                        </font>
                    </ul>
                </td>
                <td width="50%">
                    <img src = './assets/images/workshop_2.png' height="300" width="300">
                </td>
            </tr>
            </table> `
        },
        {
            "id" : "2",
            "description":`
            <p class="para-font">CPR/AED</p>
            <br/>
            <br/><table align = "center" width = "100%">
            <tr>
                <td width="50%">
                    <ul> 
                        <font size="5">                   
                        <li><b> Cardiac Arrest</li>
                        <br/>
                        <li>CPR</li>
                        <br/>
                        <li>AED</b></li>
                        </font>
                    </ul>
                </td>
                <td width="50%">
                    <img src = './assets/images/workshop_1.png' height="300" width="300">
                </td>
            </tr>
            </table> `
        },
        {
            "id" : "3",
            "description":`
            <p class="para-font">Airway Management</p>
            <br/>
            <br/><table align = "center" width = "100%">
            <tr>
                <td width="50%">
                    <ul> 
                        <font size="5">                   
                        <li><b>Basic Airway</li>
                        <br/>
                        <li>Advanced Airway</li>
                        <br/>
                        <li>Equipment</b></li>
                        </font>
                    </ul>
                </td>
                <td width="50%">
                    <img src = './assets/images/workshop_3.png' height="300" width="300">
                </td>
            </tr>
            </table> `
        }
    ]
    constructor(private _route : ActivatedRoute,    private _router: Router) {
        _route.params.subscribe(val => { 
            this.id = this._route.snapshot.paramMap.get('id');  
        this.selectedWorkshop = this.workshops.find(x => x.id ===  this.id);
        });
    }

    ngOnInit(){
    }
}