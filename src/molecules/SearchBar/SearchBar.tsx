import Icon from "atoms/Icon";
import Input, { useTextInput } from "atoms/Input";
import styled from "styled-components";
import { small } from "styles/fonts";
import * as mixins from "styles/mixins";

const SearchBar = () => {
  const [search, searchInput] = useTextInput({
    id: "search",
    initValue: "검색어를 입력해주세요",
  });

  return (
    <Wrapper>
      {searchInput}
      <Icon src="/icons/ic-search.svg" />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  ${mixins.flexRow}
  ${small}
  justify-content: space-between;
  align-items: center;
  height: 42px;
  border: 1px solid var(--color-03);
  border-radius: 3px;
  padding-right: 24px;
`;
