import { CartPageComponent } from './components/cart-page/cart-page.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "buyTicket/:id",
    component: BuyTicketComponent
  },
  {
    path: "cart-page",
    component: CartPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
