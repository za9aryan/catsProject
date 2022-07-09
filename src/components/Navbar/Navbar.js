import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNavbarDataEffect, setCurrentCategoryEffect } from '../../redux/effects/effects'
import './navbar.scss'

function Navbar(props) {

    const [selected, setSelected] = useState("")

    const dispatch = useDispatch()
    const { navbar } = useSelector(state => state.reducer)

    useEffect(() => {
        dispatch(getNavbarDataEffect())
    }, [])

    useEffect(() => {
        console.log(navbar);
    }, [navbar])

    useEffect(() => {
        if(!selected) return
        dispatch(setCurrentCategoryEffect(selected))
    }, [selected])

    const renderNavbarLinks = ({ name, id }) => {
        return (
            <div key={id} onClick={() => setSelected(id)} id={`${id}`} className={`navbar_links ${selected === id ? "selected" : ""}`}>
                {name}
            </div>
        )
    }

    return (
        <div className="navbar_wrapper">
            {/* <div className="navbar_links selected">
                boxes
           </div>
            <div className="navbar_links">
                clothes
           </div>
            <div className="navbar_links">
                hats
           </div>
            <div>
                sinks
           </div>
            <div>
                space
           </div>
            <div>
                sunglasses
           </div> */}
            {navbar.length && navbar.map(renderNavbarLinks)}
        </div>
    );
}

export default Navbar;