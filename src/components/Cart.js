import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function Cart()  {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) {
        return (<h2 className="text-center mt-5">Cart Empty</h2>)
    }

    return (
        <div className="wrapper">
            <h2>Count: {totalUniqueItems}</h2>
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        <p>{item.quantity} x {item.title}</p>
                        <div>
                            <button
                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </button>
                            <button
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </button>
                            <button onClick={() => removeItem(item.id)}>&times;</button>
                        </div>
                    </div>
                ))}
                <Link to='/order'>Order now</Link>
            </div>
        </div>
    )
}