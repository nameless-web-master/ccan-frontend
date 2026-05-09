import { CheckCircle2, ChevronRight } from 'lucide-react'
import dashboardMockup from '../../../assets/device.png'

const benefits = [
  'Reduce unauthorized entry and security risks',
  'Improve delivery accountability and transparency',
  'Lower concierge and staff workload',
  'Create auditable logs for every entry',
  'Seamlessly integrates with existing access systems',
]

function BuiltForBuildings() {
  return (
    <section
      id="for-buildings"
      className="bg-[var(--color-bg-tinted)] py-14 max-md:py-8"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <span className="eyebrow">Built for Buildings</span>
          <h2 className="section-title mb-7">
            Better for Residents.
            <br />
            Better for Buildings.
          </h2>

          <ul className="flex flex-col gap-3.5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-base text-slate-600">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                />
                <span className='text-slate-900 font-semibold'>{benefit}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary mt-8 rounded-[10px]">
            For Property Managers
            <ChevronRight className="chev" />
          </a>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-[4%] inset-y-[8%] z-0 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.18),transparent_70%)] blur-2xl"
          />
          <img
            src={dashboardMockup}
            alt="CCAN dashboard showing live access activity and a phone displaying access granted"
            loading="lazy"
            className="relative z-10 block w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default BuiltForBuildings
