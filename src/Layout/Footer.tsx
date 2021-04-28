import React from "react"


export default function Footer() {
  return (
    <footer className="teal darken-1 page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright
          <a className="grey-text text-lighten-4 right" href="#!">About</a>
        </div>
      </div>
    </footer>
  )
}