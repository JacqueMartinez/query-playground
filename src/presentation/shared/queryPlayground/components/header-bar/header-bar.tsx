import { headerBarStyles as styled } from './header-bar.styles';

function HeaderBar() {
  return (
    <header>
      <div>
        <img src="/logo.svg" className={styled.logo} />
      </div>
    </header>
  );
}

export { HeaderBar };
