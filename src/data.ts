export const fakeProducts = Array.from({length: 6}).map((_, i) => ({
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

export  const productDetails: ProductDetail[] = new Array(8).fill({
  name: 'Body con (blue)',
  customer: 'Deji Omo werey',
  purchaseDate: '01/02/24',
  quantity: 40
});