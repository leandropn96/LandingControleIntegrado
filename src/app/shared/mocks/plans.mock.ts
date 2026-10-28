import { PlanItem } from '../models/landing.models';

export const PLANS: PlanItem[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Para mercadinhos e lojas de bairro que querem organizar a operação.',
    highlight: false,
    cta: 'Solicitar Orçamento',
    features: [
      { text: 'PDV completo', included: true },
      { text: 'Estoque e cadastros', included: true },
      { text: 'Relatórios essenciais', included: true },
      { text: '1 unidade / até 3 usuários', included: true },
      { text: 'NFC-e', included: false },
      { text: 'Multiempresa', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Para negócios em crescimento que precisam de fiscal e financeiro integrados.',
    highlight: true,
    cta: 'Solicitar Orçamento',
    features: [
      { text: 'Tudo do Starter', included: true },
      { text: 'NFC-e integrada', included: true },
      { text: 'Financeiro e fluxo de caixa', included: true },
      { text: 'Compras e fornecedores', included: true },
      { text: 'Até 10 usuários', included: true },
      { text: 'Suporte prioritário', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para redes e operações com múltiplas unidades e exigências avançadas.',
    highlight: false,
    cta: 'Solicitar Orçamento',
    features: [
      { text: 'Tudo do Professional', included: true },
      { text: 'Multiempresa / multiunidade', included: true },
      { text: 'Usuários ilimitados*', included: true },
      { text: 'SLA e implantação dedicada', included: true },
      { text: 'Customizações sob demanda', included: true },
      { text: 'Treinamento da equipe', included: true },
    ],
  },
];
