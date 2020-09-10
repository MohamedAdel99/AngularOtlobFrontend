import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {RegisterPayload} from '../register-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { MustMatch } from './mustmatchvalidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerPayload: RegisterPayload;
  isSubmitted  =  false;
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router:Router) { 
    this.registerPayload = {
      username: '',
      email: '',
      phonenum:'',
      address:'',
      payment:'',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenum:['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10)]],
      address:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get formControls() { return this.registerForm.controls; }
  onSubmit() {
    this.isSubmitted=true;
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.phonenum = this.registerForm.get('phonenum').value;
    this.registerPayload.address = this.registerForm.get('address').value;
    this.registerPayload.payment = "Cash"
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
    if (this.registerForm.invalid) {
      return;
  }
    else{
    this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register succes');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed');
    });
  }
  }
}
