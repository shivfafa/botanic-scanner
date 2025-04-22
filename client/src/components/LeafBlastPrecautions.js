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

export default function LeafBlastPrecautions() {
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
    <Heading>Rice Leaf Blast Disease (چاول کی پتے کی بلاسٹ بیماری)</Heading>
    <Description>
      <strong>Description:</strong> Rice Leaf Blast, caused by the fungus
      Magnaporthe oryzae, is a destructive fungal disease that affects rice
      plants. The disease primarily targets the leaves, but it can also infect
      other parts of the plant. Infected plants show characteristic blast-like
      lesions on leaves, reducing photosynthesis and affecting grain
      development.
    </Description>
    <Subheading>Symptoms (علامات):</Subheading>
    The symptoms of Rice Leaf Blast disease include:
    <List>
      <ListItem>Formation of diamond-shaped or spindle-shaped lesions.</ListItem>
      <ListItem>
        Lesions may have gray or whitish centers and dark borders.
      </ListItem>
      <ListItem>
        Infected leaves may wither, and the disease can progress to the leaf
        collar and sheath.
      </ListItem>
      <ListItem>
        Severely infected panicles may have blank or partially filled grains.
      </ListItem>
    </List>
    <Subheading>Causes (وجہ):</Subheading>
    Rice Leaf Blast is caused by the fungus Magnaporthe oryzae. The fungus
    spreads through water, air, and infected plant materials.
    <Subheading>Impact on Crops (فصلوں پر اثرات):</Subheading>
    Rice Leaf Blast can lead to a significant reduction in yield and grain
    quality. The disease can cause extensive damage to rice crops, affecting
    food security and farmers' income.
    <Subheading>Prevention and Management (روک تھام اور انتظام):</Subheading>
    While complete eradication of Rice Leaf Blast may not be feasible, several
    measures can help manage the disease and reduce its impact:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties (مزاحمت کی اقسام):</strong> Planting rice
        varieties with resistance to Rice Leaf Blast can significantly reduce
        disease severity.
      </ListItem>
      <ListItem>
        <strong>2. Crop Rotation (فصل کی روٹیشن):</strong> Avoid consecutive rice
        plantings in the same field to break the disease cycle.
      </ListItem>
      <ListItem>
        <strong>3. Seed Treatment (بیج کی تدارک):</strong> Use certified
        disease-free seeds or treat seeds with appropriate fungicides before
        planting.
      </ListItem>
      <ListItem>
        <strong>4. Fungicides (فنگی سائیڈز):</strong> Apply fungicides containing
        Pyraclostrobin, Trifloxystrobin, or Propiconazole to control the
        disease. Follow recommended application rates and safety guidelines.
      </ListItem>
      <ListItem>
        <strong>5. Proper Irrigation (مناسب آبپاشی):</strong> Avoid excessive
        irrigation, as waterlogged conditions can favor disease development.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Leaf Blast. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the disease.
    <Description>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Zinc Sulfate: Provides zinc, essential for plant growth and enzyme
          activation.
        </ListItem>
        <ListItem>
          Iron Sulfate: Supplies iron, important for chlorophyll production and
          photosynthesis.
        </ListItem>
        <ListItem>
          Boric Acid: Provides boron, which is necessary for cell wall
          formation and carbohydrate metabolism.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Pyraclostrobin: An effective fungicide specifically used for
          controlling Rice Leaf Blast.
        </ListItem>
        <ListItem>
          Trifloxystrobin: Provides preventive and curative action against fungal
          infections.
        </ListItem>
        <ListItem>
          Propiconazole: Controls a broad spectrum of fungal pathogens,
          including Magnaporthe oryzae.
        </ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>Early Detection of Rice Leaf Blast (چاول کی پتے کی بلاسٹ کی جلد شناخت):</Subheading>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Increase the application of zinc and iron-based fertilizers to support
          rice plants' recovery and resistance to disease.
        </ListItem>
      </List>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Apply a targeted fungicide like Pyraclostrobin or Trifloxystrobin
          immediately after detecting Rice Leaf Blast symptoms. Early
          intervention can prevent the spread of the disease to other plants and
          minimize damage.
        </ListItem>
      </List>
    </Description>
    <Subheading>Severe Rice Leaf Blast Outbreak (چاول کی پتے کی بلاسٹ کے شدید پھیلاؤ):</Subheading>
    <strong>Fertilizers (کھاد):</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like zinc,
        iron, and boron to support the overall health of rice plants during
        severe infections.
      </ListItem>
    </List>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        In cases of severe Rice Leaf Blast outbreaks, consult with agricultural
        experts or extension services for appropriate pesticide recommendations.
        They may suggest a combination of fungicides to manage the disease
        effectively.
      </ListItem>
    </List>
    <Subheading>Disease Resistance and Crop Rotation (بیماری مزاحمت اور فصل کی روٹیشن):</Subheading>
    <strong>Fertilizers (کھاد):</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, indirectly enhancing rice plants' disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the fungal population. Implement crop rotation
        practices to break the disease cycle and minimize the recurrence of Rice
        Leaf Blast.
      </ListItem>
    </List>
    <Subheading>Weather and Environmental Factors (موسم اور ماحولیاتی عوامل):</Subheading>
    <strong>Fertilizers (کھاد):</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing
        zinc and iron applications to prevent leaching and potential
        environmental issues.
      </ListItem>
    </List>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply fungicides
        proactively when conditions are favorable for Rice Leaf Blast
        development.
      </ListItem>
    </List>
    <Subheading>Local Regulations and Safety (مقامی ضوابط اور حفاظتی تدابیر):</Subheading>
    <p>
      Always follow local regulations and safety guidelines regarding the use
      of fertilizers and pesticides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques
      when handling and applying fertilizers and pesticides.
    </p>
    <p>
      It is essential to follow the recommended application rates and timings
      to avoid any negative effects on the environment and non-target
      organisms. Consult with agricultural experts or local extension services
      for proper usage guidelines and safety precautions.
    </p>
  </Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
  <Container>
    <Heading>(چاول کی پتے کی بلاسٹ بیماری) Rice Leaf Blast Disease</Heading>
    <Description>
      <strong>تفصیل:</strong> (چاول کی پتے کی بلاسٹ بیماری) چاول کے پودے کو متاثرہ
      کرنے والی فنگسی بیماری ہے جو (مگناپورٹھی اوریزائی) فنگس سے وابستہ ہوتی ہے۔
      یہ بیماری عموماً پتوں کو مبتلا کرتی ہے، لیکن پودے کے دوسرے حصوں پر بھی
      اثر انداز ہو سکتی ہے۔ متاثرہ پودے پر چھاپ دار یا رومانچکار نمونے پر داغ
      بن جاتے ہیں، جس سے فوٹوسنتھیسس میں کمی ہوتی ہے اور دانے کی تشکیل متاثرہ
      ہوتی ہے۔
    </Description>
    <Subheading>(علامات) Symptoms:</Subheading>
    (چاول کی پتے کی بلاسٹ بیماری) کے علامات شامل ہیں:
    <List>
      <ListItem>پتوں پر چھوٹے مائل اور چھڑی دار داغوں کا بننا۔</ListItem>
      <ListItem>
        داغوں کے درمیان سفید یا سرمئی رنگ کے حلقے ہونا۔
      </ListItem>
      <ListItem>
        متاثرہ پتے پھٹ جاتے ہیں، اور بیماری پتے کے گلے اور پولوں تک پہنچ سکتی
        ہے۔
      </ListItem>
      <ListItem>
        شدید متاثرہ سینکلز کے دانے خالی یا جزوی طور پر بھرے ہوتے ہیں۔
      </ListItem>
    </List>
    <Subheading>(وجہ) Causes:</Subheading>
    (چاول کی پتے کی بلاسٹ بیماری) کی وجہ (مگناپورٹھی اوریزائی) فنگس ہے۔ یہ فنگس
    پانی، ہوا اور متاثرہ پودوں کے مواد کے ذرائع سے پھیلتا ہے۔
    <Subheading>(فصلوں پر اثرات) Impact on Crops:</Subheading>
    (چاول کی پتے کی بلاسٹ بیماری) کے پھیلاؤ سے کاشتکاری پر بڑی تعداد میں کمی
    آ سکتی ہے اور دانے کی معیار پر بھی اثر انداز ہو سکتی ہے۔ یہ بیماری چاول کی
    کاشت کو کئی حد تک متاثرہ کر سکتی ہے جس سے کاشتکاروں کو مالیت کا نقصان ہوتا
    ہے۔
    <Subheading>(روک تھام اور انتظام) Prevention and Management:</Subheading>
    (چاول کی پتے کی بلاسٹ بیماری) کو مکمل طور پر ختم کرنا ممکن نہیں ہوسکتا، لیکن
    چند تدابیر سے اس کا نظم و نسق قابو کیا جاسکتا ہے اور اس کے اثرات کم کیے
    جاسکتے ہیں:
    <List>
      <ListItem>
        <strong>1. مزاحمت کی اقسام (Resistant Varieties):</strong> (چاول کی پتے کی
        بلاسٹ بیماری) سے متاثرہ کاشت کے لئے مزاحمت کی اقسام کے ساتھ چاول کی کاشت
        کرنا بیماری کی شدت کو کم کرسکتا ہے۔
      </ListItem>
      <ListItem>
        <strong>2. فصل کی روٹیشن (Crop Rotation):</strong> یہ بیماری کے چکر کو توڑنے کے
        لئے چاول کی پیداوار کو واحد زمین میں نہیں لگانا چاہئے۔
      </ListItem>
      <ListItem>
        <strong>3. بیج کی تدارک (Seed Treatment):</strong> بیماری سے پاک بیج کا
        استعمال یا کاشت سے پہلے مناسب فنگی زرخیز استعمال کریں۔
      </ListItem>
      <ListItem>
        <strong>4. فنگی سائیڈز (Fungicides):</strong> (چاول کی پتے کی بلاسٹ بیماری)
        کے انتظام کے لئے پائراکلوسٹروبن، ٹرائی فلوکسٹروبن، یا پروپیکونازول شامل
        فنگی سائیڈز کا استعمال کریں۔ تجویز شدہ اطلاق کی شرح اور حفاظتی تدابیر کا
        پابندی سے پیروی کریں۔
      </ListItem>
      <ListItem>
        <strong>5. مناسب آبپاشی (Proper Irrigation):</strong> زیادہ آبپاشی سے بچیں،
        کیونکہ پانی بھرا ہوا حالات میں بیماری کا فیور کریت میں فائدہ ہوتا ہے۔
      </ListItem>
    </List>
    <Subheading>(کھاد اور کیڑے ماردار کا استعمال) Fertilizer and Pesticide Use:</Subheading>
    (چاول کی پتے کی بلاسٹ بیماری) کے انتظام کے لئے کھاد اور کیڑے ماردار کا استعمال
    مدیریت کے لئے مدد فراہم کر سکتا ہے۔ کھاد کے مناسب اطلاق اور ٹارگٹ کیا گیا
    کیڑے ماردار کا استعمال چاول کے پودوں کی کل صحت کو بہتر بناتا ہے اور بیماری کو
    کنٹرول کرتا ہے۔
    <Description>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          زنک سلفیٹ: پودوں کی نشوونما اور انزائم کی حرکت کے لئے ضروری زنک فراہم
          کرتا ہے۔
        </ListItem>
        <ListItem>
          آئرن سلفیٹ: کلوروفائیل پیداوار اور فوٹوسنتھیسس کے لئے اہم آئرن فراہم
          کرتا ہے۔
        </ListItem>
        <ListItem>
          بورک ایسڈ: سیل وال کی تشکیل کے لئے اور کاربوہائیڈریٹ میٹابولزم کے لئے
          ضروری بوران فراہم کرتا ہے۔
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          پائراکلوسٹروبن: (چاول کی پتے کی بلاسٹ بیماری) کو کنٹرول کرنے کے لئے
          ایک موثر فنگسائیڈ ہے۔
        </ListItem>
        <ListItem>
          ٹرائی فلوکسٹروبن: فنگل انفیکشن سے محفوظ کرنے والا فنگسائیڈ ہے۔
        </ListItem>
        <ListItem>
          پروپیکونازول: مگناپورٹھی اوریزائی سمیت مختلف فنگس کے خلاف اثرانداز ہوتا
          ہے۔
        </ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>(چاول کی پتے کی بلاسٹ کی جلد شناخت) Early Detection of Rice Leaf Blast:</Subheading>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          (چاول کی پتے کی بلاسٹ بیماری) کے علامات کی شناخت کرنے کے بعد زنک اور آئرن
          کے بیج کی تدارک بڑھائیں تاکہ چاول کو صحتیاب کریں اور بیماری کے خلاف
          مزاحمت میں اضافہ ہو۔
        </ListItem>
      </List>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          (چاول کی پتے کی بلاسٹ بیماری) کے علامات کا تشخیص کرتے ہیں تو فوراً
          پائراکلوسٹروبن یا ٹرائی فلوکسٹروبن جیسے مخصوص فنگسائیڈ کا اطلاق کریں۔
          جلد شناخت کے بعد جلدی انٹرنیشن پر مداخلت کرنے سے بیماری کا اختتام ہوسکتا
          ہے اور دوسرے پودوں کو متاثرہ کرنے سے بچایا جاسکتا ہے۔
        </ListItem>
      </List>

      <Subheading>شدید (چاول کی پتے کی بلاسٹ بیماری) کی صورت میں Severe Rice Leaf Blast Outbreak:</Subheading>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          (چاول کی پتے کی بلاسٹ بیماری) کے شدید پھیلاؤ کی صورت میں، کاشت کاروں سے
          مشورہ کریں یا مشورہ کاروں سے رابطہ کریں کہ کیسے موزوں کیڑے ماردار کے
          تجویزات حاصل کریں۔ انہوں نے بیماری کو مدیریت کرنے کے لئے سسٹمک اور
          حفاظتی فنگسائیڈز کا مجموعہ تجویز دے سکتے ہیں۔
        </ListItem>
      </List>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          (چاول کی پتے کی بلاسٹ بیماری) کے شدید پھیلاؤ کے مقابلے میں کھاد اور کیڑے
          ماردار کے مختلف تجویزات کے لئے کشاورز اور تعمیری کاروں سے مشورہ کریں۔
          وہ بیماری کو کنٹرول کرنے کے لئے سسٹمک اور حفاظتی فنگسائیڈز کا استعمال
          کرنے کی تجویز دے سکتے ہیں۔
        </ListItem>
      </List>

      <Subheading>بیماری کی مزاحمت اور فصل کی روٹیشن Disease Resistance and Crop Rotation:</Subheading>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          مٹی میں عضوی مواد اور کمپوسٹ شامل کر کے مٹی کی صحت اور زرخیزی کو بہتر
          بنائیں جو کہ اندازاً پودے کی بیماری کی مزاحمت کو بڑھا دیتا ہے۔
        </ListItem>
      </List>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          (چاول کی پتے کی بلاسٹ بیماری) کے لئے مختلف طریقے سے فنگسائیڈز کا استعمال
          کریں تاکہ فنگل آبادی میں مزاحمت کے بننے کا خدشہ نہ ہو۔ کھیتوں میں فصلوں
          کی روٹیشن کا استعمال کرنے سے بیماری کے چکر کو توڑا جاسکتا ہے اور
          چاول کی پتے کی بلاسٹ کے دوبارہ ظہور کو کم کیا جاسکتا ہے۔
        </ListItem>
      </List>

      <Subheading>موسم اور ماحولیاتی عوامل Weather and Environmental Factors:</Subheading>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          (چاول کی پتے کی بلاسٹ بیماری) کے لئے کھاد کے اطلاق کے وقت اور معیار کو
          موسم کی حالتوں کے مطابق ترتیب دیں۔ زیادہ برساتی دنوں میں، زنک اطلاق کرنے
          کو کم کریں تاکہ لیچنگ اور ممکنہ ماحولیاتی مسائل سے بچا جاسکے۔
        </ListItem>
      </List>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          (چاول کی پتے کی بلاسٹ بیماری) کی تنبیہاتی کیچرز اور ماحولیاتی خطرے کو
          نظرانداز نہ کریں تاکہ فنگسائیڈز کا اطلاق مناسب وقت پر ہو سکے جب کھال کی
          پتے کی بلاسٹ کے لئے مواتی راکٹس بنیادی ہوتی ہے۔
        </ListItem>
      </List>

      <Subheading>مقامی ضوابط اور حفاظتی تدابیر Local Regulations and Safety:</Subheading>
      <p>
        (چاول کی پتے کی بلاسٹ بیماری) کے کھاد اور کیڑے ماردار کے استعمال کے لئے
        مقامی ضوابط اور حفاظتی تدابیر کا ہمیشہ پابندی سے پیروی کریں۔
      </p>
      <p>
        کھاد اور کیڑے ماردار کو ہینڈل اور اطلاق کرتے وقت شخصی حفاظتی تجھیزات
        (PPE) اور مناسب اطلاق کی تقنیات کا استعمال کریں۔
      </p>
    </Description>
    <Description>
      (ماحول اور غیر مقصودہ جانداروں پر منفی اثرات سے بچنے کے لئے منصوبہ بندی
      کی جانے والی تجویزات اور حفاظتی تدابیر کے لئے کشاورزی ماہرین یا مقامی توسیعی
      خدمات سے رجوع کریں۔
    </Description>
  </Container>
</Urdu>

    </>
  );
}
