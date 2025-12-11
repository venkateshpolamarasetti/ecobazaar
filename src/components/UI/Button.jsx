import React from 'react'
import './styles/Button.css'

const Button = ({ label, variant, size }) => {
    const variants = {
        primary: 'btn-primary',
        outline: 'btn-outline',
        disabled: 'btn-disabled',
    }
    const sizes = {
        small: 'btn-small',
        medium: 'btn-medium',
        large: 'btn-large',
    }
    const variantClass = variants[variant] || variants.primary;
    const sizeClass = sizes[size] || sizes.medium;
    return (
        <button className={`btn ${variantClass} ${sizeClass}`}>
            {label}
        </button>

    )
}

export default Button