import './Header.css'

function Header() {
  return (
    <header>
      <button className="menu-btn">
        <img src="/assets/icons/menu-hamburguer.svg" alt="Open Menu" />
      </button>

      <h1 className="logo">Suporte de Domingo</h1>

      <div className="socials">
        <a href="#" className="icon-link discord">
          <img src="/assets/icons/discord-icon.svg" alt="Discord" />
        </a>
        <a href="#" className="icon-link instagram">
          <img src="/assets/icons/instagram-icon.svg" alt="Instagram" />
        </a>
      </div>
    </header>
  )
}

export default Header
