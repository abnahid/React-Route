/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 ">
      <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
      <p className="font-light text-gray-500 sm:text-lg ">
        Best option for personal use & for your next project.
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 ">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
        {features.map((feature, index) => (
          <li className="flex items-center space-x-3" key={index}>
            <FaCheckCircle className="text-green-500"></FaCheckCircle>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="text-white bg-green-500 hover:bg-green-600  btn">
        Get started
      </a>
    </div>
  );
};

export default PriceOption;
