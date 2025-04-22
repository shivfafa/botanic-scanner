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

export default function RedRotPrecautions() {
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
    <Heading>Sugarcane Red Rot (گنے کی سرخ سڑک)</Heading>
    <Description>
      <strong>Description (تفصیل):</strong> Sugarcane red rot, also known as
      red rot disease or Colletotrichum falcatum, is a fungal disease that
      affects sugarcane plants. The disease is caused by the fungus
      Colletotrichum falcatum, which enters the sugarcane plant through wounds
      or natural openings. Once inside the plant, the fungus attacks and
      colonizes the vascular tissues, leading to the discoloration of the inner
      stalk tissues and the development of red lesions.
      <Subheading>Symptoms (علامات):</Subheading>
      The symptoms of sugarcane red rot include:
    </Description>
    <List>
      <ListItem>Development of red to dark-brown lesions on the inner stalk.</ListItem>
      <ListItem>
        Discoloration of the vascular tissues, giving the affected area a red
        appearance.
      </ListItem>
      <ListItem>Stunting of the affected sugarcane plants.</ListItem>
      <ListItem>Reddish appearance of the internodes.</ListItem>
      <ListItem>
        Wilting and drying of leaves in severe cases, leading to the death of
        the plant.
      </ListItem>
    </List>
    <Subheading>Causes (وجہ):</Subheading>
    Sugarcane red rot is caused by the fungus Colletotrichum falcatum. The
    fungus gains entry into the sugarcane plant through wounds or natural
    openings, such as leaf scars or cut ends. Once inside the plant, it
    attacks the vascular tissues, interfering with the transport of water and
    nutrients, and leading to the development of red lesions and wilting of
    leaves.
    <Subheading>Impact on Crops:</Subheading>
    Sugarcane red rot can have significant negative effects on sugarcane
    crops. The infection causes damage to the vascular system, disrupting the
    flow of water and nutrients, which ultimately affects the growth and
    development of the plants. In severe cases, the affected plants may die,
    leading to a reduction in sugarcane yields.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for sugarcane red rot once the plant is
    infected, several preventive and management measures can help reduce its
    impact and prevent further spread. These measures include:
    <List>
      <ListItem>
        <strong>1. Sanitation:</strong> Remove and destroy infected plant
        debris to prevent the spread of the fungus. Avoid planting sugarcane in
        areas where the disease occurred previously.
      </ListItem>
      <ListItem>
        <strong>2. Use of Disease-Free Planting Material:</strong> Plant
        disease-free sugarcane seedlings or cuttings to avoid introducing the
        fungus into new areas.
      </ListItem>
      <ListItem>
        <strong>3. Crop Rotation:</strong> Practice crop rotation with
        non-susceptible crops to break the disease cycle and reduce the buildup
        of the pathogen in the soil.
      </ListItem>
      <ListItem>
        <strong>4. Proper Irrigation:</strong> Ensure proper irrigation
        practices to avoid water stress, which can make the plants more
        susceptible to infection.
      </ListItem>
      <ListItem>
        <strong>5. Fungicides:</strong> Fungicide applications can be used to
        protect healthy plants from infection. Consult agricultural experts for
        proper fungicide selection and application guidelines.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of sugarcane red rot. Proper application of fertilizers can
    improve the overall health of the plants, making them more resilient to
    infections.
    <Description>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Triple Superphosphate: Provides phosphorus, essential for plant
          growth and development.
        </ListItem>
        <ListItem>
          Monoammonium Phosphate: Supplies nitrogen and phosphorus, promoting
          healthy foliage and root development.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Tebuconazole: An effective fungicide against various fungal diseases,
          including sugarcane red rot.
        </ListItem>
        <ListItem>
          Propiconazole: Provides systemic protection and controls fungal growth
          on the plant's tissues.
        </ListItem>
        <ListItem>
          Thiophanate-methyl: A protective fungicide that prevents fungal
          infection by forming a barrier on the plant's surface.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Sugarcane Red Rot:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Increase the application of fertilizers containing phosphorus, such as
        triple superphosphate or monoammonium phosphate, to support the
        sugarcane's recovery and strengthen its resistance to disease.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Apply a targeted fungicide like tebuconazole or propiconazole
        immediately after detecting sugarcane red rot symptoms. Early
        intervention can prevent the spread of the disease to other plants and
        minimize damage.
      </ListItem>
    </List>

    <Subheading>Severe Sugarcane Red Rot Outbreak:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like
        nitrogen, phosphorus, and potassium to support the overall health of the
        sugarcane plants, as severe infections can deplete the plant's nutrient
        reserves.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        In cases of severe sugarcane red rot outbreaks, consult with
        agricultural experts or extension services for appropriate pesticide
        recommendations. They may suggest a combination of systemic and
        protective fungicides to manage the disease effectively.
      </ListItem>
    </List>

    <Subheading>Disease Resistance and Crop Rotation:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, which can indirectly enhance the plant's disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the fungal population. Implement crop rotation
        practices to break the disease cycle and minimize the recurrence of
        sugarcane red rot.
      </ListItem>
    </List>

    <Subheading>Weather and Environmental Factors:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing
        nitrogen applications to prevent leaching and potential environmental
        issues.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply fungicides
        proactively when conditions are favorable for sugarcane red rot
        development.
      </ListItem>
    </List>

    <Subheading>Local Regulations and Safety:</Subheading>

    <p>
      Always follow local regulations and safety guidelines regarding the use
      of fertilizers and pesticides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques
      when handling and applying fertilizers and pesticides.
    </p>
  </Container>
</English>



      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>
            (Sugarcane Red Rot Disease) گنے کا سرخ سیاہ روگ بیماری
          </Heading>
          <Description>
            <strong>(تفصیل) Description:</strong> گنے کا سرخ سیاہ روگ بیماری، جو
            ریڈ اسٹرائپ ڈیزیز کے نام سے بھی جانی جاتی ہے، ایک تباہ کن فنگل
            بیماری ہے جو گنے کے پودوں پر اثر انداز ہوتی ہے۔ بیماری کا سبب فنگس
            کولیٹو ٹرائکوم فیلکیٹم ہوتا ہے، جو گنے کے پودوں میں زخموں یا قدرتی
            اوپننگز کے ذریعہ داخل ہوتا ہے۔ پودے میں داخل ہونے کے بعد، فنگس تیزی
            سے تضاد کرتا ہے اور متاثرہ اندرونی حصوں میں سرخ رنگ کی بدبوداری اور
            روگ کے اثرات کا زمین بناتا ہے، خاص طور پر انٹرنوڈ میں، جس کی وجہ سے
            اس کا نام "سرخ روگ" ہے۔ یہ بیماری جلدی طور پر متاثرہ پودوں سے صحیح
            پودوں تک تیزی سے پھیل سکتی ہے، جو گنے کی پیداوار میں شدید نقصانات کا
            باعث بنتی ہے۔
          </Description>
          <Subheading>(علامات) Symptoms:</Subheading>
          گنے کا سرخ سیاہ روگ بیماری کے علامات میں شامل ہیں:
          <List>
            <ListItem>انٹرنوڈز میں سرخ بھورا یا مرون رنگ کی بدبوداری۔</ListItem>
            <ListItem>
              انٹرنوڈز کی سرخ رنگ کی بدبوداری، جس سے وہ کمزور ہو جاتے ہیں اور
              آسانی سے ٹوٹ جاتے ہیں۔
            </ListItem>
            <ListItem>
              پتیوں کا سکڑنا اور سوکھ جانا، جو سر سے شروع ہو کر نیچے کی طرف
              بڑھتا ہے۔
            </ListItem>
            <ListItem>
              پتوں کی روئیں اور بیچوں پر سرخ لکیریں نمودار ہونا۔
            </ListItem>
          </List>
          <Subheading>(وجہ) Causes:</Subheading>
          گنے کا سرخ سیاہ روگ بیماری کا سبب فنگس کولیٹو ٹرائکوم فیلکیٹم ہوتا ہے۔
          فنگس زخموں کے ذریعہ، مثلاً کے کیڑے کی چبائی یا میکانی نقصان، اور پتے
          کے نشانات کی طرح قدرتی اوپننگز کے ذریعہ گنے کے پودے میں داخل ہوتا ہے۔
          پودے میں داخل ہونے کے بعد، فنگس نسیلا نظام کے ذریعہ بڑھتا ہے اور پودوں
          کے دیگر متاثرہ حصوں میں پھیلتا ہے، جس کی وجہ سے انٹرنوڈز اور دیگر
          متاثرہ حصوں میں سرخ رنگ کی بدبوداری کے خصوصی علامات پیدا ہوتے ہیں۔
          <Subheading>(موسم اور ماحولیاتی عوامل) Impact on Crops:</Subheading>
          گنے کا سرخ سیاہ روگ گنے کی پیداوار پر بھاری نقصانات ڈال سکتا ہے۔
          انٹرنوڈز کی بدبوداری پودے کی ساختی مضبوطی کو کم کرتی ہے، جس سے گنے کا
          گرنا اور ٹوٹنا۔ اس کی بنا پر گنے کی پیداوار اور معیار میں کمی رونما
          ہوتی ہے۔ شدید انفیکشن کی صورت میں، وہ بڑی تعداد میں نقصانات کا سبب
          بنتا ہے، جس سے گنے کے کاشتکاروں کو نمائشی معاشی نقصانات کا سامنا کرنا
          پڑتا ہے۔
          <Subheading>
            (رہائی اور نظم و نگار) Prevention and Management:
          </Subheading>
          اگرچہ گنے کا سرخ سیاہ روگ بیماری کے پودے میں ایک دفعہ متاثرہ ہونے کے
          بعد کوئی سیدھا علاج نہیں ہے، لیکن بیماری کے اثرات کو کم کرنے اور مزید
          پھیلنے سے روکنے کے لئے کئی رہائی اور نظم و نگاری تدابیر مدد فراہم کر
          سکتے ہیں۔ ان تدابیر میں شامل ہیں:
          <List>
            <ListItem>
              <strong>1. کاشتی تدابیر (Crop Rotation):</strong> گنے کا کاشت اس
              خطے میں نہ کریں جہاں پچھلے موسم میں بیماری کا اثر ہوا تھا۔ کاشتی
              تدابیر کا استعمال بیماری کے دوری چکر کو توڑنے اور زمین میں فنگل
              سپورز کی تعداد کو کم کرنے میں مدد فراہم کرتا ہے۔
            </ListItem>
            <ListItem>
              <strong>
                2. متعلقہ اقسام کا استعمال (Use of Resistant Varieties):
              </strong>{" "}
              گنے کے اقسام کا کاشت جو سرخ روگ کے خلاف مزاحمت رکھتے ہیں، بیماری
              کے خلاف محفوظی فراہم کر سکتا ہے۔
            </ListItem>
            <ListItem>
              <strong>3. صفائی (Sanitation):</strong> متاثرہ پودوں کے نکاس کو
              ہٹا دیں تاکہ فنگس کے سپورز کا پھیلاؤ روکا جا سکے۔ مزارعی آلات کو
              بیماری سے محفوظ رکھنے کیلئے بطور استعمالی صفائی کرتے رہیں۔
            </ListItem>
            <ListItem>
              <strong>4. مناسب آبپاشی (Proper Irrigation):</strong> زیادہ پانی
              دینے سے بچیں، کیونکہ زیادہ نمی فنگس کے اثرات کے لئے ایک موزوں
              ماحول پیدا کر سکتی ہے۔
            </ListItem>
            <ListItem>
              <strong>5. کیڑے ماردار (Fungicides):</strong> کیڑے ماردار کے
              استعمال سے پھیلنے سے روکا جا سکتا ہے۔ ٹیبوکونیزول، پروپیکونیزول،
              اور تھائوفینیٹ-میتھل گنے کا سرخ سیاہ روگ کے خلاف کارآمد کیڑے
              ماردار ہیں۔ زراعتی ماہرین سے صحیح کیڑے ماردار کا انتخاب اور
              استعمال کے لئے مشورہ حاصل کریں۔
            </ListItem>
          </List>
          <Subheading>
            (کھاد اور کیڑے ماردار کا استعمال) Fertilizer and Pesticide Use:
          </Subheading>
          کھاد اور کیڑے ماردار کے استعمال سے گنے کا سرخ سیاہ روگ کو محفوظ بنایا
          جا سکتا ہے۔ کھاد کے درست استعمال سے پودوں کی عمومی صحت کو بہتر بنایا
          جا سکتا ہے، جس سے وہ انفیکشن کے خلاف محفوظ تر ہوتے ہیں۔ درج ذیل کھاد
          اور کیڑے ماردار استعمال کئے جا سکتے ہیں:
          <Description>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                ٹرپل سپرفاسفیٹ (Triple Superphosphate): پودوں کی اوسط موصولی کے
                لئے ایک اہم عنصر فاسفورس فراہم کرتا ہے۔
              </ListItem>
              <ListItem>
                مونو ایمونیم فاسفیٹ (Monoammonium Phosphate): فاسفورس کے ساتھ
                ساتھ نائٹروجن فراہم کرتا ہے جو پودوں کی اونچائی اور مضبوطی کو
                بڑھاتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                کاپر بیسڈ فنگائسڈز (Copper-based Fungicides): پودوں کے نسیلا
                نظام کو محفوظ بنانے کے لئے اور انٹرنوڈز پر فنگل کی روک تھام کے
                لئے استعمال ہوتے ہیں۔
              </ListItem>
              <ListItem>
                اسٹریپٹومائیسن (Streptomycin): پودوں کے اندرونی حصوں کو محفوظ
                بناتا ہے اور بیماری کے پھیلاؤ کو روکتا ہے۔
              </ListItem>
              <ListItem>
                کسوگامائیسن (Kasugamycin): پودوں کے اندرونی حصوں میں فنگل کی روک
                تھام کے لئے استعمال ہوتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Subheading>
            (گنے کا سرخ سیاہ روگ کی جلدی پہچان) Early Detection of Sugarcane Red
            Rot:
          </Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              نائٹروجن کے بنیادی کھادوں کا استعمال بڑھا کریں، مثلاً یو ریا یا
              مونو ایمونیم فاسفیٹ، تاکہ گنے کو تندرست بنانے میں مدد مل سکے اور
              وہ بیماری کے خلاف مزاحمت اختیار کریں۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              گنے کا سرخ سیاہ روگ کے علامات کا تشخیص لگنے کے بعد فوری طور پر
              ٹیبوکونیزول یا اسٹریپٹومائیسن جیسے ٹارگٹیڈ کیڑے ماردار کا استعمال
              کریں۔ جلدی تدخل سے بیماری کے پھیلاؤ کو روکنا ممکن ہوتا ہے اور
              دوسرے پودوں کو زخمی ہونے سے بچایا جا سکتا ہے۔
            </ListItem>
          </List>
          <Subheading>
            (شدید گنے کا سرخ سیاہ روگ کی تفصیل) Severe Sugarcane Red Rot
            Outbreak:
          </Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              شدید گنے کا سرخ سیاہ روگ کی صورت میں، گنے کے پودوں کے کلورین،
              فاسفورس، اور پوٹاشیم جیسے ضروری عناصر کے ساتھ مختلف کھاد کا
              استعمال کریں تاکہ پودوں کے طبیعی تنخواہوں کو کم کیا جا سکے۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              شدید گنے کا سرخ سیاہ روگ کے معاملے میں، زراعتی ماہرین یا ایکسٹینشن
              سروسز سے رابطہ کریں تاکہ مناسب کیڑے ماردار کے تجویزات حاصل کی
              جائیں۔ انہوں نے بیماری کو کارآمدی سے کنٹرول کرنے کے لئے سسٹمک اور
              پروٹیکٹو کیڑے ماردار کے مخلوطہ کا استعمال مشورہ کیا ہو سکتا ہے۔
            </ListItem>
          </List>
          <Subheading>
            (بیماری مزاحمت اور کاشت تدابیر) Disease Resistance and Crop
            Rotation:
          </Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              زمین کی صحت اور زرخیزی کو بہتر بنانے کے لئے زمین میں آلودگی کا
              اضافہ کرنے کے لئے زرخیزی اور کمپوسٹ شامل کریں، جس سے پودے کی
              بیماری مزاحمت اندازی میں اضافہ ہو سکتا ہے۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              فنگل آبادی میں مزید مضبوطی اختیار کرنے کے لئے مختلف طریقوں سے کیڑے
              ماردار کے ریزستنس کے ساتھ کیڑے ماردار کے روٹیشن کو امپلیمنٹ کریں۔
              گنے کے کاشت کے دوران بیماری چکر کو توڑنے اور گنے کا سرخ سیاہ روگ
              کے دوبارہ ظہور کو کم کرنے کے لئے کاشت کی روٹیشن کے تدابیر کا
              استعمال کریں۔
            </ListItem>
          </List>
          <Subheading>
            (موسمیاتی اور ماحولیاتی عوامل) Weather and Environmental Factors:
          </Subheading>
          <strong>کھاد (Fertilizers):</strong>
          <List>
            <ListItem>
              موسمیاتی حالات کے مطابق کھاد کے اطلاق کے وقت براہ کرم تبدیل کریں۔
              بھاری بارش کے دوران، ایزوٹیاڈ کے استعمال کو کم کرنے کا سوچیں تاکہ
              لیچنگ اور ممکنہ ماحولیاتی مسائل کا سامنا نہ کرنا پڑے۔
            </ListItem>
          </List>
          <strong>کیڑے ماردار (Pesticides):</strong>
          <List>
            <ListItem>
              موسمیاتی تنبیہات اور بیماری کے خطرے کے اندازوں کو نظرانداز نہ کریں
              تاکہ مناسب وقت پر گنے کے سرخ سیاہ روگ کے خلاف کیڑے ماردار کے
              تدابیر کا استعمال کیا جائے۔
            </ListItem>
          </List>
          <Subheading>
            (مقامی ضوابط اور حفاظتی تدابیر) Local Regulations and Safety:
          </Subheading>
          <p>
            کھاد اور کیڑے ماردار کے استعمال کے معاملے میں ہمیشہ مقامی ضوابط اور
            حفاظتی تدابیر کا خیال رکھیں۔
          </p>
          <p>
            کھاد اور کیڑے ماردار کو استعمال کرتے وقت شخصی حفاظتی تجہیزات (PPE)
            اور مناسب اطلاقی تقنیات کا استعمال کریں۔
          </p>
        </Container>
      </Urdu>
    </>
  );
}
