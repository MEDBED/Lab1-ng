import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.minLength(6)]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
