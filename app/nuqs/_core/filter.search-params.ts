import { createSearchParamsCache, parseAsString } from "nuqs/server";

export const filterSearchParams = {
  query: parseAsString.withDefault(""),
  q: parseAsString.withDefault(""),
  carType: parseAsString.withDefault(""),
};

// Cache para usarlo en Server Components
export const filterSearchParamsCache =
  createSearchParamsCache(filterSearchParams);
