import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Header } from 'semantic-ui-react';

const Roster = ({}) => {
  return (
    <Segment inverted large>
      <Header as='h4'>
        <Link to='/about' className='top-bar'>
          About
        </Link>

        <Link to='/roster' className='top-bar' id='highlight'>
          Roster
        </Link>

        <Link to='/' className='top-bar' id='highlight'>
          1226
        </Link>

        <Link to='/reviews' className='top-bar'>
          Reviews
        </Link>

        <Link to='/contact' className='top-bar'>
          Contact
        </Link>
      </Header>

    </Segment>
  );
}

export default Roster;
