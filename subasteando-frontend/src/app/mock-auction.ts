import { Auction } from './auctions/auction';
import { NgModule } from '@angular/core';

export const AUCTIONS: Auction[] = [
  {
    id: 1,
    title: "Jarron de la dinastia Ming",
    description: "Pero que lindo jarroncito! No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza. No puedo creer la belleza.",
    pictures: ["https://fotos01.diariodeibiza.es/2009/05/16/318x200/2009-05-16_IMG_2009-05-16_00:47:35_efe_20090515_153416_1_56_2.jpg"],
    initialPrice: 1000,
    startDate: new Date('11/01/2018'),
    endDate: new Date('11/08/2018'),
    state: "En progreso",
    biddings: [{id: 1, user: 'Agus', auction: 'Jarroncito', price: 5}, {id: 2, user: 'tini', auction: 'Jarroncito', price: 50000000}],
    actualPrice: 1100
  },
  {
    id: 2,
    title: "Gato mayordomo",
    description: "Se denomina mayordomo al criado principal a cuyo cargo está el gobierno económico de alguna casa o hacienda.",
    pictures: ['http://quicklol.com/wp-content/uploads/2013/08/tea-sir.jpg'],
    initialPrice: 1000,
    startDate: new Date('11/01/2018'),
    endDate: new Date('11/08/2018'),
    state: "En progreso",
    biddings: [{id: 1, user: 'Agus', auction: 'Jarroncito', price: 5}],
    actualPrice: 1100
  },
  {
    id: 3,
    title: "Necronomicon de la UBA",
    description: "El titulo original del Necronomicón es “Al Azif”. Azif, es una palabra árabe que designa un ruido nocturno (producido por insectos) que se supone que es el aullido de demonios. Fue escrito por Abdul Alhazred, un poeta loco de Sanaá, en Yemen, que se dice que vivió alrededor del 700 A. D.",
    pictures: ["https://enidiomaoriginal.files.wordpress.com/2011/04/necronomicon1.jpg"],
    initialPrice: 1000,
    startDate: new Date('11/01/2018'),
    endDate: new Date('11/08/2018'),
    state: "En progreso",
    biddings: [{id: 1, user: 'Agus', auction: 'Jarroncito', price: 5}],
    actualPrice: 1100,
  }
];
