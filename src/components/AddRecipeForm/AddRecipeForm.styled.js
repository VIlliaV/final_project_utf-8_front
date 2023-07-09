import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import backgroundUploadImg from '../../img/image.jpg';

export const StyledButton = styled(Button)({
    cursor: 'pointer',
    width: '360px',
    height: '345px',
    background: `url(${backgroundUploadImg}) no-repeat center left`,

    marginRight: '50px',
});

export const ImageSrc = styled('span')({
    display: 'flex',
    width: '360px',
    height: '345px',
    marginRight: '50px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(224, 224, 224,1)',
});
