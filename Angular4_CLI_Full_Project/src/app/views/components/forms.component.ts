import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
  constructor(private exampleService: AppService, ) { }

isCopied1: boolean = false;

  orgn = [
    {value: 'orga', viewValue :'Software '},
    {value: 'orga', viewValue :'Civil '},
    {value: 'orga', viewValue :' Electrical '},
    {value: 'orga', viewValue :' Mechanical '},
    {value: 'orga', viewValue :' Degree '},
    {value: 'orga', viewValue :' Admission '},
    
  ];
@Input() name: any;
@Input() org: any;
  onSubmit(form: any):void{
    console.log(form.name);

    this.exampleService.getEnrollmentId(form.name,form.org)
  	.subscribe(data => {
  	           console.log('Service',form.name); 
                    var testRespons = data.token;                     
                    this.dataContainer.nativeElement.innerHTML = data.token;
                      
                     console.log("I SEE DATA HERE: ",testRespons);
               
  		}
  		); 
  	

  };




}
