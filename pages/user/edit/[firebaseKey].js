import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import { viewUserDetails } from '../../../api/userData';

export default function ViewUser() {
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewUserDetails(firebaseKey).then(setUserDetails);
  }, [firebaseKey]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userDetails.img_url} alt={userDetails.full_name} style={{ height: '100px', width: '100px' }} />
      <Link href={`/mockUser/${userDetails.firebaseKey}`} passHref>
        <Card.Header style={{ cursor: 'pointer' }}>{userDetails.full_name}</Card.Header>
      </Link>
      <ListGroup variant="flush" />
    </Card>
  );
}
