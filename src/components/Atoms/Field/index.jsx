import React from 'react'

const Field = ({text, children, ...props}) => {
  return (
    <label style={{
      display: "flex",
      gap: '5px',
      flexDirection: "column"
    }} {...props} htmlFor={text}>
      {text || "Enter"} {children}
    </label>
  )
}

export default Field