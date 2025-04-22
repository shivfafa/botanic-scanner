import React, { useState } from "react";
// import corn from "../images/corn2.jpg";
// import MainImageSection from "../components/MainImageSection";
import styled from "styled-components";
import scotton from "../images/scotton.jpg";
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
    align-items: center;
    gap: 4rem;
    padding: 30px;
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

export default function CulCotton() {
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
          <span>{isUrdu ? "اردو" : "English"}</span>
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
            <img src={scotton} alt="" className="image" />
          </div>
          <div className="container-2">
            <h1 className="heading">Cotton</h1>
            <p className="para">
              Cotton, a versatile natural fiber, is widely cultivated and
              utilized for numerous purposes. It is primarily grown for its soft
              and breathable properties, making it a popular choice for clothing
              and textiles. Cotton plants produce fluffy bolls filled with
              fibers that can be spun into yarn or thread. The cultivation of
              cotton spans across different climates, from tropical to temperate
              regions, making it a global crop. Apart from its significance in
              the fashion industry, cotton has various industrial applications.
              Its fibers are utilized in the production of medical supplies,
              such as bandages and swabs, due to their absorbent nature.
              Additionally, cottonseed is used to extract oil, which can be
              further processed for cooking or incorporated into cosmetic and
              skincare products. Furthermore, cotton by-products find utility in
              different sectors. Cottonseed meal, a by-product of oil
              extraction, is used as animal feed, contributing to the
              agricultural industry. The remaining plant material, including
              stalks and leaves, can be utilized for composting or as a source
              of renewable energy through biomass conversion. Cotton is a
              crucial crop with economic and environmental significance.
            </p>
          </div>
        </div>
        <div className="container-3">
          <p className="para-1">
            Cotton, a versatile plant, produces fluffy bolls filled with fibers
            that have various applications. These fibers are spun into yarn or
            thread and used in textiles, clothing, and other products. Cotton
            cultivation spans different climates worldwide, making it a global
            crop.
            <br />
            Cotton's versatility extends beyond fashion. Its fibers are utilized
            in the production of medical supplies, such as bandages and swabs.
            Cottonseed is extracted for oil, which has applications in cooking,
            cosmetics, and skincare.
            <br />
            Cotton by-products find utility in different sectors. Cottonseed
            meal is used as animal feed, contributing to the agricultural
            industry. Plant material like stalks and leaves can be used for
            composting or as a source of renewable energy.
            <br />
            Cotton is a crucial crop with economic and environmental
            significance. Sustainable farming practices, including organic
            methods and efficient irrigation, are promoted to reduce its
            environmental impact.
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
              Cotton <br /> Cultivation
            </h1>
            <h3 className="heading-2">Best Seasons for Sowing & Harvesting </h3>
            <p className="spec-para">
              Sowing [April - May]
              <br />
              Harvesting [September - October]
            </p>
            <div className="list-items">
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  Choose well-drained sandy loam soil with a pH of 6-7.
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  Optimal temperature for growth is between 21-30°C.
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  Apply organic matter and phosphorus-rich fertilizers.
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  Control pests and diseases by practicing integrated pest
                  management.
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
            <NavLink className="link" to="/aphids">
              <p>Aphids</p>
            </NavLink>
            <NavLink className="link" to="/armyworm">
              <p>Army Worm</p>
            </NavLink>
            <NavLink className="link" to="/bacterial">
              <p>Bacterial Blight</p>
            </NavLink>
            <NavLink className="link" to="/powdery">
              <p>Powdery Mildew</p>
            </NavLink>
            <NavLink className="link" to="/targetspot">
              <p>Target Spot</p>
            </NavLink>
          </div>
          <div className="container-51 container-53">
            <h1>Fertilizers</h1>
            <p>Ammonium Sulfate, Potassium Nitrate</p>
            <p>Triple Superphosphate, Monoammonium Phosphate</p>
            <p>Muriate of Potash, Potassium Nitrate</p>
            <p>Zinc Sulfate, Iron Sulfate, Boric Acid</p>
            <p>Calcium Nitrate, Calcium Ammonium Nitrate</p>
          </div>
          <div className="container-51 container-53">
            <h1>Pesticides</h1>
            <p>Imidacloprid, Acetamiprid, Dinotefuran, Thiamethoxam</p>
            <p>Bacillus thuringiensis (Bt), Emamectin benzoate</p>
            <p>Copper-based fungicides, Streptomycin, Kasugamycin</p>
            <p>Sulfur, Trifloxystrobin, Thiophanate-methyl</p>
            <p>Triadimefon, Pyraclostrobin, Azoxystrobin</p>
          </div>
        </div>
      </div>

      <div className="urdu" style={{ display: isUrdu ? "block" : "none" }}>
        <div className="container">
          <div className="container-1">
            <img src={scotton} alt="" className="image" />
          </div>
          <div className="container-2">
            <h1 className="heading">کپاس</h1>
            <p className="para">
              کپاس، ایک مختلفیت سے بھرپور قدرتی ریشہ ہے، جو کئی مختلف مقاصد کے
              لئے کاشت کی جاتی ہے۔ یہ عموماً اپنی نرم اور سانس دار خصوصیات کے
              لئے کاشت ہوتی ہے، جس کی بنا پر یہ لباس اور ٹیکسٹائل کے لئے مقبول
              انتخاب ہے۔ کپاس کے پودے ریشوں سے بھرے ہوتے ہیں جنہیں دھاگے یا رسی
              بنایا جا سکتا ہے۔ کپاس کی کاشت گرم سے ٹھنڈے علاقوں تک مختلف موسموں
              میں کی جاتی ہے، جس سے یہ ایک عالمگیر فصل بن جاتی ہے۔ فیشن صنعت کے
              علاوہ، کپاس کا مختلف صنوبری استعمالات ہیں۔ اس کے ریشے جذباتی فصلات
              اور مسواکوں کے تیاری میں استعمال ہوتے ہیں۔ علاوہ ازیں، کپاس کے
              بیجوں سے تیل نکالا جاتا ہے، جو پکانے یا کوزمیٹک اور جلدی مصنوعات
              میں شامل کیا جا سکتا ہے۔ علاوہ ازیں، کپاس کے فرعی مصنوعات مختلف
              سیکٹروں میں کارآمد ہیں۔ تیل نکالنے کے بعد کپاس کے بیج کو مویشیوں
              کے کھلانے کے لئے استعمال کیا جاتا ہے جس سے زرعی صنعت میں اضافہ
              ہوتا ہے۔ پودے کے باقی حصوں میں سٹاک اور پتیاں کمپوسٹنگ کے لئے
              استعمال ہوسکتے ہیں یا بائیو میس س تبدیلی کے ذرائع کے طور پر
              استعمال ہوسکتے ہیں۔ کپاس ایک اہم فصل ہے جس کا معاشی اور ماحولیاتی
              اہمیت ہے۔
            </p>
          </div>
        </div>
        <div className="container-3">
          <p className="para-1">
            کپاس، ایک مختلف پودا ہے، جو ریشوں سے بھرے ہوئے ہوتے ہیں اور ان کے
            کئی استعمالات ہوتے ہیں۔ یہ ریشے دھاگے یا رسی بنائے جاتے ہیں اور
            ٹیکسٹائل، لباس اور دیگر مصنوعات میں استعمال ہوتے ہیں۔ کپاس کی کاشت
            دنیا بھر کے مختلف موسموں میں ہوتی ہے، جس سے یہ ایک عالمگیر فصل بن
            چکی ہوتی ہے۔
            <br />
            کپاس کی مختلف فصلات کے علاوہ اس کی مختلف اقتصادی استعمالات ہیں۔ اس
            کے ریشے جذباتی مصنوعات اور مسواکوں کے تیاری میں استعمال ہوتے ہیں۔
            کپاس کے بیج سے تیل نکالا جاتا ہے، جو کھانے پکانے، کوزمیٹک اور جلدی
            مصنوعات میں استعمال ہوتا ہے۔
            <br />
            کپاس کے فرعی مصنوعات مختلف سیکٹروں میں کارآمد ہوتے ہیں۔ تیل نکالنے
            کے بعد کپاس کے بیج کا مویشیوں کے کھلانے کے لئے استعمال ہوتا ہے، جس
            سے زرعی صنعت کو فائدہ پہنچتا ہے۔ پودے کے باقی حصوں کو کمپوسٹنگ کے
            لئے استعمال کیا جا سکتا ہے یا بائیو میس س تبدیلی کے ذرائع کے طور پر
            استعمال کیا جا سکتا ہے۔
            <br />
            کپاس ایک اہم فصل ہے جس کی معاشی اور ماحولیاتی اہمیت ہوتی ہے۔
            ماحولیاتی اثرات کو کم کرنے کے لئے، اس کی کاشت میں معاشرتی ترقی پسند
            اصولوں اور ماہر آبپاشی کے استعمال کو ترویج دیا جاتا ہے۔
          </p>
        </div>

        <div className="container-4">
          <div className="container-41">
            <img src={bot5} alt="" className="img" />
          </div>

          <div className="container-42">
            <img src={logo} alt="" className="logo1" />
            <p className="intro-para">ذی بوٹینک اسکینر</p>
            <h1 className="heading-1">
              کپاس <br /> کاشت
            </h1>
            <h3 className="heading-2">بہترین فصل کاشت اور کٹائی کے موسمات </h3>
            <p className="spec-para">
              کاشت [اپریل - مئی]
              <br />
              کٹائی [ستمبر - اکتوبر]
            </p>
            <div className="list-items">
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">چندے ہوئے ریتیلا مٹی جس کی pH 6-7 ہو۔</p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  اوسط درجہ حرارت کی بہترین مواقع 21-30 درجہ سیلسیس ہیں۔
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  عضوی مواد اور فاسفورس سے بھرپور کھاد استعمال کریں۔
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  مکمل کیڑے مکوڑے کو مبینہ کھیتوں کے ذرائع سے قابو میں رکھیں۔
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
                <p>ہمارا ویڈیو دیکھیں</p>
                <h3>آپ کے کروپس کے لئے مشورے</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-5">
          <div className="container-51">
            <h1>پودے کی تصویر</h1>
            <img src={cotton1} alt="" className="img" />
            <img src={cotton2} alt="" className="img" />
            <img src={cotton3} alt="" className="img" />
            <img src={cotton4} alt="" className="img" />
            <img src={cotton5} alt="" className="img" />
          </div>
          <div className="container-51 container-52">
            <h1>بیماری کا نام</h1>

            <NavLink className="link" to="/aphids">
              <p>ایفڈز</p>
            </NavLink>
            <NavLink className="link" to="/armyworm">
              <p>آرمی ورم</p>
            </NavLink>
            <NavLink className="link" to="/bacterial">
              <p>بیکٹیریل بلائٹ</p>
            </NavLink>
            <NavLink className="link" to="/powdery">
              <p>پاؤڈری ملڈو</p>
            </NavLink>
            <NavLink className="link" to="/targetspot">
              <p>ٹارگٹ اسپاٹ</p>
            </NavLink>
          </div>
          <div className="container-51 container-53">
            <h1>کھاد</h1>
            <p>ایمونیم سلفیٹ، پوٹاشیم نائٹریٹ</p>
            <p>ٹرپل سپر فاسفیٹ، منو ایمونیم فاسفیٹ</p>
            <p>میوریٹ آف پوٹیش، پوٹاشیم نائٹریٹ</p>
            <p>زنک سلفیٹ، آئرن سلفیٹ، بورک ایسڈ</p>
            <p>کیلشیم نائٹریٹ، کیلشیم ایمونیم نائٹریٹ</p>
          </div>
          <div className="container-51 container-53">
            <h1>کیٹھ کاٹھ</h1>
            <p>ایمیڈیکلوپرڈ، ایسیٹامپرڈ، ڈائنوٹیفیورن، تھیامیتھوکسام</p>
            <p>بیکلس تھورنجائینسس (بی ٹی)، ایمیمیکٹن بینزویٹ</p>
            <p>کاپر بیسڈ فنگی سائنڈئیس، سٹریپٹو مائیسن، کاسوگامائیسن</p>
            <p>سلفر، ٹرائیفلوکسیسٹروبن، تھائیوفینیٹ-میتھائل</p>
            <p>ٹرائڈیمیفون، پائراکلوسٹروبن، ایزوکسٹروبن</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
