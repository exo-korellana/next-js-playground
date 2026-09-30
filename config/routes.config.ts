import {
  IconBox,
  IconCookie,
  IconHome,
  IconSearch,
  IconTestPipe,
  type Icon,
} from "@tabler/icons-react";

export type RouteType =
  | "home"
  | "login"
  | "logout"
  | "auth"
  | "profile"
  | "group" // -> Grupo principal (se muestra como SidebarGroupLabel)
  | "section" // -> Sección dentro de un grupo (se muestra como SidebarMenuItem)
  | "sub-section" // -> Sub-sección colapsable
  | "page";

export type RouteSelfT = {
  path: string;
  name: string;
  fullName?: string;
  icon?: Icon;
  type: RouteType;
};

export type RouteT = {
  self: RouteSelfT;
  [key: string]: RouteSelfT | RouteT;
};

export type RoutesT = Record<string, RouteT>;

/**
 * Función para construir paths completos recursivamente.
 */
const updatePaths = <T extends RoutesT>(
  routes: T,
  parentPath: string = "",
  visited: Set<RoutesT> = new Set(),
): T => {
  if (visited.has(routes)) return routes;
  visited.add(routes);

  const result: RoutesT = {};

  for (const key in routes) {
    const route = routes[key];
    if (route.self) {
      route.self.path = parentPath + route.self.path;
    }
    result[key] = {
      ...route,
      ...updatePaths(
        route as RoutesT,
        route.self ? route.self.path : parentPath,
        visited,
      ),
    };
  }

  return result as T;
};

export const ROUTES = {
  home: {
    self: {
      name: "Home",
      fullName: "Home",
      path: "/",
      type: "home",
      icon: IconHome,
    },
  },
  cookie: {
    self: {
      name: "Cookie",
      fullName: "Cookie",
      path: "/cookie",
      type: "section",
      icon: IconCookie,
    },
    example1: {
      self: {
        name: "Ejemplo 1",
        fullName: "Ejemplo 1 de Cookies",
        path: "/example1",
        type: "page",
        icon: IconCookie,
      },
      solution1: {
        self: {
          name: "Solución 1",
          fullName: "Solución 1 de Ejemplo 1 de Cookies",
          path: "/solution1",
          type: "page",
          icon: IconCookie,
        },
      },
    },
  },
  nuqs: {
    self: {
      name: "Nuqs",
      fullName: "Nuqs",
      path: "/nuqs",
      type: "section",
      icon: IconSearch,
    },
    example1: {
      self: {
        name: "Ejemplo 1",
        fullName: "Ejemplo 1 de Nuqs",
        path: "/1-example",
        type: "page",
        icon: IconSearch,
      },
    },
    example2: {
      self: {
        name: "Ejemplo 2",
        fullName: "Ejemplo 2 de Nuqs",
        path: "/2-example",
        type: "page",
        icon: IconSearch,
      },
    },
    example3: {
      self: {
        name: "Ejemplo 3",
        fullName: "Ejemplo 3 de Nuqs",
        path: "/3-example",
        type: "page",
        icon: IconSearch,
      },
    },
  },
  zustand: {
    self: {
      name: "Zustand",
      fullName: "Zustand",
      path: "/zustand",
      type: "section",
      icon: IconBox,
    },
    example1: {
      self: {
        name: "Ejemplo 1",
        fullName: "Ejemplo 1 de Zustand",
        path: "/1-example",
        type: "page",
        icon: IconBox,
      },
    },
  },
  test: {
    self: {
      name: "Test",
      fullName: "Test",
      path: "/test",
      type: "section",
      icon: IconTestPipe,
    },
  },
} as const satisfies RoutesT;

// Actualiza los paths completos de las rutas recursivamente
updatePaths(ROUTES);
