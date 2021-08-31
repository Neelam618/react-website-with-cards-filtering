import React from 'react'
import '../style.css'

const Navbar = () => {
    const navItems = ['Breakfast', 'Lunch', 'Dinner']
    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        navItems.map((navItem) => {
                            return (
                                <button className="btn-group__item">
                                    {navItem}
                                </button>
                            );
                        })
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
