import request from "../../../request";

const temp = [
  {
    id: 1,
    categoryId: 1,
    subCategoryId: 1,
    childCategoryId: 1,
    name: "name",
    brand: "brand",
    batch: "batch",
    expiry: "expiry",
    qty: "qty",
    status: "status",
    unit: "unit",
    buyerPrice: "buyerPrice",
    price: "price",
    discount: "discount",
    total: "total",
    netPrice: "netPrice",
    photo: "photo",
    sortDesc: "sortDesc",
    description: "description",
    desc: "desc",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
  {
    id: 2,
    categoryId: 2,
    subCategoryId: 2,
    childCategoryId: 2,
    name: "name 2",
    brand: "brand 2",
    batch: "batch 2",
    expiry: "expiry 2",
    qty: "qty 2",
    status: "status 2",
    unit: "unit 2",
    buyerPrice: "buyerPrice 2",
    price: "price 2",
    discount: "discount 2",
    total: "total 2",
    netPrice: "netPrice 2",
    photo: "photo 2",
    sortDesc: "sortDesc 2",
    description: "description 2",
    desc: "desc 2",
    createdAt: "createdAt 2",
    updatedAt: "updatedAt 2",
  },
];
export const getAllTopStample = async () => {
  // const { data } = await request.get("/top-stample");
  // return data;

  return temp;
};
