import { useState } from "react";

const WHATSAPP_NUMBER = "9899913137"; // Replace with your WhatsApp number (country code + number, no +)
const WHATSAPP_MESSAGE = "Hi! I'm interested in your gift hampers. 🎁"; // Pre-filled message

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
          70%  { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @keyframes wa-bounce-in {
          0%   { transform: scale(0.5); opacity: 0; }
          60%  { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes wa-tooltip-fade {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .wa-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          animation: wa-bounce-in 0.6s cubic-bezier(0.34,1.56,0.64,1) both,
                     wa-pulse 2.2s ease-out 1s infinite;
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.2s ease;
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
        }

        .wa-btn:hover {
          transform: scale(1.13);
          box-shadow: 0 10px 32px rgba(37, 211, 102, 0.55);
          animation: none;
        }

        .wa-btn svg {
          width: 32px;
          height: 32px;
          fill: #ffffff;
          transition: transform 0.2s ease;
        }

        .wa-btn:hover svg {
          transform: rotate(-8deg) scale(1.08);
        }

        .wa-tooltip {
          position: fixed;
          bottom: 38px;
          right: 98px;
          z-index: 9998;
          background: #ffffff;
          color: #1a1a1a;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          padding: 9px 15px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          animation: wa-tooltip-fade 0.22s ease both;
          box-shadow: 0 4px 20px rgba(0,0,0,0.13);
          border: 1px solid rgba(37,211,102,0.2);
        }

        .wa-tooltip::after {
          content: '';
          position: absolute;
          right: -7px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 0 6px 7px;
          border-style: solid;
          border-color: transparent transparent transparent #ffffff;
          filter: drop-shadow(2px 0 1px rgba(0,0,0,0.06));
        }

        .wa-badge {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 16px;
          height: 16px;
          background: #ff3b30;
          border-radius: 50%;
          border: 2px solid #fff;
        }
      `}</style>

      {hovered && (
        <div className="wa-tooltip">
          💬 Chat with us on WhatsApp!
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Official WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 2C8.28 2 2 8.276 2 16a13.95 13.95 0 0 0 1.898 7.077L2 30l7.12-1.867A13.948 13.948 0 0 0 16.004 30C23.724 30 30 23.724 30 16S23.724 2 16.004 2zm0 25.52a11.52 11.52 0 0 1-5.88-1.608l-.42-.25-4.224 1.107 1.128-4.12-.274-.432A11.488 11.488 0 0 1 4.48 16c0-6.36 5.168-11.52 11.524-11.52S27.52 9.64 27.52 16s-5.16 11.52-11.516 11.52zm6.32-8.624c-.348-.174-2.056-1.014-2.376-1.13-.318-.114-.55-.174-.78.174-.232.348-.896 1.13-1.098 1.362-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.726-1.034-.924-1.73-2.063-1.932-2.412-.202-.348-.022-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.088-.174-.782-1.882-1.072-2.578-.28-.676-.566-.584-.78-.594l-.664-.012c-.232 0-.608.088-.926.436-.318.348-1.212 1.184-1.212 2.888s1.24 3.352 1.412 3.584c.174.232 2.44 3.724 5.912 5.222.826.356 1.47.568 1.974.728.828.264 1.582.226 2.178.138.664-.1 2.056-.84 2.346-1.652.29-.812.29-1.51.202-1.652-.086-.144-.318-.232-.666-.406z"/>
        </svg>
        <span className="wa-badge" aria-hidden="true" />
      </a>
    </>
  );
};

export default WhatsAppButton;
