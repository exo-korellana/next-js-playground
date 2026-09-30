import type { RouteSelfT, RouteT, RoutesT } from "@/config/routes.config";

/**
 * Aplana recursivamente un árbol de rutas devolviendo solo los `self`.
 */
export const flattenRoutes = (routes: RoutesT | RouteT): RouteSelfT[] => {
  const result: RouteSelfT[] = [];

  for (const key in routes) {
    if (key === "self") continue;

    const value = routes[key] as RouteSelfT | RouteT;
    if ("self" in value) {
      result.push(value.self);
      result.push(...flattenRoutes(value));
    }
  }

  return result;
};
