// import React from 'react'
// en react17 no hace falta importación
// rafc + tab

import { CSSProperties, FC } from "react";
import { useRouter } from "next/router"
import Link from "next/link"



const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

// esto es de typescript
interface Props {
    text: string;
    href: string;
}

// el FC implementa esas Props
// parametro {aa, bb} : desestructurar objeto
// así me obliga a definier los 2 parametros
export const ActiveLink: FC<Props> = ({ text, href }) => {

    // const router = useRouter();
    // console.log(router);
    const { asPath } = useRouter();

    return (
        <Link href={href} >
            {/* replace es un atributo del Link (no poder volver a la anterior) */}
            {/* null o undefined */}
            <a style={ asPath === href ? style : undefined }>{text}</a>
            {/* <a style={ style }>{text}</a> */}
        </Link>

        // <a href={ href }>{ text }</a>

    )
}
// <ActiveLink text="Home" href="/">Hom</ActiveLink>
// <a>Custom Active Link</a>
// <div>ActiveLink</div>
