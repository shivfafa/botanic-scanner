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
          <Heading>Healthy Sugarcane (صحت مند گنا)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> Healthy sugarcane plants are
            vital for achieving a high-quality and abundant sugarcane yield.
            These plants exhibit robust growth and possess certain
            characteristics that indicate their well-being. Ensuring the health
            of sugarcane is essential for maximizing productivity and sugar
            content.
            <Subheading>Characteristics of Healthy Sugarcane:</Subheading>
            Healthy sugarcane plants display the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant green leaves without any visible lesions, spots, or
              discolorations.
            </ListItem>
            <ListItem>
              Strong and thick canes that can support the weight of the plant
              and resist lodging.
            </ListItem>
            <ListItem>
              Uniform and rapid growth of the plant, with consistent height and
              cane development.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              uptake.
            </ListItem>
            <ListItem>
              Well-developed roots that facilitate nutrient absorption and
              overall plant stability.
            </ListItem>
            <ListItem>
              Adequate spacing between plants, allowing each plant to access
              sunlight and nutrients efficiently.
            </ListItem>
          </List>
          <Subheading>Maintaining Sugarcane Health:</Subheading>
          To ensure sugarcane plants remain healthy, farmers should implement
          the following practices:
          <List>
            <ListItem>
              <strong>1. Proper Irrigation:</strong> Maintain a consistent and
              appropriate irrigation schedule to ensure the sugarcane receives
              adequate water without waterlogging the soil.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, especially nitrogen, phosphorus, and potassium, through
              suitable fertilizers and soil amendments.
            </ListItem>
            <ListItem>
              <strong>3. Weed Control:</strong> Keep the sugarcane field free
              from weeds, as they compete with the crop for nutrients and can
              harbor pests and diseases.
            </ListItem>
            <ListItem>
              <strong>4. Pest and Disease Monitoring:</strong> Regularly inspect
              sugarcane plants for signs of pests or diseases and take prompt
              action to prevent their spread.
            </ListItem>
            <ListItem>
              <strong>5. Harvesting at the Right Time:</strong> Harvest
              sugarcane at the appropriate maturity to ensure maximum sugar
              content and yield.
            </ListItem>
            <ListItem>
              <strong>6. Soil Health:</strong> Maintain soil health through
              organic matter addition and sustainable farming practices,
              promoting better nutrient availability for the crop.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy sugarcane is the backbone of a successful sugarcane harvest.
          By employing proper agricultural practices and giving due attention to
          its well-being, farmers can enhance the productivity and quality of
          their sugarcane crops, contributing to a thriving sugarcane industry.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>گنا کی صحت (Healthy Sugarcane)</Heading>
          <Description>
            <strong>تفصیل (Description):</strong> صحت مند گنا کے پودے بڑے حیثیت
            سے شیرہ نکالنے کے لئے بہترین اور کثرت سے پیداوار حاصل کرنے کے لئے
            بہت اہم ہیں۔ یہ پودے مضبوط اور مستحکم ترقی اور خصوصیات رکھتے ہیں جو
            ان کی صحت کی علامتیں ہیں۔ گنے کی صحت کی حفاظت کرنا پیداوار اور شکر
            کی مواد کی بلندی کے لئے اہم ہے۔
            <Subheading>صحت مند گنے کی خصوصیات:</Subheading>
            صحت مند گنا کے پودے درج ذیل خصوصیات ظاہر کرتے ہیں:
          </Description>
          <List>
            <ListItem>
              پتے ہرے ہرے اور کوئی بھی داغ، نشان یا رنگ کی تبدیلی کے بغیر۔
            </ListItem>
            <ListItem>
              مضبوط اور موٹے دانے جو پودوں کا بوجھ اٹھا سکتے ہیں اور لٹکنے کا
              مقابلہ کر سکتے ہیں۔
            </ListItem>
            <ListItem>
              موحد اور تیز روئی پودوں کی ترقی، یہ یکسان اونچائی اور دانے کے ترقی
              کا مستقل اظہار کرتے ہیں۔
            </ListItem>
            <ListItem>
              جھکنے یا مڑنے والے پتے کی عدم موجودگی، جو کافی پانی کی اپٹیکس کو
              ظاہر کرتا ہے۔
            </ListItem>
            <ListItem>
              خوبصورت جڑوں جو مادے کو اپڈیٹ کرنے اور پودے کی مضبوطی کو فراہم
              کرتے ہیں۔
            </ListItem>
            <ListItem>
              پودوں کے درمیان کافی فاصلہ جس سے ہر پودا سورج کی روشنی اور مادے
              کوئی مقابلہ کے بغیر حاصل کر سکتا ہے۔
            </ListItem>
          </List>
          <Subheading>گنے کی صحت کی حفاظت:</Subheading>
          گنے کے پودوں کو صحت مند رکھنے کے لئے کسانوں کو درج ذیل اقدامات اٹھانے
          چاہئے:
          <List>
            <ListItem>
              <strong>1. صحیح آبپاشی:</strong> مناسب آبپاشی کا فراہمی کرنے کے
              لئے مسلسل اور مناسب آبپاشی کا ترتیب دیں بغیر زمین کو بھیگنے والا
              نہ ہو۔
            </ListItem>
            <ListItem>
              <strong>2. عناصر کا انتظام:</strong> کھاد اور مٹی کے زرخیز عناصر،
              خصوصاً نائٹروجن، فاسفورس اور پوٹاشیم کو مناسب کھاد اور مٹی کے
              ذرائع سے فراہم کریں۔
            </ListItem>
            <ListItem>
              <strong>3. جڑیں کا انتظام:</strong> زمین کو گھٹیا سے پاک رکھیں
              کیونکہ وہ گنے کے لئے مواد کے لئے مسابقت کرتے ہیں اور کیڑوں اور
              بیماریوں کو محو کر سکتے ہیں۔
            </ListItem>
            <ListItem>
              <strong>4. کیڑے اور بیماریوں کی نگرانی:</strong> گنے کے پودوں کو
              کیڑوں یا بیماریوں کی علامتوں کے لئے باقاعدہ معائنہ کریں اور جلدی
              شناخت کی صورت میں فوراً اقدامات اٹھائیں تاکہ ان کی پھیلائیں روکی
              یا کم کی جائیں۔
            </ListItem>
            <ListItem>
              <strong>5. موسم کے معائنے:</strong> گنے کو مناسب رپت میں کٹی گئی
              ہونے دیں تاکہ زیادہ سے زیادہ شکر کی مواد حاصل کی جا سکے۔
            </ListItem>
            <ListItem>
              <strong>6. مٹی کی صحت:</strong> مٹی کی صحت کو کھیتر کے ذرائع کے
              ذریعہ بہتر بنائیں، زرخیزی کے اضافہ کریں اور مستحکم فارمنگ عملات کے
              ذریعہ مٹی کے عناصر کو بہتر دستیاب بنائیں۔
            </ListItem>
          </List>
          <Subheading>مختصر:</Subheading>
          صحت مند گنا کسانی کے کامیاب حصول کی بنیاد ہے۔ مناسب زرخیزی کے زراعتی
          عملات کا اطلاق کرتے ہوئے اور فوراً مسائل کا سامنا کرکے، کسان گنے کی
          فصل کی صحت اور پیداوار کی کفایت و برکت کو یقینی بنا سکتے ہیں، جس سے
          گنے کی تجارتی صنعت میں اضافہ ہوتا ہے۔
        </Container>
      </Urdu>
    </>
  );
}
