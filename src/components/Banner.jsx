import bannerImg from '../assets/banner.png'
import { FaEthereum } from 'react-icons/fa'

const Banner = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center lg:justify-between 
    items-center lg:space-x-10 md:w-2/3 w-full p-5 mx-auto"
    >
      <img className="mb-5 lg:mb-0" src={bannerImg} alt="banner" />
      <div className="flex flex-col justify-between  items-start lg:items-center text-center lg:text-left">
        <div className="flex flex-col space-y-4 mb-5">
          <h4 className="text-3xl font-bold">Web3 Console</h4>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam
            vero porro, placeat labore explicabo excepturi?
          </p>
        </div>
        <div className="flex justify-start text-center items-center space-x-2 mx-auto lg:ml-0">
          <button
            className="px-6 py-2.5 bg-blue-800 text-white font-medium text-xs 
                leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg
                focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 
                active:shadow-lg transition duration-150 ease-in-out"
          >
            Buy Now
          </button>
          <div className="flex justify-start items-center">
            <FaEthereum size={15} />
            <span className="font-semibold">2.5</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
