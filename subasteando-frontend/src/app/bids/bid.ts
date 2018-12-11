import { User } from '../users/user';

export class Bid {
  id: number;
  user: User;
  // auction: Auction;
  auction: string;
  price: number;
}
