import React from 'react';
import { connect } from 'react-redux';
import { ImagesContainer, Image } from './images.styles';

type ImagesComponentProps = {
  photosResp: any
}

const ImagesComponent: React.FC<ImagesComponentProps> = ({ photosResp }) => (
  photosResp.length === 0 ? (
    <h2>Sorry, no results found.</h2>
  ) : (
    <ImagesContainer>
      {photosResp.map((photos: any, idx: number) => (
        <Image key={idx} src={photos.urls.small} alt={photos.alt_description} />
      ))}
    </ImagesContainer>
  )
)


const mapStateToProsp = (state: any) => ({
  photosResp: state.search.search
})

export default connect(mapStateToProsp)(ImagesComponent);