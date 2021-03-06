
import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule, Validators,FormControl } from '@angular/forms';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
@ViewChild('dataContainer2') dataContainer2: ElementRef;
  constructor(private exampleService: AppService) { }

selectedValue: string;
 dropdown = new FormControl('', [Validators.required]);

getErrorMessage() {
    return this.dropdown.hasError('required') ? 'You must enter a value' :'';
  }

depart  = [

  {value : "Software", viewValue : "Software" },
  {value : "Electrical", viewValue : "Electical"},
  {value : "Mechanical", viewValue : "Mechanical"},
  {value : "Civil", viewValue : "Civil"},
  {value : "Chemical", viewValue : "Chemical"},
  {value : "CS&IT", viewValue : "CS&IT"},
  {value : "Bio-Medical", viewValue : "Bio-Medical"},
  {value : "CIS", viewValue : "CIS"},
  {value : "I.M", viewValue : "I.M"},
  {value : "Petroluem", viewValue : "Petroleum"}
]


@Input() name : any;
@Input() fname : any;
@Input() enrollment : any;
@Input() expiry : any;
@Input() batch : any;
@Input() studentresidentialaddress : any;
@Input() department: any;
onSubmit(form: any):void{
    
    console.log(form);
  	this.exampleService.enrollidentity(form.name,form.fname,form.enrollment,form.expiry,form.batch,form.studentresidentialaddress,form.department)
  	.subscribe(data => {
                     var testResponse = data["_body"] ;
                     this.dataContainer.nativeElement.innerHTML = data["_body"];
                     console.log(data);
                     console.log("I SEE DATA HERE: ", testResponse);
                     
               //      } 
  		 
},
               error => {
                      console.log("This is sample error");
                      this.dataContainer.nativeElement.innerHTML ='Invalid Authorization Token'; 

 }
  		); 

  };


}
