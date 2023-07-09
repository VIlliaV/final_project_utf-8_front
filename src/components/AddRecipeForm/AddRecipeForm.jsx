import { useState, useEffect } from 'react';
import { StyledButton, ImageSrc } from './AddRecipeForm.styled';

const FileInput = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (
        <>
            {!selectedImage ? (
                <div>
                    <input
                        accept="image/*"
                        type="file"
                        id="select-image"
                        style={{ display: 'none' }}
                        onChange={e => setSelectedImage(e.target.files[0])}
                    />
                    <label htmlFor="select-image">
                        <StyledButton
                            background={imageUrl}
                            variant="contained"
                            color="primary"
                            component="span"
                        ></StyledButton>
                    </label>
                </div>
            ) : (
                <ImageSrc style={{ backgroundImage: `url(${imageUrl})` }} />
                // <label htmlFor="select-image">
                //     <StyledButton
                //         background = `url(${imageUrl.url})`
                //         color="primary"
                //         component="span"
                //     ></StyledButton>

                /* <Box mt={2} textAlign="center">
                        <img src={imageUrl} alt={selectedImage.name} height="100px" />
                    </Box> */
                // </label>
            )}
        </>
    );
};

export default FileInput;
