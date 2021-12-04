import './Home.css'
function Home(){
    return(
        <main id="home">
            <section>
                <div> 
                    <h2>Bienvenidos a las guias de Genshin Impact</h2>
                    <img src="img/inazuma.jpg" alt="Inazuma"/>
                    <div className="parrafo">
                        <p>Inazuma (/ ˌinəˈz (j) uːmə /, / iˈnɑːzumə /) ( japonés :稲 妻 Inazuma ) es una de las siete naciones de Teyvat . Es una nación del archipiélago que adora al Raiden Shogun , el Electro Archon , que también es el líder de su órgano de gobierno, el Inazuma Shogunate . Inazuma se encuentra aproximadamente a 4 km al sureste del puerto de Liyue .</p>
                        <p>En el último año en relación con los eventos actuales del juego, la situación en Inazuma ha dado un giro drástico hacia el aislacionismo, encerrado bajo el Decreto Sakoku . | "Baal" también promulgó el Decreto de búsqueda de visiones relacionado , declarando que las visiones , como obsequios de los dioses , deberían estar en las únicas manos de la divinidad, y ahora está reuniendo todas las visiones en Inazuma para incrustarlas en las manos de una estatua de el Dios de los mil brazos y los cien ojos .</p>
                        <p>Atsuko , un Inazuman que desertó a Liyue , describe el país como un ambiente "tenso" y "peligroso" y desalienta viajar allí; También comenta que Kanjobugyo , una de las Tri-Comisiones , realiza muchas evaluaciones que los ciudadanos deben aprobar para que se les dé permiso para salir de Inazuma. Ella pasó por alto esas evaluaciones haciendo su propia balsa y huyendo a Liyue. Sin embargo, los Fatui parecen poder entrar y salir libremente debido a su inmunidad diplomática.</p>
                    </div>
                </div>
            </section>
            <section>
                <div >
                    <h2>Nuevo Personaje</h2>
                    <img src="img/raiden.jpg" alt=""/>
                    <div className="parrafo">
                        <p>Baal es el nombre Arconte de la deidad que gobierna Inazuma .</p>
                        <ul>
                            <li><a href="https://genshin-impact.fandom.com/wiki/Raiden_Shogun" target="_blank">Raiden Shogun</a>  , el personaje jugable que usa este nombre</li>
                            <li><a href="https://genshin-impact.fandom.com/wiki/Raiden_Makoto" target="_blank">Raiden Makoto (Baal)</a> , el nombre de Arconte de la antigua deidad</li>
                            <li><a href="https://genshin-impact.fandom.com/wiki/Raiden_Ei" target="_blank">Raiden Ei</a>  , la deidad actual que usa este nombre</li>
                            <li><a href="https://genshin-impact.fandom.com/wiki/The_Shogun" target="_blank">El Shogun</a>  , el títere de Ei, y jugable como Raiden Shogun.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>Guía</h2>
                    <img src="img/guia.png" alt=""/>
                </div>
            </section>
        </main>
    )
}
export default Home;