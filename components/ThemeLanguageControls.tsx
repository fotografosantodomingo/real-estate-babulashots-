export function ThemeLanguageControls() {
  return (
    <div className="site-controls">
      <div className="control-group" aria-label="Theme options">
        <button className="control-button icon-button" type="button" aria-pressed="false" aria-label="Light mode" title="Light mode" data-theme-choice="light">
          <span aria-hidden="true">L</span>
        </button>
        <button className="control-button icon-button" type="button" aria-pressed="false" aria-label="Dark mode" title="Dark mode" data-theme-choice="dark">
          <span aria-hidden="true">D</span>
        </button>
      </div>
      <div className="control-group" aria-label="Language options">
        <a className="control-button" href="/" hrefLang="es-DO">
          ES
        </a>
        <a className="control-button" href="/en/" hrefLang="en">
          EN
        </a>
      </div>
    </div>
  );
}
