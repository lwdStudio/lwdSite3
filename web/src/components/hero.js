import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Hero = ({imageData, className, children}) => {
    return (
        <section className={`${className}`} style={{ display: "grid" }}>
            <GatsbyImage 
                className="h-screen w-full"
                style={{
                    gridArea: "1/1",
                  }}
                objectFit="cover"
                image={imageData.localFile.childrenImageSharp[0].gatsbyImageData}
                alt={imageData.alternativeText}
            />
            <div 
                style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: "1/1",
                    position: "relative",
                    // This centers the other elements inside the hero component
                    placeItems: "center",
                    display: "grid",
                  }}
            >
                {children}
            </div>
        </section>
    )
}

export default Hero