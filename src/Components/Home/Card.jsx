import { FaRegStar } from "react-icons/fa";
import { TbBrandAppgallery } from "react-icons/tb";


const Card = ({gadget}) => {
    return (
        <div className="card bg-base-100  shadow-xl border border-orange-500">
        <figure className="">
          <img className="w-64 h-64 object-cover"
            src={gadget.image}
            alt={gadget.name} />
        </figure>
        <div className="card-body shadow-xl border-t">
          <h2 className="card-title">
            {gadget.name}
            <div className="badge badge-secondary">{gadget.category}</div>
          </h2>
          <p>{gadget.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline flex items-center p-3 bg-yellow-500 text-white"><FaRegStar /><span>{gadget.ratings}</span>
            </div>
            <div className="badge badge-outline bg-orange-500 text-white p-3"><TbBrandAppgallery /> <span>{gadget.brand}</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;