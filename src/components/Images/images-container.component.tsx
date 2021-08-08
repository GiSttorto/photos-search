import React from 'react';
import { connect } from 'react-redux';
import { ImagesBox, Image, NoResults } from './images.styles';
import { useHistory } from "react-router-dom";

type ImagesComponentProps = {
  photosResp: any;
}

const ImagesContainer: React.FC<ImagesComponentProps> = ({photosResp}) => {
  const history = useHistory();

  const handleModalOpen = (photo: any) => {
    history.push(`/photo/${photo.id}`)
  }
  
  return (
    <ImagesBox>
      {photosResp.length === 0 ? (
        <NoResults>Sorry, no results found.</NoResults>
      ) : (
          photosResp.map((photo: any, idx: number) => (
            <Image
              onClick={() => handleModalOpen(photo)}
              key={idx}
              src={photo.urls.small}
              alt={photo.alt_description}
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