let reviews = [{ name: 'vel', rating: 3 }]

let ratings = reviews.reduce((acc, review) => {
    return review.rating + acc;
}, 0) / reviews.length

ratings = isNaN(ratings) ? 0 : ratings;

console.log(ratings);

// # DB_LOCAL_URI = mongodb://127.0.0.1:27017/kumazon
{items.map((item) => (
    <div key={item.product} className="flex px-3 md:px-6 py-3 md:py-5 mt-3 md:mt-6   border md:relative">
        {/* img */}
        <Link to={`/product/${item.product}`}>
            <img src={item.image} className="object-cover max-w-[100px]  md:max-w-[200px] h-[148px] md:h-60 " alt="" />
        </Link>
        <div className="pl-5 flex justify-between w-full ">

            <div className="  md:w-2/3">
                {/* name */}
                <Link to={`/product/${item.product}`} className="font-bold text-gray-600   text-xs md:text-base">
                    <p className=" h-4 md:h-6 overflow-hidden">{item.name}</p>
                </Link>

                {/* description */}
                <p className=" mt-1 md:mt-2 text-gray-500 h-4 md:h-6 overflow-hidden  text-xs md:text-sm">
                    {item.description}
                </p>

                {/* size & color */}
                <p className="mt-2 md:mt-3  text-gray-800 text-xs md:text-sm"> <b>Size:</b> XS <b>Colour:</b> Black</p>


                {/* price */}
                <div className="flex items-center mt-1 md:mt-3  gap-x-2 text-xs md:text-base">
                    <p className=" font-bold">&#8377;{(item.price - (Math.round(item.price * item.discount / 100))) * item.quantity}</p>
                    <p className="  line-through">&#8377;{item.price * item.quantity}</p>
                    <p className="text-blue-600 ">{item.discount}% OFF</p>
                </div>



            </div>

            <div className="md:absolute cursor-pointer right-6" onClick={() => dispatch(removeItemFromCart(item.product))}>
                <AiFillCloseCircle className="text-gray-300 ml-2 md:ml-0 w-5 h-5 md:w-6 md:h-6" />
            </div>
        </div>
    </div>
))}

