import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from "./course";

@Component({
    templateUrl: './course.component.html',
    styleUrls:['./course.component.css']
})

export class CourseDetailComponent implements OnInit{
    id: string = '';
    selectedCourse: ICourse;
    courses: ICourse[]=[
        {
            "id" : "1",
            "imageUrls":['./assets/images/bls_1.png','./assets/images/bls_2.png','./assets/images/bls_3.png','./assets/images/bls_4.png'],
            "description" : `<b>Basic life support (BLS)</b> is a level of medical care which is used for victims of life-threatening illnesses or injuries until they can be given full medical care at a hospital. It can be provided by trained medical personnel, including emergency medical technicians, paramedics, and by qualified bystanders.
            CPR is easy to learn and it’s a skill that everybody should have. It’s good to know that you can help if someone near you needs CPR.<br/><br/>           
            <b>Who Can Attend</b> -- Anyone who wants to learn CPR , Health care Providers , Any Speciality Doctor, Any Medical Fraternity , Nursing , Paramedical Staff , Gym Trainers.
            <br/><br/>
            <b>What you’ll gain</b>
            <br/><br/>
            This course is a mixture of less theory and more practice. On completion <br/><br/>
            <ul>
            <li> Know when and how to apply CPR for an adult, child and baby </li>
            <li>	AED (Automated External Defibrillator) </li>
            <li>	Know what to do if someone is choking   </li>
            <li>	Helps your workplace to meet health and safety standards </li>
            </ul><br/>
            <b>Duration --</b> 8 hours (Single Day)
            <br/><br/>
            <b>Certification -–</b> AHA (American Heart Association) Card -- Valid Globally.`

        },
        {
            "id" : "2",
            "imageUrls":['./assets/images/acls_2.png','./assets/images/acls_3.png'],
            "description" : `<b>Advanced cardiac life support (ACLS)</b> refers to a set of clinical interventions for the urgent treatment of cardiac arrest, stroke and other life-threatening medical emergencies, as well as the knowledge and skills to deploy those interventions.
            
            <table width = "100%">
            <tr>
                <td width="70%">
                        <ul>
                                <li>Electrocardiogram Interpretation</li> 
                                <li>  Cardiac Arrest Algorithm</li> 
                                <li>Acute Coronary Syndromes Algorithm</li> 
                                <li>PEA / Asystole Algorithm</li> 
                                <li>VF / Pulseless VT Algorithm</li> 
                                <li>Bradycardia Algorithm</li> 
                                <li>Tachycardia Algorithms</li> 
                                <li>Respiratory Arrest Algorithm</li> 
                                <li>Suspected Stroke Algorithm</li> 
                            </ul>
                </td>
                <td width="30%">
                    <img src = './assets/images/acls_1.png' height="300" width="300">
                </td>
            </tr>
            </table>
            <p><b> Who Can Do -– </b> Medical Fraternity, MBBS, BHMS, BAMS, Nursing Staff, ICU/ Emergency Staff 
            <br/><br/>
            <b>Benefit --</b> Will Build up Confidence level to Work in Emergency / ICU Areas, Specially Using Team Approach.
            <br/> <br/>
            <b>Duration --</b> 2 Days
            <br/> <br/>
            <b>Certification --</b> AHA (American Heart Association) Card – Valid Globally.
            </p> <br/> <br/>
           `
        },
        {
            "id" : "3",
            "imageUrls":['./assets/images/bec_3.png',
                        './assets/images/bec_4.png',
                        './assets/images/bec_5.png'],
            "description" : `<b>Basic Emergency Care,</b> is a study about Basics of lots of topics which are going to be Helpful in Day to Day Practise in Any Department of Hospital like Emergency, ICU, Wards, OT or Clinics.
            <br/><br/>
                        <p>
                            <b>Topics – </b>
                            <ul>
                                <li> ECG </li>
                                <li> Patient Assessment </li>
                                <li> Chest x ray </li>
                                <li> Basic Life Support / CPR </li>
                                <li> Chest Pain </li>
                                <li> Breathlessness</li>
                                <li> Stroke </li>
                                <li> Basic CT scan </li>
                                <li> Trauma  </li>
                                <li> Fractures  </li>
                            </ul>
                            <b>Who Can Attend -- </b>Medical Officers /MBBS/BHMS/BAMS/Interns /ICU / ER Staff.
                            <br/><br/>
                            <b>Duration -–</b> 6 Sundays
                            <br/><br/>
                            <b> Certified by --</b> ACADEMY OF EMERGENCY MEDICINE                     
                        </p>
                        <table align = "center" width = "70%">
                        <tr>
                            <td width="50%">
                            <img src = './assets/images/bec_1.png' height="300" width="300">
                            </td>
                            <td width="50%">
                                <img src = './assets/images/bec_2.png' height="300" width="300">
                            </td>
                        </tr>
                        </table>
                        `
        },
        {
            "id" : "4",
            "imageUrls":['./assets/images/atls_1.png',
                        './assets/images/atls_2.png'],
            "description" : `<b>Advanced trauma life support (commonly abbreviated ATLS) </b> is a training program for medical providers in the management of acute trauma cases.
            <br/><br/>
                        <p>
                        ATLS is now widely accepted as the standard of care for initial assessment and treatment in trauma centres. The premise of the ATLS program is to treat the greatest threat to life first. It also advocates that the lack of a definitive diagnosis and a detailed history should not slow the application of indicated treatment for life-threatening injury, with the most time-critical interventions performed early.                    
                        </p>
                        <b>Eligibility -–</b> MBBS and Above Degree Holders.
                        <br/><br/>
                        <b>Duration -–</b> 3 Days.
                        <br/><br/>
                        <b>Certified by –-</b> American College of Surgeons (ACS).
                        <br/><br/>
                        `
        },
        {
            "id" : "5",
            "imageUrls":[],
            "description" : `<b>International Trauma Life Support</b> is dedicated to the education in managing out-of-hospital trauma situations. <br/><br/>
                            <b>Course Content</b>
                            <br/><br/>
                            <ul>
                            <li>Patient assessment and management</li>
                            <li>Basic and advanced airway management</li>
                            <li>Needle chest decompression and fluid resuscitation</li>
                            <li>Spinal motion restriction including rapid extrication, helmet removal, log-roll, and long/backboard/scoop stretcher utilization</li>
                            <li>Extremity immobilization and traction splint application</li>
                            </ul>
                            <br/><br/>
                            <b>Course Length --</b> 16 hours
                            <br/><br/>
                            <b>Certified by --</b> American College of Emergency Physicians, Alabama Chapter.
                            <br/><br/>
                            <b>Eligibility --</b> Emergency Medical Providers such as Physicians, Nurses, Emergency Technicians, Paramedics.
                            <br/><br/>

                        `
        }
    ]
    constructor(private _route : ActivatedRoute,    private _router: Router) {
        _route.params.subscribe(val => {
            this.id = this._route.snapshot.paramMap.get('id');  
            this.selectedCourse = this.courses.find(x => x.id ===  this.id);
        });
    }

    ngOnInit(){
    }
}