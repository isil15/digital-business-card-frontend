import React, { useState } from 'react';
import { Button, Card, message, InputNumber } from 'antd';

const Buy = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (value) => {
    setQuantity(value);
  };

  const success = () => {
    message.success(`${quantity} adet ürün sepete eklendi`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Card hoverable={true} style={{ width: "30%", height: "250px", borderRadius: "12px", margin: "auto"}}>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2 style={{ marginBottom: '15px' }}>Kişisel İş Kartı</h2>
        <ul style={{ textAlign: 'center', marginTop: '20px', listStyle: 'none', padding: 0 }}>
          <li>- Kişiselleştirilebilir kart tasarımı</li>
          <li>- İstediğiniz kişisel hesaplarınızı ekleme</li>
          <li>- Kayıp/çalıntı durumunda ücretsiz yenileme</li>
          <li>- İstenildiği taktirde QR kod desteği</li>
          <li>- Sınırsız kullanım süresi</li>
        </ul>
      </div>
      <div>
      <h4 style={{ }}>200₺</h4>
      </div> 
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <InputNumber min={1} max={10} defaultValue={1} onChange={handleChangeQuantity} style={{ marginRight: '10px', alignItems: "left"}} />
        <Button onClick={success} style={{ background: "#C4D98B" }}>
          Sepete Ekle
        </Button>
      </div>
      
    </div>
  );
}

export default Buy;
