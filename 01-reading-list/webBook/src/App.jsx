import { library } from './mocks/books.json'

export function App () {
  return (
    <main className='flex flex-col w-full items-center'>
      <header className='flex justify-around'>
        <h1 className=' text-4xl font-semibold p-2'>Books 📕</h1>
        <input
          type='text'
          placeholder='Harry Potter, 1984, IT...'
          className='p-1 m-4 border border-red-600 rounded-md'
        />
      </header>
      <section className='m-3 p-7 max-w-7xl'>
        <ul className='grid grid-cols-[repeat(5,1fr)] gap-4'>
          {library.map((book) => (
            <div
              key={book.book.ISBN}
              className='hover:opacity-5 transition-opacity duration-500'
            >
              <img
                src={book.book.cover}
                alt={book.book.title}
                className='object-cover aspect-[9/16] rounded-lg'
              />
            </div>
          ))}
        </ul>
      </section>
    </main>
  )
}
