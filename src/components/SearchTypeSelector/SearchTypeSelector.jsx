import { Form, selectStyles } from './SearchTypeSelector.styled';
import Select, { components } from 'react-select';
import { useState } from 'react';

import arrow from './chevron-up.svg';

const selectOptions = [
  { value: 'title', label: 'Title' },
  { value: 'ingredients', label: 'Ingredients' },
];

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={arrow} alt="dropdown indicator" width="20px" height="20px" />
    </components.DropdownIndicator>
  );
};

const SearchTypeSelector = () => {
  const [value, setValue] = useState(selectOptions[0].value);
  return (
    <Form>
      <label>Search by:</label>
      <Select
        onChange={choice => {
          setValue(choice.value);
          console.log(choice.value);
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
