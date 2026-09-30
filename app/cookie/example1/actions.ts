"use server";

import { actionCliente } from "@/lib/safe-actions";
import z from "zod";
import { CookieExample1Schema } from "./_core/cookie.example1.defintions";
import { setCookie } from "cookies-next/server";
import { COOKIES } from "@/config/cookies.config";
import { serializeJSONCookie } from "@/lib/cookies.lib";
import { cookies } from "next/headers";
import { ROUTES } from "@/config/routes.config";
import { redirect } from "next/navigation";

export const saveCookieExample1Action = actionCliente
  .inputSchema(
    z.object({
      data: z.array(CookieExample1Schema),
    }),
  )
  .action(async ({ parsedInput }) => {
    const { data } = parsedInput;

    await setCookie(COOKIES.example1.data, serializeJSONCookie(data), { cookies });

    redirect(ROUTES.cookie.example1.solution1.self.path);
  });
