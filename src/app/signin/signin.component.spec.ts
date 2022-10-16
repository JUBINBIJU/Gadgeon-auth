import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signform!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signform=this.formbuilder.group(
      {
        email:[''],
        pwd:['']

      }
    )
  }
  signin(){
    this.http.get<any>('http://localhost:3000/user').subscribe(res=>
     {const user=res.find((a:any)=>{
      return a.email===this.signform.value.email&&a.pwd===this.signform.value.pwd
     }
     )
     if(user){
      alert("user exist");
    }
    else
    {
      alert("doesnt exist")
    }
   
  }) 
     
  }
  

}
