/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface TokenInputProps {
  token: string;
  amount?: string;
  showGasPrice?: boolean;
}

const TokenInput: React.FC<TokenInputProps> = ({
  token,
  amount,
  showGasPrice,
}) => {
  return (
    <div
      className={`flex flex-col ${
        amount ? "pt-5 pb-3" : "pt-6 pb-3.5 pl-2.5"
      } ${
        amount ? "mt-0" : "mt-7"
      } w-full text-white whitespace-nowrap rounded-xl bg-zinc-800 bg-opacity-70 max-md:max-w-full`}
    >
      <div className="flex gap-5 justify-between items-start self-end mr-0 w-full max-md:max-w-full">
        <div className="text-base">{token}</div>
        <div className="flex gap-7 mt-2 text-xs font-medium leading-tight text-right">
          {showGasPrice && (
            <div className="flex flex-col justify-center items-center px-2.5 py-1 rounded-3xl bg-white bg-opacity-80 min-h-[20px] text-zinc-900">
              <div className="gap-1 self-stretch">Gas Price</div>
            </div>
          )}
          <button className="flex flex-col justify-center items-center px-2.5 py-1.5 text-white whitespace-nowrap bg-blue-600 rounded-3xl min-h-[20px]">
            Change
          </button>
        </div>
      </div>
      {amount ? (
        <div className="px-3 py-4 mr-3 ml-2.5 text-base rounded-xl bg-neutral-700 max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
          {amount}
        </div>
      ) : (
        <div className="flex shrink-0 max-w-full h-11 rounded-xl bg-neutral-700 w-[423px] max-md:mr-2.5" />
      )}
    </div>
  );
};

export default TokenInput;