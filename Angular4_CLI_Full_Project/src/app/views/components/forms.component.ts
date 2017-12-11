import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
  constructor(private exampleService: AppService) { }


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
