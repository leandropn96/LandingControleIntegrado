import { ScreenItem } from '../models/landing.models';

export const SCREENS: ScreenItem[] = [
  {
    title: 'Dashboard',
    caption: 'Visão do dia: vendas, margem e alertas de estoque.',
    accent: 'dashboard',
  },
  {
    title: 'PDV',
    caption: 'Caixa rápido com leitor, pagamentos e NFC-e.',
    accent: 'pdv',
  },
  {
    title: 'Estoque',
    caption: 'Entradas, saídas, inventário e validade sob controle.',
    accent: 'estoque',
  },
  {
    title: 'Financeiro',
    caption: 'Fluxo de caixa, contas e conciliação no mesmo lugar.',
    accent: 'financeiro',
  },
  {
    title: 'Compras',
    caption: 'Pedidos e recebimento alinhados à demanda da loja.',
    accent: 'compras',
  },
  {
    title: 'Relatórios',
    caption: 'Indicadores para decidir com clareza e velocidade.',
    accent: 'relatorios',
  },
];
