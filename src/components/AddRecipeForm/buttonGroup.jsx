import * as React from 'react';
import { StyledInputBtn, StyledButtonGroup } from './AddRecipeForm.styled';

export default function BasicButtonGroup() {
    const [counter, setCounter] = React.useState(1);

    const handleIncrement = e => {
        if (counter > 1) {
        }
        setCounter(counter + 1);
    };
    const handleDecrement = e => {
        if (counter === 1) {
            // console.dir(e.currentTarget);
            e.currentTarget.disabled = true;
            return;
        }
        setCounter(counter - 1);
    };

    return (
        <StyledButtonGroup color="secondary" variant="outlined" aria-label="outlined primary button group">
            <StyledInputBtn onClick={handleDecrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M2.50024 8H13.5003"
                        stroke="#333333"
                        strokeOpacity="0.3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </StyledInputBtn>
            <StyledInputBtn>{counter}</StyledInputBtn>
            <StyledInputBtn onClick={handleIncrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M2.50024 8H13.5003"
                        stroke="#8BAA36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.00024 2.5V13.5"
                        stroke="#8BAA36"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </StyledInputBtn>
        </StyledButtonGroup>
    );
}
