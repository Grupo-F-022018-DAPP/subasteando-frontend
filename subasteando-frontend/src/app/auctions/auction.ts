import { Bid } from '../bids/bid';
import { User } from '../users/user';

export class Auction {
  id: number;
  title: string;
  description: string;
  pictures: string[];
  owner: User;
  initialPrice: number;
  startDate: Date;
  endDate: Date;
  state: string;
  biddings: Bid[];
  actualPrice: number;
}
