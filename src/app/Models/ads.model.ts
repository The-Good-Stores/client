export default interface Ad {
  adsId: string;
  username: string;
  title: string;
  body: string;
  price: number;
  begin: Date;
  end: Date;
  deliveryMethod: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
