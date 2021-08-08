import React from 'react';
import { connect } from 'react-redux';
import { ImagesBox, Image, NoResults } from './images.styles';

type ImagesComponentProps = {
  photosResp: any;
}

const ImagesContainer: React.FC<ImagesComponentProps> = ({photosResp}) => {
  
  return (
    <ImagesBox>
      {photosResp.length === 0 ? (
        <NoResults>Sorry, no results found.</NoResults>
      ) : (
          photosResp.map((photos: any, idx: number) => (
            <Image
              key={idx}
              src={photos.urls.small}
              alt={photos.alt_description}
              style={{ width: '100%'}}
            />
          ))
      )}
    </ImagesBox>
  );
}

const mapStateToProsp = (state: any) => ({
  photosResp: state.search.search
});

export default connect(mapStateToProsp)(ImagesContainer);