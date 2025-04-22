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

export default function GrayLeafPrecautions() {
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
          <Heading>Gray Leaf Spot (مکئی میں گرے لیف اسپاٹ)</Heading>
          <Description>
            <strong>Description (تفصیل):</strong> Gray leaf spot, also known as
            Cercospora zeae-maydis, is a foliar fungal disease that affects corn
            plants. The disease is caused by the fungus Cercospora zeae-maydis,
            which infects the leaves of corn. Gray leaf spot appears as small,
            rectangular or elliptical lesions with gray centers and dark brown
            borders on the leaves. These lesions tend to enlarge and coalesce,
            leading to significant damage if not managed properly.
            <Subheading>Symptoms (علامات):</Subheading>
            The symptoms of gray leaf spot disease include:
          </Description>
          <List>
            <ListItem>
              Formation of small, rectangular or elliptical lesions with gray
              centers and dark brown borders on the leaves.
            </ListItem>
            <ListItem>
              Lesions may coalesce, leading to larger areas of damaged tissue on
              the leaves.
            </ListItem>
            <ListItem>Yellowing of the areas surrounding the lesions.</ListItem>
            <ListItem>
              Premature senescence and death of affected leaves in severe cases.
            </ListItem>
            <ListItem>
              Reduced photosynthetic capacity and potential yield loss.
            </ListItem>
          </List>
          <Subheading>Causes (وجہ):</Subheading>
          Gray leaf spot is caused by the fungus Cercospora zeae-maydis. The
          fungus thrives in warm and humid conditions, making it more prevalent
          during periods of high moisture and moderate temperatures.
          <Subheading>Impact on Crops:</Subheading>
          Gray leaf spot can have significant negative effects on corn crops.
          The disease reduces the photosynthetic area of the plant, affecting
          its ability to produce energy and nutrients. Severe infections can
          lead to premature defoliation, reduced grain fill, and ultimately,
          reduced crop yield and quality.
          <Subheading>Prevention and Management:</Subheading>
          While complete eradication of gray leaf spot may not be possible,
          various preventive and management strategies can help control its
          spread and minimize its impact on corn crops. These measures include:
          <List>
            <ListItem>
              <strong>1. Resistant Varieties:</strong> Plant corn varieties that
              show resistance to gray leaf spot disease. Resistant plants can
              tolerate the infection better and may exhibit milder symptoms.
            </ListItem>
            <ListItem>
              <strong>2. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to break the disease cycle and reduce the buildup
              of the fungus in the soil.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Apply fungicides containing active
              ingredients like Azoxystrobin, Propiconazole, or Trifloxystrobin
              as preventive measures. Consult agricultural experts for proper
              fungicide selection and application guidelines.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overhead irrigation
              and minimize leaf wetness to create unfavorable conditions for the
              fungus to grow and spread.
            </ListItem>
            <ListItem>
              <strong>5. Timely Harvest:</strong> Harvest mature corn plants
              promptly to reduce the chances of the disease spreading from
              infected to healthy plants.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):
          </Subheading>
          The use of fertilizers and pesticides can play a role in managing gray
          leaf spot disease. Proper application of fertilizers can enhance the
          plant's overall health and resilience, while targeted fungicide use
          can help control the spread of the disease. Consider the following
          fertilizers and pesticides for managing gray leaf spot:
          <Description>
            <strong>Fertilizers (کھاد):</strong>
            <List>
              <ListItem>
                Potassium Sulfate: Provides essential potassium, supporting the
                plant's resistance to diseases and overall vigor.
              </ListItem>
              <ListItem>
                Potassium Nitrate: Supplies necessary potassium and nitrogen for
                healthy foliage and improved plant growth.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (کیڑے ماردار):</strong>
            <List>
              <ListItem>
                Azoxystrobin: A systemic fungicide effective against gray leaf
                spot and other fungal diseases, providing preventive and
                curative control.
              </ListItem>
              <ListItem>
                Propiconazole: A protective and systemic fungicide that helps
                prevent and control gray leaf spot infections.
              </ListItem>
              <ListItem>
                Trifloxystrobin: Offers broad-spectrum protection against
                various fungal diseases, including gray leaf spot.
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>Early Detection of Gray Leaf Spot:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Increase the application of potassium-based fertilizers, such as
                Potassium Sulfate or Potassium Nitrate, to support the corn's
                recovery and strengthen its resistance to disease.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Apply a targeted fungicide like Azoxystrobin, Propiconazole, or
                Trifloxystrobin immediately after detecting gray leaf spot
                symptoms. Early intervention can prevent the spread of the
                disease to other plants and minimize damage.
              </ListItem>
            </List>
            <Subheading>Severe Gray Leaf Spot Outbreak:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Use a balanced fertilizer that includes essential nutrients like
                potassium, nitrogen, and phosphorus to support the overall
                health of the corn plants, as severe infections can deplete the
                plant's nutrient reserves.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                In cases of severe gray leaf spot outbreaks, consult with
                agricultural experts or extension services for appropriate
                pesticide recommendations. They may suggest a combination of
                systemic and protective fungicides to manage the disease
                effectively.
              </ListItem>
            </List>
            <Subheading>Disease Resistance and Crop Rotation:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Incorporate organic matter and compost into the soil to improve
                its health and fertility, which can indirectly enhance the
                plant's disease resistance.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Rotate pesticides with different modes of action to reduce the
                risk of developing resistance in the fungal population.
                Implement crop rotation practices to break the disease cycle and
                minimize the recurrence of gray leaf spot.
              </ListItem>
            </List>

            <Subheading>Weather and Environmental Factors:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Adjust the timing and rates of fertilizer applications based on
                weather conditions. During periods of excessive rainfall,
                consider reducing nitrogen applications to prevent leaching and
                potential environmental issues.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Monitor weather forecasts and disease risk alerts to apply
                fungicides proactively when conditions are favorable for gray
                leaf spot development.
              </ListItem>
            </List>
            <Subheading>Local Regulations and Safety:</Subheading>

            <p>
              Always follow local regulations and safety guidelines regarding
              the use of fertilizers and pesticides.
            </p>
            <p>
              Use personal protective equipment (PPE) and proper application
              techniques when handling and applying fertilizers and pesticides.
            </p>
          </Description>
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
          <Heading>مکئی میں گرے لیف اسپاٹ (Gray Leaf Spot)</Heading>
          <Description>
            <strong>تفصیل (Description):</strong> مکئی میں گرے لیف اسپاٹ جو کے
            Cercospora zeae-maydis کے نام سے بھی جانا جاتا ہے، ایک پتوں والی
            کھپیڈار بیماری ہے جو مکئی کے پودوں کو متاثر کرتی ہے۔ یہ بیماری
            کھپیڈار Cercospora zeae-maydis کی وجہ سے ہوتی ہے، جو مکئی کے پتوں کو
            متاثر کرتی ہے۔ گرے لیف اسپاٹ پتوں پر چھوٹے، مستطیل یا بیضوی لیسیوں
            کی صورت میں ظاہر ہوتا ہے جن کے درمیان گرے رنگ کے مراکز اور سیاہ
            بھورے حاشیے ہوتے ہیں۔ اگر ان لیسیوں کو مناسب طریقے سے کنٹرول نہ کیا
            جائے، تو یہ لیسیوں بڑھ کر ایک ساتھ مل جاتے ہیں اور مکئی کو نقصان
            پہنچاتے ہیں۔
            <Subheading>علامات (Symptoms):</Subheading>
            گرے لیف اسپاٹ بیماری کی علامات میں شامل ہیں:
          </Description>
          <List>
            <ListItem>
              پتوں پر چھوٹے، مستطیل یا بیضوی لیسیوں کی شکل بننا جن کے درمیان گرے
              رنگ کے مراکز اور سیاہ بھورے حاشیے ہوتے ہیں۔
            </ListItem>
            <ListItem>
              لیسیوں ایک ساتھ مل جاتے ہیں، جس سے پتوں کے متاثرہ علاقوں کا سائز
              بڑھ جاتا ہے۔
            </ListItem>
            <ListItem>پتوں کے متاثرہ علاقوں کے ارد گرد پیلا پڑ جانا۔</ListItem>
            <ListItem>
              زیادہ شدت والے معاملات میں متاثرہ پتوں کا جلدی سیاہ ہو جانا اور
              پتے کا سخت ہو کر ٹوٹ جانا۔
            </ListItem>
            <ListItem>
              متاثرہ پتوں کی تصویری قوت اور بھرنے کی قدرت میں کمی۔
            </ListItem>
          </List>
          <Subheading>وجہ (Causes):</Subheading>
          گرے لیف اسپاٹ کا باعث Cercospora zeae-maydis نامی کھپیڈار ہوتا ہے۔ یہ
          کھپیڈار گرم اور بھاپ آلود موسم میں بہتر پیدا ہوتا ہے، جس کی بنا پر یہ
          بیماری بارش کی اونچائی اور درمیانہ درجہ حرارت کے دوران زیادہ پائی جاتی
          ہے۔
          <Subheading>فصلیں پر اثرات (Impact on Crops):</Subheading>
          گرے لیف اسپاٹ مکئی کے فصلوں پر کمی کے اثرات کو مضبوطی سے محسوس کرتا
          ہے۔ یہ بیماری پودے کے پتوں کے فوٹو سنتھیس کے علاقے کو کم کرتی ہے، جس
          سے پودے کی قوت و قدرت میں اثر پڑتا ہے۔ شدید انتشارات سے پتوں کا جلدی
          سیاہ ہو جانا، دانے بھرنے میں کمی ہونا، اور نتیجتاً فصل کے اجزاء کا کمی
          کے باعث مکئی کی باقی فصل کی نمائندگی اور معیار پر برا اثر ہوتا ہے۔
          <Subheading>
            روک تھام اور انتظامات (Prevention and Management):
          </Subheading>
          گرے لیف اسپاٹ کو مکمل طور پر ختم کرنا ممکن نہیں ہوتا، لیکن اس کے
          پھیلاؤ کو کنٹرول کرنے اور مکئی کے فصلوں پر اس کے اثرات کو کم کرنے کے
          لئے مختلف روک تھام اور انتظامات کا استعمال کیا جا سکتا ہے۔ یہ تدابیر
          مندرجہ ذیل ہیں:
          <List>
            <ListItem>
              <strong>1. مزاحم جڑی بوٹیاں:</strong> مکئی کی ایسی نوعیتیں لگائیں
              جو گرے لیف اسپاٹ کے خلاف مزاحمت ظاہر کرتی ہیں۔ مزاحم جڑی بوٹیاں
              بیماری کے اثرات کو بہتر تحمل کرتی ہیں اور معمولی علامات ظاہر کرتی
              ہیں۔
            </ListItem>
            <ListItem>
              <strong>2. فصلوں کا روٹیشن:</strong> فصلوں کے روٹیشن کا استعمال بے
              اثرات پودے کے سائکل کو توڑ کر، زمین میں کھپیڈار کی بڑھتی ہوئی
              تعداد کو کم کرتا ہے۔
            </ListItem>
            <ListItem>
              <strong>3. کھپیڈار کیڈار کرنے والے مرکبات کا استعمال:</strong>{" "}
              کھپیڈار کیڈار کرنے والے مرکبات کو پریمیٹوی مداخلت کے طور پر
              لگائیں۔ یہ کھپیڈار کی پھیلاؤ کو روکنے اور کمی کرنے میں مدد کرتے
              ہیں۔ کھیتی کے ماہرین سے مناسب کھپیڈار کیڈار کرنے والے مرکبات کی
              تعیناتی اور اطلاقی مشورہ لیں۔
            </ListItem>
            <ListItem>
              <strong>4. مناسب آبپاشی:</strong> پودوں پر زبردست آبپاشی سے اجتناب
              کریں اور پتوں کو گیل ہونے کم کرنے کے لئے کوشش کریں تاکہ کھپیڈار کی
              نمو اور پھیلاؤ کو روکا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>5. بروقت کٹائی:</strong> مکمل کھیتوں کے پکے ہونے پر فصل کی
              بروقت کٹائی کریں تاکہ بیماری متاثرہ پودوں سے صحیح پودوں تک پھیل نہ
              سکے۔
            </ListItem>
          </List>
          <Subheading>
            کھاد اور کیڑے ماردار کا استعمال (Fertilizer and Pesticide Use):
          </Subheading>
          کھاد اور کیڑے ماردار کا استعمال گرے لیف اسپاٹ بیماری کے انتظام میں
          کردار ادا کر سکتا ہے۔ کھاد کا مناسب استعمال پودے کی مجموعی صحت اور
          مضبوطی کو بہتر بنا سکتا ہے، جبکہ ہدفمند کیڑے ماردار کا استعمال بیماری
          کے پھیلاؤ کو کنٹرول کرنے میں مدد فراہم کر سکتا ہے۔ گرے لیف اسپاٹ کے
          انتظام میں مندرجہ ذیل کھاد اور کیڑے ماردار کے مد نظر رکھیں:
          <Description>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                پوٹاشیم سلفیٹ: پودوں کے لئے ضروری پوٹاشیم فراہم کرتا ہے، جو
                بیماریوں سے مزاحمت اور پودوں کی کمی کو دور کرتا ہے۔
              </ListItem>
              <ListItem>
                پوٹاشیم نائٹریٹ: صحیح پتوں کے لئے ضروری پوٹاشیم اور نائٹروجن
                فراہم کرتا ہے، جس سے پودوں کی صحتمند پتیاں اور بہتر انداز میں
                اضافہ ہوتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                Azoxystrobin: گرے لیف اسپاٹ اور دیگر کھپیڈار بیماریوں کے خلاف
                ایک نظامی کیڑے ماردار ہے، جو روک تھامی اور علاجی کنٹرول فراہم
                کرتا ہے۔
              </ListItem>
              <ListItem>
                Propiconazole: گرے لیف اسپاٹ کے خلاف حفاظتی اور نظامی کیڑے
                ماردار ہے جو بیماری کے انتشار کو روکتا ہے اور اس کا انتظام کرتا
                ہے۔
              </ListItem>
              <ListItem>
                Trifloxystrobin: گرے لیف اسپاٹ اور دیگر کھپیڈار بیماریوں کے خلاف
                وسیع اثرات کا حفاظتی کیڑے ماردار ہے۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>
              گرے لیف اسپاٹ کی جلدی شناخت (Early Detection of Gray Leaf Spot):
            </Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                گرے لیف اسپاٹ کی جلدی شناخت کے بعد، پوٹاشیم سلفیٹ یا پوٹاشیم
                نائٹریٹ جیسے پوٹاشیم پر مبنی کھاد کے استعمال کو بڑھا کر مکئی کی
                بہتری کی حمائیت کی جا سکتی ہے۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                گرے لیف اسپاٹ کی جلدی شناخت کے بعد، نمایاں علامات والے پتوں کے
                لئے فوری طور پر Azoxystrobin، Propiconazole یا Trifloxystrobin
                جیسے نظامی کیڑے ماردار کا استعمال کریں۔ جلدی مداخلت سے انتشار کو
                روکا جا سکتا ہے اور نقصان کم ہو سکتا ہے۔
              </ListItem>
            </List>
            <Subheading>
              شدید گرے لیف اسپاٹ کی صورت میں (Severe Gray Leaf Spot Outbreak):
            </Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                شدید گرے لیف اسپاٹ کے اندازات کے بعد، پودوں کی مکمل صحت کو فراہم
                کرنے والی پوٹاشیم، نائٹروجن اور فاسفورس سمیت مختلف ضروری عناصر
                شامل کرنے والی موزوں کھاد کا استعمال کریں، کیونکہ شدید انفیکشن
                سے پودے کے ذخائر کم ہو جاتے ہیں۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                شدید گرے لیف اسپاٹ کی صورت میں، زراعتی ماہرین یا توسیعی خدمات سے
                مناسب کیڑے ماردار تجویزات کے لئے مشورہ کریں۔ وہ تجویز کر سکتے
                ہیں کہ بیماری کے انتظام کے لئے نظامی اور حفاظتی کیڑے ماردار کا
                مشابہتی استعمال کریں۔
              </ListItem>
            </List>
            <Subheading>
              بیماری مزاحمت اور فصلوں کا روٹیشن (Disease Resistance and Crop
              Rotation):
            </Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                زمین کی صحت اور زرخیزی کو بہتر بنانے کے لئے زرخیزی مادہ اور
                کمپوسٹ شامل کریں، جو بالاخرہ پودوں کی مرض مزاحمت کو کمزور کرسکتا
                ہے۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                کھپیڈار کیڈار کرنے والے مرکبات کے مختلف موڈز آف ایکشن کے ساتھ
                کیڑے ماردار کو روٹیشن کرتے ہوئے، کھپیڈار کیڈار کرنے والے مرکبات
                کے استعمال کا خدشہ کم کیا جا سکتا ہے۔ کھیتی کے دوران کھپیڈار
                کیڈار کرنے والے مرکبات کا استعمال کرتے ہوئے بیماری کے سائکل کو
                توڑا جا سکتا ہے اور گرے لیف اسپاٹ کی دوبارہ پھیلاؤ کو کم کیا جا
                سکتا ہے۔
              </ListItem>
            </List>
            <Subheading>
              موسم اور ماحولیاتی عوامل (Weather and Environmental Factors):
            </Subheading>
            <strong>کھاد (Fertilizers):</strong>
            <List>
              <ListItem>
                موسمی حالات کے مطابق کھاد کے اطلاق کے وقت اور شرح کو ترتیب دیں۔
                بے حد بارش کے دوران، نائٹروجن کے اطلاق کو کم کرنے کا خیال رکھیں
                تاکہ نیچے نکلنے اور ممکنہ ماحولیاتی مسائل کو روکا جا سکے۔
              </ListItem>
            </List>
            <strong>کیڑے ماردار (Pesticides):</strong>
            <List>
              <ListItem>
                موسم کے موسمی حالات کا نگرانی کریں اور گرے لیف اسپاٹ کے پھیلاؤ
                کے لئے مناسب ماحولیاتی انتباہات پر مشاہدہ کریں تاکہ کیڑے ماردار
                کا مخصوص استعمال کرنے کے لئے مناسب موقع پر اقدامات اٹھائیں۔
              </ListItem>
            </List>
            <Subheading>
              مقامی طریقہ کار اور حفاظتی تدابیر (Local Regulations and Safety):
            </Subheading>
            <p>
              کھاد اور کیڑے ماردار کے استعمال سے متعلق مقامی طریقہ کار اور
              حفاظتی تدابیر کا ہمیشہ مد نظر رکھیں۔
            </p>
            <p>
              فردوسی تحفظی تجویزات کے استعمال اور لاگو کرنے کے دوران شخصی تحفظی
              سامان (PPE) اور مناسب کارروائی تکنیک کا استعمال کریں۔
            </p>
          </Description>
        </Container>
      </Urdu>
    </>
  );
}
