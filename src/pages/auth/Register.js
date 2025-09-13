import React, { useState } from "react";
import api from "../api/api"; // استيراد الـ instance (غيري المسار حسب مكان الملف)
import "./Register.css"; // نفس الـ CSS السابق

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false); // state جديد للـ loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const payload = {
      FullName: formData.name, // ⚠️ تحويل الاسم
      Email: formData.email,
      Password: formData.password,
      Role: "Student" // يمكن تحددي الدور من هنا
    };

    const res = await api.post("/Auth/register", payload);
    alert(res.data || "تم إنشاء الحساب بنجاح!");
    setFormData({ name: "", email: "", password: "" });
  } catch (err) {
    alert(err.response?.data || "حدث خطأ أثناء التسجيل");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="register-container">
      {/* خلفية مع صورة تكنولوجية */}
      <div className="background-image">
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-3d-illustration-depicting-a-conceptual-network-of-electronic-devices-image_3907550.jpg" alt="خلفية تكنولوجية" />
      </div>
      
      {/* طبقة الترحيل */}
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

      {/* النموذج الرئيسي */}
      <div className="register-form">
        <div className="form-header">
          <h2>إنشاء حساب تكنولوجي</h2>
          <p>انضم إلى عالم الابتكار والتكنولوجيا المتقدمة</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading} // تعطيل الإدخال أثناء الـ loading
            />
            <label>الاسم</label>
          </div>
          
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>البريد الإلكتروني</label>
          </div>
          
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <label>كلمة المرور</label>
          </div>
          
          <button type="submit" className="submit-btn" disabled={isLoading}>
            <span>{isLoading ? "جاري الإرسال..." : "إنشاء حساب"}</span>
            <div className="btn-glow"></div>
          </button>
        </form>
        
        <div className="form-footer">
          <p>لديك حساب بالفعل؟ <a href="/login">تسجيل الدخول</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;