export interface PartnerLogo {
  name: string;
  /** Either an image URL... */
  src: string;
}

export interface PartnerLogoScrollerProps {
  /** Uppercase label above the strip; omit or pass "" to hide */
  label?: string;
  /** Seconds per full loop */
  duration?: number;
}

export const PartnerLogoScroller = ({
  label = "Trusted by the digital asset ecosystem",
  duration = 15,
}: PartnerLogoScrollerProps) => {
  const logos: PartnerLogo[] = [
    { name: "BitGo", src: "/images/partners/bitgo-logo.svg" },
    { name: "Fireblocks", src: "/images/partners/fireblocks-logo.svg" },
    { name: "Utila", src: "/images/partners/utila-logo.svg" },
    { name: "Fordefi", src: "/images/partners/fordefi-logo.svg" },
    { name: "Copper", src: "/images/partners/copper-logo.svg" },
    { name: "Ledger", src: "/images/partners/ledger-logo.svg" },
    { name: "Cobo", src: "/images/partners/cobo-logo.svg" },
    { name: "Liminal", src: "/images/partners/liminal-logo.svg" },
    { name: "Onramp", src: "/images/partners/onramp-logo.svg" },
  ];
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0" aria-hidden={ariaHidden || undefined}>
      {logos.map((logo) => (
        <div key={logo.name} className="flex h-24 items-center gap-4 px-11">
          <img
            src={logo.src}
            alt={logo.name}
            className="h-24 w-24 rounded-md object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-2">
      {label && (
        <div className="mb-4 text-center text-[11px] font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </div>
      )}
      <div className="relative overflow-hidden">
        <div className="cc-marquee-fade cc-marquee-fade-left" />
        <div className="cc-marquee-fade cc-marquee-fade-right" />
        <div
          className="cc-marquee flex w-max"
          style={{ "--cc-duration": `${duration}s` } as React.CSSProperties}
        >
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
};
