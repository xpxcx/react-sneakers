import Card from '../components/Card'

function Home({items, searchValue, onChangeSearchInput, setSearchValue, onAppToCart, onRemoveFavorite, onAddFavorite}) {

    return  (
    
    <div>
        <div className="content">
        <h1>Все кроссовки</h1>
        <div className="search">
          
          {searchValue && <img onClick={() => setSearchValue('')} width={32} height={32} src="/img/btn-delete.svg" className="removeSearch" alt="Delete"/>}
          <img src="/img/search.svg" className="search-icon" alt="searchImg"/>
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск"></input>
        </div>
        </div>
      
        <div className='sneakers'>
          {items
          .filter((item => item.title.toLowerCase().includes(searchValue.toLowerCase())))
          .map((item) => (
            <Card
            key={item.id}
            {...item}
            onFavorite={(item) => onAddFavorite(item)}
            onPlus={(item) => onAppToCart(item)} 
          />
          
          ))}
        </div>
        </div>
        )
}

export default Home;