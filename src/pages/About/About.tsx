import CustomIcon from '../../components/Icons/CustomIcon';
import './index.css'

function About() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 768 || window.matchMedia("(max-width: 768px)").matches;

    return (
        <section id="about" className="w-full  lg:mt-30 md:mt-30 mt-10  lg:space-y-15 md:space-y-15 space-y-10    flex items-center flex-col  text-[var(--current-color)]">
            <h1 className="animate animate-show text-center lg:text-3xl md:text-3xl text-2xl font-semibold">Sobre Nós</h1>
            <div className="lg:w-3/6 md:w-5/6 w-[90%]">
                <div className="w-full ">
                    <p className='text-justify animate animate-show'>
                        <img src="logo_sf.png" className='logo' alt="" />
                        Fundada em julho de 2024, a Aluminium Engenharia nasceu do propósito de transformar conhecimento técnico em soluções práticas para o mercado. Após a conclusão da graduação em Engenharia pela Universidade Federal do Paraná, uma das mais conceituadas do Brasil, nosso fundador decidiu unir sua paixão pelo trabalho direto com equipamentos à vontade de oferecer serviços de excelência.
                        O que começou como uma atividade complementar tornou-se, em pouco tempo, uma empresa sólida e referência, que hoje é responsável por atender clientes em todo o território nacional.
                        Nosso compromisso é oferecer um atendimento próximo, ágil e eficiente, sempre com preços competitivos e foco total na segurança, qualidade e confiabilidade.
                        Contamos ainda com uma rede de parceiros especializados espalhados pelo Brasil, preparados para oferecer suporte técnico completo, garantindo soluções rápidas e personalizadas para cada necessidade.</p>


                    <ul className='flex md:flex-row lg:flex-row flex-col w-full space-x-4 '>
                        <li className='md:w-2/6 lg:w-2/6 w-full lg:p-6 md:p-6 p-4 animate animate-right'>

                            <div className='flex justify-center lg:mb-8 md:mb-8 mb-2'>
                                <CustomIcon icon='Mission'
                                    className='text-[var(--current-color)] lg:w-[6em] md:w-[6em] w-[4em]'></CustomIcon></div>
                            <p className='text-lg font-semibold mb-4'>
                                Nossa missão
                            </p>
                            <p>
                                Levar soluções técnicas seguras, acessíveis e eficazes para empresas em todo o Brasil.
                            </p>
                        </li>
                        <li className=' lg:border-r-1 md:border-r-1 border-r-0
                            lg:border-b-0 md:border-b-0 border-b-1
                         border-[var(--current-bg-color-secondary)]'></li>
                        <li className={(isMobile ? 'animate-show' : 'animate-up') + ` animate md:w-2/6 lg:w-2/6 w-full  
                             lg:p-6 md:p-6 p-4`}>
                            <div className='flex justify-center lg:mb-8 md:mb-8 mb-2'><CustomIcon icon='Vision'
                                className='text-[var(--current-color)] lg:w-[6em] md:w-[6em] w-[4em]'></CustomIcon></div>
                            <p className='text-lg font-semibold mb-4'>
                                Nossa visão
                            </p>
                            <p>
                                Ser reconhecida como referência em qualidade, confiança e inovação em serviços de engenharia e manutenção.
                            </p>
                        </li>
                        <li className=' lg:border-r-1 md:border-r-1 border-r-0
                            lg:border-b-0 md:border-b-0 border-b-1
                         border-[var(--current-bg-color-secondary)]'></li>
                        <li className='md:w-2/6 lg:w-2/6 w-full lg:p-6 md:p-6 p-4 animate animate-left'>
                            <div className='flex justify-center  
                            lg:mb-8 md:mb-8 mb-2'><CustomIcon icon='Values'
                                    className='text-[var(--current-color)] lg:w-[6em] md:w-[6em] w-[4em]'></CustomIcon></div>
                            <p className='text-lg font-semibold mb-4'>Nossos valores</p>
                            <p>
                                • Compromisso com a segurança e a qualidade.
                                <br />• Atendimento transparente e personalizado.
                                <br />• Ética e responsabilidade profissional.
                                <br />• Paixão por tecnologia e inovação
                            </p>
                        </li>
                    </ul>
                </div>


            </div>
        </section>

    )
}

export default About;