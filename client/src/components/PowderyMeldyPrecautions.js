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

export default function AphidsPrecautions() {
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
          <Heading>
            Cotton Powdery Mildew Disease (کپاس کی پاﺅڈری ملڈو مرض)
          </Heading>
          <Description>
            <strong>Description:</strong> Cotton Powdery Mildew is a fungal
            disease that affects cotton plants. It is characterized by the
            appearance of a powdery, whitish-gray fungal growth on the surfaces
            of leaves, stems, and other plant parts. This disease can negatively
            impact cotton crops, leading to reduced yield and economic losses
            for farmers.
          </Description>
          <Subheading>Symptoms:</Subheading>
          Symptoms of Cotton Powdery Mildew Disease include:
          <List>
            <ListItem>
              Powdery white-gray fungal growth on leaves and stems.
            </ListItem>
            <ListItem>
              Infected plant parts may become distorted and stunted.
            </ListItem>
            <ListItem>
              Yellowing of infected leaves and premature leaf drop.
            </ListItem>
            <ListItem>
              Reduced photosynthesis and impaired plant growth.
            </ListItem>
            <ListItem>
              Severe infestations can lead to boll shedding and yield reduction.
            </ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Powdery Mildew is caused by the fungal pathogen{" "}
          <em>Erysiphe cichoracearum</em>. The disease spreads through airborne
          spores and can be favored by high humidity, moderate temperatures, and
          crowded planting conditions.
          <Subheading>Impact on Crops:</Subheading>
          The disease can severely affect cotton plants, reducing their ability
          to produce healthy bolls and impacting overall crop yield and quality.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control Cotton Powdery Mildew Disease, consider the
          following strategies:
          <List>
            <ListItem>
              <strong>1. Plant Resistant Varieties:</strong> Choose cotton
              varieties with resistance to Powdery Mildew if available in your
              region.
            </ListItem>
            <ListItem>
              <strong>2. Proper Spacing:</strong> Avoid overcrowding plants to
              promote air circulation and reduce humidity around the foliage.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Apply appropriate fungicides
              containing Sulfur, Trifloxystrobin, or Thiophanate-methyl
              following recommended dosages and application schedules.
            </ListItem>
            <ListItem>
              <strong>4. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to break the disease cycle.
            </ListItem>
            <ListItem>
              <strong>5. Pruning:</strong> Remove and destroy infected plant
              parts to limit disease spread.
            </ListItem>
            <ListItem>
              <strong>6. Weather Monitoring:</strong> Be vigilant during periods
              of high humidity and moderate temperatures, as these conditions
              can promote disease development.
            </ListItem>
            <ListItem>
              <strong>7. Clean Field Practices:</strong> Keep the cotton fields
              and surrounding areas clean to minimize overwintering of the
              pathogen.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <List>
            <ListItem>
              Zinc Sulfate: Supplies essential zinc to improve plant health and
              growth.
            </ListItem>
            <ListItem>
              Iron Sulfate: Provides iron, which is vital for chlorophyll
              production and photosynthesis.
            </ListItem>
            <ListItem>
              Boric Acid: Supplies boron, an important micronutrient for cotton
              plants' reproductive processes.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <List>
            <ListItem>
              Sulfur: A fungicide effective against Powdery Mildew and other
              fungal diseases.
            </ListItem>
            <ListItem>
              Trifloxystrobin: Another fungicide option for controlling fungal
              pathogens, including Powdery Mildew.
            </ListItem>
            <ListItem>
              Thiophanate-methyl: A systemic fungicide that provides
              broad-spectrum disease control for cotton plants.
            </ListItem>
          </List>
          <Subheading>Weather and Environmental Considerations:</Subheading>
          <List>
            <ListItem>
              Adjust the timing and rates of pesticide applications based on
              weather conditions. Avoid applications during periods of heavy
              rain to prevent runoff and potential environmental issues.
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
          <Heading>
            کپاس کی پاﺅڈری ملڈو مرض (Cotton Powdery Mildew Disease)
          </Heading>
          <Description>
            <strong>تفصیل:</strong> کپاس کی پاﺅڈری ملڈو مرض ایک قارضہ مرض ہے جو
            کپاس کے پودوں پر اثرانداز ہوتا ہے۔ اس مرض کی پہچان سیاہی، سفیدی یا
            خاکستری رنگ کے کپڑے نما کندروں کی شکل میں ہوتی ہے جو پتوں، پھلوں اور
            دیگر پودے کے حصوں پر ظاہر ہوتی ہے۔ یہ مرض کپاس کی پیداوار پر منفی
            اثرانداز ہوتا ہے، جس سے کٹن کی پیداوار میں کمی اور کسانوں کے لئے
            معاشی ضرر ہو سکتا ہے۔
          </Description>
          <Subheading>علامات:</Subheading>
          کپاس کی پاﺅڈری ملڈو مرض کی علامات مندرجہ ذیل ہیں:
          <List>
            <ListItem>
              پتوں اور کنڈھوں پر کندرو نما سفیدی سیاہی کیڑے کی ظاہری شکل۔
            </ListItem>
            <ListItem>متاثرہ پودے کے حصوں میں تبدیلی اور رکاوٹ۔</ListItem>
            <ListItem>
              متاثرہ پتوں کا پیلا پڑ جانا اور جلد پڑنے کا اندیشہ۔
            </ListItem>
            <ListItem>
              کمزور فوٹو سنتھیس اور پودوں کی نمو کا رکاوٹ ہونا۔
            </ListItem>
            <ListItem>
              شدید حملے کی صورت میں بول گرنا اور پیداوار کا کم ہونا۔
            </ListItem>
          </List>
          <Subheading>وجوہات:</Subheading>
          کپاس کی پاﺅڈری ملڈو مرض کا سبب فنگل پیٹھوں{" "}
          <em>Erysiphe cichoracearum</em> ہے۔ یہ مرض ہوا ذرائع کے ذرائع سے
          پھیلتا ہے اور اس کی اگر ہمایت ہائی نمی، معتدل درجہ حرارت اور کھیتوں
          میں اکٹھے اشیاء ہوں۔
          <Subheading>پودوں پر اثرات:</Subheading>
          یہ مرض کپاس کے پودوں کو شدید طریقے سے متاثرہ کر سکتا ہے، جس سے ان کی
          صحیح بولیں پیدا کرنے کی صلاحیت متاثرہ ہوتی ہے اور کل کپاس کی پیداوار
          اور معیار پر اثرانداز ہوتا ہے۔
          <Subheading>پیشگوئی اور انتظام:</Subheading>
          کپاس کی پاﺅڈری ملڈو مرض کو منظم اور کنٹرول کرنے کے لئے مندرجہ ذیل
          تدابیر کو مد نظر رکھیں:
          <List>
            <ListItem>
              <strong>1. مضبوط نوعیت کے پودے:</strong> اگر آپ کے علاقے میں کپاس
              کے پاﺅڈری ملڈو سے محفوظ نوعیت کے پودے دستیاب ہیں تو ان کا انتخاب
              کریں۔
            </ListItem>
            <ListItem>
              <strong>2. مناسب فاصلہ:</strong> پودوں کے اکٹھے ہونے سے بچیں تاکہ
              پتوں کے گرد ہوا کی سرکولیشن میں اضافہ ہو اور نمی کم ہو۔
            </ListItem>
            <ListItem>
              <strong>3. فنگی مارکشٹ:</strong> مندرجہ ذیل فنگی مارکشٹس کا
              استعمال کریں جو سلفر، ٹرائیفلوکسٹرابن، یا تھائیوفینیٹ-میتھائل
              رکھتے ہیں اور موصوفہ اطلاقی معیارات اور مواقیت کو پیروی کریں۔
            </ListItem>
            <ListItem>
              <strong>4. کراہی علیحدگی:</strong> غیر مضبوطی کے دوران کراہی
              علیحدگی کا عمل انجام دیں تاکہ مرض کے دور ہونے کا سلسلہ ختم ہو سکے۔
            </ListItem>
            <ListItem>
              <strong>5. تراشنا:</strong> متاثرہ پودوں کے حصوں کو کاٹیں اور ختم
              کریں تاکہ مرض کے پھیلاؤ کو کم کیا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>6. موسم کی مانیٹرنگ:</strong> بلند نمی اور معتدل درجہ
              حرارت کے دوران ہوشیار رہیں، کیونکہ یہ مواقع مرض کے اضافی پھیلاؤ کو
              بڑھا سکتے ہیں۔
            </ListItem>
            <ListItem>
              <strong>7. صاف کھیت:</strong> کپاس کے میدانوں اور آس پاس کے علاقوں
              کو صاف رکھیں تاکہ قارضہ کے اوور ونٹرنگ کم ہو سکے۔
            </ListItem>
          </List>
          <Subheading>کیڑے مار کے لئے کھاد:</Subheading>
          <List>
            <ListItem>
              زنک سلفیٹ: پودوں کی صحت اور نمو کو بہتر بنانے کے لئے ضروری زنک
              فراہم کرتا ہے۔
            </ListItem>
            <ListItem>
              آئرن سلفیٹ: کلروفائل پیداوار اور فوٹو سنتھیس کے لئے ضروری ہے۔
            </ListItem>
            <ListItem>
              بورک ایسڈ: کپاس کے پودوں کی تناسلی عملیات کے لئے اہم
              مائیکرونیوٹرینٹ فراہم کرتا ہے۔
            </ListItem>
          </List>
          <Subheading>کیڑے مار کے لئے کیڈے مارکشٹس:</Subheading>
          <List>
            <ListItem>
              سلفر: کپاس کے پاﺅڈری ملڈو اور دیگر فنگل مرضوں کے خلاف کارآمد کیڑے
              مار ہے۔
            </ListItem>
            <ListItem>
              ٹرائیفلوکسٹرابن: کپاس کے پاﺅڈری ملڈو اور دیگر فنگل امراض کو کنٹرول
              کرنے کے لئے ایک اور کیڈے مارکشٹ۔
            </ListItem>
            <ListItem>
              تھائیوفینیٹ-میتھائل: کپاس کے پودوں کے لئے ڈھیر سارے فنگل کارآمد
              کیڑے مار کا ایک نظامی کیڈے مارکشٹ۔
            </ListItem>
          </List>
          <Subheading>موسم اور ماحولیاتی عوامل:</Subheading>
          <List>
            <ListItem>
              موسمی حالات کے مطابق کیڑے مار کے اطلاق کے توقیت اور شرحات کو ترتیب
              دیں۔ بھاری بارش کے دوران اطلاقات سے بچنے کے لئے انتظامات کریں اور
              محیطی تجاویزوں کے لحاظ سے اطلاق کریں۔
            </ListItem>
          </List>
          <Subheading>مقامی ضوابط اور حفاظتی تدابیر:</Subheading>
          <p>
            کیڑے مار اور کیڈے مار کے استعمال سے متعلق مقامی ضوابط اور حفاظتی
            تدابیر کا ہمیشہ پالنا ضروری ہے۔
          </p>
          <p>
            کیڈے مار اور کیڈے مار کو ہینڈل کرنے اور ان کا استعمال کرنے کے دوران
            پرسنل پروٹیکٹو ایکوپمنٹ (پی پی ای) اور مناسب اطلاق کی تکنیکیں
            استعمال کریں۔
          </p>
          <p>
            ماحول اور غیر مطلوبہ افراد پر منفی اثرات سے بچنے کے لئے موصوفہ
            اطلاقی معیارات اور حفاظتی تدابیر کا پیروی کرنا ضروری ہے۔ مناسب
            استعمال کی تجاویز اور حفاظتی تحذیرات کے لئے زرعی ماہرین یا مقامی
            ایکسٹینشن سروسز سے مشورہ کریں۔
          </p>
        </Container>
      </Urdu>
    </>
  );
}
