import React from 'react'

export default function Input({value, required, type, onChange}) {
  return (
    <input type={type} value={value} onChange={onChange} required={required}
        className="border rounded px-3 py-1 w-80" 
    />
  )
}
