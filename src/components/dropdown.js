import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import headerStyles from './header.module.css'

const showdropdown = keyframes`
0% {height: 0px;}
100% {height: 520px;}
`
// Exported to Header component to enable useref function (click outside dropdown)
export const Dropdown = styled.div`
  position: absolute;
  top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 180px;
  height: 520px;
  padding: 0px;
  text-align: left;
  animation: ${showdropdown} 0.5s forwards;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  &:active {
    visibility: visible;
  }
`

const DropdownNavlist = styled.ul`
  position: absolute;
  top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 16px;
`

const showdropdownitem = keyframes`
  0% {height: 0px;}
  100% {height: 27px;}
`

const DropdownNavItem = styled.li`
  color: white;
  font-size: 0.9rem;
  margin-right: 0rem;
  width: 100%;
  height: 27px;
  background: #1f363d;
  cursor: pointer;
  animation: ${showdropdownitem} 0.5s forwards;
  transition: transform 0.3s ease-in-out;
`

const showdropdownitemlarge = keyframes`
  0% {height: 0px;}
  100% {height: 44px;}
`

const DropdownNavItemLarge = styled.li`
  color: white;
  font-size: 0.9rem;
  margin-right: 0rem;
  height: 44px;
  line-height: normal;
  background: #1f363d;
  cursor: pointer;
  animation: ${showdropdownitemlarge} 0.5s forwards;
  transition: transform 0.3s ease-in-out;
`

const DropdownMenu = () => {
  return (

    <DropdownNavlist>
      <DropdownNavItemLarge>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailsgrafiskaprofilprogram">Grafiska profilprogram</Link>
      </DropdownNavItemLarge>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailstradgardsmassan">Trädgårdsmässan</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailsswedbank">Swedbank</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailsgs1">GS1</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailsutbildningsmaterial">Utbildningsmaterial</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailsregionstockholm">Region Stockholm</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailskapi">KAPI</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailsarkitektur">Arkitektur</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailsvardguiden">Vårdguiden 1177</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailshallbarvardag">Film & Rörligt</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailssetterwalls">Setterwalls</Link>
      </DropdownNavItem>
      <DropdownNavItem>
        <Link className={headerStyles.navItemDropdown} activeClassName={headerStyles.activeNavItemDropdown} to="/detailspraktikertjanst">Trädgård & Keramik</Link>
      </DropdownNavItem>
    </DropdownNavlist>

  )
}
export default DropdownMenu