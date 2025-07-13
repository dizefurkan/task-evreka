import { useContext } from "react";

import { UserListContext } from "../context";

import FaTableCells from "../../../assets/icons/FaTableCells";
import FaRegAddressCard from "../../../assets/icons/FaRegAddressCard";

import * as S from "./styles";

const ViewOptions = () => {
  const { view, setView } = useContext(UserListContext);

  return (
    <S.ViewOptionsContainer>
      <S.ViewOptionText>View</S.ViewOptionText>
      <S.ViewOptionsIcon
        $active={view === "table"}
        onClick={() => setView("table")}
      >
        <FaTableCells />
      </S.ViewOptionsIcon>
      <S.ViewOptionsIcon
        $active={view === "card"}
        onClick={() => setView("card")}
      >
        <FaRegAddressCard />
      </S.ViewOptionsIcon>
    </S.ViewOptionsContainer>
  );
};

export default ViewOptions;
