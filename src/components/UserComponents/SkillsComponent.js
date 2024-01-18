import React from "react"
import { Typography } from "antd";

const { Title } = Typography;

const SkillsComponent = ({userProfile}) => {
    return (
        <div>
        <Title level={4}>Yetkinlikler</Title>
        <ul>
        {userProfile.skills && userProfile.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
        ))}
        </ul>
      </div>
    )
}

export default SkillsComponent;