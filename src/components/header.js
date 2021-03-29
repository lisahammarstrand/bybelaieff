import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import headerStyles from './header.module.css'
import Hamburger from 'hamburger-react'
import { HamburgerMenu, HbgNavList, ChevronIcon } from './hbgmenu'
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
    <header >
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
                    <Link className={headerStyles.navItemHbg} to="/about">Om</Link>
                  </li>
                  <li>
                    <Link className={headerStyles.navItemHbg} to="/contact">Kontakt</Link>
                  </li>
                </div>
              </HbgNavList>
            </HamburgerMenu>)}
          <nav>
            <ul className={headerStyles.navList}>
              <div role="button" className={headerStyles.projectButton}
                onClick={() => setOpenDropdown(true)}>
                <li className={headerStyles.navItemProject}
                  activeClassName={headerStyles.activeNavItem}
                  style={{ marginBottom: `0` }}>
                  Projekt
              </li>
                <img className={headerStyles.chevronIconMain} src={chevron_right_solid} alt="chevron_icon" />
              </div>
              {openDropdown && (
                <Dropdown ref={node}>
                  <DropdownMenu />
                </Dropdown>)}
              <Link to="/about">
                <li className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} style={{ marginBottom: `0` }}>Om </li>
              </Link>
              <Link to="/contact">
                <li className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} style={{ marginBottom: `0` }}>Kontakt</li>
              </Link>
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
