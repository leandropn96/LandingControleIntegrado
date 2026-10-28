import { ProblemItem } from '../models/landing.models';

export const PROBLEMS: ProblemItem[] = [
  {
    icon: 'packages',
    title: 'Estoque desatualizado',
    description:
      'Falta produto na prateleira e sobra no depósito. Sem visibilidade, o lucro some no silêncio.',
  },
  {
    icon: 'trending-down',
    title: 'Perda de vendas',
    description:
      'Fila lenta, preço errado e ruptura geram cliente perdido — e concorrência ganha espaço.',
  },
  {
    icon: 'report-money',
    title: 'Falta de controle financeiro',
    description:
      'Caixa no caderno, contas misturadas e fim do mês sem saber o que realmente sobrou.',
  },
  {
    icon: 'cash-off',
    title: 'Erros de caixa',
    description:
      'Diferenças de turno, troco incorreto e auditoria demorada atrapalham a operação diária.',
  },
  {
    icon: 'file-invoice',
    title: 'Emissão fiscal complicada',
    description:
      'NFC-e, tributação e rejeições da SEFAZ consomem tempo que deveria ir para o atendimento.',
  },
  {
    icon: 'truck-delivery',
    title: 'Compras sem planejamento',
    description:
      'Compra por feeling: capital parado, validade vencendo e ruptura nos itens que mais vendem.',
  },
];
