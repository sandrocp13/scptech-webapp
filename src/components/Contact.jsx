import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem auto;
  max-width: 900px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: center;
`;

const IconLink = styled.a`
  color: #FF6600;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #000;
  }
`;

export default function Contact() {
  return (
    <Section>
      <h2>Contact & Social Media</h2>
      <p>
        Reach out to us for consultations, partnerships, or support!
      </p>
      <SocialLinks>
        <IconLink href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </IconLink>
        <IconLink href="https://x.com/your-handle" target="_blank" rel="noopener noreferrer">
          X (Twitter)
        </IconLink>
        <IconLink href="https://linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </IconLink>
      </SocialLinks>
    </Section>
  );
}