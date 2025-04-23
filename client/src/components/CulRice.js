import React,{useState} from "react";
// import corn from "../images/corn2.jpg";
// import MainImageSection from "../components/MainImageSection";
import styled from "styled-components";
import srice from "../images/srice.jpg";
import bot5 from "../images/botanic5.jpg";
import { MdGppGood } from "react-icons/md";
import logo from "../logo58.png";
// import { MdOutlineYard } from "react-icons/md";
import cotton1 from "../images/cotton_Aphids.jpg";
import cotton2 from "../images/cotton_worm.jpg";
import cotton3 from "../images/cotton_blight.jpg";
import cotton4 from "../images/cotton_powdery.jpg";
import cotton5 from "../images/cotton_targetspot.jpg";
import Switch from "react-switch";
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
    padding: 30px;
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

export default function CulRice() {
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
          <img src={srice} alt="" className="image" />
        </div>
        <div className="container-2">
          <h1 className="heading">Rice</h1>
          <p className="para">
            Rice, a staple food for more than half of the world's population, is
            a versatile grain crop with a rich history. It is primarily grown in
            flooded paddy fields and is cultivated in a wide range of climates,
            from tropical to temperate regions. Rice plants produce long,
            slender stalks with grains that are harvested for various culinary
            and industrial purposes. As a food source, rice plays a crucial role
            in global food security. It serves as a dietary staple in many
            countries, providing essential carbohydrates and nutrients. Rice can
            be consumed as whole grains or processed into different forms such
            as white rice, brown rice, parboiled rice, and specialty varieties
            like basmati and jasmine rice. It is a versatile ingredient used in
            a myriad of dishes, including stir-fries, pilafs, sushi, and
            rice-based desserts. Apart from its significance as a food crop,
            rice has industrial applications as well. Rice bran, the outer layer
            of the grain, is a valuable by-product that is rich in oil and
            nutrients. Rice bran oil is extracted and utilized for cooking, as
            well as in the production of cosmetics, soaps, and pharmaceuticals.
            Rice straw, the leftover stalks after harvest, can be used for
            livestock feed, as bedding material, or as a raw material in the
            manufacturing of paper, fiberboard, and bioenergy. Rice cultivation
            practices vary across regions, but sustainable approaches are
            gaining prominence. Techniques such as system of rice
            intensification (SRI) and water-efficient irrigation methods help
            reduce water usage and enhance productivity.
          </p>
        </div>
      </div>
      <div className="container-3">
        <p className="para-1">
          
          As a food source, rice plays a crucial role in global food security.
          It serves as a dietary staple in many countries, providing essential
          carbohydrates and nutrients. Rice can be consumed as whole grains or
          processed into different forms such as white rice, brown rice,
          parboiled rice, and specialty varieties like basmati and jasmine rice.
          It is a versatile ingredient used in a myriad of dishes, including
          stir-fries, pilafs, sushi, and rice-based desserts.
          <br />
          Apart from its significance as a food crop, rice has industrial
          applications as well. Rice bran, the outer layer of the grain, is a
          valuable by-product that is rich in oil and nutrients. Rice bran oil
          is extracted and utilized for cooking, as well as in the production of
          cosmetics, soaps, and pharmaceuticals. Rice straw, the leftover stalks
          after harvest, can be used for livestock feed, as bedding material, or
          as a raw material in the manufacturing of paper, fiberboard, and
          bioenergy.
         <br/>
          Rice is a vital crop that not only nourishes millions of people but
          also contributes to economic livelihoods and cultural heritage
          worldwide. Ongoing research and sustainable farming practices continue
          to improve the efficiency and sustainability of rice cultivation,
          ensuring its significance for generations to come.
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
            Rice <br /> Cultivation
          </h1>
          <h3 className="heading-2">Best Seasons for Sowing & Harvesting </h3>
          <p className="spec-para">
            Sowing [April - May]
            <br />
            Harvesting [October - November]
          </p>
          <div className="list-items">
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Prepare well-drained soil with a pH of 6-7.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Transplant seedlings when they are 25-30 days old.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Maintain a water level of 2-5 inches during the growing period.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Apply fertilizers based on soil test results.
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
          <img src={cotton1} alt="" className="img" />
          <img src={cotton2} alt="" className="img" />
          <img src={cotton3} alt="" className="img" />
          <img src={cotton4} alt="" className="img" />
          <img src={cotton5} alt="" className="img" />
        </div>
        <div className="container-51 container-52">
          <h1>Disease Name</h1>
          <NavLink to="/rblight"><p>Bacterial Blight</p></NavLink>
          <NavLink to="/brownspot"><p>Brown Spot</p></NavLink>
          <NavLink to="/hispa"><p>Hispa</p></NavLink>
          <NavLink to="/leafblast"><p>Leaf Blast</p></NavLink>
         
          <NavLink to="/tungro"><p>Tungro</p></NavLink>
        </div>
        <div className="container-51 container-53">
          <h1>Fertilizers</h1>
          <p>Urea, Ammonium Sulfate, Ammonium Phosphate</p>
          <p>Triple Superphosphate, Monoammonium Phosphate</p>
          <p>Muriate of Potash, Potassium Nitrate</p>
          <p>Zinc Sulfate, Iron Sulfate, Boric Acid</p>
          <p>Magnesium Sulfate, Magnesium Nitrate</p>
        </div>
        <div className="container-51 container-53">
          <h1>Pesticides</h1>
          <p>Copper-based fungicides, Streptomycin, Kasugamycin</p>
          <p>Tricyclazole, Pyroquilon, Benzimidazole, Isoprothiolane</p>
          <p>Carbaryl, Imidacloprid, Fipronil, Thiamethoxam</p>
          <p>Pyraclostrobin, Trifloxystrobin, Propiconazole</p>
          <p>Seed treatment with Imidacloprid,Thiamethoxam,<br/>Clothianidin</p>
        </div>
      </div>
      </div>

      <div className="urdu" style={{ display: isUrdu ? "block" : "none" }}>
  <Wrapper>
    <div className="container">
      <div className="container-1">
        <img src={srice} alt="" className="image" />
      </div>
      <div className="container-2">
        <h1 className="heading">பச்சரிசி</h1>
        <p className="para">
          பச்சரிசி, உலகின் பாதி மக்களுக்கு தொடர்ந்து உணவு மூலமாக உள்ளது,
          இது ஒரு அவசியமான தானியம் ஆகும், இதற்கு ஒரு சுவாரஸ்யமான வரலாறு உள்ளது. இது பொதுவாக வெப்பமண்டல முதல்
          மிதமான பகுதிகளுக்கான வெவ்வேறு நீர் வழிகளிலும் பயிரிடப்படுகிறது. பச்சரிசி செடிகள் நீளமான, மெதுவாக விரிவடைந்த பூக்களை உற்பத்தி செய்கின்றன, அவற்றின் தானியங்கள் பல வகையான
          உணவுப் பொருட்கள் மற்றும் தொழில்நுட்பக் குறிக்கோள்களுக்காக வெட்டப்படுகின்றன. உணவு மூலமாக,
          பச்சரிசி உலக உணவுக் பாதுகாப்புக்கான முக்கிய பங்காற்றுகிறது. இது பல நாடுகளில் உணவுக்கான அடிப்படை உணவாக
          பயன்படுகிறது மற்றும் தேவையான கார்போஹைட்ரேட்கள் மற்றும் ஊட்டச்சத்துக்களை வழங்குகிறது. பச்சரிசி முழு தானியமாகவும்
          பயன்படுத்தப்படலாம் அல்லது வெள்ளை அரிசி, பழுப்பு அரிசி, பபாயில்டு அரிசி மற்றும் சிறப்பு வகைகள் போன்று வெவ்வேறு வடிவங்களில்
          செயலாக்கப்படலாம், மேலும் இது பல்வேறு மசாலைகளில் பயன்படுத்தப்படும் பொருள் ஆகும், எடுத்துக்காட்டாக சோறு, பிளாஃப், சுஷி மற்றும் பச்சரிசியிலிருந்து தயாரிக்கப்பட்ட இனிப்பு உணவுகள்.
          <br />
          பச்சரிசியின் முக்கியத்துவத்துடன், அதன் தொழில்நுட்பப் பயன்பாடுகளும் உள்ளன. பச்சரிசி தசைகள்,
          தானியத்தின் வெளிப்புறக் கவர், ஒரு மதிப்புமிக்க துணை தயாரிப்பு ஆகும், இது எண்ணெய் மற்றும் ஊட்டச்சத்துகளால் நிரப்பப்பட்டுள்ளது.
          பச்சரிசி தசைகளிலிருந்து எண்ணெய் எடுக்கப்படுகிறது, இது சமையலுக்கு பயன்படுத்தப்படுகிறது, மேலும் இவை சாபன், காஸ்மெடிக்ஸ் மற்றும் மருந்துகள் தயாரிக்க பயன்படுத்தப்படுகின்றன. பச்சரிசி மீதமுள்ள
          செடிகளை, மரணதண்டனைகள், மாட்டு உணவு அல்லது காகிதம், ஃபைபர் போர்டு மற்றும் பைோஎனர்ஜி தயாரிப்புகளில் பயன்படுத்த முடியும். பச்சரிசி பயிரிடும் முறைகள் பகுதிகள் வாரியாக வேறுபடுகின்றன,
          ஆனால் பராமரிப்பு நெறிமுறைகள் மிகவும் பிரபலமாகி வருகின்றன. திட்டங்கள் போன்றவை, ராயின் முறை (SRI) மற்றும் நீரின் கணிசமான சுத்தப்படுத்தல் முறைகள்
          நீரின் பயன்பாட்டை குறைப்பதற்கும், உற்பத்தியில் மேம்படுத்தல் செய்ய உதவுகின்றன.
        </p>
      </div>
    </div>
    <div className="container-3">
      <p className="para-1">
        உணவு மூலமாக, பச்சரிசி உலக உணவுக் பாதுகாப்புக்கான முக்கிய பங்காற்றுகிறது. இது பல நாடுகளில் உணவுக்கான அடிப்படை உணவாக
        பயன்படுகிறது மற்றும் தேவையான கார்போஹைட்ரேட்கள் மற்றும் ஊட்டச்சத்துக்களை வழங்குகிறது. பச்சரிசி முழு தானியமாகவும்
        பயன்படுத்தப்படலாம் அல்லது வெள்ளை அரிசி, பழுப்பு அரிசி, பபாயில்டு அரிசி மற்றும் சிறப்பு வகைகள் போன்று வெவ்வேறு வடிவங்களில்
        செயலாக்கப்படலாம். இது பல்வேறு மசாலைகளில் பயன்படுத்தப்படும் பொருள் ஆகும், எடுத்துக்காட்டாக சோறு, பிளாஃப், சுஷி மற்றும் பச்சரிசியிலிருந்து தயாரிக்கப்பட்ட இனிப்பு உணவுகள்.
        <br />
        பச்சரிசியின் முக்கியத்துவத்துடன், அதன் தொழில்நுட்பப் பயன்பாடுகளும் உள்ளன. பச்சரிசி தசைகள், தானியத்தின் வெளிப்புறக் கவர்,
        ஒரு மதிப்புமிக்க துணை தயாரிப்பு ஆகும், இது எண்ணெய் மற்றும் ஊட்டச்சத்துகளால் நிரப்பப்பட்டுள்ளது. பச்சரிசி தசைகளிலிருந்து எண்ணெய்
        எடுக்கப்படுகிறது, இது சமையலுக்கு பயன்படுத்தப்படுகிறது, மேலும் இவை சாபன், காஸ்மெடிக்ஸ் மற்றும் மருந்துகள் தயாரிக்க பயன்படுத்தப்படுகின்றன.
        பச்சரிசி மீதமுள்ள செடிகளை, மரணதண்டனைகள், மாட்டு உணவு அல்லது காகிதம், ஃபைபர் போர்டு மற்றும் பைோஎனர்ஜி தயாரிப்புகளில் பயன்படுத்த முடியும்.
        பச்சரிசி பயிரிடும் முறைகள் பகுதிகள் வாரியாக வேறுபடுகின்றன, ஆனால் பராமரிப்பு நெறிமுறைகள் மிகவும் பிரபலமாகி வருகின்றன. திட்டங்கள் போன்றவை,
        ராயின் முறை (SRI) மற்றும் நீரின் கணிசமான சுத்தப்படுத்தல் முறைகள் நீரின் பயன்பாட்டை குறைப்பதற்கும், உற்பத்தியில் மேம்படுத்தல் செய்ய
        உதவுகின்றன.
        <br />
      </p>
    </div>

    <div className="container-4">
      <div className="container-41">
        <img src={bot5} alt="" className="img" />
      </div>

      <div className="container-42">
        <img src={logo} alt="" className="logo1" />
        <p className="intro-para">திகனிக்கான பரிசோதனையாளர்</p>
        <h1 className="heading-1">
          பச்சரிசி <br /> பயிரிடுதல்
        </h1>
        <h3 className="heading-2">சிறந்த பயிரிடும் மற்றும் அறுவடையின் பருவங்கள் </h3>
        <p className="spec-para">
          பயிரிடுதல் [ஏப்ரல் - மே]
          <br />
          அறுவடை [ஒக்டோபர் - நவம்பர்]
        </p>
        <div className="list-items">
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">
              பரவலான மண்ணைப் பயன்படுத்தவும், அதன் pH 6-7 ஆக இருக்க வேண்டும்.
            </p>
          </div>
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">
              பிளாஸ்ட் செடிகளை 25-30 நாட்களில் பயிரிடவும்.
            </p>
          </div>
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">
              பயிரிடும் போது உற்பத்தி அளவுகள் 2-5 அங்குலம் இருக்க வேண்டும்.
            </p>
          </div>
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">
              நிலத்தில் பரிசோதனை முடிவுகளைப் பொருத்து உரம் போட்டுக்கொள்ளவும்.
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
            <h3>உங்கள் பயிர் பற்றிய குறிப்புகள்</h3>
          </div>
        </div>
      </div>
    </div>

    <div className="container-5">
      <div className="container-51">
        <h1>செடியின் படம்</h1>
        <img src={cotton1} alt="" className="img" />
        <img src={cotton2} alt="" className="img" />
        <img src={cotton3} alt="" className="img" />
        <img src={cotton4} alt="" className="img" />
        <img src={cotton5} alt="" className="img" />
      </div>
      <div className="container-51 container-52">
        <h1>பாதைகள் பெயர்கள்</h1>
        <NavLink to="/rblight"><p>பாக்டீரியா பிளைட்</p></NavLink>
        <NavLink to="/brownspot"><p>பிரவுன் ஸ்பாட்</p></NavLink>
        <NavLink to="/hispa"><p>ஹிஸ்பா</p></NavLink>
        <NavLink to="/leafblast"><p>இலை பிளாஸ்ட்</p></NavLink>
        <NavLink to="/tungro"><p>துங்க்ரோ</p></NavLink>
      </div>
      <div className="container-51 container-53">
        <h1>உரம்</h1>
        <p>உரியா, அமோனியம் சல்பேட், அமோனியம் பாஸ்பேட்</p>
        <p>டிரிப்பிள் சூப்பர்ஃபாஸ்பேட், மனோ அமோனியம் பாஸ்பேட்</p>
        <p>மியூரியட் ஆஃப் பொட்டாஷியம், பொட்டாஷியம் நைட்ரேட்</p>
        <p>சிங்க் சல்பேட், இரும்பு சல்பேட், போரிக் அமிலம்</p>
        <p>மெக்னிஷியம் சல்பேட், மெக்னிஷியம் நைட்ரேட்</p>
      </div>
      <div className="container-51 container-53">
        <h1>கீட்கொல்லிகள்</h1>
        <p>காப்பர் பாஸ்ட் ஃபங்கிசைட்ஸ், ஸ்ட்ரெப்டோமைசின், காசோகாமைசின்</p>
        <p>டிரைசைக்கிளோஜொல், பைரோகுவலின், பென்சிமைடசோல், எசோபுரோத்தைலின்</p>
        <p>கார்பரெல், எமிடிகுளோபிரிட், ஃபிப்பரொன், தீஅமிதோட்சாம்</p>
        <p>பைராக்ளோஸ்ட்ரோபின், டிரைபுளொக்ஸ்ட்ரோபின், ப்ரோபிகோனாஸோல்</p>
        <p>பயிர் சிகிச்சை எமிடிகுளோபிரிட், தீஅமிதோட்சாம், கிளோத்தினிடன்</p>
      </div>
    </div>
  </Wrapper>
</div>

    </Wrapper>
  );
}
