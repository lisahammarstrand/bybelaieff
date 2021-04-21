import React from 'react'
import headerStyles from './header.module.css'
import { Link } from "gatsby"
import styled, { keyframes } from 'styled-components'

const showhbgdropdown = keyframes`
  0% {height: 0px;}
  100% {height: 450px;}
`

const HbgDropdown = styled.div`
  position: relative;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1f363d;
  color: white;
  width: 200px;
  padding: 0px;
  text-align: left;
  animation: ${showhbgdropdown} 0.5s forwards;
  transition: transform 0.3s ease-in-out;

  &:active {
    visibility: visible;
}
`

const DropdownNavlist = styled.ul`
  position: absolute;
  top: 0px
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0px 0px 0px 8px;
`

const showhbgdropdownitem = keyframes`
  0% {height: 0px;}
  100% {height: 24px;}
`

export const HbgDropdownNavItem = styled.li`
  color: white;
  font-size: 0.9rem;
  margin-right: 0rem;
  width: 100%;
  height: 24px;
  background: #1f363d;
  cursor: pointer;
  animation: ${showhbgdropdownitem} 0.5s forwards;
  transition: transform 0.3s ease-in-out;
`

const HbgDropDown = () => {
  return (
    <HbgDropdown>
      <DropdownNavlist>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/grafiskaprofilprogram">Grafiska profilprogram</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/tradgardsmassan">Trädgårdsmässan</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/swedbank">Swedbank</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/gs1">GS1</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/utbildningsmaterial">Utbildningsmaterial</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/regionstockholm">Region Stockholm</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/kapi">KAPI</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/arkitektur">Arkitektur</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/vardguiden1177">Vårdguiden 1177</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/rorligt">Rörligt</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/setterwalls">Setterwalls</Link>
        </HbgDropdownNavItem>
        <HbgDropdownNavItem>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/ovrigt">Övrigt</Link>
        </HbgDropdownNavItem>
      </DropdownNavlist>
    </HbgDropdown>
  )
}

export default HbgDropDown