"use client";

import Image from "next/image";
import Link from "next/link";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
      style={{
        background: "rgba(10, 8, 6, 0.97)",
        borderTop: "1px solid rgba(216,189,125,0.2)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Thin gold shimmer line at very top */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(216,189,125,0.5) 50%, transparent)" }} />

      <div className="flex items-center justify-between px-4" style={{ height: "58px" }}>
        <Link href="/" aria-label="JK Interiors home" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="JK Interiors"
            width={28}
            height={28}
            className="object-contain"
            style={{ maxHeight: "28px", width: "auto" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-label)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              JK Interiors
            </span>
            <span
              style={{
                color: "rgba(216,189,125,0.7)",
                fontFamily: "var(--font-label)",
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Design & Build Studio
            </span>
          </div>
        </Link>

        <Link
          href="/contact"
          className="flex-shrink-0"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "38px",
            padding: "0 22px",
            background: "var(--gold-soft)",
            color: "#080808",
            fontFamily: "var(--font-label)",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            borderRadius: "2px",
            whiteSpace: "nowrap",
          }}
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
