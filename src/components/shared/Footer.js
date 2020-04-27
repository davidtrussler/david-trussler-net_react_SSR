import React from 'react';
import {Anchor} from './Anchor'; 

let links = [
  {text: 'LinkedIn', url: 'https://www.linkedin.com/in/dtrussler/'}, 
  {text: 'GitHub', url: 'https://github.com/davidtrussler'}
]; 

export function Footer(props) {
  return (
    <footer>
      <div className="constrained">
        <div className="footer__inner">
          <nav>
            <ul className="footer__links">
              {
                links.map((link, i) => 
                  <li className="footer__linkitem" key={"footer__linkitem-" + i}>
                    <Anchor href={link.url} link={link.text} target="_blank"/>
                  </li>
                )
              }
            </ul>
          </nav>

          <p className="footer__credit">&#169; David Trussler 2020</p>
        </div>
      </div>
    </footer>
  )
}
