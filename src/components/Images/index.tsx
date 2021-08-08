import React from 'react';
import { connect } from 'react-redux';
import ImagesContainer from './images-container.component';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CircularProgContainer } from './images.styles';

type ImagesComponentProps = {
  startSearch: any;
}

const ImagesComponent: React.FC<ImagesComponentProps> = ({ startSearch }) => {

  return (
    <>
      {startSearch ? (
        <CircularProgContainer>
          <CircularProgress color='inherit' />
        </CircularProgContainer>
      ) : (
        <ImagesContainer />
      )}
    </>
  );
};

const mapStateToProsp = (state: any) => ({
  startSearch: state.search.startSearch,
});



export default connect(mapStateToProsp)(ImagesComponent);