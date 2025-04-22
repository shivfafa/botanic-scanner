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
          <Heading>Healthy Rice Plants</Heading>
          <Description>
            <strong>Description:</strong> Healthy rice plants are essential for
            achieving a high-quality and abundant rice yield. These plants
            exhibit robust growth and possess certain characteristics that
            indicate their well-being. Ensuring the health of rice plants is
            crucial for maximizing productivity and grain quality.
            <Subheading>Characteristics of Healthy Rice Plants:</Subheading>
            Healthy rice plants display the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant green leaves without any visible lesions, spots, or
              discolorations.
            </ListItem>
            <ListItem>
              Strong and sturdy stems that can support the weight of the
              panicles and resist lodging.
            </ListItem>
            <ListItem>
              Uniform and dense panicle formation, with consistent grain filling
              and development.
            </ListItem>
            <ListItem>
              Absence of wilting or drooping leaves, indicating sufficient water
              uptake.
            </ListItem>
            <ListItem>
              Well-established root system that facilitates nutrient absorption
              and overall plant stability.
            </ListItem>
            <ListItem>
              Adequate spacing between plants, allowing each plant to access
              sunlight and nutrients efficiently.
            </ListItem>
          </List>
          <Subheading>Maintaining Rice Plant Health:</Subheading>
          To ensure rice plants remain healthy, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Proper Irrigation:</strong> Maintain a consistent and
              appropriate irrigation schedule to ensure the rice plants receive
              adequate water without waterlogging the soil.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, especially nitrogen, phosphorus, and potassium, through
              suitable fertilizers and soil amendments.
            </ListItem>
            <ListItem>
              <strong>3. Weed Control:</strong> Keep the rice fields free from
              weeds, as they compete with the crop for nutrients and can harbor
              pests and diseases.
            </ListItem>
            <ListItem>
              <strong>4. Pest and Disease Monitoring:</strong> Regularly inspect
              rice plants for signs of pests or diseases and take prompt action
              to prevent their spread.
            </ListItem>
            <ListItem>
              <strong>5. Harvesting at the Right Time:</strong> Harvest rice at
              the appropriate maturity to ensure maximum grain quality and
              yield.
            </ListItem>
            <ListItem>
              <strong>6. Soil Health:</strong> Maintain soil health through
              organic matter addition and sustainable farming practices,
              promoting better nutrient availability for the crop.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy rice plants are crucial for a successful rice harvest. By
          employing proper agricultural practices and giving due attention to
          their well-being, farmers can enhance the productivity and quality of
          their rice crops, contributing to a thriving rice industry.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>چاول کے صحت مند پودے</Heading>
          <Description>
            <strong>تفصیل:</strong> چاول کے صحت مند پودے بڑے حیثیت سے بہترین اور
            کثرت سے پیداوار حاصل کرنے کے لئے بہت اہم ہیں۔ یہ پودے مضبوط اور
            مستحکم ترقی اور خصوصیات رکھتے ہیں جو ان کی صحت کی علامتیں ہیں۔ چاول
            کے پودوں کی صحت کی حفاظت کرنا پیداوار اور ان کی کفایت و برکت کو
            بڑھانے کے لئے اہم ہے۔
            <Subheading>صحت مند چاول کے پودوں کی خصوصیات:</Subheading>
            صحت مند چاول کے پودے درج ذیل خصوصیات ظاہر کرتے ہیں:
          </Description>
          <List>
            <ListItem>
              پتے ہرے ہرے اور کوئی بھی داغ، نشان یا رنگ کی تبدیلی کے بغیر۔
            </ListItem>
            <ListItem>
              مضبوط اور مستحکم تنے جو پنیکل کے بوجھ کو اٹھا سکتے ہیں اور لٹکنے
              کا مقابلہ کر سکتے ہیں۔
            </ListItem>
            <ListItem>
              موحد اور مضبوط پنیکل کی تشکیل، یہ مسلسل اناج کی بھرائی اور ترقی کا
              مستقل اظہار کرتے ہیں۔
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
          <Subheading>چاول کے پودوں کی صحت کی حفاظت:</Subheading>
          چاول کے پودوں کو صحت مند رکھنے کے لئے کسانوں کو درج ذیل اقدامات اٹھانے
          چاہئیں:
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
              کیونکہ وہ چاول کے لئے مواد کے لئے مسابقت کرتے ہیں اور کیڑوں اور
              بیماریوں کو محو کر سکتے ہیں۔
            </ListItem>
            <ListItem>
              <strong>4. کیڑے اور بیماریوں کی نگرانی:</strong> چاول کے پودوں کو
              کیڑوں یا بیماریوں کی علامتوں کے لئے باقاعدہ معائنہ کریں اور جلدی
              شناخت کی صورت میں فوراً اقدامات اٹھائیں تاکہ ان کی پھیلائیں روکی
              یا کم کی جائیں۔
            </ListItem>
            <ListItem>
              <strong>5. موسم کے معائنے:</strong> چاول کو مناسب رپت میں کٹی گئی
              ہونے دیں تاکہ زیادہ سے زیادہ اناج کی کفایت و برکت حاصل کی جا سکے۔
            </ListItem>
            <ListItem>
              <strong>6. مٹی کی صحت:</strong> مٹی کی صحت کو کھیتر کے ذرائع کے
              ذریعہ بہتر بنائیں، زرخیزی کے اضافہ کریں اور مستحکم فارمنگ عملات کے
              ذریعہ مٹی کے عناصر کو بہتر دستیاب بنائیں۔
            </ListItem>
          </List>
          <Subheading>مختصر:</Subheading>
          صحت مند چاول کسانی کے کامیاب حصول کی بنیاد ہے۔ مناسب زرخیزی کے زراعتی
          عملات کا اطلاق کرتے ہوئے اور فوراً مسائل کا سامنا کرکے، کسان چاول کی
          فصل کی صحت اور اناج کی کفایت و برکت کو بڑھا سکتے ہیں، جس سے چاول کی
          تجارتی صنعت میں اضافہ ہوتا ہے۔
        </Container>
      </Urdu>
    </>
  );
}
