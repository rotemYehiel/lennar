import React, { memo } from "react";
import { useSelector } from "react-redux";
import { usersDisplaySelector } from "../store/selectors/userManagementSelectors";
import { LIST } from "../constants/keys";
import {
  ListContainer,
  ListItem,
  ListItemText,
  UserName,
  UserNickname,
  CardsContainer,
  Card,
  CardImage,
  CardContent,
} from "./Users.style";

const Users = ({ users }) => {
  const usersDisplay = useSelector(usersDisplaySelector);

  if (!users) return null;

  if (usersDisplay === LIST) {
    return (
      <div>
        <ListContainer>
          <ul>
            {users.map((user, index) => (
              <ListItem key={index}>
                <ListItemText>
                  <UserName>{user.userName}</UserName>
                  <UserNickname>{user.userNickname}</UserNickname>
                </ListItemText>
              </ListItem>
            ))}
          </ul>
        </ListContainer>
      </div>
    );
  } else {
    return (
      <div>
        <CardsContainer>
          {users.map((user, index) => (
            <Card key={index}>
              <CardImage src={user.userPhoto} alt={user.userName} />
              <CardContent>
                <UserName>{user.userName}</UserName>
                <UserNickname>{user.userNickname}</UserNickname>
              </CardContent>
            </Card>
          ))}
        </CardsContainer>
      </div>
    );
  }
};

export default memo(Users);
