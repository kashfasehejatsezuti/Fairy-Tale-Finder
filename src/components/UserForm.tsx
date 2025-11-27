import { useState, type CSSProperties } from "react";

export interface UserData {
  name: string;
  birthdate: string;
  sex: string;
}

export default function UserForm({
  onSubmit,
}: {
  onSubmit: (data: UserData) => void;
}) {
  const [form, setForm] = useState<UserData>({
    name: "",
    birthdate: "",
    sex: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle} className="form-card">
        <h2 style={titleStyle}>🌸 Welcome to the Magical Game 🌸</h2>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={inputStyle}
            className="magic-input"
          />

          <input
            type="date"
            name="birthdate"
            onChange={handleChange}
            required
            style={inputStyle}
            className="magic-input"
          />

          <select
            name="sex"
            onChange={handleChange}
            required
            style={inputStyle}
            className="magic-input"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <button type="submit" style={buttonStyle} className="magic-btn">
            ✨ Continue ✨
          </button>
        </form>

        <style>
          {`
            /* CARD ANIMATION */
            .form-card {
              animation: fadeIn 0.9s ease-out;
            }

            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(25px); }
              to { opacity: 1; transform: translateY(0); }
            }

            /* INPUT ANIMATION */
            .magic-input {
              transition: all 0.3s ease;
            }

            .magic-input:focus {
              border-color: #ff66cc !important;
              box-shadow: 0 0 12px rgba(255, 102, 204, 0.8);
              transform: scale(1.03);
              outline: none;
            }

            /* BUTTON ANIMATION */
            .magic-btn {
              transition: all 0.4s ease;
              animation: glowPulse 3s infinite ease-in-out;
            }

            @keyframes glowPulse {
              0%   { box-shadow: 0 0 10px #ff99cc; }
              50%  { box-shadow: 0 0 18px #cc66ff; }
              100% { box-shadow: 0 0 10px #ff99cc; }
            }

            .magic-btn:hover {
              transform: scale(1.08) rotate(1deg);
            }

            /* MOBILE FRIENDLY */
            @media (max-width: 480px) {
              .form-card {
                width: 90% !important;
                padding: 18px !important;
              }
              input, select {
                font-size: 15px !important;
              }
              h2 {
                font-size: 20px !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const wrapperStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  marginTop: "35px",
};

const cardStyle: CSSProperties = {
  background:
    "linear-gradient(135deg, #ffccff, #ff99cc, #cc99ff, #99ccff, #99ffcc)",
  padding: "25px",
  width: "350px",
  borderRadius: "25px",
  textAlign: "center",
  border: "4px solid white",
  boxShadow: "0 0 25px rgba(255, 182, 193, 0.7)",
  backgroundSize: "300% 300%",
};

const titleStyle: CSSProperties = {
  color: "#ff33cc",
  fontWeight: "bold",
  fontSize: "24px",
  marginBottom: "15px",
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle: CSSProperties = {
  padding: "12px",
  borderRadius: "10px",
  border: "3px solid white",
  fontSize: "17px",
  background: "white",
  boxShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
};

const buttonStyle: CSSProperties = {
  padding: "12px",
  borderRadius: "20px",
  border: "none",
  background: "linear-gradient(135deg, #ff66cc, #cc33ff)",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer",
};
