import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-transparent">
        <nav className="flex justify-between items-center max-container">
            <a href="/" >
            <img 
              src={headerLogo}
              alt="Logo"
              width={130}
              height={29}
            />
            </a>
            <ul className='flex-1 flex justify-center
            items-center gap-16 max-lg:hidden  bg-transparent'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                href={item.href}
                className="font-monserrat 
                leadin-normal text-lg bg-transparent text-white-400"
                >{item.label}</a>
              </li>
            ))}
            </ul>
            <div className="hidden max-lg:block">
              <img src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              ></img>
            </div>
        </nav>
    </header>
  )
}

export default Nav