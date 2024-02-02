import React from 'react';
import './styles/footer.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='mainFooterContainer'>
        <span className='footerMainLabel'>StudyBuddy.</span>
        <div className='separatorFooter'></div>
        <div className='aboutContainer'>
            <span className='aboutLabels'>StuddyBuddy is a hobby project to learn more about full-stack development.</span><br></br>
            <span className='aboutLabels'>If you like it, please drop a like on my 
            <a href='https://github.com/debacodes10/Virtual-Study-Room' target='_blank'><u> GitHub repository</u></a>!</span>
        </div>
        <div className='separatorFooter'></div>
        <div className='profileFooter'>
            <span className='profileLabel'>You can also follow me on my socials to see to more stuff like this:</span>
            <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around"}}>
                <a href="https://github.com/debacodes10" target='_blank'>
                    <Image src={("/icons8-github.svg")} height={48} width={48} alt='' />
                </a>
                <a href="https://www.linkedin.com/in/debadyuti-mukherjee-08077b20a/" target='_blank'>
                    <Image src={("/icons8-linkedin.svg")} height={48} width={48} alt='' />
                </a>
                <a href="https://www.instagram.com/debadyuti_mukherjee/" target='_blank'>
                    <Image src={("/icons8-instagram.svg")} height={48} width={48} alt='' />
                </a>
                <a href="https://www.facebook.com/debadyuti.mukherjee.357/" target='_blank'>
                    <Image src={("/icons8-facebook.svg")} height={48} width={48} alt='' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;
