import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
`;

export const ToggleViewButton = styled.button`
  padding: 10px;
  margin-bottom: 10px;
`;

export const ListContainer = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const ListItemText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const UserNickname = styled.p`
  font-size: 14px;
  color: #666;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  width: 250px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 15px;
`;
