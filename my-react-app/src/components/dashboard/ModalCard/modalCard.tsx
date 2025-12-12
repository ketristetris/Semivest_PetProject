import "./modalCard.scss";
import leaf from "../../../images/svg/leaf.svg";
import progress from "../../../images/svg/progress.svg";
import videoBlank from "../../../images/videoBlank.png";
import progressBarEmpty from "../../../images/svg/progressBarBlank.svg";
import Button from "../../universalComponents/button/button";
import targetColorful from "../../../images/svg/targetColorful.png";

const ModalCard = () => {
    const currentLesson = 3;
    const lessonNumber = 25;
    const progressPercents = Math.round((currentLesson / lessonNumber) * 100);
    const currentModule = "Lesson 3 - Analyze Charts";
    return (
        <div className="modalCard">
            <div className="thisModule">
                <div className="moduleInfo">
                    <div className="moduleInfoText">
                        <div className="moduleInfoHeading">
                            <div className="modulePercents">
                                <div className="h2">{progressPercents}%</div>
                                <div className="h5">Complete</div>
                            </div>
                            <div className="moduleBadge">
                                <img src={leaf} alt="" />
                                <div className="moduleBadgeName">Beginner</div>
                            </div>
                        </div>
                        <div className="currentModule">
                            <div className="currentModuleText">
                                Current Module:
                            </div>
                            <div className="currentModuleName">
                                {currentModule}
                            </div>
                        </div>
                    </div>
                    <div className="moduleInfoVideo">
                        <img alt="Modal video" src={videoBlank} />
                    </div>
                </div>
                <div className="progressBar">
                    <div className="progressBarText">
                        <div className="progressBarHeading">
                            <img src={progress} alt="" />
                            <div>Course progress</div>
                        </div>
                        <div className="coursesCount">
                            {currentLesson} of {lessonNumber} lessons
                        </div>
                    </div>
                    <div className="progressBarGraph">
                        <img src={progressBarEmpty} alt="" />
                        <div
                            className="progressBarAccent"
                            style={{ width: `${progressPercents}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="nextModule">
                <div className="Milestone">
                    <div className="MilestoneIconContainer">
                        <img src={targetColorful} alt="" />
                    </div>
                    <div className="nextMilestone">
                        <div className="MilestoneHeading">Next Milestone</div>
                        <div className="MilestoneTask">
                            Complete 5 lessons to unlock Practice Trading
                        </div>
                    </div>
                </div>
                <div className="nextModuleButton">
                    <Button
                        type="Accent"
                        style="Primary"
                        size="medium"
                        onClick={() => console.log("Go!")}
                        showRightArrow
                    >
                        {" "}
                        Continue modul
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;
