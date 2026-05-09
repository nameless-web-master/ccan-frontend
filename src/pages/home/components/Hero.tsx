import {
  ChevronRight,
  PlayCircle,
  ShieldCheck,
  Clock,
  FileText,
  Lock,
} from "lucide-react";
import heroCourier from "../../../assets/main.jpeg";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Couriers",
    description: "Only authorized deliveries get building access",
  },
  {
    icon: Clock,
    title: "Real-Time Access",
    description: "Temporary access granted in seconds",
  },
  {
    icon: FileText,
    title: "Complete Visibility",
    description: "All entries are logged and auditable",
  },
  {
    icon: Lock,
    title: "Stronger Security",
    description: "Reduce tailgating and unauthorized entry",
  },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-no-repeat [background-position:center_top] max-md:[background-position:right_top]"
        style={{ backgroundImage: `url(${heroCourier})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10
          bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_38%,rgba(0,0,0,0.32)_65%,rgba(0,0,0,0.12)_100%),linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_65%,rgba(0,0,0,0.82)_100%)]
          max-md:bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_60%,rgba(0,0,0,0.6)_100%)]"
      />

      <div className="container-page relative z-20 grid min-h-[540px] items-center py-20 max-md:min-h-[480px] max-md:py-14">
        <div className="max-w-[560px]">
          <h1 className="text-[clamp(40px,5.6vw,68px)] font-extrabold leading-[1.04] -tracking-[0.025em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
            Secure. Verified.
            <br />
            Controlled.
          </h1>
          <p className="mt-4 max-w-[360px] text-[17px] text-white">
            CCAN enables property managers to securely authorize and monitor
            courier access in real time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a href="#contact" className="btn btn-primary rounded-[10px]">
              Request Pilot Information
              <ChevronRight className="chev" />
            </a>
            <a
              href="#how-it-works"
              className="btn border rounded-[10px] hover:bg-white hover:text-black"
            >
              See How It Works
              <PlayCircle className="chev" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page relative z-20 grid grid-cols-4 gap-6 py-7 pb-14 max-md:grid-cols-2 max-sm:grid-cols-1">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3.5">
            <div className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/50 text-white p-3 mt-[-10px]">
              <Icon size={36} />
            </div>
            <div>
              <h3 className="mb-1 text-[15px] font-bold text-white">{title}</h3>
              <p className="text-[14px] leading-relaxed text-white mt-2">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
