
import { Component , Input , ViewChild,ElementRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule, Validators,FormControl } from '@angular/forms';
import * as XLSX from 'xlsx';
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


  getNames = 
  ['No.', 'Name', 'Father Name','Enrollment', 'Batch', 'Expiry','Depart','Address'];



public data : any [] ;


onFileChange(evt: any) {
/* wire up file reader */
const target: DataTransfer = <DataTransfer>(evt.target);
if (target.files.length !== 1) throw new Error('Cannot use multiple files');
const reader: FileReader = new FileReader();
reader.onload = (e: any) => {
 /* read workbook */
 const bstr: string = e.target.result;
 const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

 /* grab first sheet */
 const wsname: string = wb.SheetNames[0];
 const ws: XLSX.WorkSheet = wb.Sheets[wsname];

 /* save data */
 // this.data = (XLSX.utils.sheet_to_json(ws,{header : 1}));
 // console.log(this.data);
 this.data =   XLSX.utils.sheet_to_json(ws,{raw:true});
console.log("data hai", this.data);
};
reader.readAsBinaryString(target.files[0]);
}

//body  : any[] ;
try : any ;
onSelect(selected: any []) {
console.log("Selected item Id: ", selected); 
let body = JSON.stringify(selected);
console.log(body);
let ok = JSON.parse(body);
console.log("parse k bd ", ok);
console.log(ok.name);

this.exampleService.enrollidentity(ok.name,ok.fname,ok.enrollment,ok.expiry,ok.batch,ok.studentresidentialaddress,ok.department)
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



