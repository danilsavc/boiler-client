import { $host } from "./index";

export const fetchDish = async (id) => {
  const data = await $host.get("/api/dish");
  return data;
};
