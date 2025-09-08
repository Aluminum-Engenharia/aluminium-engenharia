import { useState } from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface Service {
    id: number,
    title: string;
    description: string;
}



function Services() {


    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768 || window.matchMedia("(max-width: 768px)").matches;




    const [serviceIndex, setServiceIndex] = useState((isMobile ? 1 : 2));
    const [offset, setOffset] = useState(0);

    let services: Service[] = [
        {
            id: 1,
            title: 'Segurança do Trabalho',
            description: 'Laudos NR-12, NR-13, NR-35|Relatórios de PGR|Sinalização e saídas de emergência|Testes hidrostáticos de extintores'
        },
        {
            id: 2,
            title: 'Máquinas e Equipamentos',
            description: 'Máquinas agrícolas e pesadas|Modificações veiculares (GNV, segurança, emissões)|Transportadores, elevadores e guindastes|Testes de estanqueidade e calibrações'
        },
        {
            id: 3,
            title: 'Hidráulicos e Saneamento',
            description: 'Sistema de água potável|Redes de águas pluviais|Esgoto sanitário|Hidrantes e sprinklers|Estações de tratamento de efluentes'
        },
        {
            id: 4,
            title: 'Metais e Madeira',
            description: 'Estruturas metálicas (fixas, provisórias, andaimes, arquibancadas)|Desmontagem e reforço de estruturas|Estruturas de madeira e mistas'
        },
        {
            id: 5,
            title: 'Energia e Eficiência',
            description: 'Sistemas de geração (hidro, eólica, termoelétrica, solar)|Eficiência energética e cogeração|Turbinas e bombas'
        },
        {
            id: 6,
            title: 'Controle Ambiental',
            description: 'Estudos de impacto ambiental|Monitoramento e auditoria|Planos de controle e adequação ambiental|Gestão de resíduos sólidos e líquidos'
        },


    ];


    const handleIndex = (action: string) => {
        let servicesContainer: any = document.getElementsByClassName('services')[0];
        // let defaultOffset = ((servicesContainer.offsetWidth + servicesContainer.offsetWidth) / services.length)
        // let defaultOffset = (servicesContainer.offsetWidth + 280)


        if (action == 'prev') {
            setServiceIndex(index => index = index - 1);
            setOffset(offset => offset = offset + (isMobile ? 292 : 308));
        } else {
            setServiceIndex(index => index + 1);
            setOffset(offset => offset = offset - (isMobile ? 292 : 308));
        }

    }



    return (
        <section id="services" className="w-full lg:mt-30 md:mt-30 mt-10  lg:space-y-15 md:space-y-15  space-y-10  flex items-center flex-col  text-[var(--current-color)] relative">
            <h1 className="animate animate-show text-center lg:text-3xl md:text-3xl text-2xl font-semibold 
            ">Nossos Serviços</h1>
            <div className="animate animate-up w-full lg:w-3/6 md:w-5/6  flex items-center overflow-hidden relative ">
                {serviceIndex > 1 &&
                    <span className='z-100 absolute top-[50%] 
                    md:left-[-9px] lg:left-[-9px] left-[16px] cursor-pointer  
                    hover:text-[var(--current-color)] transition-all 
                    rounded-full
                    lg;text-3xl
                    md:text-3xl
                    text-xl
                     lg:text-[var(--current-bg-color-secondary)] 
                        md:text-[var(--current-bg-color-secondary)] 
                        text-[var(--current-bg-color)]
                        lg:bg-transparent
                        md:bg-transparent
                        bg-[var(--current-bg-color-secondary)]
                    delay-3 ' onClick={() => handleIndex('prev')}><FontAwesomeIcon icon={faChevronLeft} /></span>
                }

                <ul className={(isMobile ? 'ml-[28px]' : '') + ` flex lg:w-full md:w-full w-full select-none  lg:px-4 md:px-8 px-4  h-max services`}
                    style={{ transform: `translateX(${offset}px)` }}>
                    {
                        services.map(s => (
                            <li key={s.id} className={(serviceIndex + 1 < s.id || serviceIndex - 1 > s.id || (isMobile && serviceIndex != s.id) ? 'invisible' : '')
                                + " pb-4 md:my-10 lg:my-10 my-5 text-sm border-1 border-b-4 border-b-[var(--current-color)] border-[var(--current-bg-color-secondary)] bg-[var(--current-bg-color)] rounded-md lg:min-w-[276px] md:min-w-[276px]  min-w-[260px]  min-h-max service " +
                                (s.id == serviceIndex ? "service-active" : "")}>
                                <div className='rounded-ss-md rounded-se-md'>
                                    <img src={`services/${s.id}.jpg`} alt="" />
                                </div>
                                <p className="text-lg font-semibold mx-4 mt-2">{s.title}</p>
                                <ul className='mx-4'>
                                    {s.description.split("|").map((d, idx) => (
                                        <li key={idx} className='mt-2 '>{d}</li>
                                    ))}
                                </ul>
                            </li>
                        ))
                    }
                </ul>





                {serviceIndex < services.length &&
                    (
                        <span className='z-100 absolute top-[50%] 
                        md:right-[-9px] lg:right-[-9px] right-[16px] 
                        cursor-pointer text-3xl 
                        hover:text-[var(--current-color)] transition-all delay-3 
                        rounded-full
                        lg;text-3xl
                    md:text-3xl
                    text-xl
                        lg:text-[var(--current-bg-color-secondary)] 
                        md:text-[var(--current-bg-color-secondary)] 
                        text-[var(--current-bg-color)]
                        lg:bg-transparent
                        md:bg-transparent
                        bg-[var(--current-bg-color-secondary)]' style={{ zIndex: 1000 }} onClick={() => handleIndex('next')}><FontAwesomeIcon icon={faChevronRight} /></span>
                    )
                }

            </div>

            <Link to="/quote" className='animate animate-up w-[90%] lg:w-fit md:fit text-center  bg-[var(--current-color)] text-[var(--current-bg-color)] font-semibold p-2 rounded-md hover:scale-105 transition-all delay-3 cursor-pointer '>Solicitar orçamento</Link>
        </section>
    )

}


export default Services;