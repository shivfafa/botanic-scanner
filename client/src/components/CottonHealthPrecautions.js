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
  max-width: 700px;
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

export default function CottonHealthPrecautions() {
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
          <Heading>Healthy Cotton (کپاس کی صحت)</Heading>
          <Description>
            <strong>Description:</strong> Healthy cotton plants are vital for a
            successful cotton crop. These plants exhibit robust growth and are
            free from significant diseases. They have lush green leaves and
            sturdy stems, contributing to efficient photosynthesis and nutrient
            uptake. Maintaining the health of cotton plants is crucial for
            achieving high yields and premium quality cotton.
            <Subheading>Characteristics of Healthy Cotton:</Subheading>
            Healthy cotton plants demonstrate the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant and lush green leaves without any visible signs of pests
              or diseases.
            </ListItem>
            <ListItem>
              Strong and well-developed stems capable of supporting bolls
              effectively.
            </ListItem>
            <ListItem>
              Uniform and consistent growth with well-distributed branches and
              bolls.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              supply.
            </ListItem>
            <ListItem>
              Well-formed and fully matured bolls with healthy, fluffy cotton
              fibers.
            </ListItem>
            <ListItem>
              Proper spacing between plants to allow optimal sunlight exposure
              and airflow.
            </ListItem>
          </List>
          <Subheading>Maintaining Cotton Health:</Subheading>
          To ensure the health of cotton plants, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Adequate Watering:</strong> Maintain a consistent and
              appropriate irrigation schedule to meet the water demands of
              cotton plants throughout their growth stages.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, including nitrogen, phosphorus, and potassium, through
              fertilizers and soil amendments to support healthy growth and
              fiber development.
            </ListItem>
            <ListItem>
              <strong>3. Pest and Disease Control:</strong> Regularly monitor
              cotton plants for signs of pests and diseases. Timely intervention
              with appropriate measures can prevent damage and improve plant
              health.
            </ListItem>
            <ListItem>
              <strong>4. Weed Management:</strong> Implement effective weed
              control strategies to reduce competition for nutrients and water,
              ensuring cotton plants receive adequate resources for growth.
            </ListItem>
            <ListItem>
              <strong>5. Climate Adaptation:</strong> Be aware of weather
              conditions and adjust farming practices accordingly to minimize
              risks posed by extreme weather events.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy cotton plants lay the foundation for a successful cotton
          harvest. By adopting proper agricultural practices and promptly
          addressing any issues, farmers can ensure the well-being and
          productivity of their cotton crops.
        </Container>
      </English>
      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>کپاس کی صحت (Healthy Cotton)</Heading>
          <Description>
            <strong>تفصیل (Description):</strong> کپاس کے صحت مند پودے کسانوں کے
            لئے اہم ہیں تاکہ اچھی کپاس کی فصل حاصل کی جا سکے۔ یہ پودے مضبوط ترقی
            اور کسی بڑی بیماری سے پاک ہوتے ہیں۔ ان کے پتے سبز اور سخت ڈنڈے ہوتے
            ہیں جو فعال فوٹو سنتھیسز اور مادے کے اپٹیکس کے لئے کردار ادا کرتے
            ہیں۔ کپاس کے پودوں کی صحت کا خیال رکھنا فصل کی بڑھوتری اور براہ راست
            معیاری کپاس کی حاصلی کے لئے اہم ہے۔
            <Subheading>صحت مند کپاس کی خصوصیات:</Subheading>
            صحت مند کپاس کے پودے درج ذیل خصوصیات ظاہر کرتے ہیں:
          </Description>
          <List>
            <ListItem>
              چمکدار اور سبز پتے جو کیڑوں یا بیماریوں کے کوئی علامت نہیں رکھتے۔
            </ListItem>
            <ListItem>
              مضبوط اور خوبصورت ڈنڈے جو بولز کو مضبوطی سے اٹھا سکتے ہیں۔
            </ListItem>
            <ListItem>
              یکساں اور مسلسل ترقی جس میں شاخوں اور بولز بہتر طور پر تقسیم ہوتے
              ہیں۔
            </ListItem>
            <ListItem>
              جھکنے یا مڑنے والے پتے کی عدم موجودگی، جو کافی پانی کی فراہمی کو
              ظاہر کرتا ہے۔
            </ListItem>
            <ListItem>
              خوبصورت اور پورے پکے بولز جن میں صحیح، اچھے کپاس کے ریشے ہوتے ہیں۔
            </ListItem>
            <ListItem>
              پودوں کے درمیان مناسب فاصلہ تاکہ ان کو اپٹیمل سورج کی روشنی اور
              ہوا مل سکے۔
            </ListItem>
          </List>
          <Subheading>کپاس کی صحت کی حفاظت:</Subheading>
          کپاس کے پودے کی صحت یقینی بنانے کے لئے کسانوں کو درج ذیل اقدامات
          اٹھانے چاہئے:
          <List>
            <ListItem>
              <strong>1. مناسب آبپاشی:</strong> کپاس کے پودوں کی تمام ترقی مراحل
              میں پانی کی ضروریات کو پورا کرنے کے لئے مسلسل اور مناسب آبپاشی کا
              تعین کریں۔
            </ListItem>
            <ListItem>
              <strong>2. عناصر کا انتظام:</strong> کھاد اور مٹی کے زرخیز بنیادی
              عناصر فراہم کرنے کے ذرائع سے صحیح ترقی اور ریشوں کی ترقی کی حمایت
              کریں۔
            </ListItem>
            <ListItem>
              <strong>3. کیڑے اور بیماریوں کا کنٹرول:</strong> کپاس کے پودوں کو
              کیڑوں اور بیماریوں کی نشاندہی کے لئے باقاعدہ معائنہ کریں۔ مناسب
              تداخل سے بچاو اور پودوں کی صحت کو بہتر بنائیں۔
            </ListItem>
            <ListItem>
              <strong>4. گھاس کا نظم و تنظیم:</strong> مضبوط کپاس کی ترقی کے لئے
              موثر گھاس کے کنٹرول کے اقدامات اٹھائیں تاکہ کپاس کے پودوں کو
              غذائیت اور پانی کے لئے مخصوص وسائل کی کمی سے بچایا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>5. موسم کے مطابقت:</strong> موسمی حالات کا مد نظر رکھیں
              اور فارمنگ کے طریقوں کو موافقت کے ساتھ تبدیل کریں تاکہ زبردست
              موسمی حالات کی بنا پر خطرات کم ہوں۔
            </ListItem>
          </List>
          <Subheading>مختصر:</Subheading>
          صحت مند کپاس کے پودے کپاس کی کامیاب کٹائی کی بنیاد رکھتے ہیں۔ درست
          زراعتی تدابیر کا اطلاق کرکے اور فوراً کسی بھی مسئلے کا سامنا کرکے،
          کسان مکئی کی صحت اور پیداوار کی کفایت و برکت کو یقینی بنا سکتے ہیں۔
        </Container>
      </Urdu>
    </>
  );
}
