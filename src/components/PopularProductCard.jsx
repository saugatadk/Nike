import {star} from "../assets/icons";

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5)</p>
        </div>
        <h3 className="leading-normal mt-2 text-2xl font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold text-coral-red text-2lx leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard