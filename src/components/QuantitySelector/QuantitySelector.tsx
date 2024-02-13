import { clearItemInCart } from "@/redux/slice/cart.slice";
import { useAppDispatch } from "@/redux/store";

type QuantitySelectorProps = {
  count: number;
  setCount: (newCount: number) => void;
};

function QuantitySelector({ count, setCount }: QuantitySelectorProps) {
  const handleQuantityChange = (newCount: number) => {
    //setCount(Math.max(1, newCount));
    const dispatch = useAppDispatch();

    if (newCount === 0) {
      dispatch(clearItemInCart());
    }
  };

  return (
    <div className="flex items-center justify-start ">
      <button
        onClick={() => handleQuantityChange(count - 1)}
        className="text-white border bg-black w-8 h-8 flex items-center justify-center"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        title="구매수량"
        className="text-sm text-center w-12 h-5 text-black border-black"
        readOnly
      />
      <button
        onClick={() => handleQuantityChange(count + 1)}
        className="text-white border bg-black w-8 h-8 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
