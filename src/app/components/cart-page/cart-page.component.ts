import { TicketService } from './../../services/ticket/ticket.service';
import { CartItem } from './../../shared/cartItem.model';
import { CartModel } from './../../shared/cart.model';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:CartModel
  constructor(private cartService:CartService, private ticket:TicketService) {
    this.setCart();
   
   }


  ngOnInit(): void {
    
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.band.id);
    this.setCart();
  }  

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.band.id, quantity)

    this.setCart();
  }
}
