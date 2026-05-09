import logoFull from "../assets/logo-full.png";
import logoOutline from "../assets/logo3.png";

type LogoProps = {
  variant?: "default" | "light";
  /** Controls the rendered logo height in px. Width scales by aspect ratio. */
  height?: number;
};

function Logo({ variant = "default", height = 48 }: LogoProps) {
  if (variant === "light") {
    // Dark backgrounds (footer) — outlined shield + white JSX wordmark
    return (
      <div
        className="inline-flex items-center"
        aria-label="CCAN — Certified Courier Access Network"
      >
        <img
          src={logoOutline}
          alt=""
          width={72}
          height={72}
          className="block shrink-0 object-contain"
          aria-hidden="true"
        />
        <div className="flex flex-col leading-none">
          <span className="text-[22px] font-extrabold -tracking-[0.01em] text-white">
            CCAN
          </span>
          <span className="mt-[8px] text-[8px] font-semibold uppercase tracking-[0.18em] text-white/65">
            Certified Courier Access Network
          </span>
        </div>
      </div>
    );
  }

  // Light backgrounds (header) — single full-color brand asset
  return (
    <img
      src={logoFull}
      alt="CCAN — Certified Courier Access Network"
      className="block w-auto"
      style={{ height }}
    />
  );
}

export default Logo;
