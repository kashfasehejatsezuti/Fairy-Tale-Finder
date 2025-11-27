import { useEffect, useState, type CSSProperties } from "react";
import UserForm, { type UserData } from "./components/UserForm";
import NumberSelect from "./components/NumberSelect";
import ResultScreen from "./components/ResultScreen";
import LogoutButton from "./components/LogoutButton";
import {
  getRandomPersonality,
  isBirthday,
  type Personality,
} from "./utils/gameLogic";

export default function App() {
  const [user, setUser] = useState<UserData | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [selected, setSelected] = useState<number | null>(() => {
    const saved = localStorage.getItem("num");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    if (selected !== null)
      localStorage.setItem("num", JSON.stringify(selected));
  }, [user, selected]);

  function handleUserSubmit(data: UserData) {
    setUser(data);
  }

  function handlePick(num: number) {
    setSelected(num);
  }

  function handleLogout() {
    localStorage.clear();
    setUser(null);
    setSelected(null);
  }

  const result: Personality | null =
    selected !== null ? getRandomPersonality() : null;
  const birthdayToday = user ? isBirthday(user.birthdate) : false;

  return (
    <div style={appStyle} className="bg-animated fadeIn">
      <div style={contentWrapper}>
        {!user && <UserForm onSubmit={handleUserSubmit} />}

        {user && selected === null && <NumberSelect onPick={handlePick} />}

        {user && selected !== null && result && (
          <>
            <ResultScreen
              user={user}
              result={result}
              birthday={birthdayToday}
            />
            <LogoutButton onLogout={handleLogout} />
          </>
        )}

        <p style={signatureStyle}>Created by Kashfa Sehejat Sezuti</p>
        <p style={signatureStyle1}>Inspired by Riha & Risha</p>
      </div>

      <style>
        {`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        @keyframes moveBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatSparkles {
          0% { transform: translateY(0) rotate(0); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(20deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0); opacity: 0.7; }
        }

        .bg-animated::before,
        .bg-animated::after {
          content: "✦ ✧ ✦ ✧ ✦";
          position: absolute;
          font-size: 32px;
          color: rgba(255,255,255,0.45);
          animation: floatSparkles 4s infinite ease-in-out;
        }

        .bg-animated::before {
          top: 10%;
          left: 10%;
          animation-duration: 5s;
        }

        .bg-animated::after {
          bottom: 10%;
          right: 10%;
          animation-duration: 6.5s;
        }

        .fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        `}
      </style>
    </div>
  );
}

const appStyle: CSSProperties = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  background: "linear-gradient(135deg, #ffccff, #ff99cc, #cc99ff, #99ccff)",
  backgroundSize: "300% 300%",
  animation: "moveBG 12s ease infinite",
};

const contentWrapper: CSSProperties = {
  textAlign: "center",
  zIndex: 3,
  width: "100%",
  maxWidth: "420px",
  margin: "0 auto",
  boxSizing: "border-box",
  padding: "0 10px",
};

const signatureStyle: CSSProperties = {
  marginTop: 30,
  fontSize: 14,
  color: "white",
  opacity: 0.9,
  fontStyle: "italic",
};

const signatureStyle1: CSSProperties = {
  marginTop: 5,
  fontSize: 14,
  color: "white",
  opacity: 0.9,
  fontStyle: "italic",
};
