import React, { FunctionComponent, useState } from "react";

type TesteProps = {
    logo: string,
}

const Header: FunctionComponent<TesteProps> = ({logo}) => {

 /*    const [style, setStyle] = useState({display: 'none'});
                    <div className='navbar__page' onMouseEnter={e => {setStyle({display: 'flex'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                        <a className="navbar__link" href="#">platform</a>
                        <div className='navbar__hidden' style={style}>
                            <a className="navbar__link-hidden" href="#">pages</a>
                            <a className="navbar__link-hidden" href="#">go in here</a>
                            <a className="navbar__link-hidden" href="#">thanks</a>
                        </div>
                    </div>
 */

    return(
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__logo'>
                    <a>
                        <img src={logo} />
                    </a>
                </div>
                <div className='navbar__pages'>
                    <Navitem text="services" link="www.google.com">
                        <a className="navbar__link navbar__link-hidden" href="#">pages</a>
                        <a className="navbar__link navbar__link-hidden" href="#">go in here</a>
                        <a className="navbar__link navbar__link-hidden" href="#">thanks</a>
                    </Navitem>
                    <Navitem text="platform" link="#"></Navitem>
                    
                    <Navitem text="roles" link="www.google.com">
                        <a className="navbar__link navbar__link-hidden" href="#">pages</a>
                        <a className="navbar__link navbar__link-hidden" href="#">go in here</a>
                        <a className="navbar__link navbar__link-hidden" href="#">thanks</a>
                    </Navitem>
                    <Navitem text="resources" link="www.google.com">
                        <a className="navbar__link navbar__link-hidden" href="#">pages</a>
                        <a className="navbar__link navbar__link-hidden" href="#">go in here</a>
                        <a className="navbar__link navbar__link-hidden" href="#">thanks</a>
                    </Navitem>
                    <Navitem text="contact" link="#"></Navitem>
                    <Navitem text="about us" link="#"></Navitem>
                </div>
                <div className='navbar__buttons'>
                    <button className='navbar__button navbar__button--login' >Login</button>
                    <button className='navbar__button navbar__button--call' >Book a free call</button>
                </div>
            </div>
        </nav>
    )

};



const Navitem: FunctionComponent<{ text: string, link:string }> = ({children,text,link}) => {

    const [disp, setDisp] = useState({display: 'none'});
    const [focus, setFocus] = useState({});
    console.log(children);
    return(
        <div className='navbar__page' 
            onMouseEnter={e => {
                if(children!==undefined){
                    setDisp({display: 'flex'});
                    setFocus({color: '#545454'});
                }
            }} 
            onMouseLeave={e => {
                if(children!==undefined){
                    setDisp({display: 'none'});
                    setFocus({});
                }
            }}
        >
            <a className="navbar__link" style={focus} href={link}>{text}</a>
            <div className='navbar__hidden' style={disp}>
                <SvgComponent></SvgComponent>
                {children}
            </div>
        </div>
    )

}


const SvgComponent = (props:any) => {
  
  return(<svg
    width={14}
    height={7}
    fill="none"
    style={{
      position: "absolute",
      top: "-7px",
      left: "10px",
      transition: "transform .5s cubic-bezier(.17,.93,.38,1) 0s",
    }}
    {...props}
  >
    <path
      d="M7 0 0 7h14L7 0Z"
      className="navbar__hiddenSVG--background"
/*       style={{
        fill: "#fff",
      }} */
    />
    <path
      d="M7 1.41 12.59 7H14L7 0 0 7h1.41L7 1.41Z"
      className="navbar__hiddenSVG--border"
/*       style={{
        fill: "rgb(196, 196, 196)",
      }} */
    />
  </svg>)
}

export default Header