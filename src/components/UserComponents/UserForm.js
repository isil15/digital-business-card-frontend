import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const UserProfileForm = ({ userProfile, setUserProfile}) => {
  const [editMode, setEditMode] = useState(false);

  const onFinish = (values) => {
    console.log("Form values:", values);
    setUserProfile(values)
    setEditMode(true);
  };

  return (
    <Form name="profileForm" onFinish={onFinish} initialValues={userProfile}>
      <Form.Item
        label="Ad"
        name="firstName"
        rules={[{ required: true, message: "Lütfen adınızı girin!" }]}
      >
        <Input disabled={!editMode} />
      </Form.Item>

      <Form.Item
        label="Soyad"
        name="lastName"
        rules={[{ required: true, message: "Lütfen soyadınızı girin!" }]}
      >
        <Input disabled={!editMode} />
      </Form.Item>

      <Form.Item label="Telefon" name="phone">
        <Input disabled={!editMode} />
      </Form.Item>

      <Form.Item label="Adres" name="address">
        <Input disabled={!editMode} />
      </Form.Item>

      <Form.Item>
        {editMode ? (
          <>
            <Button type="primary" onClick={() => setEditMode(false)} htmlType="submit">
              Güncelle
            </Button>
            <Button type="button" onClick={() => setEditMode(false)}>
              İptal
            </Button>
          </>
        ) : (
          <Button type="button" onClick={() => setEditMode(true)}>
            Profili Düzenle
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default UserProfileForm;
