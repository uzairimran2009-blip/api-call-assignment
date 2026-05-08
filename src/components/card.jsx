import React from "react";

const Card = (props) => {

    const { products } = props

    // let discountedPrice = (
    //     products.price -
    //     (products.price * products.discountPercentage) / 100
    // ).toFixed(2);

    return (
        //     <div className="card">
        //       <img src={product.thumbnail} alt={product.title} className="card-img" />

        //       <div className="card-body">
        //         <h2 className="title">{product.title}</h2>
        //         <p className="brand">{product.brand}</p>

        //         <p className="description">{product.description}</p>

        //         <div className="price-section">
        //           <span className="price">${discountedPrice}</span>
        //           <span className="old-price">${product.price}</span>
        //           <span className="discount">-{product.discountPercentage}%</span>
        //         </div>

        //         <div className="meta">
        //           <span>⭐ {product.rating}</span>
        //           <span>Stock: {product.stock}</span>
        //         </div>

        //         <button className="btn">Add to Cart</button>

        // <div className="reviews">
        //   <h4>Reviews</h4>
        //   {product.reviews.map((review, index) => (
        //     <div key={index} className="review">
        //       <strong>{review.reviewerName}</strong>
        //       <span> ⭐ {review.rating}</span>
        //       <p>{review.comment}</p>
        //     </div>


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
                            {/* <img
              src={item.thumbnail}
              alt={item.title}
              className="image"
            />

            <div className="card-body">
              <h2 className="title">{item.title}</h2>
              <p className="desc">{item.description}</p>

              <div className="info">
                <span className="price">${item.price}</span>
                <span className="rating">⭐ {item.rating}</span>
              </div>

              <div className="stock">
                {item.stock > 10 ? (
                  <span className="in">In Stock</span>
                ) : (
                  <span className="low">Low Stock</span>
                )}
              </div>

              <button className="btn">Add to Cart</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        //   </div>
    );

};

export default Card;