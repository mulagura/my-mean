import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Data } from './data';

import 'rxjs/add/operator/map';

@Injectable()

export class AppService {

  private getUrl:string = '/data';
  private putUrl:string = '/data/';
  private delUrl:string = '/data/';

  constructor(private http:Http) {

   }

   getData(){
     return this.http.get(this.getUrl)
                      .map((res:Response) => res.json());
   }

   updateData(newData){

     console.log("in service update");
     console.log(newData);
     //console.log(newData.id);
     for(let i=0;i<newData.length;i++){
        var id = newData[i]._id;
      //  console.log(id);
   }
     //console.log(newData._id);


     let headers = new Headers({'Content-Type': 'application/json'});
     let options = new RequestOptions({headers:headers});

     console.log(id);

     return this.http.put( this.putUrl + id, JSON.stringify(newData),options )
                     .map((res:Response) => res.json());

   }

   deleteData(deldata){
     console.log("in service delete");
     console.log(deldata);

     for(let i=0;i<deldata.length;i++){
        var id = deldata[i]._id;
      //  console.log(id);
   }

     return this.http.delete(this.delUrl + id)
                      .map((res:Response) => res.json());
   }

}
