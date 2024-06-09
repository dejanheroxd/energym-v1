import React from "react";

export default function InfiniteText() {
  return (
    <div className="w-screen text-white flex justify-center">
      <div className="flex text-[0.75rem] items-center h-[50vh] xl:pb-[11rem] w-[100vw] overflow-hidden max-w-[100vw">
        <div className="scroll">
          <div className="RightToLeft mb-14 xl:mb-16">
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
