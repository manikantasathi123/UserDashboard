import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

declare var $: any;
interface Kafein {
  name: string;
  
}
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent {
  public getMethod(){
    this.http.get<Kafein>('http://65.0.155.254:5001/admin/department/list').subscribe((data)=>{
   this.getJsonValue=data;
  console.log(this.getJsonValue);
    });
  
  }
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();
  posts;
  public  getJsonValue:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getMethod();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      
    };
 


  }


  // rows=[
  //   {"name":"manikanta","Actions":""},
  //   {"name":"suresh","Actions":""},

  // ]
  model: any = {};
  model2: any = {}; 
  newEmployeeClicked = false;
  public postJsonValue:any;
  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  } 
  addEmployee() {
  
    
      const header= new HttpHeaders({
        ContentType: 'application/json; charset=utf-8',
      
      })
      let   body=({
        name: 'developer',
        
        
      })
      this.http.post('http://65.0.155.254:5001/admin/department/add',body,{headers:header}).subscribe((data)=>{
        this.postJsonValue=data;
          });
    // }
  }

  handleFileSelect(evnt){

  }
  
}
