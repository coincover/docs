export interface TrustBadgesFooterProps {
  year?: number;
}

export function TrustBadgesFooter({
  year = new Date().getFullYear(),
}: TrustBadgesFooterProps) {
  const BADGES = [
    {
      alt: "A-LIGN SOC 2",
      src: "/images/soc2-badge.webp",
    },
    {
      alt: "Amtivo ISO 27001",
      src: "/images/iso-badge.png",
    },
  ];
  return (
    <div className="w-full border-t border-gray-200 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs text-gray-500">&copy; {year} CoinCover</div>
        <div className="flex items-center gap-4">
          <a
            key={BADGES[0].alt}
            href="https://trust.coincover.com/"
            target="_blank"
            rel="noreferrer"
            title={BADGES[0].alt}
          >
            <img
              src={BADGES[0].src}
              alt={BADGES[0].alt}
              className="h-12 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          </a>
          <a
            key={BADGES[1].alt}
            href="https://trust.coincover.com/"
            target="_blank"
            rel="noreferrer"
            title={BADGES[1].alt}
          >
            <img
              src={BADGES[1].src}
              alt={BADGES[1].alt}
              className="h-20 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrustBadgesFooter;
