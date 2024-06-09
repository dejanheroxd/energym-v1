import React from "react";

export default function InfiniteText() {
  return (
    <div className="w-screen text-white flex justify-center">
      <div className="flex text-[0.6rem]  lg:text-[1rem] items-center h-[50vh] lg:pb-[11rem] w-[100vw] overflow-hidden max-w-[100vw">
        <div className="scroll">
          <div className="RightToLeft mb-14 lg:mb-[80px]">
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
          </div>
          <div className="LeftToRight">
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
            <p>Transform Your Life</p>
          </div>
        </div>
      </div>
    </div>
  );
}
