import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 20, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return <Base {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1.1S17.9-.3 15 1.6a13.4 13.4 0 0 0-7 0C5.1-.3 3.9.1 3.9.1A5.4 5.4 0 0 0 3.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></Base>;
}
export function SearchIcon(props: IconProps) { return <Base {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></Base>; }
export function MenuIcon(props: IconProps) { return <Base {...props}><path d="M4 7h16M4 12h16M4 17h16"/></Base>; }
export function XIcon(props: IconProps) { return <Base {...props}><path d="m6 6 12 12M18 6 6 18"/></Base>; }
export function CopyIcon(props: IconProps) { return <Base {...props}><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></Base>; }
export function CheckIcon(props: IconProps) { return <Base {...props}><path d="m5 12 4 4L19 6"/></Base>; }
export function ArrowRightIcon(props: IconProps) { return <Base {...props}><path d="M5 12h14M13 6l6 6-6 6"/></Base>; }
export function ChevronRightIcon(props: IconProps) { return <Base {...props}><path d="m9 18 6-6-6-6"/></Base>; }
export function BookIcon(props: IconProps) { return <Base {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"/><path d="M4 6.5v13"/></Base>; }
export function CodeIcon(props: IconProps) { return <Base {...props}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></Base>; }
export function TerminalIcon(props: IconProps) { return <Base {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></Base>; }
export function PlayIcon(props: IconProps) { return <Base {...props}><path d="m8 5 11 7-11 7z"/></Base>; }
export function ExternalIcon(props: IconProps) { return <Base {...props}><path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></Base>; }
export function SparkIcon(props: IconProps) { return <Base {...props}><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4z"/><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z"/></Base>; }
export function LayersIcon(props: IconProps) { return <Base {...props}><path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></Base>; }
export function BracesIcon(props: IconProps) { return <Base {...props}><path d="M8 3H6a2 2 0 0 0-2 2v4a3 3 0 0 1-2 3 3 3 0 0 1 2 3v4a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v4a3 3 0 0 0 2 3 3 3 0 0 0-2 3v4a2 2 0 0 1-2 2h-2"/></Base>; }
export function AlertIcon(props: IconProps) { return <Base {...props}><path d="M12 3 2.5 20h19z"/><path d="M12 9v4M12 17h.01"/></Base>; }
export function InfoIcon(props: IconProps) { return <Base {...props}><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></Base>; }
export function ArrowLeftIcon(props: IconProps) { return <Base {...props}><path d="M19 12H5M11 18l-6-6 6-6"/></Base>; }
