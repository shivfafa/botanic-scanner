import React from 'react'
import queryString from "query-string";

export default function Precautions({ location }) {
  const { heading, para } = location.state;

  return (
    <div>
      <p>{heading}</p>
      <p>{para}</p>
    </div>
  )
}

