// src/app/dashboard/page.tsx

import React from 'react';

export default function DashboardPage() {
  const salesData = [
    { id: 1, item: 'Moto Esportiva 1', quantidade: 3, valor: 'R$ 45.000,00', imgSrc: 'images/moto1.jpg' },
    { id: 2, item: 'Moto Custom 2', quantidade: 2, valor: 'R$ 35.000,00', imgSrc: 'images/moto2.jpg' },
    { id: 3, item: 'Moto Off-Road 3', quantidade: 4, valor: 'R$ 25.000,00', imgSrc: 'images/moto3.jpg' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard da Loja de Motos</h1>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Visão Geral das Vendas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {salesData.map((sale) => (
            <div key={sale.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img
                src={sale.imgSrc}
                alt={sale.item}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{sale.item}</h3>
              <p>Quantidade: {sale.quantidade}</p>
              <p>Valor: {sale.valor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
