import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import headerStyles from './header.module.css'
import Hamburger from 'hamburger-react'
import { HamburgerMenu, HbgNavList } from './hbgmenu'
import { MainNavList } from './mainnavlist'
import { Dropdown } from './dropdown'
import HbgDropDown from './hbgdropdown'
import DropdownMenu from './dropdown'
import chevron_right_solid from '../images/chevron_right_solid.svg'


const Header = ({ siteTitle }) => {
  const [openHamburger, setOpenHamburger] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openHbgDropdown, setOpenHbgDropdown] = useState(false)
  const node = useRef(null)

  useEffect(() => {
    const HandleClickOutside = (e) => {
      if (node.current !== null && !node.current.contains(e.target)) {
        setOpenDropdown(!openDropdown)
      }
    }
    if (openDropdown) {
      window.addEventListener('click', HandleClickOutside)
    }
    return () => {
      window.removeEventListener('click', HandleClickOutside)
    }
  }, [openDropdown])

  return (
    <header id="top">
      <div className={headerStyles.container}>
        <div className={headerStyles.logoBar}>
          <Link to="/" style={{ color: `white`, textDecoration: `none`, }}>
            <h1 style={{ margin: 0, fontSize: `1.8rem`, fontWeight: `300` }}>
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
                <div role="button" className={headerStyles.projectButtonHbg}
                  onClick={() => setOpenHbgDropdown(!openHbgDropdown)}>
                  <li className={headerStyles.navItemHbg}
                    activeClassName={headerStyles.activeNavItem}>
                    Projekt
                  </li>
                  <img className={headerStyles.chevronIconHbg} src={chevron_right_solid} alt="chevron_icon" />
                </div>
                {openHbgDropdown && (
                  <HbgDropDown />)}
                <div style={{ margin: `0` }}>
                  <li>
                    <Link className={headerStyles.navItemHbg} to="/om">Om</Link>
                  </li>
                  <li>
                    <Link className={headerStyles.navItemHbg} to="/kontakt">Kontakt</Link>
                  </li>
                </div>
              </HbgNavList>
            </HamburgerMenu>)}
          <nav>
            <MainNavList>
              <div role="button" className={headerStyles.projectButton}
                onClick={() => setOpenDropdown(true)}>
                <li className={headerStyles.navItemProject}
                  activeClassName={headerStyles.activeNavItemProject}
                  style={{ marginBottom: `0` }}>
                  Projekt
              </li>
                <img className={headerStyles.chevronIconMain} src={chevron_right_solid} alt="chevron_icon" />
              </div>
              {openDropdown && (
                <Dropdown ref={node}>
                  <DropdownMenu />
                </Dropdown>)}
              <li style={{ marginBottom: `0` }}>
                <Link to="/om" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Om</Link>
              </li>
              <li style={{ marginBottom: `0` }}>
                <Link to="/kontakt" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Kontakt</Link>
              </li>
            </MainNavList>
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
