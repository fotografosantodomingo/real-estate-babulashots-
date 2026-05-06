import Link from "next/link";

export function ThemeLanguageControls() {
  return (
    <div className="site-controls" aria-label="Language options">
      <Link className="control-button" href="/" hrefLang="es-DO">
        ES
      </Link>
      <Link className="control-button" href="/en/" hrefLang="en">
        EN
      </Link>
    </div>
  );
}
