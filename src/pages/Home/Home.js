import React, { useMemo } from 'react';
import Title from '../../components/Shared/Title';
import Banner from '../../components/Banner/Banner';
import SliderMovie from '../../components/Slider/SliderMovie';
import SliderTv from '../../components/Slider/SliderTv';
import { getMovieHistory } from '../../utils/localStro';
import RecentlySlider from '../../components/Slider/RecentlySlider';
const Content = () => {
  const historyWatch = useMemo(getMovieHistory, []);

  return (
    <>
      <div className="home-page">
        <Title title={'TheUTHMovies'} />
        <Banner />

        <div className="container">
          {historyWatch.length > 0 ? <RecentlySlider data={historyWatch} /> : null}
          <div className="movie">
            <SliderMovie type="trending" />
            <SliderMovie type="popular" />
            <SliderMovie type="top_rated" />
          </div>
          <div className="tv">
            <SliderTv type="trending" />
            <SliderTv type="popular" />
            <SliderTv type="top_rated" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
