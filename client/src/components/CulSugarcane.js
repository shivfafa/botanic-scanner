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
          <h1 className="heading">گنا</h1>
          <p className="para">
            گنا، ایک بلند دائمی گھاس، دنیا بھر میں کئی ٹراپیکل اور سبٹراپیکل علاقوں
            میں کاشت کی جانے والی اہم فصل ہے۔ یہ عموماً اپنے میٹھے رس کے لئے کاشت
            ہوتا ہے، جو شکر کی پیداوار کے اہم ذرائع میں سے ایک ہے۔ گنے کے پودے
            موٹے سٹالوں سے ملے ہوتے ہیں جو شیرے کو ذخیرہ کرتے ہیں، اس سبب سے یہ
            کاشت کے مرکزی توجہ ہوتے ہیں۔ گنے کی صنعت عالمی شکر مارکیٹ میں اہم کردار
            ادا کرتی ہے۔ اسٹالوں کو کٹا کر شیرے کے حصول کے لئے پھرایا جاتا ہے، جو
            پھر مختلف صاف کاری اور بلائیکرسٹلائزیشن پروسیسز سے گزار کر شکر کے مختلف
            اشکال میں، مثلاً گرینولیٹڈ شکر، براؤن شکر اور مولاسس، حاصل کی جاتی ہے۔
            گنے کی زیادہ میٹھائی ان میں سے مختلف اشیائوں کی تیاری کے لئے بھی موزوں
            خام مال مواد بناتی ہے، جیسے بائیوفیوئل کی تیاری کے لئے بنا ہوا، جو ایک
            نئی بجلی کے طور پر استعمال ہوتا ہے۔ شکر کی صنعت کے علاوہ، گنے کے دیگر
            مختلف استعمالات بھی ہیں۔ شیرے حاصل کرنے کے بعد باگیس، شیرے کو نکالنے کے
            بعد باقی رہ جانے والے ریشے کو، بائیوانرجی کی ایک مستقل خرچ کی طرح استعمال
            کیا جاتا ہے یا حرارت اور بجلی کے تولید کے لئے۔ علاوہ ازیں، باگیس کو کاغذ
            اور کارڈ بنانے کی تیاری کے لئے پلپ میں تبدیل کیا جا سکتا ہے۔
          </p>
        </div>
      </div>
      <div className="container-3">
        <p className="para-1">
          گنے کی کاشت کے لئے خاص ماحولیاتی حالات کی ضرورت ہوتی ہے، جن میں کافی پانی
          کی فراہمی اور گرم حرارت شامل ہوتی ہے۔ گنے کی پیداوار کے ماحولیاتی اثرات
          کو کم کرنے کے لئے مستحکم کاشت کے اصول اہم ہوتے ہیں۔ بہتر آبپاشی تکنیکس
          کو بہتر کرنے، کیمیائی دخلات کو کم کرنے اور زمین کے مسئلے کے خواہش مند
          انتظامات کی ترویج، مٹی کے صحت اور پانی کے وسائل کی حفاظت کے لئے معاشرتی
          تبدیلیاں ضروری ہیں۔
          <br />
          گنے کی صنعت کئی ممالک کی معیشت میں اہم کردار ادا کرتی ہے، روزگار کے مواقع
          فراہم کرتی ہے اور زرخیزی کے لئے کاشت کے سرمایہ کاری میں حصہ ڈالتی ہے۔
          لیکن گنے کی کاشت میں ملازمتی اصولوں، زمین استعمال کے حوالے سے اور ماحولیاتی
          مستحکمیت کے بارے میں تشویشیں نے اقدامات کو تشدد سے روکنے کے لئے آگاہی
          کاری کی ہے اور گنے کی کاشت میں ملوث کشتکاروں اور کمیونٹیز کی معاشرتی بہبود
          کی حمایت کرنے کے لئے مدد فراہم کی ہے۔
          <br />
          ان میں سے کچھ مشکلات کے باوجود، گنا ایک مختلف فصل ہے جس کے مختلف
          استعمالات ہیں، جن میں شکر کی پیداوار سے لے کر بجلی کی تیاری اور کاغذ کی
          تیاری تک مختلف شعبوں میں استعمال کیا جاتا ہے۔ گنے کی صنعت کی بقائی معاشی
          فوائد کو ماحولیاتی مستحکمی کے ساتھ توازن برقرار کرنا برائے عمومی فوائد
          کے لحاظ سے اہم ہے۔
          <br />
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
        گنا <br /> کاشت
      </h1>
      <h3 className="heading-2">بونیادی موسم باغبانی اور کٹائی کے لئے </h3>
      <p className="spec-para">
        بونیادی موسم باغبانی [فروری - مارچ]
        <br />
        کٹائی [اکتوبر - نومبر]
      </p>
      <div className="list-items">
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          pH 6-8 والی خوبصورت مٹی کا انتخاب کریں۔
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          صحیح اور بیماری سے پاک کین سیٹ یا کھلی بڑی کی کاشت کریں۔
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          میدان میں 1-1.5 انچ کی مساوات کی حفاظت کریں۔
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          کھیت میں زرخیز کھاد اور موزوں کھاد کا استعمال کریں۔
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          نظامی اور ہربیسائڈ کے اطلاق سے کیڑے کا نقصان کم کریں۔
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
      <img src={sugarcane1} alt="" className="img" />
      <img src={sugarcane2} alt="" className="img" />
      <img src={sugarcane3} alt="" className="img" />
      
    </div>
    <div className="container-51 container-52">
      <h1>بیماریوں کے نام</h1>
     <p><NavLink to="/sbacterialblight">بیکٹیریا بلائٹ</NavLink></p>
      <p><NavLink to="/redrot">ریڈ راٹ</NavLink></p>
      <p><NavLink to="/redrust">زنگ</NavLink></p>
      
    </div>
    <div className="container-51 container-53">
      <h1>کھاد</h1>
      <p>یوریا، ایمونیم سلفیٹ، ایمونیم فاسفیٹ</p>
      <p>ٹرپل سپرفوسفیٹ، منوآمونیم فاسفیٹ</p>
      <p>میوریٹ آف پوٹاش، پوٹاشیم نائٹریٹ</p>
    </div>
    <div className="container-51 container-53">
      <h1>کیڑے مار</h1>
      <p>کاپر بیسڈ فنگسائڈ، سٹرپٹومائیسن، کاسوگامائسن</p>
      <p>ٹیبیوکونیزول، پروپیکونیزول، تھیوفینیٹ میتھل</p>
      <p>کاپر بیسڈ فنگسائڈ، پروپیکونیزول</p>
    </div>
  </div>

      </div>
    </Wrapper>
  );
}
