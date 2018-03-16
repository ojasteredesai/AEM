import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from "./course";

@Component({
    templateUrl: './course.component.html',
    styleUrls:['./course.component.css']
})

export class CourseDetailComponent implements OnInit{
    name: string = '';
    selectedCourse: ICourse;
    courses: ICourse[]=[
        {
            "id" : "1",
            "imageUrls":['./assets/images/bls_1.png'],
            "description" : `<b>Basic life support (BLS)</b> is a level of medical care which is used for victims of life-threatening illnesses or injuries until they can be given full medical care at a hospital. It can be provided by trained medical personnel, including emergency medical technicians, paramedics, and by qualified bystanders.
            CPR is easy to learn and it’s a skill that everybody should have. It’s good to know that you can help if someone near you needs CPR.           
            Who Can Attend -- Anyone who wants to learn CPR , Health care Providers , Any Speciality Doctor, Any Medical Fraternity , Nursing , Paramedical Staff , Gym Trainers.
            What you’ll gain
            This course is a mixture of less theory and more practice. On completion 
            •	Know when and how to apply CPR for an adult, child and baby
            •	AED (Automated External Defibrillator) 
            •	Know what to do if someone is choking   
            •	Helps your workplace to meet health and safety standards
            Duration -- 8 hours (Single Day)
            Certification – AHA (American Heart Association) Card -- Valid Globally.`

        },
        {
            "id" : "2",
            "imageUrls":[''],
            "description" : `Advanced cardiac life support (ACLS) refers to a set of clinical interventions for the urgent treatment of cardiac arrest, stroke and other life-threatening medical emergencies, as well as the knowledge and skills to deploy those interventions.`

        }
    ]
    constructor(private _route : ActivatedRoute,    private _router: Router) {
        _route.params.subscribe(val => {
            this.name = this._route.snapshot.paramMap.get('name');  
            this.selectedCourse = this.courses.find(x => x.id ===  this.name);
        });
    }

    ngOnInit(){
    }
}