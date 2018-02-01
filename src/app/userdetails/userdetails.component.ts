import { Component, OnInit } from '@angular/core';
import {CommonServiceService } from './../service/common-service.service'
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers:[CommonServiceService]
})
export class UserdetailsComponent implements OnInit {

  public user;
  constructor(private commonService:CommonServiceService) { 
    this.user = {};
  }
  ngOnInit() {
    setTimeout(() => {
      this.commonService.getUserStore().subscribe(
        data => {
          console.log(data);
          this.user = data['user'];
        }
      );  
    }, 500);
    
  }

}
