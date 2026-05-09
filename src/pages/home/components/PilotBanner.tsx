import { Building2, ChevronRight } from "lucide-react";

function PilotBanner() {
  return (
    <section
      id="benefits"
      className="relative isolate w-full overflow-hidden py-10 text-white md:py-8"
      style={{
        background: "linear-gradient(135deg, #0c1f4d 0%, #07173b 100%)",
      }}
    >
      <div className="container-page relative z-10">
        <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
          <div
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-[#588dd5] text-white p-5"
          >
            <Building2 size={58} strokeWidth={0.7} />
          </div>
          <div className="min-w-0 w-full">
            <h3 className="text-xl font-bold text-white md:text-[28px]">
              Pilot Deployments in Progress
            </h3>
            <p className="mt-2 max-w-[540px] text-[16px] leading-snug text-white/80 md:mt-1.5">
              CCAN is currently working with select building partners to
              validate secure courier entry workflows.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition-[background,color,transform] duration-200 hover:bg-slate-100 active:translate-y-px max-md:w-full md:justify-center"
          >
            Request Pilot Information
            <ChevronRight
              className="h-[18px] w-[18px] shrink-0 text-[var(--color-primary)]"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PilotBanner;
