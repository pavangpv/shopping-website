import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const NavBar = () => {
  return (
    <div className='navbar'>
    <div className='NavBar'>
      <Link to="/">
      <div className='logo'>
        <img src='https://scontent.fhyd11-3.fna.fbcdn.net/v/t1.6435-9/49601765_1016351605218371_7213053211744141312_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=i2aMjllkHaQAX-tShu3&_nc_ht=scontent.fhyd11-3.fna&oh=00_AT9yF1T7z5gK-A-mj7qpt7GwU7EhcA7nFKaeRdWxQFCCgQ&oe=6321D56A' />
        </div>
        </Link>
        <div className='list'>
          <ul>
            <li className='active category' ><a href='#'>Men</a>
                 <div className='sub-categ'>
                  <ul>
                    <li><Link to="/menall">All</Link></li>
                    <li ><Link to="/menshirt">Shirts</Link>
                    </li>
                    <li><Link to="/mentshirt">T-shirt</Link></li>
                    <li><Link to="/menbottom">Battomwear</Link> </li>
                  </ul>
                 </div>
            </li>
            <li className='category'><a href='#'>Women</a>
            <div className='sub-categ'>
                  <ul>
                    <li ><Link to="/womenwestern">Western</Link>
                   </li>
                  </ul>
              </div>
            </li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default NavBar