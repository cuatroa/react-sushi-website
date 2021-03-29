import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Sushi of the Day</h1>
            <p>Offer valid during lunchtime from Monday to Friday, except holidays.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
