import React,{
  useState
} from "react";
// import corn from "../images/corn2.jpg";
// import MainImageSection from "../components/MainImageSection";
import styled from "styled-components";
import ssugarcane from "../images/ssugarcane.jpg";
import bot5 from "../images/botanic5.jpg";
import { MdGppGood } from "react-icons/md";
import logo from "../logo58.png";
// import { MdOutlineYard } from "react-icons/md";
import sugarcane1 from "../images/S_BLB.jpg";
import sugarcane2 from "../images/S_RR.jpg";
import sugarcane3 from "../images/s_rust.jpg";
import Switch from 'react-switch';
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
.language-toggle{
  /* position: "fixed";
   top:"10px";
   right: "10px";  */
   display: flex;
   justify-content:flex-end;
   margin-top: 30px;
   margin-right: 40px;

  
}
  .container {
    display: flex;
    margin: 40px 30px 0px 30px;
    /* width: 85%; */
    justify-content: center;
    align-items: center;
    .container-1 {
      padding-left: 80px;
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 150px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 50%;
      }
    }

    .container-2 {
      flex: 1;
      padding: 10px 70px 0px 50px;

      .heading {
        font-size: 30px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.yellow};
        line-height: 1.7px;
      }

      .para {
        color: ${({ theme }) => theme.colors.lightblack};
      }

      .navlink {
        text-decoration: none;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.background};
      }
    }
  }

  .container-3 {
    .para-1 {
      margin: 0px 100px 0px 100px;
      color: ${({ theme }) => theme.colors.lightblack};
    }
  }

  .container-4 {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .container-41 {
      .img {
        height: 38rem;
        width: 30rem;
        margin-left: auto;
        margin-top: 50px;
        margin-right: auto;
        border-radius: 10px;
        position: relative;
        top: 0;
        left: 0;
      }
    }
    .container-42 {
      /* border: 2px solid black; */
      height: 35rem;
      width: 35rem;
      /* height: 40rem; */

      .logo1 {
        width: 40px;
        height: 30px;
      }

      .intro-para {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: -20px;
        color: ${({ theme }) => theme.colors.lightblack};
        margin-top: -1px;
      }
      .heading-1 {
        font-size: 50px;
        line-height: 1em;
        font-weight: 700;
        text-transform: none;
        /* letter-spacing: -0.04em; */
        color: ${({ theme }) => theme.colors.darkgreen};
      }

      .heading-2 {
        font-size: 24px;
        line-height: 26px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.background};
      }

      .spec-para {
        position: relative;
        display: block;
        /* margin-top: 39px; */
        color: ${({ theme }) => theme.colors.yellow};
        font-weight: 700;
        font-size: 20px;
      }

      .list-items {
        position: relative;
        /* display: block; */
        /* margin-top: 20px; */
        /* color: ${({ theme }) => theme.colors.black}; */
        div {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 15px;
          margin-bottom: -30px;
          font-weight: 400;

          .icon {
            color: ${({ theme }) => theme.colors.yellow};
            font-size: 20px;
            align-items: center;
            /* padding-top: 20px; */

            &:hover {
              color: ${({ theme }) => theme.colors.background};
            }
          }

          .lidata {
            padding-bottom: 6px;
          }
        }
      }

      .video-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* border: 2px solid black; */
        margin-top: 30px;

        .video-section-1 {
          padding-left: 10px;
          iframe {
            border-radius: 15px;
          }
        }

        .video-section-2 {
          border-left: 10px solid ${({ theme }) => theme.colors.yellow};
          height: 70px;
          margin-left: 15px;
          border-radius: 20px;
        }

        .video-section-3 {
          margin-left: 20px;

          p {
            margin-bottom: -20px;
            color: ${({ theme }) => theme.colors.lightblack};
            font-weight: 500;
          }

          h1 {
            margin-bottom: -20px;
          }
        }
      }
    }
  }

  .container-5 {
    margin: 150px 70px 150px 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 40px;
    background-color: ${({theme})=>theme.colors.white};;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .container-52 {
      color: darkred;
    }

    .container-53 {
      color: ${({ theme }) => theme.colors.lightblack};
    }

    .container-51 {
      /* margin-top: 70px; */
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 60px;
      /* height: 600px; */
      /* border: 2px solid black; */

      h1 {
        color: ${({ theme }) => theme.colors.yellow};
        font-size: 25px;
        line-height: 20px;
        margin-bottom: -10px;
      }

      p {
        font-size: 18px;
        font-weight: 600;
        /* color: ${({ theme }) => theme.colors.yellow}; */
      }
      .img {
        width: 40px;
        height: 60px;
      }
    }
  }

 
    .urdu {
    direction: rtl;
    .container {
      display: flex;
      margin: 40px 30px 0px 30px;
      /* width: 85%; */
      justify-content: center;
      align-items: center;
      .container-1 {
        padding-right: 100px;
        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 150px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          border-radius: 50%;
        }
      }

      .container-2 {
        flex: 1;
        padding: 10px 0px 0px 70px;

        .heading {
          font-size: 30px;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.yellow};
          line-height: 1.7px;
        }

        .para {
          color: ${({ theme }) => theme.colors.lightblack};
        }

        .navlink {
          text-decoration: none;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.background};
        }
      }
    }

    .container-3 {
      .para-1 {
        margin: 0px 100px 0px 100px;
        color: ${({ theme }) => theme.colors.lightblack};
      }
    }

    .container-4 {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5rem;

      .container-41 {
        .img {
          height: 38rem;
          width: 30rem;
          margin-left: auto;
          margin-top: 50px;
          margin-right: auto;
          border-radius: 10px;
          position: relative;
          top: 0;
          left: 0;
        }
      }
      .container-42 {
        /* border: 2px solid black; */
        height: 35rem;
        width: 35rem;
        /* height: 40rem; */

        .logo1 {
          width: 40px;
          height: 30px;
        }

        .intro-para {
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: -20px;
          color: ${({ theme }) => theme.colors.lightblack};
          margin-top: -1px;
        }
        .heading-1 {
          font-size: 50px;
          line-height: 1em;
          font-weight: 700;
          text-transform: none;
          /* letter-spacing: -0.04em; */
          color: ${({ theme }) => theme.colors.darkgreen};
        }

        .heading-2 {
          font-size: 24px;
          line-height: 26px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.background};
        }

        .spec-para {
          position: relative;
          display: block;
          /* margin-top: 39px; */
          color: ${({ theme }) => theme.colors.yellow};
          font-weight: 700;
          font-size: 20px;
        }

        .list-items {
          position: relative;
          /* display: block; */
          /* margin-top: 20px; */
          /* color: ${({ theme }) => theme.colors.black}; */
          div {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 15px;
            margin-bottom: -30px;
            font-weight: 400;

            .icon {
              color: ${({ theme }) => theme.colors.yellow};
              font-size: 20px;
              align-items: center;
              /* padding-top: 20px; */

              &:hover {
                color: ${({ theme }) => theme.colors.background};
              }
            }

            .lidata {
              padding-bottom: 6px;
            }
          }
        }

        .video-section {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          /* border: 2px solid black; */
          margin-top: 30px;

          .video-section-1 {
            padding-left: 10px;
            iframe {
              border-radius: 15px;
            }
          }

          .video-section-2 {
            border-left: 10px solid ${({ theme }) => theme.colors.yellow};
            height: 70px;
            margin-left: 15px;
            border-radius: 20px;
          }

          .video-section-3 {
            margin-left: 20px;

            p {
              margin-bottom: -20px;
              color: ${({ theme }) => theme.colors.lightblack};
              font-weight: 500;
            }

            h1 {
              margin-bottom: -20px;
            }
          }
        }
      }
    }

    .container-5 {
      margin: 150px 70px 150px 70px;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      gap: 4rem;
      padding: 40px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .container-52 {
        color: darkred;
      }

      .container-53 {
        color: ${({ theme }) => theme.colors.lightblack};
      }

      .container-51 {
        /* margin-top: 70px; */
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        align-items: center;
        gap: 60px;
        /* height: 600px; */
        /* border: 2px solid black; */

        h1 {
          color: ${({ theme }) => theme.colors.yellow};
          font-size: 25px;
          line-height: 20px;
          margin-bottom: -10px;
        }

        p {
          font-size: 18px;
          font-weight: 600;
          /* color: ${({ theme }) => theme.colors.yellow}; */
        }
        .img {
          width: 40px;
          height: 60px;
        }
      }
    }
  }
  
