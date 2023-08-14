import React from 'react'
import clsx from 'clsx'

const Button = ({children, className, style, ...props}) => {
  return (
    <button {...props} style={style} className={`btn btn-${clsx(className)}`}>
        {children}
    </button>
  )
}

export default Button