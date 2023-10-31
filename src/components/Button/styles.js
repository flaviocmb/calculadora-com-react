/**
 * 
 * https://styled-components.com - design system: reutilizar componentes de design
 * 
 * Ajudou muito a entender sobre o styled Components - https://www.youtube.com/watch?v=Mp1NphMm7YU
 * 
 * 
 * 
 */

import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #C0C0C0;
    // background-color: #ABE0FF;
    background-color: #1D3557;
    // color: #001B2E;
    // color: #976391;
    color: #A8DADC;
    font-size: 24px;
    font-weight: 700;
    flex: ${
        props => (props.isButtonTwoBlocks===true ? "2 44px" : "1")
    };

    &:hover {
        opacity: 0.6;
    }
`