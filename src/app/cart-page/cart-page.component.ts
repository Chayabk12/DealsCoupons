import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import  {product} from  '../product'
import { from } from 'rxjs';
import{Router}  from '@angular/router';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private dataservice: DataService, private router : Router) { }
productAddedToCart: product[];
allTotal: number
  ngOnInit(): void {
this.productAddedToCart= this.dataservice.getProductFromCart();
 for(let i in this.productAddedToCart){
  this.productAddedToCart[i].Quantity=1
} 
this.dataservice.removeAllProductFromCart();
   this.dataservice.addProductToCart(this.productAddedToCart);
  }

  onAddQuantity(product:product)
  {
    this.productAddedToCart=this.dataservice.getProductFromCart();
    this.productAddedToCart.find(p=>p.productName==product.productName).Quantity = product.Quantity+1;
    this.dataservice.removeAllProductFromCart();
  this.dataservice.addProductToCart(this.productAddedToCart);
  this.calculteAllTotal(this.productAddedToCart);
  }


  removeall(){
    this.dataservice.removeAllProductFromCart();
    this.dataservice.getProductFromCart();
    this.router.navigateByUrl('/ProPage')
  }
  onRemoveQuantity(product:product)
  {

    
      this.productAddedToCart=this.dataservice.getProductFromCart();
      this.productAddedToCart.find(p=>p.productName==product.productName).Quantity = product.Quantity-1;
      this.dataservice.removeAllProductFromCart();
      this.dataservice.addProductToCart(this.productAddedToCart);
      this.calculteAllTotal(this.productAddedToCart);
  
    

  }

  md(){
    this.router.navigateByUrl('/checkout')
    this.productAddedToCart=this.dataservice.getProductFromCart()
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


