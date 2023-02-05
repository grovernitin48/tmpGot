import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)

    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`)
        const data = await res.json()

        console.log(data);

        if (data && data.products) {
            setProducts(data.products)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }

    return (
        <div>
            {products.length > 0 && <div className="products">
                {products.slice(page * 10 - 10, page * 10).map((prod) => {
                    return <span className="products__single" key={prod.id}>
                        <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
                        <span>
                            {prod.title}
                        </span>
                    </span>
                })}
            </div>}

            {products.length > 0 && <div className="pagination">
                <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

                {[...Array(products.length / 10)].map((_, i) => {
                    return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                })}

                <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 10 ? "" : "pagination__disable"}>▶</span>
            </div>}
        </div>
    );
}

export default App;


//App.CSS
const styles = `.products {
    margin: 20px;
    padding: 0;
    list-style-type: none;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .products__single {
    height: 250px;
    list-style: none;
    padding: 20px;
    background-color: rgb(220, 220, 220);
    text-align: center;
    border-radius: 5px;
    cursor: pointer; /* Imp on clickables */
  }
  
  .products__single > img{
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 3px;
  }
  
  .pagination {
    padding: 10px;
    margin: 15px 0;
    display: flex;
    justify-content: center;
  }
  
  .pagination > span{
    padding: 15px 20px;
    border: 1px solid gray;
    cursor: pointer;
  }
  
  .pagination__disable{
    opacity: 0;
  }
  
  .pagination__selected{
    background-color: rgb(220, 220, 220);
  }`