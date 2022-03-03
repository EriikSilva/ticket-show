import { CartService } from './../../services/cart/cart.service';
import { TicketService } from './../../services/ticket/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BandModel } from './../../shared/band.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
  band!: BandModel;

  constructor(private route:ActivatedRoute,
     private ticketService:TicketService,
      private cartService:CartService,
      private router:Router) { 
    route.params.subscribe((params)=>{
      if(params['id'])
      this.band = ticketService.getBandById(params['id']);
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.band);
    this.router.navigateByUrl('/cart-page')
  }



}
