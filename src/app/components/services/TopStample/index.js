import request from "../../../request";

export const getAllTopStample = async () => {
  const { data } = await request.get("/product/get-stamples");
  return data?.data ?? [];
};
