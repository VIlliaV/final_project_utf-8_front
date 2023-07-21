import { NoResultWrapper, NoResultImg } from './NoResult.styled';

const NoResult = ({ noResultImgText }) => {
  return (
    <NoResultWrapper>
      <NoResultImg />
      <p>{noResultImgText || 'Try looking for something else...'}</p>
    </NoResultWrapper>
  );
};
export default NoResult;
