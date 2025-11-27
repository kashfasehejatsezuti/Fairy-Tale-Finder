import { isBirthday } from "../utils/gameLogic";
import type { Personality } from "../utils/gameLogic";
import type { UserData } from "./UserForm";
import type { CSSProperties } from "react";

export default function ResultScreen({
  user,
  result,
}: {
  user: UserData;
  result: Personality;
  birthday?: boolean;
}) {
  const birthdayToday = isBirthday(user.birthdate);

  return (
    <div style={pageStyle}>
      <div style={cardStyle} className="magic-card">
        <h2 style={titleStyle}>🎀 Congratulations {user.name}! 🎀</h2>

        <div style={iconContainerStyle}>{result.icon}</div>
        {/* GRADIENT CHARACTER NAME */}
        <p className="character-gradient">
          <strong>{result.character}</strong>
        </p>

        {birthdayToday && (
          <h3 style={birthdayStyle}>🎉 Happy Birthday, {user.name}! 🎉</h3>
        )}

        <p style={wishStyle}>✨ May your day sparkle with magic and joy! ✨</p>

        <p style={sectionTitle}>🌈 Your Colorful Magical Traits 🌈</p>

        <ul style={listStyle}>
          {result.traits.map((t) => (
            <li key={t} style={listItemStyle}>
              🌟 {t}
            </li>
          ))}
        </ul>

        <p style={magicText}>
          💫 Your destiny: <strong>{result.destiny}</strong>
        </p>
      </div>

      {/* RESPONSIVE + ANIMATIONS */}
      <style>
        {`
      
        /* Gradient Character Name */
          .character-gradient {
            font-size: 22px;
            font-weight: bold;
            margin: 12px 0;

            /* Strong + bright gradient */
            background: linear-gradient(
              90deg,
              #bf00ffec,
              #20c4f1ae
            );
            background-size: 300% auto;

            /* Makes gradient visible inside text */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            /* Smooth infinite glow animation */
            animation: shine 3s linear infinite;

            /* Always highlighted glow around text */
            text-shadow:
              0 0 10px rgba(255, 0, 255, 0.849),
              0 0 18px rgba(255, 255, 0, 0.4),
              0 0 22px rgba(0, 200, 255, 0.4);
          }

          @keyframes shine {
            0% { background-position: 0% center; }
            50% { background-position: 100% center; }
            100% { background-position: 0% center; }
          }


        /* Hover Glow */
        .magic-card:hover {
          transform: scale(1.04);
          box-shadow: 0 0 26px rgba(255, 0, 204, 0.45);
        }

        .icon {
          transition: 0.3s ease;
        }

        @media (max-width: 480px) {
          .icon { transform: scale(0.75); }
          .character-gradient { font-size: 18px; }
        }
    
        .magic-card {
          animation: rainbowGlow 4s infinite alternate ease-in-out,
                     fadeIn 1s ease-out;
          position: relative;
          overflow: hidden;
        }

        .magic-card:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 0 40px rgba(255, 0, 204, 0.6);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes rainbowGlow {
          0%   { box-shadow: 0 0 20px #ff4da6; }
          25%  { box-shadow: 0 0 20px #ffcc00; }
          50%  { box-shadow: 0 0 20px #33ccff; }
          75%  { box-shadow: 0 0 20px #8aff80; }
          100% { box-shadow: 0 0 20px #da66ff; }
        }

        /* floating sparkles */
        .magic-card::before {
          font-size: 35px;
          position: absolute;
          left: 1%;
          top: 4%;
          animation: sparkleFloat 3s infinite ease-in-out;
        }

        .magic-card::after {
          content: "✨";
          font-size: 35px;
          position: absolute;
          right: 8%;
          bottom: 4%;
          animation: sparkleFloat 3s infinite ease-in-out reverse;
        }

        @keyframes sparkleFloat {
          0%   { transform: translateY(0px); opacity: 0.9; }
          50%  { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.8; }
        }

        /* MOBILE RESPONSIVE */
            @media (max-width: 480px) {
              .magic-card {
              height: auto !important;
              max-height: 80vh !important;   /* fits inside screen */
              overflow-y: auto !important;   /* allows soft scroll only if needed */
              padding: 16px !important
              }
            }

            @media (max-width: 360px) {
              .magic-card {
                max-height: 78vh !important;
                padding: 14px !important;
              }
            }

            @media (max-width: 320px) {
              .magic-card {
                max-height: 76vh !important;
                padding: 12px !important;
              }}

          .magic-card img {
            width: 130px !important;
            height: 130px !important;
          }

          h2 {
            font-size: 20px !important;
          }

          p, li {
            font-size: 14px !important;
          }

          strong {
            font-size: 15px !important;
          }
        }

        @media (max-width: 350px) {
          .magic-card img {
            width: 110px !important;
            height: 110px !important;
          }
        }
      `}
      </style>
    </div>
  );
}

/* ------------------- MAIN STYLES ------------------- */

const pageStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "10vh",
  padding: "10px",
  boxSizing: "border-box",
};

const cardStyle: CSSProperties = {
  background:
    "linear-gradient(135deg, #ffc099, #ffccff, #cc99ff, #99ccff, #99ffcc)",
  padding: "25px",
  width: "100%", // ⭐ makes it shrink naturally
  maxWidth: "350px", // desktop size
  borderRadius: "25px",
  textAlign: "center",
  border: "4px solid white",
  transition: "0.4s ease",
  backgroundSize: "300% 300%",
  boxSizing: "border-box", // ⭐ prevents overflow
};

const titleStyle: CSSProperties = {
  color: "#ff007f",
  fontWeight: "bold",
  fontSize: "24px",
};

const iconContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "150px",
  margin: "0 auto 15px auto",
  borderRadius: "50%",
  background: "#efe3ee",
  border: "4px solid #ffccff",
  boxShadow: "0 0 25px rgba(255, 182, 193, 0.7)",
};

const birthdayStyle: CSSProperties = {
  color: "#ff0066",
  fontWeight: "bold",
  marginBottom: "10px",
  fontSize: "20px",
};

const wishStyle: CSSProperties = {
  fontStyle: "italic",
  color: "#cc0066",
  marginBottom: "12px",
  fontSize: "16px",
};

const sectionTitle: CSSProperties = {
  fontWeight: "bold",
  marginTop: "12px",
  fontSize: "20px",
  color: "#ff33cc",
};

const listStyle: CSSProperties = {
  listStyle: "none",
  paddingLeft: 0,
  marginBottom: "12px",
};

const listItemStyle: CSSProperties = {
  margin: "5px 0",
  fontSize: "17px",
  color: "#b30086",
};

const magicText: CSSProperties = {
  marginTop: "10px",
  fontSize: "17px",
  color: "#880e4f",
};
