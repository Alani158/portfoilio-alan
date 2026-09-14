import { profile } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper/80">
      <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-xs font-bold text-paper">
            AM
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{profile.fullName}</p>
            <p className="text-xs text-muted">{profile.role}</p>
          </div>
        </div>
        <SocialLinks />
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Alani Mujeeb. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
