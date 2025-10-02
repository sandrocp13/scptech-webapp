import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem auto;
  max-width: 900px;
`;

const List = styled.ul`
  list-style: disc inside;
  color: #FF6600;
  font-size: 1.1rem;
`;

export default function Services() {
  return (
    <Section>
      <h2>Our Services</h2>
      <List>
        <li>Microsoft Azure Consulting</li>
        <li>Datacenter Migrations</li>
        <li>Cloud Architecture & Strategy</li>
        <li>IT Modernization</li>
        <li>Enterprise Support & Training</li>
      </List>
    </Section>
  );
}