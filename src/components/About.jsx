import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem auto;
  max-width: 900px;
`;

export default function About() {
  return (
    <Section>
      <h2>About Us</h2>
      <p>
        SCPTech Net is a leading IT service provider specializing in Microsoft Azure and Datacenter migrations.
        Founded by professionals with over 30 years of experience at companies like IBM and Microsoft, we deliver
        robust, scalable, and secure solutions for enterprises worldwide.
      </p>
    </Section>
  );
}