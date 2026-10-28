import { FeatureCategory } from '../models/landing.models';

export const FEATURES: FeatureCategory[] = [
  {
    title: 'Frente de Caixa (PDV)',
    icon: 'building-store',
    items: [
      'Venda rápida',
      'Leitor de código de barras',
      'Impressão de comprovantes',
      'Integração com balanças',
      'NFC-e',
    ],
  },
  {
    title: 'Estoque',
    icon: 'package',
    items: ['Entradas', 'Saídas', 'Inventário', 'Validade', 'Custos'],
  },
  {
    title: 'Compras',
    icon: 'shopping-cart',
    items: ['Pedidos', 'Fornecedores', 'Recebimento'],
  },
  {
    title: 'Financeiro',
    icon: 'wallet',
    items: [
      'Contas a pagar',
      'Contas a receber',
      'Fluxo de caixa',
      'DRE',
      'Conciliação',
    ],
  },
  {
    title: 'Fiscal',
    icon: 'file-certificate',
    items: ['NFC-e', 'SAT (quando aplicável)', 'Tributações', 'CFOP', 'NCM'],
  },
  {
    title: 'Relatórios',
    icon: 'chart-bar',
    items: ['Produtos', 'Vendas', 'Clientes', 'Lucro', 'Estoque', 'Financeiro'],
  },
];
