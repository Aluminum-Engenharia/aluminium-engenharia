import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { useState } from 'react';

interface Faq {
    id: number;
    quest: string;
    answer: string;
    showAnswer: boolean;
}



function Faq() {

    const [faqs, setFaqs] = useState<Faq[]>([
        {
            id: 1,
            quest: "O que é um laudo de engenharia?",
            showAnswer: true,
            answer: 'Um laudo de engenharia é um documento técnico elaborado por um engenheiro habilitado (registrado no CREA/CAU, dependendo da área), que apresenta a avaliação, análise e conclusões sobre determinada situação, obra, equipamento, edificação ou sistema.'
        },
        {
            id: 2,
            quest: "Quando preciso de um laudo técnico, vistoria ou inspeção? ",
            showAnswer: false,
            answer: `
            <span class="font-semibold ">Técnico</span><br> 
            Necessário sempre que há a necessidade de um documento formal, elaborado por engenheiro ou arquiteto habilitado, que registre de forma oficial uma análise técnica com conclusões e recomendações.
            <br><br><span class="font-semibold ">Vistoria</span><br> 
            Necessário quando você precisa registrar formalmente o estado de um bem ou de um local em determinado momento, de forma descritiva e documentada, geralmente com fotos e assinatura de um engenheiro/arquitetos ou outro profissional habilitado.
            <br><br><span class="font-semibold ">Inspeção</span><br>
            Necessário quando se deseja avaliar tecnicamente, de forma periódica ou pontual, se um bem, sistema ou edificação está em conformidade com normas de segurança, desempenho e manutenção. Ele vai além da simples constatação (vistoria), pois envolve análise técnica e pode trazer recomendações de correções.`
        },
        {
            id: 3,
            quest: "Quanto tempo leva a elaboração de um laudo técnico?",
            showAnswer: false,
            answer: `<span class="font-semibold">Laudo simples / preliminar</span><br>
                    • Avalia aspectos básicos, como conformidade com normas ou condições visuais de equipamentos.<br>
                    • Pode incluir medições simples ou inspeção visual.<br>
                    • Tempo médio: 1 a 5 dias úteis.<br><br>
                    
                    <span class="font-semibold">Laudo detalhado / completo</span><br>
                    • Envolve análise minuciosa de sistemas mecânicos, cálculos, medições de performance, desgaste, vibração, falhas ou causas de problemas.<br>
                    • Pode exigir testes laboratoriais ou coleta de dados em campo.<br>
                    • Tempo médio: 1 a 3 semanas, podendo se estender dependendo da complexidade.`
        },
        {
            id: 4,
            quest: "O que é ART e qual a sua importância?",
            showAnswer: false,
            answer: `A <span class="font-semibold">ART</span> significa <span class="font-semibold">Anotação de Responsabilidade Técnica</span>. É um documento formal emitido pelo <span class="font-semibold">Conselho Regional de Engenharia e Agronomia (CREA)</span> que registra oficialmente a responsabilidade técnica de um profissional de engenharia, agronomia, geologia, geografia ou meteorologia sobre um projeto, obra ou serviço.
            <br><br><span class="font-semibold">Importância para o contratante</span><br>
            • Dá segurança de que o trabalho será realizado por profissional qualificado.<br>
            • Permite comprovar legalmente que a obra ou projeto está em conformidade com normas técnicas.`
        },
    ]);



    const handleQuest = (faq: Faq) => {
        setFaqs(prevFaqs =>
            prevFaqs.map(fa =>
                fa.id === faq.id ? { ...fa, showAnswer: !fa.showAnswer } : { ...fa }
            )
        );
    };




    return (
        <section id="faq" className="w-full lg:mt-30 md:mt-30 mt-10  lg:space-y-15 md:space-y-15 space-y-10   flex items-center flex-col  text-[var(--current-color)]">
            <h1 className="animate animate-show text-center  lg:text-3xl md:text-3xl text-2xl font-semibold">Perguntas frequentes</h1>
            <div className="lg:w-3/6 md:w-5/6 w-[90%] rounded-md ">
                {
                    faqs.map(faq =>
                    (
                        <div  className="animate animate-show p-5 quest" key={faq.id}>
                            <div className='w-full cursor-pointer flex items-center justify-between' onClick={() => handleQuest(faq)}>
                                <p className='font-semibold lg:text-lg md:text-lg text-md '>
                                    {faq.quest}
                                </p>
                                <FontAwesomeIcon icon={(!faq.showAnswer ? faChevronDown : faChevronUp)} />
                            </div>
                            <p className={"pl-2 " + (!faq.showAnswer ? "" : "show-answer pt-4")} dangerouslySetInnerHTML={{ __html: faq.answer }}></p>

                        </div>
                    )
                    )
                }
            </div>
        </section>
    )
}


export default Faq;