import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
    /* position: "fixed";
   top:"10px";
   right: "10px";  */
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-right: 40px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  padding: 60px 90px;
  font-family: Arial, sans-serif;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Heading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkgreen};
  /* margin-top: 80px; */
`;

const Subheading = styled.h2`
  color: ${({ theme }) => theme.colors.yellow};
  margin-top: 50px;
`;

const Description = styled.p`
  text-align: justify;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Urdu = styled.section`
  direction: rtl;
  text-align: right;
`;

const English = styled.section``;

export default function TargetSpotPrecautions() {
  const [isUrdu, setIsUrdu] = useState(false);

  const handleToggleLanguage = () => {
    setIsUrdu((prevIsUrdu) => !prevIsUrdu);
  };
  return (
    <>
      <Show>
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
      </Show>

      <English style={{ display: isUrdu ? "none" : "block" }}>
        <Container>
          <Heading>Cotton Target Spot Disease</Heading>
          <Description>
            <strong>Description:</strong> Cotton Target Spot Disease is a fungal
            infection that affects cotton plants. The disease causes circular
            lesions with a distinct target-like appearance on the leaves,
            leading to reduced plant health and yield loss.
          </Description>
          <Subheading>Symptoms:</Subheading>
          The following symptoms are characteristic of Cotton Target Spot
          Disease:
          <List>
            <ListItem>
              Circular lesions on cotton leaves with concentric rings.
            </ListItem>
            <ListItem>Yellowing of leaves surrounding the lesions.</ListItem>
            <ListItem>Leaf defoliation in severe cases.</ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Target Spot Disease is caused by the fungal pathogens of the
          genus <em>Corynespora</em>. The disease spreads through spores and can
          survive in plant debris and soil.
          <Subheading>Impact on Crops:</Subheading>
          The disease can lead to reduced photosynthetic capacity, premature
          defoliation, and ultimately, decreased cotton yield.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control Cotton Target Spot Disease, consider the
          following strategies:
          <List>
            <ListItem>
              <strong>1. Crop Rotation:</strong> Practice crop rotation to
              reduce the build-up of disease pathogens in the soil.
            </ListItem>
            <ListItem>
              <strong>2. Fungicide Application:</strong> Apply fungicides
              containing Triadimefon, Pyraclostrobin, or Azoxystrobin as per
              recommended guidelines to protect plants from infection.
            </ListItem>
            <ListItem>
              <strong>3. Sanitation:</strong> Remove and destroy infected plant
              debris to prevent the spread of the disease.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overhead irrigation,
              as wet leaves can promote disease development. Use drip irrigation
              if possible.
            </ListItem>
            <ListItem>
              <strong>5. Resistant Varieties:</strong> Plant cotton varieties
              that have shown resistance or tolerance to Target Spot Disease.
            </ListItem>
            <ListItem>
              <strong>6. Monitoring:</strong> Regularly monitor cotton fields
              for any signs of the disease to implement timely control measures.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <List>
            <ListItem>
              Calcium Nitrate: Supplies calcium, an essential nutrient that can
              enhance plant tolerance to certain diseases.
            </ListItem>
            <ListItem>
              Calcium Ammonium Nitrate: Provides a balanced combination of
              calcium and nitrogen to support overall plant health.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <List>
            <ListItem>
              Triadimefon: A systemic fungicide effective against various fungal
              diseases, including Target Spot Disease.
            </ListItem>
            <ListItem>
              Pyraclostrobin: A broad-spectrum fungicide that provides
              preventive and curative control against fungal pathogens.
            </ListItem>
            <ListItem>
              Azoxystrobin: A fungicide known for its preventive and curative
              properties against foliar diseases in cotton.
            </ListItem>
          </List>
          <Subheading>Weather and Environmental Considerations:</Subheading>
          <List>
            <ListItem>
              Adjust the timing and rates of fungicide applications based on
              weather conditions. Avoid applications during periods of heavy
              rain to prevent wash-off and ensure better efficacy.
            </ListItem>
          </List>
          <Subheading>Local Regulations and Safety:</Subheading>
          <p>
            Always follow local regulations and safety guidelines regarding the
            use of fertilizers and pesticides.
          </p>
          <p>
            Use personal protective equipment (PPE) and proper application
            techniques when handling and applying fertilizers and pesticides.
          </p>
          <p>
            It is essential to follow the recommended application rates and
            timings to avoid any negative effects on the environment and
            non-target organisms. Consult with agricultural experts or local
            extension services for proper usage guidelines and safety
            precautions.
          </p>
        </Container>
      </English>
      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>کٹن ٹارگٹ اسپاٹ بیماری (Cotton Target Spot Disease)</Heading>
          <Description>
            <strong>تفصیل:</strong> کٹن ٹارگٹ اسپاٹ بیماری ایک کھلیجی انفیکشن ہے
            جو کٹن کے پودوں کو متاثر کرتا ہے۔ یہ بیماری پتوں پر مرکزی حلقوں کے
            ساتھ گول دائرہ نما زخموں کو پیدا کرتی ہے، جس سے پودے کی صحت میں کمی
            اور پیداوار کے نقصان کا شکار ہوتا ہے۔
          </Description>
          <Subheading>علامات:</Subheading>
          کٹن ٹارگٹ اسپاٹ بیماری کی منفرد علامات مندرجہ ذیل ہیں:
          <List>
            <ListItem>پتوں پر مرکزی حلقوں والے گول زخمے۔</ListItem>
            <ListItem>زخموں کے گرد پتے کی پیلائی۔</ListItem>
            <ListItem>شدید معاملات میں پتوں کا چھلکاہٹ۔</ListItem>
          </List>
          <Subheading>وجوہات:</Subheading>
          کٹن ٹارگٹ اسپاٹ بیماری کا باعث ذیل جنس کے کھلیجی پیٹھوں (فنگس) ہوتے
          ہیں۔ یہ بیماری اسپورز کے ذریعہ پھیلتی ہے اور پودوں کی پتوں اور مٹی میں
          موجود رہ سکتی ہے۔
          <Subheading>پودوں پر اثرات:</Subheading>
          یہ بیماری پودوں کے فوٹوسائنتیک کیپیسٹی میں کمی، پتوں کی پیشانی چھڑکنے
          اور حتمی طور پر کٹن کی پیداوار میں کمی کا سبب بن سکتی ہے۔
          <Subheading>پیشگوئی اور انتظام:</Subheading>
          کٹن ٹارگٹ اسپاٹ بیماری کے انتظام اور کنٹرول کے لئے مندرجہ ذیل تدابیر
          کو مد نظر رکھیں:
          <List>
            <ListItem>
              <strong>1. کاشتی تبادلہ:</strong> زمین میں بیماری کے جنس کے انفیکٹ
              شدہ اجزاء کی تعمیر کو کم کرنے کے لئے کاشتی تبادلہ کا عمل انجام
              دیں۔
            </ListItem>
            <ListItem>
              <strong>2. فنگائیسائڈ کا اطلاق:</strong> ترادیمیفون،
              پائیراکلوسٹربن، یا ایزوکسٹرابن شامل فنگائیسائڈ استعمال کریں تاکہ
              پودوں کو انفیکشن سے بچایا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>3. صفائی:</strong> بیمار پودوں کے اجزاء کو ہٹا دیں تاکہ
              بیماری کے پھیلاؤ کو روکا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>4. مناسب آبپاشی:</strong> جب ممکن ہو تو اوپر سے آبپاشی سے
              بچیں، کیونکہ گیلے پتے بیماری کے پھیلاؤ کو بڑھا سکتے ہیں۔ اگر ممکن
              ہو تو ڈرپ آبپاشی استعمال کریں۔
            </ListItem>
            <ListItem>
              <strong>5. مقاوم اقساط:</strong> کٹن کی اقساط کا انتخاب کریں جو
              ٹارگٹ اسپاٹ بیماری کے خلاف مقاومت یا تحمل ظاہر کر چکے ہوں۔
            </ListItem>
            <ListItem>
              <strong>6. مانیٹرنگ:</strong> کٹن کے میدانوں کو بیماری کے کسی بھی
              علامات کے لئے باقاعدہ معائنہ کریں تاکہ فوراً کنٹرول کی تدابیر
              انجام دی جا سکیں۔
            </ListItem>
          </List>
          <Subheading>کھاد:</Subheading>
          <List>
            <ListItem>
              کیلشیم نائٹریٹ: کیلشیم فراہم کرتا ہے، ایک اہم طاقتور مادہ جو کچھ
              بیماریوں کے خلاف پودوں کی محتاطی میں مدد فراہم کر سکتا ہے۔
            </ListItem>
            <ListItem>
              کیلشیم ایمونیم نائٹریٹ: کیلشیم اور نائٹروجن کا موزوں مجموعہ فراہم
              کرتا ہے تاکہ پودوں کی کل صحت کی حمایت کر سکے۔
            </ListItem>
          </List>
          <Subheading>کیڑے مارکشکار:</Subheading>
          <List>
            <ListItem>
              ترادیمیفون: کٹن میں ٹارگٹ اسپاٹ بیماری سمیت مختلف کھلیجی بیماریوں
              کے خلاف موثر فنگائیسائڈ۔
            </ListItem>
            <ListItem>
              پائیراکلوسٹربن: ایک وسیع رقبے والا فنگائیسائڈ جو کھلیجی کے پیچھے
              کے جراثیم کے خلاف پیشگوئی کرتا ہے۔
            </ListItem>
            <ListItem>
              ایزوکسٹرابن: ایک فنگائیسائڈ جو کٹن میں پتوں کے بیماریوں کے خلاف
              پیشگوئی اور علاجی کردار کے لئے معروف ہے۔
            </ListItem>
          </List>
          <Subheading>موسم اور ماحولیاتی عوامل:</Subheading>
          <List>
            <ListItem>
              موسمی حالات کے مطابق فنگائیسائڈ کے اطلاقات کے وقت اور درجات کو
              موزوں کریں۔ بھاری بارش کے دوران اطلاقات سے بچیں تاکہ فنگائیسائڈ کی
              کارکردگی میں بہتری ہو سکے۔
            </ListItem>
          </List>
          <Subheading>مقامی ضوابط اور حفاظتی تدابیر:</Subheading>
          <p>
            کیڑے مار اور کیمیائی کیڑے مار کے استعمال سے متعلق مقامی ضوابط اور
            حفاظتی تدابیر کا ہمیشہ پالنا ضروری ہے۔
          </p>
          <p>
            کیڑے مار اور کیمیائی کیڑے مار کو ہینڈل کرنے اور ان کا استعمال کرنے
            کے دوران پرسنل پروٹیکٹو ایکوپمنٹ (پی پی ای) اور مناسب اطلاق کی
            تکنیکیں استعمال کریں۔
          </p>
          <p>
            ماحول اور غیر مقصد کی افراد پر منفی اثرات سے بچنے کے لئے موصوفہ
            اطلاقی شرحات اور توقیتوں کا مد نظر رکھنا اہم ہے۔ موصوفہ استعمال کے
            اصولات اور حفاظتی تدابیر کے لئے ماہرین زراعت یا مقامی ایکسٹینشن
            سروسز سے مشورہ کریں۔
          </p>
        </Container>
      </Urdu>
    </>
  );
}
