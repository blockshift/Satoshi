import { Component , Input , ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'enrollment.component.html'
})
export class EnrollmentComponent {

@ViewChild('dataContainer') dataContainer: ElementRef;
  constructor(private exampleService: AppService) { }



     

@Input() enrollmentid: any;
@Input() orgtoken: any;

  onSubmit(form: any):void{
    

    this.exampleService.fetchbyenrollment(form.enrollmentid)
  	.subscribe(data => {
  	           console.log('Service',form.enrollmentid); 
                    var testRespons = data["_body"];   
                    this.dataContainer.nativeElement.innerHTML = data["_body"];
                      
                     console.log("I SEE DATA HERE: ",testRespons);
               
  		}
  		); 
  	

  };

}
