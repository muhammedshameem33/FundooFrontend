import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'protractor';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  user:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private service:UserService,private snackBar: MatSnackBar) { }

  validation(){
    let data={
      email:this.valueOfInputField('userName'),
      password:this.valueOfInputField('password'),
      confirm:this.valueOfInputField('confirm')
    }
this.service.resetPasswordAction(data,"api/Account/ResetPassword").subscribe(
  success=>{
    this.openSnackBar("Successfull","Reset Password");
    this.router.navigate(['/fundoo']);
  },
  error=>{
    this.openSnackBar(error.toString(),"reset password");
  }
)

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  valueOfInputField(inputElement:string){
    return this.user.get(inputElement).value;
  }

  ngOnInit(): void {
    this.user =this.fb.group({
      userName:['',
        [Validators.required,Validators.email]],
      password:['',
        Validators.required],
      confirm:['',
        Validators.required]});
  }

}
