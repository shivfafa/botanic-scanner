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

export default function WheatHealthPrecautions() {
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
          <Heading>Healthy Wheat (صحیح گندم)</Heading>
          <Description>
            <strong>Description:</strong> Healthy wheat plants are essential for
            a successful wheat crop. These plants exhibit vigorous growth and
            are free from significant diseases. They have lush green leaves and
            strong stems, contributing to efficient photosynthesis and nutrient
            uptake. Maintaining the health of wheat plants is crucial for
            achieving high yields and premium quality wheat.
            <Subheading>Characteristics of Healthy Wheat:</Subheading>
            Healthy wheat plants demonstrate the following characteristics:
          </Description>
          <List>
            <ListItem>
              Vibrant and lush green leaves without any visible signs of pests
              or diseases.
            </ListItem>
            <ListItem>
              Strong and well-developed stems capable of supporting the grain
              effectively.
            </ListItem>
            <ListItem>
              Uniform and consistent growth with well-distributed tillers and
              spikelets.
            </ListItem>
            <ListItem>
              Absence of wilting or yellowing leaves, indicating sufficient
              water and nutrient supply.
            </ListItem>
            <ListItem>
              Well-filled and fully matured grain heads with healthy, plump
              wheat kernels.
            </ListItem>
            <ListItem>
              Proper spacing between plants to allow optimal sunlight exposure
              and airflow.
            </ListItem>
          </List>
          <Subheading>Maintaining Wheat Health:</Subheading>
          To ensure the health of wheat plants, farmers should implement the
          following practices:
          <List>
            <ListItem>
              <strong>1. Adequate Watering:</strong> Maintain a consistent and
              appropriate irrigation schedule to meet the water demands of wheat
              plants throughout their growth stages.
            </ListItem>
            <ListItem>
              <strong>2. Nutrient Management:</strong> Provide the necessary
              nutrients, including nitrogen, phosphorus, and potassium, through
              fertilizers and soil amendments to support healthy growth and
              grain development.
            </ListItem>
            <ListItem>
              <strong>3. Pest and Disease Control:</strong> Regularly monitor
              wheat plants for signs of pests and diseases. Timely intervention
              with appropriate measures can prevent damage and improve plant
              health.
            </ListItem>
            <ListItem>
              <strong>4. Weed Management:</strong> Implement effective weed
              control strategies to reduce competition for nutrients and water,
              ensuring wheat plants receive adequate resources for growth.
            </ListItem>
            <ListItem>
              <strong>5. Climate Adaptation:</strong> Be aware of weather
              conditions and adjust farming practices accordingly to minimize
              risks posed by extreme weather events.
            </ListItem>
          </List>
          <Subheading>Conclusion:</Subheading>
          Healthy wheat plants lay the foundation for a successful wheat
          harvest. By adopting proper agricultural practices and promptly
          addressing any issues, farmers can ensure the well-being and
          productivity of their wheat crops.
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>صحت مند گندم (Healthy Wheat)</Heading>
          <Description>
            <strong>تفصیل:</strong> صحت مند گندم کا پودا کامیاب گندم کا کاشت
            کرنے کے لئے اہم ہے۔ یہ پودے شدید اضافے کی نشو و نما اور کوئی بڑی
            بیماریوں سے آزاد ہوتے ہیں۔ ان میں شاداب سبز پتے اور مضبوط دنبے شامل
            ہوتے ہیں، جو فوٹو سنتھیسز اور معدنیات کو بہتر بناتے ہیں۔ گندم کے
            پودوں کی صحت کی حفاظت اچھی انصاف سے اچھی پیداوار اور عمدہ معیار کے
            گندم کے حصول کے لئے اہم ہے۔
            <Subheading>صحت مند گندم کی خصوصیات:</Subheading>
            صحت مند گندم کے پودے مندرجہ ذیل خصوصیات ظاہر کرتے ہیں:
          </Description>
          <List>
            <ListItem>
              کیچڑیں اور شاداب سبز پتے جو کوئی کیڑے مکھی کی علامات بغیر ہیں۔
            </ListItem>
            <ListItem>
              مضبوط اور بڑھتے ہوئے دنبے جو دانے کو مضبوطی سے سپورٹ کر سکتے ہیں۔
            </ListItem>
            <ListItem>
              مساوی اور مستقل نشو و نما جس میں دنبوں اور کانٹوں کو اچھی طرح
              پھیلایا گیا ہے۔
            </ListItem>
            <ListItem>
              بھگتے ہوئے یا پیلا پتے نہ ہونے کی وجہ سے دنبے جاتے نہیں ہیں، جو
              کافی پانی کی فراہمی کی بات کرتا ہے۔
            </ListItem>
            <ListItem>
              بھری ہوئی اور مکمل رسیدہ دانے جن میں صحیح، گیندار گندم کے دانے
              ہوتے ہیں۔
            </ListItem>
            <ListItem>
              پودوں کے درمیان درست فاصلہ تاکہ ان کو مطلوبہ دھوپ اور ہوا کا
              اندازہ ہوسکے۔
            </ListItem>
          </List>
          <Subheading>صحت مند گندم کی حفاظت:</Subheading>
          صحت مند گندم کے پودوں کی حفاظت کے لئے، کسانوں کو مندرجہ ذیل تدابیر کو
          انجام دینا چاہئے:
          <List>
            <ListItem>
              <strong>1. کافی پانی دینا:</strong> گندم کے پودوں کی نشو و نما کے
              مختلف مراحل میں پانی کی مطلوبہ فراہمی کے لئے ایک مستقل اور مناسب
              آبپاشی شیڈول قائم رکھنا۔
            </ListItem>
            <ListItem>
              <strong>2. عناصر غذائی کا انتظام:</strong> نائٹروجن، فاسفورس، اور
              پوٹاش کے ذرائع کے ذریعہ کامیاب روئیدگی اور دانے کے ترقی کو مدد
              فراہم کرنے کے لئے ضروری عناصر غذائی کی فراہمی کرنا۔
            </ListItem>
            <ListItem>
              <strong>3. کیڑے مکھی اور بیماری کا انتظام:</strong> گندم کے پودوں
              کو کیڑے مکھی اور بیماریوں کی علامات کے لئے بنیادی معائنہ کرتے
              رہنا۔ مناسب تداخل کے ساتھ مناسب تدابیر سے فوری اقدامات، نقصان کو
              روک سکتے ہیں اور پودوں کی صحت کو بہتر بنا سکتے ہیں۔
            </ListItem>
            <ListItem>
              <strong>4. گھاسوں کا انتظام:</strong> گھاسوں کو کم کرنے کے کارآمد
              طریقے انجام دینے سے گندم کے پودوں کے لئے غذائی عناصر اور پانی کے
              لئے رقابت کم ہوتی ہے، یقینی بنانے کے لئے کہ گندم کے پودے کو کامیاب
              گندم کے لئے مطلوبہ وسائل فراہم ہوتے ہیں۔
            </ListItem>
            <ListItem>
              <strong>5. آب و ہوا کے موافقتی اندازہ:</strong> موسمی حالات کا
              خیال رکھیں اور ان کے مطابق کاشتی ممارسات کو تبدیل کریں تاکہ
              انتہائی موسمی حوادث کے پیداوار پر پیداوار کو کم سے کم کریں۔
            </ListItem>
          </List>
          <Subheading>ختم کرنا:</Subheading>
          صحت مند گندم کے پودے کا انجام گندم کے کامیاب کٹائی کے لئے بنیاد رکھتے
          ہیں۔ مناسب زرعی ممارسات اپنانے اور کسی بھی مسئلے کا فوری سامنا کرنے سے
          کسان گندم کے کاشت کی صحت اور پیداوار کی تنظیم کی یقینی بنا سکتے ہیں۔
        </Container>
      </Urdu>
    </>
  );
}
