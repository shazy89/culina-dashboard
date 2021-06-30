import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const UserSalary = ({
  profileInfo: { annualSalary, dailyWage, hourlyWage, monthlyWage, weeklyWage }
}) => {
  return (
    <Card className="user__personal user__shadow u-margin-top-small">
      <Card.Body className="font__size-3 u-center-text">
        <ListGroup variant="flush">
          <Card.Header className="font__size-4">
            Salary to Hourly - Paycheck
          </Card.Header>
          <ListGroup.Item>Annual salary {annualSalary}</ListGroup.Item>
          <ListGroup.Item>Monthly wage {monthlyWage}</ListGroup.Item>
          <ListGroup.Item>Weekly wage {weeklyWage}</ListGroup.Item>
          <ListGroup.Item>Daily Wage {dailyWage}</ListGroup.Item>
          <ListGroup.Item>Hourly wage {hourlyWage}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default UserSalary;
