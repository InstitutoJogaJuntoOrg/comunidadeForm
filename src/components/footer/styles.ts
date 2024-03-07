import { styled } from "styled-components";


export const Container = styled.footer`
    background-color: #000;
    margin-top: 0.2rem;
    color: white;
    display: flex;
    .footerSub {
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    hr {
        border: 1px solid #3c3c3c;
        width: 100%;
    }
.colaboraai {
    button {
        background-color: #f9d501;
        color: #000;
        border: none;
        border-radius: 16px;
        padding: 1rem 1.2rem;
        font-weight: 600;
        font-size: 1rem;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 1.5rem;
    }
}

    border-top-right-radius: 105px;
    gap: 2rem;
    flex-direction: column;
    .footerFlex {
        display: flex;
        flex-direction: row;
        gap: 20rem;
        @media (max-width: 800px) {
            display: flex;
        flex-direction: column;
        gap: 5rem;
        }
        ul {
            list-style: none;
            h1 {
                font-size: 1rem;
            }
        }
    }
    div {
        display: flex;

        justify-content: space-between;
        padding: 5rem;
        grid-template-columns: no-repeat(1fr, 2);
      
 
        text-align: left;
        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        p {
            font-size: 1rem;
            @media (max-width: 800px) {
                font-size: .7rem;
        }
        }
        img {
            width: 100%;
        }
        a {
            text-decoration: none;
            color: white;
        }
        div {
            display:flex ;
            flex-direction: column;
            margin: 0;
            padding: 0;
            gap: 1rem;
            p {
                max-width: 80%;
                margin: 0;
                padding: 0;
            }
        }
        
    }
    padding: 2rem;

`
