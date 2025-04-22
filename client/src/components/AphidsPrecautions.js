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
          <Heading>Cotton Aphids  (کپاس کا پیچھا کرنے والے کیڑے) </Heading>
          <Description>
            <strong>Description:</strong> Cotton aphids (Aphis gossypii), also
            known as melon aphids, are small sap-sucking insects that infest
            cotton plants. They can rapidly reproduce and colonize cotton
            fields, causing damage to the plants and affecting their overall
            health and productivity.
            <Subheading>Symptoms:</Subheading>
            Infestation of cotton aphids can lead to the following symptoms:
          </Description>
          <List>
            <ListItem>Yellowing and curling of leaves.</ListItem>
            <ListItem>Stunted growth and reduced plant vigor.</ListItem>
            <ListItem>
              Formation of honeydew, a sticky substance, on the leaves.
            </ListItem>
            <ListItem>Premature leaf drop.</ListItem>
            <ListItem>Distorted or deformed cotton bolls.</ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton aphids infest cotton plants to feed on their sap, which can
          weaken the plants and make them susceptible to other diseases and
          environmental stressors.
          <Subheading>Impact on Crops:</Subheading>
          Cotton aphids can cause significant damage to cotton crops, leading to
          reduced yield and economic losses for farmers.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control cotton aphids, consider the following
          strategies:
          <List>
            <ListItem>
              <strong>1. Monitoring:</strong> Regularly inspect cotton fields
              for signs of aphid infestations. Early detection allows for timely
              intervention.
            </ListItem>
            <ListItem>
              <strong>2. Natural Predators:</strong> Encourage the presence of
              natural aphid predators, such as ladybugs and lacewings, to help
              control aphid populations.
            </ListItem>
            <ListItem>
              <strong>3. Reflective Mulch:</strong> Use reflective mulch around
              cotton plants to deter aphids from settling on the plants.
            </ListItem>
            <ListItem>
              <strong>4. Neem Oil:</strong> Apply neem oil, a natural
              insecticide, to control aphid populations. Follow the recommended
              application guidelines.
            </ListItem>
            <ListItem>
              <strong>5. Resistant Varieties:</strong> Consider planting cotton
              varieties that are resistant to aphid infestations.
            </ListItem>
            <ListItem>
              <strong>6. Insecticidal Soaps:</strong> Use insecticidal soaps to
              target and control aphids while minimizing harm to beneficial
              insects.
            </ListItem>
            <ListItem>
              <strong>7. Fertilizers:</strong> Proper fertilization can improve
              plant health and indirectly help in reducing aphid infestations.
              Consider using the following fertilizers:
            </ListItem>
          </List>
          <Description>
            <Subheading>Fertilizers & Pesticides</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Ammonium Sulfate: Supplies nitrogen, which is essential for
                plant growth and development.
              </ListItem>
              <ListItem>
                Potassium Nitrate: Provides potassium, which supports overall
                plant health and helps plants withstand stressors.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Imidacloprid: A systemic insecticide effective against aphids
                and other sucking insects.
              </ListItem>
              <ListItem>
                Acetamiprid: Provides contact and systemic control of aphids.
              </ListItem>
              <ListItem>
                Dinotefuran: A neonicotinoid insecticide with broad-spectrum
                control of pests, including aphids.
              </ListItem>
              <ListItem>
                Thiamethoxam: A systemic insecticide that can control aphids and
                other pests.
              </ListItem>
            </List>
          </Description>
          <Subheading>Early Detection of Cotton Aphids:</Subheading>
          <List>
            <ListItem>
              Apply a targeted insecticide such as imidacloprid, acetamiprid,
              dinotefuran, or thiamethoxam as soon as aphid infestation is
              detected. Early intervention can prevent population explosion and
              reduce damage.
            </ListItem>
          </List>
          <Subheading>Severe Cotton Aphid Infestation:</Subheading>
          <List>
            <ListItem>
              In cases of severe aphid outbreaks, consult with agricultural
              experts or extension services for appropriate pesticide
              recommendations. They may suggest a combination of systemic and
              contact insecticides to manage the infestation effectively.
            </ListItem>
          </List>
          <Subheading>Resistance Management and Crop Rotation:</Subheading>
          <List>
            <ListItem>
              Rotate insecticides with different modes of action to reduce the
              risk of developing resistance in the aphid population. Implement
              crop rotation practices to break the pest's life cycle and
              minimize recurrence.
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
          <Heading>کپاس کا پیچھا کرنے والے کیڑے  (Cotton Aphids)</Heading>
          <Description>
            <strong>تفصیل:</strong> کٹن ایفڈز (Aphis gossypii)، جو میلون ایفڈز
            کے نام سے بھی جانے جاتے ہیں، چھوٹے ساپ-چوسنے والے کیڑے ہیں جو کٹن کے
            پودوں کی سکھ چوستے ہیں۔ یہ تیزی سے اضافہ کر سکتے ہیں اور کٹن کے
            میدانوں میں آباد ہو جاتے ہیں، جو پودوں کو نقصان پہنچا سکتا ہے اور ان
            کی کلیت اور زرخیزی پر اثر انداز ہو سکتا ہے۔
            <Subheading>علامات:</Subheading>
            کٹن ایفڈز کے حملے کی وجہ سے مندرجہ ذیل علامات ظاہر ہو سکتی ہیں:
          </Description>
          <List>
            <ListItem>پتوں کی پیلاؤ اور موڑنا۔</ListItem>
            <ListItem>روئیداری اور کمزور پودوں کی شکلیں۔</ListItem>
            <ListItem>پتوں پر شہدانہ نمکین مادے کی شکل میں بننا۔</ListItem>
            <ListItem>پتوں کا جلد پھٹنا۔</ListItem>
            <ListItem>تباہ یا ترچھا کٹن کا پھول۔</ListItem>
          </List>
          <Subheading>وجوہات:</Subheading>
          کٹن ایفڈز کٹن کے پودوں پر چھاپے ہوئے مادے کے خوراک کے لئے پودوں پر
          ہملے کرتے ہیں، جو پودوں کو کمزور کر سکتا ہے اور انہیں دیگر بیماریوں
          اور ماحولیاتی تنگدستیوں کے خلاف نموتازہ بنا سکتا ہے۔
          <Subheading>پودوں پر اثرات:</Subheading>
          کٹن ایفڈز کٹن کے میدانوں پر بڑے نقصانات پیدا کر سکتے ہیں، جس سے کٹن کی
          پیداوار میں کمی ہو سکتی ہے اور کسانوں کے لئے معاشی ضرر ہو سکتا ہے۔
          <Subheading>پیشگوئی اور انتظام:</Subheading>
          کٹن ایفڈز کے انتظام اور کنٹرول کے لئے مندرجہ ذیل تدابیر کو مد نظر
          رکھیں:
          <List>
            <ListItem>
              <strong>1. مانیٹرنگ:</strong> کٹن کے میدانوں کو کٹن ایفڈز کے حملوں
              کے علامات کے لئے باقاعدہ معائنہ کریں۔ جلدی پہچان کی اجازت فوری
              انٹروینشن ممکن بناتی ہے۔
            </ListItem>
            <ListItem>
              <strong>2. قدرتی دشمن:</strong> کٹن ایفڈز کے قدرتی دشمن، مثلاً
              لیڈی بگز اور لیس ونگز، کی موجودگی کو بڑھائیں تاکہ ایفڈز کے
              پپوپلیشن کو کنٹرول کیا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>3. ریفلیکٹو ملچ:</strong> کٹن کے پودوں کے گرد ریفلیکٹو ملچ
              کا استعمال کریں تاکہ ایفڈز پودوں پر چڑھنے سے باز رہیں۔
            </ListItem>
            <ListItem>
              <strong>4. نیم کا تیل:</strong> کٹن ایفڈز کے کنٹرول کے لئے نیم کا
              تیل، ایک قدرتی کیڑا مار، کا استعمال کریں۔ موصوفہ اطلاقی رہنماؤں کو
              پیروی کریں۔
            </ListItem>
            <ListItem>
              <strong>5. مقاومتی اقسام:</strong> ایفڈز کے حملے کے مخالف مزارعہ
              کٹن اقسام کا بوناو کرنے کا اندازہ لگائیں۔
            </ListItem>
            <ListItem>
              <strong>6. کیڑے ماردار صابن:</strong> کیڑے ماردار صابن کا استعمال
              کریں تاکہ ایفڈز کو نشستے دینے کے ساتھ کچھر کرتے ہوئے مفاد نہ ہوں۔
            </ListItem>
            <ListItem>
              <strong>7. کھاد:</strong> صحیح کھاد پودوں کی صحت میں بہتری کر سکتی
              ہے اور ایفڈز کے حملوں کو کم کرنے میں مدد فراہم کر سکتی ہے۔ مندرجہ
              ذیل کھاد استعمال کرنے کا اندازہ لگائیں:
            </ListItem>
          </List>
          <Description>
            <strong>کھاد:</strong>
            <List>
              <ListItem>
                ایمونیم سلفیٹ: پودوں کی نشو و نمو کے لئے ضروری نائٹروجن مہیا
                کرتا ہے۔
              </ListItem>
              <ListItem>
                پوٹاشیم نائٹریٹ: پودوں کی کل خوشبوداری کی حمایت فراہم کرتا ہے
                اور پودے کو مختلف تنگدستیوں سے محفوظ رکھتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>کیڑے ماردار:</strong>
            <List>
              <ListItem>
                ایمونیم سلفیٹ: ایک سسٹمک کیڑے مار جو ایفڈز اور دیگر چوسنے والے
                کیڑے پر موثر ہوتا ہے۔
              </ListItem>
              <ListItem>
                ایسٹیمپرڈ: ایفڈز کو کنٹرول کرنے کے لئے رابطہ اور سسٹمک کنٹرول
                فراہم کرتا ہے۔
              </ListItem>
              <ListItem>
                ڈائنو ٹیفورین: ایک نئونیکوٹینوئڈ کیڑے مار جو مختلف کیڑوں پر قابو
                رکھتا ہے، شامل ہو کر ایفڈز پر قابو پیدا کر سکتا ہے۔
              </ListItem>
              <ListItem>
                تھائمیتھوکسیم: ایک سسٹمک کیڑے مار جو ایفڈز اور دیگر کیڑوں پر
                قابو پیدا کر سکتا ہے۔
              </ListItem>
            </List>
          </Description>
          <Subheading>کٹن ایفڈز کی جلد پکڑنے کی بنیادی علامات:</Subheading>
          <List>
            <ListItem>
              ایفڈز کے حملے کی فوراً اطلاقی کھاد سے بچنے کی خاطر فوراً ایمونیم
              سلفیٹ، ایسٹیمپرڈ، ڈائنو ٹیفورین، یا تھائمیتھوکسیم جیسے موصوفہ کیڑے
              مار کا استعمال کریں۔ جلدی پہچان کے موافق انٹروینشن کا مد نظر
              رکھیں، ایفڈز کو دوسرے پودوں میں پھیلنے سے روکا جا سکتا ہے اور
              نقصان کو کم کر سکتا ہے۔
            </ListItem>
          </List>
          <Subheading>شدید کٹن ایفڈز کے حملے کی صورت میں:</Subheading>
          <List>
            <ListItem>
              شدید ایفڈز کے حملے کی صورت میں، ماہرین زراعت یا ایکسٹینشن سروسز سے
              مشورہ کریں تاکہ مناسب کیڑے مار کی تجویزات حاصل کریں۔ وہ مندرجہ ذیل
              سسٹمک اور رابطہ کیڑے مار کو کنٹرول کرنے کے لئے ملاوٹ کرنے کی تجویز
              کر سکتے ہیں۔
            </ListItem>
          </List>
          <Subheading>
            مقاومتی انتظام اور کپاس کے موازنہ کرنے کا اصول:
          </Subheading>
          <List>
            <ListItem>
              کیڑے مار کے مخالف اقوام سے چکر لگانے کے لئے کیڑے مار کے انداز کو
              مختلف وسائل سے بدلنے کا اندازہ لگائیں۔ کٹن کی پیداوار کے لئے
              موصوفہ ماحولیاتی تنگدستیوں کے لئے محفوظ رکھنے کے لئے کاپاس کے
              موازنے کے اصولات کو اطلاق کریں۔
            </ListItem>
          </List>
          <Subheading>موسم اور ماحولیاتی عوامل:</Subheading>
          <List>
            <ListItem>
              موسمی حالات کے مطابق کیڑے مار کے اطلاق کے توقیت اور شرحات کو ترتیب
              دیں۔ زیادہ بارش کے دوران اطلاقات سے بچنے کے لئے نائٹروجن کی
              تنکدستی کو کم کرنے پر غور کریں۔
            </ListItem>
          </List>
          <Subheading>مقامی ضوابط اور حفاظتی تدابیر:</Subheading>
          <p>
            کھاد اور کیڑے ماردار کے استعمال سے متعلق مقامی ضوابط اور حفاظتی
            تدابیر کا ہمیشہ پالنا ضروری ہے۔
          </p>
          <p>
            کھاد اور کیڑے ماردار کو ہینڈل کرنے اور ان کا استعمال کرنے کے دوران
            پرسنل پروٹیکٹو ایکوپمنٹ (پی پی ای) اور مناسب اطلاق کی تکنیکیں
            استعمال کریں۔
          </p>
          <p>
            ماحول اور غیر مقصد کی افراد پر منفی اثرات سے بچنے کے لئے موصوفہ
            اطلاقی شرحات اور توقیتوں کا مد نظر رکھنا اہم ہے۔ موصوفہ استعمال کے
            اصولات اور حفاظتی تدابیر کے لئے ماہرین زراعت یا مقامی ایکسٹینشن
            سروسز سے مشورہ کریں۔
          </p>
        </Container>
      </Urdu>
    </>
  );
}
