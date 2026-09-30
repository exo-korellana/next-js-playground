export default function BestPractices() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Buenas prácticas</h2>
      <ul className="list-disc pl-6 flex flex-col gap-1">
        <li>
          <strong>Un test, una idea.</strong> El nombre del <code>it</code>{" "}
          debe describir en lenguaje natural qué se espera.
        </li>
        <li>
          <strong>Arrange–Act–Assert:</strong> prepara el estado, ejecuta la
          acción, comprueba el resultado.
        </li>
        <li>
          <strong>Resetea el estado compartido</strong> (stores singleton) en{" "}
          <code>beforeEach</code> para que un test no contamine al siguiente.
        </li>
        <li>
          <strong>Consulta el DOM como un usuario:</strong> usa{" "}
          <code>getByRole</code> / <code>getByText</code> en vez de{" "}
          <code>data-testid</code> siempre que sea posible.
        </li>
        <li>
          <strong>Co-localiza el test</strong> junto al archivo que prueba (
          <code>Componente.tsx</code> + <code>Componente.test.tsx</code>).
        </li>
      </ul>
    </section>
  );
}
