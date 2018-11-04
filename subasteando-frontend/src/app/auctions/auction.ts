import { Bid } from '../bids/bid';

export class Auction {
  id: number;
  title: string;
  description: string;
  //pictures: string; es una lista
  initialPrice: number;
  // fechas
  startDate: Date;
  endDate: Date;
  state: string;
  // list of biddings
  //biddings: string[];
  biddings: Bid[];
  actualPrice: number;
}
