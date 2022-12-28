import { React } from "react";
import { Button, Card } from "react-bootstrap";

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
      <Button onClick={handleDelete}> Delete Account</Button>
    </>
  );
};
export default UserInfo;

// const handleDelete = (e) => {
//   e.preventDefault();
//   const token = localStorage.getItem('token');
//   if (confirm('Are you sure? This cannot be undone!')) {
//     axios
//       .delete(`https://mats-js-myflixdb.herokuapp.com/users/${user}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         alert(`Your account has been deleted. We're sorry to see you go!`);
//         localStorage.clear();
//         deleteUser({});
//         window.open('/', '_self');
//       })
//       .catch((e) => console.log(e));
//   }
// };
