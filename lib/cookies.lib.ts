import { parse, stringify } from "superjson";

/**
 * Serializa un objeto JSON en una cadena para almacenarlo como cookie.
 *
 * @template T - Tipo genérico del objeto a serializar.
 * @param  json - Objeto que se desea serializar.
 * @returns Cadena serializada en formato JSON
 */
export const serializeJSONCookie = <T = unknown>(json: T) => {
  const serialized = stringify(json);
  return serialized;
};

/**
 * Parsea una cadena JSON (de una cookie) a su valor original
 * @template T - Tipo esperado del objeto parseado.
 * @param cookie - Cadena JSON proveniente de una cookie.
 * @returns Objeto parseado si existe, o `null` si la entrada es inválida
 */
export const parseJSONCookie = <T = unknown>(
  cookie: string | null | undefined
) => {
  const parsed = cookie ? parse<T>(cookie) : null;
  return parsed;
};

