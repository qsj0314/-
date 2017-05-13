import {Component, OnChanges, OnInit, Injectable,  Input} from '@angular/core';
import { Headers, Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

// @Injectable()
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnChanges,OnInit{

// @Input()

  private headers = new Headers({'Content-Type': 'application/json',});
  private APIUrl = 'http://192.168.0.134:8080/pcweb/user/test'; // URL to web api

  constructor(public http: Http){
      this.http = http;
  };


  title = 'app works!';

  test(){
    var phone_num=$(".q_num").val();
    if(!(/^1[34578]\d{9}$/).test(phone_num)){
      alert("error")
    }


    let body = JSON.stringify({
          "operType" : "4022",
          "resources" : (
                {
            "hzsjh" : "18521701740",
            "verifyCode" : "436359"
            }
          )
        });


    this.http
      .post(this.APIUrl, body, {headers: this.headers})
      .toPromise()
      .then(res => {
        console.log('receve data is ++++++++++++='+res);
     })



  }

  ngOnInit() {
    // window.onload=function () {
      console.log(1);
      var pg=Math.floor(1+Math.random()*3);
    $(".q_bg").css("background","url(../assets/img/login/bg"+pg+".png) 0/cover fixed");
    $(".forg").css("background","rgba(0,0,0,0.8) url(../assets/img/login/bg"+pg+".png) 0/cover fixed");
    // $(".forg").css({
    //   "filter":"blur(7px)",
    //   "background-color":"rgba(0,0,0,0.)"
    // });

  }

  ngOnChanges(){
    // console.log("onchange")
  }


}
