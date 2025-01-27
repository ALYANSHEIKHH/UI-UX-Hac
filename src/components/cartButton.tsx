// components/GoToCartButton.tsx
import Link from 'next/link';

const GoToCartButton = () => {
  return (
    <div className="mt-4">
      <Link href="/cart">
        <button className="w-[215px] h-[64px] flex justify-center px-3 rounded-[10px] items-center gap-3 border border-[#9F9F9F] bg-white hover:bg-black/10 hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105">
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

export default GoToCartButton;
