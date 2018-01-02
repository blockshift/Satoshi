import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
  constructor(private exampleService: AppService, private active: NgbModal  ) { }

isCopied1: boolean = false;

  orgn = [
    {value: 'orga', viewValue :'Software '},
    {value: 'orga', viewValue :'Civil '},
    {value: 'orga', viewValue :' Electrical '},
    {value: 'orga', viewValue :' Mechanical '},
    {value: 'orga', viewValue :' Degree '},
    {value: 'orga', viewValue :' Admission '},
    {value : 'orga', viewValue : 'Examination' }
    
  ];
@Input() name: any;
@Input() org: any;
  onSubmit(form: any):void{
    console.log("djdn",form.name);

    this.exampleService.getEnrollmentId(form.name,form.org)
  	.subscribe(data => {
  	           console.log('Service',form.name); 
                    var testRespons = data.token;                     
                    this.dataContainer.nativeElement.innerHTML = "";
       
                     console.log("I SEE DATA HERE: ",testRespons);
               
  		}
  		); 
  	

  };
  // open(content) : void {
  //   this.active.open(content, { windowClass: 'dark-modal' });
  // }

}
