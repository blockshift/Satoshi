import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'transaction.component.html'
})
export class TransactionComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
  constructor(private exampleService: AppService) { }


@Input() transactionid: any;
@Input() orgtoken: any;

  onSubmit(form: any):void{
    console.log(form.orgtoken);

    this.exampleService.fetchbytransaction(form.transactionid,form.orgtoken)
  	.subscribe(data => {
  	           console.log('Service',form.transactionid); 
                    var testRespons = data["_body"];                     
                    this.dataContainer.nativeElement.innerHTML = data["_body"];
                      
                     console.log("I SEE DATA HERE: ",testRespons);
               
  		}
  		); 
  	

  };

}
