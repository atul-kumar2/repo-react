import React from 'react'
import * as Styled from './NavbarStyled';
import logo from '../img/logo.jpg';
import sticer from '../img/trusted-seller.svg';
export const Navbar = () => {
  return (
    <>
    <Styled.container> 
            <Styled.logo>
                <Styled.logobox>
                    <img src={logo}/>
                </Styled.logobox>
                <Styled.righttext>
                    <h3>Stick Tapes Pvt Ltd.</h3>
                    <p>Vasai, India gstGST No.27AAZCS7271H1ZI</p>
                </Styled.righttext>
            </Styled.logo> 
            <Styled.right>
                <img src={sticer}/>
                <Styled.call>
                    <div className='call'>call</div>
                    <div className='callnow'>
                        <p>Call us now <br/>08037301552</p>
                    </div>
                </Styled.call>
                <Styled.button>Send Email</Styled.button>
            </Styled.right>
    </Styled.container>
    <Styled.menu>
        <Styled.container>
            <Styled.link>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Home</a></li>
            </Styled.link>
        </Styled.container>
    </Styled.menu>
    </>
  )
}
