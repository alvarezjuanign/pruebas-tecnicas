import { useState } from 'react'
import { library } from './mocks/books.json'

export function App () {
  const [showFav, setShowFav] = useState(false)
  const [wishlist, setWishlist] = useState([])

  const addToFav = (fav) => {
    setWishlist([...wishlist, fav])
  }

  const handleFavList = () => {
    setShowFav(!showFav)
  }

  return (
    <main className='flex flex-col items-center'>
      <header className='p-7 w-full sticky top-0 bg-blue-700 z-10'>
        <nav className='flex items-center justify-evenly'>
          <h1 className='text-4xl font-semibold'>Books 📕</h1>
          <input
            type='text'
            placeholder='Harry Potter, 1984, IT...'
            className='border border-blue-600 rounded-md w-64 p-1'
          />
          <button
            onClick={handleFavList}
            className='text-3xl hover:scale-110 active:rotate-12 duration-150'
          >
            ⭐
          </button>
        </nav>
      </header>
      <section className='p-7 max-w-4xl'>
        <ul className='grid grid-cols-[repeat(4,1fr)] gap-4'>
          {library.map((book) => (
            <li
              key={book.book.ISBN}
              className='hover:opacity-20 cursor-pointer transition-opacity duration-500'
              onClick={addToFav}
            >
              <img
                src={book.book.cover}
                alt={book.book.title}
                className='object-cover aspect-[9/16] rounded-lg'
              />
            </li>
          ))}
        </ul>
      </section>
      {showFav && (
        <section className='listOfFav absolute top-[100px] right-0 bg-[Canvas] p-7 max-w-xl h-3/4 rounded-lg overflow-x-auto'>
          <h2 className='text-2xl font-semibold text-center p-2'>
            Favorites Books 📚
          </h2>
          <ul className='grid grid-cols-[repeat(2,100px)] gap-4'>
            {wishlist.map((fav) => (
              <div key={fav.target.alt}>
                <img
                  src={fav.target.src}
                  alt={fav.target.alt}
                  className='object-cover aspect-[9/16] rounded-lg'
                />
              </div>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
