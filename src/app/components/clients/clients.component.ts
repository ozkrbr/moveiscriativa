import { Component, OnInit } from '@angular/core';
//Client Service
import { ClientService } from '../../services/client.service';
//Client Model
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients =>{
      //console.log(clients);
      this.clients = clients;
    });
  }

}
