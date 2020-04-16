import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  providers : [MyserviceService]
})
export class LogComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _myservice: MyserviceService, private router: Router) { 
      this.loginForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      }); 
    }

  ngOnInit(): void {
  }


  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {

            if(data){
            console.log("hello",data);
            localStorage.setItem('token', data.toString());}
            else{
              alert("invalid user")
            }
          this.router.navigate(['/']);
          },
          error => { }
        );
    }
    
    
  }

}
