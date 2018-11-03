export class Auction {
  id: number;
  title: string;
  description: string;
  //pictures: string; es una lista
  initialPrice: number;
  // fechas
  startDate: date;
  endDate: date;
  state: string;
  // list of biddings
  //biddings: string;
  actualPrice: number;
}
