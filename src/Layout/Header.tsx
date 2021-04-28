import React from "react"


export default function Header() {
  return (
    <nav className="blue darken-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="AboutProject.html">About</a></li>
        </ul>
      </div>
    </nav>
  )
}