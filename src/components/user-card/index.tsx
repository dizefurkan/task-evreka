import React from "react";
import type { User } from "../../pages/user-list/useUserList";

import * as S from "./styles";

type Props = {
  user: User;
  tabIndex?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
};

function UserCard(props: Props) {
  const { user } = props;

  return (
    <S.Card
      tabIndex={props.tabIndex}
      style={props.style}
      onClick={props.onClick}
    >
      <S.CardHeader>
        <S.Avatar>{user.name[0]}</S.Avatar>
        <S.NameEmail>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </S.NameEmail>
      </S.CardHeader>

      <S.InfoGrid>
        <S.InfoItem>
          <label>Role</label>
          <span>{user.role}</span>
        </S.InfoItem>
        <S.InfoItem>
          <label>Created At</label>
          <span>{new Date(user.createdAt).toLocaleDateString()}</span>
        </S.InfoItem>
        <S.InfoItem>
          <label>Latitude</label>
          <span>{user.coordinates.latitude}</span>
        </S.InfoItem>
        <S.InfoItem>
          <label>Longitude</label>
          <span>{user.coordinates.longitude}</span>
        </S.InfoItem>
      </S.InfoGrid>
    </S.Card>
  );
}

export default UserCard;
