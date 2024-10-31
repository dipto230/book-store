import bannerImg from '../../assets/books.jpg';
import React from 'react';

const Banner = () => {
    return (
        <div className=" hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-black">Books to freshen up your bookshelf</h1>
     
      <button className="rounded-lg bg-[rgb(35,190,10)] text-white px-4 py-2">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;