import React from "react";

const Card = (props) => {

    const { products } = props

    return (

        <div className="container">
            <h1 className="heading">Product Store</h1>

            <div className="grid">
                {products.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} className="card-img" />

                        <div className="card-body">
                            <h2 className="title">{item.title}</h2>
                            <p className="brand">{item.brand}</p>

                            <p className="description">{item.description}</p>

                            <div className="meta">
                                <span>⭐ {item.rating}</span>
                                <span>Stock: {item.stock}</span>
                            </div>

                            <button className="btn">Add to Cart</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;