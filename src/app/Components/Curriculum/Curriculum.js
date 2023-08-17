import React from "react";
import "./Curriculum.scss";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
function Curriculum() {
    return (
        <div className="curriculum">
            <div className="curiculum-container">
                <div className="heading">
                    <span>Curriculum</span>
                </div>
                <div className="header">
                    <div className="head">
                        <BsFillCircleFill className="blue" />
                        <p className="para">Live Course </p>
                    </div>

                    <div className="head">
                        <BsFillCircleFill className="green" />
                        <p className="para">Self Paced</p>
                    </div>
                </div>

                <div className="module">
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">
                            Module 1 - Preparatory Sessions – Linux
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 2 - Amazon Web Services</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 3 - Data Virtualization</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">
                            Module 4 - Migration and Fault Tolerance
                        </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 5 - Python (Self paced)</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 6 - DevOps </p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                </div>

                <div className="heading">
                    <span>Elective</span>
                </div>
                <div className="module">
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 7 - Kubernetes</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 8 - Terraform</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 9 - DevOps on AWS</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Job Readiness</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon-part">
                            <BsFillCircleFill className="icon" />
                        </div>
                        <p className="para">Module 10 - Azure DevOps</p>

                        <div className="icon-part">
                            <AiOutlineDown className="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;