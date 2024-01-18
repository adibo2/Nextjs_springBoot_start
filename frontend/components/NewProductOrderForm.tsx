'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createProductOrder } from '@/app/util/productOrders';

export default function NewProductOrderForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    await createProductOrder(name, email);
    router.replace('/productOrders');
    router.refresh();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    if (id === 'email') {
      setIsEmailValid(emailRegex.test(value));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const isFormValid = Object.values(formData).every((value) => value !== '');

  return (
    <>
      <div className="bg-[#434fd282] max-w-xl mx-auto mt-35 p-16 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-[#f8f8f8] text-xs font-bold mb-2">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-[#fefefed4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Austen"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-[#f8f8f8] text-xs font-bold mb-2">
                Email
              </label>
              <input
                className={`appearance-none block w-full bg-[#fefefed4] text-gray-700 border ${
                  isEmailValid ? '' : 'border-red-500'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  isEmailValid ? '' : 'focus:border-red-500'
                }`}
                id="email"
                type="email"
                placeholder="mail@mail.de"
                value={formData.email}
                onChange={handleChange}
              />
              {!isEmailValid && (
                <p className="text-red-500 text-xs italic">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`bg-[#ff00588a] hover:bg-[#ff0058e3] text-white font-bold mt-8 py-2 px-4 rounded ${
              isFormValid ? '' : 'opacity-50 cursor-not-allowed'
            } ${isEmailValid ? '' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!isFormValid || !isEmailValid}
          >
            Create Order
          </button>
        </form>
      </div>
    </>
  );
}
