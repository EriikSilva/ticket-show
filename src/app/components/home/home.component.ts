import { BandModel } from './../../shared/band.model';
import { TicketService } from './../../services/ticket/ticket.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bands!:BandModel[]

  constructor(private ticketService:TicketService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   if(params['searchTerm']) ///if not undefined
    //   this.bands = this.ticketService.getAll().filter(band => band.name.toLowerCase().includes(params['searchTerm']))
  //  })


    this.bands = this.ticketService.getAll()
  }

}
