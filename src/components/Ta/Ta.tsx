import React from "react";

export const Ta: React.FC = () => {
  return (
    <>
      <h1 className=" bg-red-500">Ta</h1>
      <div className="flex justify-evenly p-10 focus-within:bg-green-100 group">
        <div className="box bg-red-500 hover:bg-red-400 ring-red-300" tabIndex={0}>
          {" "}
          1{" "}
        </div>
        <div className="box bg-blue-500 hover:bg-blue-400 ring-blue-300" tabIndex={1}>
          {" "}
          2{" "}
        </div>

        <div className="box bg-[darkorange] hover:bg-[orange] ring-[#ffc966]" tabIndex={2}>
          {" "}
          3{" "}
        </div>
      </div>
      <button className="btn btn-secondary">Button</button>

      <input
        type="text"
        placeholder="Type here"
        className="daisy-input daisy-input-bordered daisy-input-xs w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Type here"
        className="daisy-input daisy-input-bordered daisy-input-sm w-full max-w-xs"
      />

      <input
        type="text"
        placeholder="Type here"
        className="daisy-input daisy-input-bordered daisy-input-md w-full max-w-xs"
      />

      <input
        type="text"
        placeholder="Type here"
        className="daisy-input daisy-input-bordered daisy-input-lg w-full max-w-xs"
        disabled
      />

      <input type="radio" name="radio-4" className="daisy-radio daisy-radio-accent" checked />
      <input type="radio" name="radio-4" className="daisy-radio daisy-radio-accent" />

      <div className="daisy-form-control">
        <label className="daisy-label cursor-pointer">
          <span className="daisy-label-text">Red pill</span>
          <input type="radio" name="radio-6" className="daisy-radio checked:bg-red-500" checked />
        </label>
      </div>
      <div className="daisy-form-control">
        <label className="daisy-label cursor-pointer">
          <span className="daisy-label-text">blue pill</span>
          <input type="radio" name="radio-6" className="daisy-radio checked:bg-blue-500" checked />
        </label>
      </div>

      <div className="m-6 p-6">
        <input type="range" min="0" max="100" value="40" className="daisy-range daisy-range-accent" />
      </div>

      <div className="daisy-rating">
        <input type="radio" name="rating-2" className="daisy-mask daisy-mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="daisy-mask daisy-mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="daisy-mask daisy-mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="daisy-mask daisy-mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="daisy-mask daisy-mask-star-2 bg-orange-400" />
      </div>
      <textarea className="daisy-textarea daisy-textarea-error" placeholder="Bio"></textarea>

      <div className="daisy-btn-group">
        <input type="radio" name="options" data-title="1" className="daisy-btn" />
        <input type="radio" name="options" data-title="2" className="daisy-btn" />
        <input type="radio" name="options" data-title="3" className="daisy-btn" />
        <input type="radio" name="options" data-title="4" className="daisy-btn" />
      </div>
    </>
  );
};
