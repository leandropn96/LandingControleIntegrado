import { FaqItem } from '../models/landing.models';

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Funciona offline?',
    answer:
      'O Controle Integrado é um sistema em nuvem, pensado para operação online com alta disponibilidade. Em cenários específicos, avaliamos contingência conforme o plano e a infraestrutura do cliente.',
  },
  {
    question: 'Emite NFC-e?',
    answer:
      'Sim. Nos planos Professional e Enterprise a emissão de NFC-e faz parte do fluxo de venda, com acompanhamento de status e rastreabilidade.',
  },
  {
    question: 'Tem aplicativo?',
    answer:
      'A experiência é 100% web e responsiva — funciona em notebook, tablet e smartphone pelo navegador, sem instalação complexa.',
  },
  {
    question: 'Faz backup automático?',
    answer:
      'Sim. Rotinas de backup automático protegem os dados da operação e reduzem o risco de perda de informação.',
  },
  {
    question: 'Quanto tempo leva a implantação?',
    answer:
      'Mercadinhos e lojas menores costumam entrar em operação em poucos dias. O prazo depende do volume de cadastros, fiscal e treinamento da equipe.',
  },
  {
    question: 'Posso importar meus dados?',
    answer:
      'Sim. Apoamos a importação de produtos, clientes e saldos iniciais para acelerar a migração sem travar o dia a dia da loja.',
  },
];
