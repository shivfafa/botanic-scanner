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

export default function WSeptoriaPrecautions() {
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
          <Heading>Wheat Septoria (گندم کی سپٹوریا بیماری)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> Wheat Septoria, also known as
            Septoria leaf spot or Septoria tritici, is a common fungal disease
            that affects wheat plants. The disease is caused by the fungus
            Septoria tritici, which mainly targets the leaves of the wheat
            plant. The fungus forms small, dark-colored lesions with light
            centers on the leaves, which can coalesce and cover larger areas of
            the leaf surface over time. Severe infections can lead to premature
            defoliation and reduced grain yield.
            <Subheading>Symptoms (علامات):</Subheading>
            The symptoms of Wheat Septoria include:
          </Description>
          <List>
            <ListItem>
              Formation of small, dark-colored lesions with light centers on
              wheat leaves.
            </ListItem>
            <ListItem>
              Lesions may coalesce, covering larger areas of the leaf surface.
            </ListItem>
            <ListItem>Premature defoliation in severe cases.</ListItem>
            <ListItem>
              Reduced grain yield due to the impact on plant health.
            </ListItem>
          </List>
          <Subheading>Causes (وجہ):</Subheading>
          Wheat Septoria is caused by the fungus Septoria tritici. The fungus
          survives in crop residues and infected plant debris from previous
          seasons and can spread through wind, rain splashes, and irrigation
          water. Infection is favored by warm and humid conditions, providing
          suitable environments for fungal growth and disease development.
          <Subheading>Impact on Crops:</Subheading>
          Wheat Septoria can significantly affect wheat crops, especially when
          weather conditions are conducive to disease development. The formation
          of lesions on wheat leaves reduces the photosynthetic area, affecting
          the plant's ability to produce and store energy. As a result, the
          wheat plant's overall health and grain yield are compromised.
          <Subheading>Prevention and Management:</Subheading>
          While complete eradication of Wheat Septoria is challenging, several
          preventive and management measures can help reduce its impact on wheat
          crops. These measures include:
          <List>
            <ListItem>
              <strong>1. Crop Rotation:</strong> Practice crop rotation to
              reduce the buildup of the fungus in the soil. Avoid planting wheat
              in fields where the disease occurred in the previous season.
            </ListItem>
            <ListItem>
              <strong>2. Resistant Varieties:</strong> Plant wheat varieties
              that have some resistance to Wheat Septoria. Resistant varieties
              can show reduced disease severity and help maintain better crop
              health.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Fungicides can be applied
              preventively during periods of high disease pressure. Consult
              agricultural experts for proper fungicide selection and
              application guidelines.
            </ListItem>
            <ListItem>
              <strong>4. Removal of Infected Debris:</strong> Remove and destroy
              infected wheat debris to reduce the chances of disease spread to
              new plants.
            </ListItem>
            <ListItem>
              <strong>5. Proper Irrigation:</strong> Avoid overhead irrigation,
              as wet conditions can favor disease development. Use drip
              irrigation or other methods that minimize leaf wetness.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):
          </Subheading>
          The use of fertilizers and pesticides can play a role in managing
          Wheat Septoria. Proper fertilization can improve the wheat plant's
          health and resilience to infections, while targeted use of pesticides
          can help control the disease's spread. The following fertilizers and
          pesticides can be considered:
          <Description>
            <strong>Fertilizers (کھاد):</strong>
            <List>
              <ListItem>
                Nitrogen-based fertilizers: Provide essential nutrients for
                wheat growth and development.
              </ListItem>
              <ListItem>
                Phosphorus and potassium-based fertilizers: Support overall
                plant health and strengthen resistance to diseases.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (کیڑے ماردار):</strong>
            <List>
              <ListItem>
                Azoxystrobin or other fungicides effective against Septoria
                tritici: Applied preventively during high disease pressure
                periods to protect wheat plants from infection.
              </ListItem>
              <ListItem>
                Triazole-based fungicides: Provide systemic protection and
                control of the disease on wheat leaves.
              </ListItem>
            </List>
          </Description>
          <Subheading>Early Detection of Wheat Septoria:</Subheading>
          <strong>Fertilizers:</strong>
          <List>
            <ListItem>
              Increase nitrogen-based fertilizer application to support the
              wheat's recovery and strengthen its resistance to the disease.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              Apply a targeted fungicide like azoxystrobin or triazole-based
              fungicides immediately after detecting Wheat Septoria symptoms.
              Early intervention can prevent the spread of the disease to other
              plants and minimize damage.
            </ListItem>
          </List>
          <Subheading>Severe Wheat Septoria Outbreak:</Subheading>
          <strong>Fertilizers:</strong>
          <List>
            <ListItem>
              Use a balanced fertilizer that includes essential nutrients like
              nitrogen, phosphorus, and potassium to support the overall health
              of the wheat plants, as severe infections can deplete the plant's
              nutrient reserves.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              In cases of severe Wheat Septoria outbreaks, consult with
              agricultural experts or extension services for appropriate
              pesticide recommendations. They may suggest a combination of
              systemic and protective fungicides to manage the disease
              effectively.
            </ListItem>
          </List>
          <Subheading>Disease Resistance and Crop Rotation:</Subheading>
          <strong>Fertilizers:</strong>
          <List>
            <ListItem>
              Incorporate organic matter and compost into the soil to improve
              its health and fertility, indirectly enhancing the wheat plant's
              disease resistance.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              Rotate pesticides with different modes of action to reduce the
              risk of developing resistance in the fungal population. Implement
              crop rotation practices to break the disease cycle and minimize
              the recurrence of Wheat Septoria.
            </ListItem>
          </List>
          <Subheading>Weather and Environmental Factors:</Subheading>
          <strong>Fertilizers:</strong>
          <List>
            <ListItem>
              Adjust the timing and rates of fertilizer applications based on
              weather conditions. During periods of excessive rainfall, consider
              reducing nitrogen applications to prevent leaching and potential
              environmental issues.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              Monitor weather forecasts and disease risk alerts to apply
              fungicides proactively when conditions are favorable for Wheat
              Septoria development.
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
          <Heading>گندم کی سپٹوریا بیماری (Wheat Septoria)</Heading>
          <Description>
            <strong>تفصیل:</strong> گندم کی سپٹوریا بیماری، جو کے ساتھ بہت سی
            دیگر ناموں میں معروف ہے، ایک عام فنگل بیماری ہے جو گندم کے پودوں پر
            اثر انداز ہوتی ہے۔ یہ بیماری فنگس سپٹوریا تریٹیسی سے پیدا ہوتی ہے جو
            عموماً گندم کے پتوں کو مبتلا کرتا ہے۔ فنگس پتوں پر چھوٹے، سیاہ رنگ
            کے چھائیں بناتا ہے جن کے درمیان روشن مرکز ہوتے ہیں، اور وقت کے ساتھ
            پتے کی بڑھتی ہوئی سطح کو بھر لیتے ہیں۔ شدید انفیکشن کی صورت میں پتے
            کا پہلے سے زود برقراری اور اناج کی پیداوار کم ہو سکتی ہے۔
            <Subheading>علامات:</Subheading>
            گندم کی سپٹوریا بیماری کے علامات شامل ہیں:
          </Description>
          <List>
            <ListItem>گندم کے پتوں پر چھائیں بننا۔</ListItem>
            <ListItem>
              چھائیں اکٹھا ہوکر پتے کی بڑھتی ہوئی سطح کو بھر لینا۔
            </ListItem>
            <ListItem>شدید مقدار میں پتے کا زود برقرار ہو جانا۔</ListItem>
            <ListItem>گندم کی پیداوار میں کمی کا باعث بن جانا۔</ListItem>
          </List>
          <Subheading>وجوہات:</Subheading>
          گندم کی سپٹوریا کی وجہ سے فنگس سپٹوریا تریٹیسی ہوتا ہے۔ یہ فنگس ماضی
          کی فصلوں کی باقیات اور متاثرہ پودوں کے ناخالصوں میں زندہ رہتا ہے اور
          ہوا، بارش یا آبپاش سے منتقل ہوتا ہے۔ گرم اور بھیگے موسمات میں انفیکشن
          کا امکان بڑھ جاتا ہے جو فنگس کی اگوائی اور بیماری کی تشکیل میں موزوں
          ماحول مہیا کرتا ہے۔
          <Subheading>پودوں پر اثرات:</Subheading>
          گندم کی سپٹوریا گندم کی پیداوار کو کافی زیادہ متاثر کر سکتی ہے، خاص
          طور پر جب موسمات بیماری کی تشکیل کے لئے مناسب ہوتے ہیں۔ گندم کے پتوں
          پر چھائیں بننے سے پھوٹوسنتھیٹک رقبے میں کمی ہوتی ہے جس سے پودے کی
          صلاحیت اور طاقت کم ہو جاتی ہے۔ نتیجتاً، گندم کا پودہ مکمل طور پر
          صحتمند نہیں رہتا اور پیداوار کم ہو جاتی ہے۔
          <Subheading>روک تھام اور انتظامات:</Subheading>
          گندم کی سپٹوریا کا مکمل خاتمہ کرنا مشکل ہوتا ہے، لیکن چند روک تھام اور
          انتظامات سے اس کا اثر کم کیا جا سکتا ہے۔ یہ تدبیرات شامل ہو سکتے ہیں:
          <List>
            <ListItem>
              <strong>1. کراٹ روٹیشن:</strong> کراٹ روٹیشن کو عمل میں لانا، مٹی
              میں فنگس کی تعداد کو کم کرنے کے لئے مدد فراہم کرتا ہے۔ اگلے موسم
              میں وہ فیلڈز نہیں استعمال کریں جہاں بیماری پچھلے موسم میں پائی گئی
              تھی۔
            </ListItem>
            <ListItem>
              <strong>2. متعین قسم کے انتخاب:</strong> گندم کے ایسی قسموں کا
              انتخاب کریں جو گندم کی سپٹوریا سے متعین حد تک محفوظ ہوں۔ متعین
              قسمیں بیماری کی تشدد میں کمی دکھاتی ہیں اور بہتر پودوں کی صحت کی
              حفاظت کرتی ہیں۔
            </ListItem>
            <ListItem>
              <strong>3. کیٹھائیڈز کا استعمال:</strong> کیٹھائیڈز کو انفیکشن کے
              دوران محافظتی طور پر استعمال کرنا۔ ایگزپرٹ زرعی ماہرین سے درست
              کیٹھائیڈ کا انتخاب کریں اور استعمال کے رہنمائی حدود کے لئے۔
            </ListItem>
            <ListItem>
              <strong>4. متاثرہ اشیاء کا ختم کرنا:</strong> متاثرہ گندم کے زرخیز
              مواد کو اٹھا کر اٹھانے کا ذریعہ بنائیں تاکہ نئے پودوں کو بیماری کا
              پھیلنے کا خطرہ کم ہو۔
            </ListItem>
            <ListItem>
              <strong>5. مناسب آبپاش کرنا:</strong> اوپر سے آبپاش کرنے سے بچیں،
              کیونکہ نمی کے حالات بیماری کی تشکیل کو مدد فراہم کر سکتے ہیں۔ ٹځرو
              پانی استعمال کریں یا دیگر طریقے جو پتے کی نمی کو کم کرتے ہیں۔
            </ListItem>
          </List>
          <Subheading>کھاد اور کیڑے ماردار کا استعمال:</Subheading>
          کھاد اور کیڑے ماردار کا استعمال گندم کی سپٹوریا کو متعین کرنے میں
          کردار ادا کر سکتا ہے۔ مناسب کھاد کے استعمال سے گندم کے پودوں کی صحت
          میں بہتری ہو سکتی ہے، جبکہ کیڑے ماردار کے مخصوص استعمال سے بیماری کے
          پھیلاؤ کو روکا جا سکتا ہے۔ مندرجہ ذیل کھاد اور کیڑے ماردار شامل ہوسکتے
          ہیں:
          <Description>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                نائٹروجن کیڈ کھاد: گندم کی بڑھتی ہوئی میں اہم ہے۔
              </ListItem>
              <ListItem>
                فاسفورس اور پوٹاشیم کیڈ کھاد: پودوں کی صحت کو بہتر بناتی ہیں اور
                بیماریوں سے مدد فراہم کرتی ہیں۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                ایزوکسٹروبن یا دوسرے سپٹوریا تریٹیسی کے خلاف کارآمد کیڑے ماردار:
                بیماری کی تشکیل کے دوران محافظتی طور پر استعمال کریں۔
              </ListItem>
              <ListItem>
                ٹریازول کے بیس کیڑے ماردار: پتوں پر بیماری کے کنٹرول اور حفاظتی
                کاروائی کے لئے۔
              </ListItem>
            </List>
          </Description>
          <Subheading>گندم کی سپٹوریا کے ابتدائی پہچان:</Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              گندم کی بیماری سپٹوریا کے علامات کے فوراً بعد نائٹروجن کیڈ کھاد کی
              درست کاروائی کریں تاکہ گندم کی بہتری کے لئے صلاحیت محفوظ رہے۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              سپٹوریا کے علامات کا فوراً بعد ایزوکسٹروبن یا ٹریازول کے مخصوص
              کیڑے ماردار کا استعمال کریں۔ ابتدائی مداخلت کے ذریعہ بیماری کو
              دوسرے پودوں تک پھیلنے سے روکا جا سکتا ہے اور نقصان کو کم کیا جا
              سکتا ہے۔
            </ListItem>
          </List>
          <Subheading>شدید گندم کی سپٹوریا کے پھیلاؤ کے لئے:</Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              گندم کی شدید سپٹوریا کے پھیلاؤ کے مواقع پر، گندم کے پودوں کی
              کلورین، فاسفورس اور پوٹاشیم کیڈ کھاد استعمال کریں تاکہ پودوں کی
              صحت کو بہتر کیا جا سکے، کیونکہ شدید انفیکشن سے پودوں کی طاقت کم ہو
              سکتی ہے۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              شدید گندم کی سپٹوریا کے پھیلاؤ کے مواقع پر، زرعی ماہرین یا توسیع
              کی خدمات سے رابطہ کریں تاکہ مناسب کیڑے ماردار کے تجویزات حاصل
              کریں۔ وہ آپ کو بیماری کے موثر انتظامات کے لئے نظر انداز نہیں کریں
              گے۔
            </ListItem>
          </List>
          <Subheading>بیماری سے مقابلے اور کراٹ روٹیشن:</Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              مٹی کی صحت اور زرخیزی کو بہتر بنانے کے لئے مٹی میں آرگنک مواد اور
              کمپوسٹ شامل کریں، جو پودوں کی بیماری کی صلاحیت میں اضافہ کرتا ہے۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              کیڑے ماردار کو مختلف کارروائی کے طریقوں سے بدلتے رہنے کے لئے مختلف
              موڈز کے ساتھ کیڑے ماردار کا روٹیشن کریں۔ گندم کی سپٹوریا کی چکر کو
              توڑنے اور گندم کی پھرنے کو کم کرنے کے لئے کراٹ روٹیشن کے تجربات کو
              عمل میں لائیں۔
            </ListItem>
          </List>
          <Subheading>موسم اور ماحولیاتی عوامل:</Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              موسمی حالات کے مطابق کھاد کے اطلاق کے وقت اور شرح کو ترتیب دیں۔
              زیادہ بارش کے دوران نائٹروجن کے اطلاق کو کم کرنے کو مد نظر رکھیں
              تاکہ لیچنگ اور محیطی مسائل کا سامنا نہ کرنا پڑے۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              موسمی تنبیہات اور بیماری کے خطرے کے اندازوں کو ماننٹر کریں تاکہ
              گندم کی سپٹوریا کے بھونچنے کے لئے مناسب وقت پر کیڑے ماردار کا
              پیشگمانہ استعمال کیا جا سکے۔
            </ListItem>
          </List>
          <Subheading>مقامی ریگولیشنز اور حفاظتی تدابیر:</Subheading>
          <p>
            ہر وقت کھاد اور کیڑے ماردار کے استعمال کے مقامی ریگولیشنز اور حفاظتی
            تدابیر کا پیرو کریں۔
          </p>
          <p>
            کھاد اور کیڑے ماردار کے استعمال کے دوران خود کو حفاظتی تجهیزات (PPE)
            کا استعمال کریں اور مناسب اطلاقی تراکیب استعمال کریں۔
          </p>
          <p>
            ماحول اور غیر مخصوص جانداروں پر منفی اثرات سے بچنے کے لئے تجویز کردہ
            اطلاقی اشیاء اور حفاظتی تدابیر کو پیرو کرنا ضروری ہے۔ درست استعمال
            کے رہنمائی حدود اور حفاظتی تحائف کے لئے زرعی ماہرین یا مقامی توسیعی
            خدمات سے رجوع کریں۔
          </p>
        </Container>
      </Urdu>
    </>
  );
}
