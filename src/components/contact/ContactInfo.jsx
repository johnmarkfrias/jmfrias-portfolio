// src/components/contact/ContactInfo.jsx

import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import {
  RECIPIENT_EMAIL,
  PHONE_NUMBER,
  PHONE_TEL,
  LOCATION_LABEL,
  MAPS_URL,
} from "../../data/contactData";

const CONTACT_CHANNELS = [
  {
    icon: HiMail,
    label: "Email",
    value: RECIPIENT_EMAIL,
    href: `mailto:${RECIPIENT_EMAIL}`,
    target: "_self",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_TEL}`,
    target: "_self",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: LOCATION_LABEL,
    href: MAPS_URL,
    target: "_blank",
  },
];

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-6">
      {/* Live Availability Status Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-xs font-semibold text-emerald-800 tracking-wide uppercase">
          Available for Projects & Roles
        </span>
      </div>

      {/* Contact Info Micro-Cards */}
      <div className="space-y-3.5">
        {CONTACT_CHANNELS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className="group p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-200 block truncate">
                    {item.value}
                  </span>
                </div>
              </div>
              <HiArrowTopRightOnSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-colors shrink-0 ml-2" />
            </a>
          );
        })}
      </div>
    </div>
  );
}