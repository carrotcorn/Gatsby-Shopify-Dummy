import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import './ProductGalleryThumbnails.css'

const ProductGalleryThumbnails = ({ productimages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <>
      <div className="imgContainer">
        {productimages && productimages[currentImageIndex] && (
          <GatsbyImage
            image={
              productimages[currentImageIndex].localFile.childImageSharp
                .gatsbyImageData
            }
            key={productimages[currentImageIndex].id}
            className="Gallery--FeaturedImage"
          />
        )}
      </div>

      <div className="table">
        <div className="row">
          {productimages &&
            productimages.length > 1 &&
            productimages.map((image, index) => (
              <span
                className="Thumbnail"
                onClick={() => setCurrentImageIndex(index)}
                onKeyDown={() => setCurrentImageIndex(index)}
                role="menuitem"
                tabIndex={0}
              >
                <GatsbyImage
                  image={image.localFile.childImageSharp.gatsbyImageData}
                  key={image.id}
                  className="cell"
                  imgStyle={{
                    objectFit: 'contain'
                  }}
                />
              </span>
            ))}
        </div>
      </div>
    </>
  )
}

export default ProductGalleryThumbnails
