"use client";
import { useRouter } from "next/navigation";
import Footer from "../Components/Footer"

export default function BlogStandard() {
   const router = useRouter();

  return (
    <div style={{ fontFamily: "sans-serif" }}>
    
      <style>{`
        .nav-btn {
          background-color: transparent;
          color: white;
          border: 1px solid white;
          padding: 8px 16px;
          cursor: pointer;
          transition: 0.3s;
        }
        .nav-btn:hover {
          background-color: white;
          color: black;
        }
        .read-btn {
          background-color: #a57b46;
          color: white;
          border: none;
          padding: 10px 22px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }
        .read-btn:hover {
          background-color: #8a6338;
        }
      `}</style>

      <div
        style={{
          backgroundColor: "#a57b46",
          color: "white",
          display: "flex",
          justifyContent: "left",
          padding: "5px 10px",
          fontSize: "12px",
          gap: "20px",
        }}
      >
    
        <div>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75" alt="RESTAN Logo" 
        style={{ width: "20px" }}/>
         +4733378901</div>
        <div>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F7.png&w=128&q=75" alt="RESTAN Logo"
         style={{ width: "20px" }}/>
        food@restan.com</div>
      </div>

      
      <div
        style={{
         backgroundColor:"none",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
        }}>
        
        <div>
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="RESTAN Logo" 
            style={{ width: "100px", height: "auto" }}
          />
        </div>

        
        <div style={{ display: "flex", gap: "80px" }}>
          <div>Home</div>
          <div>Pages</div>
          <div>Menu</div>
          <div>Blog</div>
          <div>Shop</div>
        </div>

        
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        
        <div style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          position: "relative",
          cursor: "pointer"
        }}>
          🛒
          <div style={{
            position: "absolute",
            top: "5px",
            right: "7px",
            backgroundColor: "#b88a58",
            color: "white",
            fontSize: "12px",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            0
          </div>
        </div>

        <div onClick={() => router.push('/Reservation')}  style={{
          backgroundColor: "#b88a58",
          color: "white",
          fontWeight: "bold",
          padding: "10px 25px",
          borderRadius: "30px",
          cursor: "pointer"
        }}>
          Reservation
        </div>
      </div>
    </div>

    
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "150px 20px",
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/colorful-spices-with-copy-space-text-generative-ai_109161-220.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Blog Standard
        </div>
        <div style={{ fontSize: "16px" }}>🏠 Home › blog-standard</div>
      </div>
    

      <div
        style={{
          backgroundColor: "#fff",
          padding: "70px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        
        <div
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75"
              alt="Burger"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
          <div style={{ padding: "20px 25px", backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "13px",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              <div>📅 12 August, 2024</div>
              <div>👤 John Baus</div>
            </div>

            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              Picked up a Brussels burger Sprouts.
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#555",
                marginBottom: "20px",
              }}
            >
              Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.
            </div>

            <button className="dark:bg-black bg-amber-400 rounded-full hover:bg-black ">Read More</button>
          </div>
        </div>
    

       
        <div
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75"
              alt="Burger"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
          <div style={{ padding: "20px 25px", backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "13px",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              <div>📅 12 August, 2024</div>
              <div>👤 John Baus</div>
            </div>

            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#222",
              }}
            >
             This prefabricated passive house highly.
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#555",
                marginBottom: "20px",
              }}
            >
              Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.
            </div>

            <button className="dark:bg-black bg-amber-400 rounded-full hover:bg-black " >Read More</button>
          </div>
        </div>
      

     
        <div
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div>
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75"
              alt="Burger"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
          <div style={{ padding: "20px 25px", backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                fontSize: "13px",
                color: "#555",
                marginBottom: "8px",
              }}
            >
              <div>📅 12 August, 2024</div>
              <div>👤 John Baus</div>
            </div>

            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#222",
              }}
            >
             Overcame breeding point concerns has.
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#555",
                marginBottom: "20px",
              }}
            >
              Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.
            </div>

            <button className="dark:bg-black bg-amber-400 rounded-full hover:bg-black ">Read More</button>
          </div>
        </div>
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "50px 0",
  }}
>

  <div
    style={{
      width: "40px",
      height: "40px",
      border: "1px solid #ddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5px",
      color: "#aaa",
      backgroundColor: "#f3f3f3",
      cursor: "not-allowed",
    }}
  >
    🚫
  </div>


  {["1", "2", "3", "4", "5"].map((num, index) => (
    <div
      key={index}
      style={{
        width: "40px",
        height: "40px",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: num === "1" ? "#a57b46" : "white",
        color: num === "1" ? "white" : "black",
        fontWeight: "bold",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor =
          num === "1" ? "#8a6338" : "#f2f2f2";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor =
          num === "1" ? "#a57b46" : "white";
      }}
    >
      {num}
    </div>
  ))}

  
  <div
    style={{
      width: "40px",
      height: "40px",
      border: "1px solid #ddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    »
  </div>
</div>

      </div>   
      <div className="absolute bottom-[-300px] ">
     <Footer/>
     </div>
        

      </div>
  );
}