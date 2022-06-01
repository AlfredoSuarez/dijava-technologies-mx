import React from 'react';


function ContactData(){

    
    return(
        <div className= 'contact-data-record'>
            <h2>CONTACTANOS!</h2>
            <ul className= 'contact-data-list'>
                {/*<img src='./img/personal-pic.jpg' alt={'alfred self pic'}/>*/}
                <li>CALLE BOSQUES DE LOMAS VERDES NO.70 FRESNO  FRACCIONAMIENTO LOMAS VERDES 2ª SECCION, CDMX; MEXICO</li>
                <li>e-mail.- ventas@solucionesdijava.com</li>
                <li>Tel:+52 (56) 1995 9109 / +1(361) 738-5285</li>
                <li><a className= 'whatsapp' href='https://wa.link/9ltuga' target='_blank' rel='noreferrer'><img src='https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png' alt='whats app contact'></img></a></li>
                </ul>
        </div>
    )

}

export default ContactData;