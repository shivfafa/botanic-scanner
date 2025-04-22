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

export default function BlightPrecautions() {
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
          <Heading>Corn Blight Disease (مکئی کی پھٹکری بیماری)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> Corn blight disease, also
            known as corn smut or Ustilago maydis, is a fungal disease that
            affects corn plants. The disease is caused by the fungus Ustilago
            maydis, which enters the corn plant through wounds or natural
            openings. Once inside the plant, the fungus proliferates and induces
            the formation of large, swollen, blackish-gray galls on various
            parts of the plant, including leaves, stems, and ears. These galls
            can rupture, releasing dark powdery spores that can spread to other
            plants, leading to further infections.
            <Subheading>Symptoms (علامات):</Subheading>
            The symptoms of corn blight disease include:
          </Description>
          <List>
            <ListItem>Formation of swollen, black galls on the plant.</ListItem>
            <ListItem>Distorted growth of infected plant parts.</ListItem>
            <ListItem>
              Galls may burst open, releasing dark powdery spores that can
              spread to nearby healthy plants.
            </ListItem>
            <ListItem>Yellowing and wilting of leaves.</ListItem>
            <ListItem>Reduced yield and quality of corn ears.</ListItem>
          </List>
          <Subheading>Causes (وجہ):</Subheading>
          Corn blight disease is caused by the fungus Ustilago maydis. The
          fungus enters the corn plant through wounds or natural openings, such
          as leaf scars or flower openings. Once inside the plant, the fungus
          infects the plant's tissues and induces the formation of galls by
          manipulating the plant's growth hormones. As the galls develop, they
          become filled with dark-colored spores, which are later released to
          infect other plants or persist in the soil for future infections.
          <Subheading>Impact on Crops:</Subheading>
          Corn blight disease can have significant negative effects on corn
          crops. The formation of galls interferes with normal plant growth,
          leading to reduced plant vigor and productivity. Infected plants may
          show stunted growth, and ears of corn may be deformed or reduced in
          size. In severe cases, the disease can cause widespread damage,
          resulting in significant economic losses for farmers.
          <Subheading>Prevention and Management:</Subheading>
          Although there is no direct cure for corn blight disease once the
          plant is infected, several preventive and management measures can help
          reduce its impact and prevent further spread. These measures include:
          <List>
            <ListItem>
              <strong>1. Crop Rotation:</strong> Avoid planting corn in the same
              field where the disease occurred in the previous season. Crop
              rotation helps break the disease cycle and reduces the buildup of
              fungal spores in the soil.
            </ListItem>
            <ListItem>
              <strong>2. Use of Resistant Varieties:</strong> Planting corn
              varieties that are resistant to corn blight can provide some
              protection against the disease.
            </ListItem>
            <ListItem>
              <strong>3. Sanitation:</strong> Remove and destroy infected plant
              debris to prevent the spread of spores. Regularly clean farm
              equipment to avoid contamination.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overwatering, as
              excessive moisture can create a favorable environment for disease
              development.
            </ListItem>
            <ListItem>
              <strong>5. Fungicides:</strong> Fungicide applications can be used
              preventively to protect healthy plants from infection. Consult
              agricultural experts for proper fungicide selection and
              application guidelines.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):
          </Subheading>
          The use of fertilizers and pesticides can help in managing and
          reducing the impact of corn blight disease. Proper application of
          fertilizers can improve the overall health of the plants, making them
          more resilient to infections. The following fertilizers and pesticides
          can be considered:
          <Description>
            <strong>Fertilizers (کھاد):</strong>
            <List>
              <ListItem>
                Urea: Provides nitrogen, essential for plant growth and
                development.
              </ListItem>
              <ListItem>
                Ammonium Nitrate: Supplies nitrogen and promotes healthy
                foliage.
              </ListItem>
              <ListItem>
                Calcium Nitrate: Enhances calcium availability, which supports
                cell wall strength.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (کیڑے ماردار):</strong>
            <List>
              <ListItem>
                Chlorothalonil: A broad-spectrum fungicide effective against
                various fungal diseases, including corn blight.
              </ListItem>
              <ListItem>
                Mancozeb: A protective fungicide that prevents fungal infection
                by forming a barrier on the plant's surface.
              </ListItem>
              <ListItem>
                Copper-Based Fungicides: Provide systemic protection and control
                fungal growth on the plant's tissues.
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>Early Detection of Corn Blight:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Increase the application of nitrogen-based fertilizers, such as
                urea or ammonium nitrate, to support the corn's recovery and
                strengthen its resistance to disease.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Apply a targeted fungicide like chlorothalonil or mancozeb
                immediately after detecting corn blight symptoms. Early
                intervention can prevent the spread of the disease to other
                plants and minimize damage.
              </ListItem>
            </List>

            <Subheading>Severe Corn Blight Outbreak:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Use a balanced fertilizer that includes essential nutrients like
                nitrogen, phosphorus, and potassium to support the overall
                health of the corn plants, as severe infections can deplete the
                plant's nutrient reserves.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                In cases of severe corn blight outbreaks, consult with
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
                minimize the recurrence of corn blight.
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
                fungicides proactively when conditions are favorable for corn
                blight development.
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
          <Heading>Corn Blight Disease (مکئی کی پھٹکری بیماری)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> مکئی کی پھٹکری بیماری جو کہ
            کارن سمٹ یا اسٹلیگو مائیڈس کے نام سے بھی جانی جاتی ہے، ایک کھلیج کی
            بیماری ہے جو مکئی کی پودوں پر اثر انداز ہوتی ہے۔ یہ بیماری فنگس
            اسٹلیگو مائیڈس کی وجہ سے پیدا ہوتی ہے، جو پودے کے زخم یا طبیعی رواں
            میں داخل ہوتا ہے۔ اس کے بعد فنگس پودے کے اندر پھیل کر، گٹھیوں کے
            بناوٹی عمل کو بڑھاتا ہے اور اس کے نتیجے میں پودے پر پتے، ڈنڈے اور
            کان وغیرہ میں موڈھے بنتے ہیں۔ ان موڈھوں میں فنگس کی سیاہ سرمئی
            بوٹیاں ہوتی ہیں، جو بارش کے باعث پھٹ سکتی ہیں اور ان کے اندر رنگ دار
            بوٹیاں بن جاتی ہیں جو کہ نئی پودوں کو بھی متاثرہ کر سکتی ہیں۔
          </Description>
          <Subheading>علامات (Symptoms):</Subheading>
          <List>
            <ListItem>پودے پر موڈھے بننے کا امکان۔</ListItem>
            <ListItem>متاثرہ پودے کے اندر کا خراب ہونا۔</ListItem>
            <ListItem>
              موڈھے پھٹ سکتے ہیں، جس سے سیاہ پوشیدہ بوٹیوں کا اندراج ہوتا ہے جو
              کہ نئی پودوں کو بھی متاثرہ کر سکتی ہیں۔
            </ListItem>
            <ListItem>پتوں کی پیلا ہونا اور پڑ جانا۔</ListItem>
            <ListItem>مکئی کے کانوں کی کمی اور کمیت۔</ListItem>
          </List>

          <Subheading>وجہ (Reason):</Subheading>
          <Description>
            مکئی کی پھٹکری بیماری کا باعث اسٹلیگو مائیڈس کا فنگس ہے، جو پودے کے
            زخم یا طبیعی رواں میں داخل ہوتا ہے۔ پھر یہ فنگس پودے کے اندر پھیل
            کر، گٹھیوں کے بناوٹی عمل کو بڑھاتا ہے اور اس کے نتیجے میں موڈھے اور
            فنگس کے اندر بننے والے بیج بنتے ہیں۔
          </Description>

          <Subheading>پودوں پر اثرات (Impact on Crops):</Subheading>
          <Description>
            مکئی کی پھٹکری بیماری کے باعث مکئی کی کاشت پر بڑے نقصانات پیدا
            ہوسکتے ہیں۔ موڈھوں کے بننے سے پودے کا عمومی نمو اور پیداوار متاثرہ
            ہوتی ہے۔ متاثرہ پودے کی نمو رک جاتی ہے، اور مکئی کے کان کانوں کی شکل
            میں تبدیلی ہوسکتی ہے۔ شدید صورت میں، بیماری کی بنا پر مزید نقصان
            پیدا ہوسکتا ہے جو کہ کسانوں کے لئے معاشی طور پر بڑے نقصانات کا باعث
            بن سکتا ہے۔
          </Description>

          <Subheading>
            پیشگیری اور انتظام (Prevention and Management):
          </Subheading>
          <Description>
            بدقسمتی سے، جب پودے متاثرہ ہوجاتے ہیں، مکئی کی پھٹکری بیماری کا کوئی
            سیدھا علاج نہیں ہوتا۔ لیکن چند پیشگیری اور انتظامی تدابیر کے ذرائع
            سے اس کے اثرات کو کم کیا جا سکتا ہے اور اس کی فراگماندگی کو روکا جا
            سکتا ہے۔ چند اہم تدابیر مندرجہ ذیل ہیں:
          </Description>
          <List>
            <ListItem>
              <strong>1. تبدیلی کی کاشت:</strong> مکئی کو اس فصل کے میدان میں نہ
              لگائیں جہاں پچھلی فصل میں بیماری پائی گئی تھی۔ تبدیلی کی کاشت کرنا
              بیماری کے چکر کو کھلاتا ہے اور مکئی کے اندر فنگس کی بوجھ کم ہوتی
              ہے۔
            </ListItem>
            <ListItem>
              <strong>2. مضبوط نوعیت کی افشارہ:</strong> مکئی کے مخصوص نوعیت کی
              افشارہ کرنا بیماری کے خلاف حفاظت فراہم کر سکتا ہے۔
            </ListItem>
            <ListItem>
              <strong>3. صفائی:</strong> متاثرہ پودے کے عملیات کے باعث پیدا ہونے
              والے پودے کو صفائی کے ذرائع سے دور رکھیں تاکہ فنگس کے بوجھ کی تشدد
              روکی جائے۔ بار بار فارم اور زرخیز وسائل کو صفائی کریں تاکہ نئی
              پودوں کو بھی متاثرہ ہونے سے بچایا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>4. مناسب آب پاشی:</strong> زیادہ آب پاشی سے بچیں، کیونکہ
              زیادہ نمی فنگس کے بوجھ کے لئے موزوں ماحول پیدا کر سکتی ہے۔
            </ListItem>
            <ListItem>
              <strong>5. کیڑے ماردار:</strong> پیشگیری کے طور پر کیڑے ماردار کا
              استعمال کرنے سے متاثرہ پودوں کو حفاظت فراہم کی جاسکتی ہے۔ مختصر
              مشورہ کے لئے زراعتی ماہرین سے رابطہ کریں اور درست کاربرد کے
              رہنمائی فرمائیں حاصل کریں۔
            </ListItem>
          </List>

          <Subheading>
            کھاد اور کیڑے ماردار کا استعمال (Fertilizer and Pesticide Use):
          </Subheading>
          <Description>
            کھاد اور کیڑے ماردار کے استعمال سے مکئی کی پھٹکری بیماری کے اثرات کو
            کم کیا جا سکتا ہے۔ مناسب کھاد کا استعمال پودوں کی مکمل صحت کی حمایت
            کر سکتا ہے، جو کہ بیماری سے مزاحمت پیدا کرتا ہے۔ ذیل میں کچھ کھاد
            اور کیڑے ماردار کی مثالیں دی گئی ہیں:
          </Description>
          <Description>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                یوریا: پودوں کی نمو اور ترقی کے لئے ضروری نائٹروجن فراہم کرتا
                ہے۔
              </ListItem>
              <ListItem>
                امونیم نائٹریٹ: نائٹروجن فراہم کرتے ہوئے پودوں کے پتوں کو صحیح
                بناتا ہے۔
              </ListItem>
              <ListItem>
                کیلشیم نائٹریٹ: کیلشیم کی دستیابی کو بہتر کرتا ہے جو کہ سیل وال
                کی طاقت کو بڑھاتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                کلوروتھیلونل: مختلف فنگسی بیماریوں، مثلاً مکئی کی پھٹکری بیماری
                کے خلاف کارآمد فنگائی سائیڈ ہے۔
              </ListItem>
              <ListItem>
                منکوزیب: ایک محفوظ کارآمد فنگائی سائیڈ جو کہ فنگس کی روک تھام
                کرتا ہے۔
              </ListItem>
              <ListItem>
                کوپر بیسڈ فنگائی سائیڈز: پودے کے اندر فنگس کی بوجھ کو روکتے ہیں
                اور فنگس کے اندر کی خصوصیات کو کنٹرول کرتے ہیں۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>مکئی کی بلائٹ کی جلدی تشخیص:</Subheading>
            <strong>کھاد:</strong>
            <List>
              <ListItem>
                کھیتوں میں نائٹروجن پر مبنی کھادوں کا استعمال بڑھائیں، جیسے یوریا یا ایمونیم نائٹریٹ، تاکہ مکئی کی صحتیابی کو بہتر کیا جا سکے اور اس کی مضبوطی کو بڑھایا جا سکے جو بیماری سے مقابلہ کرنے میں مدد فراہم کرتا ہے۔
              </ListItem>
            </List>
            <strong>کیڑے مار:</strong>
            <List>
              <ListItem>
                مکئی کی بلائٹ کے علامات کا تشخیص لگانے کے فوراً بعد، کلوروتھیلونل یا منکوزیب جیسے ٹارگٹڈ فنگسائیڈ کا اطلاق کریں۔ جلدی اقدامات سے دوسرے پودوں تک بیماری کا پھیلاؤ روکا جا سکتا ہے اور نقصان کو کم سے کم کیا جا سکتا ہے۔
              </ListItem>
            </List>
            <Subheading>شدید مکئی کی بلائٹ کا پھیلاو:</Subheading>
        <strong>کھاد:</strong>
        <List>
          <ListItem>
            شدید انفیکشن کی صورت میں، مکئی کی کھیتوں میں نائٹروجن، فاسفورس، اور پوٹاشیم شامل کرنے والی متوازن کھاد استعمال کریں تاکہ پودوں کی کلیہ کو مدد ملے، کیونکہ شدید انفیکشن کے باعث پودے کی ضروری ذخائر ختم ہو جاتے ہیں۔
          </ListItem>
        </List>
        <strong>کیڑے مار:</strong>
        <List>
          <ListItem>
            شدید مکئی کی بلائٹ کے پھیلاو کی صورت میں، زراعتی ماہرین یا ایکسٹینشن سروسز سے رابطہ کریں تاکہ مناسب کیڈا مارنے کے تجاویزات حاصل کریں۔ وہ ممکنہ طور پر بیماری کو کنٹرول کرنے کے لئے سسٹمک اور محافظتی فنگسائیڈ کا مجموعہ مشورہ دے سکتے ہیں۔
          </ListItem>
        </List>

        <Subheading>بیماری کے خلاف مزاحمت اور فصل کی روٹیشن:</Subheading>
        <strong>کھاد:</strong>
        <List>
          <ListItem>
            زمین میں زرخیز مادہ اور کمپوسٹ شامل کریں تاکہ اس کی صحت اور زرخیزی میں بہتری ہو، جو پودے کے بیماری کے خلاف مزاحمت کو بہتر بناتا ہے۔
          </ListItem>
        </List>
        <strong>کیڑے مار:</strong>
        <List>
          <ListItem>
            فنگسائیڈز کو مختلف اقدامات کے ساتھ روٹیٹ کریں تاکہ فنگس کی آبادی میں مزاحمت کے خطرے کو کم کیا جا سکے۔ مخصوص طور پر مکئی کی بلائٹ کی دوری کو توڑنے اور کم کرنے کے لئے فصل کی روٹیشن کے تراکیب کا اطلاق کریں۔
          </ListItem>
        </List>

        <Subheading>موسم اور ماحولیاتی عوامل:</Subheading>
        <strong>کھاد:</strong>
        <List>
          <ListItem>
            موسمی حالات کے مطابق کھاد کے اطلاق کا وقت اور معدل ترتیب دیں۔ بے حد بارش کے دوران، نائٹروجن کے اطلاق میں کمی کرنے کا خیال رکھیں تاکہ لیچنگ اور ممکنہ ماحولیاتی مسائل سے بچا جا سکے۔
          </ListItem>
        </List>
        <strong>کیڑے مار:</strong>
        <List>
          <ListItem>
            موسمی پیشگوئیوں اور بیماری کے خطرے کے اندازے کا مشاہدہ کریں تاکہ مکئی کی بلائٹ کے اثرات کے دوران فنگسائیڈز کا استعمال فعال کیا جا سکے۔
          </ListItem>
        </List>
        <Subheading>مقامی قوانین اور حفاظتی تدابیر:</Subheading>

        <p>
          کھادوں اور کیڑے مار کے استعمال سے متعلق مقامی قوانین اور حفاظتی مشورے کا ہمیشہ پالنا ضروری ہے۔
        </p>
        <p>
          کھادوں اور کیڑے مار کو ہینڈل کرنے اور ان کا اطلاق کرنے کے دوران شخصی حفاظتی تجہیزات (PPE) اور مناسب اطلاقی تکنیک استعمال کریں۔
        </p>
      </Description>


          <Description>
            منتبہ رقبے اور وقت پر استعمال کے لئے درست رہنمائی کی پیروی کرنا
            بیماری سے متاثرہ نہیں ہونے والے محیط اور غیر مخصوص ممالک پر منفی
            اثرات سے بچنے کے لئے ضروری ہے۔ انتظامی خدمات سے یا مقامی توسیعی
            خدمات سے مشورہ کریں۔
          </Description>
        </Container>
      </Urdu>
    </>
  );
}
