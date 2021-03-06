import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { productList } from '../utils/constant';
import Button from './button';
import ProductItem from './product-item';

function Products() {
  const [list, setList] = useState(0);

  const toggleItem = (symbol) => {
    if (symbol === '+') {
      setList((idx) => {
        if (idx + 1 >= productList.length) return 0;
        else return idx + 1;
      });
    } else {
      setList((idx) => {
        if (idx - 1 < 0) return productList.length - 1;
        else return idx - 1;
      });
    }
  };

  return (
    <section
      className="bg-[#F6F7F6] px-[105px] py-32 flex items-center"
      id="product"
    >
      <div>
        <Button
          style="!rounded-full border-2 border-dark !p-0 w-12 h-12 ease-in-out duration-300 hover:bg-dark group"
          action={() => toggleItem('-')}
        >
          <AiOutlineArrowLeft className="mx-auto text-3xl duration-300 ease-in-out text-dark group-hover:text-white" />
        </Button>
      </div>
      <ProductItem product={productList[list]} />
      <div>
        <Button
          style="!rounded-full border-2 border-dark !p-0 w-12 h-12 ease-in-out duration-300 hover:bg-dark group"
          action={() => toggleItem('+')}
        >
          <AiOutlineArrowRight className="mx-auto text-3xl duration-300 ease-in-out text-dark group-hover:text-white" />
        </Button>
      </div>
    </section>
  );
}

export default Products;
