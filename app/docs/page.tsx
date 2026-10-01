import type { Metadata } from "next";
import { DocPage } from "@/components/doc-page";

export const metadata: Metadata = { title: "Introdução", description: "Introdução à linguagem Sun." };
export default function Page() { return <DocPage slug="" />; }
