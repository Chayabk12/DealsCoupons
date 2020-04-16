import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {coupon} from '../coupon';
import {Router} from '@angular/router'
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  constructor(private dataservice : DataService, private router: Router) { }
couponsList: coupon[]=[]
  ngOnInit(): void {
this.getCoupons();
  }



  clic(){
    console.log("hello")
    this.router.navigateByUrl("/ProPage")
  }
  getCoupons(){

    this.dataservice.getcoupons()
    .subscribe(coupons=>{
      this.couponsList= coupons;
      console.log(' dtata from database',this.couponsList)
      
    })
  }
}
