"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

export function CopyButton({ value, label = "Copiar código" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="code-copy"
      aria-label={copied ? "Código copiado" : label}
      title={copied ? "Copiado" : "Copiar"}
    >
      {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      <span>{copied ? "Copiado" : "Copiar"}</span>
    </button>
  );
}
