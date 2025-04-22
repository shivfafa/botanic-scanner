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
      {/* <MainImageSection title={title} image={image} color={color} /> */}

      <div className="container">
        <div className="container-1">
          <img src={srice} alt="" className="image" />
        </div>
        <div className="container-2">
          <h1 className="heading">چاول</h1>
          <p className="para">
            چاول، دنیا کی آدھ سے زائد آبادی کے لئے مسلسل غذا کا ذریعہ ہے،
            ایک لازمی غلہ فصل ہے جس کی ایک دلچسپ تاریخ ہے۔ یہ عموماً ٹراپیکل سے
            ٹمپرٹ کے علاقوں تک مختلف آب وہاشی کے خطوں میں کاشت کیا جاتا ہے۔ چاول
            کے پودے لمبے، نازک باڑیوں والے پھول ڈالتے ہیں جن کے دانے مختلف
            پکوانی اور صنعتی مقاصد کے لئے کٹائے جاتے ہیں۔ غذا کا ذریعہ کے طور پر،
            چاول عالمی غذائی امن کے لئے اہم کردار ادا کرتا ہے۔ یہ کئی ممالک میں
            غذائی بنیادی کھانا کے طور پر استعمال ہوتا ہے اور ضروری کاربوہائیڈریٹس
            اور عناصر غذائیہ فراہم کرتا ہے۔ چاول کو مکمل اناج کے طور پر استعمال
            کیا جا سکتا ہے یا سفید چاول، براؤن چاول، پاربوئلڈ چاول اور خصوصی
            قسموں مثل بسمتی اور جسمین چاول کے طور پر مختلف شکلوں میں پراسیس
            کیا جا سکتا ہے۔ یہ ایک مختلف اجزا کے استعمال والی مادہ ہے جو مختلف
            طرزوں میں استعمال ہوتا ہے، جیسے سٹر فرائز، پلافز، سوشی اور چاول
            سے تیار شدہ میٹھے پکوانے۔
            <br />
            چاول کی اہمیت کے علاوہ، اس کے صنعتی استعمالات بھی ہیں۔ چاول کی چھال،
            دانے کی بیرونی پرت، ایک قیمتی فرعی مصنوع ہے جو تیل اور عناصر غذائی سے
            بھری ہوتی ہے۔ چاول کی چھال سے تیل نکالا جاتا ہے جو کھانے پکانے کے لئے
            استعمال کیا جاتا ہے، اور علاوہ ازیں صابن، کوزمیٹکس اور دوائیات کی
            تیاری میں استعمال ہوتا ہے۔ چاول کی بچی ہوئی باڑیوں کو، کٹھ پشت،
            مویشیوں کا کھورا، یا کاغذ، فائبر بورڈ اور بائیوانرجی کی تیاری میں
            استعمال کیا جا سکتا ہے۔ چاول کی کاشت کے طریقے علاقوں کے مطابق مختلف
            ہوتے ہیں، لیکن برقرار کاری اصولوں کا استعمال مشہور ہو رہا ہے۔
            ٹکنیکس جیسے رائے کے نظام کے شدت (SRI) اور پانی کی محتاط آبپاشی کے
            طریقے سے پانی کے استعمال کو کم کرنا اور پیداوار میں بہتری کرنا مدد
            فراہم کرتے ہیں۔
          </p>
        </div>
      </div>
      <div className="container-3">
        <p className="para-1">
          غذا کا ذریعہ کے طور پر، چاول عالمی غذائی امن کے لئے اہم کردار ادا
          کرتا ہے۔ یہ کئی ممالک میں غذائی بنیادی کھانا کے طور پر استعمال ہوتا ہے
          اور ضروری کاربوہائیڈریٹس اور عناصر غذائیہ فراہم کرتا ہے۔ چاول کو مکمل اناج
          کے طور پر استعمال کیا جا سکتا ہے یا سفید چاول، براؤن چاول، پاربوئلڈ
          چاول اور خصوصی قسموں مثل بسمتی اور جسمین چاول کے طور پر مختلف شکلوں
          میں پراسیس کیا جا سکتا ہے۔ یہ ایک مختلف اجزا کے استعمال والی مادہ ہے جو
          مختلف طرزوں میں استعمال ہوتا ہے، جیسے سٹر فرائز، پلافز، سوشی اور چاول
          سے تیار شدہ میٹھے پکوانے۔
          <br />
          چاول کی اہمیت کے علاوہ، اس کے صنعتی استعمالات بھی ہیں۔ چاول کی چھال، دانے
          کی بیرونی پرت، ایک قیمتی فرعی مصنوع ہے جو تیل اور عناصر غذائی سے بھری
          ہوتی ہے۔ چاول کی چھال سے تیل نکالا جاتا ہے جو کھانے پکانے کے لئے استعمال
          کیا جاتا ہے، اور علاوہ ازیں صابن، کوزمیٹکس اور دوائیات کی تیاری میں استعمال
          ہوتا ہے۔ چاول کی بچی ہوئی باڑیوں کو، کٹھ پشت، مویشیوں کا کھورا، یا
          کاغذ، فائبر بورڈ اور بائیوانرجی کی تیاری میں استعمال کیا جا سکتا ہے۔
          چاول کی کاشت کے طریقے علاقوں کے مطابق مختلف ہوتے ہیں، لیکن برقرار کاری
          اصولوں کا استعمال مشہور ہو رہا ہے۔ ٹکنیکس جیسے رائے کے نظام کے شدت (SRI) اور
          پانی کی محتاط آبپاشی کے طریقے سے پانی کے استعمال کو کم کرنا اور پیداوار
          میں بہتری کرنا مدد فراہم کرتے ہیں۔
          <br />
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
            چاول <br /> کاشت
          </h1>
          <h3 className="heading-2">بہترین فصل کاشت اور کٹائی کے موسمات </h3>
          <p className="spec-para">
            کاشت [اپریل - مئی]
            <br />
            کٹائی [اکتوبر - نومبر]
          </p>
          <div className="list-items">
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              پھیلی ہوئی مٹی کا تیار کریں، جس کا pH 6-7 ہو۔
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              بچی ہوئی پودوں کو اُگائیں جب وہ 25-30 دن کے ہوں۔
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              کاشت کی دوران پیداوار کی میزانیں 2-5 انچ رکھیں۔
              </p>
            </div>
            <div>
              <p className="icon">
                <MdGppGood />
              </p>
              <p className="lidata">
              زمین کے ٹیسٹ نتائج کے مطابق کھاد لگائیں۔
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
          <img src={cotton1} alt="" className="img" />
          <img src={cotton2} alt="" className="img" />
          <img src={cotton3} alt="" className="img" />
          <img src={cotton4} alt="" className="img" />
          <img src={cotton5} alt="" className="img" />
        </div>
        <div className="container-51 container-52">
          <h1>بیماریوں کے نام</h1>
          <NavLink to="/rblight"><p>بیکٹیریا بلائٹ</p></NavLink>
          <NavLink to="/brownspot"><p>براؤن اسپاٹ</p></NavLink>
          <NavLink to="/hispa"><p>ہسپہ</p></NavLink>
          <NavLink to="/leafblast"><p>پتی کی بلاسٹ</p></NavLink>
          <NavLink to="/tungro"><p>تنگرو</p></NavLink>
        </div>
        <div className="container-51 container-53">
          <h1>کھاد</h1>
          <p>یوریا، ایمونیم سلفیٹ، ایمونیم فاسفیٹ</p>
          <p>ٹرپل سپرفاسفیٹ، منو ایمونیم فاسفیٹ</p>
          <p>میوریٹ آف پوٹاش، پوٹاشیم نائٹریٹ</p>
          <p>زنک سلفیٹ، آئرن سلفیٹ، بورک ایسڈ</p>
          <p>میگنیشیم سلفیٹ، میگنیشیم نائٹریٹ</p>
        </div>
        <div className="container-51 container-53">
          <h1>کیٹھ کاٹھ</h1>
          <p>کاپر بیسڈ فنگی سائنڈئیس، سٹریپٹو مائیسن، کاسوگامائیسن</p>
          <p>ٹرائسائکلیزول، پائروکویلن، بینزمائیدازول، ایسوپروتھایلین</p>
          <p>کاربیرل، ایمیڈیکلوپرڈ، فپرونل، تھیامیتھوکسام</p>
          <p>پائراکلوسٹروبن، ٹرائفلوکسٹروبن، پروپیکونازول</p>
          <p>بیج کا علاج ایمیڈیکلوپرڈ، تھیامیتھوکسام، کلوتھینائڈن</p>
        </div>
      </div>
    </Wrapper>

      </div>
    </Wrapper>
  );
}
