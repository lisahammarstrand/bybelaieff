import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import { useState } from 'react'
import headerStyles from './header.module.css'
/* import nina_flower_50x50_2 from '../images/nina_flower_50x50_2.png' */
import Hamburger from 'hamburger-react'
import { HamburgerMenu, HbgNavList } from './hbgmenu'

const Header = ({ siteTitle }) => {
  const [openHamburger, setOpenHamburger] = useState(false)

  return (
    <header >
      <div className={headerStyles.container}>
        <div className={headerStyles.logoBar}>
          {/*  <img className={headerStyles.logoImg} src={nina_flower_50x50_2} alt="flower_logo" /> */}

          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: `1.8rem`, fontWeight: `400` }}>
              {siteTitle}
            </h1>
          </Link>
        </div>
        <nav>
          <div className={headerStyles.hbgIcon} >
            <Hamburger onToggle={() => setOpenHamburger(!openHamburger)} />
          </div>
          {openHamburger && (
            <HamburgerMenu>
              <HbgNavList>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link className={headerStyles.navItemHbg} to="/">Projekt</Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link className={headerStyles.navItemHbg} to="/about">Om</Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link className={headerStyles.navItemHbg} to="/contact">Kontakt</Link>
                </li>
              </HbgNavList>
            </HamburgerMenu>)}

          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Projekt</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">Om</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Kontakt</Link>
              </li>
            </ul>
          </nav >
        </nav>
      </div>
    </header >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
