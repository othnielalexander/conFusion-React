import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments == null) {
    return <div></div>;
  }

  const cmnts = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });

  return (
    <div>
      <div className="header">
        <h4> Comments </h4>
      </div>
      <ul className="list-unstyled" width="100%">
        {cmnts}
      </ul>
    </div>
  );
}

const DishDetail = (props) => {
  const dish = props.dish;
  if (dish == null) {
    return <div></div>;
  }
  const dishItem = <RenderDish dish={props.dish} />;
  const comments = <RenderComments comments={props.dish.comments} />;
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{dishItem}</div>
      <div className="col-12 col-md-5 m-1">{comments}</div>
    </div>
  );
};

export default DishDetail;
