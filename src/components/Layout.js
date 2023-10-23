// 레이아웃 컴포넌트

import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import LogIn from "./Login";



export default function Layout(){

    return(
    <>
        {/* 헤더 */}
        <Header>
            <MenuSection>
                <div>
                    <Link to='/'>홈</Link>
                </div>
            </MenuSection>
            <UserSection>
                <LogIn />
            </UserSection>
        </Header>

        {/* 내용 보여주기 */}
        <Outlet />
    </>
    )
}


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
    .signInButton{
        cursor: pointer;
    }
`;

const MenuSection = styled(UserSection)`

`;