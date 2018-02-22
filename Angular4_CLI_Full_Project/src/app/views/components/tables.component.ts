import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Component, Input, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';

import {MatPaginator, MatTableDataSource} from '@angular/material';;

 
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';


'use strict';

@Component({
  templateUrl: 'tables.component.html',
  styleUrls : ['./table.component.css']

})
export class TablesComponent  {
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };

 
  
@ViewChild('dataContainer') dataContainer: ElementRef;


  constructor(private exampleService: AppService , private http : Http ) 
              {
                  
                }
  

                displayedColumns = ['username', 'Fathername'];

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

@Input() Name : any;
@Input() name : any;
@Input() fname : any;
@Input() enrollment : any;
@Input() cgpa : any;
@Input() orgtoken : any;
@Input() department : any;

onSubmit(form: any):void{
    
    console.log("form data",form);
    console.log("token",form.orgtoken);
  	this.exampleService.enrolldegree(form.name,form.fname,form.enrollment,form.cgpa,form.orgtoken,form.department)
  	.subscribe(data => {
                     var testResponse = data["_body"] ;
                     this.dataContainer.nativeElement.innerHTML = data["_body"];
                     console.log(data);
                     console.log("I SEE DATA HERE: ", testResponse);
                     
               //      }
  		}
  		); 

  };



  getNames = 
     ['No.', 'Name', 'Father Name','Enrollment','CGPA', 'Batch', 'Year of Passing','Depart'];



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

this.exampleService.enrolldegree(ok.name,ok.fname,ok.enrollment,ok.cgpa,ok.orgtoken,ok.department)
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
