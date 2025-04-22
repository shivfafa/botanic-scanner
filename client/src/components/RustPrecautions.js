import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
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

export default function RustPrecautions() {
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
              color: "black",
              cursor: "pointer",
            }}
          >
            <span>{isUrdu ? "اردو" : "English"}</span>
          </label>
          <Switch
            id="language-switch"
            onChange={handleToggleLanguage}
            checked={isUrdu}
            onColor="#6d8c54"
            offColor="#f1cf69"
            checkedIcon={false}
            uncheckedIcon={false}
            height={24}
            width={55}
          />
        </div>
      </Show>

      <English style={{ display: isUrdu ? "none" : "block" }}>
        <Container>
          <Heading>Common Rust Disease (عام سانس کی بیماری)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> Common rust disease, also
            known as corn rust or Puccinia sorghi, is a fungal disease that
            affects corn plants. The disease is caused by the fungus Puccinia
            sorghi, which infects the leaves of corn plants. Common rust appears
            as small, reddish-brown to orange pustules on the upper surface of
            the leaves and may also occur on the lower surface. These pustules
            contain masses of rust-colored spores that can spread to other
            plants through wind or splashing water, leading to further
            infections.
            <Subheading>Symptoms (علامات):</Subheading>
            The symptoms of common rust disease include:
          </Description>
          <List>
            <ListItem>
              Formation of small, reddish-brown to orange pustules on the upper
              surface of leaves.
            </ListItem>
            <ListItem>
              Pustules may also appear on the lower surface of leaves.
            </ListItem>
            <ListItem>
              Yellowing of the areas surrounding the pustules.
            </ListItem>
            <ListItem>
              Stunted growth and reduced vigor of infected plants.
            </ListItem>
            <ListItem>Premature defoliation in severe cases.</ListItem>
          </List>
          <Subheading>Causes (وجہ):</Subheading>
          Common rust disease is caused by the fungus Puccinia sorghi. The
          fungus infects corn leaves, where it produces pustules filled with
          rust-colored spores. These spores are easily dispersed by wind or
          water, allowing the disease to spread rapidly under favorable
          conditions, such as high humidity and moderate temperatures.
          <Subheading>Impact on Crops:</Subheading>
          Common rust disease can have detrimental effects on corn crops. The
          presence of pustules on leaves disrupts photosynthesis and reduces the
          plant's ability to produce energy, leading to decreased plant growth
          and yield. Severe infections can lead to premature leaf drop, which
          further diminishes the plant's productivity and may negatively impact
          overall crop quality.
          <Subheading>Prevention and Management:</Subheading>
          While common rust disease cannot be completely eradicated, various
          preventive and management measures can help mitigate its impact and
          prevent widespread damage. These measures include:
          <List>
            <ListItem>
              <strong>1. Resistant Varieties:</strong> Plant corn varieties that
              exhibit resistance to common rust disease. Resistant plants can
              withstand the infection better and may experience milder symptoms.
            </ListItem>
            <ListItem>
              <strong>2. Crop Monitoring:</strong> Regularly inspect corn fields
              for early signs of rust disease. Early detection allows for timely
              interventions to prevent the disease from spreading.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Apply fungicides containing active
              ingredients like Azoxystrobin, Propiconazole, or Pyraclostrobin as
              preventive measures. Consult agricultural experts for proper
              fungicide selection and application guidelines.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overhead irrigation
              and minimize leaf wetness to create unfavorable conditions for the
              fungus to grow and spread.
            </ListItem>
            <ListItem>
              <strong>5. Crop Rotation:</strong> Practice crop rotation to break
              the disease cycle and reduce the buildup of fungal spores in the
              soil.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):
          </Subheading>
          The use of fertilizers and pesticides can play a role in managing
          common rust disease. Proper application of fertilizers can enhance the
          plant's overall health and resilience, while targeted fungicide use
          can help control the spread of the disease. Consider the following
          fertilizers and pesticides for managing common rust disease:
          <Description>
            <strong>Fertilizers (کھاد):</strong>
            <List>
              <ListItem>
                Diammonium Phosphate: Provides a balanced combination of
                nitrogen and phosphorus, supporting plant growth and
                development.
              </ListItem>
              <ListItem>
                Ammonium Phosphate: Supplies essential nitrogen and phosphorus
                for healthy foliage and overall plant vigor.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (کیڑے ماردار):</strong>
            <List>
              <ListItem>
                Azoxystrobin: A systemic fungicide effective against rust
                diseases, providing preventive and curative control.
              </ListItem>
              <ListItem>
                Propiconazole: A protective and systemic fungicide that helps
                prevent and control rust infections.
              </ListItem>
              <ListItem>
                Pyraclostrobin: Offers broad-spectrum protection against various
                fungal diseases, including common rust.
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>Early Detection of Common Rust:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Increase the application of nitrogen and phosphorus-based
                fertilizers, such as Diammonium Phosphate or Ammonium Phosphate,
                to support the corn's recovery and strengthen its resistance to
                disease.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Apply a targeted fungicide like Azoxystrobin, Propiconazole, or
                Pyraclostrobin immediately after detecting common rust symptoms.
                Early intervention can prevent the spread of the disease to
                other plants and minimize damage.
              </ListItem>
            </List>
            <Subheading>Severe Common Rust Outbreak:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Use a balanced fertilizer that includes essential nutrients like
                nitrogen and phosphorus to support the overall health of the
                corn plants, as severe infections can deplete the plant's
                nutrient reserves.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                In cases of severe common rust outbreaks, consult with
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
                its health and fertility, which can indirectly enhance the
                plant's disease resistance.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Rotate pesticides with different modes of action to reduce the
                risk of developing resistance in the fungal population.
                Implement crop rotation practices to break the disease cycle and
                minimize the recurrence of common rust.
              </ListItem>
            </List>

            <Subheading>Weather and Environmental Factors:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Adjust the timing and rates of fertilizer applications based on
                weather conditions. During periods of excessive rainfall,
                consider reducing nitrogen applications to prevent leaching and
                potential environmental issues.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Monitor weather forecasts and disease risk alerts to apply
                fungicides proactively when conditions are favorable for common
                rust development.
              </ListItem>
            </List>
            <Subheading>Local Regulations and Safety:</Subheading>

            <p>
              Always follow local regulations and safety guidelines regarding
              the use of fertilizers and pesticides.
            </p>
            <p>
              Use personal protective equipment (PPE) and proper application
              techniques when handling and applying fertilizers and pesticides.
            </p>
          </Description>
          <Description>
            It is essential to follow the recommended application rates and
            timings to avoid any negative effects on the environment and
            non-target organisms. Consult with agricultural experts or local
            extension services for proper usage guidelines and safety
            precautions.
          </Description>
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>کامن رسٹ بیماری (عام سانس کی بیماری)</Heading>
          <Description>
            <strong>تفصیل:</strong> کامن رسٹ بیماری، جو کے کارن رسٹ یا پیوسینیا
            سورگھی کے نام سے بھی جانی جاتی ہے، ایک کھیتوں کی مکئی کے پودوں پر
            اثر انداز ہونے والی قارضی بیماری ہے۔ یہ بیماری کھیتوں کے پتوں کو
            متاثر کرتی ہے۔ کامن رسٹ نے پتوں کے اوپری سطح پر چھوٹے، سرخی مائل
            بھورے سے نارنجی قارضے کی شکل میں ظاہر ہوتی ہے اور پتوں کے نچلی سطح
            پر بھی پائی جا سکتی ہے۔ یہ قارضے مٹی رنگ کے اندرونی بھیریوں سے بھرے
            ہوتے ہیں جو ہوا یا پانی کے ذریعہ دوسرے پودوں تک پھیل سکتے ہیں اور
            مزید انفیکشن کا سبب بن سکتے ہیں۔
            <Subheading>علامات:</Subheading>
            کامن رسٹ بیماری کی علامات میں شامل ہیں:
          </Description>
          <List>
            <ListItem>
              پتوں کے اوپری سطح پر چھوٹے، سرخی مائل بھورے سے نارنجی قارضے کی شکل
              بننا۔
            </ListItem>
            <ListItem>
              پتوں کے نچلی سطح پر بھی قارضے نما دکھائی دینے والے قارضے ہونا۔
            </ListItem>
            <ListItem>قارضے کے ارد گرد خطوں کا پیلا ہوجانا۔</ListItem>
            <ListItem>متاثرہ پودوں کی کمی کرکراہٹ اور کمزوری۔</ListItem>
            <ListItem>شدید مواقع پر پتوں کی پت جھڑ جانا۔</ListItem>
          </List>
          <Subheading>وجہ:</Subheading>
          کامن رسٹ بیماری کا باعث پیوسینیا سورگھی فنگس ہے۔ یہ فنگس مکئی کے پتوں
          کو متاثر کرتا ہے، جہاں سے اس نے قارضے بھرے قوالیوں کا ابتدا کیا ہوتا
          ہے۔ یہ قوالیاں ہوا یا پانی کے ذریعہ آسانی سے پھیلتے ہیں، جس سے موزوں
          ماحول میں بیماری کی رفتار تیزی سے بڑھ جاتی ہے، جیسے کہ بلند نمی اور
          درمیانی درجہ حرارت کی حالات میں۔
          <Subheading>کھیتوں پر اثرات:</Subheading>
          کامن رسٹ بیماری کھیتوں کے لئے ناقابل قبول اثرات رکھتی ہے۔ پتوں پر
          قارضے کی موجودگی کے باعث فوٹوسنتھیسس متاثر ہوتی ہے اور پودے کو انرجی
          تیار کرنے کی صلاحیت کم ہو جاتی ہے، جس سے پودے کی نمو اور پیداوار میں
          کمی رونما ہوتی ہے۔ شدید انفیکشن کے مواقع پر پتوں کا جلد گر جانا مزید
          پودے کی پیداوار کو کم کرتا ہے اور کلی کی معیار پر بھی برا اثر انداز
          ہوسکتا ہے۔
          <Subheading>روک تھام اور انتظامات:</Subheading>
          کامن رسٹ بیماری کو مکمل طور پر ختم نہیں کیا جاسکتا، لیکن مختلف روک
          تھامی اور انتظامی تدابیر کے ذرائع سے اس کے اثرات کو کم کیا جا سکتا ہے
          اور وسیع پیداوار کے نقصان سے بچا جاسکتا ہے۔ ان تدابیر میں شامل ہیں:
          <List>
            <ListItem>
              <strong>1. مزاحمت پذیر اقسام کی کاشت:</strong> کامن رسٹ بیماری کے
              خلاف مزاحمت پذیر اقسام کی مکئی کی کاشت کریں۔ مزاحمت پذیر پودے
              بیماری سے بہتر تلاش کر سکتے ہیں اور ملی ہوئی تشخیص پر ملرم سنمے کے
              علامات کا سامنا کر سکتے ہیں۔
            </ListItem>
            <ListItem>
              <strong>2. کھیتوں کی نگرانی:</strong> کامن رسٹ کے علامات کی سوئیوں
              کی مکمل جانچ کار کریں۔ جلدی تشخیص کے لئے وقت سے پہلے مناسب تلاش
              کرنے سے بیماری کی پھیلنے سے بچایا جاسکتا ہے۔
            </ListItem>
            <ListItem>
              <strong>3. کیڑے ماردار:</strong> بیماری کو روکنے کے لئے کھیتوں کے
              لئے کھیادی ماردار کے استعمال سے بچاؤ کا کام کریں۔ مزرعاتی ماہرین
              سے درست کھیادی ماردار کا انتخاب اور اطلاق کی مشورہ حاصل کریں۔
            </ListItem>
            <ListItem>
              <strong>4. مناسب آبپاشی:</strong> اوپر سے پانی دینے سے اجتناب کریں
              اور پتوں کی بیلنی کم کرنے کے لئے اقلیت کریں تاکہ فنگس کو گھٹیا
              موسم ملے اور پھیلاؤ کا امکان کم ہو۔
            </ListItem>
            <ListItem>
              <strong>5. کاشتوں کی تبدیلی:</strong> کھیتوں کی تبدیلی کرنے سے
              بیماری کا چکر توڑنے اور مکئی کے پودوں میں فنگس کے بھرنے کو کم کیا
              جا سکتا ہے۔
            </ListItem>
          </List>
          <Subheading>کھاد اور کیڑے ماردار کا استعمال:</Subheading>
          کھاد اور کیڑے ماردار کے استعمال سے کامن رسٹ بیماری کے نظم و ضبط میں
          مدد مل سکتی ہے۔ کھاد کا مناسب اطلاق پودے کی کلی کی عمومی صحت کو بہتر
          بناتا ہے، جس سے وہ انفیکشن کے خلاف مزید مضبوط ہوتا ہے۔ کامن رسٹ بیماری
          کے انتظام کے لئے مناسب کھاد اور کیڑے ماردار کا مذکورہ ذیل انتخاب کریں:
          <Description>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                ڈائی ایمونیم فاسفیٹ (Diammonium Phosphate): نائٹروجن اور فاسفورس
                کا موزوں مجموعہ فراہم کرتا ہے، جو پودوں کی نمو اور ترقی کی حمایت
                کرتا ہے۔
              </ListItem>
              <ListItem>
                ایمونیم فاسفیٹ (Ammonium Phosphate): صحیح پودوں کی بنیاد اور
                عمومی پودوں کی صحت کے لئے ضروری نائٹروجن اور فاسفورس فراہم کرتا
                ہے۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                ایزوکسیسٹروبن (Azoxystrobin): رسٹ بیماری جیسی فنگل بیماریوں کے
                خلاف کارآمد فنگسائیڈ ہے، جو پیشگیرانہ اور علاجی کنٹرول فراہم
                کرتا ہے۔
              </ListItem>
              <ListItem>
                پروپیکونیزول (Propiconazole): محفوظ اور رسٹ بیماری کے انفیکشن کے
                مقابلے میں مدد فراہم کرنے والا فنگسائیڈ ہے۔
              </ListItem>
              <ListItem>
                پیراکلوسٹروبن (Pyraclostrobin): عام رسٹ کے ساتھ ساتھ مختلف فنگل
                بیماریوں کے خلاف وسیع طیف کی حفاظت فراہم کرتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>کامن رسٹ کی جلدی تشخیص:</Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                کامن رسٹ کے علامات کی جلدی تشخیص کرنے کے بعد نائٹروجن اور
                فاسفورس کے مبنی کھاد (ڈائی ایمونیم فاسفیٹ یا ایمونیم فاسفیٹ) کی
                اضافی درستگی کریں تاکہ مکئی کو مکمل طور پر بحال کیا جاسکے اور
                بیماری کے خلاف مضبوط ہو سکے۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                کامن رسٹ کے علامات کا پتہ لگتے ہی ایزوکسیسٹروبن، پروپیکونیزول یا
                پیراکلوسٹروبن جیسا نشانہ بند فنگسائیڈ فوراً استعمال کریں۔ جلدی
                اندراج بیماری کی دوسرے پودوں تک پھیلنے سے روک سکتا ہے اور نقصان
                کم کرسکتا ہے۔
              </ListItem>
            </List>
            <Subheading>شدید کامن رسٹ کے پھوٹنے والے واقعے:</Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                شدید کامن رسٹ کے پھوٹنے والے واقعات میں، نائٹروجن اور فاسفورس کے
                ساتھ ملاوٹی کھاد (ڈائی ایمونیم فاسفیٹ یا ایمونیم فاسفیٹ) کا
                استعمال کریں تاکہ مکمل طور پر بحال ہونے والے مکئی کے پودوں کی
                عمومی صحت کو مدد ملے، کیونکہ شدید انفیکشن پودے کی غذائی عمارتوں
                کو ختم کرسکتا ہے۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                شدید کامن رسٹ کے پھوٹنے والے واقعات میں، زرخیز کامن رسٹ کے لئے
                زراعتی ماہرین یا توسیعی خدمات کے ساتھ رابطہ کریں تاکہ مناسب کیڑے
                ماردار کی تجویزات حاصل کریں۔ وہ فنگسائیڈ کے تعین کر سکتے ہیں جو
                بیماری کا انتظام کار طور پر کر سکتے ہیں۔
              </ListItem>
            </List>
            <Subheading>بیماری کی مزاحمت اور کاشتوں کی تبدیلی:</Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                زمین کی صحت اور زرخیزی کو بہتر بنانے کے لئے زرخیز مادہ اور
                کمپوسٹ کا شامل کرنا، جس سے پودوں کی بیماری مزاحمت بڑھ سکتی ہے۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                فنگل آبادی میں مزاحمت کا خطرہ کم کرنے کے لئے مختلف کمیڈ ماحول سے
                پھیلنے والے کیڑے ماردار کا روٹیشن کریں۔ بیماری کے چکر کو توڑنے
                اور کامن رسٹ کے دوبارہ پھوٹنے کو کم کرنے کے لئے کاشتوں کی تبدیلی
                کا امتحان کریں۔
              </ListItem>
            </List>

            <Subheading>موسم اور ماحولیاتی عوامل:</Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                موسمی حالات کے مطابق کھاد کے اطلاق کے وقت اور شرحوں کو ترتیب
                دیں۔ زیادہ بارش کے دوران، نائٹروجن کے اطلاق کو کم کرنے کے لئے
                غور کریں تاکہ لیچنگ اور ممکنہ ماحولیاتی مسائل سے بچایا جا سکے۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                موسمی پیشگوئیوں اور بیماری کے خطرے کی انتباہات کا نگرانی کریں
                تاکہ کامن رسٹ کے ترقی کے لئے مناسب وقت پر فنگسائیڈ کا استعمال
                کیا جا سکے۔
              </ListItem>
            </List>
            <Subheading>مقامی قوانین اور حفاظتی تدابیر:</Subheading>

            <p>
              ہر وقت مقامی قوانین اور حفاظتی تدابیر کا اتباع کریں جو کھاد اور
              کیڑے ماردار کے استعمال کے بارے میں ہیں۔
            </p>
            <p>
              کھاد اور کیڑے ماردار کو ہنڈل کرنے اور استعمال کرنے کے دوران شخصی
              تحفظی سامان (PPE) اور مناسب انداز میں استعمال کریں۔
            </p>
          </Description>
          <Description>
            ماحول اور غیر مقصد کی جانداروں پر کسی بھی منفی اثرات سے بچنے کے لئے
            موصوفہ تناسب کی تجویزات اور حفاظتی تدابیر کا اتباع کرنا بہت اہم ہے۔
            مناسب استعمال کے راستے اور حفاظتی تحفظات کے لئے زراعتی ماہرین یا
            مقامی توسیعی خدمات سے رجوع کریں۔
          </Description>
        </Container>
      </Urdu>
    </>
  );
}
