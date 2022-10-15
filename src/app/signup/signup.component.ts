import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regform!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.regform=this.formbuilder.group(
      {
        name:[''],
        email:[''],
        password:[''],
        cpwd:['']
      }
    )
  }
  signup(){
    this.http.post<any>('http://localhost:3000/user',this.regform.value).subscribe(res=>
      {
        alert("data added");
      })
  }

}
