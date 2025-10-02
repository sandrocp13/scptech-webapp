import styled from 'styled-components';
import Logo from '../assets/logo.svg';

const Frame = styled.div`
  background: #fff;
  border: 4px solid #FF6600;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 2rem;
  margin: 2rem auto 1rem auto;
  max-width: 900px;
  text-align: center;
  border-radius: 16px;
`;

const LogoImg = styled.img`
  width: 180px;
  margin-bottom: 1rem;
`;

const LogoTitle = styled.h1`
  color: #FF6600;
  text-shadow: 2px 2px 4px #000;
  background: #fff;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  margin: 0;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  color: #222;
  margin-top: 0.5rem;
`;

export default function Header() {
  return (
    <Frame>
      <LogoImg src={Logo} alt="SCPTech Net Logo" />
      <LogoTitle>SCPTech Net</LogoTitle>
      <Tagline>
        IT Service Provider | Azure Experts | Datacenter Migrations
      </Tagline>
    </Frame>
  );
}