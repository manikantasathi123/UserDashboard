import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
formGroup!:FormGroup;
constructor(private authService:AuthServiceService){}
ngOnInit(){
  this.initForm();
}
  initForm(){
    this.formGroup=new FormGroup({
        username:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required])
    })

  
}
loginProcess(){
  if(this.formGroup.valid){
    this.authService.login(this.formGroup.value).subscribe(result=>{
      if(result.sucess){
        console.log(result);
        alert(result.message)
      }else{
        alert(result.message)
      }
    })
  }
}
}
