
import api from '../api/api';
import './Register.css'; // CSS نفسها للتصميم العصري
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({ UserName: "", Password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // تهيئة hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    // إذا المستخدم كتب بريد، نرسله كـ Email للأدمن
    const payload = {
      UserName: formData.UserName,
      Email: formData.UserName,  // لتغطية حالة الأدمن بالإيميل
      Password: formData.Password
    };

    const res = await api.post("/Auth/login", payload);
    localStorage.setItem("token", res.data.token);
    alert("تم تسجيل الدخول بنجاح!");
    navigate("/home"); 
  } catch (err) {
    alert(err.response?.data || "حدث خطأ");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="register-container">
      {/* خلفية تكنولوجية */}
      <div className="background-image">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-3d-illustration-depicting-a-conceptual-network-of-electronic-devices-image_3907550.jpg"
          alt="خلفية تكنولوجية"
        />
      </div>
      <div className="overlay"></div>

      {/* عناصر تكنولوجية زخرفية */}
      <div className="tech-elements">
        <div className="circuit-line line-1"></div>
        <div className="circuit-line line-2"></div>
        <div className="circuit-line line-3"></div>
        <div className="tech-icon">⚡</div>
        <div className="tech-icon">🔌</div>
        <div className="tech-icon">💻</div>
      </div>

      {/* نموذج الدخول */}
      <div className="register-form">
        <div className="form-header">
          <h2>تسجيل الدخول</h2>
          <p>ادخل بياناتك للانضمام لعالم الابتكار والتكنولوجيا</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="UserName"
              placeholder="البريد الإلكتروني أو اسم المستخدم"
              value={formData.UserName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>البريد الإلكتروني أو اسم المستخدم</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="Password"
              placeholder="••••••••"
              value={formData.Password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>كلمة المرور</label>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            <span>{isLoading ? "جاري الدخول..." : "دخول"}</span>
            <div className="btn-glow"></div>
          </button>
        </form>

        <div className="form-footer">
          <p>
            ليس لديك حساب؟ <a href="/register">إنشاء حساب</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
