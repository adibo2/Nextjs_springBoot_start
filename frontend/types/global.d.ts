export {};

declare global {
  interface IProductOrderListProps {
    orders: IProductOrder[];
  }

  interface IProductOrder {
    id: number;
    customer: ICustomer;
    orderDate: Date;
    processingDate: Date;
    _links: {
      customer: {
        href: string;
      };
    };
  }

  interface ICustomer {
    id: number;
    name: string;
    productOrders: IProductOrder[];
  }

  interface IProductOrderProps {
    order: IProductOrder;
  }
}
