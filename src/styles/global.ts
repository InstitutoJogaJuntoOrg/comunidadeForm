import { createGlobalStyle } from "styled-components";
import "primereact/resources/primereact.min.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "react-toastify/dist/ReactToastify.css";
export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
}
.responsiveProva {
  label {
    @media only screen and (max-width : 600px) {
      padding: 3rem 0.9rem!important
  }
  }
}
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Inter', sans-serif;
  }
  .p-dialog .p-dialog-header {
    padding: 0rem;
  }
  .p-dialog .p-dialog-content {
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .p-dropdown {
    width: 100%;
  }
  .p-inputtext {
    color: white;
  }
  .hLabel {
    height: 2rem;
    max-width: 600px;
  }
  .p-dialog-title {
    color: black;
  }
  .p-dialog .p-dialog-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p-dialog-header-close-icon {
    color: black;
    fill: black;
  }
  .heigh {
    height: 80vh;
  }
  .adopt-c-dDnXt {
    color: rgb(255, 255, 255) !important;
    border: 1px solid rgb(255, 255, 255) !important;
    background-color: rgb(114, 182, 90) !important;
  }
  .boxSh {
    box-shadow: none!important;
    @media only screen and (max-width : 800px) {
      max-width: min-content;
      max-width: 15rem!important;
  }

  }
  .icon {
    fill: white;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute;
      right: 20px;
      top: 13px;
 
    }
  .margintop {
    margin-top: 5rem;
  }
  .accontDelete {
    #pr_id_4_header {
      padding: 1rem;
    }
    #pr_id_2_header {
      padding: 1rem;
    }
  }
  #adopt-accept-all-button {
    background-color: rgb(114, 182, 90)!important;
  }
  .containerAll2 {
position: relative;

  }
  .containerAll {
    height: calc(100vh - 93px);
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    }
    .vector {
    position: absolute;
    bottom: -1%;
    left: 0;

}
.vector2 {
  position: absolute;
  top: 0;
    right: 0;
}
  label {
    display: flex;
    align-items: flex-end;
    font-weight: 400;
    color: white;

    padding: 1rem 0rem;
    justify-content: center;
    align-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;

    @media only screen and (max-width : 800px) {
      padding: 3rem 0rem;
  }
  @media only screen and (max-width : 600px) {
      padding: 1rem 0rem;
  }
  
  }
  .p-dialog .p-dialog-content {
    display: block;
  }
  .textFieldInput {
    background: #c1c1c1;
    color: black;
  }
  .p-inputtext:enabled:focus {
    box-shadow: none;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: black;
  }
  .titleForm {
    margin-top: 4rem;
    font-size: 4rem;
    font-weight: 900;
    color: black;
  }
  .p-tabview .p-tabview-panels {
    background: transparent;
  }
  .p-tabview .p-tabview-nav {
    background-color: transparent;
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background-color: #191919!important;
    color: #FCD700;
  }
  .buttonYellow {
    background-color: #FCD700;
  }
  #pr_id_1_header_0:hover {
    color: white;
  }
  .p-tabview-nav-link {
    background: transparent!important;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    color: #fff8;
  }
  #pr_id_1_header_1:hover {
  
    color: white;
  }
  #pr_id_1_header_2:hover {

    color: white;
  }
  .p-tabview .p-tabview-nav .p-tabview-ink-bar {
    background-color: #FCD700!important;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    padding: 1rem 3rem;
    background-color: transparent;
    @media only screen and (max-width : 800px) {
      padding: 1rem 1.2rem;
  }

  @media only screen and (max-width : 600px) {
    padding: 1rem 0.3rem;
  }
  }
  .p-steps-item{
    @media only screen and (max-width : 600px) {
   width: 100px;
  }
  }
  .p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
  }
  .inputWidth{
    width: 10%!important;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number{
    color: black;
  }
  .inputPasswordDeleteAccount {
 
  color: black!important;
  border-radius: 8px;
  padding: .7rem;
  border: 1px solid black;
}
  .p-steps .p-steps-item.p-highlight .p-steps-title {
    color: white;
  }
  .p-tabview-nav {
    display: flex;
    justify-content: center;
  }
  .p-tabview-title {
    width: 100%;
    font-size: 1.1rem;
    @media only screen and (max-width : 600px) {
    font-size: 13px;
  }
  }
  
`;
