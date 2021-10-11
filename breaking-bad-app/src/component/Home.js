import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../redux/charactersSlice";
import Masonry from "react-masonry-css";
import "./Home.css";
import Loading from "./Loading";
import Error from "./Error";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((data) => (
          <div key={data.char_id}>
            <img alt={data.name} src={data.img} className="character" />
            <div className="char_name">{data.name}</div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Home;
