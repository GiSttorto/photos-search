import React from 'react';
import { connect } from 'react-redux';

type ImagesComponentProps = {
  photosResp: any
}

const ImagesComponent: React.FC<ImagesComponentProps> = ({ photosResp }) => {

  return (
    <div style={{ margin: "20px", display: 'flex', flexWrap: 'wrap'}}>
      {photosResp.map((photos: any, idx: number) => (
        <img key={idx} src={photos.urls.small} alt={photos.alt_description} />
      ))}
    </div>
  )
};

const mapStateToProsp = (state: any) => ({
  photosResp: state.search.search
})

export default connect(mapStateToProsp)(ImagesComponent);