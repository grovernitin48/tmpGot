import { useEffect, useReducer } from 'react'
import axios from 'axios'
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { cartReducer } from './reducers/cartReducer';

function App() {
    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: [],
    });

    const fetchProducts = async () => {
        const { data } = await axios.get("https://dummyjson.com/products")

        dispatch({
            type: 'ADD_PRODUCTS',
            payload: data.products
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <Products state={state} dispatch={dispatch} />
            <Cart state={state} dispatch={dispatch} />
        </div>
    );
}

const Cart = ({ state, dispatch }) => {
    const { cart } = state
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    const changeQty = (id, qty) => dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
            id: id,
            qty: qty,
        },
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: 10, backgroundColor: '#ececec', padding: 10, width: '20%' }}>
            <b style={{ fontSize: 30, alignSelf: 'center' }}>Cart</b>
            <b style={{ alignSelf: 'center' }}>Subtotal: $ {total}</b>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {cart.length > 0 ?
                    cart.map((prod) => (
                        <div key={prod.title} style={{ display: 'flex', padding: 10, border: "1px solid grey", margin: 5, justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <img src={prod.thumbnail} alt={prod.title} style={{ width: 70, objectFit: 'cover' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <span>{prod.title}</span>
                                    <b>$ {prod.price}</b>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <button onClick={() => changeQty(prod.id, prod.qty - 1)}>-</button>
                                <span>{prod.qty}</span>
                                <button onClick={() => changeQty(prod.id, prod.qty + 1)}>+</button>
                            </div>
                        </div>
                    ))
                    :
                    <span style={{ padding: 20, alignSelf: 'center' }}>Cart is empty</span>}
            </div>
        </div>
    )
}

const Products = ({ state, dispatch }) => {
    const { products, cart } = state;

    return (
        <div className="App" style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly', width: '80%' }}>
            {products.map((prod) => (
                <div key={prod.id} style={{ display: 'flex', flexDirection: 'column', padding: 10, border: "1px solid grey", width: "30%", marginTop: 10, gap: 10 }}>
                    <img src={prod.thumbnail} alt={prod.title} style={{ height: 200, objectFit: 'cover' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{prod.title}</span>
                        <b>$ {prod.price}</b>
                    </div>
                    {cart.some((p) => p.id === prod.id) ? (
                        <button
                            style={{ padding: 5, border: 0, borderRadius: 5, backgroundColor: '#e53935', color: 'white' }}
                            onClick={() => dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                            })
                            }
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            style={{ padding: 5, border: 0, borderRadius: 5, backgroundColor: 'green', color: 'white' }}
                            onClick={() => dispatch({
                                type: "ADD_TO_CART",
                                payload: {
                                    id: prod.id,
                                    title: prod.title,
                                    thumbnail: prod.thumbnail,
                                    qty: prod.qty,
                                    price: prod.price,
                                },
                            })
                            }
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return { ...state, products: action.payload };
        case "ADD_TO_CART":
            return { ...state, cart: [{ ...action.payload, qty: 1 }, ...state.cart] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id),
            };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default:
            return state;
    }
};

export default App;
