import { Form, selectStyles } from './SearchTypeSelector.styled';
import Select, { components } from 'react-select';

import arrow from './chevron-up.svg';

const selectOptions = [
    { value: 'query', label: 'Title' },
    { value: 'ingredient', label: 'Ingredients' },
];

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <img src={arrow} alt="dropdown indicator" width="20px" height="20px" />
        </components.DropdownIndicator>
    );
};

const SearchTypeSelector = ({ setValue }) => {
    return (
        <Form>
            <label>Search by:</label>
            <Select
                onChange={choice => {
                    setValue(choice.value);
                }}
                components={{ DropdownIndicator }}
                styles={selectStyles}
                classNamePrefix="select"
                defaultValue={selectOptions[0]}
                name="select"
                options={selectOptions}
            />
        </Form>
    );
};
export default SearchTypeSelector;
