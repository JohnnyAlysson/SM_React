
import { useState } from 'react'
import './App.css'

function App() {

  const lojaOnline = {
    informatica: [
        { id: 1, nome: "Laptop", preco: 3500 },
        { id: 2, nome: "Desktop", preco: 2500 },
        { id: 3, nome: "Monitor", preco: 800 },
        { id: 4, nome: "Teclado Mecânico", preco: 300 },
        { id: 5, nome: "Mouse Gamer", preco: 150 },
        { id: 6, nome: "Headset com Microfone", preco: 200 },
        { id: 7, nome: "Impressora", preco: 600 },
        { id: 8, nome: "Scanner", preco: 400 },
        { id: 9, nome: "Câmera Web", preco: 250 },
        { id: 10, nome: "Hub USB", preco: 100 },
        { id: 11, nome: "Pen Drive 32GB", preco: 50 },
        { id: 12, nome: "HD Externo 1TB", preco: 300 },
        { id: 13, nome: "Cartão de Memória 64GB", preco: 80 },
        { id: 14, nome: "Antivírus", preco: 150 },
        { id: 15, nome: "Cabo HDMI", preco: 25 }
    ],
    livros: [
        { id: 1, nome: "Romance A", preco: 40 },
        { id: 2, nome: "Ficção Científica B", preco: 50 },
        { id: 3, nome: "Biografia C", preco: 30 },
        { id: 4, nome: "Autoajuda D", preco: 35 },
        { id: 5, nome: "Guia de Estudo E", preco: 45 },
        { id: 6, nome: "Livro Infantil F", preco: 25 },
        { id: 8, nome: "HQ H", preco: 30 },
        { id: 9, nome: "Fotografia I", preco: 60 },
        { id: 10, nome: "Literatura Clássica J", preco: 20 },
        { id: 11, nome: "Ensaios sobre Tecnologia K", preco: 50 },
        { id: 12, nome: "Desenvolvimento Pessoal L", preco: 35 },
        { id: 13, nome: "Contos M", preco: 45 },
        { id: 14, nome: "Viagens N", preco: 55 },
        { id: 15, nome: "Arte O", preco: 65 }
    ],
    eletrodomesticos: [
        { id: 1, nome: "Geladeira", preco: 2500 },
        { id: 2, nome: "Fogão", preco: 1200 },
        { id: 3, nome: "Micro-ondas", preco: 800 },
        { id: 4, nome: "Máquina de Lavar Roupa", preco: 1500 },
        { id: 5, nome: "Secadora de Roupa", preco: 1200 },
        { id: 6, nome: "Liquidificador", preco: 300 },
        { id: 7, nome: "Batedeira", preco: 400 },
        { id: 8, nome: "Fritadeira Elétrica", preco: 350 },
        { id: 9, nome: "Cafeteira", preco: 200 },
        { id: 10, nome: "Torradeira", preco: 150 },
        { id: 11, nome: "Processador de Alimentos", preco: 600 },
        { id: 12, nome: "Purificador de Água", preco: 450 },
        { id: 13, nome: "Ar Condicionado", preco: 3000 },
        { id: 14, nome: "Aspirador de Pó", preco: 500 },
        { id: 15, nome: "Ventilador", preco: 250 }
    ]
  }

  const [produtos, setProdutos] = useState([])

  return (
    <>
    <header>
      <h1>Minha Loja</h1>
      <nav>
        <ul>
          <li>
            <button onClick={()=> setProdutos(lojaOnline.informatica)}>Informática</button>
          </li>
          <li>
            <button onClick={()=> setProdutos(lojaOnline.livros)}>Livros</button>
          </li>
          <li>
            <button onClick={()=> setProdutos(lojaOnline.eletrodomesticos)}>Eletrodomesticos</button>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section>
        {produtos && produtos.map((element)=>(
          <div key= {element.id}>
            <h2>Nome: {element.nome}</h2>
            <p>Preço: {element.preco}</p>
          </div>
        ))}
      </section>
    </main>
    </>
  )
}

export default App