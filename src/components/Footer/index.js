import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Kaifū</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/adrianandres10/" target="_blank" arial-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/adrianandres/" target="_blank" arial-label="LinkedIn" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
