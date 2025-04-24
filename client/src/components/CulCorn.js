import React, { useState } from "react";
// import corn from "../images/corn2.jpg";
// import MainImageSection from "../components/MainImageSection";
import styled from "styled-components";
import scorn from "../images/scorn.jpg";
import bot5 from "../images/botanic5.jpg";
import { MdGppGood } from "react-icons/md";
import logo from "../logo58.png";
// import { MdOutlineYard } from "react-icons/md";
import corn1 from "../images/corn_Blight.jpg";
import corn2 from "../images/corn_common_rust.jpg";
import corn3 from "../images/corn_leaf-spot.jpg";
import Switch from "react-switch";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  .language-toggle {
    /* position: "fixed";
   top:"10px";
   right: "10px";  */
    display: flex;
    justify-content: flex-end;
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
    /* align-items: center; */
    gap: 4rem;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
        .link {
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          color: darkred;
        }
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
        .link {
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          color: darkred;
        }
      }
    }
  }
`;

export default function CulCorn() {
  // const title = "Corn Cultivation";
  // const image = corn;
  // const color = "white";
  const [isUrdu, setIsUrdu] = useState(false);

  const handleToggleLanguage = () => {
    setIsUrdu((prevIsUrdu) => !prevIsUrdu);
  };

  return (
    <Wrapper>
      <div className="language-toggle">
        <label
          htmlFor="language-switch"
          style={{
            marginRight: "8px",
            fontSize: "20px",
            fontWeight: "500px",
            // backgroundColor: '#6d8c54',
            color: "black",
            // padding: '8px 12px',
            // borderRadius: '20px',
            cursor: "pointer",
          }}
        >
          <span>{isUrdu ? "தமிழ்" : "English"}</span>
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

      {/* <MainImageSection title={title} image={image} color={color} /> */}

      <div className="english" style={{ display: isUrdu ? "none" : "block" }}>
        <div className="container">
          <div className="container-1">
            <img src={scorn} alt="" className="image" />
          </div>
          <div className="container-2">
            <h1 className="heading">Corn/Maize</h1>
            <p className="para">
              Corn, also known as maize, is a versatile grain crop cultivated
              worldwide. It is used as a staple food, animal feed, and raw
              material for various industrial applications. Corn plants produce
              cobs with rows of kernels, and its cultivation ranges from
              temperate to tropical regions. Corn, scientifically known as Zea
              mays, is a highly versatile grain crop that is grown and
              cultivated all over the world. It is commonly referred to as maize
              in many parts of the world, particularly in Europe and Africa.
              Corn has been cultivated by humans for thousands of years and has
              become one of the most important staple crops globally.orn is also
              used in the manufacturing of various industrial products,
              including biodegradable plastics, adhesives, fabrics, and
              chemicals. The by-products of corn processing, such as corn stalks
              and cobs, can be used as biomass for energy generation or as a
              feedstock for the production of paper, cardboard, and bio-based
              materials.
            </p>
          </div>
        </div>
        <div className="container-3">
          <p className="para-1">
            One of the distinctive features of corn plants is their ability to
            produce cobs, which are elongated structures that contain rows of
            kernels. These cobs are the reproductive part of the plant and are
            harvested for various purposes. Each kernel on a cob can be yellow,
            white, red, blue, or other colors, depending on the variety of corn.
            <br />
            Corn has a wide range of uses, making it an incredibly valuable
            crop. Firstly, it serves as a staple food for humans in many parts
            of the world. Corn can be consumed directly as fresh or cooked corn,
            or it can be processed into various food products such as cornmeal,
            corn flour, cornstarch, corn syrup, and corn oil. These products are
            used in a variety of dishes, including bread, tortillas, cereals,
            snacks, and beverages.
            <br />
            In addition to being a food source, corn is also an essential
            ingredient in animal feed. Its high energy content and nutritional
            value make it a popular choice for feeding livestock, including
            cattle, pigs, and poultry. Corn is often ground into animal feed or
            used as a key component in compound feeds that provide balanced
            nutrition for livestock.
            <br />
            Furthermore, corn is utilized in numerous industrial applications.
            It serves as a raw material for the production of biofuels, such as
            ethanol, which is derived from corn starch through a fermentation
            process. Ethanol is a renewable and environmentally friendly
            alternative to fossil fuels and is commonly blended with gasoline to
            reduce greenhouse gas emissions.
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
              Corn <br /> Cultivation
            </h1>
            <h3 className="heading-2">Best Seasons for Sowing & Harvesting </h3>
            <p className="spec-para">
              Sowing [May - June]
              <br />
              Harvesting [September - October]
            </p>
            <div className="list-items">
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  Choose well-drained soil with a pH of 6-7.
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">Sow seeds at a depth of 1-2 inches.</p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  Apply nitrogenous fertilizers during sowing
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  Adequate spacing between plants is essential for better
                  growth.
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
            <img src={corn1} alt="" className="img" />
            <img src={corn2} alt="" className="img" />
            <img src={corn3} alt="" className="img" />
          </div>
          <div className="container-51 container-52">
            <h1>Disease Name</h1>
            <NavLink className="link" to="/blight">
              <p>Blight</p>
            </NavLink>
            <NavLink className="link" to="/commonrust">
              <p>Common Rust</p>
            </NavLink>
            <NavLink className="link" to="/grayleafspot">
              <p>Gray Leaf Spot</p>
            </NavLink>
          </div>
          <div className="container-51 container-53">
            <h1>Fertilizers</h1>
            <p>Urea, Ammonium Nitrate, Calcium Nitrate</p>
            <p>Diammonium Phosphate, Ammonium Phosphate</p>
            <p>Potassium Sulfate, Potassium Nitrate</p>
          </div>
          <div className="container-51 container-53">
            <h1>Pesticides</h1>
            <p>Chlorothalonil, Mancozeb, Copper-based fungicides</p>
            <p>Azoxystrobin, Propiconazole, Pyraclostrobin</p>
            <p>Azoxystrobin, Propiconazole, Trifloxystrobin</p>
          </div>
        </div>
      </div>

      <div className="urdu" style={{ display: isUrdu ? "block" : "none" }}>
  <div className="container">
    <div className="container-1">
      <img src={scorn} alt="" className="image" />
    </div>
    <div className="container-2">
      <h1 className="heading">மக்காசோளம்</h1>
      <p className="para">
        மக்காசோளம், ஜோவாகவும் அழைக்கப்படுகிறது, உலகம் முழுவதும் வளர்க்கப்படும் பல விதமான தானிய பயிராகும். இது ஒரு அடிப்படை உணவாகவும், மிருகங்களுக்கான தீவனமாகவும் மற்றும் பல தொழில்துறைகளில் மூலப்பொருளாகவும் பயன்படுகிறது. மக்காசோளத்தை வளர்க்கும் பகுதியில் அது மண்சரிவுகள் மற்றும் சூடான பருவநிலைகளில் வளர்கிறது. விஞ்ஞான ரீதியாக 'ஜியா மேய்ஸ்' என அழைக்கப்படும் மக்காசோளம் உலகம் முழுவதும் அதிக அளவில் பயிரிடப்படும் தானிய வகையாகும். இது பல்வேறு பகுதிகளில், குறிப்பாக ஐரோப்பா மற்றும் ஆப்பிரிக்காவில் மக்காசோளம் என்றே அழைக்கப்படுகிறது. இது ஆயிரக்கணக்கான ஆண்டுகளாக மனிதர்களால் பயிரிடப்பட்டு வருகின்றது மற்றும் இன்று உலகளாவிய அடிப்படை பயிர்களில் ஒன்றாக மாறியுள்ளது. மக்காசோளம் பைோடிகிரேடபிள் பிளாஸ்டிக், ஒட்டும் பொருட்கள், துணிகள் மற்றும் இரசாயனங்கள் போன்ற தொழில்துறை தயாரிப்புகளிலும் பயன்படுத்தப்படுகிறது. மக்காசோளத்தின் பட்டைகள் மற்றும் இலைகள் சுயநிறைவு பொருட்கள் உருவாக்குவதற்கான பயோமாஸாக பயன்படுத்தப்படலாம்.
      </p>
    </div>
  </div>
  <div className="container-3">
    <p className="para-1">
      மக்காசோளத்திற்கு தனித்துவமான பண்புகள் உள்ளன. இதில் தானியங்கள் அடுக்கப்பட்டிருக்கும் குலைகள் உற்பத்தி செய்யும் திறன் உள்ளது. இந்த குலைகள் பயிரின் உற்பத்திப் பகுதியைக் குறிக்கின்றன மற்றும் பலவித பயன்பாடுகளுக்காக வெட்டப்படுகின்றன. ஒவ்வொரு குலையிலும் மஞ்சள், வெள்ளை, சிவப்பு, நீலம் அல்லது பிற நிறங்களிலான தானியங்கள் இருக்கலாம், இது வகையைப் பொறுத்தது.
      <br />
      மக்காசோளத்திற்கு பல பயன்பாடுகள் உள்ளதால் இது மதிப்புமிக்க பயிராகும். முதன்மையாக, இது மனிதர்களுக்கான அடிப்படை உணவாக உள்ளது. இது நேரடியாகவே சமைத்து உண்ணக்கூடியதோடு, மக்காசோள மாவு, கார்ன் ஸ்டார்ச், சீரகம், எண்ணெய் போன்ற தயாரிப்புகளாகவும் மாற்றப்படுகிறது. இவை ரொட்டி, டோர்டில்லா, சீரியல், நட்டுகள் மற்றும் பானங்களில் பயன்படுத்தப்படுகின்றன.
      <br />
      மேலும், இது மிருகங்களுக்கான தீவனமாகவும் முக்கியமாக பயன்படுகிறது. அதன் அதிக சக்தி மற்றும் ஊட்டச்சத்துகளால் இது மாடுகள், பன்றிகள் மற்றும் கோழிகள் போன்றவைகளுக்கு முக்கிய தீவனமாகும். இது பொதுவாக மாடுகளுக்கான தீவன கலவைகளில் பயன்படுத்தப்படுகிறது.
      <br />
      கூடுதலாக, மக்காசோளம் பல தொழில்துறை பயன்பாடுகளுக்காகவும் பயன்படுகிறது. இது பயோஃப்யூஎல் தயாரிக்க முக்கிய மூலப்பொருளாக உள்ளது, குறிப்பாக இதனில் உள்ள ஸ்டார்ச்சிலிருந்து எத்தனால் தயாரிக்கப்படுகிறது. இது பெட்ரோல் போன்ற எரிபொருட்களில் கலக்கப்படுவதன் மூலம் கார்பன் உமிழ்வை குறைக்கும்.
    </p>
  </div>

  <div className="container-4">
    <div className="container-41">
      <img src={bot5} alt="" className="img" />
    </div>

    <div className="container-42">
      <img src={logo} alt="" className="logo1" />
      <p className="intro-para">தி போடானிக் ஸ்கேனர்</p>
      <h1 className="heading-1">
        மக்காசோளம் <br /> விவசாயம்
      </h1>
      <h3 className="heading-2">சிறந்த விதைப்பு பருவம் மற்றும் அறுவடை</h3>
      <p className="spec-para">
        விதைப்பு [மே - ஜூன்]
        <br />
        அறுவடை [செப்டம்பர் - அக்டோபர்]
      </p>
      <div className="list-items">
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            பி.ஏச். 6-7 கொண்ட நல்ல வடிகால் வசதியுள்ள நிலத்தை தேர்வு செய்யவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">விதைகளை 1-2 இஞ்ச் ஆழத்தில் விதைக்கவும்.</p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            விதைப்பின் போது நைட்ரஜன் உரங்களைப் பயன்படுத்தவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
            சிறந்த வளர்ச்சிக்காக தாவரங்களுக்கு இடையே போதிய இடைவெளி வைக்கவும்.
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
          <p>எங்கள் வீடியோவைப் பார்வையிடுங்கள்</p>
          <h3>உங்கள் விவசாயத்திற்கு பரிந்துரைகள்</h3>
        </div>
      </div>
    </div>
  </div>

  <div className="container-5">
    <div className="container-51">
      <h1>தாவரத்தின் படங்கள்</h1>
      <img src={corn1} alt="" className="img" />
      <img src={corn2} alt="" className="img" />
      <img src={corn3} alt="" className="img" />
    </div>
    <div className="container-51 container-52">
      <h1>நோய்களின் பெயர்கள்</h1>
      <NavLink className="link" to="/blight">
        <p>பிளைட்</p>
      </NavLink>
      <NavLink className="link" to="/commonrust">
        <p>காமன் ரச்ட்</p>
      </NavLink>
      <NavLink className="link" to="/grayleafspot">
        <p>சாம்பல் இலை புள்ளிகள்</p>
      </NavLink>
    </div>
    <div className="container-51 container-53">
      <h1>உரங்கள்</h1>
      <p>யூரியா, அமோனியம் நைட்ரேட், கால்சியம் நைட்ரேட்</p>
      <p>டைஅமோனியம் பாஸ்பேட், அமோனியம் பாஸ்பேட்</p>
      <p>பொட்டாசியம் சல்பேட், பொட்டாசியம் நைட்ரேட்</p>
    </div>
    <div className="container-51 container-53">
      <h1>பூச்சிக்கொல்லி மருந்துகள்</h1>
      <p>குளோரோத்தலோனில், மான்கோசெப், தாமிரம் அடங்கிய பூஞ்சைக் கொல்லிகள்</p>
      <p>அஸோக்ஸிஸ்ட்ரோபின், புரொபிகோனாசோல், பைராக்லோஸ்ட்ரோபின்</p>
      <p>அஸோக்ஸிஸ்ட்ரோபின், புரொபிகோனாசோல், டிரைபுளோஸ்ட்ரோபின்</p>
    </div>
  </div>
</div>

    </Wrapper>
  );
}
