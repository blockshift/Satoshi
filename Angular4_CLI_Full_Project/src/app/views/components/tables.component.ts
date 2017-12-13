
import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
  constructor(private exampleService: AppService) { }


@Input() name : any;
@Input() university : any;
@Input() enrollment : any;
@Input() cgpa : any;
@Input() orgtoken : any;
@Input() department : any;

onSubmit(form: any):void{
    
    console.log(form);
  	this.exampleService.enrolldegree(form.name,form.university,form.enrollment,form.cgpa,form.orgtoken,form.department)
  	.subscribe(data => {
                     var testResponse = data["_body"] ;
                     this.dataContainer.nativeElement.innerHTML = data["_body"];
                     console.log(data);
                     console.log("I SEE DATA HERE: ", testResponse);
                     
               //      }
  		}
  		); 

  };


}
