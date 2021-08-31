import React from 'react'
import menuApi from '../components/menuApi'   //imported a function menuApi

const MenuCard = () => {

    return (
        <div>
            <section className="main-card--cointainer">
                {
                    menuApi().map((items) => {       //called a function menuApi which returns an array
                        return (
                            <div className="card-container" key="id">
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{items.id}</span>
                                        <span className="card-author subtle">{items.category}</span>
                                        <h2 className="card-title">{items.name} </h2>
                                        <span className="card-description subtle">
                                            {items.description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={items.image} alt="images" className="card-media" />
                                    <span className="card-tag  subtle">Order Now</span>
                                </div>
                            </div>
                        );
                    })
                }
            </section>

        </div>
    )
}

export default MenuCard
