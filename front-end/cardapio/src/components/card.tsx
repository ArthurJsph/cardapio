import './card.css';

interface CardProps {
    preco: number;
    nome: string;
    descricao: string; 
    status: boolean;   
}

const Card: React.FC<CardProps> = ({ preco, nome, descricao, status }) => {
    return (
      <div>
        <h2>{nome}</h2>
        <p>Preço: {preco}</p>
        <p>Descrição: {descricao}</p>
        <p>Status: {status ? 'Ativo' : 'Inativo'}</p>
      </div>
    );
  };
  
  export default Card;