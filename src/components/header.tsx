import React, { FunctionComponent, useState, useCallback } from "react";
import {useNavigate, Link} from 'react-router-dom';

interface subPage{
    name:string;
    link:string;
}

interface page{
    title:string;
    link:string;
    sub_pages?:subPage[];
}

type TesteProps = {
    logo: string,
    pages:page[];
}



const Header: FunctionComponent<TesteProps> = ({logo,pages}) => {

    /*    const [style, setStyle] = useState({display: 'none'});
                        <div className='navbar__page' onMouseEnter={e => {setStyle({display: 'flex'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                            <Link className="navbar__link" href="#">platform</Link>
                            <div className='navbar__hidden' style={style}>
                                <Link className="navbar__link-hidden" href="#">pages</Link>
                                <Link className="navbar__link-hidden" href="#">go in here</Link>
                                <Link className="navbar__link-hidden" href="#">thanks</Link>
                            </div>
                        </div>
    */
/*     const navigate = useNavigate();
    const handleOnClick = useCallback((linke:string) => navigate(linke, {replace: true}), [navigate]); */
    return(
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__logo'>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <div className='navbar__pages'>
                    {pages.map(function(page,page_id){
                        console.log("oi"+page.sub_pages);
                        return(
                            <Navitem text={page.title} key={"page_"+page_id} link={page.link} subPages={page.sub_pages}></Navitem>
                        )
                    })}
                </div>
                <div className='navbar__buttons'>
                    <button className='navbar__button navbar__button--login' >Login</button>
                    <button className='navbar__button navbar__button--call' >Book a free call</button>
                </div>
            </div>
        </nav>
    )

};



const Navitem: FunctionComponent<{ text: string, link:string, subPages?:subPage[] }> = ({subPages,text,link}) => {

    const [disp, setDisp] = useState({display: 'none'});
    const [focus, setFocus] = useState({});
/*     const navigate = useNavigate();
    const handleOnClick = useCallback((linke:string) => navigate(linke, {replace: true}), [navigate]); */
    console.log(subPages);
    return(
        <div className='navbar__page' 
            onMouseEnter={e => {
                if(subPages!==undefined){
                    setDisp({display: 'flex'});
                    setFocus({color: '#545454'});
                }
            }} 
            onMouseLeave={e => {
                if(subPages!==undefined){
                    setDisp({display: 'none'});
                    setFocus({});
                }
            }}
        >
            <Link className="navbar__link" style={focus} to={link}>{text}</Link>
            <div className='navbar__hidden' style={disp}>
                <SvgComponent></SvgComponent>
                {subPages?.map(function(subPage,subPage_id){
                    return(
                        <Link className="navbar__link navbar__link-hidden" to={subPage.link}>{subPage.name}</Link>
                    )
                })}
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