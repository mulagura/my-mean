import { Component, OnInit } from '@angular/core';

import { Data } from './data';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title:string = 'MEANSTACK';
  public data:Array<Data>;
  public okButtonEnable:boolean = false;
  public inputDisabled:boolean = true;

  constructor(private appService:AppService){

  }

  ngOnInit(){

        this.appService.getData()
                       .subscribe(resData => this.data = resData);

            }

  onEdit(){
    console.log("clicked on edit button");
    this.okButtonEnable = true;
    this.inputDisabled = false;

  }

  onOkAndUpdate(value){
    console.log("clicked on ok button");
    this.okButtonEnable = false;
    this.inputDisabled = true;
    console.log(this.data); // two way data binding working,,update name
    value = this.data;
    console.log(value);  //no need,,because getting data from this.data from two way data binding

this.appService.updateData(value)
               .subscribe(updatedResData => value = updatedResData);
               console.log(value);
  //  this.data = value;

  }

  onDelete(nameDataToDelete){

      nameDataToDelete = this.data;
        console.log(nameDataToDelete);
        //console.log(nameDataToDelete.name);

       this.appService.deleteData(nameDataToDelete)
                          .subscribe(deletedResData =>  {
                                            for(let i=0;i<nameDataToDelete.length;i++){

                                                nameDataToDelete.splice(i,1);

                                            }
                                                    });




  }

}
