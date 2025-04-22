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

export default function BacterialPrecautions() {
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
          <Heading>Cotton Bacterial Blight (کٹن کی بیکٹیریائی بیماری)</Heading>
          <Description>
            <strong>Description:</strong> Cotton Bacterial Blight is a plant
            disease caused by the bacterium Xanthomonas citri subsp.
            malvacearum. It primarily affects cotton plants and can result in
            significant yield losses and economic damage for cotton farmers.
            <Subheading>Symptoms:</Subheading>
            Cotton Bacterial Blight may exhibit the following symptoms:
          </Description>
          <List>
            <ListItem>Angular water-soaked lesions on leaves.</ListItem>
            <ListItem>Lesions surrounded by yellow halos.</ListItem>
            <ListItem>Wilting and browning of infected leaves.</ListItem>
            <ListItem>Dark streaks on stems and veins.</ListItem>
            <ListItem>Bacterial ooze on lesions under high humidity.</ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Bacterial Blight is caused by the bacterium Xanthomonas citri
          subsp. malvacearum. The disease can spread through infected seeds,
          plant debris, contaminated tools, and wind-driven rain or irrigation
          water.
          <Subheading>Impact on Crops:</Subheading>
          Cotton Bacterial Blight can lead to substantial yield losses, reduced
          fiber quality, and increased production costs for farmers due to the
          need for disease management and control measures.
          <Subheading>Prevention and Management:</Subheading>
          To prevent and manage Cotton Bacterial Blight, consider implementing
          the following strategies:
          <List>
            <ListItem>
              <strong>1. Use Disease-Free Seeds:</strong> Plant certified
              disease-free cotton seeds to avoid introducing the pathogen to
              your fields.
            </ListItem>
            <ListItem>
              <strong>2. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to break the disease cycle and reduce the buildup
              of the pathogen in the soil.
            </ListItem>
            <ListItem>
              <strong>3. Sanitation:</strong> Remove and destroy infected plant
              debris to minimize the spread of the bacteria.
            </ListItem>
            <ListItem>
              <strong>4. Avoid Overhead Irrigation:</strong> Use drip or furrow
              irrigation methods instead of overhead irrigation to reduce water
              splashing and bacterial spread.
            </ListItem>
            <ListItem>
              <strong>5. Copper-Based Fungicides:</strong> Copper-based
              fungicides can help suppress the spread of the disease when
              applied preventively or at the first sign of symptoms.
            </ListItem>
            <ListItem>
              <strong>6. Antibiotics:</strong> Streptomycin and Kasugamycin are
              antibiotics that can be used for controlling bacterial diseases in
              cotton. Follow the recommended application guidelines and be
              cautious about antibiotic resistance.
            </ListItem>
            <ListItem>
              <strong>7. Resistant Varieties:</strong> Consider planting cotton
              varieties that are resistant to Cotton Bacterial Blight, where
              available.
            </ListItem>
            <ListItem>
              <strong>8. Weather Monitoring:</strong> Be vigilant during periods
              of high humidity and rain, as these conditions favor disease
              development. Adjust management practices accordingly during such
              periods.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <Description>
            Cotton crops may benefit from the following fertilizers:
          </Description>
          <List>
            <ListItem>
              Muriate of Potash: Provides potassium, which is essential for
              overall plant health and helps improve drought tolerance.
            </ListItem>
            <ListItem>
              Potassium Nitrate: Supplies potassium, which supports overall
              plant health and helps plants withstand stressors.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <Description>
            Consider using the following pesticides to manage Cotton Bacterial
            Blight:
          </Description>
          <List>
            <ListItem>
              Copper-Based Fungicides: Copper-based fungicides can help suppress
              the spread of the disease when applied preventively or at the
              first sign of symptoms.
            </ListItem>
            <ListItem>
              Streptomycin: An antibiotic that can be used to control bacterial
              diseases in cotton. Follow the recommended application guidelines.
            </ListItem>
            <ListItem>
              Kasugamycin: Another antibiotic effective against bacterial
              pathogens in cotton. Use as directed.
            </ListItem>
          </List>
          <Subheading>Consultation:</Subheading>
          <p>
            For severe outbreaks or specific recommendations, consult with
            agricultural experts or local extension services for appropriate
            pesticide use and management practices.
          </p>
          <Subheading>Adherence to Safety Guidelines:</Subheading>
          <p>
            Always adhere to local regulations and safety guidelines regarding
            the use of fertilizers and pesticides.
          </p>
          <p>
            When handling and applying fertilizers and pesticides, use personal
            protective equipment (PPE) and follow proper application techniques.
          </p>
          <p>
            Following recommended application rates and timings is crucial to
            avoid negative effects on the environment and non-target organisms.
            Consult with agricultural experts or local extension services for
            proper usage guidelines and safety precautions.
          </p>
        </Container>
      </English>
      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>کٹن بیکٹیریائی بلائٹ (Cotton Bacterial Blight )</Heading>
          <Description>
            <strong>تفصیل:</strong> کٹن بیکٹیریائی بلائٹ ایک پودے کا مرض ہے جس
            کا باعث بیکٹیریم Xanthomonas citri subsp. malvacearum ہوتا ہے۔ یہ
            مخصوص طور پر کٹن کے پودوں پر اثر انداز ہوتا ہے اور کٹن کے کاشتکاروں
            کے لئے بڑے نقصانات اور معاشی ضرر پیدا کر سکتا ہے۔
            <Subheading>علامات:</Subheading>
            کٹن بیکٹیریائی بلائٹ کے مندرجہ ذیل علامات ہو سکتی ہیں:
          </Description>
          <List>
            <ListItem>پتوں پر کنکریوں کے انگول دار پانی والے چھالے۔</ListItem>
            <ListItem>چھالوں کے گرد زرد ہالوز۔</ListItem>
            <ListItem>متاثرہ پتوں کا خستگی اور بھورائی ہوجانا۔</ListItem>
            <ListItem>سہاروں اور رگوں پر سیاہ دھاریاں۔</ListItem>
            <ListItem>بیکٹیریائی رالیوز علامتیں بلند نمی کے تحت۔</ListItem>
          </List>
          <Subheading>وجوہات:</Subheading>
          کٹن بیکٹیریائی بلائٹ کا باعث بیکٹیریم Xanthomonas citri subsp.
          malvacearum ہوتا ہے۔ یہ مرض متاثرہ بیجوں، پودوں کی باقیات، ملوث اوزار،
          اور ہوا سے پیدا ہونے والی بارش یا آبپاشی پانی کے ذرائع سے پھیل سکتا
          ہے۔
          <Subheading>پودوں پر اثرات:</Subheading>
          کٹن بیکٹیریائی بلائٹ کے باعث کٹن کی پیداوار میں بہترین نقصانات، ریشے
          کی معیار کا کم ہوجانا، اور کاشتکاروں کے لئے انتہائی معاشی خرچے کو
          بڑھانا ہوتا ہے کیونکہ مرض کے انتظام و کنٹرول کے اقدامات کی ضرورت ہوتی
          ہے۔
          <Subheading>پیشگوئی اور انتظام:</Subheading>
          کٹن بیکٹیریائی بلائٹ کے مقابلے کے لئے مد نظر رکھیں درج ذیل تدابیر کو
          عمل میں لاتے ہوئے:
          <List>
            <ListItem>
              <strong>1. مرض سے پاک بیجوں کا استعمال:</strong> کٹن کے صدقہ بے
              مرض بیج لگائیں تاکہ پودوں میں جراثیم کو داخل نہ کیا جائے۔
            </ListItem>
            <ListItem>
              <strong>2. کاشت کے بدلنے:</strong> غیر میزبان پودوں کے ساتھ کاشت
              کے بدلنے کا عمل انتظامی کریں تاکہ مرض کے چکر کو توڑا جائے اور مٹی
              میں جراثیم کی بڑھتی کو کم کیا جائے۔
            </ListItem>
            <ListItem>
              <strong>3. صفائی:</strong> متاثرہ پودوں کے بربادی اور تباہ شدہ
              باقیات کو دور کریں تاکہ جراثیم کے پھیلاؤ کو کم سے کم کیا جائے۔
            </ListItem>
            <ListItem>
              <strong>4. اوپر سے آبپاشی سے بچیں:</strong> جلدی آبپاشی کے بجائے
              ٹھلٹھلی یا نالی آبپاشی کے طریقوں کا استعمال کریں تاکہ پانی کے
              پھیلاؤ اور بیکٹیریائی پھیلاؤ کو کم کیا جائے۔
            </ListItem>
            <ListItem>
              <strong>5. ارتقا:</strong> کاشت کاری کے عمل کو بہتر کرنے کے لئے
              نئے اور بہتر مواد استعمال کریں۔
            </ListItem>
            <ListItem>
              <strong>6. رقبہ کا انتخاب:</strong> مناسب زمین کی منتخب کریں جو
              کٹن کے مرض سے کمپاک ہو اور مرض کا پھیلاؤ کم ہو۔
            </ListItem>
          </List>
          <Subheading>کھاد اور کیڑے ماردار:</Subheading>
          کٹن بیکٹیریائی بلائٹ کے مقابلے کے لئے موزوں کھاد اور کیڑے ماردار کے
          استعمال سے نیچے دیئے گئے ہیں:
          <Description>
            <strong>کھاد:</strong>
            <List>
              <ListItem>
                میو ریٹ آف پوٹاش: پوٹاشیم کی کمی کو پورا کرنے کے لئے جو مخصوص
                کھاد ہے۔
              </ListItem>
              <ListItem>
                پوٹاشیم نائٹریٹ: پوٹاشیم کا اور اضافی حاصل کرنے کے لئے ایک موثر
                کھاد۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>کیڑے ماردار:</strong>
            <List>
              <ListItem>
                مسیکوپیک کیڈوپسیس کے موازنہ میں کیڈوپسیس سلیکواٹس: ایک موثر کیڑے
                مار جو بیکٹیریائی رالیوز کے خلاف موثر ہوتا ہے۔
              </ListItem>
              <ListItem>
                اسٹریپٹو مائیسن: بیکٹیریائی رالیوز کے علیحدہ کنٹرول کے لئے ایک
                دوسرا کیڑے مار۔
              </ListItem>
              <ListItem>
                کیسوگی مائیسن: ایک دوسرے کیڑے مار جو بیکٹیریائی رالیوز کے خلاف
                موثر ہوتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Subheading>کٹن بیکٹیریائی بلائٹ کی جلد پکڑنے کے لئے:</Subheading>
          <List>
            <ListItem>
              کٹن بیکٹیریائی بلائٹ کے حملے کو شناخت کرتے ہیں جیسے ہی انہیں
              پہچانا جاتا ہے تو، مسیکوپیک کیڈوپسیس، اسٹریپٹو مائیسن، یا کیسوگی
              مائیسن جیسے مناسب کیڑے مار کا استعمال کریں۔ جلدی انٹروینشن کی
              اجازت دیکھیے تاکہ جراثیم کی پھیلاؤ کو روکا جا سکے اور نقصان کو کم
              کیا جا سکے۔
            </ListItem>
          </List>
          <Subheading>
            شدید کٹن بیکٹیریائی بلائٹ کے حملے کی صورت میں:
          </Subheading>
          <List>
            <ListItem>
              شدید بیکٹیریائی بلائٹ کے بہتر انداز میں، زرخیز مشورہ کے لئے زرعی
              ماہرین یا ایکسٹینشن سروسز سے رابطہ کریں۔ وہ موزوں سسٹمک اور رابطہ
              کیڑے مار کو کنٹرول کرنے کے لئے تجویز کر سکتے ہیں۔
            </ListItem>
          </List>
          <Subheading>مواد کی مدیریت اور کاشت کے بدلنے کے لئے اصول:</Subheading>
          <List>
            <ListItem>
              بیکٹیریائی بلائٹ کے مقابلے میں کیڑے مار کے مختلف اقوام کے ساتھ
              کھاد کے استعمال سے مکمل طور پر امتناعی پیدا کرنے کے لئے، کاشت کے
              بدلنے کے اصولات کا اطلاق کریں تاکہ مرض کے چکر کو توڑا جا سکے۔
            </ListItem>
            <ListItem>
              مواد کی صحیح مدیریت کرنے اور کاشت کے بدلنے کے اصول کے مطابق
              استعمال کریں۔ اسکو ٹھیک طریقے سے استعمال کرنا زراعتی پیداوار اور
              پرانے جانداروں کے لئے منفی اثرات سے بچنے کے لئے بہت اہم ہوتا ہے۔
              زرعی ماہرین یا ایکسٹینشن سروسز سے صحیح استعمال کے رہنماؤں اور
              حفاظتی احتیاطات کے لئے مشورہ لیں۔
            </ListItem>
          </List>
        </Container>
      </Urdu>
    </>
  );
}
