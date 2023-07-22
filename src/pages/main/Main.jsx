import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard } from '../../store/slices/cardSlice'
import Instructions from '../../components/instructions/Instructions'
import './Main.scss'

const Main = () => {
    const dispatch = useDispatch()

    const cards = useSelector((state) => state.card)

    return (
        <section className='main'>
            <div className="container">
                <div className="main__row">
                    {cards?.length === 0 ?
                        <h2>There is no cards !</h2>
                        : cards.map((el) => (
                            <div key={el} className="main__col">
                                <span>{el}</span>
                                <button onClick={() => dispatch(deleteCard(el))}>
                                    X
                                </button>
                            </div>
                        ))}
                </div>
            </div>
            <Instructions />
        </section>
    )
}

export default Main