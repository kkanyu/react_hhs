// Kaylene-Nhu Nguyen @ Mohawk College, 2022
import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <>
    <div className="error">
      <h1>Sorry, that path does not exist!</h1>
      <Link to="/">Go Back Home</Link>
    </div>
    </>
  )
}
