import { Auction } from './auctions/auction';
import { NgModule } from '@angular/core';

export const AUCTIONS: Auction[] = [
  {
    id: 1,
    title: "Jarron de la dinastia Ming",
    description: "Pero que lindo jarroncito! No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza.",
    //pictures: string, es una lista
    initialPrice: 1000,
    startDate: new Date('11/01/2018'),
    endDate: new Date('11/08/2018'),
    state: "En progreso",
    // list of biddings [ {user: User, price: float} ]
    //biddings: ["hola", "chiques", "yaaay"],
    biddings: [{id: 1, user: 'Agus', auction: 'Jarroncito', price: 5}, {id: 2, user: 'tini', auction: 'Jarroncito', price: 50000000}],
    actualPrice: 1100
  },
  {
    id: 2,
    title: "Jarron de la dinastia Ming",
    description: "Pero que lindo jarroncito! No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza.",
    //pictures: string, es una lista
    initialPrice: 1000,
    startDate: new Date('11/01/2018'),
    endDate: new Date('11/08/2018'),
    state: "En progreso",
    // list of biddings
    //biddings: ["string"],
    biddings: [{id: 1, user: 'Agus', auction: 'Jarroncito', price: 5}],
    actualPrice: 1100
  },
  {
    id: 3,
    title: "Jarron de la dinastia Ming",
    description: "Pero que lindo jarroncito! No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza.",
    //pictures: string, es una lista
    initialPrice: 1000,
    startDate: new Date('11/01/2018'),
    endDate: new Date('11/08/2018'),
    state: "En progreso",
    // list of biddings
    //biddings: ["string"],
    biddings: [{id: 1, user: 'Agus', auction: 'Jarroncito', price: 5}],
    actualPrice: 1100,
  }
];
