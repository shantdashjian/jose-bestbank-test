import React from 'react'
import HeaderContainer from './HeaderContainer'
import HeaderIcon from './HeaderIcon'
import HeaderOption from './HeaderOption'
import HamburgerIcon from './HamburgerIcon'
import useToggle from '../../hooks/useToggle'
import { AppContext } from '../../App'

const HeaderContext = React.createContext()
export {HeaderContext}

export default function Header(){

    const {selection, setSelection} = React.useContext(AppContext)
    const [open, toggleOpen] = useToggle({
        initialValue: false,
    })

    const headerArray = ["Home","Payments","Savings","Financing","Stocks"]

    const isNotSmallDevice = window.innerWidth > 768


    function mountComponent(){
        const componentArr= headerArray.map(option => (
        <HeaderOption key={option} className={selection === option && "selected"}>
            {option}
        </HeaderOption>))

        return componentArr
    } 

    function handleClick(element){
       setSelection(element.children)
       !isNotSmallDevice && toggleOpen()
      }


    return (
        <HeaderContext.Provider value={{handleClick, open, toggleOpen}}>
            <header className="hero">
                <HeaderIcon>../../assets/bestbank_logo.png</HeaderIcon>
                <HamburgerIcon />
                {(open || isNotSmallDevice) && (<HeaderContainer>{mountComponent()}</HeaderContainer>)}    
            </header>
        </HeaderContext.Provider>
        
    )
}