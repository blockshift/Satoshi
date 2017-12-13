import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'blockchainsearch.component.html'
})
export class BlockchainsearchComponent {
@ViewChild('dataContainer') dataContainer: ElementRef;
  constructor(private exampleService: AppService) { }


@Input() blockNumber: any;
@Input() orgtoken: any;

  onSubmit(form: any):void{
    console.log(form.orgtoken);

    this.exampleService.fetchblock(form.blockNumber,form.orgtoken)
  	.subscribe(data => {
  	           console.log('Service',form.blockNumber); 
                    var testRespons = data["_body"];                     
                    this.dataContainer.nativeElement.innerHTML = data["_body"];
                      
                     console.log("I SEE DATA HERE: ",testRespons);
               
  		}
  		); 
  	

  };

}
