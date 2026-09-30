"use client";

import CookieExample1Form from "@/app/cookie/example1/_components/CookieExample1Form";
import type { CookieExample1T } from "@/app/cookie/example1/_core/cookie.example1.defintions";
import { saveCookieExample1Action } from "@/app/cookie/example1/actions";
import { Button } from "@/components/ui/button";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";

export default function CookieExample1Wrapper() {
  const [data, setData] = useState<CookieExample1T[]>([]);

  const { execute, isExecuting } = useAction(saveCookieExample1Action, {
    onError: ({ error }) => {
      toast.error(error.serverError ?? "No se pudo guardar la cookie.");
    },
  });

  const handleNext = (newData: CookieExample1T) => {
    setData((prevData) => [...prevData, newData]);
  };

  const handleSaveAndContinue = () => {
    execute({ data });
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <CookieExample1Form onNext={handleNext} />
      {data.length > 0 ? (
        <>
          <p className="text-sm text-muted-foreground">
            {data.length} registro(s) guardado(s) en el useState.
          </p>
          {data.map((item, index) => (
            <pre
              key={index}
              className="mt-1 w-full overflow-x-auto rounded-md bg-gray-400/20 p-4 text-code-foreground"
            >
              <code>{JSON.stringify(item, null, 2)}</code>
            </pre>
          ))}
        </>
      ) : (
        <p className="p-6 text-sm bg-[#3c83f6]/50 rounded-md text-noti">
          No hay registros guardados en el useState.
        </p>
      )}
      <Button
        onClick={handleSaveAndContinue}
        disabled={data.length === 0 || isExecuting}
      >
        {isExecuting ? "Guardando..." : "Guardar cookie y continuar"}
      </Button>
    </div>
  );
}
