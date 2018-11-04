import { Bid } from '../bids/bid';

export class Auction {
  id: number;
  title: string;
  description: string;
  pictures: string[];
  initialPrice: number;
  startDate: Date;
  endDate: Date;
  state: string;
  biddings: Bid[];
  actualPrice: number;
}
