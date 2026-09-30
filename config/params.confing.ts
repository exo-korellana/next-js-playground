import { TransitionStartFunction } from "react";

export type SearchParamsOptionsT = {
  history?: "push" | "replace";
  scroll?: boolean;
  shallow?: boolean;
  throttleMs?: number;
  startTransition?: TransitionStartFunction;
  clearOnDefault?: boolean;
};

export const DEFAULT_SEARCH_PARAMS_OPTIONS = {
  shallow: false,
};

export const PARAMS = {
  filters: {
    queryWithoutDebounce: "query",
    queryWithDebounce: "q",
    carType: "carType",
  },
} as const;

export const LIST_SEPARATOR = ",";
