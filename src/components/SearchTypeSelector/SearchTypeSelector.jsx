import { useSearchParams } from 'react-router-dom';
import { Form, selectStyles } from './SearchTypeSelector.styled';
import Select, { components } from 'react-select';

import arrow from '../../img/chevron-up.svg';
import { useState } from 'react';

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
  const [searchParams] = useSearchParams();
  const typeQuery = searchParams.get('type');
  const [option] = useState(typeQuery ? selectOptions[1] : selectOptions[0]);

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
        defaultValue={option}
        name="select"
        options={selectOptions}
      />
    </Form>
  );
};
export default SearchTypeSelector;
