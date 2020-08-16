import React from "react";
import { Card } from "react-bootstrap";
function MidHook(props) {
  //   const [notobj, setNotobj] = useState([]);
  const handleDel = (id) => {
    const { datacallback } = props;
    datacallback(id);
  };
  const { notestitle, notesdesc, index, notid } = props;
  return (
    <div className="mx-2 my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {index + 1}. {notestitle}
          </Card.Title>
          <Card.Text>{notesdesc}</Card.Text>
          <button className="btn btn-primary" onClick={() => handleDel(notid)}>
            Delete
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MidHook;
