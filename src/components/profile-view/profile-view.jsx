import { Link } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import UserInfo from "./user-info";
import favoriteMovies from "./favorite-movies";
import updateUser from "./update-user";

export function ProfileView ({movies, onUpdateUserInfo}) {
    
}

return(
    <Container>
        <Row>
            <Col sx={12} sm={4} >
                <Card>
                    <Card.Body>
                        <UserInfo name={user.Username} 
                        email={user.email} /> 
                    </Card.Body>
                </Card>
            </Col>
                <Col  sx={12} sm={4}>
                    <Card>
                        <Card.Body>
                           <favoriteMovies 
                           favoriteMovieList={favoriteMoviesList} />
                        </Card.Body>
                     </Card> 
                </Col>
            <updateUser handleSubmit={ handleSubmit} 
            handleUpdate={ handleUpdate}/> 
        </Row>
    </Container>
)