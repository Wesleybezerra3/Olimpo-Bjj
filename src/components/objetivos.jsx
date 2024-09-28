import styles from "../modules/objetivo.module.css"
import { Card } from "./card";
export function Objetivo() {
    const objetivos = [
        {
          title: "Acesso ao Jiu-Jitsu para Todos:",
          content: "Nosso objetivo é garantir que crianças, jovens e adultos tenham acesso gratuito ao Jiu-Jitsu, promovendo inclusão social e oportunidades, sem fins lucrativos.",
        },
        {
          title: "Desenvolvimento Pessoal e Social:",
          content: "Utilizamos o Jiu-Jitsu como uma ferramenta para desenvolver habilidades físicas e emocionais, incentivando a disciplina, o respeito e o autocontrole.",
        },
        {
          title: "Prevenção à Vulnerabilidade:",
          content: "Buscamos afastar os jovens da vulnerabilidade social, oferecendo um ambiente seguro e saudável onde eles possam se fortalecer física e mentalmente.",
        },
        {
          title: "Fomentando Valores:",
          content: "Nosso projeto visa promover os valores do Jiu-Jitsu, como disciplina, foco e respeito, ajudando a formar cidadãos melhores e mais preparados para a vida.",
        },
      ];

      ScrollReveal().reveal('.reveal', {
        delay: 200,
        reset: true,
      });
  return (
    <>
      <section className={`${styles.container_obj} reveal`}>
        <div className={styles.container_h2}>
          <h2>Nossos Objetivos</h2>
        </div>
        <article>
          <div className={styles.container_card}>
          {objetivos.map((objetivo, i) =>(
            <Card key={i} title={objetivo.title} content={objetivo.content}/>
          ))}
          </div>
        </article>
      </section>
    </>
  );
}
