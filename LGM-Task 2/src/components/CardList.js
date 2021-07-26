import React from "react";
import Card from "./Card";
import "./styles.css";

const CardList = ({ person }) => {
  return (
    <div>
      {
        //displays all the card by calling the card component and passing all the values
        person.map((user, i) => {
          return (
            <Card
              key={i}
              id={person[i].id}
              name={person[i].first_name}
              lname={person[i].last_name}
              email={person[i].email}
            />
          );
        })
      }
      <p className="copy">Copyright &copy; Bhushan khot</p>
    </div>
  );
};

export default CardList;
