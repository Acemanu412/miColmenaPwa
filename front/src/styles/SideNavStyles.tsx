import styled from "styled-components";

export const SideNavMenu = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    left: 0;
    margin-top: 9vh;
    background-color: #111;
    overflow-x: hidden;
    transition: width 0.5s;
    background-color: #FFD24E;
`;

export const SideNavImg = styled.img`
    height: 3vh;
    margin-left: 1.1rem;
    align-self: center;
`;

export const LinkImg = styled.img`
    padding-left: 2.3rem;
    padding-right: 5rem;
    marigin: auto;
    height: 2rem;
`;

export const SideNavCloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 1.5rem;
    font-size: 2.25rem;
    margin-left: 3.125rem;
`;

export const LinkTextSpan = styled.span`
    width: 6.75rem;
    white-space: nowrap;
    justify-content: center;
    marigin: auto;
`;

export const LinkDiv = styled.div`
    height: 3.5rem;
    display: flex;
    width: 100%;
    align-items: center;

    font-size: .8rem;
    font-weight: 700;
    color: #343434;
    transition: 0.3s;
    margin: auto;
    border-bottom-style: solid;
    border-bottom-width: .01rem;
    border-bottom-color: #0056A2;
`;

export const ImgDiv = styled.div`
    width: 6.75rem;
`;
