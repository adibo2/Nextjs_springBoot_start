import ProductOrderList from '../../components/ProductOrderList';
import { getProductOrders } from '../util/productOrders';

export const dynamic = 'force-dynamic'; //disable all caching of fetch requests

export default async function ProductOrders() {
  const orders = await getProductOrders();

  return (
    <>
      <h1 className="text-center font-bold text-5xl mt-6 mb-20">
        All Product Orders
      </h1>
      <ProductOrderList orders={orders} />
    </>
  );
}
