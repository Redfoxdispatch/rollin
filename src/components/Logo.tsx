import Image from "next/image";
import Link from "next/link";

type Theme = "dark" | "light";

export function Logo({
  theme = "dark",
  variant = "full",
  className = "",
  href = "/",
}: {
  theme?: Theme;
  variant?: "full" | "icon";
  className?: string;
  href?: string;
}) {
  const imgClass = theme === "light" ? "brightness-0 invert" : "";

  if (variant === "icon") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center shrink-0 ${className}`}
        aria-label="Rollin home"
      >
        <Image
          src="/brand/logo-icon.png"
          alt="Rollin"
          width={905}
          height={736}
          priority
          className="h-8 w-auto"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${className}`}
      aria-label="Rollin home"
    >
      <Image
        src="/brand/logo-fullname.png"
        alt="Rollin"
        width={2135}
        height={736}
        priority
        className={`h-8 w-auto sm:h-9 ${imgClass}`}
      />
    </Link>
  );
}
