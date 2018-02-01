import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../service/common-service.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CommonServiceService],
})
export class LoginComponent implements OnInit {

  constructor(
    public commonService: CommonServiceService,
    public router:Router
  ) { }
  public data = {};
  resolved(captchaResponse: string) {
    this.data['captcha'] = captchaResponse;
    console.log(`Resolved captcha with response ${captchaResponse}`);
  }
  onSubmit() {

    this.data['password_md5'] = Md5.hashStr(this.data['password']);

    var dataArr = {
      "captcha": this.data['captcha'],
      "username": this.data['username'],
      "password_md5": this.data['password_md5'],

    };

    var res = this.commonService.login(dataArr).subscribe(
      data => {
        console.log("Rows:", data);
        var x_falcon_token = data.headers.get('X-FALCON-TOKEN');
        var x_xrsf_token = data.headers.get('X-XSRF-TOKEN');
        
        console.log("x_xrsf_token:",x_xrsf_token);
        localStorage.setItem('x_falcon_token',x_falcon_token);
        localStorage.setItem('x_xrsf_token',x_xrsf_token);
        this.router.navigate(['/details']);
      }
    );

  }

  ngOnInit() {
    console.log(Md5.hashStr('blah blah blah'));
  }

}
