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

export default function SBActerialBlightPrecautions() {
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
    <Heading>Sugarcane Bacterial Blight (گنا بیکٹیریل بلائٹ)</Heading>
    <Description>
      <strong>Description (تفصیل):</strong> Sugarcane bacterial blight is a
      serious disease that affects sugarcane plants. It is caused by the
      bacterium Xanthomonas albilineans, which enters the plant through wounds or
      natural openings. The disease is characterized by white or yellow streaks
      on the leaves, which eventually turn brown and dry out. As the infection
      progresses, the leaves may exhibit a "scalded" appearance. Sugarcane
      bacterial blight can lead to reduced cane yield and economic losses for
      sugarcane farmers.
      <Subheading>Symptoms (علامات):</Subheading>
      The symptoms of sugarcane bacterial blight include:
    </Description>
    <List>
      <ListItem>White or yellow streaks on the leaves.</ListItem>
      <ListItem>Streaks turning brown and drying out.</ListItem>
      <ListItem>
        Leaves exhibiting a "scalded" appearance due to bacterial infection.
      </ListItem>
      <ListItem>Reduced cane yield and plant vigor.</ListItem>
    </List>
    <Subheading>Causes (وجہ):</Subheading>
    Sugarcane bacterial blight is caused by the bacterium Xanthomonas albilineans.
    The bacterium infects the sugarcane plant through wounds or natural openings,
    such as leaf scars or stomata. Once inside the plant, it multiplies and spreads,
    leading to the characteristic symptoms observed on the leaves.
    <Subheading>Impact on Crops:</Subheading>
    Sugarcane bacterial blight can have significant negative effects on sugarcane
    crops. The disease causes leaf damage and reduces the plant's photosynthetic
    capacity, resulting in reduced cane yield and lower sugar content in the
    harvested crop. Severe infections can lead to substantial economic losses for
    sugarcane growers.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for sugarcane bacterial blight, several
    preventive and management measures can help mitigate its impact and prevent
    further spread. These measures include:
    <List>
      <ListItem>
        <strong>1. Planting Resistant Varieties:</strong> Choose sugarcane varieties
        that have shown resistance to bacterial blight to reduce the risk of
        infection.
      </ListItem>
      <ListItem>
        <strong>2. Sanitation:</strong> Remove and destroy infected plant material to
        limit the spread of the bacteria. Avoid planting sugarcane in areas with a
        history of bacterial blight.
      </ListItem>
      <ListItem>
        <strong>3. Proper Irrigation:</strong> Maintain optimal irrigation practices to
        prevent water stress, which can make plants more susceptible to infection.
      </ListItem>
      <ListItem>
        <strong>4. Copper-Based Fungicides:</strong> Apply copper-based fungicides as a
        preventive measure to protect plants from bacterial blight. Consult
        agricultural experts for proper fungicide selection and application guidelines.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing the impact
    of sugarcane bacterial blight. Proper application of fertilizers can improve the
    overall health of the plants, making them more resilient to infections.
    <Description>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>Urea: Provides nitrogen, essential for plant growth and development.</ListItem>
        <ListItem>Ammonium Sulfate: Supplies nitrogen and promotes healthy foliage.</ListItem>
        <ListItem>Ammonium Phosphate: Provides phosphorus, essential for root development.</ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Copper-based Fungicides: Provide systemic protection and control bacterial
          growth on the plant's tissues.
        </ListItem>
        <ListItem>Streptomycin: An antibiotic effective against bacterial pathogens.</ListItem>
        <ListItem>Kasugamycin: A bactericide used to control bacterial diseases.</ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Sugarcane Bacterial Blight:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Increase the application of nitrogen-based fertilizers, such as urea or
        ammonium sulfate, to support sugarcane's recovery and strengthen its
        resistance to disease.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Apply a targeted bactericide like streptomycin or kasugamycin immediately
        after detecting sugarcane bacterial blight symptoms. Early intervention can
        prevent the spread of the disease to other plants and minimize damage.
      </ListItem>
    </List>

    <Subheading>Severe Sugarcane Bacterial Blight Outbreak:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like nitrogen,
        phosphorus, and potassium to support the overall health of the sugarcane
        plants, as severe infections can deplete the plant's nutrient reserves.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        In cases of severe sugarcane bacterial blight outbreaks, consult with
        agricultural experts or extension services for appropriate bactericide
        recommendations. They may suggest a combination of systemic and protective
        bactericides to manage the disease effectively.
      </ListItem>
    </List>

    <Subheading>Disease Resistance and Planting Practices:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its health
        and fertility, which can indirectly enhance the plant's disease resistance.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Rotate bactericides with different modes of action to reduce the risk of
        developing resistance in the bacterial population. Implement planting
        practices that promote good airflow and reduce leaf wetness to minimize
        bacterial blight incidence.
      </ListItem>
    </List>

    <Subheading>Weather and Environmental Factors:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing nitrogen
        applications to prevent leaching and potential environmental issues.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply bactericides
        proactively when conditions are favorable for sugarcane bacterial blight
        development.
      </ListItem>
    </List>

    <Subheading>Local Regulations and Safety:</Subheading>

    <p>
      Always follow local regulations and safety guidelines regarding the use of
      fertilizers and bactericides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques when
      handling and applying fertilizers and bactericides.
    </p>
  </Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
  <Container>
    <Heading>گنا بیکٹیریل بلائٹ (Sugarcane Bacterial Blight)</Heading>
    <Description>
      <strong>تفصیل (Description):</strong> گنا بیکٹیریل بلائٹ ایک تشددناک بیماری ہے جو گنے کے پودوں کو متاثر کرتی ہے۔ یہ بیماری جراثیم زندہ یا طبیعی راہوں سے داخل ہوتی ہے، جیسے کے پتے کے نشانات یا سٹومیٹا۔ بیماری کی علامات میں پتوں پر سفید یا پیلا لکیروں کی پیداوار ہے، جو آخرکار بھورا ہو جاتا ہے اور سکڑ جاتا ہے۔ بیماری کی تسری کے ساتھ-ساتھ پتے بکھرے ہوئے حالت میں ہو سکتے ہیں۔ گنا بیکٹیریل بلائٹ گنے کی پیداوار کو کم کرتی ہے اور گنے کے کاشتکاروں کے لئے معاشی نقصانات پیدا کر سکتی ہے۔
      <Subheading>علامات (Symptoms):</Subheading>
      گنا بیکٹیریل بلائٹ کی علامات میں شامل ہیں:
    </Description>
    <List>
      <ListItem>پتوں پر سفید یا پیلا لکیروں کی پیداوار۔</ListItem>
      <ListItem>لکیروں کا بھورا ہوجانا اور سکڑ جانا۔</ListItem>
      <ListItem>
        پتے بکھرے ہوئے حالت میں نظر آنا جو بیکٹیریا کی بیماری کی بنا پر ہے۔
      </ListItem>
      <ListItem>گنے کی پیداوار میں کمی اور پودے کی زندگی میں کمی۔</ListItem>
    </List>
    <Subheading>وجہ (Causes):</Subheading>
    گنا بیکٹیریل بلائٹ کا سبب جراثیم Xanthomonas albilineans ہے۔ یہ جراثیم پودے کو نشانات یا سٹومیٹا کے ذریعہ متاثر کرتے ہیں، جیسے کے پتے کے نشانات یا سٹومیٹا۔ ایک بار جب یہ پودے کے اندر داخل ہوجاتا ہے، یہ اضافے کی تعداد بڑھاتا ہے اور پھیل جاتا ہے، جس سے پتوں پر دیکھی جانے والی خصوصی علامات پیدا ہوتی ہیں۔
    <Subheading>زرعی پیداوار پر اثرات (Impact on Crops):</Subheading>
    گنا بیکٹیریل بلائٹ گنے کی کاشتکاری پر اثرات انتہائی منفی ہو سکتے ہیں۔ یہ بیماری پتوں کو نقصان پہنچاتی ہے اور پودے کی فوٹوسنتھیٹک صلاحیت کو کم کرتی ہے، جو کے پیداوار میں کمی اور حاصل شدہ فصل میں شکر کی مقدار کم ہونے کا سبب بنتی ہے۔ شدید انفیکشن کی صورت میں، کاشتکاروں کو بڑے معاشی نقصانات کا سامنا کرنا پڑ سکتا ہے۔
    <Subheading>روک تھام اور انتظامات (Prevention and Management):</Subheading>
    گنا بیکٹیریل بلائٹ کے لئے کوئی مستقیم علاج نہیں ہے، لیکن بیماری کے اثرات کو کم کرنے اور مزید پھیلنے سے روکنے کے لئے کئی روک تھام اور انتظامات استعمال کی جا سکتی ہیں۔ ان اقدامات میں شامل ہیں:
    <List>
      <ListItem>
        <strong>1. متعدد مضبوط اقسام کی کاشت:</strong> گنے کی کاشت کے لئے ایسے اقسام کو منتخب کریں جو بیکٹیریل بلائٹ کے خلاف مستحکم ہوں تاکہ انفیکشن کے خطرے کو کم کیا جاسکے۔
      </ListItem>
      <ListItem>
        <strong>2. صفائی:</strong> متاثرہ پودے کے مواد کو ہٹا کر تباہ کریں تاکہ جراثیم کا پھیلاؤ روکا جاسکے۔ گنے کاشتکاری کو ایسی جگہوں پر گنا کاشت نہ کرنے کا سیلیبیسٹی کریں جہاں بیکٹیریل بلائٹ کی پہلے سے ہی تاریخ ہو۔
      </ListItem>
      <ListItem>
        <strong>3. مناسب آبپاشی:</strong> معمولی آبپاشی کے انداز کو قائم رکھیں تاکہ پودوں کو اضافی پانی کے دباؤ سے بچایا جا سکے، جو کے انفیکشن کے خطرے کو کم کرتا ہے۔
      </ListItem>
      <ListItem>
        <strong>4. کاپر سے بنا ہوا فنگی سائیڈس:</strong> بیکٹیریل بلائٹ سے محفوظ رکھنے کے لئے کاپر سے بنا ہوا فنگی سائیڈس استعمال کریں۔ درست فنگی سائیڈس کا انتخاب اور استعمال کے لئے زرعی ماہرین سے مشورہ کریں۔
      </ListItem>
    </List>
    <Subheading>کھاد اور کیڑے ماردار کا استعمال (Fertilizer and Pesticide Use):</Subheading>
    کھاد اور کیڑے ماردار کا استعمال گنا بیکٹیریل بلائٹ کو کنٹرول کرنے میں مدد فراہم کرسکتا ہے۔ کھاد کے مناسب استعمال سے پودوں کی کل صحت میں بہتری ہوسکتی ہے، جس سے وہ انفیکشن سے مزید مستحکم ہوتے ہیں۔
    <Description>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>یوریا: پودوں کی بڑھتے ہوئے اور ترقی کے لئے ضروری نائٹروجن فراہم کرتا ہے۔</ListItem>
        <ListItem>امونیم سلفیٹ: نائٹروجن فراہم کرتا ہے اور صحیح پتوں کی تروتازہ ترقی کو فروغ دیتا ہے۔</ListItem>
        <ListItem>امونیم فاسفیٹ: جڑوں کی ترقی کے لئے ضروری فاسفورس فراہم کرتا ہے۔</ListItem>
      </List>
    </Description>
    <Description>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>کاپر سے بنا ہوا فنگی سائیڈس: پودوں کے اندر جراثیم کے فروغ کو روکتے ہیں اور بیکٹیریل بلائٹ کے خلاف محفوظ رکھتے ہیں۔</ListItem>
        <ListItem>استریپٹومائیسن: جراثیمی عدویات کے خلاف مؤثر اینٹی بائیوٹک۔</ListItem>
        <ListItem>کاسوگامائسن: جراثیمی بیماریوں کے کنٹرول کے لئے استعمال ہونے والا بیکٹیرائیڈ۔</ListItem>
      </List>
    </Description>
    <Subheading>گنا بیکٹیریل بلائٹ کی جلدی شناخت (Early Detection of Sugarcane Bacterial Blight):</Subheading>
    <strong>کھاد (Fertilizers):</strong>
    <List>
      <ListItem>
        گنے کے فرصتی انداز میں نائٹروجن پر مبنی کھاد کی کمی کریں، جیسے کے یوریا یا امونیم سلفیٹ، تاکہ گنے کی بہتری کی حمایت کی جاسکے اور وہ بیماری کے خطرے کا سامنا کرسکے۔
      </ListItem>
    </List>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        گنے کے بیکٹیریل بلائٹ کے علامات کا تشخیص ہوتے ہی، فوراً استریپٹومائیسن یا کاسوگامائسن جیسے نشانے کار کیڑے ماردار کا استعمال کریں۔ جلدی انٹروینشن بیماری کے دوسرے پودوں تک پھیلنے سے روکا جا سکتا ہے اور نقصان کو کم کیا جاسکتا ہے۔
      </ListItem>
    </List>

    <Subheading>شدید گنا بیکٹیریل بلائٹ کے عروج (Severe Sugarcane Bacterial Blight Outbreak):</Subheading>
    <strong>کھاد (Fertilizers):</strong>
    <List>
      <ListItem>
        شدید گنا بیکٹیریل بلائٹ کے عروج کی صورت میں، گنے کی پودوں کی کل صحت کو بہتر بنانے والی تین اقسام کی کھاد کے ساتھ کاشت کریں، جو نائٹروجن، فاسفورس اور پوٹاشیم جیسے ضروری عناصر فراہم کرتی ہیں، تاکہ گنے کے پودے کی کمی کو پورا کیا جا سکے۔
      </ListItem>
    </List>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        شدید گنا بیکٹیریل بلائٹ کے عروج کی صورت میں، زرعی ماہرین یا ایکسٹینشن سروسز سے مناسب کیڑے ماردار کے تجاویز کے لئے مشورہ کریں۔ انہوں نے بیماری کے انتظام کے لئے سسٹمک اور حفاظتی کیڑے ماردار کی ترکیب کا استعمال مشورہ کیا ہوسکتا ہے۔
      </ListItem>
    </List>

    <Subheading>بیماری کے خلاف مزاحمت اور پودوں کی کاشتی تدبیر (Disease Resistance and Planting Practices):</Subheading>
    <strong>کھاد (Fertilizers):</strong>
    <List>
      <ListItem>
        مٹی میں عضوی مواد اور کمپوسٹ شامل کریں تاکہ اس کی صحت اور زرخیزی میں بہتری ہوسکے، جس سے پودوں کی بیماری کے خلاف مزاحمت غیر مستقیم طور پر بڑھائی جاسکتی ہے۔
      </ListItem>
    </List>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        بیکٹیریا کی پاپولیشن میں مزاحمت کے خطرے کو کم کرنے کے لئے مختلف طریقوں سے کیڑے ماردار کو روٹیٹ کریں۔ بیماری کے دوری چکر کو توڑنے اور گنا بیکٹیریل بلائٹ کی تکرار کو کم کرنے کے لئے کاشتی تدبیر کے طریقوں کو لاگو کریں۔
      </ListItem>
    </List>

    <Subheading>موسم اور ماحولیاتی عوامل (Weather and Environmental Factors):</Subheading>
    <strong>کھاد (Fertilizers):</strong>
    <List>
      <ListItem>
        موسمی حالات کے مطابق کھاد کے انداز کا ترتیب کریں۔ بہت زیادہ بارش کے دوران، نائٹروجن کے انداز کو کم کرنے کے لئے غور کریں تاکہ پانی کا اخراج اور ممکنہ ماحولیاتی مسائل کے اثرات سے بچایا جا سکے۔
      </ListItem>
    </List>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        گنے بیکٹیریل بلائٹ کے ترقی کے لئے مواتر موسمی پیشگوئیوں اور بیماری کے خطرے کی انتباہی رپورٹس کا نگرانی کریں تاکہ فنگی سائیڈس کی جلدی کارروائی ہوسکے۔
      </ListItem>
    </List>

    <Subheading>مقامی قوانین اور حفاظتی تدابیر (Local Regulations and Safety):</Subheading>

    <p>
      ہمیشہ مقامی قوانین اور حفاظتی تدابیر کی پیروی کریں جو کھاد اور کیڑے ماردار کے استعمال کے لئے مقرر کرتے ہیں۔
    </p>
    <p>
      کھاد اور کیڑے ماردار کا استعمال کرتے وقت، شخصی حفاظتی سامان (PPE) اور صحیح کارروائی کے طریقوں کا استعمال کریں۔
    </p>
  </Container>
</Urdu>

    </>
  );
}
