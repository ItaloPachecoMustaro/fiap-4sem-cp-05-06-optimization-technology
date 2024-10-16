// src/app/clientes/page.tsx

import React from 'react';

const clientesData = [
  { id: 1, nome: 'João Silva', email: 'joao.silva@email.com', telefone: '(11) 1234-5678', comprou: 'Moto Esportiva 1', imgSrc: 'images/moto1.png' },
  { id: 2, nome: 'Maria Oliveira', email: 'maria.oliveira@email.com', telefone: '(21) 8765-4321', comprou: 'Moto Custom 2', imgSrc: 'images/moto2.png' },
  { id: 3, nome: 'Carlos Souza', email: 'carlos.souza@email.com', telefone: '(31) 2345-6789', comprou: 'Moto Off-Road 3', imgSrc: 'images/moto3.png' },
];

export default function ClientesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clientesData.map((cliente) => (
          <div key={cliente.id} className="bg-gray-800 shadow-md rounded-lg p-4">
            <img
              src={cliente.imgSrc}
              alt={cliente.comprou}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{cliente.nome}</h2>
            <p>Email: {cliente.email}</p>
            <p>Telefone: {cliente.telefone}</p>
            <p>Comprou: {cliente.comprou}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
