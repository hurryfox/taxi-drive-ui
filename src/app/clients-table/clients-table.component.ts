import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})

export class ClientsTableComponent  {
  clients = CLIENTS;
}

export class Client {
  personLogin: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  ridesAmount: number
}


const CLIENTS: Client [] = [
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
  {personLogin: '11', firstName: 'Mr. Nice', lastName: 'Mr. Nice', dateOfBirth: 'Mr. Nice', ridesAmount: 2},
];
