import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import Search from 'components/Search/Search';
import { SearchBarWrapper } from './SerchBar.styled';

const SearchBar = () => {
    const [state, setState] = useState('query');
    const navigate = useNavigate();

    const handleQueryType = type => {
        setState(type);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.target.elements.query.value.trim();
        if (!searchQuery) {
            console.log('Search query should not be empty');
            return;
        }
        navigate({
            search: `?${state}=${searchQuery}`,
        });
    };
    return (
        <SearchBarWrapper>
            <Search buttonStyle="inversion-button" handleSubmit={handleSubmit} />
            <SearchTypeSelector setValue={handleQueryType} />
        </SearchBarWrapper>
    );
};

export default SearchBar;
