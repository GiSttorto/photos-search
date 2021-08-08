import React from 'react';
import { connect } from 'react-redux';
import { ImagesBox, NoResults } from './images.styles';
import Image from './image.component';
import InfiniteScroll from "react-infinite-scroll-component";
import { handleSearch, setCurrentPage } from '../../redux/search/search.actions';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { startCurrentSearch, fetchCurrentSearch, setErrorSearch, serverApi } from '../../redux/search/search.actions';



type ImagesComponentProps = {
  photosResp: any;
  searchValue: string;
  handleSearch: any;
  currentPage: number;
  totalPages: number;
}

const ImagesContainer: React.FC<ImagesComponentProps> = ({photosResp, searchValue, handleSearch, currentPage, totalPages}) => {
  const dispatch = useDispatch();

  const fetchMoreData = async () => {
    await dispatch(setCurrentPage())
    if (searchValue === '') {
      dispatch(startCurrentSearch())

      try {
        serverApi.photos.getRandom({
          count: 30
        }).then((results: any) => {
          const { response } = results;
          dispatch(fetchCurrentSearch(response, 500));
        });
      } catch (error) {
        dispatch(setErrorSearch(error))
      }
    }

    await handleSearch(searchValue, currentPage)
  }

  const hasMore = () => {
    if (currentPage >= totalPages) {
      return false;
    }
    return true
  }

  return (
    <ImagesBox>
      {photosResp.length === 0 ? (
        <NoResults>Sorry, no results found.</NoResults>
        ) : (
        <InfiniteScroll
          dataLength={photosResp.length}
          next={fetchMoreData}
          hasMore={hasMore()}
          loader={<CircularProgress color='inherit' />}
        >
          {photosResp.map((photo: any, idx: number) => (
            <Image key={idx} photo={photo} />
          ))}
        </InfiniteScroll>
      )}
    </ImagesBox>
  );
}

const mapStateToProsp = (state: any) => ({
  photosResp: state.search.search,
  currentPage: state.search.currentPage,
  searchValue: state.search.searchValue,
  totalPages: state.search.totalPages5
});

const mapDispatchToProps = (dispatch: any) => ({
  handleSearch: (value: string, page: number) => dispatch(handleSearch(value, page))
});


export default connect(mapStateToProsp, mapDispatchToProps)(ImagesContainer);