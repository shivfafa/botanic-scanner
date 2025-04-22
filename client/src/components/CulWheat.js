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
      <h1 className="heading">گندم</h1>
      <p className="para">
        گندم، ایک بہت وسیع پیداوار ہے جو عالمی طور پر خوراک کی فہرست میں اہم کردار ادا کرتا ہے۔ یہ ایک مختلف اقلیم کے درمیان پیدا کیا جانے والا اناج ہے جو دھاتی سے گرم علاقوں تک کے درمیان تمام علاقوں میں کاشت کیا جاتا ہے۔ گندم کا پودا بلند پودے پیدا کرتا ہے جس میں کئی کھائی جانے والی دانے دار گٹھیاں پیدا ہوتی ہیں۔ خوراک کا اہم حصہ ہونے کے ناطے، گندم دنیا بھر کی خوراک میں اہم کردار ادا کرتا ہے۔ اس کو آٹا بنایا جاتا ہے جو کئی قسم کی پکوانی چیزوں، مثلاً روٹی، پاستا، پیسٹریز اور سیریلس کی بنیاد بنتا ہے۔ گندم کا آٹا کاربوہائیڈریٹس، پروٹین اور ضروری عناصر سے بھرپور ہوتا ہے، جو اسے ایک قیمتی توانائی اور غذائیت کا ذریعہ بناتا ہے۔ گندم کو مختلف خوراکی مصنوعات کے تیار کرنے میں بھی استعمال کیا جاتا ہے۔ اس کے مشتقات، مثلاً گندم کی گرم اور گندم کا چھالا، سیریلس، صحت بخش غذائیت کے اضافے کے لئے استعمال ہوتے ہیں۔ گندم کا میدہ کھانے کی صنعت میں موسلا بنانے کے لئے استعمال ہوتا ہے، جبکہ سیمولینا، جو درم آٹے سے تیار کیا جاتا ہے، پاستا اور کوسکوس کی تیاری میں استعمال ہوتا ہے۔
      </p>
    </div>
  </div>
  <div className="container-3">
    <p className="para-1">
      گندم کا اہمیت ایک خوراکی فصل کے طور پر ہونے کے علاوہ، اس کے غیر خوراکی اہم استعمالات بھی ہیں۔ کٹائی کے بعد باقی رہ جانے والے گندم کے پودوں کو جانوروں کے بستر کے طور پر استعمال کیا جاتا ہے، یا تعمیر اور پیکیجنگ کے لئے مرکب مواد میں شامل کیا جاتا ہے۔ گندم کے دانے گھی کا نکالا جاتا ہے، جو کوسمیٹکس، صابن اور دیگر ذاتی خیالات کی مصنوعات میں استعمال ہوتا ہے۔
      <br />
      گندم کی کاشت کی تربیت علاقے اور اقلیم کے مطابق مختلف طریقوں سے کی جاتی ہے۔ کسان مختلف تکنیک استعمال کرتے ہیں، جیسے کہ کراہی ایڈجسٹمنٹ، آبپاشی نظام، اور فضلی کاشت، تکیہ، ماحولیاتی اثرات کو کم کرنے کے لئے۔ علاوہ ازیں، بیماری سے محفوظ گندم کی مختلف قسمیں تیار کرنے کے لئے کوشاش کی جارہی ہے اور گندم کی کاشت کی برقراری اور مستقل پیداوار کی تصدیق کے لئے مستحکم کاشت کے طریقے کو فروغ دیا جا رہا ہے۔
      <br />
      ان کے علاوہ، گندم ایک مختلف اور اہم پیداوار ہے جو عالمی خوراکی حفاظت میں بنیادی کردار ادا کرتا ہے۔ اس کی وسعتی کاشت، مختلف استعمالات، اور غذائیتی قیمت گندم کو دنیا بھر کے لوگوں کی خوراک اور مختلف صنعتوں کا اہم حصہ بناتی ہیں۔
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
        گندم
        <br /> کاشت
      </h1>
      <h3 className="heading-2">بونیادی موسم باغبانی اور کٹائی کے لئے بہترین موسمات </h3>
      <p className="spec-para">
        بونیادی موسم [نومبر - دسمبر]
        <br />
        کٹائی [اپریل - مئی]
      </p>
      <div className="list-items">
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          پانی نکلنے والی لومی مٹی جس کا پی ایچ 6-7 ہو۔
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          بہتر انبار کی جاتی ہوئی سیدھی بیج استعمال کریں۔
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          بیج بونے کے وقت نائٹروجنی کھاد کا استعمال کریں۔
          </p>
        </div>
        <div>
          <p className="icon">
            <MdGppGood />
          </p>
          <p className="lidata">
          بڑھائی کی پیداوار کے لئے درمیانہ درجہ حرارت 15-25 درجہ سیلسیس کے درمیان ہو۔
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
          <h3>آپ کے کاشت کے لئے مشورے</h3>
        </div>
      </div>
    </div>
  </div>

  <div className="container-5">
    <div className="container-51">
      <h1>پودے کی تصویر</h1>
      <img src={wheat1} alt="" className="img" />
      <img src={wheat2} alt="" className="img" />
      <img src={wheat3} alt="" className="img" />
      <img src={wheat4} alt="" className="img" />
    </div>
    <div className="container-51 container-52">
      <h1>بیماری کا نام</h1>
      
      
      
      
      <p><NavLink to="/wbrownrust">براؤن رسٹ</NavLink></p>
          <p><NavLink to="/wseptoria">سیپٹوریا</NavLink></p>
          <p><NavLink >پاؤڈری ملڈیو</NavLink></p>
          <p><NavLink to="/wyellowrust">ایلو رسٹ</NavLink></p>
    </div>
    <div className="container-51 container-53">
      <h1>کھادیں</h1>
      <p>یوریا، ایمونیم نائٹریٹ، کیلشیم نائٹریٹ</p>
      <p>ڈائی ایمونیم فاسفیٹ، ایمونیم فاسفیٹ</p>
      <p>پوٹاشیم نائٹریٹ، پوٹاشیم سلفیٹ</p>
      <p>یوریا، ایمونیم نائٹریٹ</p>
    </div>
    <div className="container-51 container-53">
      <h1>کیڑے مار</h1>
      <p>ٹرائڈمیفون، ٹیبیو کونازول، پروپیکونازول</p>
      <p>ازوکسیسٹروبن، پائیکرالوسٹرو</p>
      <p>پروپیکونازول، ٹیبیو کونازول، مائیکلو بیوٹنل</p>
      <p>ٹیبیو کونازول، پروپیکونازول، ایپوکسی کونازول</p>
    </div>
  </div>
</div>

    </Wrapper>
  );
}
