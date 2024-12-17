import {Link} from 'react-router-dom'
function Header({onClickCart})   {
    return (
        <header>
          <Link to='/'>
        <div className="headerLeft">
          
          <img width={40} height={40} src='/img/logo.png' alt=""/>
            <div className="headerInfo">
            <h3 className="name">
              React Sneakers
            </h3>
            <p>
            Магазин лучших кроссовок
            </p>
          </div>
        </div>
        </Link>
        <ul className="headerRight">
          <li onClick={onClickCart}className="l1"> <img width={18} height={18} src='/img/cart.svg' alt=""/> <span>1205 Руб.</span>
          </li>
          <Link to={'/favorites'}>
          <li className="l2">
            <img src='/img/likeList.svg' alt=""/>
            <span>Избранное</span>
          </li></Link>
          
          <li className="l3">
            <img width={18} height={18} src='/img/user.svg' alt=""/>
            <span>Профиль</span>
          </li>
        </ul>

      </header>
    );
}

export default Header;