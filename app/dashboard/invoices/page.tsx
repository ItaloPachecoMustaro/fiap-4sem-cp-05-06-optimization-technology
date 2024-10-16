// src/app/invoices/page.tsx

import React from 'react';

const invoicesData = [
  { id: 1, numero: 'INV-001', cliente: 'João Silva', data: '2024-10-01', valor: 'R$ 45.000,00', status: 'Pago', imgSrc: '/images/moto1.jpg' },
  { id: 2, numero: 'INV-002', cliente: 'Maria Oliveira', data: '2024-09-20', valor: 'R$ 35.000,00', status: 'Pendente', imgSrc: '/images/moto2.jpg' },
  { id: 3, numero: 'INV-003', cliente: 'Carlos Souza', data: '2024-09-15', valor: 'R$ 25.000,00', status: 'Atrasado', imgSrc: '/images/moto3.jpg' },
];

export default function InvoicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Faturas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {invoicesData.map((invoice) => (
          <div key={invoice.id} className="bg-gray-800 shadow-md rounded-lg p-4">
            <img
              src={invoice.imgSrc}
              alt={invoice.numero}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">Fatura: {invoice.numero}</h2>
            <p>Cliente: {invoice.cliente}</p>
            <p>Data: {invoice.data}</p>
            <p>Valor: {invoice.valor}</p>
            <p>Status: <span className={`text-${invoice.status === 'Pago' ? 'green' : invoice.status === 'Pendente' ? 'yellow' : 'red'}-500`}>{invoice.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
