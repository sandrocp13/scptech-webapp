import styled from 'styled-components';

const Section = styled.section`
  margin: 2rem auto;
  max-width: 900px;
`;

const List = styled.ul`
  list-style: square inside;
  color: #222;
`;

export default function Projects() {
  return (
    <Section>
      <h2>Project References & Success Stories</h2>
      <List>
        <li>
          <strong>Contoso Ltd:</strong> Migrated 500+ servers to Azure with zero downtime.
        </li>
        <li>
          <strong>Fabrikam Inc:</strong> Designed a hybrid cloud solution for global operations.
        </li>
        <li>
          <strong>Northwind Traders:</strong> Enabled secure remote work for 2,000+ employees.
        </li>
      </List>
    </Section>
  );
}