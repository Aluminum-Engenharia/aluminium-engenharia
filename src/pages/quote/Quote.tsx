import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/Navbar/NavBar";
import { faChevronCircleRight, faChevronLeft, faChevronRight, faPaperPlane, faPlus, faScrewdriver, faTimes, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../../components/Icons/CustomIcon";
import { useRef, useState } from "react";
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
    quantity?: number;
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

    const [firstLoad, setFirstLoad] = useState(false);
    const [newService, setService] = useState<Service>();
    const [quote, setQuote] = useState<Quote>({ step: 1, services: [] });
    const inputMaterial = useRef<HTMLSelectElement>(null);
    const inputLaudo = useRef<HTMLSelectElement>(null);

    const handleFocus = (input: string) => {


        if (input == 'material' && inputMaterial.current) {
            inputMaterial.current.focus();
        } else if (inputLaudo.current) {
            inputLaudo.current.focus();
        }
    };

    if (!firstLoad) {
        window.scrollTo(0, 0);
        setFirstLoad(first => first = true);
    }


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
        "Acessórios de tubulação",
        "Acessórios de tubulação em embarcações",
        "Adequação ambiental",
        "Análise de catástrofe",
        "Andaime",
        "Aquecedor de ar em embarcações",
        "Aquecedores agroindustriais",
        "Arqueação",
        "Árvore de natal",
        "Atamento térmico",
        "Auditoria ambiental",
        "Autoclaves em embarcações",
        "Boilers em embarcações",
        "Bomba",
        "Bomba de combustível",
        "Bomba em embarcações",
        "Caixa separadora (sistemas de filtragem de resíduos líquidos)",
        "Caldeira em embarcações",
        "Calibração de equipamentos mecânicos",
        "Calibração de instrumentos mecânicos",
        "Câmara frigorífica em embarcações",
        "Caracterização de materiais",
        "Caracterização de materiais de metalurgia",
        "Casca",
        "Central de distribuição de gás",
        "Central de gás",
        "Central de produção, transformação e armazenamento de gás",
        "Centrífuga em embarcações",
        "Certificação ambiental",
        "Chiller em embarcações",
        "Ciclagem de materiais",
        "Cilindro/vaso de pressão",
        "Circuito de geração",
        "Coleta de resíduos sólidos",
        "Combustíveis metalúrgicos",
        "Compatibilização de projetos",
        "Componentes biomecânicos",
        "Compressor",
        "Compressor em embarcação",
        "Condensador",
        "Conforto térmico",
        "Contêiners",
        "Controle ambiental",
        "Controle de materiais",
        "Controle de materiais de acabamento/revestimento",
        "Controle de qualidade ambiental",
        "Controle de riscos",
        "Controle de ruídos e vibrações",
        "Controle dimensional e geométrico",
        "Desenvolvimento de software",
        "Desmontagem de estrutura de outros materiais",
        "Destinação de resíduos sólidos",
        "Dispositivos biomecânicos",
        "Dispositivos de expansão",
        "Dispositivos de proteção",
        "Dutos de gás",
        "Dutos de óleos",
        "Dutos industrais em embarcações",
        "Dutos industriais",
        "Economizador em embarcações",
        "Educação ambiental",
        "Eficiência energética",
        "Eletrodomésticos",
        "Elevador de caçambas",
        "Elevadores",
        "Elevadores de caneca",
        "Emissão de gases poluentes e de ruído em veículos automotores",
        "Emissões atmosféricas",
        "Empilhadeira",
        "Ensaio físico para controle tecnológico",
        "Ensaio químico para controle tecnológico",
        "Ensaios de equipamentos, dispositivos e componentes",
        "Ensaios de equipamentos, dispositivos e componentes das indústrias minero",
        "Ensaios de materiais",
        "Equipamento para indústria alimentícia",
        "Equipamentos de bombeamento",
        "Equipamentos de prevenção de transientes hidráulicos",
        "Equipamentos e sistemas para nr",
        "Equipamentos eletromecânicos",
        "Equipamentos eletromecânicos odonto",
        "Equipamentos mecânicos",
        "Equipamentos mecânicos odonto",
        "Equipamentos para fins rurais",
        "Equipamentos para metalografia",
        "Equipamentos para os sistemas de tratamento de água",
        "Equipamentos para os sistemas de tratamento de esgoto/resíduos líquidos",
        "Equipamentos para tratamento de efluentes",
        "Equipamentos, dispositivos e componentes das indústrias minero",
        "Especificação de escadas de emergência",
        "Especificação de porta corta fogo",
        "Especificação de saídas de emergência",
        "Especificação de sistema de alarme de incêndio",
        "Especificação de sistema de detecção de incêndio",
        "Esteiras aéreas",
        "Estrutura de madeira",
        "Estrutura de materiais mistos",
        "Estrutura metálica",
        "Estrutura metálica para andaimes",
        "Estrutura metálica para arquibancadas",
        "Estrutura metálica para edificação",
        "Estrutura metálica para edificação provisória",
        "Estrutura metálica para escoramentos",
        "Estrutura metálica para fins diversos",
        "Estrutura metálica para palcos",
        "Estudo de Impacto Ambiental",
        "Estudo de impacto de vizinhança",
        "Estudos ambientais",
        "Execução de içamento",
        "Fan coil em embarcações",
        "Fornalha em embarcações",
        "Fornos destinados  a indústria metalúrgica",
        "Gasoduto",
        "Geração/transmissão de calor para fins rurais",
        "Gerador de energia elétrica",
        "Impacto ambiental",
        "Implemento para fins rurais",
        "Implementos rodoviários",
        "Indicadores ambientais",
        "Indústria de materiais cerâmicos",
        "Indústria de materiais metálicos",
        "Instalação da tubulação de vácuo",
        "Instalação da tubulação de vapor",
        "Instalação de hidrantes",
        "Instalação de sistema de esgoto sanitário",
        "Instalação de sprinkler",
        "Instalação hidráulica para prevenção e combate a incêndio",
        "Instalações industriais",
        "Instalações mecânicas industriais",
        "Isolamento térmico em embarcações",
        "Ligação individual de rede de água",
        "Ligação individual de rede de esgoto",
        "Ligação individual de rede de gás",
        "Linha de vida",
        "Localização de equipamento de combate a incêndio",
        "Localização de equipamento e rede de instalação à vácuo",
        "Localização de equipamento e rede de instalação de vapor",
        "Localização de sprinkler",
        "Mangueira de combate à incêndio",
        "Mapa",
        "Máquina de absorção",
        "Máquina para fins rurais",
        "Máquinas agrícolas",
        "Máquinas e equipamentos (NR12)",
        "Máquinas e equipamentos industriais",
        "Máquinas e equipamentos para fabricação de artigos de plástico",
        "Máquinas e equipamentos para industria da madeira",
        "Máquinas e equipamentos para industria florestal",
        "Máquinas e equipamentos para industria textil",
        "Máquinas operatrizes",
        "Máquinas pesadas",
        "Mecânica fina",
        "Medições anemométricas",
        "Medidor de vazão de gases em embarcações",
        "Medidor de vazão de líquidos em embarcações",
        "Memorial descritivo",
        "Metalurgia extrativa",
        "Métodos e processos de fabricação metalúrgicos",
        "Mineroduto",
        "Modelagem ambiental",
        "Modificações em veículos automotores",
        "Monitoramento ambiental",
        "Motor para fins rurais",
        "Motores de combustão interna em embarcações",
        "Munck",
        "Oleoduto",
        "Painel publicitário",
        "Perfuratrizes",
        "Planejamento ambiental",
        "Plano de contingência",
        "Plano de Controle Ambiental",
        "Plano de emergência e catástrofe",
        "Plano de riggin",
        "Pmoc",
        "Ponto de ancoragem para linha de vida",
        "Posto de combustível",
        "Pressostato em embarcações",
        "Prevenção e combate a incêndio e pânico",
        "Processamento de materiais",
        "Processos de carga e recarga de extintores",
        "Processos mecânicos de fabricação",
        "Produção da indústria metalúrgica",
        "Produtos da indústria de materiais",
        "Programa de Gerenciamento de Riscos (PGR)",
        "Programação",
        "Propulsores",
        "Proteção catódica",
        "Reboques",
        "Recarga de extintores",
        "Reciclagem de materiais metálicos",
        "Rede de hidrantes",
        "Rede de sprinklers",
        "Reforço de estruturas mistas",
        "Relatório de Controle Ambiental",
        "Relatório de Impacto Ambiental",
        "Relatório de Impacto de Vizinhança Ambiental",
        "Reparo de estruturas mistas",
        "Requalificação de cilindros",
        "Reserva ambiental",
        "Resfriadores agroindustriais",
        "Riscos ao meio ambiente",
        "Riser",
        "Segurança em caldeiras e/ou vasos de pressão (NR13)",
        "Segurança em redes e tubulações de fluidos, gases e vapores",
        "Segurança veicular",
        "Seleção de materiais",
        "Seleção de materiais de metalurgia",
        "Sensores agroindustriais",
        "Silo",
        "Sinalização de emergência",
        "Sinalização de emergência em edificação",
        "Sistema computacional agroindustriais",
        "Sistema de abastecimento de água",
        "Sistema de água potável",
        "Sistema de controle e automação",
        "Sistema de esgoto",
        "Sistema de filtragem",
        "Sistema de fluidos",
        "Sistema de fluidos em embarcações",
        "Sistema de geração de energia",
        "Sistema de redes de águas pluviais",
        "Sistema de transporte ferroviário",
        "Sistema de transporte metroviário",
        "Sistemas de acionamento",
        "Sistemas de aquecimento em embarcações",
        "Sistemas de bombeamento de combustível",
        "Sistemas de condicionamento de ar em embarcações",
        "Sistemas de refrigeração em embarcações",
        "Sistemas de software",
        "Sistemas de ventilação em embarcações",
        "Sistemas e redes",
        "Sistemas e redes fluidodinâmicos para embarcações",
        "Sistemas estruturais navais",
        "Sistemas térmicos",
        "Sistemas térmicos em aeronaves",
        "Superaquecedor em embarcações",
        "Talha",
        "Tanque para combustível",
        "Tecnologia naval",
        "Tela fachadeira",
        "Teste hidrostático de extintores",
        "Testes de estanqueidade",
        "Torre de resfriamento",
        "Torre de resfriamento em embarcações",
        "Trabalho em altura (NR35)",
        "Transformação veicular",
        "Transportador de corrente",
        "Transportador helicoidal",
        "Transportadores de corrente",
        "Transportadores e elevadores",
        "Transporte de resíduos sólidos",
        "Tratamento de materiais",
        "Tratamento de resíduos sólidos",
        "Trava quedas",
        "Trio elétrico",
        "Trocador de calor",
        "Trocador de calor em embarcações",
        "Tubos, dutos e válvulas de bloqueio, retenção e controle",
        "Tubulação",
        "Tubulação / para combustível",
        "Tubulação de gás",
        "Turbina",
        "Turbina para embarcações",
        "Umidificadores agroindustriais",
        "Unidades de processo",
        "Usinas termoelétricas",
        "Válvula de segurança",
        "Válvula em embarcações",
        "Veículos automotores",
        "Ventiladores agroindustriais",
        "Viabilidade ambiental"
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

        if (type == 'laudo') {
            setTimeout(() => {
                handleFocus('laudo');
            }, 800)
        } else {
            setTimeout(() => {
                handleFocus('material');
            }, 800)
        }
    }

    const handleMaterial = (event: any) => {
        setService(service => service = { ...service, material: event.target.value, laudoId: null, quantity: 1 })
    }
    const handleLaudo = (event: any) => {
        setService(service => service = { ...service, laudoId: event.target.value, material: null, quantity: 0 })
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
                Tipo de Serviço: ${s.type == 'laudo' ? ('Laudo -' + getLaudoLabel(s.laudoId as string)) : ''}${s.type == 'project' ? ('Projeto - ' + s.material + " - Qtd: " + s.quantity) : ''}${s.type == 'equipment' ? ('Equipamento - ' + (s.material) + " - Qtd: " + s.quantity) : ''}`
            }).join("\n\n")

        };

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_USER_ID,
        )
            .then((result) => {
                setQuote(quote => quote = { ...quote, step: 3 })
                window.scrollTo(0, 0);
            })
            .catch((error) => {
                console.log("Erro ao enviar email:", error.text);
            });
    };


    const handleQuantity = (q: number) => {

        if (q < 0 && newService?.quantity == 1)
            return;
        if (q > 0) {
            setService(service => service = { ...service, quantity: (service?.quantity || 0) + 1 })
        } else {
            setService(service => service = { ...service, quantity: (service?.quantity || 0) - 1 })
        }
    }

    return (
        <main className='bg-[var(--current-bg-color)] text-[var(--current-color)] min-h-screen flex flex-col justify-between'>
            <NavBar isNotHome={true} ></NavBar>
            <section className="w-full  pt-[120px]   flex flex-col items-center space-y-15">


                {quote.step == 1 && (
                    <div className="lg:w-3/6 md:w-5/6 w-[90%] 
                    lg:p-8 md:p-8 p-4  border-1 border-[var(--current-bg-color-secondary)]  space-y-8  trasition-all  rounded-md">
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
                                    <select ref={inputLaudo} onChange={handleLaudo} className="bg-[var(--current-bg-color)] w-full
                             p-4 rounded  focus:outline-none ">
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
                                    <select ref={inputMaterial} onChange={handleMaterial} className="bg-[var(--current-bg-color)] w-full
                             p-4  rounded  focus:outline-none ">
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
                                {!!newService.quantity && newService.quantity > 0 && (
                                    <div className="flex w-full gap-4">
                                        <span
                                            onClick={() => handleQuantity(-1)}
                                            className={(newService.quantity > 1 ? ' border-b-2 border-b-[var(--current-color)] hover:shadow-md cursor-pointer' : 'bg-[var(--current-bg-color-secondary)]') + ` flex w-1/4 p-4 rounded-md font-semibold items-center justify-center  border-1 border-[var(--current-bg-color-secondary)]`}>
                                            -1</span>
                                        <span className="flex w-2/4 p-4 rounded-md font-semibold items-center justify-center border-1 border-[var(--current-bg-color-secondary)]">{newService.quantity}</span>
                                        <span
                                            onClick={() => handleQuantity(+1)}
                                            className="flex w-1/4 p-4 rounded-md font-semibold items-center cursor-pointer justify-center hover:shadow-md border-1 border-[var(--current-bg-color-secondary)] border-b-2 border-b-[var(--current-color)]">+1</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {quote.services.length == 0 && newServiceIsValid() &&

                            <button onClick={() => handleStepQuote(2, true)} className="w-full rounded-md p-2 cursor-pointer hover:scale-101 transition-all  bg-[var(--current-color)] text-[var(--current-bg-color)]">
                                Informar dados para contato  <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        }

                        {quote.services.length > 0 && (
                            <div className="flex gap-4 lg:flex-row md:flex-row flex-col">
                                <button disabled={!newServiceIsValid()} onClick={() => handleStepQuote(2, true)} className=" md:w-3/6 lg:w-3/6 w-full rounded-md p-2 cursor-pointer bg-[var(--current-color)] text-[var(--current-bg-color)]">
                                    Adicionar Serviço
                                </button>
                                <button onClick={() => handleStepQuote(2)} className="md:w-3/6 lg:w-3/6 w-full rounded-md p-2 cursor-pointer border-1 border-[var(--current-color)] text-[var(--current-color)]">
                                    Voltar  <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        )}
                    </div>
                )}
                {quote.step == 2 && (
                    <form onSubmit={handleQuote} className="lg:w-3/6 md:w-5/6 w-[90%]
                        rounded-md border-1 border-[var(--current-bg-color-secondary)] lg:p-8 md:p-8 p-4 space-y-4">
                        <h1 className="text-3xl font-semibold">Solicitar Orçamento</h1>
                        <p className="text-base font-semibold">Serviços informados:</p>
                        <ul className="w-full space-y-4">

                            {quote.services.map((s, idx) => (
                                <li key={idx} className="flex w-full p-2 border-1 border-[var(--current-bg-color-secondary)] items-center rounded-md relative overflow-hidden">
                                    {!!s.quantity &&
                                        s.quantity > 0 && (
                                            <>
                                                <span className="bg-[var(--current-color)] text-[var(--current-bg-color)] rounded-sm mx-1 text-sm p-[2px] px-1">{s.quantity}</span>
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </>
                                        )
                                    }


                                    <span className="flex  space-x-2 items-center">
                                        {s.area == 'mechanical-engineering' && (
                                            <>
                                                <CustomIcon icon="Cogs" className="w-[1em]"></CustomIcon>
                                                <p className="md:block lg:block hidden line-clamp-1">Engenharia Mecanica</p>
                                            </>
                                        )}
                                        {s.area == 'safe-work' && (
                                            <>
                                                <CustomIcon style={{ margin: 0 }} icon="SafeWork" className="w-[1em]"></CustomIcon>
                                                <p className="md:block lg:block hidden line-clamp-1">Segurança no Trabalho</p>
                                            </>
                                        )}
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight} />

                                    <span className="flex  space-x-2 items-center">
                                        {s.type == 'laudo' && (
                                            <>
                                                <FontAwesomeIcon style={{ margin: 0 }} icon={faFileSignature} />
                                                <p className="md:block lg:block hidden line-clamp-1">Laudo Técnico</p>
                                            </>
                                        )}
                                        {s.type == 'equipment' && (
                                            <>
                                                <FontAwesomeIcon style={{ margin: 0 }} icon={faWrench} />
                                                <p className="md:block lg:block hidden line-clamp-1">Inspeção Equipamento</p>
                                            </>
                                        )}
                                        {s.type == 'project' && (
                                            <>
                                                <FontAwesomeIcon style={{ margin: 0 }} icon={faRulerCombined} />
                                                <p className="md:block lg:block hidden line-clamp-1">Projeto</p>
                                            </>
                                        )}
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight} />

                                    <span className="capitalize line-clamp-1 pl-2">{(!!s.laudoId ? getLaudoLabel(s.laudoId) : s.material)}</span>

                                    <span
                                        onClick={() => handleRemoveService(idx)}
                                        className="absolute right-2 cursor-pointer text-[var(--current-bg-color-secondary)] hover:text-[var(--current-color)]" ><FontAwesomeIcon icon={faTimes} /></span>
                                </li>
                            ))}
                            <li
                                onClick={() => handleStepQuote(1)}
                                className="flex w-full hover:shadow-sm items-center cursor-pointer p-2 border-1 border-[var(--current-bg-color-secondary)] rounded-md"><FontAwesomeIcon icon={faPlus} className="mr-2" /> Adicionar mais um serviço </li>
                        </ul>



                        <p className="text-base font-semibold">Dados para contato:</p>
                        <div className="flex items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
                            <div className="shrink-0  select-none sm:text-sm/6">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <input type="text" required name="name" placeholder="Seu nome" className="w-full bg-[var(--current-bg-color)] w-full
                          py-2 px-4 pr-8 rounded  focus:outline-none" />
                        </div>
                        <div className="w-full flex lg:flex-row md:flex-row flex-col gap-4">
                            <div className="lg:w-3/6 md:w-3/6 w-full flex items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
                                <div className="shrink-0  select-none sm:text-sm/6">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <input type="text" required name="phone" value={quote.phone as string} onChange={handleChange} placeholder="Seu telefone" className="w-full bg-[var(--current-bg-color)] w-full
                          py-2 px-4 pr-8 rounded  focus:outline-none" />
                            </div>

                            <div className="lg:w-3/6 md:w-3/6 w-full flex items-center rounded-md bg-[var(--current-bg-color)] pl-3 outline-1 -outline-offset-1 outline-[var(--current-bg-color-secondary)] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:shadown-md">
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
            <Footer disableAnimate={true}></Footer>
        </main >

    )
}

export default Quote;
