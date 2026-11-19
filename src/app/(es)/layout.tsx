import type { Metadata } from "next";
import favicon from "../../../public/favicon.ico";
import RootDocument from "../RootDocument";
import { buildMetadata } from "../seo/site";

export const runtime = 'edge';

export const metadata: Metadata = buildMetadata('es', favicon.src);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
