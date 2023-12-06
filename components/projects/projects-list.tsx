import MyWebDevBlog from "./my-web-dev-blog";
import WeddingSite from "./wedding-site";
import XChange from "./x-change";
import ClickABug from "./click-a-bug";
import RamenPopup from "./ramen-popup"
import PollutionChecker from "./pollution-checker"
import Treadit from "./treadit";

type ProjectListComponentProps = {
    mode: string;
    modeStyles: Record<string, any>;
  };

export default function ProjectList({mode, modeStyles}: ProjectListComponentProps) {

    return (
        <main>
        <MyWebDevBlog mode={mode} modeStyles={modeStyles}/>
        <WeddingSite mode={mode} modeStyles={modeStyles}/>
        <XChange mode={mode} modeStyles={modeStyles}/>
        <ClickABug mode={mode} modeStyles={modeStyles}/>
        <RamenPopup mode={mode} modeStyles={modeStyles}/>
        <PollutionChecker mode={mode} modeStyles={modeStyles}/>
        <Treadit mode={mode} modeStyles={modeStyles}/>
        </main>
    )
}

// I need to change the wording of buttons on each carousel from 'visit site' to 'Show me'