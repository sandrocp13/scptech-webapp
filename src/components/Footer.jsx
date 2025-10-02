import styled from 'styled-components';

const FooterBar = styled.footer`
  text-align: center;
  margin: 2rem 0 1rem 0;
  color: #888;
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <FooterBar>
      &copy; {new Date().getFullYear()} SCPTech Net. All rights reserved.
    </FooterBar>
  );
}