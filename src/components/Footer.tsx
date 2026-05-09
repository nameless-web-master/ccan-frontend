import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--color-navy-deep)] pb-6 pt-16 text-white/70"
    >
      <div className="container-page grid gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="text-[16px] text-white font-medium leading-7">
            Secure, verified building access
            <br />
            for the future of deliveries.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-[16px] font-semibold text-white">Company</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a
                href="#about"
                className="text-white transition-colors hover:text-white"
              >
                About CCAN
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="text-white transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="text-white transition-colors hover:text-white"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[16px] font-semibold text-white">
            Resources
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a
                href="#how-it-works"
                className="text-white transition-colors hover:text-white"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#for-buildings"
                className="text-white transition-colors hover:text-white"
              >
                For Buildings
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white transition-colors hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[16px] font-semibold text-white">Contact</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a
                href="mailto:hello@ccanaccess.com"
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-white"
              >
                <Mail size={16} />
                hello@ccanaccess.com
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 text-white">
                <MapPin size={16} />
                Toronto, Ontario, Canada
              </span>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-white"
              >
                <LinkedinIcon size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-10 pt-6 text-center text-[16px] text-white/70">
        © 2024 CCAN Access Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
