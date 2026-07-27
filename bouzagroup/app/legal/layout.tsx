import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Corporate Hub | Bouza Group",
  description: "Corporate establishment, Imprint, Privacy Policy, Terms & Conditions, and compliance documentation for Bouza Group headquarters in Nairobi, Kenya.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}