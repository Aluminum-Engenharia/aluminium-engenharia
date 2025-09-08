import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../../components/Icons/CustomIcon";
import { text } from "@fortawesome/fontawesome-svg-core";
import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";


interface Advantage {
    id: number;
    icon: string;
    title: string;
    description: string;
}

function Advantages() {

    let advantages: Advantage[] = [
        {
            id: 1,
            icon: 'Project',
            title: 'Projetos otimizados',
            description: 'Planejamento de máquinas, equipamentos e sistemas mecânicos mais eficientes, reduzindo custos de produção e manutenção.'
        },
        {
            id: 2,
            icon: 'Safe',
            title: 'Segurança',
            description: 'Garantia de que produtos e processos sigam normas técnicas, evitando falhas, acidentes e prejuízos.'
        },
        {
            id: 3,
            icon: 'Maintenance',
            title: 'Manutenção preventiva',
            description: 'Planejamento de rotinas que prolongam a vida útil de máquinas e evitam paradas inesperadas.'
        },
        {
            id: 4,
            icon: 'CostReduction',
            title: 'Redução de custos',
            description: 'Melhoria nos processos, aumento de produtividade e redução de desperdícios.'
        },
        {
            id: 5,
            icon: 'ReturnApport',
            title: 'Retorno sobre investimento (ROI)',
            description: 'Projetos bem elaborados podem gerar lucros significativos a médio e longo prazo.'
        },
        {
            id: 6,
            icon: 'Authenticity',
            title: 'Cumprimento de normas e certificações',
            description: 'Garantia de enquadramento dentro das exigências legais (ABNT, ISO, NR’s).'
        }
    ]

    return (
        <section id="advantages" className="w-full lg:mt-30 md:mt-30 mt-10 lg:space-y-15 md:space-y-15 space-y-10   flex items-center flex-col  text-[var(--current-color)]">
            <h1 className="animate animate-show text-center w-[90%] lg:text-3xl md:text-3xl text-2xl font-semibold">Porque contratar um engenheiro mecânico?</h1>
            <ul className="lg:w-3/6 md:w-5/6 w-[90%] space-y-4 items-center">

                {advantages.map((adv, idx) => {

                    return (
                        <li key={adv.id} className={(idx % 2 == 0 ? " animate-right" : "animate-left" ) + ` animate animate-show w-full p-1 flex items-center 1 bg-[var(--current-bg-color)] rounded-md border-1 border-[var(--current-bg-color-secondary)]`
                        }>
                            <span className="p-6  rounded-l-md w-fit">
                                <CustomIcon icon={adv.icon} className="md:w-[2.5em] lg:w-[2.5em] w-[2.0em]" ></CustomIcon>
                            </span>


                            <div className="pl-4">
                                <p className="lg:text-lg md:text-lg text-md font-semibold">{adv.title}</p >

                                <p className="mt-2 ">
                                    {adv.description}
                                </p>
                            </div>
                        </li>
                    )
                })}


            </ul>
        </section >
    )
}



export default Advantages;