import React from 'react'

export default function Header(props) {
    // console.log(props.name)
  return (
    <div>
         <header>
            <h1>{props.name}</h1>
        </header>

    </div>

  )
}