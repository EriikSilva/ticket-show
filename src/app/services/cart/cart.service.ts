import { BandModel } from './../../shared/band.model';
import { CartModel } from './../../shared/cart.model';
import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/shared/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:CartModel = new CartModel();
  
  addToCart(band: BandModel):void{
    let cartItem = this.cart.items.find(item => item.band.id === band.id);
    if(cartItem){
      this.changeQuantity(band.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(band));
  }

  removeFromCart(bandId:number):void{
    this.cart.items = 
    this.cart.items.filter(item => item.band.id != bandId); 
  }

  changeQuantity(bandId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.band.id === bandId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  } 

  getCart():CartModel{
    return this.cart;
  }

}
