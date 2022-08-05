import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.login = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, {
      validator: confirmedvalidator('password', 'confirm_password')
    })
    get f(){
      return this.login.controls;
    }
   }

  ngOnInit(): void {





  }

  login=new FormGroup({
    fn:new FormControl(null,[Validators.required]),
    ln:new FormControl(null,[Validators.required]),
    add:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
    state:new FormControl(null,[Validators.required]),
    zip:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required]),
    em:new FormControl(null,[Validators.required]),
    pass:new FormControl(null,[Validators.required]),
    repass:new FormControl(null,[Validators.required]),
  })
  get fn()
{
  return this.login.get('fn');
}
get ln()
{
  return this.login.get('ln');
}
get add()
{
  return this.login.get('add');
}

get city()
{
  return this.login.get('city');
}
get state()
{
  return this.login.get('state');
}
get zip()
{
  return this.login.get('zip');
}
get phone()
{
  return this.login.get('phone');
}
get em()
{
  return this.login.get('em');
}
get pass()
{
  return this.login.get('pass');
}
get repass()
{
  return this.login.get('repass');
}

}
