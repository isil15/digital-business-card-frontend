import { Card, Avatar, Typography } from "antd";
import AvatarComponent from "../components/UserComponents/AvatarComponent";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";

const { Title } = Typography;

function Home() {
  const userProfile = {
    firstName: "John",
    lastName: "Doe",
    githubUsername: "john-doe-github",
    linkedinUsername: "john-doe-linkedin",
  };

  return (
    <Card
      hoverable={true}
      style={{ width: "75%", height: "80%", borderRadius: "12px", margin: "auto", marginTop: "40px" }}
      actions={[
        <a href={`https://github.com/${userProfile.githubUsername}`} target="_blank" rel="noopener noreferrer" key="github">
          <GithubFilled style={{fontSize: "24px" }} />
        </a>,
        <a href={`https://www.linkedin.com/in/${userProfile.linkedinUsername}`} target="_blank" rel="noopener noreferrer" key="linkedin">
          <LinkedinFilled style={{ fontSize: "24px" }} />
        </a>,
      ]}
    >
      <AvatarComponent userProfile={userProfile} />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Title level={3}>{`${userProfile.firstName} ${userProfile.lastName}`}</Title>
        <p>About page</p>
      </div>
    </Card>
  );
}

export default Home;