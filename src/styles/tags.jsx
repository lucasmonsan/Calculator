import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 920px) {
    flex-direction: column;
    justify-content: space-between;
    height: 92vh;
  }
`
export const Div = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  max-width: 540px;
  max-height: 480px;
  padding: 0.5em;

  display: ${props => props.display || "grid"};
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: ${props => props.gap || "0.5em"};
  flex-direction: column;

  @media (max-width: 920px) {
    max-width: 100%
  }
`
export const ButtonNumber = styled.button`
  cursor: pointer;
  overflow: hidden;

  color: #DFDEDE;
  background-color: ${props => props.bgcolor || "#5D5F63"};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5em;
  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.1s;

  -moz-user-select:none; /* firefox */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE*/
   user-select: none; /* Standard syntax */

  :active{
    transform: scale(0.95)
  }
`
export const ButtonOperation = styled.button`
  cursor: pointer;
  overflow: hidden;

  color: #DFDEDE;
  background-color: #E76F51;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5em;
  font-size: 1.25rem;
  font-weight: bold;
  transition: all 0.1s;

  -moz-user-select:none; /* firefox */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE*/
   user-select: none; /* Standard syntax */

  :active{
    transform: scale(0.95)
  }
`
export const Span = styled.span`
  cursor: pointer;

  color: ${props => props.color};
  background-color: #060709;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: ${props => props.minH};
  padding: 0.4em;

  text-align: center;
  font-size: min(${props => props.textLimit}, ${props => props.textSize});
  border: none;
  border-radius: ${props => props.radius || 0};
`
export const Input = styled.strong`
  cursor: pointer;
  outline: none;
  overflow-x: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;  

  color: #DFDEDE;
  background-color: #060709;

  padding: 0.1em;

  text-align: center;
  font-size: min(15vw, 2.5rem);
  border: none;
  border-radius: 0 0 0.5em 0.5em;

  -moz-user-select:none; /* firefox */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE*/
   user-select: none; /* Standard syntax */
`