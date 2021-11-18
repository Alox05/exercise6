export default function NavBar() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link" href="/#">Dashboard <span className="sr-only">(current)</span></a>
      <a className="nav-link" href="/#">Users</a>
      <a className="nav-link" href="/#">Products</a>
      <a className="nav-link" href="/#">About</a>
    </div>
  </div>
</nav>

    )
}
