import { Link } from 'react-scroll';

const Nav = ({ homeRef }) => {


  return (
    <div className='nav'>
      <ul>
        <li className='active'><Link to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li><Link to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
        <li><Link to='pictures' spy={true} smooth={true} offset={0} duration={500}>Pictures</Link></li>
        <li><Link to='videos' spy={true} smooth={true} offset={0} duration={500}>Videos</Link></li>
        <li><Link to='contact' spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
      </ul>
    </div >
  )
};

export default Nav;