import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import { useState } from 'react'
import headerStyles from './header.module.css'
import nina_flower_50x50_2 from '../images/nina_flower_50x50_2.png'
import Hamburger from 'hamburger-react'
import { HamburgerMenu, HbgNavList } from './hbgmenu'

const Header = ({ siteTitle }) => {
  const [openHamburger, setOpenHamburger] = useState(false)

  return (
    <header >
      <div className={headerStyles.container}>
        <div className={headerStyles.logoBar}>
          <img className={headerStyles.logoImg} src={nina_flower_50x50_2} alt="flower_logo" />
          <h1 style={{ margin: 0, fontSize: `2.0 rem`, }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <nav>
          <div className={headerStyles.hbgIcon} >
            <Hamburger onToggle={() => setOpenHamburger(!openHamburger)} />
          </div>
          {openHamburger && (
            <HamburgerMenu>
              <HbgNavList>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link className={headerStyles.navItemHbg} to="/">Home</Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link className={headerStyles.navItemHbg} to="/about">About</Link>
                </li>
                <li onClick={() => setOpenHamburger(false)}>
                  <Link className={headerStyles.navItemHbg} to="/contact">Contact</Link>
                </li>
              </HbgNavList>
            </HamburgerMenu>)}

          <nav>
            <ul className={headerStyles.navList}>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
              </li>
              <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
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
