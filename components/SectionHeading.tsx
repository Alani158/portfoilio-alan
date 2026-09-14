import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <p className={`text-sm font-medium ${dark ? "text-neutral-400" : "text-muted"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-4xl font-extrabold tracking-tight md:text-6xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
