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

export default function CornHealthPrecautions() {
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
          <Heading>Healthy Corn (مکئی کی صحت)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> Healthy corn plants are free
            from any major diseases and exhibit vigorous growth and development.
            These plants have vibrant green leaves and strong stalks, which
            contribute to optimal photosynthesis and nutrient uptake. Healthy
            corn is crucial for achieving high crop yield and quality.
            <Subheading>Characteristics of Healthy Corn:</Subheading>
            Healthy corn plants display the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant green leaves without any visible lesions or
              discolorations.
            </ListItem>
            <ListItem>
              Strong and sturdy stalks that can support the weight of the plants
              and ears.
            </ListItem>
            <ListItem>
              Lush and even growth of the plant, with consistent height and leaf
              development.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              uptake.
            </ListItem>
            <ListItem>
              Well-developed ears with healthy kernels that are fully filled.
            </ListItem>
            <ListItem>
              Adequate spacing between plants, allowing each plant to access
              sunlight and nutrients without competition.
            </ListItem>
          </List>
          <Subheading>Maintaining Corn Health:</Subheading>
          To ensure corn plants remain healthy, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Proper Irrigation:</strong> Maintain a consistent and
              appropriate irrigation schedule to prevent both under-watering and
              over-watering. Adequate water supply is crucial for corn's growth
              and health.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, including nitrogen, phosphorus, and potassium, through
              fertilizers and soil amendments. Balanced nutrition supports
              corn's overall health and disease resistance.
            </ListItem>
            <ListItem>
              <strong>3. Pest and Disease Monitoring:</strong> Regularly inspect
              corn plants for any signs of pests or diseases. Early detection
              allows for timely intervention and prevents the spread of issues.
            </ListItem>
            <ListItem>
              <strong>4. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to reduce the risk of disease buildup in the soil
              and improve soil health.
            </ListItem>
            <ListItem>
              <strong>5. Weather Considerations:</strong> Be mindful of weather
              conditions and adapt farming practices accordingly to mitigate
              potential risks posed by extreme weather events.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy corn is the foundation for a successful harvest. By following
          proper agricultural practices and promptly addressing any issues,
          farmers can ensure the well-being and productivity of their corn
          crops.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>مکئی کی صحت (Healthy Corn)</Heading>
          <Description>
            <strong>تفصیل (Description):</strong> مکئی کی صحت والے پودے کسی بڑی
            بیماری سے پاک ہوتے ہیں اور ان کی تیز روئی اور ترقی کا اظہار ہوتا ہے۔
            یہ پودے ہرا ہرا پتوں اور مضبوط ڈنڈوں والے ہوتے ہیں جو بہترین فوٹو
            سنتھیسز اور مادے کے اپٹیکس کے لئے کردار ادا کرتے ہیں۔ مکئی کی صحت
            بلند فصلی اور معیاری اور معیاری انتاج حاصل کرنے کے لئے بہت اہم ہوتی
            ہے۔
            <Subheading>صحت مند مکئی کی خصوصیات:</Subheading>
            صحت مند مکئی کے پودے درج ذیل خصوصیات ظاہر کرتے ہیں:
          </Description>
          <List>
            <ListItem>
              پتے ہرے ہرے اور کوئی بھی داغ یا رنگ کی تبدیلی کے بغیر۔
            </ListItem>
            <ListItem>
              مضبوط اور مستحکم ڈنڈے جو پودوں اور کانوں کا وزن اٹھا سکتے ہیں۔
            </ListItem>
            <ListItem>
              پودوں کی شاداب اور یکساں بڑھاؤ، یہ اونچائی اور پتوں کے ترقی کا
              مسلسل اظہار کرتا ہے۔
            </ListItem>
            <ListItem>
              جھکنے یا مڑنے والے پتے کی عدم موجودگی، جو کافی پانی کی اپٹیکس کو
              ظاہر کرتا ہے۔
            </ListItem>
            <ListItem>صحیح کرنلز والے مکئی کے تیار شدہ کانے۔</ListItem>
            <ListItem>
              پودوں کے درمیان کافی فاصلہ جس سے ہر پودا سورج کی روشنی اور مادے
              کوئی مقابلہ کے بغیر حاصل کر سکتا ہے۔
            </ListItem>
          </List>
          <Subheading>مکئی کی صحت کی حفاظت:</Subheading>
          مکئی کے پودوں کو صحت مند رکھنے کے لئے کسانوں کو درج ذیل اقدامات اٹھانے
          چاہئے:
          <List>
            <ListItem>
              <strong>1. صحیح آبپاشی:</strong> مسلسل اور مناسب آبپاشی کا فائدہ
              اٹھانے کے لئے ترتیب دینا۔ کافی پانی کی فراہمی مکئی کی ترقی اور صحت
              کے لئے اہم ہے۔
            </ListItem>
            <ListItem>
              <strong>2. عناصر کا انتظام:</strong> کھاد اور مٹی کے زرخیز بنیادی
              عناصر فراہم کرنے کے ذرائع سے ضروری عناصر، شامل ہونے چاہئے۔ معتدل
              غذائیت مکئی کی صحت کو حمایت کرتی ہے اور بیماری کے خلاف مدافعت میں
              مدد فراہم کرتی ہے۔
            </ListItem>
            <ListItem>
              <strong>3. کیڑے اور بیماریوں کی نگرانی:</strong> مکئی کے پودوں کو
              کیڑوں یا بیماریوں کی کوئی علامت کے لئے باقاعدہ معائنہ کریں۔ جلدی
              شناخت کی صورت میں بروقت اقدامات سے فائدہ حاصل ہوتا ہے اور مسئلے کے
              پھیلنے سے بچا یا روکتا ہے۔
            </ListItem>
            <ListItem>
              <strong>4. کراپ روٹیشن:</strong> غیر میزبان پودوں کے ساتھ کراپ
              روٹیشن کا عمل کریں تاکہ مٹی میں بیماری کی بڑھوتری کے خطرے کو کم
              کیا جائے اور مٹی کی صحت کو بہتر بنایا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>5. موسم کے معائنے:</strong> موسم کی حالت کو مد نظر رکھیں
              اور فارمنگ کے طریقوں کو مطابقت کے ساتھ تبدیل کریں تاکہ بہت زیادہ
              موسمی حالات کی بنا پر واقعی امکانات کے خطرے کم ہوں۔
            </ListItem>
          </List>
          <Subheading>مختصر:</Subheading>
          صحت مند مکئی کا نیلامی موسم بھر کے کسان کے لئے ایک کامیاب بارگر ہے۔
          مناسب زرخیزی کے عملات کا مطالعہ کرتے ہوئے اور فوراً کسی بھی مسئلے کا
          سامنا کرکے، کسان مکئی کی فصل کی صحت اور پیداوار کی کفایت و برکت کو
          یقینی بنا سکتے ہیں۔
        </Container>
      </Urdu>
    </>
  );
}
