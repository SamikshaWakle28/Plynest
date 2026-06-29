import React from "react";

const WhatsAppBtn = () => {
  const phoneNumber = "919850985027";

  const defaultMessage = encodeURIComponent(
    "Hi, I'm interested in your services! Can you tell me more?"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <style>{`

        .whatsapp-floating-btn{
          position:fixed;
          right:1px;
          bottom:25px;
          width:45px;
          height:45px;
          border:none;
          border-radius:50%;
          background:#25D366;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:9999;
          box-shadow:0 8px 25px rgba(37,211,102,0.45);
          transition:all 0.3s ease;
          animation:floatWhatsapp 2.5s ease-in-out infinite;
        }

        .whatsapp-floating-btn:hover{
          transform:scale(1.1);
          box-shadow:0 12px 30px rgba(37,211,102,0.6);
        }

        .whatsapp-floating-btn svg{
          width:34px;
          height:34px;
        }

        /* Floating Animation */

        @keyframes floatWhatsapp{
          0%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-8px);
          }

          100%{
            transform:translateY(0px);
          }
        }

        /* Pulse Ring */

        .whatsapp-floating-btn::before{
          content:"";
          position:absolute;
          width:160%;
          height:160%;
          border-radius:50%;
          background:rgba(37,211,102,0.35);
          z-index:-1;
          animation:pulseWhatsapp 2s infinite;
        }

        @keyframes pulseWhatsapp{
          0%{
            transform:scale(1);
            opacity:0.8;
          }

          70%{
            transform:scale(1.5);
            opacity:0;
          }

          100%{
            opacity:0;
          }
        }

        /* Mobile */

        @media(max-width:768px){

          .whatsapp-floating-btn{
            width:58px;
            height:58px;
            right:18px;
            bottom:18px;
          }

          .whatsapp-floating-btn svg{
            width:30px;
            height:30px;
          }

        }

      `}</style>

      <button
        onClick={handleClick}
        className="whatsapp-floating-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            fill="#fff"
            d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
          />
          <path
            fill="#40c351"
            d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

export default WhatsAppBtn;