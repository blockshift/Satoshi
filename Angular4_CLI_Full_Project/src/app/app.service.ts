import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AppService {
 

  constructor(private http:Http) {
  }

  // already return a clone of the current state
 
    servicemethod(){

      return 'Hi this is first message from service';
    }


//   Get enrolment Id from backend

    getEnrollmentId(userName,org) {
    console.log("username",userName);
    let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body1 = new URLSearchParams();
    body1.set('username', userName);
    body1.set('orgName', org);
    console.log("body1 logs",body1)
    let body = body1.toString(); 
    console.log('server logs',body);

    return this.http.post('http://ec2-34-201-0-4.compute-1.amazonaws.com:4000/users', body, options )
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));
  };


 // Invoke transaction on blockchain and returns it with token



enrolldegree(name,fname,enrollment,cgpa,batch,passingyear,department){
     
     let fcn = 'initDegree';	
     let depart = 'Software';
     console.log('Name',name);
     console.log('fname',fname);
     console.log('enrollment',enrollment);
     console.log('cgpa',cgpa);
     console.log('batch',batch);
     console.log('passingyear',passingyear);
     console.log('department',department);
     let argument = [name,fname,enrollment,cgpa,batch,passingyear,department];
     let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgyMTg3MjAsInVzZXJuYW1lIjoiTXVoYW1tYWQgS2FzaGFuIiwib3JnTmFtZSI6Im9yZ2EiLCJpYXQiOjE1MTQ2MTg3MjB9.7m15FdYBpM7QHzUvSgnSRnCRTwxc_OuDYThJO3Q8R5o'});
     let options = new RequestOptions({ headers: headers });
     
     let body1 = {
             fcn: fcn,
             args: argument
                }
     let body = JSON.stringify(body1);
     console.log('server logs',body1);

     return this.http.post('http://ec2-34-201-0-4.compute-1.amazonaws.com:4000/channels/firstchannel/chaincodes/firstchaincode', body1, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

};


 fetchblock(blocknumber){
 console.log("server logs",blocknumber);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgyMTg3MjAsInVzZXJuYW1lIjoiTXVoYW1tYWQgS2FzaGFuIiwib3JnTmFtZSI6Im9yZ2EiLCJpYXQiOjE1MTQ2MTg3MjB9.7m15FdYBpM7QHzUvSgnSRnCRTwxc_OuDYThJO3Q8R5o'});
       let options = new RequestOptions({ headers: headers });
        
<<<<<<< HEAD
     return this.http.get('http://ec2-34-201-0-4.compute-1.amazonaws.com:4000/channels/firstchannel/blocks/'+blocknumber+'?peer=peer1st-orga.orga', options )

    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));


};

fetchbytransaction(transactionid){
    
console.log("server logs",transactionid);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgyMTg3MjAsInVzZXJuYW1lIjoiTXVoYW1tYWQgS2FzaGFuIiwib3JnTmFtZSI6Im9yZ2EiLCJpYXQiOjE1MTQ2MTg3MjB9.7m15FdYBpM7QHzUvSgnSRnCRTwxc_OuDYThJO3Q8R5o'});
       let options = new RequestOptions({ headers: headers });
        
<<<<<<< HEAD
     return this.http.get('http://ec2-34-201-0-4.compute-1.amazonaws.com:4000/channels/firstchannel/transactions/'+transactionid+'?peer=peer1st-orga.orga', options )

    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));



};



fetchbyenrollment(enrollmentid){
    
console.log("server logs",enrollmentid);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTgyMTg3MjAsInVzZXJuYW1lIjoiTXVoYW1tYWQgS2FzaGFuIiwib3JnTmFtZSI6Im9yZ2EiLCJpYXQiOjE1MTQ2MTg3MjB9.7m15FdYBpM7QHzUvSgnSRnCRTwxc_OuDYThJO3Q8R5o'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-34-201-0-4.compute-1.amazonaws.com:4000/channels/firstchannel/chaincodes/firstchaincode/?peer=peer1st-orga.orga&fcn=readDegree&args=%5B%22'+enrollmentid+'%22%5D', options )

    .map((res: Response) => res)
    .catch(e => {
            if (e.status === 401) {
                console.log("It works");
                return Observable.throw('Unauthorized');
            }
             console.log("It works");
            // do any other checking for statuses here
        });


};





  }