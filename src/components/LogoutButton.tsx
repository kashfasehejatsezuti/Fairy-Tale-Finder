export default function LogoutButton({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <button className="magic-btn" onClick={onLogout}>
        ✨ Try Again ✨
      </button>

      <style>
        {`
          .magic-btn {
            background: linear-gradient(135deg, #ff99cc, #ff66b2, #cc66ff, #66ccff);
            background-size: 300% 300%;
            padding: 12px 25px;
            border: none;
            border-radius: 30px;
            font-size: 18px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
            transition: all 0.4s ease;
            animation: buttonGlow 4s infinite alternate ease-in-out;
          }

          .magic-btn:hover {
            transform: scale(1.08) rotate(1deg);
            box-shadow: 0 0 30px rgba(255, 20, 147, 0.8);
            background-position: 100% 0;
          }

          @keyframes buttonGlow {
            0%   { box-shadow: 0 0 15px #ff99cc; }
            25%  { box-shadow: 0 0 15px #ffcc00; }
            50%  { box-shadow: 0 0 15px #33ccff; }
            75%  { box-shadow: 0 0 15px #99ff66; }
            100% { box-shadow: 0 0 15px #da66ff; }
          }

          /* Mobile Responsive */
          @media (max-width: 480px) {
            .magic-btn {
              font-size: 16px;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
