import { getUser } from "../shared/app-utility";

export interface IProduct {
  ProductID?: number;
  ProductName: string;
  Quantity: number;
  Price: number;
  CreatedDate: Date;
  CreatedBy: string;
}

export function getDefaultProduct(override?: Partial<IProduct>): IProduct {
  const defaultProduct: IProduct = {
    ProductName: "",
    Price: 0.0,
    Quantity: 0,
    CreatedBy: getUser(),
    CreatedDate: new Date(),
  };

  return Object.assign(defaultProduct, override);
}
