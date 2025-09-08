import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/Navbar/NavBar";
import { faChevronCircleRight, faChevronLeft, faChevronRight, faPaperPlane, faPlus, faScrewdriver, faTimes, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../../components/Icons/CustomIcon";
import { useState } from "react";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import.meta.env.VITE_SERVICE_ID
import.meta.env.VITE_TEMPLATE_ID
import.meta.env.VITE_USER_ID

interface Service {
    area?: string;
    type?: string;
    laudoId?: string | null;
    material?: string | null;
}


interface Quote {
    step: number;
    services: Service[];
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    message?: string | null;
}



function Quote() {

    const [newService, setService] = useState<Service>();
    const [quote, setQuote] = useState<Quote>({ step: 1, services: [] });


    window.scrollTo(0, 0);


    const normas = [
        { value: "NR-01", label: "NR-01 - Disposições Gerais e Gerenciamento de Riscos Ocupacionais (GRO)." },
        { value: "NR-04", label: "NR-04 - Serviços Especializados em Engenharia de Segurança e Medicina do Trabalho (SESMT)." },
        { value: "NR-06", label: "NR-06 - Equipamento de Proteção Individual (EPI)." },
        { value: "NR-10", label: "NR-10 - Segurança em Instalações e Serviços em Eletricidade (quando o engenheiro atua em equipamentos eletromecânicos)." },
        { value: "NR-11", label: "NR-11 - Transporte, Movimentação, Armazenagem e Manuseio de Materiais (guindastes, empilhadeiras, talhas, etc.)." },
        { value: "NR-12", label: "NR-12 - Segurança no Trabalho em Máquinas e Equipamentos (muito ligada ao engenheiro mecânico)." },
        { value: "NR-13", label: "NR-13 - Caldeiras, Vasos de Pressão e Tubulações (atribuição típica do Eng. Mecânico)." },
        { value: "NR-17", label: "NR-17 - Ergonomia (aplicável em análise de máquinas e postos de trabalho)." },
        { value: "NR-20", label: "NR-20 - Inflamáveis e Combustíveis (tanques, bombas e tubulações)." },
        { value: "NR-23", label: "NR-23 - Proteção contra Incêndios (extintores, sistemas fixos)." },
        { value: "NR-33", label: "NR-33 - Espaços Confinados (intervenções em tanques, tubulações, caldeiras)." },
        { value: "NR-34", label: "NR-34 - Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval." },
        { value: "NR-35", label: "NR-35 - Trabalho em Altura (instalação de tubulações e equipamentos)." },
        { value: "CONFEA-218-1973", label: "Resolução CONFEA nº 218/1973" },
        { value: "RES-1010-2005", label: "Resolução nº 1.010/2005" },
        { value: "RES-1073-2016", label: "Resolução nº 1.073/2016" },
        { value: "DN-95-2012", label: "Decisão Normativa nº 95/2012" },
        { value: "RES-1121-2019", label: "Resolução nº 1.121/2019 - Fiscalização do exercício profissional em segurança do trabalho." },
        { value: "RES-1122-2019", label: "Resolução nº 1.122/2019 - Complementa atribuições de Engenheiros Mecânicos em inspeção e manutenção industrial." },
        { value: "RES-1129-2020", label: "Resolução nº 1.129/2020 - Atualiza atribuições específicas de modalidades." }
    ];

    const materials = [
        "sistema de água potável",
        "sistema de redes de águas pluviais",
        "instalação de sistema de esgoto sanitário",
        "ligação individual de rede de água",
        "ligação individual de rede de esgoto",
        "central de gás",
        "tubulação de gás",
        "localização de equipamento e rede de instalação de vapor",
        "localização de equipamento e rede de instalação à vácuo",
        "instalação da tubulação de vapor",
        "ligação individual de rede de gás",
        "instalação da tubulação de vácuo",
        "instalação de hidrantes",
        "instalação de sprinkler",
        "instalação hidráulica para prevenção e combate a incêndio",
        "localização de sprinkler",
        "sinalização de emergência em edificação",
        "prevenção e combate a incêndio e pânico",
        "estrutura metálica / (sem complemento)",
        "estrutura metálica / para edificação",
        "estrutura metálica / para edificação provisória",
        "estrutura metálica / para andaimes",
        "estrutura metálica / para escoramentos",
        "estrutura metálica / para palcos",
        "estrutura metálica / para arquibancadas",
        "estrutura metálica / para fins diversos",
        "desmontagem de estrutura metálica / (sem complemento)",
        "desmontagem de estrutura metálica / para edificação",
        "desmontagem de estrutura metálica / para edificação provisória",
        "desmontagem de estrutura metálica / para escoramentos",
        "desmontagem de estrutura metálica / para palcos",
        "desmontagem de estrutura metálica / para arquibancadas",
        "reforço de estruturas metálicas",
        "reparo de estruturas metálicas",
        "estrutura de madeira",
        "desmontagem/demolição de estrutura de madeira",
        "reforço de estruturas em madeira",
        "reparo de estruturas em madeira",
        "estrutura de outros materiais",
        "desmontagem de estrutura de outros materiais",
        "estrutura de materiais mistos",
        "reforço de estruturas mistas",
        "reparo de estruturas mistas",
        "casca",
        "silo",
        "dutos de gás",
        "dutos de óleos",
        "sistema de transporte / ferroviário",
        "sistema de transporte / metroviário",
        "rede de hidrantes",
        "sistema de abastecimento de água / captação superficial de água",
        "sistema de abastecimento de água / adução de água",
        "sistema de abastecimento de água / instalações hidráulicas em sistemas de abastecimento de água",
        "sistema de abastecimento de água / tanques ou reservatórios de água",
        "sistema de abastecimento de água / redes de distribuição de água",
        "sistema de abastecimento de água / rede de hidrantes",
        "sistema de esgoto/resíduos líquidos / tratamento de efluentes líquidos industriais",
        "sistema de esgoto/resíduos líquidos / estação de tratamento de efluentes líquidos domésticos",
        "sistema de esgoto/resíduos líquidos / estação de tratamento de efluentes líquidos industriais",
        "sistema de esgoto/resíduos líquidos / rede coletora de efluentes líquidos industriais",
        "coleta de resíduos sólidos / (sem complemento)",
        "coleta de resíduos sólidos / domiciliares e de limpeza urbana",
        "coleta de resíduos sólidos / industriais",
        "transporte de resíduos sólidos / (sem complemento)",
        "transporte de resíduos sólidos / domiciliares e de limpeza urbana",
        "transporte de resíduos sólidos / industriais",
        "sistema de esgoto/resíduos sólidos / (sem complemento)",
        "sistema de esgoto/resíduos sólidos / incineração de resíduos sólidos de limpeza urbana",
        "sistema de esgoto/resíduos sólidos / incineração de resíduos sólidos industriais",
        "sistema de esgoto/resíduos sólidos / usina de reciclagem de resíduos sólidos",
        "sistema de esgoto/resíduos sólidos / plano de gerenciamento de resíduos",
        "controle ambiental / poluição",
        "controle ambiental / controle de poluição ambiental",
        "monitoramento ambiental",
        "riscos ao meio ambiente",
        "viabilidade ambiental",
        "adequação ambiental",
        "auditoria ambiental",
        "controle de qualidade ambiental",
        "estudos ambientais",
        "impacto ambiental",
        "educação ambiental",
        "modelagem ambiental",
        "planejamento ambiental",
        "sistema de geração de energia / (sem complemento)",
        "sistema de geração de energia / hidroelétrica",
        "sistema de geração de energia / eólica",
        "sistema de geração de energia / nuclear",
        "sistema de geração de energia / termoelétrica",
        "sistema de geração de energia / biogeração",
        "sistema de geração de energia / turbogeração",
        "sistema de geração de energia / hidrocinética",
        "eficiência energética / por cogeração",
        "dispositivos biomecânicos",
        "componentes biomecânicos",
        "sistema de controle e automação / (sem complemento)",
        "sistema de controle e automação / de processos",
        "programação",
        "desenvolvimento de software",
        "sistemas de software",
        "processos mecânicos de fabricação / (sem complemento)",
        "processos mecânicos de fabricação / de tubulações",
        "processos mecânicos de fabricação / de reservatórios",
        "processos mecânicos de fabricação / de tanques",
        "processos mecânicos de fabricação / de dutos",
        "processos mecânicos de fabricação / de caçamba",
        "processos mecânicos de fabricação / de comporta",
        "processos mecânicos de fabricação / de peças, componentes, artefatos metálicos",
        "processos mecânicos de fabricação / de peças, componentes, artefatos não metálicos",
        "processos mecânicos de fabricação / de material rodante",
        "processos mecânicos de fabricação / por usinagem",
        "processos mecânicos de fabricação / por soldagem",
        "processos mecânicos de fabricação / por conformação",
        "processos mecânicos de fabricação / por metalurgia do pó",
        "processos mecânicos de fabricação / por fundição",
        "processos mecânicos de fabricação / de estrutura metálica",
        "sistemas térmicos / (sem complemento)",
        "sistemas térmicos / de autoclaves",
        "sistemas térmicos / de fornos",
        "sistemas térmicos / de cogeração de energia",
        "sistemas térmicos / de condicionamento de ar",
        "sistemas térmicos / de refrigeração",
        "sistemas térmicos / de ventilação",
        "sistemas térmicos / de aquecimento solar",
        "sistemas térmicos / de aquecimento",
        "sistemas térmicos / condensador",
        "sistemas térmicos / caldeira",
        "sistemas térmicos / biodigestor",
        "sistemas térmicos / câmara frigorífica",
        "sistemas térmicos / isolamento térmico",
        "sistemas térmicos / motores de combustão interna",
        "pmoc",
        "usinas termoelétricas",
        "trocador de calor",
        "torre de resfriamento",
        "acessórios de tubulação",
        "cilindro/vaso de pressão para gases",
        "cilindro/vaso de pressão para líquidos",
        "cilindro/vaso de pressão para extintor de incêndio",
        "sistema de fluidos / (sem complemento)",
        "sistema de fluidos / de transmissão de força hidráulica",
        "sistema de fluidos / refrigerantes",
        "sistema de fluidos / lubrificantes",
        "recarga de extintores",
        "dutos industriais / (sem complemento)",
        "dutos industriais / de gases",
        "dutos industriais / de líquidos",
        "gasoduto",
        "oleoduto",
        "mineroduto",
        "árvore de natal / (sem complemento)",
        "árvore de natal / molhada",
        "árvore de natal / seca/convencional",
        "riser",
        "rede de sprinklers",
        "bomba / (sem complemento)",
        "bomba / hidráulica",
        "bomba / de abastecimento de combustível",
        "bomba / de vácuo",
        "compressor",
        "dispositivos de expansão",
        "central de distribuição de gás",
        "central de produção, transformação e armazenamento de gás",
        "sistemas e redes / de ar comprimido",
        "sistemas e redes / de gás natural",
        "sistemas e redes / de GLP",
        "sistemas e redes / de gases medicinais",
        "sistemas e redes / de vácuo",
        "sistemas e redes / hidráulicos",
        "turbina / (sem complemento)",
        "turbina / eólica",
        "turbina / hidráulica",
        "turbina / a vapor",
        "turbina / a gás",
        "calibração de instrumentos mecânicos",
        "calibração de equipamentos mecânicos",
        "controle dimensional e geométrico",
        "modificações em veículos automotores / (sem complemento)",
        "modificações em veículos automotores / adaptação de chassi",
        "modificações em veículos automotores / conversão para GNV",
        "segurança veicular",
        "emissão de gases poluentes e de ruído em veículos automotores",
        "máquinas agrícolas / (sem complemento)",
        "máquinas agrícolas / tratores",
        "máquinas agrícolas / implementos",
        "veículos automotores / (sem complemento)",
        "veículos automotores / de transporte coletivo rodoviário",
        "veículos automotores / de transporte coletivo sobre trilhos",
        "veículos automotores / automóveis",
        "veículos automotores / caminhões",
        "veículos automotores / motocicletas",
        "máquinas pesadas",
        "implementos rodoviários",
        "transportadores e elevadores / (sem complemento)",
        "transportadores e elevadores / escadas rolantes",
        "transportadores e elevadores / esteiras rolantes",
        "transportadores e elevadores / planos inclinados",
        "transportadores e elevadores / teleféricos",
        "transportadores e elevadores / correias transportadoras",
        "transportadores e elevadores / ponte rolante",
        "transportadores e elevadores / pórtico rolante",
        "transportadores e elevadores / plataforma elevatória",
        "transportadores e elevadores / guindastes",
        "transportadores e elevadores / grua",
        "transportadores e elevadores / monotrilhos",
        "elevadores / (sem complemento)",
        "elevadores / de passageiros",
        "elevadores / de carga",
        "elevadores / de obra",
        "elevadores / de monta carga",
        "elevadores / individual ('man lift')",
        "elevadores / automotivos",
        "sistemas de acionamento / (sem complemento)",
        "sistemas de acionamento / hidráulico",
        "sistemas de acionamento / pneumático",
        "sistemas de acionamento / mecânico",
        "equipamentos eletromecânicos odonto",
        "equipamentos mecânicos odonto",
        "equipamentos mecânicos / (sem complemento)",
        "equipamentos mecânicos / de bate",
        "equipamentos mecânicos / de brocas",
        "equipamentos mecânicos / de sistemas de freio",
        "equipamentos mecânicos / de parques de diversões",
        "equipamentos mecânicos / de movimentação de terra",
        "equipamentos eletromecânicos / (sem complemento)",
        "equipamentos eletromecânicos / de parques de diversões",
        "equipamentos para tratamento de efluentes",
        "eletrodomésticos",
        "gerador de energia elétrica",
        "máquinas operatrizes",
        "perfuratrizes",
        "proteção catódica",
        "controle de ruídos e vibrações",
        "instalações mecânicas industriais",
        "requalificação de cilindros / (sem complemento)",
        "requalificação de cilindros / GNV",
        "requalificação de cilindros / GLP",
        "requalificação de cilindros / extintores de incêndio",
        "ensaios de equipamentos, dispositivos e componentes / (sem complemento)",
        "ensaios de equipamentos, dispositivos e componentes / mecânicos",
        "ensaios de equipamentos, dispositivos e componentes / eletromecânicos",
        "ensaios de equipamentos, dispositivos e componentes / magnéticos",
        "ensaios de equipamentos, dispositivos e componentes / ópticos",
        "testes de estanqueidade / (sem complemento)",
        "testes de estanqueidade / em equipamentos",
        "testes de estanqueidade / em tubulações/dutos",
        "equipamentos de prevenção de transientes hidráulicos",
        "equipamentos para os sistemas de tratamento de água",
        "tubos, dutos e válvulas de bloqueio, retenção e controle",
        "equipamentos de bombeamento",
        "equipamentos para os sistemas de tratamento de esgoto/resíduos líquidos",
        "mecânica fina / (sem complemento)",
        "mecânica fina / ferramentas de precisão",
        "mecânica fina / microcomponentes mecânicos",
        "metalurgia extrativa / (sem complemento)",
        "metalurgia extrativa / amostragem de minérios",
        "metalurgia extrativa / amostragem geoquímica",
        "metalurgia extrativa / obtenção de metais",
        "metalurgia extrativa / carregamento de rochas ou minerais",
        "metalurgia extrativa / blendagem de minérios",
        "reciclagem de materiais metálicos",
        "produção da indústria metalúrgica / (sem complemento)",
        "produção da indústria metalúrgica / de produtos metálicos",
        "produção da indústria metalúrgica / de ligas metálicas e não",
        "produção da indústria metalúrgica / de materiais metálicos reciclados",
        "produção da indústria metalúrgica / de compósitos",
        "produção da indústria metalúrgica / de pós metálicos",
        "métodos e processos de fabricação metalúrgicos / (sem complemento)",
        "métodos e processos de fabricação metalúrgicos / de fundição",
        "métodos e processos de fabricação metalúrgicos / de soldagem",
        "métodos e processos de fabricação metalúrgicos / de conformação mecânica",
        "métodos e processos de fabricação metalúrgicos / de tratamento térmicos e termoquímicos",
        "métodos e processos de fabricação metalúrgicos / de tratamento de superfície",
        "métodos e processos de fabricação metalúrgicos / de sinterização",
        "métodos e processos de fabricação metalúrgicos / de trefilação",
        "métodos e processos de fabricação metalúrgicos / de laminação",
        "métodos e processos de fabricação metalúrgicos / de extrusão",
        "métodos e processos de fabricação metalúrgicos / de estampagem",
        "métodos e processos de fabricação metalúrgicos / de forja",
        "equipamentos, dispositivos e componentes das indústrias minero",
        "fornos destinados  a indústria metalúrgica",
        "equipamentos para metalografia",
        "ensaios de equipamentos, dispositivos e componentes das indústrias minero",
        "combustíveis metalúrgicos",
        "arqueação",
        "sistemas estruturais navais / (sem complemento)",
        "sistemas estruturais navais / estruturas metálicas em embarcações",
        "sistemas estruturais navais / tubulações para líquidos em embarcações",
        "sistemas estruturais navais / tubulações para gases em embarcações",
        "sistemas estruturais navais / reservatórios em embarcações de metal",
        "sistemas estruturais navais / reservatórios em embarcações de outros materiais",
        "sistemas estruturais navais / dutos de embarcações para líquidos",
        "sistemas estruturais navais / dutos de embarcações para gases",
        "autoclaves em embarcações",
        "boilers em embarcações",
        "sistemas de condicionamento de ar em embarcações",
        "sistemas de refrigeração em embarcações",
        "sistemas de ventilação em embarcações",
        "sistemas de aquecimento em embarcações",
        "trocador de calor em embarcações",
        "torre de resfriamento em embarcações",
        "condensador",
        "caldeira em embarcações",
        "fornalha em embarcações",
        "superaquecedor em embarcações",
        "economizador em embarcações",
        "aquecedor de ar em embarcações",
        "câmara frigorífica em embarcações",
        "chiller em embarcações",
        "fan coil em embarcações",
        "máquina de absorção / (sem complemento)",
        "máquina de absorção / de brometo de lítio para embarcações",
        "máquina de absorção / de amônia para embarcações",
        "isolamento térmico em embarcações",
        "motores de combustão interna em embarcações",
        "medidor de vazão de líquidos em embarcações",
        "medidor de vazão de gases em embarcações",
        "centrífuga em embarcações",
        "pressostato em embarcações",
        "válvula em embarcações",
        "acessórios de tubulação em embarcações",
        "cilindro/vaso de pressão / (sem complemento)",
        "cilindro/vaso de pressão / para gases em embarcações",
        "cilindro/vaso de pressão / para líquidos em embarcações",
        "cilindro/vaso de pressão / para outros produtos em embarcações",
        "cilindro/vaso de pressão / para extintor de incêndio em embarcações",
        "sistema de fluidos em embarcações / (sem complemento)",
        "sistema de fluidos em embarcações / transmissão de força hidráulica",
        "sistema de fluidos em embarcações / refrigerantes",
        "sistema de fluidos em embarcações / lubrificantes",
        "dutos industrais em embarcações / (sem complemento)",
        "dutos industrais em embarcações / de gases",
        "dutos industrais em embarcações / de água",
        "dutos industrais em embarcações / de óleo",
        "propulsores / (sem complemento)",
        "propulsores / hidráulica em embarcações",
        "bomba em embarcações / (sem complemento)",
        "bomba em embarcações / de pneumática",
        "bomba em embarcações / de abastecimento de combustível",
        "sistemas e redes fluidodinâmicos para embarcações / (sem complemento)",
        "sistemas e redes fluidodinâmicos para embarcações / ar comprimido",
        "sistemas e redes fluidodinâmicos para embarcações / gás natural",
        "sistemas e redes fluidodinâmicos para embarcações / GLP",
        "sistemas e redes fluidodinâmicos para embarcações / vácuo",
        "sistemas e redes fluidodinâmicos para embarcações / hidráulicos",
        "turbina para embarcações / (sem complemento)",
        "turbina para embarcações / hidráulica",
        "turbina para embarcações / a vapor",
        "turbina para embarcações / a gás",
        "tecnologia naval / controle de ruídos e/ou vibrações  em embarcações",
        "tecnologia naval / instalações mecânicas navais",
        "tecnologia naval / requalificação de cilindros da área naval",
        "tecnologia naval / testes de estanqueidade em equipamentos navais",
        "tecnologia naval / testes de estanqueidade em tubulações/dutos navais",
        "sistemas térmicos em aeronaves / (sem complemento)",
        "sistemas térmicos em aeronaves / de condicionamento de ar",
        "sistemas térmicos em aeronaves / de refrigeração",
        "sistemas térmicos em aeronaves / de ventilação",
        "sistemas térmicos em aeronaves / de exaustão",
        "sistemas térmicos em aeronaves / de aquecimento",
        "sistemas térmicos em aeronaves / de proteção anti",
        "sistemas térmicos em aeronaves / de proteção antifogo",
        "sistemas térmicos em aeronaves / de condensador",
        "processos de carga e recarga de extintores",
        "produtos da indústria de materiais / metálicos",
        "produtos da indústria de materiais / cerâmicos",
        "produtos da indústria de materiais / compósitos",
        "atamento térmico",
        "ciclagem de materiais / (sem complemento)",
        "ciclagem de materiais / poliméricos",
        "ciclagem de materiais / metálicos",
        "ciclagem de materiais / cerâmicos",
        "ciclagem de materiais / compósitos",
        "caracterização de materiais / (sem complemento)",
        "caracterização de materiais / poliméricos",
        "caracterização de materiais / metálicos",
        "caracterização de materiais / cerâmicos",
        "caracterização de materiais / compósitos",
        "seleção de materiais / (sem complemento)",
        "seleção de materiais / cerâmicos",
        "seleção de materiais / poliméricos",
        "seleção de materiais / metálicos",
        "seleção de materiais / compósitos",
        "processamento de materiais / (sem complemento)",
        "processamento de materiais / cerâmicos",
        "ensaios de materiais",
        "ensaio físico para controle tecnológico",
        "ensaio químico para controle tecnológico",
        "indústria de materiais metálicos",
        "indústria de materiais cerâmicos",
        "geração/transmissão de calor para fins rurais",
        "geração/trasmissão de frio para fins rurais",
        "umidificadores agroindustriais",
        "aquecedores agroindustriais",
        "resfriadores agroindustriais",
        "sensores agroindustriais",
        "ventiladores agroindustriais",
        "sistema computacional agroindustriais",
        "máquina para fins rurais",
        "implemento para fins rurais",
        "equipamentos para fins rurais",
        "motor para fins rurais",
        "controle de riscos",
        "trabalho em altura (NR35)",
        "Programa de Gerenciamento de Riscos (PGR)",
        "máquinas e equipamentos (NR12)",
        "segurança em caldeiras e/ou vasos de pressão (NR13)",
        "segurança em redes e tubulações de fluidos, gases e vapores",
        "especificação de saídas de emergência",
        "especificação de escadas de emergência",
        "especificação de porta corta fogo",
        "sinalização de emergência",
        "conforto térmico",
        "plano de emergência e catástrofe",
        "análise de catástrofe",
        "plano de contingência",
        "teste hidrostático de extintores",
        "localização de equipamento de combate a incêndio",
        "especificação de sistema de alarme de incêndio",
        "especificação de sistema de detecção de incêndio",
        "Relatório de Impacto de Vizinhança Ambiental",
        "compatibilização de projetos",
        "ponto de ancoragem / (sem complemento)",
        "ponto de ancoragem / para linha de vida",
        "mapa",
        "memorial descritivo",
        "controle de materiais  / (sem complemento)",
        "controle de materiais  / de acabamento",
        "controle de materiais  / de revestimento",
        "linha de vida",
        "andaime  / (sem complemento)",
        "andaime  / suspenso",
        "andaime  / fachamento",
        "painel publicitário",
        "circuito de geração / tomada d’água",
        "circuito de geração / condutos forçados",
        "circuito de geração / casa de força",
        "sistema de esgoto/resíduos líquidos / estação elevatória de esgoto",
        "sistema de esgoto/resíduos sólidos / de aproveitamento de resíduos industriais",
        "tratamento de resíduos sólidos",
        "destinação de resíduos sólidos / (sem complemento)",
        "destinação de resíduos sólidos / domiciliares e de limpeza urbana",
        "destinação de resíduos sólidos / industriais",
        "destinação de resíduos sólidos / de serviços de saúde",
        "destinação de resíduos sólidos / da construção civil",
        "emissões atmosféricas",
        "Plano de Controle Ambiental",
        "Relatório de Controle Ambiental",
        "Estudo de Impacto Ambiental",
        "Relatório de Impacto Ambiental",
        "certificação ambiental",
        "reserva ambiental",
        "indicadores ambientais",
        "estudo de impacto de vizinhança",
        "cilindro/vaso de pressão para gases / categoria I",
        "cilindro/vaso de pressão para gases / categoria II",
        "cilindro/vaso de pressão para gases / categoria III",
        "cilindro/vaso de pressão para gases / categoria IV",
        "cilindro/vaso de pressão para gases / categoria v",
        "cilindro/vaso de pressão para líquidos / categoria I",
        "cilindro/vaso de pressão para líquidos / categoria II",
        "cilindro/vaso de pressão para líquidos / categoria III",
        "cilindro/vaso de pressão para líquidos / categoria IV",
        "cilindro/vaso de pressão para líquidos / categoria v",
        "medições anemométricas",
        "válvula de segurança",
        "posto de combustível",
        "sistema de filtragem",
        "tubulação",
        "tubulação / para combustível",
        "unidades de processo",
        "tanque para combustível",
        "mangueira de combate à incêndio",
        "empilhadeira",
        "munck",
        "reboques",
        "transformação veicular",
        "trio elétrico",
        "plano de riggin",
        "talha",
        "transportadores de corrente",
        "elevadores de caneca",
        "execução de içamento",
        "contêiners",
        "esteiras aéreas",
        "transportador helicoidal",
        "elevador de caçambas",
        "transportador de corrente",
        "sistemas de bombeamento de combustível",
        "bomba de combustível",
        "caixa separadora (sistemas de filtragem de resíduos líquidos)",
        "instalações industriais",
        "máquinas e equipamentos para industria da madeira",
        "máquinas e equipamentos para industria florestal",
        "equipamento para indústria alimentícia",
        "equipamentos e sistemas para nr",
        "máquinas e equipamentos para fabricação de artigos de plástico",
        "máquinas e equipamentos para industria textil",
        "máquinas e equipamentos industriais",
        "dispositivos de proteção",
        "tela fachadeira",
        "trava quedas",
        "caracterização de materiais de metalurgia / (sem complemento)",
        "caracterização de materiais de metalurgia / ferrosos",
        "caracterização de materiais de metalurgia / não ferrosos",
        "caracterização de materiais de metalurgia / ligas",
        "caracterização de materiais de metalurgia / compósitos",
        "seleção de materiais de metalurgia / (sem complemento)",
        "seleção de materiais de metalurgia / ferrosos",
        "seleção de materiais de metalurgia / não",
        "seleção de materiais de metalurgia / ligas",
        "seleção de materiais de metalurgia / compósitos",
        "compressor em embarcação",
        "tratamento de materiais / (sem complemento)",
        "tratamento de materiais / metálicos",
        "controle de materiais de acabamento/revestimento"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        let value = e.target.value.replace(/\D/g, "");
        // Formatação condicional
        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length <= 10) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, value.length - 4)}-${value.slice(-4)}`;
        } else {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }

        setQuote((quote) => ({
            ...quote,
            phone: value,

        }));
    };


    const handleArea = (area: string) => {
        setService(service => service = { ...service, area })
    }

    const handleType = (type: string) => {
        setService(service => service = { ...service, type })
    }

    const handleMaterial = (event: any) => {
        setService(service => service = { ...service, material: event.target.value, laudoId: null })
    }
    const handleLaudo = (event: any) => {
        setService(service => service = { ...service, laudoId: event.target.value, material: null })
    }

    const handleStepQuote = (step: number, addService?: boolean) => {
        setQuote(quote =>
            addService && newService
                ? { ...quote, step, services: [...quote.services, newService] }
                : { ...quote, step }
        );

        if (addService)
            setService(service => service = {});
    }

    const handleQuote = (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name") as string | null;
        const phone = formData.get("phone") as string | null;
        const email = formData.get("email") as string | null;
        const message = formData.get("message") as string | null;


        if (!quoteIsValid({ services: quote.services, name, email, phone, step: quote.step })) {
            alert('Preencha os campos necessários');
        }

        setQuote((quote) => ({
            ...quote,
            name: name?.trim(),
            email,
            phone,
            message,
        }));

        sendEmail({ services: quote.services, name, email, phone, message, step: quote.step });
    }



    const handleRemoveService = (idx: number) => {
        let q = quote;
        q.services.splice(idx, 1);
        if (confirm("Clique em ok para confirmar a remoção deste serviço")) {
            setQuote((quote) => ({
                ...quote,
                services: q.services
            }));
        }
    }


    const getLaudoLabel = (laudoId: string) => {
        return normas.find(n => n?.value == laudoId)?.label;
    };

    const newServiceIsValid = (): boolean => {
        return (!!newService && !!newService.area && !!newService.type && (
            (newService.type == 'laudo' && !!newService.laudoId) ||
            (newService.type != 'laudo' && !!newService.material)
        )) ? true : false;
    }


    const quoteIsValid = (q?: Quote) => {

        if (!!q)
            return !!q.name &&
                !!q.email &&
                !!q.phone &&
                !!q.services && q.services.length > 0;




        return !!quote.name &&
            !!quote.email &&
            !!quote.phone &&
            !!quote.services && quote.services.length > 0;
    }

    const sendEmail = ({ name, email, phone, message, services }: Quote) => {
        // Objeto com os dados que você quer enviar
        const templateParams = {
            subject: 'Solcitação de Orçamento',
            name,
            email,
            phone,
            message,
            services: services.map(s => {
                return `Área: ${(s.area == 'mechanical-engineering' ? 'Engenharia Mencanica' : 'Segurança no Trabalho')}, 
                Tipo de Serviço: ${s.type == 'laudo' ? ('Laudo -' + getLaudoLabel(s.laudoId as string)) : ''}${s.type == 'project' ? ('Projeto - ' + s.material) : ''}${s.type == 'equipment' ? ('Equipamento - ' + s.material) : ''}`
            }).join("\n\n")

        };

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_USER_ID,
        )
            .then((result) => {
                console.log("Email enviado:", result.text);
                setQuote(quote => quote = { ...quote, step: 3 })
            })
            .catch((error) => {
                console.log("Erro ao enviar email:", error.text);
            });
    };

    return (
        <main className='bg-[var(--current-bg-color)] text-[var(--current-color)] min-h-screen flex flex-col justify-between'>
            <NavBar isNotHome={true} ></NavBar>
            <section className="w-full  pt-[120px]   flex flex-col items-center space-y-15">


                {quote.step == 1 && (
                    <div className="lg:w-3/6 md:w-5/6 w-[90%]   border-1 border-[var(--current-bg-color-secondary)] p-8 space-y-8    rounded-md">
                        {/* <div className="flex items-center justify-between border-b border-[var(--current-bg-color-secondary)]">
                            <p className="text-lg font-semibold text-right">Preencha as informações sobre o serviço:</p>
                            <p className="text-lg font-semibold text-right">Passo 1 de 2</p>
                        </div> */}
                        <h1 className="text-3xl font-semibold">Solicitar Orçamento</h1>
                        <div className="w-full space-y-4">
                            <p className="text-base font-semibold">Qual a área do serviço?</p>
                            <div className="flex gap-4">
                                <div
                                    onClick={() => handleArea('mechanical-engineering')}
                                    className={(newService?.area == 'mechanical-engineering' && 'border-b-2 border-b-[var(--current-color)]') + ` w-3/6 p-4 flex flex-col items-center justify-center space-y-4 hover:shadow-md cursor-pointer rounded-md border-1 border-[var(--current-bg-color-secondary)]`}>
                                    <span>
                                        <CustomIcon icon="Cogs" className="w-[4em]"></CustomIcon>
                                    </span>
                                    <p>Engenharia Mecanica</p>
                                </div>
                                <div
                                    onClick={() => handleArea('safe-work')}
                                    className={(newService?.area == 'safe-work' && 'border-b-2 border-b-[var(--current-color)]') + ` w-3/6 p-4 flex flex-col items-center justify-center space-y-4 hover:shadow-md  cursor-pointer  rounded-md border-1 border-[var(--current-bg-color-secondary)]`}>
                                    <span >
                                        <CustomIcon icon="SafeWork" className="w-[4em]"></CustomIcon>
                                    </span>
                                    <p>Segurança do Trabalho</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full space-y-4">
                            <p className="text-base font-semibold">Qual o tipo de serviço?</p>
                            <div className="flex lg:flex-row md:flex-row flex-col gap-4">
                                <div
                                    onClick={() => handleType('laudo')}
                                    className={(newService?.type == 'laudo' && 'border-b-2 border-b-[var(--current-color)]') + ` lg:w-2/6 md:w-2/6 w-full p-4 flex items-center  hover:shadow-md  cursor-pointer rounded-md border-1 border-[var(--current-bg-color-secondary)]`}>
                                    <span className="pr-5">
                                        <FontAwesomeIcon icon={faFileSignature} />
                                    </span>
                                    <p> Laudo Técnico</p>
                                </div>
                                <div
                                    onClick={() => handleType('equipment')}
                                    className={(newService?.type == 'equipment' && 'border-b-2 border-b-[var(--current-color)]') + ` lg:w-2/6 md:w-2/6 w-full p-4 flex items-center  hover:shadow-md  cursor-pointer rounded-md border-1 border-[var(--current-bg-color-secondary)]`}>
                                    <span className="pr-5">
                                        <FontAwesomeIcon icon={faWrench} />
                                    </span>
                                    <p> Inspeção Equipamento</p>
                                </div>
                                <div
                                    onClick={() => handleType('project')}
                                    className={(newService?.type == 'project' && 'border-b-2 border-b-[var(--current-color)]') + ` lg:w-2/6 md:w-2/6 w-full p-4 flex items-center  hover:shadow-md  cursor-pointer rounded-md border-1 border-[var(--current-bg-color-secondary)]`}>
                                    <span className="pr-5">
                                        <FontAwesomeIcon icon={faRulerCombined} />
                                    </span>
                                    <p> Projeto</p>
                                </div>
                            </div>
                        </div>

                        {newService?.type == 'laudo' && (
                            <div className="w-full space-y-4 ">
                                <p className="text-base font-semibold">Escolha o tipo de laudo:</p>

                                <div className="flex pr-2 items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
                                    <div className="shrink-0 select-none sm:text-sm/6">
                                        <FontAwesomeIcon icon={faFileInvoice} />
                                    </div>
                                    <select onChange={handleLaudo} className="bg-[var(--current-bg-color)] w-full
                             py-2 px-4 pr-8 rounded  focus:outline-none ">
                                        <option value="" disabled selected>Selecione uma opção</option>
                                        {
                                            normas.map((n, idx) =>
                                            (<option key={idx} value={n.value} className="hover:bg-[var(--current-bg-color)]"
                                                selected={newService?.laudoId == n.value}>
                                                {n.label}
                                            </option>)
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                        )}

                        {(newService?.type == 'project' || newService?.type == 'equipment') && (
                            <div className={`w-full space-y-4`}>
                                <p className="text-lg font-semibold">Escolha o serviço:</p>
                                <div className="flex pr-2 items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
                                    <div className="shrink-0 select-none sm:text-sm/6">
                                        <FontAwesomeIcon icon={faScrewdriver} />
                                    </div>
                                    <select onChange={handleMaterial} className="bg-[var(--current-bg-color)] w-full
                             py-2 px-4  rounded  focus:outline-none ">
                                        <option value="" disabled selected>Selecione uma opção</option>
                                        {
                                            materials.map((m, idx) =>
                                            (<option key={idx} className="hover:bg-[var(--current-bg-color)] capitalize"
                                                selected={newService?.type == m}
                                            >
                                                {m}
                                            </option>)
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                        )}

                        {quote.services.length == 0 && newServiceIsValid() &&

                            <button onClick={() => handleStepQuote(2, true)} className="w-full rounded-md p-2 cursor-pointer hover:scale-101 transition-all  bg-[var(--current-color)] text-[var(--current-bg-color)]">
                                Informar dados para contato  <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        }

                        {quote.services.length > 0 && (
                            <div className="flex space-x-4">
                                <button disabled={!newServiceIsValid()} onClick={() => handleStepQuote(2, true)} className="w-full rounded-md p-2 cursor-pointer w-3/6  bg-[var(--current-color)] text-[var(--current-bg-color)]">
                                    Adicionar Serviço
                                </button>
                                <button onClick={() => handleStepQuote(2)} className="w-full rounded-md p-2 cursor-pointer w-3/6  border-1 border-[var(--current-color)] text-[var(--current-color)]">
                                    Voltar  <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        )}




                    </div>

                )}


                {quote.step == 2 && (
                    <form onSubmit={handleQuote} className="lg:w-3/6 md:w-5/6 w-full  
                        rounded-md border-1 border-[var(--current-bg-color-secondary)] p-8 space-y-4">
                        <h1 className="text-3xl font-semibold">Solicitar Orçamento</h1>
                        <p className="text-base font-semibold">Serviços informados:</p>
                        <ul className="w-full space-y-4">

                            {quote.services.map((s, idx) => (
                                <li key={idx} className="flex w-full p-2 border-1 border-[var(--current-bg-color-secondary)] items-center rounded-md relative overflow-hidden">
                                    <span className="flex  space-x-2 items-center">
                                        {s.area == 'mechanical-engineering' && (
                                            <>
                                                <CustomIcon icon="Cogs" className="w-[1em]"></CustomIcon>
                                                <p className="line-clamp-1">Engenharia Mecanica</p>
                                            </>
                                        )}
                                        {s.area == 'safe-work' && (
                                            <>
                                                <CustomIcon icon="SafeWork" className="w-[1em]"></CustomIcon>
                                                <p className="line-clamp-1">Segurança no Trabalho</p>
                                            </>
                                        )}
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span className="flex  space-x-2 items-center">
                                        {s.type == 'laudo' && (
                                            <>
                                                <FontAwesomeIcon icon={faFileSignature} />
                                                <p className="line-clamp-1">Laudo Técnico</p>
                                            </>
                                        )}
                                        {s.type == 'equipment' && (
                                            <>
                                                <FontAwesomeIcon icon={faWrench} />
                                                <p className="line-clamp-1">Inspeção Equipamento</p>
                                            </>
                                        )}
                                        {s.type == 'project' && (
                                            <>
                                                <FontAwesomeIcon icon={faRulerCombined} />
                                                <p className="line-clamp-1">Projeto</p>
                                            </>
                                        )}
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span className="capitalize line-clamp-1">{(!!s.laudoId ? getLaudoLabel(s.laudoId) : s.material)}</span>

                                    <span
                                        onClick={() => handleRemoveService(idx)}
                                        className="absolute right-2 cursor-pointer text-[var(--current-bg-color-secondary)] hover:text-[var(--current-color)]" ><FontAwesomeIcon icon={faTimes} /></span>
                                </li>
                            ))}
                            <li
                                onClick={() => handleStepQuote(1)}
                                className="flex w-full hover:shadow-sm items-center cursor-pointer p-2 border-1 border-[var(--current-bg-color-secondary)] rounded-md"><FontAwesomeIcon icon={faPlus} /> Adicionar mais um serviço </li>
                        </ul>



                        <p className="text-base font-semibold">Dados para contato:</p>
                        <div className="flex items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
                            <div className="shrink-0  select-none sm:text-sm/6">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <input type="text" required name="name" placeholder="Seu nome" className="w-full bg-[var(--current-bg-color)] w-full
                          py-2 px-4 pr-8 rounded  focus:outline-none" />
                        </div>
                        <div className="w-full  flex gap-4">
                            <div className="w-3/6 flex items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
                                <div className="shrink-0  select-none sm:text-sm/6">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <input type="text" required name="phone" value={quote.phone as string} onChange={handleChange} placeholder="Seu telefone" className="w-full bg-[var(--current-bg-color)] w-full
                          py-2 px-4 pr-8 rounded  focus:outline-none" />
                            </div>

                            <div className="w-3/6 flex items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
                                <div className="shrink-0  select-none sm:text-sm/6">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="email" required name="email" placeholder="Seu email" className="w-full bg-[var(--current-bg-color)] w-full
                          py-2 px-4 pr-8 rounded  focus:outline-none" />
                            </div>
                        </div>
                        <textarea placeholder="Recado" name="message" rows={4} className="bg-[var(--current-bg-color)] w-full
                           border border-[var(--current-bg-color-secondary)]  py-2 px-4 pr-8 rounded focus:shadow-md focus:outline-none "></textarea>
                        <button className="w-full rounded-md p-2 cursor-pointer hover:scale-101 transition-all  bg-[var(--current-color)] text-[var(--current-bg-color)]">
                            Enviar  <FontAwesomeIcon className="rotate-45" icon={faPaperPlane} />
                        </button>
                    </form>
                )}

                {quote.step == 3 && (
                    <div className="lg:w-3/6 md:w-5/6 w-full  
                        rounded-md p-8 space-y-4 flex flex-col items-center space-y-6">
                        <h1 className="text-6xl text-center italic">Orçamento Solicitado!</h1>
                        <p className="text-base text-center font-semibold">Obrigado por chegar até aqui, nós recebemos sua solicitação e em breve retornaremos.</p>
                        <p className="text-base text-center"><span className="capitalize">{quote.name}</span> pedimos que fique atento ao seus contatos informados:</p>
                        <p className="text-base text-center">Telefone: {quote.phone}</p>
                        <p className="text-base text-center">Email: {quote.email}</p>
                        <a href="/#" className="lg:w-[50%] md:w-[50%] text-center w-full text-[var(--current-bg-color)] bg-[var(--current-color)] rounded-md p-2">
                            <FontAwesomeIcon icon={faChevronLeft} /> Voltar para página principal
                        </a>
                    </div>
                )}


            </section>
            <Footer></Footer>
        </main >

    )
}

export default Quote;