import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.punkapi.com/v2",
});
instance.defaults.withCredentials = true;

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getBeers: (page, value = {}, per_page = 20) => {
    const params = value
      ? {
          page,
          abv_gt: value.min,
          abv_lt: value.max,
          per_page,
        }
      : { page, per_page };

    return instance.get("/beers", {
      params: params,
    });
  },
  setFilter: ({ min, max, page = 1, onPage = 20 }) =>
    instance.get("/beers", {
      params: {
        page,
        per_page: onPage,
        abv_gt: min,
        abv_lt: max,
      },
    }),
  setSearch: (beer_name, page = 1, per_page = 20) => {
    const params = beer_name
      ? { page, per_page, beer_name }
      : { page, per_page };
    return instance.get("/beers", {
      params: params,
    });
  },
};
