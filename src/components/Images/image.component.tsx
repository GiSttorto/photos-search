import React from 'react';
import { ImageTag, ImageContainer, AuthorDetails } from './images.styles';

type ImagesComponentProps = {
  photo: any;
}

const Image: React.FC<ImagesComponentProps> = ({photo}) => {
  
  return (
    <ImageContainer>
      <ImageTag
        src={photo.urls.small}
        alt={photo.alt_description}
        style={{ width: '100%'}}
      />
      <AuthorDetails>Photo by: 
        <a href={`https://unsplash.com/${photo.user.username}`} target="_blank" style={{ cursor: 'pointer'}} rel="noreferrer">{photo.user.name}</a>
      </AuthorDetails>
    </ImageContainer>
  );
}

export default Image;