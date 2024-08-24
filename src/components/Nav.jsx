import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex gap-16 justify-center items-center max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
                    </li>

                ))}
            </ul>
            <div className='lg:hidden'>
                <img src={hamburger} alt="" height={25} width={25} />
            </div>


        </nav>
    </header>
  )
}

export default Nav