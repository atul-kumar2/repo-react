import styled from "styled-components";

export const container = styled.div`
    max-width: 1232px;
    margin: 0 auto; 
    display: flex;
    padding: 10px 10px;
    
    @media only screen and (max-width: 680px){
        width: 100%;
    }
`;

export const logo = styled.div`
    width: 50%;
    display: flex;
    text-align: left;
    align-items: center;
    @media only screen and (max-width: 680px){
        width: 100%;
        display: block;
    }
`;
export const right = styled.div`
    display: flex;
    text-align: left;
    align-items: center; 
    width: 50%;
    justify-content: end;
    @media only screen and (max-width: 680px){
        width: 100%;
        display: block;
    }
`;
export const logobox = styled.div`
    padding-right: 10px;
`;
export const righttext = styled.div`
    & h3{
        margin: 0;
    }
    & p{
        margin: 0;
    }
`;
export const call = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    @media only screen and (max-width: 680px){
        width: 100%;
        display: block;
    }

    & .call{
        border-right: 1px dotted #ccc;
        padding-right: 5px;
        
    }
    & .callnow{
        padding-left: 10px;
    }
`;
export const button = styled.button`
    background: #016dee;
    color: #fff;
    padding: 15px 32px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
`;
export const menu = styled.div`
    background: #016dee;
    height: 70px;
`;
export const link = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    @media only screen and (max-width: 680px){
        width: 100%;
        display: block;
    }
    & li{
        list-style: none;
        padding: 15px 10px;
    }
    & a{
        text-decoration: none;
        color: #fff;
    }
`;
