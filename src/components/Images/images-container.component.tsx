import React from 'react';
import { connect } from 'react-redux';
import { ImagesBox, NoResults } from './images.styles';
import Image from './image.component';


type ImagesComponentProps = {
  photosResp: any;
}

const ImagesContainer: React.FC<ImagesComponentProps> = ({photosResp}) => {

  
  return (
    <ImagesBox>
      {photosResp.length === 0 ? (
        <NoResults>Sorry, no results found.</NoResults>
      ) : (
          photosResp.map((photo: any, idx: number) => (
            <Image key={idx} photo={photo} />
          ))
      )}
    </ImagesBox>
  );
}

const mapStateToProsp = (state: any) => ({
  photosResp: state.search.search
});

export default connect(mapStateToProsp)(ImagesContainer);