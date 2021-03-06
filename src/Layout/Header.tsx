import React from "react"


export default function Header() {
  return (
    <nav className="teal darken-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Movie Search</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/DenisLoza">About author</a></li>
        </ul>
      </div>
    </nav>
  )
}