import React from "react";
import { Space, Typography, Row, Col, Image } from "antd";
import { useSpring, animated } from "react-spring";
const { Title, Paragraph } = Typography;

function HomePage() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });


  return (
    <animated.div style={fadeIn}>
      <Row justify="center" align="middle" style={{ minHeight: "65vh" }}>
        <Col span={20} style={{ textAlign: "center" }}>
          <Space direction="vertical" align="center">
            <Title level={1} style={{ fontSize: "55px" }}>
              Dijital İş Kartınızla Tanışın: İşinizi Parlatmanın Yeni Yolu!🍀
            </Title>
            <Paragraph style={{ fontSize: "22px", marginBottom: 0 }}>
              Profesyonel kimliğinizi dijital dünyaya taşımanın şimdi tam
              zamanı! Dijital İş Kartı ile işinizi öne çıkarın, ağınızı
              genişletin ve kendinizi dijital dünyada unutulmaz kılın.
            </Paragraph>
          </Space>
        </Col>
        <Col
          span={20}
          style={{
            textAlign: "center",
            position: "absolute",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        >
          <Image
            width={450}
            src="/card.jpg"
            alt="Dijital İş Kartı"
            style={{ borderRadius: "10px", marginBottom: "2em" }}
          />
        </Col>
      </Row>
    </animated.div>
  );
}

export default HomePage;
