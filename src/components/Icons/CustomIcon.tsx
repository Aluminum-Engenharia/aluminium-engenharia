import Safe from "./Safe";
import Sun from "./Sun";
import ReturnApport from "./ReturnApport";
import Project from "./Project";
import Moon from "./Moon";
import Maintenance from "./Maintenance";
import CostReduction from "./CostReduction";
import Authenticity from "./Authenticity";
import Mission from "./Mission";
import Vision from "./Vision";
import Values from "./Values";
import Whatsapp from "./Whatsapp";
import Email from "./Email";
import Instagram from "./Instagram";
import Cogs from "./Cogs";
import SafeWork from "./SafeWork";


type Props = {
    style?: any;
    className?: string;
    icon: string;
}

function CustomIcon({ style, className, icon }: Props) {
    switch (icon) {
        case "Safe":
            return (
                <Safe className={className} style={style}></Safe>
            )
        case "Sun":
            return (
                <Sun className={className} style={style}></Sun>
            )
        case "ReturnApport":
            return (
                <ReturnApport className={className} style={style}></ReturnApport>
            )
        case "Project":
            return (
                <Project className={className} style={style}></Project>
            )
        case "Moon":
            return (
                <Moon className={className} style={style}></Moon>
            )
        case "Maintenance":
            return (
                <Maintenance className={className} style={style}></Maintenance>
            )
        case "CostReduction":
            return (
                <CostReduction className={className} style={style}></CostReduction>
            )
        case "Authenticity":
            return (
                <Authenticity className={className} style={style}></Authenticity>
            )
        case "Mission":
            return (
                <Mission className={className} style={style}></Mission>
            )
        case "Vision":
            return (
                <Vision className={className} style={style}></Vision>
            )
        case "Values":
            return (
                <Values className={className} style={style}></Values>
            )
        case "Whatsapp":
            return (
                <Whatsapp className={className} style={style}></Whatsapp>
            )
        case "Email":
            return (
                <Email className={className} style={style}></Email>
            )
        case "Instagram":
            return (
                <Instagram className={className} style={style}></Instagram>
            )
        case "Cogs":
            return (
                <Cogs className={className} style={style}></Cogs>
            )
        case "SafeWork":
            return (
                <SafeWork className={className} style={style}></SafeWork>
            )

    }
}

export default CustomIcon;