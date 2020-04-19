import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Header, Icon, Segment, List } from 'semantic-ui-react';

const Home = ({}) => {
  return (
    <Container>
      <Segment placeholder color='black'>
        <Header icon>
          1226
        </Header>
        <h4 id='subheading'>
          WORLD
        </h4>
      </Segment>
      <Segment placeholder color='black'>
        <List horizontal>
          <List.Item>
            <Link to='/about'>
              About
            </Link>
          </List.Item>
          <List.Item>
            <Link to='/roster'>
              Roster
            </Link>
          </List.Item>
          <List.Item>
            <Link to='/reviews'>
              Reviews
            </Link>
          </List.Item>
          <List.Item>
            <Link to='/contact'>
              Contact
            </Link>
          </List.Item>
        </List>
      </Segment>
    </Container>
  );
}

export default Home;
