import React from 'react'
import './styles/Price.css'

const Price = ({price, discountedPrice = null, variant = 'default'}) => {
    const variantClasses = {
        default: 'text-base',
        small: 'text-sm',
        medium: 'text-md',
        large: 'text-lg',
        xl: 'text-xl',
    }

  return (
    <div className='price-container'>
        <h1 className={`price ${variantClasses[variant]}`}>{`$ ${price}`}</h1>
        {discountedPrice !== null && <h1 className={`discounted-price ${variantClasses[variant]}`}>{`$ ${discountedPrice}`}</h1>}
    </div>
  )
}

export default Price