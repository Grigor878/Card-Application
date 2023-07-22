import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard,sortCards } from '../../store/slices/cardSlice'
import { generateRandomNumber } from '../helpers/utils'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()

    const handleAddCard = () => {
        const randomNumber = generateRandomNumber(1, 1000)
        dispatch(addCard(randomNumber))
    }

    const handleSortCards = () => {
        dispatch(sortCards())
    }

    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <button onClick={handleAddCard}>Add Card</button>
                    <button onClick={handleSortCards}>Sort Cards</button>
                </nav>
            </div>
        </header>
    )
}

export default Header