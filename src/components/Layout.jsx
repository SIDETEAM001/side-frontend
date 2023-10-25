import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Header = styled.header`
  background-color: var(--color-lightPink);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--tpBlack);
  font-family: var(--font-SpoqaHanSansNeo);
`;
const UserSection = styled.section`
  height: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const MenuSection = styled(UserSection)``;
const NavSection = styled.nav``;
const ListWrapper = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;
const ListItem = styled.li`

`;

export default function Layout() {
  return (
    <>
      {/* 헤더 */}
      <Header>
        <MenuSection>
          <div>
            <Link to="/">홈</Link>
          </div>
        </MenuSection>
        <NavSection>
          <ListWrapper>
            <ListItem>
              <Link>자기계발모임</Link>
            </ListItem>
              <ListItem>
                <Link>취미모임</Link>
              </ListItem>
              <ListItem>
                <Link to='/place'>플레이스</Link>
              </ListItem>
              <ListItem>
                <Link>Q&A</Link>
              </ListItem>
          </ListWrapper>
        </NavSection>
        <UserSection>
          <div>
            <Link to="/login">로그인</Link>
          </div>
          <div className="dividingLine">|</div>
          <div>
            <Link to="/signup">회원가입</Link>
          </div>
        </UserSection>
      </Header>

      {/* 내용 보여주기 */}
      <Outlet />
    </>
  );
}
