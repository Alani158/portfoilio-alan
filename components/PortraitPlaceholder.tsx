"use client";

import { useState } from "react";

export default function PortraitPlaceholder() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#dfe7d4] via-[#a7b6a0] to-[#405f4b] p-3 shadow-[0_25px_60px_-45px_rgba(17,17,17,0.55)]">
      {!imageFailed && (
        <img
          src="/portrait.jpg"
          alt="Alani Mujeeb Babatunde portrait"
          className="h-full w-full rounded-[1.5rem] object-cover object-center"
          onError={() => setImageFailed(true)}
        />
      )}

      {imageFailed && (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-6 h-3/4 w-3/4 text-[#edf1ea]"
            aria-hidden="true"
          >
            <path d="M12 12c2.7 0 4.8-2.2 4.8-4.9S14.7 2.3 12 2.3 7.2 4.4 7.2 7.1 9.3 12 12 12zm0 2.4c-3.6 0-7.2 1.8-7.2 5.4v1.9h14.4v-1.9c0-3.6-3.6-5.4-7.2-5.4z" />
          </svg>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/30 bg-[#2b3f32]/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#edf1ea]">
            Portrait missing
          </span>
        </>
      )}
    </div>
  );
}
