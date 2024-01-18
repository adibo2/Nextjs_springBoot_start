'use client';
import ProductOrder from './ProductOrder';

const ProductOrderList: any = ({ orders }: IProductOrderListProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      {orders.map((order: any) => {
        return <ProductOrder order={order} key={order.id} />;
      })}
    </div>
  );
};

export default ProductOrderList;
