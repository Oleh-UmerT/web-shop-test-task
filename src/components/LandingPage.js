import { useData } from '../store/hooks/useData'
import { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'
import Loader from '../elements/Loader'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'

export default function LandingPage() {
    const { data, isFetching, error } = useData()
    const [list, setList] = useState(data)
    const { addItem } = useCart()

    useEffect(() => {
        setList(data)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setList(data)
    }, [data])

    console.log(data)

    if (isFetching) {
        return (
            <div>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <span>Something wrong</span>
            </div>
        )
    }

    return (
        <div>
            <div>
                <button>
                    <Link to='/cart'>Cart</Link>
                </button>
            </div>
            <div className='landingWrapper'>
                {!isFetching && list &&
                    list.length > 1 && list?.map((item, key) => {
                        return (
                            <div key={key} className='block'>
                                <h1>{item.title}</h1>
                                <p>{item.price}</p>
                                <p>rating - {item.rating.rate}</p>
                                <p>{item.category}</p>
                                <button onClick={() => addItem(item)}>Add to cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}