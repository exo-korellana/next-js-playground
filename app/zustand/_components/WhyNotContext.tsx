import CodeBlock from "@/components/CodeBlock";

export default function WhyNotContext() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">¿Por qué dejamos useContext?</h2>
      <p>
        Antes en nuestros desarrollos usábamos <code>useContext</code>. Ahora
        usamos Zustand por estos motivos:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-1">
        <li>
          <strong>No hay que envolver el layout con el provider.</strong> Con
          context había que añadir un <code>Provider</code> en el layout (o en
          el árbol) para que los componentes accedieran al estado. Con Zustand
          se importa el hook y ya funciona.
        </li>
        <li>
          <strong>Menos código repetitivo:</strong> no hay que crear el
          contexto, el provider ni el hook de consumo por cada estado.
        </li>
        <li>
          <strong>Mejor rendimiento:</strong> con selectores, un componente solo
          se re-renderiza cuando cambia el dato que usa. Con context, todos los
          consumidores se re-renderizan cuando cambia el valor del provider.
        </li>
      </ul>
      <CodeBlock
        code={`// Antes: useContext (había que envolver el layout)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CounterProvider>{children}</CounterProvider>
      </body>
    </html>
  );
}
`}
      />
      <CodeBlock
        code={`// Ahora: Zustand (el layout no cambia, no hay provider)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}`}
      />
    </section>
  );
}
