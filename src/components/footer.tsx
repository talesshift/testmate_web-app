import React, { FunctionComponent, useState } from "react";
interface social{
    icon:string;
    link:string;
}

interface sub_page{
    name:string;
    link:string;
}

interface footer_top {
    logo:string;
    text:string;
    socials:social[];
}

interface map_page{
    title:string;
    link:string;
    sub_pages:sub_page[];
}

type footerProps ={
    footer_top:footer_top;
    map_pages:map_page[];
}

const Footer: FunctionComponent<footerProps> = ({footer_top,map_pages}) => {

    return(
        <div className="footer_outerContainer">
            <div className="footer_innerContainer">
            <div className="footer_top">
                    <div className="footer_topLogo">
                        <img className="footer_topLogoImg" src={footer_top.logo}/>
                    </div>
                    <div className="footer_topText">{footer_top.text}</div>
                    <div className="footer_topSocials">
                        {footer_top.socials.map(function(social,index) {
                            return(
                                <div className="footer_topSocial">
                                    <img className="footer_topSocialImg" src={social.icon}></img>
                                </div>
                            );
                        })}
                    </div>
            </div>
            <div className="footer_map">
                    <div className="footer_mapPages">
                        {map_pages.map(function(map_page,index) {
                            return(
                                <div className="footer_mapPage">
                                    <button className="footer_mapPageBtn">{map_page.title}</button>
                                    <div className="footer_mapSubPages">
                                        {map_page.sub_pages.map(function(sub_page,index) {
                                            return(
                                                <button className="footer_mapSubPageBtn">{sub_page.name}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                        
                    </div>
            </div>
            </div>
        </div>
    );

}

export default Footer;