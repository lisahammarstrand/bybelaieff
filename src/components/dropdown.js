import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import headerStyles from './header.module.css'

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
  animation: showDropdown 1s forwards;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @keyframes showDropdown {
    0% {height: 0px;}
    100% {height: 520px;}
  }

  &:active {
    visibility: visible;
  }
`
export const DropdownNavlist = styled.ul`
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

export const DropdownNavItem = styled.li`
  color: white;
  font-size: 0.9rem;
  margin-right: 0rem;
  width: 100%;
  height: 27px;
  background: #1f363d;
  cursor: pointer;
  animation: ${showdropdownitem} 1s forwards;
  transition: transform 0.3s ease-in-out;
`

const showdropdownitemlarge = keyframes`
  0% {height: 0px;}
  100% {height: 44px;}
`

export const DropdownNavItemLarge = styled.li`
  color: white;
  font-size: 0.9rem;
  margin-right: 0rem;
  height: 44px;
  line-height: normal;
  background: #1f363d;
  cursor: pointer;
  animation: ${showdropdownitemlarge} 1s forwards;
  transition: transform 0.3s ease-in-out;
`

const DropdownMenu = () => {
  return (

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

  )
}
export default DropdownMenu