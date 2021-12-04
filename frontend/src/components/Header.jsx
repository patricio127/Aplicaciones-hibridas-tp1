function Header(){
    return(
        <header>
        <h1 class="visually-hidden">Genshin Impact</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="<?= route('home');?>">
                <img src="img/logo.png" alt="Logo" width="200" height="140" class="d-inline-block align-text-top"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse " id="navbar">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link px-3" aria-current="page" href="<?= route('home');?>">INICIO</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('eventos');?>">EVENTOS</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('admin');?>">ADMINISTRAR</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('perfiles-registrados');?>">PERFILES REGISTRADOS</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('planes');?>">PLANES</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('perfil');?>">PERFIL</a>
                      </li>
                      <li class="nav-item">
                        <form action="{{route('auth.logout')}}" method="post">
                          <button class="btn nav-link px-3" type="submit">CERRAR SESION</button>
                        </form>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('planes');?>">PLANES</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('auth.formLogin');?>">INICIAR SESION</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link px-3" href="<?= route('auth.formRegister');?>">REGISTRARSE</a>
                      </li>
                    </ul>
                  </div>
            </div>
        </nav>
    </header>
    )
}
export default Header;