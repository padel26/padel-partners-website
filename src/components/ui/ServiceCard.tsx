"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceCardProps = {
  name: string;
  price: string | null;
  type: "fixed" | "quote";
  stripePriceId?: string;
  details?: {
    description: string;
    bullets: string[];
  };
};

export default function ServiceCard({ name, price, type, stripePriceId, details }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-card flex flex-col overflow-hidden">
      {/* Header — always visible, clickable if there are details */}
      <button
        onClick={() => details && setIsOpen((prev) => !prev)}
        className={`flex items-start justify-between p-5 text-left w-full ${details ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="flex-1 min-w-0 pr-3">
          <h3
            className="font-semibold text-padel-black mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>
          <p className="text-sm text-net-silver">
            {price ?? "Price on request"}
          </p>
        </div>
        {details && (
          <span className="flex items-center gap-1 text-xs font-medium text-court-green flex-shrink-0 mt-1 whitespace-nowrap">
            {isOpen ? "Close ×" : <>Read more <ArrowRight size={13} /></>}
          </span>
        )}
      </button>

      {/* Expanded content */}
      {details && isOpen && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          <p className="text-sm text-padel-black leading-relaxed mb-4">
            {details.description}
          </p>
          <ul className="space-y-2 mb-5">
            {details.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-court-green" />
                <span className="text-padel-black">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <div className={`flex gap-2 flex-wrap px-5 pb-5 ${!details || !isOpen ? "pt-0" : ""} mt-auto`}>
        {type === "fixed" && price ? (
          <form action="/api/checkout-onetime" method="POST" className="flex-1">
            <input type="hidden" name="priceId" value={stripePriceId} />
            <input type="hidden" name="serviceName" value={name} />
            <button
              type="submit"
              className="w-full min-h-[44px] px-3 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
            >
              Buy Now
            </button>
          </form>
        ) : (
          <a
            href={`/contact?type=quote&service=${encodeURIComponent(name)}`}
            className="flex-1 flex items-center justify-center min-h-[44px] px-3 bg-court-green text-white text-sm font-semibold rounded-md hover:bg-court-green-dark transition-colors"
          >
            Get a Quote
          </a>
        )}
        <a
          href="https://calendar.app.google/YGnWn5mJxVCL8Q648"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center min-h-[44px] px-3 border border-gray-200 text-padel-black text-sm font-medium rounded-md hover:bg-baseline-grey transition-colors"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}