`;

export default function CulSugarcane() {
  // const title = "Corn Cultivation";
  // const image = corn;
  // const color = "white";

  const [isUrdu, setIsUrdu] = useState(false);

  const handleToggleLanguage = () => {
    setIsUrdu((prevIsUrdu) => !prevIsUrdu);
  };
  return (
    <Wrapper>
      {/* <MainImageSection title={title} image={image} color={color} /> */}

      <div className="language-toggle">
      <label htmlFor="language-switch" style={{
            marginRight: '8px',
            fontSize: '20px',
            fontWeight: '500px',
            // backgroundColor: '#6d8c54',
            color: 'black',
            // padding: '8px 12px',
            // borderRadius: '20px',
            cursor: 'pointer',
          }}>
          <span>{isUrdu ? 'اردو' : 'English'}</span>
        </label>
        <Switch
        id="language-switch"
          onChange={handleToggleLanguage}
          checked={isUrdu}
          onColor="#6d8c54" // Customize the color when the switch is on
          offColor="#f1cf69" // Customize the color when the switch is off
          checkedIcon={false} // Hide the checked (on) icon
          uncheckedIcon={false} // Hide the unchecked (off) icon
          height={24} // Set the height of the switch
          width={55}
        />
        
      </div>

      <div className="english" style={{ display: isUrdu ? "none" : "block" }}>
      <div className="container">
        <div className="container-1">
          <img src={ssugarcane} alt="" className="image" />
        </div>
        <div className="container-2">
          <h1 className="heading">Sugarcane</h1>
          <p className="para">
            Sugarcane, a tall perennial grass, is a significant crop cultivated
            in many tropical and subtropical regions around the world. It is
            primarily grown for its sweet sap, which is rich in sucrose and
            serves as a valuable source of sugar production. Sugarcane plants
            consist of thick stalks that store the sugary juice, making them the
            main focus of cultivation. The sugarcane industry plays a vital role
            in the global sugar market. The stalks are harvested and processed
            to extract the juice, which is then subjected to various
            purification and crystallization processes to obtain sugar in its
            various forms, such as granulated sugar, brown sugar, and molasses.
            Sugarcane's high sugar content also makes it a suitable raw material
            for the production of ethanol, a biofuel used as a renewable energy
            source. In addition to its role in the sugar industry, sugarcane has
            various other applications. Bagasse, the fibrous residue left after
            extracting the juice, is commonly used as a renewable source of
            bioenergy in the form of biomass pellets or for the generation of
            heat and electricity. Moreover, bagasse can be transformed into pulp
            for the production of paper and cardboard.
          </p>
        </div>
      </div>
      <div className="container-3">
        <p className="para-1">
          Sugarcane cultivation requires specific environmental conditions,
          including abundant water supply and warm temperatures. Sustainable
          farming practices are essential to minimize the environmental impact
          of sugarcane production. Efforts are being made to improve irrigation
          techniques, reduce chemical inputs, and promote responsible land
          management to protect soil health and water resources.
          <br />
          The sugarcane industry plays a significant role in the economy of many
          countries, providing employment opportunities and contributing to
          agricultural revenue. However, concerns regarding labor practices,
          land use, and environmental sustainability have prompted initiatives
          to promote responsible sourcing and support the well-being of farmers
          and communities involved in sugarcane cultivation.
          <br />
          Overall, sugarcane is a versatile crop with multiple applications,
          ranging from sugar production to renewable energy and paper
          manufacturing. Balancing the economic benefits with environmental
          sustainability is crucial for the long-term viability of the sugarcane
          industry.
          <br />
        </p>
      </div>

      <div className="container-4">
        <div className="container-41">
          <img src={bot5} alt="" className="img" />
        </div>

        <div className="container-42">
          <img src={logo} alt="" className="logo1" />
          <p className="intro-para">THE BOTANIC SCANNER</p>
          <h1 className="heading-1">
            Sugarcane <br /> Cultivation
          </h1>
          <h3 className="heading-2">Best Seasons for Sowing & Harvesting </h3>
          <p className="spec-para">
            Sowing [February - March]
            <br />
            Harvesting [October - November]
          </p>
          <div className="list-items">
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Select well-drained soil with a pH of 6-8.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Plant healthy and disease-free cane sets or buds.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Maintain a water level of 1-1.5 inches in the field.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Apply organic manure and balanced fertilizers.
              </p>
            </div>

            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Control weeds through regular weeding and herbicide application.
              </p>
            </div>
          </div>

          <div className="video-section">
            <div class="video-section-1">
              <iframe
                width="150"
                height="70"
                src="https://www.youtube.com/embed/nziA33FrhoI"
                frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="youtube video"
              />
            </div>

            <div className="video-section-2"> </div>
            <div className="video-section-3">
              <p>Watch our Video</p>
              <h3>Tips for your Crops</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-5">
        <div className="container-51">
          <h1>Plant Image</h1>
          <img src={sugarcane1} alt="" className="img" />
          <img src={sugarcane2} alt="" className="img" />
          <img src={sugarcane3} alt="" className="img" />
          
        </div>
        <div className="container-51 container-52">
          <h1>Disease Name</h1>
          <p><NavLink to="/sbacterialblight">Bacterial Blight</NavLink></p>
          <p><NavLink to="/redrot">Red Rot</NavLink></p>
          <p><NavLink to="/redrust">Rust</NavLink></p>
          
        </div>
        <div className="container-51 container-53">
          <h1>Fertilizers</h1>
          <p>Urea, Ammonium Sulfate, Ammonium Phosphate</p>
          <p>Triple Superphosphate, Monoammonium Phosphate</p>
          <p>Muriate of Potash, Potassium Nitrate</p>
        </div>
        <div className="container-51 container-53">
          <h1>Pesticides</h1>
          <p>Copper-based fungicides, Streptomycin, Kasugamycin</p>
          <p>Tebuconazole, Propiconazole, Thiophanate-methyl</p>
          <p>Copper-based fungicides, Propiconazole</p>
        </div>
      </div>
      </div>

      <div className="urdu" style={{ display: isUrdu ? "block" : "none" }}>
  <div className="container">
    <div className="container-1">
      <img src={ssugarcane} alt="" className="image" />
    </div>
    <div className="container-2">
      <h1 className="heading">பஞ்சு</h1>
      <p className="para">
        பஞ்சு என்பது உலகளாவிய பல உஷ்ணமண்டல மற்றும் உப உஷ்ணமண்டல பகுதிகளில்
        வளர்க்கப்படும் முக்கியமான ஒரு உயரமான இரண்டாம் வகை புல் ஆகும். இது பொதுவாக
        அதன் இனிப்பான சாறுக்கு வளர்க்கப்படுகிறது, இது சர்க்கரையின் முக்கிய உற்பத்தி
        ஆதாரங்களில் ஒன்றாகும். பஞ்சு செடி வெற்றியான தண்டு கொண்டது, இது சாறை சேமிக்க
        உதவுகிறது, இதனால் இது உற்பத்தி செய்யும் முக்கிய பகுதியாக மாறுகிறது. பஞ்சு
        தொழில் உலக சர்க்கரா சந்தையில் முக்கிய பங்கு வகிக்கிறது. தண்டுகளை வெட்டிக்கொண்டு
        சாறு பெறப்படுகின்றது, அதன் பின்னர் பல சுத்தப்படுத்தல் மற்றும் கிரிஷ்டலைசேஷன்
        செயல்முறைகள் மூலம் சர்க்கராவின் பல வடிவங்களில், உதாரணமாக கிரானுலேட்டேட் சர்க்கரை,
        பழுப்பு சர்க்கரை மற்றும் மொலாஸஸ் உற்பத்தி செய்யப்படுகிறது. பஞ்சு அதிக இனிப்பானது
        அதன் பல பொருட்களை உருவாக்குவதற்கும் উপயோகமான خام பொருட்களாக செயல்படுகிறது, 
        போன்றவை பயோஎனர்ஜி தயாரிப்பதற்காக உருவாக்கப்படும், இது புதிய மின்சாரம் ஆக
        பயன்படுத்தப்படுகிறது. சர்க்கரா தொழிலுக்கு அப்பாற்பட்ட, பஞ்சின் பலவகை
        பயன்பாடுகளும் உள்ளன. சாறு பெற்ற பின், பாகஸ், சாறு வெளியேற்றப்பட்ட பிறகு
        மீதமுள்ள நார், பாய்டின் சக்தி மற்றும் மின்சார உற்பத்திக்கு பயன்படுத்தப்படுகிறது.
        அத்துடன், பாகஸ் காகிதம் மற்றும் கார்டு தயாரிப்பதற்கான புல்பாக மாற்றப்படலாம்.
      </p>
    </div>
  </div>
  <div className="container-3">
    <p className="para-1">
      பஞ்சு வளர்க்கும் பசுமையான பருவ நிலை தேவையானது, இதில் போதுமான நீர்
      வழங்கல் மற்றும் வெப்பமான வெப்பநிலை அடங்கும். பஞ்சு உற்பத்தி செய்யும்
      பசுமைத் தாக்கங்களை குறைக்க சீரான உற்பத்தி விதிகள் முக்கியமாகின்றன. சிறந்த
      ஈரப்பதத்துடன் வேலை செய்யும் முறைகளை மேம்படுத்துதல், ரசாயன இடையூறுகளை குறைக்க,
      மற்றும் நிலத்தினை சரிவர பராமரிப்பதற்கு சமுதாய மாற்றங்கள் அவசியம்.
      <br />
      பஞ்சு தொழில் பல நாடுகளின் பொருளாதாரத்தில் முக்கிய பங்கு வகிக்கிறது, வேலை
      வாய்ப்புகளை வழங்குகிறது மற்றும் பயிர் பொருளாதார முதலீடுகளுக்கு பங்காற்றுகிறது.
      ஆனால் பஞ்சு பயிர்செய்தல் தொடர்புடைய தொழிலாளர் நெறிமுறைகள், நில உரிமைகள்
      மற்றும் சுற்றுச்சூழல் நிலைத்தன்மை குறித்து கவலைகள் உண்டாகின்றன. இதனால்
      நடவடிக்கைகள் எடுக்கப்படுகின்றன, பொதுவாக எச்சரிக்கை தரும் வகையில், மற்றும்
      பஞ்சு விவசாயிகளுக்கும் சமூக நன்மைகளை ஆதரிக்கும் உதவிகள் வழங்கப்படுகின்றன.
      <br />
      இதுவரை உள்ள சவால்களை மீறி, பஞ்சு என்பது பல வகையான பயன்பாடுகளுடன்
      பல்வேறு விதங்களில் பயன்படுத்தப்படுகிறது, சர்க்கரை உற்பத்தியில் இருந்து மின்சார
      உற்பத்தி மற்றும் காகித உற்பத்தி போன்ற பல துறைகளில் பயன்படும். பஞ்சு தொழிலின்
      சுதந்திரம் பொருளாதார நன்மைகளை சுற்றுச்சூழல் நிலைத்தன்மையுடன் சமநிலை
      கொடுப்பதற்கு முக்கியமாகும்.
      <br />
    </p>
  </div>
  <div className="container-4">
    <div className="container-41">
      <img src={bot5} alt="" className="img" />
    </div>

    <div className="container-42">
      <img src={logo} alt="" className="logo1" />
      <p className="intro-para">ஸி.பொட்டினிக் ஸ்கேனர்</p>
      <h1 className="heading-1">
        பஞ்சு <br /> பயிர்
      </h1>
      <h3 className="heading-2">மூல பருவ தோட்டக்கலை மற்றும் அறுவடை</h3>
      <p className="spec-para">
        மூல பருவ தோட்டக்கலை [பிப்ரவரி - மார்ச்]
        <br />
        அறுவடை [அக்டோபர் - நவம்பர்]
      </p>
      <div className="list-items">
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            pH 6-8 கொண்ட தரமான நிலத்தை தேர்ந்தெடுக்கவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            சரியான மற்றும் நோயற்ற கீன் செட்டைப் பயன்படுத்தவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            நிலத்தில் 1-1.5 அங்குலம் சீரான இடைவெளி வைத்திருக்கவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            மண்ணில் உரத்த மற்றும் பொருத்தமான உரங்களை பயன்படுத்தவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            பயிரின் பசும்புவை மற்றும் எரிபொருள் உற்பத்தி குறைக்க இந்தவற்றை பயன்படுத்தவும்.
          </p>
        </div>
      </div>

      <div className="video-section">
        <div class="video-section-1">
          <iframe
            width="150"
            height="70"
            src="https://www.youtube.com/embed/nziA33FrhoI"
            frameborder="0"
            allowfullscreen
            title="youtube video"
          />
        </div>

        <div className="video-section-2"> </div>
        <div className="video-section-3">
          <p>எங்கள் வீடியோவைப் பார்க்கவும்</p>
          <h3>உங்கள் பயிருக்கு உதவிக்குறிப்புகள்</h3>
        </div>
      </div>
    </div>
  </div>

  <div className="container-5">
    <div className="container-51">
      <h1>பண்டுவின் படம்</h1>
      <img src={sugarcane1} alt="" className="img" />
      <img src={sugarcane2} alt="" className="img" />
      <img src={sugarcane3} alt="" className="img" />
      
    </div>
    <div className="container-51 container-52">
      <h1>பாதுகாப்பு பெயர்கள்</h1>
     <p><NavLink to="/sbacterialblight">பாக்டீரியா பிளைட்</NavLink></p>
      <p><NavLink to="/redrot">சிவப்பு உருண்டை</NavLink></p>
      <p><NavLink to="/redrust">உருகல்</NavLink></p>
      
    </div>
    <div className="container-51 container-53">
      <h1>உரங்கள்</h1>
      <p>உரியா, அமோனியம் சல்பேட், அமோனியம் பாஸ்பேட்</p>
      <p>டிரிப்பிள் சப்பர்பாஸ்பேட், மொனோஅமோனியம் பாஸ்பேட்</p>
      <p>முரியட் ஆஃப் போட்டாஷ், பொட்டாஷியம் நைட்ரேட்</p>
    </div>
    <div className="container-51 container-53">
      <h1>பருப்பு மருந்துகள்</h1>
      <p>காப்பர் பேஸ்டு பூச்சிகொல்லி, ஸ்ட்ரெப்டோமைசின், காசோஜாமைசின்</p>
      <p>டெபியூகொனிசோல், புரொபிகொனிசோல், தீயோபினேட் மெதல்</p>
      <p>காப்பர் பேஸ்டு பூச்சிகொல்லி, புரொபிகொனிசோல்</p>
    </div>
  </div>

</div>

    </Wrapper>
  );
}
