import type { IMissao } from "../../interfaces/IMissao";

// Interface obrigatória para cumprir o requisito C da tarefa
interface DashboardProps {
  missoes: IMissao[];
}

function Dashboard({ missoes }: DashboardProps) {
  const stats = [
    { label: "TOTAL", value: missoes.length, color: "secondary" },
    { label: "CONCLUÍDAS", value: missoes.filter(m => m.status === 'concluida').length, color: "success" },
    { label: "ANDAMENTO", value: missoes.filter(m => m.status === 'andamento').length, color: "info" },
    { label: "PENDENTES", value: missoes.filter(m => m.status === 'pendente').length, color: "danger" },
    { label: "PAUSADAS", value: missoes.filter(m => m.status === 'pausada').length, color: "warning" },
  ];

  return (
    <div className="row g-2">
      {stats.map((s, index) => (
        <div className="col-6 col-lg-12" key={index}>
          <div className={`card bg-dark border-${s.color} p-2 h-100 shadow-sm`}>
            <h6 className={`text-${s.color} mb-1 fw-bold`} style={{ fontSize: '0.65rem' }}>{s.label}</h6>
            <h2 className="m-0 fw-bold text-white">{s.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;