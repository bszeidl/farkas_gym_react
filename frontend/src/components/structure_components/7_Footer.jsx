import {React, useState} from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSpring, animated, easings } from "react-spring";
import GDPR from './11_GDPR';
import Cookies from './10_Cookies';

const Footer = () => {

  //GDPR opener/closer 
  const [gdpropen, setGdprOpener] = useState(false);

  const gdprOpener = (e) => {        
    setGdprOpener(!gdpropen);               
  }

  //Cookie rules opener/closer

  const [cookieopen, setCookieOpener] = useState(false);

  const cookieOpener = (e) => {
    setCookieOpener(!cookieopen);
  }


  //rotate animation
    const iconAnimation1 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#00ffff"        
      },
      to: {
       transform: gdpropen ? "rotate(0deg)" : "rotate(180deg)",
       color: gdpropen ? "rgba(230, 240, 100, 1)" : "#00ffff"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    const iconAnimation2 = useSpring({
      from: {
        transform: "rotate(180deg)",
        color: "#00ffff"        
      },
      to: {
       transform: gdpropen ? "rotate(0deg)" : "rotate(180deg)",
       color: gdpropen ? "rgba(230, 240, 100, 1)" : "#00ffff"        
      },
      config: { 
        duration: "500", 
        easing: easings.easeIn
      }
    });

    return (

        <div>

            {
                gdpropen === true
                ?
                <div className="legal-wrap">
                  <button className="gdpr button-wo-design closingIcon" onClick={gdprOpener}><animated.div style={iconAnimation1} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                  <GDPR />
                </div>
                :
                null
            }

            {
              cookieopen === true
              ?
              <div className="legal-wrap">
                <button className="gdpr button-wo-design closingIcon" onClick={cookieOpener}><animated.div style={iconAnimation2} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <Cookies />
              </div>
              :
              null
            }

            <div id="contact-id" className="footer">            
                <div className="contact">Kapcsolat:
                    <div>                
                        <a href="mailto: fjuszas@gmail.com">✉ Email üzenet</a>
                        <a href="🖀 +36 30 936 1899">🖀 +36 30 936 1899</a>
                    </div>
                </div>
                <div className="copyright">Copyright © 2021. Farkas János ev. minden jog fenntartva!</div>
                <button className="gdpr button-wo-design" onClick={gdprOpener}>Adatvédelem <animated.div style={iconAnimation1} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <button className="gdpr button-wo-design" onClick={cookieOpener}>Süti (cookie) szabályzat <animated.div style={iconAnimation2} ><ExpandMoreIcon className="more-less-sign"/></animated.div></button>
                <div className="terms-and-conditions"><a href="7_5_terms_and_conditions.html" target="_blank">Felhasználási feltételek</a></div>            
            </div>

        </div>


    );
}

export default Footer;