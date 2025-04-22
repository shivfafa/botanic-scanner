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

export default function WBrownRustPrecautions() {
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
<Heading>Wheat Brown Rust (گندم کی بھوری بیماری)</Heading>


  Wheat brown rust, also known as wheat leaf rust or Puccinia triticina, is a common fungal disease that affects wheat crops. The disease can cause significant damage to wheat plants, leading to reduced yields and economic losses for farmers. Understanding the symptoms, causes, and management strategies for wheat brown rust is essential for effective disease control.


<Subheading>Symptoms (علامات):</Subheading>
Wheat brown rust can be identified by the following symptoms:

Small, round to oval-shaped, brown or reddish-brown pustules on the leaves, stems, and even the spikes of the wheat plant.
These pustules are filled with rust-colored spores, giving the disease its characteristic appearance.
As the disease progresses, the pustules may merge, causing extensive rusting on the plant surface.
Severe infections can lead to premature yellowing and drying of infected leaves, reducing the plant's photosynthetic capacity.
<Subheading>Causes (وجہ):</Subheading>
Wheat brown rust is caused by the fungus Puccinia triticina. The fungus primarily spreads through airborne spores, which can be carried over long distances by wind currents. Warm and humid weather conditions create a favorable environment for the disease to develop and spread rapidly. Additionally, the disease can survive on crop residues and volunteer wheat plants, contributing to its recurrence in subsequent growing seasons.

<Subheading>Prevention and Management:</Subheading>
While complete eradication of wheat brown rust may be challenging, several preventive measures and management strategies can help minimize its impact and protect wheat crops.

<List>
  <ListItem>
    <strong>1. Crop Rotation:</strong> Practice crop rotation to disrupt the disease cycle and reduce the buildup of rust spores in the soil.
  </ListItem>
  <ListItem>
    <strong>2. Resistant Varieties:</strong> Plant wheat varieties that have been bred for resistance to brown rust. Resistant varieties can significantly reduce the disease's severity.
  </ListItem>
  <ListItem>
    <strong>3. Timely Planting:</strong> Planting wheat early in the season allows the crop to establish before the disease's peak infection period, reducing its susceptibility.
  </ListItem>
  <ListItem>
    <strong>4. Fungicides:</strong> Fungicide applications can be effective in managing brown rust outbreaks. However, their use should be based on monitoring the disease's presence and severity, following recommended guidelines and safety precautions.
  </ListItem>
  <ListItem>
    <strong>5. Removal of Infected Debris:</strong> Practice good field sanitation by removing and destroying infected crop residues and volunteer wheat plants to reduce the disease's carryover.
  </ListItem>
  <ListItem>
    <strong>6. Monitoring:</strong> Regularly monitor wheat fields for early signs of rust infection to implement timely control measures.
  </ListItem>
</List>
<Subheading>Fertilizers:</Subheading>
Proper fertilization plays a crucial role in supporting wheat plant health and boosting their natural resistance to diseases like brown rust. The following fertilizers can be beneficial for wheat crops:

<List>
  <ListItem>
    <strong>1. Urea:</strong> Provides essential nitrogen for overall plant growth and development.
  </ListItem>
  <ListItem>
    <strong>2. Ammonium Nitrate:</strong> Supplies nitrogen, promoting healthy foliage and plant vigor.
  </ListItem>
  <ListItem>
    <strong>3. Calcium Nitrate:</strong> Enhances calcium availability, which is vital for cell wall strength and disease resistance.
  </ListItem>
</List>
<Subheading>Pesticides:</Subheading>
In cases where brown rust infections are severe and impacting wheat yields significantly, targeted pesticide applications may be considered. The following pesticides can help manage wheat brown rust:

<List>
  <ListItem>
    <strong>1. Propiconazole:</strong> A systemic fungicide effective against rust diseases in wheat.
  </ListItem>
  <ListItem>
    <strong>2. Tebuconazole:</strong> Provides protective and curative action against rust infections.
  </ListItem>
  <ListItem>
    <strong>3. Trifloxystrobin + Prothioconazole:</strong> A combination fungicide offering broad-spectrum disease control, including rusts.
  </ListItem>
</List>
<Subheading>Note:</Subheading>
It is crucial to follow the recommended dosage, application timings, and safety guidelines when using fertilizers and pesticides to avoid negative impacts on the environment, beneficial organisms, and human health. Consult with agricultural experts or local extension services for specific guidance tailored to your region and crop conditions.

By implementing preventive measures, proper fertilization, and targeted pesticide applications when necessary, farmers can effectively manage wheat brown rust and protect their wheat crops from substantial losses. Regular scouting and monitoring of fields are essential to detect and address rust infections early, preventing further spread and minimizing damage.
</Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
  <Container>
    <Heading>گندم کی بھوری بیماری (Wheat Brown Rust)</Heading>

    <Description>
      گندم کی بھوری بیماری، جو کہ گندم کی پیداوار پر اثرانداز ہونے والی ایک عام فنگل بیماری ہے جسے گندم کی پودوں کو نقصان پہنچا سکتی ہے، کسانوں کے لئے معاشی ضرر پیدا کر سکتی ہے۔ گندم کی بھوری بیماری کے علامات، اس کی وجوہات اور اس کا انتظام کے لئے ضروری اقدامات کو سمجھنا پودوں کے موثر متاثرہ علاج کے لئے ضروری ہے۔
    </Description>

    <Subheading>علامات (Symptoms):</Subheading>
    <Description>
      گندم کی بھوری بیماری کے علامات درج ذیل ہیں:
      <List>
        <ListItem>پتوں، سٹیم اور گھٹیوں پر چھوٹے، گول اور بھورے یا سرخ بھورے دھببے۔</ListItem>
        <ListItem>یہ دھببے بھورے رنگ کے اسپورز سے بھرے ہوتے ہیں، جس سے بیماری کو اس کا خصوصی نظر آتا ہے۔</ListItem>
        <ListItem>بیماری کے پیش رفت میں، دھببے اکٹھے ہوسکتے ہیں، جس سے پودے کی سطح پر بھورا رنگ کا کچھ حصہ نظر آتا ہے۔</ListItem>
        <ListItem>شدید انفیکشن کی صورت میں، متاثرہ پتوں کی پیلی ہوجانے اور سوکھ جانے کی وجہ سے، پودے کی تصویر کچھ بگڑ سکتی ہے۔</ListItem>
      </List>
    </Description>

    <Subheading>وجوہات (Causes):</Subheading>
    <Description>
      گندم کی بھوری بیماری کی وجہ فطری فنگس Puccinia triticina ہے۔ یہ فنگس ہوا سے منتقل ہوتا ہے، جس کے ذریعہ ہوا کی روانیوں کے ذریعہ دور دور تک منتقل ہو جاتا ہے۔ گرم اور نمی دار موسمیاتی شرائط بیماری کے فوراً پھیلنے اور تیزی سے پھیلنے کے لئے ایک موزوں ماحول فراہم کرتے ہیں۔ علاوہ ازیں، بیماری کا اثر کھیتوں میں رہ جانے والی کاشتکاری اور آزاد گندم کے پودوں پر بھی ہو سکتا ہے، جس سے یہ مستقبلی کاشت کے موسموں میں دوبارہ حملہ کر سکتی ہے۔
    </Description>

    <Subheading>انتظام و انداز بندی (Prevention and Management):</Subheading>
    <Description>
      گندم کی بھوری بیماری کی مکمل خاتمہ کرنا ممکن نہیں ہو سکتا، لیکن چند محافظتی تدابیر اور انتظامی اقدامات سے اس کے اثرات کو کم سے کم کرنا اور گندم کی پیداوار کی حفاظت کرنا ممکن ہے۔
      <List>
        <ListItem><strong>1. محصول کی تبدیلی:</strong> بیماری کے دورہ کو بگاڑنے اور زمین میں بھوری اسپورز کی تعمیر کو کم کرنے کے لئے محصول کی تبدیلی کا عمل انجام دیں۔</ListItem>
        <ListItem><strong>2. مضبوط مخصوصات والے پودے:</strong> گندم کے وہ مخصوص اقسام کا انتخاب کریں جنہیں بھوری کے خلاف مضبوطی سے پیدا کیا گیا ہے۔ مضبوط مخصوصات والے پودے بیماری کی شدت کو کم کر سکتے ہیں۔</ListItem>
        <ListItem><strong>3. وقت پر کاشت:</strong> گندم کو موسم کی ابتدا میں پانی دینے سے قبل کاشت کرنے سے بیماری کے حد زیادہ سے زیادہ پھیلنے کے وقت کم ہوتی ہے۔</ListItem>
        <ListItem><strong>4. فنگی زرخیز:</strong> بھوری بیماری کے شدید حملے کے انتظام کے لئے فنگی زرخیز کے استعمال کا تعاون کرتے ہوئے سوچا جا سکتا ہے۔ تاہم، ان کے استعمال کو بیماری کی موجودگی اور شدت کا مشاہدہ کرنے کے بنیادی معیار اور حفاظتی تدابیر کو مد نظر رکھ کر کرنا چاہئے۔</ListItem>
        <ListItem><strong>5. متاثرہ باقیات کا اخراج:</strong> میدان کی صفائی اچھی طریقے سے کریں اور متاثرہ کاشتکاری اور آزاد گندم کے پودے کو ختم کر دیں تاکہ بیماری کا انتقال کم ہو۔</ListItem>
        <ListItem><strong>6. نگرانی:</strong> گندم کے میدانوں کا باقاعدہ نگرانی کرتے رہیں تاکہ بھوری کے انفیکشن کے ابتدائی علامات کا تعین کر کے وقت پر کنٹرولی اقدامات کا انجام دیا جاسکے۔</ListItem>
      </List>
    </Description>

    <Subheading>کھاد (Fertilizers):</Subheading>
    <Description>
      صحیح کھاد کا انتخاب گندم کے پودوں کی صحت کی حمایت کرنے اور بھوری جیسی بیماریوں کے خلاف ان کی مضبوطی بڑھانے میں اہم کردار ادا کرتا ہے۔ درج ذیل کھاد گندم کے لئے مفید ہوسکتے ہیں:
      <List>
        <ListItem><strong>1. یوریا:</strong> پودوں کے مجموعی ارتقاء اور ترقی کے لئے ضروری نائٹروجن مہیا کرتا ہے۔</ListItem>
        <ListItem><strong>2. ایمونیم نائٹریٹ:</strong> نائٹروجن مہیا کرتا ہے، جو صحیح پتے اور پودوں کی توانائی کو بڑھاتا ہے۔</ListItem>
        <ListItem><strong>3. کیلشیم نائٹریٹ:</strong> کیلشیم کی دستیابی کو بہتر بناتا ہے، جو سیل وال کی دباؤ اور بیماری مزاحمت کے لئے اہم ہے۔</ListItem>
      </List>
    </Description>

    <Subheading>کیڑے ماردار (Pesticides):</Subheading>
    <Description>
      جب بھوری بیماری کے انفیکشن شدید ہوتے ہیں اور گندم کی پیداوار پر اس کا بہترین اثر ہوتا ہے، تو مخصوص کیڑے ماردار کے اطلاق کو غور کرنا ممکن ہوتا ہے۔ درج ذیل کیڑے ماردار گندم کی بھوری بیماری کے انتظام میں مدد فراہم کر سکتے ہیں:
      <List>
        <ListItem><strong>1. پروپیکونازول:</strong> گندم کی بھوری بیماری جیسی رسٹ بیماریوں کے خلاف موثر فنگائیڈ ہے۔</ListItem>
        <ListItem><strong>2. ٹیبوکونازول:</strong> رسٹ انفیکشن کے خلاف محافظتی اور علاجی کاروائی فراہم کرتا ہے۔</ListItem>
        <ListItem><strong>3. ٹرائفلوکسیسٹروبن + پروتھائوکونازول:</strong> یہ مختصر عرصے میں رسٹ جیسی بیماریوں کو شامل کرکے وسیع رینج کے بیماریوں کے انتظام میں مدد فراہم کرنے والا مختلف فنگائیڈ ہے۔</ListItem>
      </List>
    </Description>

    <Subheading>نوٹ (Note):</Subheading>
    <Description>
      کھاد اور کیڑے ماردار کے استعمال کے دوران موصوف ڈوز، اطلاق کی تنظیمات اور حفاظتی تدابیر کا مد نظر رکھنا بہت اہم ہے تاکہ ماحول، مفید موجودہ اور انسانی صحت پر منفی اثرات سے بچا جا سکے۔ علاقائی کاشتکاروں یا مقامی توسیعی خدمات کے ماہرین سے خاص مشورہ حاصل کریں جو آپ کے علاقے اور کاشت کی حالتوں پر مبنی مخصوص رہنمائی کریں۔
      محافظتی تدابیر، صحیح کھاد کا استعمال اور ضرورت کے مطابق کیڑے ماردار کے استعمال کے ذرائع سے، کسان گندم کی بھوری بیماری کو کارآمدی سے انتظام کر سکتے ہیں اور اپنی گندم کی پیداوار کو بڑے حصے میں خرابیوں سے بچا سکتے ہیں۔ میدانوں کا بار بار دورہ لگانا اور نگرانی کرنا، جلدی سے رسٹ کی انفیکشن کے علامات کا تشخیص کرنے اور ان پر قابو پانے کے لئے اہمیت رکھتے ہیں، جس سے مزید پھیلاؤ روکا جا سکتا ہے اور نقصان کم کیا جا سکتا ہے۔
    </Description>
  </Container>
</Urdu>

    </>
  );
}

