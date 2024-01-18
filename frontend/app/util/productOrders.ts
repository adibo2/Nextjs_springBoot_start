export async function getProductOrders() {
  let path = `/productOrders`;
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
  if (!res.ok) {
    throw new Error(`An error has occured: ${res.status}`);
  }
  const data = await res.json();
  return data._embedded.productOrders;
}

export async function createProductOrder(name: string, email: string) {
  let path = `/productOrdersDrools`;
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });
  if (!res.ok) {
    throw new Error(`An error has occured: ${res.status}`);
  }
  const data = await res.json();
  return data;
}
