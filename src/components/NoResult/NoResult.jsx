import { NoResultWrapper, NoResultImg } from './NoResult.styled';

const NoResult = () => {
  return (
    <NoResultWrapper>
      <NoResultImg />
      <p>Try looking for something else...</p>
    </NoResultWrapper>
  );
};
export default NoResult;
