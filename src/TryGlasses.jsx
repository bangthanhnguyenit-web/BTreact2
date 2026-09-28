import React, { useState } from 'react';
import './TryGlasses.css';

// Import ảnh model từ thư mục assets
import modelImg from './assets/model.jpg';

// Import ảnh kính thumbnail (g1-g9.jpg) để hiển thị trong bộ chọn kính
import g1 from './assets/g1.jpg';
import g2 from './assets/g2.jpg';
import g3 from './assets/g3.jpg';
import g4 from './assets/g4.jpg';
import g5 from './assets/g5.jpg';
import g6 from './assets/g6.jpg';
import g7 from './assets/g7.jpg';
import g8 from './assets/g8.jpg';
import g9 from './assets/g9.jpg';

// Import ảnh kính đã cắt nền trong suốt (v1-v9.png) để đè lên mặt người mẫu
import v1 from './assets/v1.png';
import v2 from './assets/v2.png';
import v3 from './assets/v3.png';
import v4 from './assets/v4.png';
import v5 from './assets/v5.png';
import v6 from './assets/v6.png';
import v7 from './assets/v7.png';
import v8 from './assets/v8.png';
import v9 from './assets/v9.png';

// Mảng dữ liệu kính
const dataGlasses = [
  { id: 1, price: 30, name: "GUCCI G8850U", url: g1, overlay: v1, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 2, price: 50, name: "GUCCI G8759H", url: g2, overlay: v2, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 3, price: 30, name: "DIOR D6700HQ", url: g3, overlay: v3, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 4, price: 70, name: "DIOR D6005U",  url: g4, overlay: v4, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 5, price: 40, name: "PRADA P8750",  url: g5, overlay: v5, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 6, price: 60, name: "PRADA P9700",  url: g6, overlay: v6, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 7, price: 80, name: "FENDI F8750",  url: g7, overlay: v7, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 8, price: 100, name: "FENDI F8500", url: g8, overlay: v8, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
  { id: 9, price: 60, name: "FENDI F4300",  url: g9, overlay: v9, desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip." },
];

export default function TryGlasses() {
  const [selectedGlass, setSelectedGlass] = useState(dataGlasses[0]);

  return (
    <div className="try-glasses-app pb-5">
      {/* Header */}
      <header className="app-header text-center py-4 shadow w-100">
        <h2 className="m-0">TRY GLASSES APP ONLINE</h2>
      </header>

      <main className="container-fluid px-4 px-lg-5">
        <div className="row justify-content-center align-items-start text-center mb-5 mt-4 mx-auto" style={{ maxWidth: '780px' }}>

          {/* Người mẫu bên TRÁI: đeo kính theo lựa chọn */}
          <div className="col-5 position-relative model-card mx-2 shadow-sm rounded p-0 bg-white">
            <img src={modelImg} alt="Model With Glasses" className="img-fluid rounded w-100" />
            <img
              src={selectedGlass.overlay}
              alt={selectedGlass.name}
              className="glasses-overlay"
            />
            <div className="glasses-info text-start p-3">
              <h5 className="fw-bold text-danger m-0">{selectedGlass.name}</h5>
              <p className="small text-dark m-0">{selectedGlass.desc}</p>
            </div>
          </div>

          {/* Người mẫu bên PHẢI: ảnh gốc không có kính */}
          <div className="col-5 model-card mx-2 shadow-sm rounded p-0 bg-white">
            <img src={modelImg} alt="Model Original" className="img-fluid rounded w-100" />
          </div>

        </div>

        {/* Khu vực danh sách kính phía dưới */}
        <div className="glasses-list bg-white p-4 shadow rounded mx-auto" style={{ maxWidth: '900px' }}>
          <div className="row justify-content-center g-3">
            {dataGlasses.map((item) => (
              <div className="col-6 col-sm-4 col-md-2 text-center" key={item.id}>
                <button
                  className={`btn p-2 w-100 glass-btn h-100 ${selectedGlass.id === item.id ? 'active' : 'btn-outline-secondary'}`}
                  onClick={() => setSelectedGlass(item)}
                >
                  <img src={item.url} alt={item.name} className="img-fluid" style={{ maxHeight: '45px' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}