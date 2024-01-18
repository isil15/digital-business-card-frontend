import React, {useState} from "react";
import {
    Avatar,
  Typography,
  Upload,
  message
} from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AvatarComponent = ({ userProfile }) => {
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(
    "https://via.placeholder.com/150" // Placeholder avatar URL
  );
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      message.success(`${info.file.name} file uploaded successfully`);
      setAvatarUrl(URL.createObjectURL(info.file.originFileObj));
    } else if (info.file.status === "error") {
      setLoading(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const customRequest = ({ file, onSuccess }) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Lütfen sadece resim dosyası ekleyin!");
      return;
    }

    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <div>
    <Upload
        customRequest={customRequest}
        showUploadList={false}
        beforeUpload={(file) => {
          const isImage = file.type.startsWith("image/");
          if (!isImage) {
            message.error("Lütfen sadece resim dosyası ekleyin!");
          }
          return isImage;
        }}
        onChange={handleChange}
      >
        <Avatar
          size={90}
          icon={
            loading ? (
              <LoadingOutlined />
            ) : avatarUrl ? (
              <img src={avatarUrl} alt="avatar" />
            ) : (
              <UserOutlined />
            )
          }
          style={{ cursor: "pointer", margin: "auto" }}
        />
      </Upload>
      <div>
        <Title level={4}>
          {userProfile.firstName} {userProfile.lastName}
        </Title>
      </div>
    </div>
  );
};

export default AvatarComponent;
