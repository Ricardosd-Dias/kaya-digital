export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** The metric headline shown large on cards, e.g. "+80% ROAS" */
  headline: string;
  /** The descriptive title */
  title: string;
  client: string;
  tag: string;
  industry: string;
  accent: string;
  summary: string;
  body: string[];
  stats: CaseStudyStat[];
  images: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-google-ads-v1",
    headline: "+80% ROAS",
    title: "Como Escalámos um E-commerce com Google Ads",
    client: "E-commerce",
    tag: "Google Ads",
    industry: "E-commerce",
    accent: "#FF9941",
    summary:
      "Com menos 44% de investimento conseguimos manter o mesmo volume de vendas e aumentar o ROAS em mais de 80%.",
    body: [
      "Desde que as campanhas passaram para a nossa gestão tem existido uma melhoria substancial das métricas.",
      "Com menos cerca de 44% de investimento conseguimos obter o mesmo volume de vendas (65.5k€) o que se traduziu numa melhoria substancial do ROAS que aumentou mais de 80%!",
      "Conseguimos também escalar rentavelmente as campanhas. Investindo 45k€ conseguimos gerar cerca de 687.5k€ em vendas.",
      "Ou seja, escalámos o investimento em 21% obtendo mais 21% em vendas, mas conseguindo o feito notável de manter a mesma rentabilidade, um ROAS de 15,2€.",
      "Algo extremamente difícil de fazer em marketing digital pois regra geral o aumento de investimento é inversamente proporcional à rentabilidade.",
    ],
    stats: [
      { value: "-44%", label: "Investimento" },
      { value: "+80%", label: "ROAS" },
      { value: "687.5k€", label: "Vendas Geradas" },
      { value: "15.2€", label: "ROAS Final" },
    ],
    images: [],
  },
  {
    slug: "ecommerce-luxo-multi-canal",
    headline: "+1500% Vendas",
    title:
      "Como Transformámos um E-commerce de Luxo com uma Estratégia Multi-Canal",
    client: "E-commerce de Luxo",
    tag: "Meta Ads · Google Ads · CRO",
    industry: "E-commerce",
    accent: "#E8D5C0",
    summary:
      "Otimização do website, do marketing-mix e das campanhas que resultou num aumento de 1500% nas vendas e 43% no cabaz médio.",
    body: [
      "Desde que este cliente iniciou a sua parceria connosco trabalhámos em várias frentes em simultâneo:",
      "Otimizar o website para conversão, com especial foco na ordem em que os produtos eram mostrados nas diferentes landing pages.",
      "Otimização do marketing-mix alocando mais orçamento aos canais com melhor performance.",
      "Otimização de campanhas seguindo as boas práticas de cada plataforma.",
      "Tendo conseguido resultados extraordinários no curto-prazo, com o mesmo investimento em publicidade paga: um aumento de 1500% das vendas (em €) da loja e um aumento de 64% das visitas.",
      "No 1.º ano de trabalho conseguimos aumentar as vendas em cerca de 43%, tendo faturado em 2024 cerca de 350k€ apenas no canal loja online.",
      "Aplicando técnicas de otimização do website e da dinâmica promocional conseguimos aumentar o AOV (cabaz médio) em cerca de 43%.",
    ],
    stats: [
      { value: "+1500%", label: "Vendas" },
      { value: "+64%", label: "Visitas" },
      { value: "350k€", label: "Faturação Anual" },
      { value: "+43%", label: "Cabaz Médio" },
    ],
    images: [],
  },
  {
    slug: "lead-generation-v1",
    headline: "+35% Leads",
    title: "Como Otimizámos a Geração de Leads deste Negócio",
    client: "Lead Gen",
    tag: "Google Ads",
    industry: "Saúde",
    accent: "#D4C4B0",
    summary:
      "Escalámos o investimento em 60% e aumentámos o volume de leads em mais de 35%, melhorando simultaneamente a sua qualificação.",
    body: [
      "Desde que este cliente iniciou a sua parceria connosco trabalhámos em otimizar as campanhas de Google Ads seguindo as boas práticas, tendo como objetivo não apenas o aumento do volume de leads, mas também da sua qualificação.",
      "Os resultados foram tão positivos que a empresa quis escalar o investimento em cerca de 60%.",
      "O que fez com que conseguíssemos aumentar o volume de leads em mais de 35%.",
      "Foi criada uma vasta lista de keywords negativas atualizada frequentemente o que permitiu aumentar a qualificação do tráfego bem como a qualificação das leads.",
      "Ajudámos também a melhorar o copy e a interface do website que contribuiu para melhorar a taxa de conversão, mas ainda mais importante, ajudou a melhorar a qualificação das leads.",
    ],
    stats: [
      { value: "+35%", label: "Volume de Leads" },
      { value: "+60%", label: "Escala de Investimento" },
      { value: "+9.13%", label: "Taxa de Conversão" },
      { value: "+18.29%", label: "Custo/Conversão" },
    ],
    images: [],
  },
  {
    slug: "ecommerce-luxo-meta-ads",
    headline: "+30% Vendas",
    title: "Como Escalámos um E-commerce de Luxo com Meta Ads",
    client: "E-commerce de Luxo",
    tag: "Meta Ads",
    industry: "E-commerce",
    accent: "#C4A882",
    summary:
      "No 1.º ano de trabalho conseguimos um aumento das vendas de cerca de 30%, crescimento acima do objetivo definido.",
    body: [
      "Desde que este cliente iniciou a sua parceria connosco trabalhámos em:",
      "Otimização do marketing-mix alocando mais orçamento aos canais com melhor performance.",
      "Otimização de campanhas de Meta Ads seguindo as boas práticas.",
      "Tendo conseguido resultados extraordinários no 1.º ano de trabalho, tendo obtido um aumento das vendas de cerca de 30% (crescimento acima do objetivo definido).",
    ],
    stats: [
      { value: "+30%", label: "Vendas" },
      { value: "228k€", label: "Vendas Brutas" },
      { value: "+29%", label: "Crescimento Anual" },
    ],
    images: [],
  },
  {
    slug: "ecommerce-tenis-meta-ads",
    headline: "+75% Vendas",
    title: "Como Escalámos um E-commerce com Meta Ads",
    client: "E-commerce",
    tag: "Meta Ads",
    industry: "E-commerce",
    accent: "#A8BFD4",
    summary:
      "No 1.º ano de trabalho conseguimos um aumento das vendas de cerca de 75%, crescimento acima do objetivo definido.",
    body: [
      "Desde que este cliente iniciou a sua parceria connosco trabalhámos em:",
      "Otimização do marketing-mix alocando mais orçamento aos canais com melhor performance.",
      "Otimização de campanhas de Meta Ads seguindo as boas práticas.",
      "Tendo conseguido resultados extraordinários no 1.º ano de trabalho, tendo obtido um aumento das vendas de cerca de 75% (crescimento acima do objetivo definido).",
    ],
    stats: [
      { value: "+75%", label: "Vendas" },
      { value: "47.9k€", label: "Vendas Brutas" },
      { value: "+75%", label: "Crescimento Anual" },
    ],
    images: [],
  },
  {
    slug: "ecommerce-google-ads-v1",
    headline: "+40% Vendas",
    title: "Como Escalámos um E-commerce com Google Ads",
    client: "E-commerce",
    tag: "Google Ads",
    industry: "E-commerce",
    accent: "#8DB5A0",
    summary:
      "No 1.º ano de trabalho conseguimos um aumento das vendas de cerca de 40%, ou seja, cerca de 153 mil € de crescimento.",
    body: [
      "Desde que este cliente iniciou a sua parceria connosco trabalhámos em:",
      "Otimização de campanhas de Google Ads seguindo as boas práticas.",
      "Tendo conseguido resultados extraordinários no 1.º ano de trabalho, tendo obtido um aumento das vendas de cerca de 40%, ou seja, cerca de 153 mil € (crescimento acima do objetivo definido).",
    ],
    stats: [
      { value: "+40%", label: "Vendas" },
      { value: "538k€", label: "Vendas Brutas 2024" },
      { value: "+153k€", label: "Crescimento" },
      { value: "385k€", label: "Vendas Brutas 2023" },
    ],
    images: [],
  },
  {
    slug: "seo-ortopedista-website",
    headline: "1ª Página Google",
    title: "Como Posicionámos uma Ortopedista na 1.ª Página do Google com SEO",
    client: "Ortopedista",
    tag: "SEO",
    industry: "Saúde",
    accent: "#A3C4BC",
    summary:
      "Duas semanas após a renovação do website, o site já aparecia na 1.ª página do Google para a keyword principal do setor.",
    body: [
      "A cliente em questão é uma ortopedista.",
      "Foi estabelecido um acordo para proceder à renovação do seu website, que se encontrava desatualizado e não aderia às boas práticas em termos de usabilidade, conversão e otimização para motores de pesquisa (SEO).",
      "O website passou por um processo de remodelação que o tornou significativamente mais bonito e moderno, sendo que também se encontra otimizado para SEO.",
      "Cerca de duas semanas após a conclusão do projeto de renovação do website, já pudemos constatar resultados em termos da visibilidade orgânica.",
      'Destaca-se, em particular, o facto de termos conseguido posicionar o website na primeira página dos resultados orgânicos para a palavra-chave principal do setor, "ortopedista ombro".',
    ],
    stats: [
      { value: "5.6", label: "Posição Média" },
      { value: "39", label: "Impressões" },
      { value: "7.7%", label: "CTR Médio" },
      { value: "3", label: "Cliques" },
    ],
    images: [],
  },
  {
    slug: "ecommerce-adega-labrugeira",
    headline: "E-COMMERCE · UX/UI",
    title: "Como Lançámos o Primeiro E-Commerce da Adega da Labrugeira do Zero",
    client: "Adega / Comércio de Vinhos",
    tag: "UX/Web Design",
    industry: "Comércio de Vinhos",
    accent: "#8B7355",
    summary:
      "Conceptualização e lançamento de um e-commerce internacional do zero, incluindo definição de processos internos, estruturação da experiência de compra e design do website.",
    body: [
      "A cliente em questão é a Adega da Labrugeira, um produtor de vinhos sediado em Alenquer, Portugal, com história e identidade própria, mas sem qualquer presença no comércio digital. Clique aqui para Visitar.",
      "Foi estabelecido um acordo para acompanhar o projeto na sua totalidade, desde a conceptualização até ao lançamento, incluindo a definição de processos internos, a estruturação da experiência de compra e o design do website. O ponto de partida era uma tela em branco: sem loja, sem fluxos definidos, sem presença online transacional.",
      "O projeto passou por um processo de descoberta aprofundado, onde foram mapeadas as necessidades do negócio, os perfis de cliente e as particularidades do setor vitivinícola. Uma das premissas centrais do projeto foi a necessidade de alcançar um público internacional, pelo que a experiência foi desenhada desde o início para responder às expectativas de utilizadores de diferentes mercados e culturas. Com base nessa investigação, foram definidos os fluxos de utilizador, a arquitetura de informação e os processos operacionais necessários para suportar uma loja online funcional e escalável.",
      "O resultado foi um website centrado no utilizador, com uma experiência de compra clara e fluida, visualmente alinhada com a identidade da adega e optimizada para conversão, tanto para o consumidor nacional como para o internacional.",
      "Destaca-se, em particular, o facto de termos acompanhado o cliente não apenas no design, mas também na definição de como gerir encomendas, comunicar com clientes e operar a loja, transformando um negócio tradicional de Alenquer num negócio também global.",
      "Clique aqui para Visitar.",
    ],
    stats: [
      { value: "0→1", label: "Do Zero ao Lançamento" },
      { value: "Internacional", label: "Alcance" },
      { value: "100%", label: "UX/UI Personalizado" },
      { value: "Completo", label: "Acompanhamento" },
    ],
    images: ["../assets/asset/c669fe924c323acfcfce5a41b8205a0ef244752c.png"],
  },
  {
    slug: "ux-seo-dra-barbara-campos",
    headline: "UX/UI · SEO",
    title:
      "Como Ajudámos a Dra. Bárbara Campos a Chegar Diretamente aos Seus Pacientes",
    client: "Ortopedia e Traumatologia | Lisboa",
    tag: "UX/Web Design",
    industry: "Saúde",
    accent: "#3DBAB8",
    summary:
      "Criação de presença digital própria com estratégia SEO + IA, resultando em aumento significativo de leads diretos e posicionamento como especialista de referência.",
    body: [
      "A cliente em questão é a Dra. Bárbara Campos, ortopedista e traumatologista em Lisboa, especializada em patologia do ombro. Apesar da sua reputação clínica e das suas ligações a instituições de referência, a sua visibilidade dependia quase exclusivamente do marketing hospitalar, o que limitava o controlo sobre a sua própria presença e alcance junto dos pacientes.",
      "Clique aqui para Visitar.",
      "Foi estabelecida uma proposta para criar uma presença digital própria, com o objetivo de a posicionar como especialista de referência diretamente junto de quem procura cuidados na sua área. O ponto de partida foi perceber de que forma os pacientes pesquisam, avaliam e escolhem um especialista e como é que a Dra. Bárbara Campos poderia aparecer nesse momento de forma credível e relevante.",
      "O projeto resultou num website centrado na geração de leads, com uma estrutura de informação pensada para responder às dúvidas concretas dos pacientes, transmitir confiança e facilitar o contacto direto. A arquitetura de conteúdo foi desenhada em torno das patologias e cirurgias tratadas, criando páginas aprofundadas que estabelecem autoridade temática.",
      "O website foi desenvolvido com uma estratégia de SEO técnico e de conteúdo, bem como de otimização para motores de inteligência artificial, incluindo ferramentas como ChatGPT, Perplexity e Google AI Overviews, garantindo visibilidade não só nos resultados de pesquisa tradicionais, mas também nas respostas geradas por IA que cada vez mais influenciam as decisões dos utilizadores.",
      "O resultado foi um aumento significativo de contactos diretos de pacientes e um reforço claro do posicionamento da Dra. Bárbara Campos como especialista de referência em patologia do ombro em Lisboa, independentemente dos canais hospitalares.",
    ],
    stats: [
      { value: "Digital", label: "Presença Própria" },
      { value: "SEO + IA", label: "Otimização" },
      { value: "Lead Gen", label: "Estratégia" },
      { value: "Referência", label: "Posicionamento" },
    ],
    images: ["../assets/asset/b5fb7ee6a9953b7b9598b6f1f78b99d4d5879bce.png"],
  },
];
