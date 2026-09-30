import { z } from "zod";

export const CookieExample1Schema = z.object({
  cookieName: z.string(),
  cookieValue: z.string(),
  userName: z.string(),
  userEmail: z.string(),
  userAge: z.number(),
  orderId: z.string(),
});
export type CookieExample1T = z.infer<typeof CookieExample1Schema>;
