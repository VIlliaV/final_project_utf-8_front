import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaginationWrapper } from './Paginator.styled';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBF3D4',
      contrastText: '#22252A',
    },
    text: {
      primary: 'var(--text_third)',
    },
  },
});

const Paginator = ({ totalPage, page, setCurrentPage }) => {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    totalPage > 1 && (
      <PaginationWrapper>
        <ThemeProvider theme={theme}>
          <Pagination
            count={totalPage}
            page={page}
            style={{ flexWrap: 'nowrap' }}
            color="primary"
            onChange={handleChange}
          />
        </ThemeProvider>
      </PaginationWrapper>
    )
  );
};

export default Paginator;
