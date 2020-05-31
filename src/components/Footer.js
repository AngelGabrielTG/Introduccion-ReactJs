import React from 'react';

const Footer = (props) => {
    return ( 
        <footer>
            <p>Todos los derechos reservados &copy; {props.fecha}</p>
        </footer>
     );
}
 
export default Footer;