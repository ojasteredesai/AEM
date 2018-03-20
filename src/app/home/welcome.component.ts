import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls:['./welcome.component.css']
})
export class WelcomeComponent {
    public homeContent: string = `<p>
    <b>AEM - </b> Academy of Emergency  Medicine is an academy to prepare and train health care providers for Emergency Medical Service.
    <br/><br/>
    <b>Affiliation - </b>
    <br/>
    LIHS (Life supporters Institute of Health Science) - A Premier Institute for Providing To Helth care providers Mumbai.
    <br/>
    AHA (American Heart Association) -  Recognised Training Centre.
    </p>`
    ;
}
