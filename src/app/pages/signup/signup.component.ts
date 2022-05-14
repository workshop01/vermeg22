import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private toastr : ToastrService) { }

  signupform : FormGroup = new FormGroup({
    'name' : new FormControl('' , Validators.required),
    'cin' : new FormControl('' , [Validators.required , Validators.min(1000000) , Validators.max(99999999)] ),
    'email' : new FormControl('' , [Validators.required , Validators.email]),
    'password' : new FormControl('' , Validators.required),
    "confirm_password" : new FormControl('' , Validators.required)

  })
  ngOnInit(): void {
  }

  save(){
    if(this.signupform.valid){
      if(this.signupform.get('password')?.value  
      == this.signupform.get('confirm_password')?.value ){
        console.log(this.signupform.get('password')?.value )
        console.log(this.signupform.value)
        localStorage.setItem('email' , this.signupform.get('email')?.value)
        this.toastr.success('' , 'Success !')
      }else{
        console.log("password error")
        this.toastr.error('invalid password' , 'Error')
      }     
    }
  }

}
