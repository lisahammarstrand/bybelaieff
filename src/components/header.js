import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import headerStyles from './header.module.css'
import Hamburger from 'hamburger-react'
import { HamburgerMenu, HbgNavList, ChevronIcon } from './hbgmenu'
import { Dropdown, DropdownNavlist, DropdownNavItem, DropdownNavItemLarge } from './dropdown'
import HbgDropDown from './hbgdropdown'
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
                <div role="button" className={headerStyles.projectButtonHbg}
                  onClick={() => setOpenHbgDropdown(!openHbgDropdown)}>
                  <li className={headerStyles.navItemHbg}
                    activeClassName={headerStyles.activeNavItem}>
                    Projekt</li>
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
                onMouseEnter={() => setOpenDropdown(true)}
              /* onMouseLeave={() => setOpenDropdown(false)} */
              >
                <li className={headerStyles.navItemProject}
                  activeClassName={headerStyles.activeNavItem}
                  style={{ marginBottom: `0` }}
                >
                  Projekt
              </li>
                <img className={headerStyles.chevronIconMain} src={chevron_right_solid} alt="chevron_icon" />
              </div>
              {openDropdown && (
                <Dropdown ref={node}>
                  <DropdownNavlist>
                    <DropdownNavItemLarge>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailsgrafiskaprofilprogram">Grafiska profilprogram</Link>
                    </DropdownNavItemLarge>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailstradgardsmassan">Trädgårdsmässan</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailsswedbank">Swedbank</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailsgs1">GS1</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailsutbildningsmaterial">Utbildningsmaterial</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailsregionstockholm">Region Stockholm</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailskapi">KAPI</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailsarkitektur">Arkitektur</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailsvardguiden">Vårdguiden 1177</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailshallbarvardag">Film & Rörligt</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailssetterwalls">Setterwalls</Link>
                    </DropdownNavItem>
                    <DropdownNavItem>
                      <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItem} to="/detailspraktikertjanst">Trädgård & Keramik</Link>
                    </DropdownNavItem>
                  </DropdownNavlist>
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
