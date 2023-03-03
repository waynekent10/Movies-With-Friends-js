import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleUser } from '../api/userData';

function UserCard({ userObj, onUpdate }) {
  const deleteThisUser = () => {
    if (window.confirm('Delete this user?')) {
      deleteSingleUser(userObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userObj.image} alt={userObj.full_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{userObj.full_name}</Card.Title>
        <Link href={`/users/${userObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`users/edit/${userObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisUser} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    image: PropTypes.string,
    full_name: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;
