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

export default function WYellowRustPrecautions() {
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
    <Heading>Wheat Yellow Rust (گندم کی پیلا زنگ)</Heading>
    <Description>
      <strong>Description (تفصیل):</strong> Wheat yellow rust, also known as
      stripe rust or Puccinia striiformis, is a fungal disease that affects
      wheat plants. The disease is caused by the fungus Puccinia striiformis,
      which spreads through windborne spores and infects wheat crops during
      cool and humid weather conditions.
      <Subheading>Symptoms (علامات):</Subheading>
      The symptoms of wheat yellow rust include:
    </Description>
    <List>
      <ListItem>Appearance of yellow or orange-colored stripes on the leaves.</ListItem>
      <ListItem>Reduced plant vigor and stunted growth.</ListItem>
      <ListItem>Formation of pustules containing yellow spores on the leaves.</ListItem>
      <ListItem>Premature yellowing and drying of infected leaves.</ListItem>
      <ListItem>Significant yield losses if not managed effectively.</ListItem>
    </List>
    <Subheading>Causes (وجہ):</Subheading>
    Wheat yellow rust is caused by the fungus Puccinia striiformis. The
    disease spreads through wind-dispersed spores and thrives in cool and
    humid weather conditions, especially during the growing season of wheat.
    <Subheading>Impact on Crops:</Subheading>
    Wheat yellow rust can have severe effects on wheat crops. The disease
    reduces the photosynthetic capacity of infected leaves, leading to a
    decrease in grain production. If not adequately managed, it can cause
    significant yield losses and affect food security.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for wheat yellow rust, several preventive
    and management measures can help control its spread and minimize
    damage. These measures include:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties:</strong> Planting wheat varieties
        that show resistance to yellow rust can help reduce disease
        incidence.
      </ListItem>
      <ListItem>
        <strong>2. Timely Planting:</strong> Optimal planting times and
        avoiding late planting can minimize exposure to favorable
        conditions for the disease.
      </ListItem>
      <ListItem>
        <strong>3. Crop Rotation:</strong> Implementing crop rotation
        practices can break the disease cycle and reduce the buildup of
        fungal spores in the soil.
      </ListItem>
      <ListItem>
        <strong>4. Monitoring:</strong> Regularly monitor wheat fields for
        early signs of yellow rust to take timely action.
      </ListItem>
      <ListItem>
        <strong>5. Fungicides:</strong> Fungicides like Tebuconazole,
        Propiconazole, and Epoxiconazole can be used to manage the disease.
        Consult agricultural experts for proper fungicide selection and
        application guidelines.
      </ListItem>
    </List>
    <Subheading>Fertilizers:</Subheading>
    The use of fertilizers can help improve the overall health and
    resistance of wheat plants to yellow rust. Consider the following
    fertilizers:
    <Description>
      <List>
        <ListItem>Urea: Provides nitrogen, essential for wheat growth and development.</ListItem>
        <ListItem>Ammonium Nitrate: Supplies nitrogen and promotes healthy foliage.</ListItem>
      </List>
    </Description>
    <Subheading>Pesticides:</Subheading>
    Proper application of pesticides can be beneficial in managing wheat
    yellow rust. Consider using the following pesticides:
    <Description>
      <List>
        <ListItem>Tebuconazole: Effective in controlling wheat yellow rust.</ListItem>
        <ListItem>Propiconazole: Provides protection against the disease.</ListItem>
        <ListItem>Epoxiconazole: Controls and prevents yellow rust infection.</ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>Early Detection of Wheat Yellow Rust:</Subheading>
      <strong>Fertilizers:</strong>
      <List>
        <ListItem>
          Increase the application of nitrogen-based fertilizers, such as
          urea or ammonium nitrate, to support the wheat's recovery and
          strengthen its resistance to disease.
        </ListItem>
      </List>
      <strong>Pesticides:</strong>
      <List>
        <ListItem>
          Apply a targeted fungicide like Tebuconazole, Propiconazole, or
          Epoxiconazole immediately after detecting wheat yellow rust
          symptoms. Early intervention can prevent the spread of the disease
          to other plants and minimize damage.
        </ListItem>
      </List>

      <Subheading>Severe Wheat Yellow Rust Outbreak:</Subheading>
      <strong>Fertilizers:</strong>
      <List>
        <ListItem>
          Use a balanced fertilizer that includes essential nutrients like
          nitrogen, phosphorus, and potassium to support the overall health of
          the wheat plants, as severe infections can deplete the plant's
          nutrient reserves.
        </ListItem>
      </List>
      <strong>Pesticides:</strong>
      <List>
        <ListItem>
          In cases of severe wheat yellow rust outbreaks, consult with
          agricultural experts or extension services for appropriate pesticide
          recommendations. They may suggest a combination of fungicides to
          manage the disease effectively.
        </ListItem>
      </List>
    </Description>
    <Subheading>Disease Resistance and Crop Rotation:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, indirectly enhancing the plant's disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the fungal population. Implement crop
        rotation practices to break the disease cycle and minimize the
        recurrence of wheat yellow rust.
      </ListItem>
    </List>

    <Subheading>Weather and Environmental Factors:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on
        weather conditions. During periods of excessive rainfall, consider
        reducing nitrogen applications to prevent leaching and potential
        environmental issues.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply fungicides
        proactively when conditions are favorable for wheat yellow rust
        development.
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
    <Description>
      It is essential to follow the recommended application rates and
      timings to avoid any negative effects on the environment and non-target
      organisms. Consult with agricultural experts or local extension
      services for proper usage guidelines and safety precautions.
    </Description>
  </Container>
</English>;

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
  <Container>
    <Heading>گندم کی پیلا زنگ (Wheat Yellow Rust)</Heading>
    <Description>
      <strong>تفصیل:</strong> گندم کی پیلا زنگ یا اسٹرائپ رسٹ، ایک کھپر کی بیماری ہے جو گندم کے پودوں کو متاثر کرتی ہے۔ یہ بیماری کھپر کی ایک خصوصی قسم ہوتی ہے جو ہوا سے پھیلتی ہوئی کھپر کی سپورز کے ذریعہ گندم کے کاشتکاری کو متاثر کرتی ہے، خاص طور پر ٹھنڈی اور نمی دار موسمیاتی حالات میں۔
      <Subheading>علامات:</Subheading>
      گندم کی پیلا زنگ کی علامات میں شامل ہیں:
    </Description>
    <List>
      <ListItem>پتوں پر پیلا یا نارنجی رنگ کے دھاریوں کی پیدائش۔</ListItem>
      <ListItem>متاثرہ پودوں کی تاقوند شدہ زندگی اور رکاوٹی بڑھتی۔</ListItem>
      <ListItem>پتوں پر پیلا رنگ کے سپورز دار کھپروں کے بننے کا امکان۔</ListItem>
      <ListItem>متاثرہ پتے کی جلد کا سفید ہو جانا اور سکڑ جانا۔</ListItem>
      <ListItem>متاثرہ پودوں کی کمی اگر ترقی کیلئے منظمیت نہ کی جائے۔</ListItem>
    </List>
    <Subheading>وجوہات:</Subheading>
    گندم کی پیلا زنگ کی وجہ فنگس Puccinia striiformis ہے۔ یہ بیماری ہوا سے پھیلتے سپورز کے ذریعہ گندم کے کاشتکاری کو متاثر کرتی ہے، خاص طور پر گندم کے اگانے کے دوران ٹھنڈی اور نمی دار موسمیاتی حالات میں۔
    <Subheading>فصلوں پر اثرات:</Subheading>
    گندم کی پیلا زنگ گندم کی فصلوں پر شدید اثرات ڈال سکتی ہے۔ یہ بیماری متاثرہ پتوں کی تصویری اختلاف کرنے کی صلاحیت کو کم کرتی ہے، جس سے گھٹیا پیداوار کا شکار ہوتا ہے۔ اگر اس کا مناسب انتظام نہ کیا جائے تو یہ کھاپر کیلئے بڑے نقصانات کا باعث بن سکتی ہے اور خوراک کی حفاظت پر اثر انداز کرسکتی ہے۔
    <Subheading>روک تھام اور نظم و ضبط:</Subheading>
    گندم کی پیلا زنگ کے لئے کوئی مخصوص علاج نہیں ہوتا، لیکن اس کے پھیلاؤ کو روکنے اور نقصان کم کرنے کے لئے کئی روک تھام اور نظم و ضبطی تدابیر مدد فراہم کر سکتی ہیں۔ ان تدابیر میں شامل ہیں:
    <List>
      <ListItem>
        <strong>1. مزاحمت کی اقسام:</strong> گندم کی پیلا زنگ سے متاثرہ نہ ہونے والی گندم کی اقسام کا کاشت کرنا بیماری کی تعداد کو کم کر سکتا ہے۔
      </ListItem>
      <ListItem>
        <strong>2. وقتی کاشت:</strong> مناسب کاشت کے اوقات کا پالن کرنا اور دیر سے کاشت کو اجتناب کرنا بیماری کے لئے موزوں حالات کا انسٹیمال کرتا ہے۔
      </ListItem>
      <ListItem>
        <strong>3. فصلی دوران کاشت:</strong> کھیپ کے چکر کو توڑنے کے لئے فصلی دوران کاشت کے تدابیر کو عمل میں لانا۔
      </ListItem>
      <ListItem>
        <strong>4. معائنہ:</strong> گندم کے کھیتوں کو مسلسل طور پر معائنہ کریں تاکہ پیلا زنگ کے ابتدائی علامات کا تعاقب کیا جاسکے۔
      </ListItem>
      <ListItem>
        <strong>5. کیٹا کشیں:</strong> ٹیبیوکونیزول، پروپیکونیزول اور ایپوکسی کونیزول جیسے کیٹا کشیں بیماری کے انتظام میں مدد فراہم کر سکتی ہیں۔ ان کاشتکاری ماہرین سے مناسب کیٹا کشیں کے انتخاب اور استعمال کے لئے مشورہ لیں۔
      </ListItem>
    </List>
    <Subheading>کھاد (Fertilizers):</Subheading>
    کھاد کا استعمال گندم کے پودوں کی صحت اور مضبوطی کو بہتر بنا سکتا ہے۔ نیچے دیئے گئے کھاد کے استعمال کو مد نظر رکھیں:
    <Description>
      <List>
        <ListItem>یوریا: گندم کی ترقی اور ترقی کے لئے ضروری نائٹروجن فراہم کرتا ہے۔</ListItem>
        <ListItem>ایمونیم نائٹریٹ: نائٹروجن فراہم کرتا ہے اور صحیح پتوں کی ترویج کو مدد فراہم کرتا ہے۔</ListItem>
      </List>
    </Description>
    <Subheading>کیڑے ماردار (Pesticides):</Subheading>
    کیڑے ماردار کے مستند اطلاق کا درست استعمال گندم کی پیلا زنگ کے انتظام میں مدد فراہم کر سکتا ہے۔ نیچے دیئے گئے کیڑے ماردار کے استعمال کو مد نظر رکھیں:
    <Description>
      <List>
        <ListItem>ٹیبیوکونیزول: گندم کی پیلا زنگ کو کنٹرول کرنے میں موثر ہوتا ہے۔</ListItem>
        <ListItem>پروپیکونیزول: بیماری سے بچاو کے لئے محفوظ کیڑے ماردار۔</ListItem>
        <ListItem>ایپوکسی کونیزول: گندم کے پودوں کی جلد پر فنگس کی روک تھام اور روکنے کے لئے۔</ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>گندم کی پیلا زنگ کی جلدی شناخت:</Subheading>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          گندم کی ترقی کو مدد فراہم کرنے اور بیماری کے خلاف مضبوطی فراہم کرنے کے لئے نائٹروجن پر مبنی کھاد کے اطلاق کو بڑھائیں۔
        </ListItem>
      </List>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          گندم کی پیلا زنگ کے علامات کا تشخیص کرتے ہی ٹیبیوکونیزول، پروپیکونیزول یا ایپوکسی کونیزول جیسے مخصوص کیڑے ماردار کا اطلاق کریں۔ ابتدائی مداخلت کے زریعہ بیماری کے پھیلاؤ کو روکا جاسکتا ہے اور دیگر پودوں کو متاثرہ کرنے کے نقصانات کو کم کرسکتا ہے۔
        </ListItem>
      </List>

      <Subheading>شدید گندم کی پیلا زنگ کے انداز براعظم:</Subheading>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          گہری گندم کی پیلا زنگ کے انداز براعظم کے مقابلے میں، کلورین، فاسفورس اور پوٹاشیم جیسی ضروری عناصر شامل کرتی ہے جو گندم کے پودوں کی کلیجی کے صحیح حصول کو مدد فراہم کرتے ہیں۔
        </ListItem>
      </List>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          شدید گندم کی پیلا زنگ کے انداز براعظم کے مواقع میں، کاشتکاری ماہرین یا توسیعی خدمات سے مناسب کیڑے ماردار کے تجویزات کے لئے رابطہ کریں۔ وہ تدابیر کا استعمال کرنے کی تجاویز دے سکتے ہیں جو بیماری کا موازنہ کرنے کے لئے نظامی اور حفاظتی کیڑے ماردار کا استعمال کرتی ہیں۔
        </ListItem>
      </List>
    </Description>
    <Subheading>بیماری مزاحمت اور کھیپ کیٹائیں:</Subheading>
    <strong>کھاد (Fertilizers):</strong>
    <List>
      <ListItem>
        مٹی کی صحت اور زرخیزی کو بہتر بنانے کے لئے کمپوسٹ اور زرخیزی کو مٹی میں ملا کر زرخیزی کو بہتر بنائیں، جو پودوں کی بیماری مزاحمت کو بہتر بنا سکتا ہے۔
      </ListItem>
    </List>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        کیڑے ماردار کے اقسام کے ساتھ کیٹا کشیں بدلنے سے فنگسی آبادی میں مزاحمت کے خطرے کو کم کرنے کے لئے۔ گندم کی پیلا زنگ کے دوران کھیپ کیٹائیں کے تجربے کو انجام دینے کے لئے کاشتکاری دوران کھیپ کیٹائیں کے تدابیر کو عمل میں لانے کا کوشش کریں اور گندم کی پیلا زنگ کے دوبارہ پیدائیش کو کم کریں۔
      </ListItem>
    </List>

    <Subheading>موسم اور ماحولیاتی عوامل:</Subheading>
    <strong>کھاد (Fertilizers):</strong>
    <List>
      <ListItem>
        موسمیاتی حالات کے موافق وقت اور شرح کھاد کے اطلاق کو موافق بنانے کے لئے ترتیب دیں۔ کثرت سے برساتی موسم کے دوران نائٹروجن کے اطلاق کو کم کرنے اور اس سے نکسانات کی بنا پر محیطی مسائل کو روکنے پر غور کریں۔
      </ListItem>
    </List>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        موسمی حالات کے تنبیہات اور بیماری کے خطرے کے اطلاق کو موافق بنانے کے لئے افتتاحی مداخلت کا عمل۔
      </ListItem>
    </List>
    <Subheading>مقامی طریقہ کار اور حفاظتی تدابیر:</Subheading>
    <p>
      کھاد اور کیڑے ماردار کے استعمال کے بارے میں مقامی طریقہ کار اور حفاظتی مشورے کا خیال رکھیں۔
    </p>
    <p>
      فنگس کشی اور کیڑے ماردار کے استعمال کے دوران خود محافظتی تجهیزات (PPE) اور مناسب اطلاقی تکنیک استعمال کریں۔
    </p>
  </Container>
</Urdu>;


    </>
  );
}
