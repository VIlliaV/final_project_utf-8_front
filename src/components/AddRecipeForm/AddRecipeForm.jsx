import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import backgroundUploadImg from '../../img/image.jpg';
import { ImageSrc, StyledInpytImg } from './AddRecipeForm.styled';
import { addRecipePhoto } from 'components/AddRecipeForm/redux/addRecipeSlice';

export const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      dispatch(addRecipePhoto(selectedImage));
    } else setImageUrl(backgroundUploadImg);
  }, [dispatch, selectedImage]);

  return (
    <StyledInpytImg>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        background={imageUrl}
        style={{ display: 'none' }}
        onChange={e => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        <ImageSrc style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain' }} />
      </label>
    </StyledInpytImg>
  );
};

export default FileInput;
