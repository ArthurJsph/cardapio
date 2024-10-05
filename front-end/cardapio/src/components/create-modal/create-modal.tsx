import { useState } from 'react';
interface inputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
  }
  
  const input = ({ label, value, updateValue }: inputProps) => {
    return (
      <>
        <label>{label}</label>
        <input value={value} onChange={(e) => updateValue(e.target.value)} />
      </>
    );
  };
  
  export function CreateModal() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0);
  
    return (
      <div className="modal-overlay">
        <div className="modal-body">
          <h2>Cadastre um novo item no cardápio</h2>
          <form className="input-container">
            <label>Nome:</label>
            <input value={nome} onChange={(e) => setNome(e.target.value)} />
            
            <label>Descrição:</label>
            <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            
            <label>Preço:</label>
            <input type="number" value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
            </form>
        </div>
      </div>
    );
  }