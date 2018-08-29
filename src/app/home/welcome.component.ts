import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls:['./welcome.component.css']
})
export class WelcomeComponent {
    public homeContent: string = `
    <table>
    <tr>
    <td valign="top">
    <b>AEM - </b> Academy of Emergency  Medicine is an academy to prepare and train health care providers for Emergency Medical Service.    
    <br/><br/><br/><br/>
    <b>Affiliation - </b>
    <br/>
    LIHS (Life supporters Institute of Health Science) - A Premier Institute for Providing To Helth care providers Mumbai.
    <br/><br/><br/>
    <b>AHA (American Heart Association)</b> -  Recognised Training Centre.
    </td>
    <td colspan = "2">
            <img src = './assets/images/logo.png' height="500" width="500">
        </td>
    </tr>
    
    </table>`   
}
