import { FaClock, FaRegStar } from "react-icons/fa";
import { TbBrandAppgallery } from "react-icons/tb";
import moment from 'moment';


const Card = ({gadget}) => {
    return (
        <div className="card bg-base-100 rounded-xl  shadow-xl border border-orange-500">
        <figure className="">
          <img className="w-64 h-64 object-cover"
            src={gadget.image}
            alt={gadget.name} />
        </figure>
        <div className="card-body shadow-xl border-t rounded-xl rounded-t-none bg-fuchsia-200">
          <h2 className="card-title">
            {gadget.name}
            <div className="badge badge-secondary">{gadget.category}</div>
          </h2>
          <h4 className="text-gray-400 -mt-2 pl-2 flex items-center gap-1"><FaClock /> {moment(gadget.createdAt).format('lll')}</h4>
          <p>{gadget.description}</p>
          <div className="flex justify-between mt-4">
            <h4 className="text-2xl"><span>Price: </span> <span>${gadget.price}</span></h4>
          <div className="card-actions justify-end">
            <div className="badge badge-outline flex items-center p-3 bg-yellow-500 text-white"><FaRegStar /><span>{gadget.ratings}</span>
            </div>
            <div className="badge badge-outline bg-orange-500 text-white p-3"><TbBrandAppgallery /> <span>{gadget.brand}</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Card;