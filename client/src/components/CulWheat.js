import React,{useState} from "react";
// import corn from "../images/corn2.jpg";
// import MainImageSection from "../components/MainImageSection";
import styled from "styled-components";
import swheat from "../images/swheat.jpg";
import bot5 from "../images/botanic5.jpg";
import { MdGppGood } from "react-icons/md";
import logo from "../logo58.png";
// import { MdOutlineYard } from "react-icons/md";
import wheat1 from "../images/wheat_Brown_rust1024.jpg";
import wheat2 from "../images/wheat_septoria.JPG";
import wheat3 from "../images/wheat_powdery.jpg";
import wheat4 from "../images/wheat_Brown_rust1024.jpg";
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

export default function CulWheat() {
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
      {/* <MainImageSection title={title} image={image} color={color} /> */}

      <div className="english" style={{ display: isUrdu ? "none" : "block" }}>
      <div className="container">
        <div className="container-1">
          <img src={swheat} alt="" className="image" />
        </div>
        <div className="container-2">
          <h1 className="heading">Wheat</h1>
          <p className="para">
            Wheat, one of the most widely cultivated cereal crops, plays a vital
            role in global food production. It is a versatile grain that is
            grown in diverse climates, ranging from temperate to tropical
            regions. Wheat plants produce tall stems with heads that contain
            numerous edible grains. As a staple food, wheat is a significant
            component of diets worldwide. It is milled into flour, which serves
            as the foundation for a wide variety of baked goods, including
            bread, pasta, pastries, and cereals. Wheat flour is rich in
            carbohydrates, proteins, and essential nutrients, making it a
            valuable source of energy and nutrition. Wheat also finds
            application in the manufacturing of numerous food products. Its
            derivatives, such as wheat germ and wheat bran, are utilized as
            nutritious additions to cereals, health foods, and supplements.
            Wheat starch is employed as a thickening agent in the food industry,
            while semolina, a coarse flour made from durum wheat, is used in the
            production of pasta and couscous.
          </p>
        </div>
      </div>
      <div className="container-3">
        <p className="para-1">
          Beyond its significance as a food crop, wheat has non-food
          applications as well. Wheat straw, the residue left after harvest, is
          used as animal bedding, mulch, or incorporated into composite
          materials for construction and packaging. Wheat grains are processed
          to extract wheat germ oil, which is utilized in cosmetics, soaps, and
          other personal care products.
          <br />
          Wheat cultivation practices vary depending on the region and climate.
          Farmers employ different techniques such as crop rotation, irrigation
          systems, and precision agriculture to maximize yields and minimize
          environmental impacts. Additionally, efforts are being made to develop
          disease-resistant wheat varieties and promote sustainable farming
          practices to ensure the long-term productivity and sustainability of
          wheat production.
          <br />
          Overall, wheat is a versatile and essential crop that plays a
          fundamental role in global food security. Its widespread cultivation,
          varied applications, and nutritional value make it a vital component
          of human diets and various industries around the world.
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
            Wheat <br /> Cultivation
          </h1>
          <h3 className="heading-2">Best Seasons for Sowing & Harvesting </h3>
          <p className="spec-para">
            Sowing [November - December]
            <br />
            Harvesting [April - May]
          </p>
          <div className="list-items">
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Choose well-drained loamy soil with a pH of 6-7.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Use certified seeds for better yield.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Apply nitrogenous fertilizers at the time of sowing.
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              Optimal temperature for growth is between 15-25°C.
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
          <img src={wheat1} alt="" className="img" />
          <img src={wheat2} alt="" className="img" />
          <img src={wheat3} alt="" className="img" />
          <img src={wheat4} alt="" className="img" />
        </div>
        <div className="container-51 container-52">
          <h1>Disease Name</h1>
          <p><NavLink to="/wbrownrust">Brown Rust</NavLink></p>
          <p><NavLink to="/wseptoria">Septoria</NavLink></p>
          <p><NavLink >Powdery Mildew</NavLink></p>
          <p><NavLink to="/wyellowrust">Yellow Rust</NavLink></p>
        </div>
        <div className="container-51 container-53">
          <h1>Fertilizers</h1>
          <p>Urea, Ammonium Nitrate, Calcium Nitrate</p>
          <p>Diammonium Phosphate, Ammonium Phosphate</p>
          <p>Potassium Nitrate, Potassium Sulfate</p>
          <p>Urea, Ammonium Nitrate</p>
        </div>
        <div className="container-51 container-53">
          <h1>Pesticides</h1>
          <p>Triadimefon, Tebuconazole, Propiconazole</p>
          <p>Azoxystrobin, Pyraclostro</p>
          <p>Propiconazole, Tebuconazole, Myclobutanil</p>
          <p>Tebuconazole, Propiconazole, Epoxiconazole</p>
        </div>
      </div>
      </div>

      <div className="urdu" style={{ display: isUrdu ? "block" : "none" }}>
  <div className="container">
    <div className="container-1">
      <img src={swheat} alt="" className="image" />
    </div>
    <div className="container-2">
      <h1 className="heading">கந்தம்</h1>
      <p className="para">
        கந்தம் என்பது உலகளாவிய உணவு பட்டியலில் முக்கிய பங்காற்றும் ஒரு பரவலான பயிராகும். இது வெவ்வேறு பருவநிலைகளுக்கிடையில் வளர்க்கப்படுகின்ற ஒரு தானியம் ஆகும், இது வெப்பமான இடங்களிலிருந்து தங்கிய பகுதிகளுக்கிடையே பல்வேறு பகுதிகளில் பயிரிடப்படுகிறது. கந்தம் செடி உயரமான செடிகள் உருவாக்கும், இதில் பல சாப்பிடக்கூடிய தானிய மொட்டுகள் உருவாகின்றன. உணவின் முக்கிய அங்கமாக, கந்தம் உலகளாவிய உணவுகளில் முக்கிய பங்காற்றுகிறது. இதன் மூலம் மாவு தயாரிக்கப்படுகிறது, இது பல வகையான சமையல் பொருட்கள், உதாரணமாக ரொட்டி, பாஸ்தா, பேஸ்ட்ரிகள் மற்றும் பருப்பு வகைகளை உருவாக்குவதற்கு அடிப்படை ஆகிறது. கந்தம் மாவு கார்போஹைட்ரேட்கள், புரதங்கள் மற்றும் அவசியமான அம்சங்களால் பருகியுள்ளதாக்கின்றது, இதனால் அது ஒரு மதிப்புமிக்க ஆற்றல் மற்றும் ஊட்டச்சத்து மூலம் ஆகிறது. கந்தம் பல்வேறு உணவுத் தயாரிப்புகளை உருவாக்குவதிலும் பயன்படுத்தப்படுகிறது. இதன் துணை பொருட்கள், உதாரணமாக கந்தம் சூடான மற்றும் கந்தம் தோல், பருப்புகள், ஆரோக்கிய உணவு ஊட்டச்சத்து அதிகரிப்பதற்காக பயன்படுத்தப்படுகின்றன. கந்தம் மாவு உணவு தொழிலில் மொசலா தயாரிப்பதற்குப் பயன்படுத்தப்படுகிறது, அதேவேளை, சாமுலினா, இது துரம் மாவிலிருந்து தயாரிக்கப்படுகிறது, பாஸ்தா மற்றும் கோஸ்கோஸ் தயாரிப்பதற்குப் பயன்படுத்தப்படுகிறது.
      </p>
    </div>
  </div>
  <div className="container-3">
    <p className="para-1">
      கந்தத்தின் முக்கியத்துவம் ஒரு உணவு பயிராக இருப்பதோடு, அதன் வணிகமல்லாத முக்கிய பயன்பாடுகளும் உள்ளன. அறுவடை முடிந்த பிறகு உண்டாகும் கந்தம் செடிகளை காட்டு மாடுகளுக்கான படுக்கையினாக பயன்படுத்துகிறார்கள், அல்லது கட்டுமானம் மற்றும் பொதி பொருட்கள் தயாரிக்க கலவையான பொருட்களில் சேர்க்கப்படுகிறது. கந்தம் தானியத்தை நோய்க்கான எண்ணெய் உற்பத்தி செய்யப்படுகிறது, இது கோஸ்மெடிக்ஸ், சோப் மற்றும் பிற தனிப்பட்ட பொருட்களில் பயன்படுத்தப்படுகிறது.
      <br />
      கந்தம் பயிரிடும் பயிற்சி பகுதி மற்றும் பருவநிலைக்கேற்ப வேறுபட்ட முறைகளில் செய்யப்படுகிறது. விவசாயிகள் பலவிதமான முறைகளை பயன்படுத்துகிறார்கள், அவை எப்போது இளவேனிலின் சீரமைப்பு, பாசன முறைகள் மற்றும் பசு பயிரிடுதலை, சுற்றுச் சூழல் பாதிப்புகளை குறைக்கும் வகையில். மேலும், நோய் இல்லாத கந்தம் வகைகளை வளர்க்க முயற்சிக்கின்றனர் மற்றும் கந்தம் பயிரிடுதலை உறுதி செய்யும் மற்றும் நிலையான உற்பத்தியை உறுதி செய்ய வலுவான உற்பத்தி முறைகள் ஊக்கப்படுத்தப்படுகின்றன.
      <br />
      இதற்க்கு மாறாக, கந்தம் ஒரு பல்துறை மற்றும் முக்கியமான உற்பத்தியாகும், இது உலகளாவிய உணவு பாதுகாப்பில் முக்கிய பங்காற்றுகிறது. அதன் பரவலான பயிரிடுதல், பல்வேறு பயன்பாடுகள் மற்றும் ஊட்டச்சத்து மதிப்பு கந்தத்தை உலகமெங்கும் மக்களின் உணவுகளுக்கும் பல்வேறு தொழில்களுக்கும் முக்கிய பங்கு ஆக்குகிறது.
      <br />
    </p>
  </div>

  <div className="container-4">
    <div className="container-41">
      <img src={bot5} alt="" className="img" />
    </div>

    <div className="container-42">
      <img src={logo} alt="" className="logo1" />
       <p className="intro-para">சிதைவு ஆய்வு ஸ்கேனர்</p>
      <h1 className="heading-1">
        கந்தம்
        <br /> பயிரிடுதல்
      </h1>
      <h3 className="heading-2">மூலிகை பருவ பராமரிப்பு மற்றும் அறுவடை சிறந்த பருவங்கள்</h3>
      <p className="spec-para">
        மூலிகை பருவம் [நவம்பர் - டிசம்பர்]
        <br />
        அறுவடை [ஏப்ரல் - மே]
      </p>
      <div className="list-items">
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          தண்ணீர் வெளியேறும் லோமி மண் பி.எச் 6-7 உடன்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          சிறந்த களத்தில் நேராக விதைகள் பயன்படுத்தவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          விதைகள் நட்டு நேரத்தில் நைட்ரஜன் உரத்தை பயன்படுத்தவும்.
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          வளர்ச்சி உற்பத்திக்கு சரியான வெப்பநிலை 15-25 டிகிரி செல் துவையாவாக இருக்க வேண்டும்.
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
          <p>நமது வீடியோக்களைப் பாருங்கள்</p>
          <h3>உங்கள் பயிரிடுதலுக்கான பரிந்துரைகள்</h3>
        </div>
      </div>
    </div>
  </div>

  <div className="container-5">
    <div className="container-51">
      <h1>செடி படங்கள்</h1>
      <img src={wheat1} alt="" className="img" />
      <img src={wheat2} alt="" className="img" />
      <img src={wheat3} alt="" className="img" />
      <img src={wheat4} alt="" className="img" />
    </div>
    <div className="container-51 container-52">
      <h1>நோய் பெயர்</h1>
      <p><NavLink to="/wbrownrust">பெரிய கஞ்சம்</NavLink></p>
      <p><NavLink to="/wseptoria">செப்டோரியா</NavLink></p>
      <p><NavLink>பவுட்ரி மில்டியூ</NavLink></p>
      <p><NavLink to="/wyellowrust">இளஞ்சோறு</NavLink></p>
    </div>
    <div className="container-51 container-53">
      <h1>உரங்கள்</h1>
      <p>யூரியா, அமோனியம் நைட்ரேட், கால்சியம் நைட்ரேட்</p>
      <p>டைய அமோனியம் பாஸ்பேட், அமோனியம் பாஸ்பேட்</p>
      <p>பொட்டாசியம் நைட்ரேட், பொட்டாசியம் சல்ஃபேட்</p>
      <p>யூரியா, அமோனியம் நைட்ரேட்</p>
    </div>
    <div className="container-51 container-53">
      <h1>புழு மருந்துகள்</h1>
      <p>டிரைட்மிபோன், டெபியூ கோனாசோல், ப்ரோபிகோனாசோல்</p>
      <p>அஸோசிக்ஸ்ட்ரோபின், பைக்கிரலோஸ்ட்ரோ</p>
      <p>ப்ரோபிகோனாசோல், டெபியூ கோனாசோல், மைக்கிலோப்யூட்டினல்</p>
      <p>டெபியூ கோனாசோல், ப்ரோபிகோனாசோல், எபோக்ஸிகோனாசோல்</p>
    </div>
  </div>
</div>
    </Wrapper>
  );
}
