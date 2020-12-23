import { Link } from 'react-scroll';

const Nav = ({ homeRef }) => {


  return (
    <div className='nav'>
      <ul>
        <li className='active'><Link to='home' spy={true} smooth={true} duration={500}>Home</Link></li>
        <li><Link to='about' spy={true} smooth={true} duration={500}>About</Link></li>
        <li><Link to='projects' spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li><Link to='contact' spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div >
  )
};

export default Nav;