import s from './menu.module.css'

export const Menu = () => {
  return (
    <nav className={s.menu}>
      <a href="/"></a>
      <a href="/valores">valores</a>
      <a href="/btc">btc</a>
      <a href="/eth">eth</a>
    </nav>
  )
}
