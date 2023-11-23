import React from "react";

const loading = () => {
  return (
    <section className="bg-black flex items-center h-screen">
      <div className="mx-auto container">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-[200px] text-whitegray">LOADING...</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
