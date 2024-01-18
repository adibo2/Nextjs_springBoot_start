'use client';
export default function ProductOrder(props: IProductOrderProps) {
  const { order } = props;

  return (
    <>
      <div
        className={`box w-48 rounded-l-lg flex-shrink-0 drop-shadow-md`}
      ></div>
      <div className="flex flex-col bg-neutral-100 hover:bg-white border-t border-r border-b border-gray-200 rounded-r-lg shadow p-4 mb-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#ce43a7]">
          Order Id: {order.id}
        </h2>
        <p className="mb-3 font-normal text-[#666666]">
          Customer:{' '}
          <a
            className="text-blue-500 underline"
            href={order._links.customer.href}
          >
            {order._links.customer.href}
          </a>
        </p>
        <p className="mb-3 font-normal text-[#666666]">
          Order Date: {formatDate(order.orderDate)}
        </p>
        <p className="mb-3 font-normal text-[#666666]">
          ProcessingDate: {formatDate(order.processingDate)}
        </p>
      </div>
    </>
  );
}

function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);

  return `${month}-${day}-${year}`;
}
