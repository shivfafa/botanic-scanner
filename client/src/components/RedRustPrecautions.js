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

export default function RedRustPrecautions() {
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
<Heading>Sugarcane Red Rust</Heading>
<Description>
<strong>Description:</strong> Sugarcane red rust, also known as red rust disease, is a fungal infection that affects sugarcane plants. It is caused by the fungus Puccinia melanocephala, which primarily attacks the leaves of the sugarcane plant. The disease is characterized by the development of reddish-brown, elongated, and powdery pustules on the leaf surface, which contain fungal spores. These pustules can coalesce, leading to the yellowing and drying of leaves, and can severely impact the overall health and productivity of sugarcane crops.
<Subheading>Symptoms:</Subheading>
The symptoms of sugarcane red rust include:
</Description>
<List>
<ListItem>Formation of reddish-brown, elongated pustules on the upper leaf surface.</ListItem>
<ListItem>
Pustules may merge, causing larger lesions with irregular edges.
</ListItem>
<ListItem>Yellowing of leaves, starting from the tips and progressing towards the base.</ListItem>
<ListItem>Premature drying and shedding of infected leaves.</ListItem>
<ListItem>
Severe infections can lead to stunted growth and reduced cane yield.
</ListItem>
</List>
<Subheading>Causes:</Subheading>
Sugarcane red rust is caused by the fungus Puccinia melanocephala. The disease spreads through airborne spores and can be facilitated by wind, rain, or mechanical means. Warm and humid weather conditions favor the rapid development and spread of the fungus, making sugarcane crops more susceptible during such periods.
<Subheading>Impact on Crops:</Subheading>
Sugarcane red rust can have significant negative effects on sugarcane crops. The infection weakens the plant by affecting its photosynthetic capacity and nutrient absorption, leading to reduced cane growth and sugar content. Severe and uncontrolled outbreaks can cause significant economic losses due to decreased yields and compromised sugar quality.
<Subheading>Prevention and Management:</Subheading>
While complete eradication of sugarcane red rust may be challenging, various preventive and management strategies can help reduce its impact and spread. These measures include:
<List>
<ListItem>
<strong>1. Resistant Varieties:</strong> Planting sugarcane varieties that exhibit resistance to red rust can help minimize the disease's impact. Consult local agricultural authorities for information on suitable resistant cultivars.
</ListItem>
<ListItem>
<strong>2. Sanitation:</strong> Properly manage and dispose of crop residues to reduce the presence of the fungus in the field. This includes the removal and destruction of infected plant material after harvest.
</ListItem>
<ListItem>
<strong>3. Fungicides:</strong> Application of appropriate fungicides can help control the spread of red rust. Consult agricultural experts for guidance on fungicide selection and application timing.
</ListItem>
<ListItem>
<strong>4. Monitoring:</strong> Regularly inspect sugarcane fields for early signs of red rust and take immediate action if detected. Early intervention can prevent the disease from spreading to healthy plants.
</ListItem>
<ListItem>
<strong>5. Crop Rotation:</strong> Practicing crop rotation with non-host crops can disrupt the disease cycle and reduce the fungus's build-up in the soil.
</ListItem>
<ListItem>
<strong>6. Weather Monitoring:</strong> Monitor weather conditions, especially during periods of high humidity and rainfall, and be prepared to implement preventive measures when conditions favor disease development.
</ListItem>
</List>
<Subheading>Fertilizer and Pesticide Use:</Subheading>
Proper fertilizer application can improve the plant's overall health, making it more resilient to infections. Recommended fertilizers for sugarcane cultivation include those containing nitrogen, phosphorus, and potassium to support robust growth and development.
<Subheading>Local Regulations and Safety:</Subheading>
<p>
  Always follow local regulations and safety guidelines regarding the use of fertilizers and pesticides.
</p>
<p>
  Use personal protective equipment (PPE) and proper application techniques when handling and applying fertilizers and pesticides.
</p>
</Container>
</English>





<Urdu style={{ display: isUrdu ? "block" : "none" }}>
<Container>
<Heading>گنا ریڈ رسٹ</Heading>
<Description>
<strong>تفصیل:</strong> گنا ریڈ رسٹ، جو کے ریڈ رسٹ بیماری کے نام سے بھی جانی جاتی ہے، ایک کھیتی کی مخصوص پودے گنا کو لاگو ہونے والی قدرتی فنگل انفیکشن ہے۔ یہ فنگس Puccinia melanocephala کی وجہ سے پیدا ہوتی ہے، جو بنیادی طور پر گنا کے پتوں کو متاثر کرتی ہے۔ بیماری کی خصوصیت ہے کہ پتوں کی سطح پر سرخ بھورے رنگ کے لمبے داغ دار دانے بن جاتے ہیں، جو کے فنگل اسپورز سے بھرے ہوتے ہیں۔ یہ داغ دار دانے ملاوٹ ہو سکتے ہیں، جو کے پتے کی پیلاؤ اور سکڑاؤ کا سبب بنتے ہیں، اور گنا کی کلیت اور پیداوار کو بھی متاثر کر سکتے ہیں۔
</Description>
<Subheading>علامات:</Subheading>
گنا ریڈ رسٹ کی علامات شامل ہیں:

<List>
<ListItem>پتے کی اوپری سطح پر سرخ بھورے رنگ کے لمبے داغ دار دانے کی تشکیل۔</ListItem>
<ListItem>داغ دار دانے ملاوٹ ہو سکتے ہیں، جس سے ان کے کناروں میں بڑے سائز کے داغ دار جھلیاں بن سکتی ہیں۔</ListItem>
<ListItem>پتوں کا پیلا ہو جانا، جو سر سے لے کر بیس تک پھیلتا ہے۔</ListItem>
<ListItem>متاثرہ پتوں کا جلد سے سکڑ کر گر جانا۔</ListItem>
<ListItem>شدید انفیکشن کی صورت میں پودے کی کمزوری اور گنا کی پیداوار میں کمی ہو سکتی ہے۔</ListItem>
</List>
<Subheading>وجوہات:</Subheading>
گنا ریڈ رسٹ کا سبب فنگس Puccinia melanocephala ہے۔ یہ بیماری ہوا سے پھیلتے اسپورز کے ذرائع سے پھیلتی ہے اور ہوا، بارش یا میکانی طریقوں سے ممکن ہوتی ہے۔ گرم اور بھیگا ہوا موسم کی صورت میں فنگل کے تیز ترقی اور پھیلاؤ کو مدد فراہم کرتی ہے، جس سے اس دوران گنا کی کاشت زیادہ خطرے کے نشانے بن جاتی ہے۔

<Subheading>فصلوں پر اثرات:</Subheading>
گنا ریڈ رسٹ گنا کی کاشت پر معیاری منفی اثرات ڈال سکتی ہے۔ یہ انفیکشن پودے کی فوٹو سنتھیٹک کپیسٹی اور مغذی عناصر کو متاثر کر کے، کاشت کی کمی اور چینی کی مواد میں کمی کا سبب بنتی ہے۔ شدید اور غیر کنٹرول ہونے والے پھیلاؤ کے نتیجے میں منافع کے حصول میں کمی اور چینی کی معیار میں مختلفات سے اقتصادی نقصان کا سامنا کرنا پڑ سکتا ہے۔

<Subheading>روک تھام اور انتظامیہ:</Subheading>
گنا ریڈ رسٹ کے مکمل خاتمے کا کام مشکل ہوسکتا ہے، لیکن مختلف روک تھام اور انتظامیہ تدابیر مدد فراہم کرسکتے ہیں جو بیماری کے اثرات کو کم کرنے اور پھیلاؤ کو روکنے میں مدد فراہم کرتے ہیں۔ یہ تدابیر شامل ہیں:

<List>
<ListItem>
<strong>1. مقاوم اقساط:</strong> ریڈ رسٹ کے خلاف مقاوم اقساط کی کاشت کرنے سے بیماری کے اثرات کو کم کیا جاسکتا ہے۔ موزوں مقامی کاشتی اتھارٹی سے رابطہ کرکے مقاوم اقساط کی معلومات حاصل کریں۔
</ListItem>
<ListItem>
<strong>2. صفائی:</strong> فصل کی باقاعدہ مدیریت کریں اور پودے کی ریڈ رسٹ فنگس کی موجودگی کو کم کرنے کے لئے کاشت کے بعد متاثرہ پودے کا اتارنا اور تباہ کردینا شامل ہے۔
</ListItem>
<ListItem>
<strong>3. فنگی سائیڈ:</strong> مناسب فنگی سائیڈ کا اطلاق ریڈ رسٹ کے پھیلاؤ کو کنٹرول کرنے میں مدد فراہم کرسکتا ہے۔ فنگی سائیڈ کی انتخاب اور اطلاق کے وقت مشورہ لینے کے لئے کاشتی ماہرین سے مشورہ کریں۔
</ListItem>
<ListItem>
<strong>4. مانیٹرنگ:</strong> ریڈ رسٹ کے پہلو کو منظور کرنے کے لئے باقاعدہ طور پر گنا کے کھیتوں کا جائزہ لیں اور اگر جلدی پہچان کریں تو فوراً کارروائی کریں۔ جلدی انٹروینشن بھیماری کو صحیح پودوں تک پھیلنے سے روک سکتا ہے۔
</ListItem>
<ListItem>
<strong>5. کاشت تبدیلی:</strong> غیر میزبان کاشتی فصلوں کے ساتھ کاشت کرنے سے زمین میں فنگل کے انبار کو خراب کیا جاسکتا ہے۔
</ListItem>
<ListItem>
<strong>6. موسم کی نظارت:</strong> موسم کی شرح یعنی بلند نمی اور بارش کے دوران خصوصاً موسم کی نظارت کریں اور جب موقع پیدا ہوتا ہے تو روک تھامی کے تدابیر کو عمل میں لانے کے لئے تیار رہیں۔
</ListItem>
</List>
<Subheading>کھاد اور کیڑے مار کے استعمال:</Subheading>
صحیح کھاد کا اطلاق پودے کی کلیت کی بہتری کرسکتا ہے، جو کہ انفیکشن سے مزید مضبوط ہوتی ہے۔ گنا کی کاشت کے لئے تجویز کردہ کھادوں میں نائٹروجن، فاسفورس اور پوٹاش شامل ہیں، جو مضبوط نشو و نمو کو حمایت فراہم کرتے ہیں۔

<Subheading>مقامی قوانین اور حفاظتی تدابیر:</Subheading>

<p>
  ہمیشہ کھاد اور کیڑے مار کے استعمال کے لئے مقامی قوانین اور حفاظتی تدابیر کا پیرو کریں۔
</p>
<p>
  کھاد اور کیڑے مار کے استعمال کے دوران شخصی حفاظتی تجہیزات (PPE) اور صحیح اطلاق کی تکنیک استعمال کریں۔
</p>
</Container>
</Urdu>
    </>
  );
}
