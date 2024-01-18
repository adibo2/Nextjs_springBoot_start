import NewProductOrderForm from '../../../components/NewProductOrderForm';

export default async function CreateProductOrder() {
  return (
    <>
      <h1 className="text-center font-bold text-5xl mt-6 mb-20">
        Create A New Product Order
      </h1>
      <NewProductOrderForm />
    </>
  );
}
