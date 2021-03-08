import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import headerStyles from './header.module.css'
/* import nina_flower_50x50_2 from '../images/nina_flower_50x50_2.png' */
import Hamburger from 'hamburger-react'
import { HamburgerMenu, HbgNavList } from './hbgmenu'
import { Dropdown, DropdownNavlist } from './dropdown'

const Header = ({ siteTitle }) => {
  const [openHamburger, setOpenHamburger] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
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
          {/*  <img className={headerStyles.logoImg} src={nina_flower_50x50_2} alt="flower_logo" /> */}
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
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
              <div className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                onMouseEnter={() => setOpenDropdown(true)}
              /* onMouseLeave={() => setOpenDropdown(false)} */
              >
                Projekt
              </div>
              {openDropdown && (
                <Dropdown ref={node}>
                  <DropdownNavlist>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} style={{ lineHeight: `normal` }} to="/detailsgrafiskaprofilprogram">Grafiska profilprogram</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailstradgardsmassan">Trädgårdsmässan</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailsswedbank">Swedbank</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailsgs1">GS1</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailsutbildningsmaterial">Utbildningsmaterial</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailsregionstockholm">Region Stockholm</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailskapi">KAPI</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailsarkitektur">Arkitektur</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailsvardguiden">Vårdguiden 1177</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailshallbarvardag">Hållbar vardag</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailssetterwalls">Setterwalls</Link>
                    </li>
                    <li>
                      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailspraktikertjänst">Praktikertjänst</Link>
                    </li>
                  </DropdownNavlist>
                </Dropdown>)}
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
