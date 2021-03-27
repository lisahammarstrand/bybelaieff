import React from 'react'
import headerStyles from './header.module.css'
import { Link } from "gatsby"
import styled from 'styled-components'


const HbgDropdown = styled.div`
  /* position: absolute;
  top: 0px; */
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 200px;
  /* height: 520px; */
  padding: 0px;
  text-align: left;
  animation: showDropdown 1s forwards;
  transition: transform 0.3s ease-in-out;

  @keyframes showDropdown {
    0% {height: 0px;}
    100% {height: 450px;}
  }

  &:active {
    visibility: visible;
}`

const DropdownNavlist = styled.ul`
 /*  position: absolute;
  top: 0; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0px 0px 0px 8px;
`

const HbgDropDown = () => {
  return (
    <HbgDropdown>
      <DropdownNavlist>
        <li style={{ lineHeight: `normal` }}>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailsgrafiskaprofilprogram">Grafiska profilprogram</Link>
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
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailshallbarvardag">Film & Rörligt</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailssetterwalls">Setterwalls</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/detailspraktikertjanst">Trädgård & Keramik</Link>
        </li>
      </DropdownNavlist>
    </HbgDropdown>
  )
}

export default HbgDropDown