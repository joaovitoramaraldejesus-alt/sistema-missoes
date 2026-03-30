import { useState } from "react";
import type { IMissao } from "./interfaces/IMissao";
import { missoesIniciais } from "./data/missoes";
import Dashboard from "./components/Dashboard/Dashboard";
import CardMissao from "./components/Dashboard/CardMissao/CardMissao";
import "./App.css";

function App() {
  // ESSA LINHA ABAIXO RESOLVE OS ERROS 41, 42, 43 e 52
  const [missoes, setMissoes] = useState<IMissao[]>(missoesIniciais);

  const alterarStatus = (id: number, novoStatus: IMissao["status"]) => {
    setMissoes(prev => prev.map(m => 
      m.id === id ? { ...m, status: novoStatus } : m
    ));
  }; // Verifique se essa chave existe!

  const missoesOrdenadas = [...missoes].sort((a, b) => {
    if (a.status === 'concluida' && b.status !== 'concluida') return -1;
    if (a.status !== 'concluida' && b.status === 'concluida') return 1;
    return 0;
  });
  return (
    <div className="min-vh-100 d-flex flex-column bg-black text-white">
      {/* Player de áudio opcional (caso o arquivo tema.mp3 esteja na public) */}
      <div className="audio-container d-flex justify-content-center pt-2">
        <audio src="/tema.mp3" controls loop style={{height: '25px', opacity: 0.4}}>
          Seu navegador não suporta áudio.
        </audio>
      </div>

      <header className="text-center py-4 d-flex flex-column align-items-center border-bottom border-danger border-opacity-25">
        {/* Como a imagem está na PUBLIC, o caminho é direto "/" */}
        <img src="/umbrella.png" alt="Umbrella Logo" className="img-umbrella" />
        <h1 className="re-title mt-3">UMBRELLA CORP. MISSION SYSTEM</h1>
      </header>

      {/* Grid Assimétrico: Aside (3 colunas) e Section (9 colunas) */}
      <main className="container-fluid mt-4 flex-grow-1">
        <div className="row px-lg-4">
          {/* ASIDE: Barra lateral com Dashboard */}
          <aside className="col-lg-3 col-12 mb-4">
            <div className="sticky-top" style={{ top: '20px' }}>
              <h5 className="text-danger font-monospace mb-3 border-start border-danger ps-2">SYSTEM STATUS</h5>
              <Dashboard missoes={missoes} />
              <div className="text-secondary small mt-4 font-monospace p-2 border border-secondary border-opacity-25">
               <p className="m-0"> &gt; LOCAL: RACCOON CITY</p>
              <p className="m-0"> &gt; STATUS: BIOHAZARD</p>
              <p className="m-0"> &gt; ACCESS: GRANTED</p>
              </div>
            </div>
          </aside>

          {/* SECTION: Conteúdo principal com a lista */}
          <section className="col-lg-9 col-12">
            <h5 className="text-danger font-monospace mb-3 border-start border-danger ps-2">ACTIVE MISSIONS</h5>
            <div className="row g-4">
              {missoesOrdenadas.map((missao: IMissao) => (
                <div className="col-12 col-xl-4 col-md-6 d-flex" key={missao.id}>
                  <CardMissao missao={missao} alterarStatus={alterarStatus} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="text-center py-4 mt-5 border-top border-danger border-opacity-10">
      <address className="m-0 text-danger opacity-50 small font-monospace" style={{ fontStyle: 'normal' }}>
      DESENVOLVIDO POR: JOÃO VITOR AMARAL // DATA: 29/03/2026 <br/>
      DISCIPLINA: DESENVOLVIMENTO DE SOFTWARE WEB // ORIENTAÇÃO: PROF. FERNANDO
      </address>
      </footer>
    </div>
  );
}

export default App;