"use client";

import React from 'react'
import Image from 'next/image'
import { ButtonProps } from '@/types';

const Button = ({ label, type, className, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || 'button'}
      className={`custom-btn ${className}`}
      onClick={() => handleClick}
    >
      <span className={`flex-1`}>
        {label}
      </span> 
    </button>
  )
}

export default Button
