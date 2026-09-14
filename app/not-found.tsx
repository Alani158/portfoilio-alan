import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-medium text-muted">/404</p>
      <h1 className="mt-3 text-6xl font-extrabold tracking-tight md:text-8xl">
        PAGE NOT FOUND
      </h1>
      <p className="mt-4 max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
      >
        <ArrowLeft /> Back Home
      </Link>
    </section>
  );
}
