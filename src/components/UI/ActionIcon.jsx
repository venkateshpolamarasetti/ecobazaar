import React from "react";
import { icons } from "../../assets";
import "./styles/ActionIcon.css";

const ActionIcon = ({ type, variant = "default", action }) => {
  const iconMap = {
    addToCart: {
      default: icons.addToCart,
      active: icons.addToCartActive,

    },
    addToWishlist: {
      default: icons.addToWishlist,
      active: icons.addToWishlistActive,
    },
    bigClose: {
      default: icons.bigClose,
      active: icons.bigClose,
    },
    visibilityIcon: {
      default: icons.visibilityIcon,
      active: icons.visibilityIconActive,
    },
    rightArrow: {
      default: icons.rightArrowDark,
      active: icons.rightArrowDark,
    },
    facebook: {
      default: icons.facebookLight,
      active: icons.facebookDark,
    },
    instagram: {
      default: icons.instagramLight,
      active: icons.instagramDark,
    },
    twitter: {
      default: icons.twitterLight,
      active: icons.twitterDark,
    },
    pinterest: {
      default: icons.pinterestLight,
      active: icons.pinterestDark,
    },
    link: {
      default: icons.linkLight,
      active: icons.linkDark,
    },
  };

  const types = {
    addToCart: 'add-to-cart',
    addToWishlist: 'add-to-wishlist',
    bigClose: 'big-close',
    visibilityIcon: 'visibility-icon',
    facebook: 'facebook',
    instagram: 'instagram',
    twitter: 'twitter',
    pinterest: 'pinterest',
    link: 'link',
    rightArrow: 'right-arrow',
  }

  const variants = {
    default: 'default',
    active: 'active',
  }

  if(type === 'bigClose' || type === 'rightArrow') {
    variant = 'default';
  }

  const icon = iconMap[type]?.[variant];

  if (!icon) {
    console.warn(`⚠ Unknown icon type="${type}" variant="${variant}"`);
  }

  return (
    <div
      className={`${types[type]} ${variants[variant]}`}
      onClick={action}
    >
      <img src={icon} alt={type} />
    </div>
  );
};

export default ActionIcon;
