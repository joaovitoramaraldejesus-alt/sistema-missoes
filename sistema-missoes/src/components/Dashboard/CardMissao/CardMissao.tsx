import type { IMissao } from "../../../interfaces/IMissao";

interface Props {
  missao: IMissao;
  alterarStatus: (id: number, status: IMissao["status"]) => void;
}

function CardMissao({ missao, alterarStatus }: Props) {
  return (
    <div className={`card re-card p-4 ${missao.status === 'concluida' ? 'concluida' : ''} ${missao.status === 'pausada' ? 'pausada' : ''}`}>
      <div className="flex-grow-1">
        <h4 className="text-danger mb-2 font-monospace" style={{ fontSize: '1.1rem' }}>
          {missao.status === 'concluida' ? '✓' : '>'} {missao.titulo.toUpperCase()}
        </h4>
        <p className="text-secondary small">{missao.descricao}</p>
      </div>
      
      <div className="d-flex align-items-center justify-content-between mt-4 pt-3 border-top border-secondary border-opacity-25 gap-2">
        {/* Badge limpo sem bordas estranhas */}
        <span className={`re-badge ${missao.status}`}>
          {missao.status.toUpperCase()}
        </span>
        
        <div className="d-flex gap-1">
          {(missao.status === 'pendente' || missao.status === 'pausada') && (
            <button onClick={() => alterarStatus(missao.id, 'andamento')} className="btn-re btn-re-danger">
              {missao.status === 'pausada' ? 'RESUME' : 'EXECUTE'}
            </button>
          )}

          {missao.status === 'andamento' && (
            <button onClick={() => alterarStatus(missao.id, 'pausada')} className="btn-re btn-re-warning">
              PAUSE
            </button>
          )}

          {(missao.status === 'andamento' || missao.status === 'pausada') && (
            <button onClick={() => alterarStatus(missao.id, 'concluida')} className="btn-re btn-re-success">
              FINISH
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardMissao;