import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{Router}  from '@angular/router';
import {product} from '../product'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private dataservice: DataService, private router : Router) { }
productAddedToCart:product[]=[] 
allTotal: Number
  ngOnInit(): void {
this.productAddedToCart= this.dataservice.getProductFromCart();
this.calculteAllTotal(this.productAddedToCart);
  }


  removeall(){
    this.dataservice.removeAllProductFromCart();
    this.dataservice.getProductFromCart();
    this.router.navigateByUrl('/ProPage')
  }


  calculteAllTotal(allItems:product[])
  {
    let total=0;
    for (let i in allItems) {
      total= total+(allItems[i].Quantity *allItems[i].productPrice);
   }
   this.allTotal=total;
  }

}
