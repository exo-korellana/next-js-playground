export default function WhyVitest() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">¿Por qué Vitest y no Jest?</h2>
      <ul className="list-disc pl-6 flex flex-col gap-1">
        <li>
          <strong>Misma configuración que Vite/Next.js:</strong> reutiliza
          alias como <code>@/*</code> sin duplicar configuración.
        </li>
        <li>
          <strong>API compatible con Jest:</strong> <code>describe</code>,{" "}
          <code>it</code>, <code>expect</code> funcionan igual, así que no hay
          curva de aprendizaje si ya conoces Jest.
        </li>
        <li>
          <strong>Más rápido:</strong> usa esbuild/Vite para transformar el
          código en vez de Babel.
        </li>
        <li>
          <strong>Modo watch inteligente:</strong> solo re-ejecuta los tests
          afectados por el archivo que cambiaste.
        </li>
      </ul>
    </section>
  );
}
