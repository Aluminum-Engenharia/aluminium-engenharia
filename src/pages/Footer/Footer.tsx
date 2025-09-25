import CustomIcon from "../../components/Icons/CustomIcon";

interface Prop {
    disableAnimate?: boolean;
}

function Footer({ disableAnimate }: Prop) {
    return (
        <footer id="contact" className=" border-t-1 border-[var(--custom-black-secondary)] lg:mt-30 md:mt-30 mt-10 bg-[var(--custom-black)] text-[var(--custom-white)] flex flex-col  items-center justify-center w-full p-4">
            <div className="lg:w-3/6 md:w-5/6 w-[90%]">
                <div className="w-full flex items-center">

                    <div className={(disableAnimate ? '' : 'animate animate-right ') + ` w-3/6 md:block lg:block hidden `}>
                        <img className="w-[80%]" src="logo_sf_hrz_white.png" alt="logo" />
                    </div>
                    <div className="lg:w-3/6 md:w-3/6 w-full space-y-6 py-6">
                        <h1 className={(disableAnimate ? '' : 'animate animate-show ') + ` text-left lg:text-3xl md:text-3xl text-2xl font-semibold italic`}>Entre em contato</h1>

                        <div className="space-y-4">
                            <a className={(disableAnimate ? '' : 'animate animate-show ') + ` flex items-center pl-1`} href="https://api.whatsapp.com/send?phone=5541992821468" target="_blank">
                                <CustomIcon icon="Whatsapp" className=" w-[2em] "></CustomIcon>
                                <p className="pl-2" >
                                    (41) 99282-1468</p>
                            </a>
                            <a className={(disableAnimate ? '' : 'animate animate-show ') + ` flex items-center `} style={{ paddingLeft: '2px' }} href="https://www.instagram.com/aluminiumengenharia/">
                                <CustomIcon icon="Instagram" className="w-[2.2em]"></CustomIcon>
                                <p className="pl-1.5">aluminiumengenharia</p>
                            </a>
                            <a className={(disableAnimate ? '' : 'animate animate-show ') + ` flex items-center pl-1" href="mailto:contato@aluminumengengaria.com.br`} target="_blank">
                                <CustomIcon icon="Email" className="w-[2em] "></CustomIcon>
                                <p className="pl-2">contato@aluminiumengengaria.com.br</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex md:flex-row lg:flex-row flex-col  items-center justify-between border-t-1 pt-4 border-[var(--custom-white)]">
                    <p className="md:text-md lg:text-md text-sm">Copyright © 2025 Aluminum Engenharia</p>
                    <p className="md:text-md lg:text-md text-sm">CNPJ: 55.937.172/0001-88</p>
                </div>

            </div>
        </footer >
    );
}


export default Footer;
