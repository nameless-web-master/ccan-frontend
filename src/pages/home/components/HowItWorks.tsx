import scanIcon from '../../../assets/scan.png'
import verifyIcon from '../../../assets/verify.png'
import authorizeIcon from '../../../assets/authorize.png'
import enterIcon from '../../../assets/enter.png'
import loggedIcon from '../../../assets/logged.png'

const steps = [
  {
    number: '1',
    title: 'Scan',
    description: 'Courier scans the QR code at the building entry point.',
    icon: scanIcon,
  },
  {
    number: '2',
    title: 'Verify',
    description: 'System verifies the delivery session and courier identity.',
    icon: verifyIcon,
  },
  {
    number: '3',
    title: 'Authorize',
    description: 'Temporary access is issued for the specific delivery.',
    icon: authorizeIcon,
  },
  {
    number: '4',
    title: 'Enter',
    description: 'Courier gains access and completes the delivery.',
    icon: enterIcon,
  },
  {
    number: '5',
    title: 'Logged',
    description: 'Entry is automatically logged and access expires.',
    icon: loggedIcon,
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-14 max-md:py-8">
      <div className="container-page">
        <div className="mb-14 text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">Simple. Secure. Seamless.</h2>
        </div>

        <ol className="relative grid grid-cols-5 gap-4 max-lg:grid-cols-2 max-lg:gap-x-4 max-lg:gap-y-9 max-sm:grid-cols-1">
          {steps.map(({ number, title, description, icon }, index) => (
            <li key={number} className="relative px-2 text-center">
              <div className="relative z-10 mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full border-[2px] border-[var(--color-primary)] bg-white p-[22px] shadow-[0_6px_16px_rgba(37,99,235,0.06)]">
                <img
                  src={icon}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-12 left-[calc(50%+56px)] right-[calc(-50%+56px)] z-0 border-t-[1.5px] border-dashed border-slate-300 max-lg:hidden"
                />
              )}
              <div className="mt-5">
                <h3 className="mb-2 text-[20px] font-bold text-slate-900">
                  {number}. {title}
                </h3>
                <p className="mx-auto max-w-[190px] text-[16px] leading-[1.4] text-slate-900 font-semibold">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
