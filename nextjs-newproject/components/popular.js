function Popular({ movies }) {
  return (
    <div className="popular">
      {movies.results.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          />
        </div>
      ))}
      <style jsx>{`
        .popular {
            display: flex;
            flex-wrap: wrap;
            width: 1200 px;
            margin: 0 auto; 
            gap: 10px;

            div {
               width: calc(25% - 10px);
               position: relative;

               h3 {
                font-size: 16px;
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
                color: #fff;
                background: linear-gradient(to top, #000, transparent);
                padding: 50px 20px 20px 20px;
               }

               img {
                width: 100%;
               }
            }
        }
      `}
      </style>
    </div>
  );
}

export default Popular;
