import { BandModel } from './../../shared/band.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {



  constructor() { }

  getBandById(id:number):BandModel{
    return this.getAll().find(band => band.id == id)!;
  }


  getAll():BandModel[]{
    return [
      {
        id:1,
        name: "Hype",
        date: "20/10",
        imageUrl: "/assets/banda1.jpg",
        description: "Special cover event with the Metalica Cover at 9PM",
        price: 20
      },
      {
        id:2,
        name: "Prettier",
        date: "21/10",
        imageUrl: "/assets/banda2.jpg",
        description: "Special cover event with the Linkin Park Cover at 9PM",
        price: 20
      },
      {
        id:3,
        name: "Analogy",
        date: "22/10",
        imageUrl: "/assets/banda3.jpg",
        description: "Special cover event with the System of a down Cover at 9PM",
        price: 30
      },
      {
        id:4,
        name: "Index++",
        date: "23/10",
        imageUrl: "/assets/banda4.jpg",
        description: "Special cover event with the Slipknot Cover at 10PM",
        price: 30
      }

    ]
  }

}
