import React, { useState } from "react";
import {
  Col,
  Row,
} from "antd";
import UserProfileForm from "../components/UserComponents/UserForm";
import AvatarComponent from "../components/UserComponents/AvatarComponent";
import SkillsComponent from "../components/UserComponents/SkillsComponent";
import * as userApi from '../api/userApi';

const userProfileSchema = {
  firstName: "Johna",
  lastName: "Doe",
  socialLinks: "https://example.com/johndoe",
  personalPage: "https://example.com/johndoe/personal",
  customLink: "https://example.com/johndoe/custom",
  phone: "+1234567890", // Örnek telefon numarası
  address: "123 Main St, City", // Örnek adres
  skills: ["React", "Node.js", "JavaScript"], // Örnek yetenekler
}

const dummyUserData = {
  email: "john.doe@example.com",
  username: "johndoe",
  password: "password123",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    adobePortfolio: "https://myportfolio.adobe.com/johndoe",
    custom: [
      {
        platform: "customPlatform",
        link: "https://customplatform.com/johndoe",
      },
    ],
  },
  personalPage: {
    about: "I am a passionate developer.",
    skills: ["React", "Node.js", "JavaScript"],
    projects: [
      {
        title: "Project 1",
        description: "Description of Project 1",
      },
      {
        title: "Project 2",
        description: "Description of Project 2",
      },
    ],
  },
  customLink: "https://example.com/johndoe/custom",
};


const Profile = () => {
  const [userProfile, setUserProfile] = useState(userProfileSchema);

  return (
    <div>
      <Row
        justify="center"
        gutter={[16, 16]}
        style={{ marginTop: "60px", verticalAlign: "top" }}
      >
        <Col span={8} style={{ textAlign: "center" }}>
          <AvatarComponent userProfile={userProfile}></AvatarComponent>
        </Col>

        <Col span={8} style={{ textAlign: "center", verticalAlign: "top" }}>
          <UserProfileForm
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          >
            {" "}
          </UserProfileForm>
        </Col>

        <Col span={8} style={{ textAlign: "center", verticalAlign: "top" }}>
          <SkillsComponent userProfile={userProfile}></SkillsComponent>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
