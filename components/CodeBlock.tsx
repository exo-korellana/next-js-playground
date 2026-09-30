"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";

type CodeBlockProps = {
  code: string;
  title?: string;
  className?: string;
};

export default function CodeBlock({ code, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    // Vuelve al icono de copiar tras un momento, solo feedback visual
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className={cn(
        "mt-2 w-full overflow-hidden rounded-md border bg-muted/50",
        className,
      )}
    >
      {title && (
        <div className="border-b bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
          {title}
        </div>
      )}
      <div className="relative">
        <Button
          type="button"
          variant="secondary"
          size="icon-sm"
          className="absolute top-2 right-2"
          onClick={handleCopy}
          aria-label="Copiar código"
        >
          {copied ? (
            <IconCheck className="size-4" />
          ) : (
            <IconCopy className="size-4" />
          )}
        </Button>
        <pre className="overflow-x-auto p-4 pr-10 text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
