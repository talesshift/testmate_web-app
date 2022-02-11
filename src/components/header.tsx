import React from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export class Header extends React.Component<{logo: string}, {}>{
    
    render() {
        return(
            <nav className='navbar'>
                <div className='navbar__container'>
                    <div className='navbar__logo'>
                        <img src={this.props.logo} />
                    </div>
                    <div className='navbar__pages'>
                        <div className='navbar__page'><a href="#">platform</a></div>
                        <div className='navbar__page'>
                            <a href="#">services</a>
                        </div>
                        <div className='navbar__page'><a href="#">roles</a></div>
                        <div className='navbar__page'><a href="#">resources</a></div>
                        <div className='navbar__page'><a href="#">contact</a></div>
                        <div className='navbar__page'><a href="#">abou us</a></div>
                    </div>
                    <div className='navbar__buttons'>
                        <button className='navbar__button--login' >Login</button>
                        <button className='navbar__button--call' >Book a free call</button>
                    </div>
                </div>
            </nav>
        )
    }
}