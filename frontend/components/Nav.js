import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const Nav = () => {
  return (
    <NavStyles>
      <Link href="items">
        <a>Shop</a>
      </Link>
      <Link href="sell">
        <a>Sell </a>
      </Link>
      <Link href="singup">
        <a>SingUp</a>
      </Link>
      <Link href="orders">
        <a>Orders</a>
      </Link>
      <Link href="me">
        <a>Me</a>
      </Link>
    </NavStyles>
  )
}

export default Nav
