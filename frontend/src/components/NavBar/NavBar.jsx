import React, { useContext, useState } from 'react'
import './NavBar.css'
import { FaLinkedin, FaDiscord, FaAt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { AppContext } from '../../AppContext';
import { FaChessKnight } from "react-icons/fa";
const NavBar = () => {
  const { inViewNavBar } = useContext(AppContext)
  const social = [
    FaLinkedin, FaDiscord, FaAt
  ]
  const socialLinks = [
    'https://www.linkedin.com/in/nikolai-kaloyanov-92a35a28a/',
    'https://discord.com/',
    'https://www.google.com/gmail/about/',
  ]
  const links = ['Home', 'About', 'Contact']
  const [openMobileNav, setOpenMobileNav] = useState(false)
  return (
    <div className='NavBar c'>
      <div className={`logo ${!inViewNavBar && 'show'} c`}>
        <div className='part c'>
          <FaChessKnight />
        </div>
        <div className='part c'>
          <FaChessKnight />
        </div>
      </div>
      <ul className={inViewNavBar ? '' : 'view'}>
        {links.map((name, index) => (
          <li key={index}>
            {index === 2 ? (
              <LinkScroll to='Contact' smooth={true} duration={1000}>
                <span style={{color: inViewNavBar ? '#000000' : 'var(--light2)', background: inViewNavBar ? 'var(--light2)' : 'transparent'}}>{name}</span>
                <span style={{background: inViewNavBar ? '#000000' : 'var(--light2)', color: inViewNavBar ? 'var(--light2)' : '#000000'}}>{name}</span>
              </LinkScroll>
            ) : (
              <Link to={
                index === 0 ?
                '' : name
              }>
                <span style={{color: inViewNavBar ? '#000000' : 'var(--light2)', background: inViewNavBar ? 'var(--light2)' : 'transparent'}}>{name}</span>
                <span style={{background: inViewNavBar ? '#000000' : 'var(--light2)', color: inViewNavBar ? 'var(--light2)' : '#000000'}}>{name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className='social c f'>
        {social.map((Icon, index) => (
          <div className='con c f' key={index}>
            <div className='box c'>
              <a href={socialLinks[index]} target='__blank' className='c' style={{background: inViewNavBar ? 'var(--light2)' : '#000000', width: 'unset', padding: 4, borderRadius: '.5rem'}}>
                <Icon className='icon' style={{color: inViewNavBar ? '#000000' : 'var(--light2)'}}/>
              </a>
            </div>
            <div className='box c' style={{background: inViewNavBar ? '#000000' : 'var(--light2)', color: inViewNavBar ? 'var(--light2)' : '#000000'}}>
              <a href={socialLinks[index]} target='__blank' className='c' style={{background: inViewNavBar ? '#000000' : 'var(--light2)', width: 'unset', padding: 4, borderRadius: '.5rem'}}>
                <Icon className='icon' style={{color: inViewNavBar ? 'var(--light2)' : '#000000'}}/>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={`mobile ${inViewNavBar ? '' : 'bg'} c f`}>
        <div className='c' style={{justifyContent: 'space-between', padding: '.5rem'}}>
          <div className='logo-mobile'>
            <div className='icon c' style={{background: inViewNavBar ? '#000000' : 'var(--light2)'}}>
              <FaChessKnight style={{color: inViewNavBar ? 'var(--light2)' : '#000000'}}/>
            </div>
          </div>
          <div className='lines c f' onClick={() => setOpenMobileNav(!openMobileNav)}>
            <span className={`${openMobileNav ? 'rotate' : ''}`} style={{background: inViewNavBar ? '#000000' : 'var(--light2)'}}></span>
            <span className={`${openMobileNav ? 'rotate' : ''}`} style={{background: inViewNavBar ? '#000000' : 'var(--light2)'}}></span>
            <span className={`${openMobileNav ? 'rotate' : ''}`} style={{background: inViewNavBar ? '#000000' : 'var(--light2)'}}></span>
          </div>
        </div>
        <div className='c' style={{height: openMobileNav ? window.innerHeight : '', alignItems: 'flex-start', background: '#000000'}} onClick={() => setOpenMobileNav(!openMobileNav)}>
          <div className={`links ${openMobileNav ? 'show' : ''} c f`}>
            <ol className={inViewNavBar ? '' : 'view'}>
              {links.map((name, index) => (
                <li style={{transitionDelay: openMobileNav ? `.${index * 3}s` : ''}} className={openMobileNav ? 'show' : ''} key={index}>
                  <Link to={name}>
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className='mobile-social c' style={{justifyContent: 'flex-start'}}>
              {social.map((Icon, index) => (
                <a href={socialLinks[index]} target='__blank' className={`${openMobileNav ? 'show' : ''} c`} style={{transitionDelay: openMobileNav ? `.${index * 3}s` : ''}} key={index}>
                  <Icon style={{color: '#000000'}}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
