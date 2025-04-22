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
            <h1 className="heading">مکئی/کارن</h1>
            <p className="para">
              مکئی، جو کے نام سے بھی جانی جاتی ہے، ایک مختلف مالٹی بیج کا پودا
              ہے جو دنیا بھر میں کاشت کیا جاتا ہے۔ یہ ایک بنیادی خوراک، جانوروں
              کا خوراک، اور مختلف صنعتی استعمالات کے خام مال کے لئے استعمال ہوتی
              ہے۔ مکئی کے پودے دانے دار بیلوں کو پیدا کرتے ہیں، اور اس کی کاشت
              معتدل سے گرم علاقوں میں ہوتی ہے۔ مکئی، جس کو علمی طور پر زیا میز
              کہا جاتا ہے، ایک بہت زیادہ مقدار میں استعمال ہونے والا دانہ دار
              مال ہے جو پوری دنیا میں کاشت کی جاتی ہے۔ مختلف علاقوں میں خصوصاً
              یورپ اور افریقہ میں مکئی کو مکئی کے نام سے بھی پکارا جاتا ہے۔ مکئی
              انسانوں کے لئے ہزاروں سال سے کاشت کی جا رہی ہے اور یہ دنیا بھر میں
              اہم بنیادی فصلوں میں سے ایک بن گئی ہے۔ مکئی کو صنعتی مصنوعات کی
              تیاری میں بھی استعمال کیا جاتا ہے، جن میں بائیو ڈیگریڈیبل پلاسٹک،
              چپکنے والا، کپڑے اور کیمیکل شامل ہیں۔ مکئی کی پراسرار کرنوں اور
              بال انتہائی خود مختار مواد کے تخلیق کے لئے بائیومیس کے طور پر
              استعمال ہوسکتے ہیں۔
            </p>
          </div>
        </div>
        <div className="container-3">
          <p className="para-1">
            مکئی پودوں کی ایک خصوصی خصوصیت یہ ہے کہ وہ کونوں پیدا کرنے کی صلاحیت
            رکھتے ہیں جو کہ دانوں کی قطاروں کو محفوظ کرتے ہیں۔ یہ کونے پودے کا
            پیدار حصہ ہوتے ہیں اور انہیں مختلف مقاصد کے لئے کاٹا جاتا ہے۔ ہر
            کونے پر ایک دانہ پیلا، سفید، لال، نیلا یا دوسرے رنگ کا ہوسکتا ہے، جو
            کے مختلف قسموں کے مطابق ہوتا ہے۔
            <br />
            مکئی کے بہت سارے استعمالات ہیں، جو اسے بہت قیمتی فصل بناتے ہیں۔ سب
            سے پہلے، یہ انسانوں کے لئے ایک بنیادی خوراک کے طور پر خدمت فراہم
            کرتی ہے۔ مکئی کو صاف یا پکا ہوا مکئی کے طور پر مستقیم استعمال کیا جا
            سکتا ہے، یا اسے مختلف غذائی مصنوعات مثلاً مکئی آٹا، مکئی کا آٹا،
            کارن سٹارچ، مکئی کا شیرہ اور مکئی کا تیل میں تبدیل کیا جا سکتا ہے۔
            یہ مصنوعات روٹی، ٹرٹیلا، سییریل، نیشٹس، اور مشروبات وغیرہ میں
            استعمال ہوتے ہیں۔
            <br />
            اس کے علاوہ، مکئی جانوروں کے خوراک کے لئے بھی اہم ہے۔ اس کی بلند
            توانائی اور غذائی قیمت کی بنا پر اسے مواشی جیسے مویشی، سور، اور
            پولٹری کے خوراک کے لئے مشہور انتخاب بنا دیا گیا ہے۔ مکئی کو عموماً
            مویشی کے خوراک کے لئے پیسٹ بنایا جاتا ہے یا مختلف مخلوط خوراکوں میں
            استعمال کیا جاتا ہے جو مویشیوں کو متوازن غذائیت فراہم کرتے ہیں۔
            <br />
            علاوہ ازیں، مکئی کو مختلف صنعتی استعمالات کے لئے استعمال کیا جاتا
            ہے۔ یہ بائیوفیوئل کی تیاری کے لئے بنیادی مال کے طور پر خدمت دیتی ہے،
            جیسے کہ ایتھنول، جو مکئی کے سٹارچ سے بروئے انگریزی کے ذرائع سے حاصل
            کیا جاتا ہے۔ ایتھنول فاسل دیواروں کے غیر توازنی گیس کی انخلا کو کم
            کرنے کے لئے عموماً گیسولین کے ساتھ ملا کر استعمال کیا جاتا ہے۔
          </p>
        </div>

        <div className="container-4">
          <div className="container-41">
            <img src={bot5} alt="" className="img" />
          </div>

          <div className="container-42">
            <img src={logo} alt="" className="logo1" />
            <p className="intro-para">دی بوٹانک اسکینر</p>
            <h1 className="heading-1">
              مکئی <br /> کاشت
            </h1>
            <h3 className="heading-2">بہترین موسم کاشت اور حصارت</h3>
            <p className="spec-para">
              کاشت [مئی - جون]
              <br />
              حصارت [ستمبر - اکتوبر]
            </p>
            <div className="list-items">
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  اچھی طرح سے نکاسھ زمین کا انتخاب کریں جس کا pH 6-7 ہو۔
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">بیج کو 1-2 انچ کی گہرائی پر بونا جائے۔</p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  کاشت کے دوران نائٹروجنی کیٹری کا استعمال کریں۔
                </p>
              </div>
              <div>
                <p className="icon">
                  <MdGppGood />
                </p>
                <p className="lidata">
                  بہتر نشوونما کے لئے پودوں کے درمیان معقول فاصلہ رکھنا ضروری
                  ہے۔
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
                <h3>آپ کی کاشت کے لئے مشورے</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-5">
          <div className="container-51">
            <h1>پودے کی تصویر</h1>
            <img src={corn1} alt="" className="img" />
            <img src={corn2} alt="" className="img" />
            <img src={corn3} alt="" className="img" />
          </div>
          <div className="container-51 container-52">
            <h1>بیماری کا نام</h1>
            <NavLink className="link" to="/blight">
              <p>بلائٹ</p>
            </NavLink>
            <NavLink className="link" to="/commonrust">
              <p>کامن رسٹ</p>
            </NavLink>
            <NavLink className="link" to="/grayleafspot">
              <p>گرے لیف اسپاٹ</p>
            </NavLink>
          </div>
          <div className="container-51 container-53">
            <h1>کھادیں</h1>
            <p>یوریا، ایمونیم نائٹریٹ، کیلشیم نائٹریٹ</p>
            <p>ڈائی ایمونیم فاسفیٹ، ایمونیم فاسفیٹ</p>
            <p>پوٹاشیم سلفیٹ، پوٹاشیم نائٹریٹ</p>
          </div>
          <div className="container-51 container-53">
            <h1>کیڑے مار کے دوائیں</h1>
            <p>کلو روتھالونل، منکوزیب، کاپر بیسڈ فنگسائیڈز</p>
            <p>ازوکسٹرابن، پروپیکونازول، پائراکلوسٹرابن</p>
            <p>ازوکسٹرابن، پروپیکونازول، ٹرائفلوکسٹرابن</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
