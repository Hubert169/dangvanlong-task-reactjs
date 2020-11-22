import styled from "styled-components";
export const Wrapper = styled.div`
    max-width:567px;
    margin:auto;
    position:relative;
    height: 100vh;
    background: #f8f9fa;
`
export const CorverImage = styled.img`
    height: 100px;
    width: 100%;
`

export const Span = styled.div`
    width:20%;
    position: relative;
    svg{
        color:#ccc;
        font-size:26px;
    }
    &.active {
        svg {
            color:#6be286;
        }
        &::before,&::after {
            content:"";
            position:absolute;
        }
        &::before {
            height: 2px;
            left: 4px;
            right: 4px;
            top: -10px;
            background: #6be286;
        }
        &::after {
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 6px solid #6be286;
            top: -15px;
        }
    }
`

export const BoxInforUser = styled.div`
    position: absolute;
    left: 10px;
    right: 10px;
    background: #fff;
    top: 22px;
    padding-top: 25px;
    border-radius: 4px 4px 0 0;
    text-align:center;
    padding-bottom: 30px;
    &::before {
        content: '';
        left: 0;
        right: 0;
        position: absolute;
        background: #f8f9fa;
        top: 0;
        height: 128px;
    }
    &::after {
    content: '';
    height: 1px;
    left: 0;
    right: 0;
    background: #ccc;
    top: 128px;
    position: absolute;
    }
`
export const TabInforUser = styled.div`
    display:flex;
    width:60%;
    margin:auto;
    margin-top: 25px;
`
export const Strong = styled.strong`
    font-weight: 500;
    font-size: 26px;
    display:block;
`
export const TextDefault = styled.span`
    display: block;
    font-weight: 500;
    color: #ccc;
    margin-top:25px;
`
export const BoxAvatar = styled.div`
    background: white;
    width: 161px;
    height: 161px;
    margin: auto;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    border-radius: 50%;
`
export const AvataBackground = styled.div`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    background-repeat: no-repeat;
    z-index: 1;
    background-size: cover;
    position: relative;
    margin: auto;
    &::before {
        content: "";
        position: absolute;
        left: -5px;
        right: -5px;
        border-radius: 100%;
        border: 1px solid #ccc;
        bottom: -5px;
        top: -5px;
    }
`