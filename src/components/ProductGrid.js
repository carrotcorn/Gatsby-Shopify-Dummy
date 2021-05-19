import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

import StoreContext from '../context/StoreContext'

import './ProductGrid.css'

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`query allProductsQuery {
  allShopifyProduct(sort: {fields: [createdAt], order: DESC}) {
    edges {
      node {
        id
        title
        handle
        createdAt
        description
        images {
          id
          originalSrc
          localFile {
            childImageSharp {
              gatsbyImageData(width: 910, placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
          }
        }
        variants {
          price
        }
      }
    }
  }
}
`
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <div className="Grid">
      {allShopifyProduct.edges ? (
        allShopifyProduct.edges.map(
          ({
            node: {
              id,
              handle,
              title,
              description,
              images: [firstImage],
              variants: [firstVariant],
            },
          }) => (
            <div className="PostCard Product" key={id}>
              <Link to={`/product/${handle}/`}>
                {firstImage && firstImage.localFile && (
                  <GatsbyImage
                    image={firstImage.localFile.childImageSharp.gatsbyImageData}
                    alt={handle}
                    className="PostCard--Image" />
                )}
              </Link>
              <div className="PostCard--Content">
                <div className="Title">{title}</div>
                <div className="PriceTag">
                  Starting at {getPrice(firstVariant.price)}
                </div>
                <div style={{ paddingTop: '20px' }}>
                  <Link
                    to={`/product/${handle}/`}
                    style={{ width: '%' }}
                    className="Nav--CTA"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <p>No Products found!</p>
      )}
    </div>
  );
}

export default ProductGrid
