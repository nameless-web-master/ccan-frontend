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
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <div className="flex items-start gap-4 md:gap-6">
            <div
              aria-hidden="true"
              className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-[#588dd5] text-white p-3 md:p-5"
            >
              <Building2 className="size-8 md:size-[58px]" strokeWidth={0.7} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white md:text-[28px]">
                Pilot Deployments in Progress
              </h3>
              <p className="mt-1.5 max-w-[540px] text-[15px] leading-snug text-white/80 md:mt-1.5 md:text-[16px]">
                CCAN is currently working with select building partners to
                validate secure courier entry workflows.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-primary shadow-sm transition-[background,color,transform] duration-200 hover:bg-slate-100 active:translate-y-px max-md:w-full md:justify-center"
          >
            Request Pilot Information
            <ChevronRight
              className="h-[18px] w-[18px] shrink-0 text-primary"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PilotBanner;
