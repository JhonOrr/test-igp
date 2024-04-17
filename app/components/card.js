import styles from './card.module.css';
import arrow from '/public/arrow.png';
import Image from 'next/image';

export default function card() {
  return (
    <main className={styles.card}>
      <div>
      <Image src={arrow}/>
      <p className={styles.welcome}>Bienvenido a</p>
      <p className={styles.title}>Estudios sobre el <span>Comportamiento Dinámico de Suelo</span> (CDS)</p>
      <div className={styles.text}>
      <p>
        En el PPR Nº068, "Reducción de la Vulnerabilidad y Atención de
        Emergencias por Desastres", el Instituto Geofísico del Perú (IGP)
        desarrolla la actividad que permite obtener los Mapas de Zonificación
        Geofísica - Geotécnica (Comportamiento Dinámico de Suelo) para áreas
        urbanas ubicadas en zonas de alto potencial sísmico.
      </p>
      <p>
        Estos mapas permiten tener mayor conocimiento sobre la estructura y
        propiedades físicas de los suelos sobre los cuales se encuentran las
        áreas urbanas y/o futuras áreas de expansión. Para ello, el IGP
        correlaciona los resultados obtenidos con la aplicación de diversos
        métodos geofísicos y geotécnicos con el fin de identificar y clasificar
        los suelos con diferente comportamiento dinámico ante la ocurrencia de
        sismos.
      </p>
      <p>
        Este aporte a la Gestión del Riesgo de Desastres debe ser considerado
        por la población y autoridades para la correcta implementación de
        acciones y medidas para reducir el riesgo ante sismos.
      </p>
      </div>
      <button className={styles.button}>Iniciar geovisor</button>
      </div>
      
    </main>
  );
}
