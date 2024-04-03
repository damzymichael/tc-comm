export const fakeProducts = Array.from({length: 4}).map((_, i) => ({
  name: 'Bad and bougee Hot Jeans',
  price: 250000,
  id: i + 1
}));

export const excludedLinks = ['/cart', '/delivery', '/checkout'];

type ProductDetail = {
  name: string;
  customer: string;
  purchaseDate: string;
  quantity: number;
};
/**All order details */
export const productDetails: ProductDetail[] = new Array(8).fill({
  name: 'Body con (blue)',
  customer: 'Deji Omo werey',
  purchaseDate: '01/02/24',
  quantity: 40
});

type OrderDetails = {
  name: string;
  quantity: number;
  size: number | string;
  color: string;
};
/**Order details for a particular product */
export const orderDetails: OrderDetails[] = new Array(5).fill({
  name: 'Deji Elepon red',
  quantity: 12,
  size: 8,
  color: 'red'
});

type ProdDetail = {
  name: string;
  size: Array<number | string> | string;
  color: Array<string> | string;
  quantity: number;
};
/**Product details for inventory */
export const prodDetails: ProdDetail[] = new Array(12).fill({
  name: 'Body con blue',
  size: [12, 14, 15],
  color: ['red', 'green', 'blue'],
  quantity: 12
});
