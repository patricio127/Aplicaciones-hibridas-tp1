import eventsDao from "./model/events.dao.js"
import authDao from "./model/auth.dao.js";
const usuariosPrueba = [
    {
        name: "Brian",
        email: "brianlara@davinci.edu.ar",
        password: "123456",
    },
    {
        name: "Patricio",
        email: "patricio@davinci.edu.ar",
        password: "123456", 
    }
]
try{
    const element = usuariosPrueba[0]
    console.log(`Se va a crear un usuario ${element.email}`)
    await authDao.register(element)
    console.log(`Usuario creado`)

    const element2 = usuariosPrueba[1]
    console.log(`Se va a crear un usuario ${element2.email}`)
    await authDao.register(element2)
    console.log(`Usuario creado`)


    console.log(`Se va a asignar admin al usuario ${usuariosPrueba[0].email}`)
    const usuarioAdmin = await authDao.login(usuariosPrueba[0].email, usuariosPrueba[0].password)
    console.log(usuarioAdmin)
    await authDao.update(usuarioAdmin.id, {isAdmin: true})
    console.log(`Admin ${usuarioAdmin.email} asignado`)

} catch(err){
    console.error(err)
}

const eventosPrueba = [{
    titulo: "¡El evento web «Obsequios de la luna» ya está disponible! ¡Comparte tu tarjeta de aniversario para obtener una Bendición Lunar!",
    descripcion: `El tiempo vuela, ¡y ya estamos celebrando el primer aniversario de Genshin Impact! En esta ocasión tan especial, ¡hemos preparado premios para todos los viajeros! ¡Participa en el evento para crear tu tarjeta personalizada de aniversario y tendrás la oportunidad de obtener recompensas de Bendiciones Lunares! [Duración] (UTC +8)

    Del 29 de septiembre al 7 de octubre de 2021 a las 23:59
    
    Anuncio de premiados: Después del 8 de octubre de 2021 a las 16:00
    
    Después del anuncio de premiados, las recompensas se enviarán a través del correo interno del juego. No será necesario volver a la página del evento para obtener las recompensas.
    
    
    
    [Requisitos de participación]
    
    Rango de Aventura 10 o superior.
    Una vez que finalice el evento, seleccionaremos de forma aleatoria al 10% de los participantes para regalarles Bendición Lunar ×1. Aquellos que no ganen, serán recompensados con 100 000 Moras.



    [Envío de recompensas]

    Después del anuncio de los ganadores, el 8 de octubre de 2021 a las 16:00 (UTC +8), recibirán las recompensas a través del correo interno del juego (es posible que el envío sufra cierto retraso). El correo será válido durante 30 días, ¡no olvides reclamar tus recompensas a tiempo!
    [Recompensas]

    Sony PlayStation 5 (Versión japonesa - con lector de discos).

    Merchandising de un personaje aleatorio con temática "Fiesta del truco o trato".



    Seleccionaremos al azar a algunos participantes:

    Seleccionaremos a 3 participantes al azar y le regalaremos a cada uno 1 Sony Play Station 5 (Versión japonesa - con lector de discos).

    Seleccionaremos a 100 participantes al azar y le regalaremos a cada uno 1 artículo de merchandising de un personaje aleatorio con temática "Fiesta del truco o trato"`,
    fecha_inicio: '2021-09-29',
    fecha_fin: '2021-10-07',
},
{
    titulo: "¡Ya está disponible el concurso de cosplay «Un encuentro terrenal»!",
    descripcion: `[Cómo participar]
    1. Crea un cosplay basado en el tema "¡Feliz primer aniversario!" y relacionado con Genshin Impact.
    
    2. Haz clic en "Publicar imagen" en la interfaz del evento y sube tu obra.
    
    3. Después de haber completado los dos pasos anteriores, habrás participado con éxito en el concurso~
    
    [Cómo votar]
    Este concurso tiene una nueva función de votación. Haz clic en el botón "Votar" en la parte inferior de la página, junto a la obra, para votar por tu favorita.
    
    Nota: Cada viajero tiene 20 votos por día. Solo se puede votar hasta una vez por cada obra.
    
    [Duración] (UTC +8)
    Periodo de entrega: del 22 de septiembre al 20 de octubre
    
    Periodo de votación: del 21 al 25 de octubre
    
    Conteo de votos/evaluación: del 26 de octubre al 21 de noviembre
    
    Envío de premios: a partir del 22 de noviembre
    
    [Recompensas]
    Estrella brillante (5 ganadores)
    
    Protogema ×6000 + Apple AirPods ×1
    
    Estrella ardiente (10 ganadores)
    
    Protogema ×2000 + Ratón Razer DeathAdder V2 ×1
    
    Estrella popular (20 ganadores)
    
    Protogema ×1000 + Merchandising de un personaje aleatorio de la serie «Regalo del destino» ×1
    
    [Reglas del evento]
    1. Crea una foto de un cosplay basado en el tema "¡Feliz primer aniversario!" y relacionado con Genshin Impact. (No serán admitidas las capturas del juego o imágenes ya publicadas anteriormente).
    
    2. El formato de las imágenes deberá ser jpg, png o gif con un tamaño no superior a 10 MB. Las obras entregadas deberán ser recientes (del último mes).
    
    3. Cada participante podrá entregar un máximo de 5 obras. No se tendrá en cuenta la misma obra publicada múltiples veces. Si un mismo participante gana con varias obras, recibirá únicamente el premio de más valor.
    
    4. Las obras podrían ser eliminadas directamente en las siguientes circunstancias: contenidos inapropiados o ilegales, contenidos que no cumplan con el propósito del evento, plagio o robo de la(s) obra(s) de otro autor, ausencia de relación con el juego de Genshin Impact, o difamación de Genshin Impact o de alguno de los personajes del juego.
    
    [Reglas de deliberación]
    1. El jurado valorará la completitud, estética y la manera en la que se adaptan los elementos de Genshin Impact y, además, tendrá como referencia en cierta parte el número de votos y la popularidad que las obras reciban. Si varias obras de un mismo participante resultan premiadas, se realizará únicamente el envío del premio de mayor valor.
    
    2. Los premios Estrella brillante y Estrella ardiente serán otorgados de acuerdo a los factores anteriormente mencionados, por lo que es posible que algunos premios se queden sin enviar.
    
    3. El premio Estrella popular será otorgado de acuerdo al número de votos conseguidos siempre y cuando las obras sean satisfactorias y cumplan con las normas del evento.
    
    [Notas]
    1. Presta atención a las notificaciones de la plataforma, pues la información de los premios de merchandising se publicará a través de las notificaciones. Los afortunados que consigan un premio tendrán que ponerse en contacto con los organizadores a través del método de contacto que aparezca en la notificación. Se considerará que renuncian al premio aquellos ganadores que no proporcionen sus datos de envío en el plazo de un mes después del envío de la notificación.
    
    2. Asegúrate de haber introducido tu UID en el juego a través de "Mi cuenta" - "Información de canje". Si no cumples con este paso después del anuncio de premiados, se considerará que renunciaste a la recompensa de Protogemas de forma voluntaria.`,
    fecha_inicio: '2021-09-22',
    fecha_fin: '2021-11-22',
},
{
    titulo: "Evento de Aniversario de Genshin Impact [Juguemos a los acertijos]",
    descripcion: `Querido/a viajero/a:

    Paimon les trae un nuevo evento de aniversario: ¡Juguemos a los acertijos!
    
    
    
    〓Duración〓
    
    7 de octubrehasta el 13 de octubre de 2021 23:59 (UTC +8)
    
    
    
    〓Publicación de resultados〓
    
    18 de octubre de 2021
    
    
    
    〓Recompensas〓
    
    100 Protogemas ×1000
    
    
    
    〓Plataformas〓
    
    Twitter, Facebook
    
    
    
    〓Cómo participar〓
    
    1. Adivina las respuestas correctas de los acertijos con las pistas de la imagen. Completa la imagen y publícala en tu perfil con las etiquetas #AcertijosdePaimon y #GenshinImpact (asegúrate de que tanto la publicación como tu perfil sean públicos).
    
    2. Ingresa al enlace que aparece abajo y envíanos tu UID y el enlace de la tarjeta de acertijo publicada en tu perfil. Paimon seleccionará al azar 1000 participantes entre todas las tarjetas correctas y les enviará un premio de 100 Protogemas.
    〓Reglas del evento〓

    1. Este evento está limitado a los viajeros que alcanzaron el Rango de Aventura 10 o superior de los servidores de Europe, America, Asia y TW, HK, MO.

    2. No se permitirá la publicación de ningún contenido ilegal o que viole las reglas de cualquier plataforma.

    3. No se permitirá la publicación de contenido no relacionado con este evento (incluyendo pero no limitado a enlaces publicitarios u otros tipos de contenido publicitario).

    4. Cada viajero solo puede participar 1 vez en el evento.

    5. Los derechos de autoría pertenecerán al autor y estará estrictamente prohibido el plagio, robo y otras acciones que puedan violar los derechos de autor.

    6. El total de recompensas para este evento es de 1000 para todas las plataformas.`,
    fecha_inicio: '2021-10-07',
    fecha_fin: '2021-10-18',
}]
try{
    eventosPrueba.forEach(async element => {
        const creado = await eventsDao.create(element)
        console.log(`Evento ${creado._id} creado`)
    });
} catch(err){
    console.error(err)
}