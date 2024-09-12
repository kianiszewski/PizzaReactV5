import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button
import styles from './Profile.module.css'; // Import your custom CSS module

function Profile() {
  return (
    <Card className={styles.profileCard}>
      <Card.Body>
        <Card.Title>Panel de usuario</Card.Title>
        <Card.Text>
        Email: contacto@mammamia.cl
        </Card.Text>
        <Button variant="dark" className={styles.logoutButton}>Logout</Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
