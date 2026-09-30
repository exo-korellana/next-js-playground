"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const CookieExample1FormSchema = z.object({
  cookieName: z.string().min(1, "El nombre de la cookie es obligatorio."),
  cookieValue: z.string().min(1, "El valor de la cookie es obligatorio."),
  userName: z.string().min(1, "El nombre del usuario es obligatorio."),
  userEmail: z
    .string()
    .min(1, "El correo electrónico del usuario es obligatorio."),
  userAge: z
    .number({ error: "La edad del usuario es obligatoria." })
    .min(1, "La edad del usuario es obligatoria."),
  orderId: z.string().min(1, "El ID del pedido es obligatorio."),
});
type CookieExample1FormT = z.infer<typeof CookieExample1FormSchema>;

type CookieExample1FormProps = {
  onNext: (data: CookieExample1FormT) => void;
};

export default function CookieExample1Form({
  onNext,
}: CookieExample1FormProps) {
  const form = useForm<CookieExample1FormT>({
    resolver: zodResolver(CookieExample1FormSchema),
    defaultValues: {
      cookieName: "",
      cookieValue: "",
      userName: "",
      userEmail: "",
      userAge: 0,
      orderId: "",
    },
  });

  function onSubmit(data: CookieExample1FormT) {
    onNext(data);
    form.reset();

    toast("Los valores que has introducido y que se guardarán en la cookie:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius) + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Cookie - Ejemplo 1
        </CardTitle>
        <CardDescription>
          Formulario en el que se introducen valores que se pasarán a una cookie
          y en la siguiente página serán mostrados
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-cookie-1" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="flex flex-row justify-between gap-2">
              <Controller
                name="cookieName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-cookie-1-name">
                      Nombre de la cookie
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-cookie-1-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Nombre de la cookie"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="cookieValue"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-cookie-1-value">
                      Valor de la cookie
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-cookie-1-value"
                      aria-invalid={fieldState.invalid}
                      placeholder="Valor de la cookie"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <div className="flex flex-row justify-between gap-2">
              <Controller
                name="userName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-cookie-1-user-name">
                      Nombre del usuario
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-cookie-1-user-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Nombre del usuario"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="userAge"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-cookie-1-user-age">
                      Edad del usuario
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-cookie-1-user-age"
                      aria-invalid={fieldState.invalid}
                      placeholder="Edad del usuario"
                      autoComplete="off"
                      type="number"
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="userEmail"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-cookie-1-user-email">
                    Correo electrónico del usuario
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-cookie-1-user-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Correo electrónico del usuario"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="orderId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-cookie-1-order-id">
                    ID del pedido
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-cookie-1-order-id"
                    aria-invalid={fieldState.invalid}
                    placeholder="ID del pedido"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Limpiar
          </Button>
          <Button type="submit" form="form-cookie-1">
            Guardar en el estado
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
