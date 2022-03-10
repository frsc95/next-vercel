// snippet rafc : autogenera el componente

// import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'


const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


// lo referenciare desde las páginas
export const Navbar = () => {
    return (
        <nav className={ styles['menu-container']}>
            {
                menuItems.map( ({text, href}) => (
                <ActiveLink key={href} text={text} href={href}></ActiveLink> 
                ))
            }

            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}

            {/* Los Link no se pueden estilizar */}
            {/* <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link> */}

            {/* <ActiveLink text="Home" href="/">Hom</ActiveLink>
            <ActiveLink text="About" href="/about">Abou</ActiveLink>
            <ActiveLink text="Contact" href="/contact">Contac</ActiveLink>
            <ActiveLink text="Pricing" href="/pricing"></ActiveLink> */}
        </nav>
    )
}
