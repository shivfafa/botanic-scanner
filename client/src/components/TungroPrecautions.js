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

export default function TungroPrecautions() {
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
    <Heading>Rice Tungro Disease (چاول ٹنگرو بیماری)</Heading>
    <Description>
      <strong>Description:</strong> Rice Tungro Disease is a viral disease
      primarily transmitted by leafhoppers that affects rice plants. The virus
      causes yellowing of leaves, stunting of plant growth, and reduced grain
      formation, leading to significant yield losses.
    </Description>
    <Subheading>Symptoms (علامات):</Subheading>
    <List>
      <ListItem>Yellowing and drying of young leaves.</ListItem>
      <ListItem>
        Stunting of plants, resulting in reduced plant vigor.
      </ListItem>
      <ListItem>
        In severe cases, the formation of "hopper burn" due to leafhopper
        feeding.
      </ListItem>
      <ListItem>
        Reduced grain formation and overall poor yield.
      </ListItem>
    </List>
    <Subheading>Causes (وجہ):</Subheading>
    Rice Tungro Disease is caused by a complex of viruses that are primarily
    transmitted by green leafhoppers (Nephotettix spp.).
    <Subheading>Impact on Crops (فصلوں پر اثرات):</Subheading>
    Rice Tungro Disease can cause severe yield losses, leading to economic
    hardship for rice farmers. The disease affects both the quantity and
    quality of the rice harvest.
    <Subheading>Prevention and Management (روک تھام اور انتظام):</Subheading>
    While complete eradication of Rice Tungro Disease may not be possible,
    several measures can help manage and minimize its impact:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties (مزاحمت کی اقسام):</strong> Planting rice
        varieties with resistance to Rice Tungro can reduce disease severity.
      </ListItem>
      <ListItem>
        <strong>2. Elimination of Host Plants (ضیافتی پودوں کی اخراج):</strong>{" "}
        Remove and destroy any nearby alternative host plants that may harbor
        the virus or the leafhopper vector.
      </ListItem>
      <ListItem>
        <strong>3. Seed Treatment (بیج کی تدارک):</strong> Treat rice seeds with
        Imidacloprid, Thiamethoxam, Clothianidin, or other appropriate
        pesticides to reduce the chance of transmission from infected seeds.
      </ListItem>
      <ListItem>
        <strong>4. Biological Control (حیاتیاتی کنٹرول):</strong> Encourage the
        presence of natural predators and parasites of leafhoppers to control
        their population.
      </ListItem>
      <ListItem>
        <strong>5. Vector Control (ویکٹر کنٹرول):</strong> Apply appropriate
        insecticides to control leafhoppers and prevent their spread of the
        virus.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Tungro Disease. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the leafhopper vector.
    <Description>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Magnesium Sulfate: Provides magnesium, an essential nutrient for plant
          photosynthesis and enzyme activation.
        </ListItem>
        <ListItem>
          Magnesium Nitrate: Supplies nitrogen and magnesium for healthy plant
          growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Seed treatment with Imidacloprid: Controls insect pests, including the
          leafhopper vector, during early stages of plant growth.
        </ListItem>
        <ListItem>
          Seed treatment with Thiamethoxam: Provides protection against
          leafhoppers and reduces virus transmission from infected seeds.
        </ListItem>
        <ListItem>
          Seed treatment with Clothianidin: Offers systemic protection against
          insect pests, including leafhoppers.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Rice Tungro (چاول ٹنگرو کی جلد شناخت):</Subheading>
    <List>
      <ListItem>
        Monitor rice fields regularly for the presence of leafhoppers and
        yellowing symptoms.
      </ListItem>
      <ListItem>
        If detected early, take immediate action to prevent the spread of the
        disease.
      </ListItem>
    </List>
    <Subheading>Severe Rice Tungro Outbreak (چاول ٹنگرو کے شدید پھیلاؤ):</Subheading>
    <List>
      <ListItem>
        In case of a severe Rice Tungro outbreak, seek assistance from
        agricultural experts or extension services for appropriate pest
        management strategies.
      </ListItem>
    </List>
    <Subheading>Weather and Environmental Factors (موسم اور ماحولیاتی عوامل):</Subheading>
    <strong>Fertilizers (کھاد):</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. Take into account factors like excessive rainfall, which may
        affect nutrient availability in the soil.
      </ListItem>
    </List>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        Apply insecticides proactively when conditions are favorable for
        leafhopper activity and virus transmission.
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
    <Heading>(چاول ٹنگرو بیماری) Rice Tungro Disease</Heading>
    <Description>
      <strong>(تفصیل)</strong> چاول ٹنگرو بیماری ایک وائرسی بیماری ہے جو خصوصاً
      لیفہاپرز کے ذرائع سے چاول کے پودوں کو متاثر کرتی ہے۔ یہ وائرس پتے کی پیلاؤ اور
      پودے کی رکاوٹی پھلنے کی بنا پر بڑھنے کا شکار ہوتا ہے جس سے فصل کے انقباض اور
      دانے کی تشکیل میں کمی ہوتی ہے، جس سے کاشت کے نتائج کے لحاظ سے نقصان ہوتا ہے۔
    </Description>
    <Subheading>(علامات) Symptoms:</Subheading>
    <List>
      <ListItem>پتوں کی پیلاؤ اور سکڑنا۔</ListItem>
      <ListItem>پودوں کا انقباض جس سے ان کی صحتیت متاثر ہوتی ہے۔</ListItem>
      <ListItem>شدید صورتحال میں، لیفہاپرز کے کاٹنے کی وجہ سے "ہاپر برن" کا بننا۔</ListItem>
      <ListItem>دانوں کی تشکیل میں کمی اور فصل کی کل کمی۔</ListItem>
    </List>
    <Subheading>(وجہ) Causes:</Subheading>
    چاول ٹنگرو بیماری ایک مخصوص وائرسوں کی جھلک ہے جو خصوصاً سبز لیفہاپرز (Nephotettix spp.) کے ذرائع سے پھیلتے ہیں۔
    <Subheading>(فصلوں پر اثرات) Impact on Crops:</Subheading>
    چاول ٹنگرو بیماری کی بنا پر کاشت کے خسارے کم ہو جاتے ہیں جس سے چاول کے کمی اور
    معیار پر اثر پڑتا ہے۔
    <Subheading>(روک تھام اور انتظام) Prevention and Management:</Subheading>
    چاول ٹنگرو بیماری کے مکمل خاتمے کا حصول ممکن نہیں ہوتا، لیکن چند تدابیر سے اس کے اثرات کو کم کیا جا سکتا ہے:
    <List>
      <ListItem>
        <strong>1. مزاحمت کی اقسام (Resistant Varieties):</strong> چاول ٹنگرو کے خلاف مزاحمت رکھنے والے چاول کی کاشت کریں۔
      </ListItem>
      <ListItem>
        <strong>2. ضیافتی پودوں کی اخراج (Elimination of Host Plants):</strong>{" "}
        متاثرہ بیماری کے وائرس یا لیفہاپرز ویکٹر کا پتے کے قریب قریبی مخصوص میزاحمت رکھنے والے پودے کو اتاریں اور تباہ کریں۔
      </ListItem>
      <ListItem>
        <strong>3. بیج کی تدارک (Seed Treatment):</strong> چاول کے بیجوں کو Imidacloprid، Thiamethoxam، Clothianidin، یا دوسرے مناسب کیڑے ماردار سے علاج کریں تاکہ ان میں موجود وائرس کا پھیلنے کا خطرہ کم ہو۔
      </ListItem>
      <ListItem>
        <strong>4. حیاتیاتی کنٹرول (Biological Control):</strong> لیفہاپرز کے قدرتی خوفناک خوشامد اور دشمن جانوروں کی موجودگی کو بڑھائیں تاکہ ان کی تعداد کو کنٹرول کیا جا سکے۔
      </ListItem>
      <ListItem>
        <strong>5. ویکٹر کنٹرول (Vector Control):</strong> وائرس کے پھیلنے کو روکنے کے لئے مناسب کیڑے ماردار کا استعمال کریں۔
      </ListItem>
    </List>
    <Subheading>(کھاد اور کیڑے ماردار کا استعمال) Fertilizer and Pesticide Use:</Subheading>
    کھاد اور کیڑے ماردار کا استعمال چاول ٹنگرو بیماری کو کنٹرول کرنے اور اس کے اثرات کو کم کرنے میں مدد فراہم کر سکتا ہے۔ کھاد کے موزوں استعمال اور کیڑے ماردار کے موجہد استعمال سے چاول کے پودوں کی کل صحتیت میں بہتری حاصل کی جا سکتی ہے۔
    <Description>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          Magnesium Sulfate: پودوں کے فوٹو سنتھیس اور انزائم کی سرگرمی کے لئے ضروری معدنیات فراہم کرتا ہے۔
        </ListItem>
        <ListItem>
          Magnesium Nitrate: صحیح پودوں کی نشو و نمو کے لئے نائٹروجن اور میگنیشیم فراہم کرتا ہے۔
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          Imidacloprid سے بیج کی تدارک: پودوں کی نشو و نمو کے ابتدائی مراحل میں کیڑے ماردار، لیفہاپرز، اور دوسرے کیڑے مار کو کنٹرول کرتا ہے۔
        </ListItem>
        <ListItem>
          Thiamethoxam سے بیج کی تدارک: لیفہاپرز کے قدرتی خوفناک اور موجودہ بیماری سے وائرس کے پھیلنے سے بچاو فراہم کرتا ہے۔
        </ListItem>
        <ListItem>
          Clothianidin سے بیج کی تدارک: لیفہاپرز اور دوسرے کیڑے ماردار سے بچاو کے لئے نظامی تحفظ فراہم کرتا ہے۔
        </ListItem>
      </List>
    </Description>
    <Subheading>(چاول ٹنگرو کی جلد شناخت) Early Detection of Rice Tungro:</Subheading>
    <List>
      <ListItem>
        روزانہ چاول کے کھیتوں کا موقعہ جائزہ لیں تاکہ لیفہاپرز کی موجودگی اور پتوں کی پیلاؤ کی علامات کا اندازہ لگایا جا سکے۔
      </ListItem>
      <ListItem>
        اگر جلد شناخت کی جلد شناخت کی جائے، تو فوراً کامیاب طریقہ کار اپنائیں تاکہ بیماری کے پھیلنے کو روکا جا سکے۔
      </ListItem>
    </List>
    <Subheading>(چاول ٹنگرو کے شدید پھیلاؤ) Severe Rice Tungro Outbreak:</Subheading>
    <List>
      <ListItem>
        اگر چاول ٹنگرو کا شدید پھیلاؤ ہوتا ہے، تو زراعتی ماہرین یا توسیعی خدمات سے رابطہ کریں تاکہ مناسب کیڑے ماردار انتظامیہ کے لئے مدد حاصل کی جا سکے۔
      </ListItem>
    </List>
    <Subheading>(موسم اور ماحولیاتی عوامل) Weather and Environmental Factors:</Subheading>
    <strong>کھاد (Fertilizers):</strong>
    <List>
      <ListItem>
        موسمی حالات کے مطابق کھاد کی درست تنظیم اور درجہ بندی کریں۔ اسٹریکیس مین اشرافیہ میں بہت زیادہ بارش کے دوران، مٹی میں موجود معدنیات کی دستیابی کو مد نظر رکھیں۔
      </ListItem>
    </List>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        لیفہاپرز کی موجودگی اور وائرس کے پھیلنے کے لئے مناسب وقت پر کیڑے ماردار کا استعمال کریں۔
      </ListItem>
    </List>
    <Subheading>(مقامی ضوابط اور حفاظتی تدابیر) Local Regulations and Safety:</Subheading>
    <p>
      ہمیشہ کھاد اور کیڑے ماردار کے استعمال کے مقامی ضوابط اور حفاظتی تدابیر کا پیرو کریں۔
    </p>
    <p>
      کھاد اور کیڑے ماردار کو ہینڈل کرنے اور اس کا استعمال کرتے وقت معائنہ شدہ پروٹیکٹو تھیکن کے استعمال کریں۔
    </p>
    <p>
      ماحول اور غیر ہدف جانوروں پر منفی اثرات سے بچنے کے لئے موصوف کھاد اور کیڑے ماردار کے تجویز کار کے ساتھ مشورہ کریں۔
    </p>
  </Container>
</Urdu>

    </>
  );
}
