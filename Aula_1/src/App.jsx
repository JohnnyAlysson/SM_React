function App() {

  const nome = "Abel Jr"
  const cargo = "Desenvolvedor Front-End"

  const linguagens = ["Javascript", "HTML", "CSS", "React", "Python", "C#", "C++", "Ruby", "Flask", "Django", "Mysql", "PostgreSQL"]
 
  const cursos = [
    {
      instituicao: "Infinity School",
      nome_curso: "Programação FullStack",
      descricao: "bla bla bla"
    },
    {
      instituicao: "Infinity School",
      nome_curso: "Super Módulo de ReactJS",
      descricao: "super módulo só a massa"
    },
    {
      instituicao: "Infinity School",
      nome_curso: "Super Módulo de NodeJS",
      descricao: "Outro super módulo só a massa"
    }
  ]

    return (
    <>
      <header>
        {/* <h1>{nome ? nome : "Nome não encontrado"}</h1> */}
        <h1>{nome || "Nome não encontrado"}</h1>
        <h2>{cargo}</h2>
      </header>

      <main>
        <section>
          <h2>Sobre</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae vero sit laboriosam voluptate totam, tenetur hic vitae autem ex maxime non numquam iusto! Doloremque laboriosam facere dolores alias aut?</p>
        </section>

        <section>
          <h2>Linguagens</h2>
          <ul>
            {linguagens.map((element)=> (
              <li>{element}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Cursos</h2>
          {cursos.map((element)=> (
            <div>
              <h3>{element.instituicao}</h3>
              <h4>{element.nome_curso}</h4>
              <p>{element.descricao}</p>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <p>Densevolvido em sala aula.</p>
      </footer>
    </>
  )
}

export default App