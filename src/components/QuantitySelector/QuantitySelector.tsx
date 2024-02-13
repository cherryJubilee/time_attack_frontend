type QuantitySelectorProps = {
  count: number;
  setCount: (newCount: number) => void;
};

function QuantitySelector({ count, setCount }: QuantitySelectorProps) {
  const handleQuantityChange = (newCount: number) => {
    setCount(Math.max(1, newCount));
  };

  return (
    <div className="flex items-center justify-start">
      <button
        onClick={() => handleQuantityChange(count - 1)}
        className="border border-gray-300 w-5 h-5 flex items-center justify-center"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        title="구매수량"
        className="text-sm border-none text-center w-14 h-5 text-black border-b border-t border-gray-300 p-0 mr-0"
        readOnly
      />
      <button
        onClick={() => handleQuantityChange(count + 1)}
        className="border border-gray-300 w-5 h-5 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
