import { headerBarStyles as s } from './header-bar.styles';

function HeaderBar() {
  return (
    <header>
      <div>
        <img src="/logo.svg" className={s.logo} />
      </div>
    </header>
  );
}

export { HeaderBar };
