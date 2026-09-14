import { profile } from "@/lib/data";
import { ArrowUpRight, GitHubIcon, LinkedInIcon } from "./Icons";

const items = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <Icon className="h-4 w-4" />
          {label}
          <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
        </a>
      ))}
    </div>
  );
}
