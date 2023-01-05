import { React } from "react";
import { Button, Card, Row, CardGroup, Container } from "react-bootstrap";
import "./user-info.scss";

export const UserInfo = ({ email, username, birthday }) => {
  const token = localStorage.getItem("token");

  const handleDelete = (e) => {
    if (username && token) {
      let confirmDelete = confirm(
        "Are you sure you want to delete your account permanently?"
      );
      if (!confirmDelete) return;
      fetch(`https://smclub.herokuapp.com/users/${username}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })
        // .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            alert("Your account was permanently deleted.");
            localStorage.clear();
            window.open("/", "_self");
          } else {
            alert(response.statusText);
          }
        })
        .catch((e) => {
          alert("Something is ERRADO!");
        });
    }
  };

  return (
    <>
      <h4> Your Info</h4>
      <p>Name: {username}</p>
      <p>Email: {email}</p>
      <Button variant="outline-danger" onClick={handleDelete}>
        Delete Account
      </Button>
    </>
  );
};

//   return (
//     <>
//       <Container>
//         <Row>
//           <CardGroup>
//             <Card bg="dark" text="light">
//               <Card.Body>
//                 <Card.Title className="info-title">Your Info</Card.Title>
//                 <span>
//                   <p> Name:</p>
//                 </span>
//                 <span>
//                   <p>{username}</p>
//                 </span>
//                 <p>Email: {email}</p>
//                 <Card.Footer className="btn-delete">
//                   <Button variant="outline-danger" onClick={handleDelete}>
//                     Delete Account
//                   </Button>
//                 </Card.Footer>
//               </Card.Body>
//             </Card>
//           </CardGroup>
//         </Row>
//       </Container>
//     </>
//   );
// };

export default UserInfo;
