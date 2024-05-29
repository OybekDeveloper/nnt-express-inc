import React from "react";

const Map = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <a
        href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}
      >
        Toshkent
      </a>
      <a
        href="https://yandex.uz/maps/10335/tashkent/house/YkAYdQViSkYCQFprfX9wcXRhYg==/?ll=69.322544%2C41.310656&utm_medium=mapframe&utm_source=maps&z=18"
        style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}
      >
        Sultonali Mashhadiy koʻchasi, 45 Toshkentning — Yandex Xaritalar
      </a>
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=69.322544%2C41.310656&mode=whatshere&whatshere%5Bpoint%5D=69.322335%2C41.310826&whatshere%5Bzoom%5D=17&z=18"
        width="600"
        height="500"
        frameBorder="1"
        allowFullScreen
        style={{ position: "relative" }}
      ></iframe>
    </div>
  );
};

export default Map;
