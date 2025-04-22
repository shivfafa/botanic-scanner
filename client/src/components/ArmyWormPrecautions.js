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

export default function ArmyWormPrecautions() {
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
          <Heading>Cotton Army Worm (عماری بھونکھٹ)</Heading>
          <Description>
            <strong>Description:</strong> The Cotton Army Worm is a destructive
            pest that infests cotton plants. Also known as "عماری بھونکھٹ" in
            local language, these caterpillars can cause significant damage to
            cotton crops, leading to reduced yield and economic losses for
            farmers.
            <Subheading>Symptoms:</Subheading>
            Infestation of Cotton Army Worm can lead to the following symptoms:
          </Description>
          <List>
            <ListItem>Defoliation of cotton plants.</ListItem>
            <ListItem>Visible feeding damage on leaves.</ListItem>
            <ListItem>Reduced plant vigor and stunted growth.</ListItem>
            <ListItem>Complete consumption of cotton bolls.</ListItem>
            <ListItem>
              Feeding marks and holes on cotton buds and flowers.
            </ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Army Worm caterpillars feed on cotton plants, causing damage to
          leaves, buds, and bolls. Their rapid multiplication can lead to severe
          infestations in cotton fields.
          <Subheading>Impact on Crops:</Subheading>
          The Cotton Army Worm can result in severe defoliation and yield loss,
          impacting the overall health and productivity of cotton crops.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control the Cotton Army Worm, consider the following
          strategies:
          <List>
            <ListItem>
              <strong>1. Monitoring:</strong> Regularly inspect cotton fields
              for signs of Army Worm infestations. Early detection allows for
              timely intervention.
            </ListItem>
            <ListItem>
              <strong>2. Biological Control:</strong> Encourage the presence of
              natural enemies of the Army Worm, such as birds and beneficial
              insects, to help control their populations.
            </ListItem>
            <ListItem>
              <strong>3. Mechanical Control:</strong> Handpick and remove the
              caterpillars from the plants when feasible, especially during
              early stages of infestation.
            </ListItem>
            <ListItem>
              <strong>4. Bt Pesticides:</strong> Use Bacillus thuringiensis
              (Bt), a natural biological pesticide, to target and control the
              Cotton Army Worm. Follow the recommended application guidelines.
            </ListItem>
            <ListItem>
              <strong>5. Emamectin Benzoate:</strong> Apply Emamectin benzoate,
              an insecticide effective against caterpillar pests, including the
              Cotton Army Worm. Follow the recommended dosage and application
              procedures.
            </ListItem>
            <ListItem>
              <strong>6. Proper Hygiene:</strong> Keep the cotton fields and
              surrounding areas clean to minimize favorable conditions for the
              pests to breed and spread.
            </ListItem>
            <ListItem>
              <strong>7. Early Intervention:</strong> Act promptly at the first
              sign of infestation to prevent population explosion and reduce
              damage.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <List>
            <ListItem>
              Triple Superphosphate: Supplies phosphorus, an essential nutrient
              for plant growth and development.
            </ListItem>
            <ListItem>
              Monoammonium Phosphate: Provides a balanced combination of
              nitrogen and phosphorus for improved plant health.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <List>
            <ListItem>
              Bacillus thuringiensis (Bt): A natural biological pesticide
              effective against caterpillar pests, including the Cotton Army
              Worm.
            </ListItem>
            <ListItem>
              Emamectin Benzoate: An insecticide that targets and controls
              caterpillar pests, including the Cotton Army Worm.
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
          <Heading>عماری بھونکھٹ (Cotton Army Worm)</Heading>
          <Description>
            <strong>تفصیل:</strong> عماری بھونکھٹ، جو کٹن کے پودوں میں حملہ کرنے
            والے تباہ کار کیڑا ہے۔ یہ کیڑے بھی مقامی زبان میں "عماری بھونکھٹ" کے
            نام سے بھی جانے جاتے ہیں اور ان کا کٹن کی پیداوار میں کمی اور کسانوں
            کے لئے معاشی ضرر ہو سکتا ہے۔
            <Subheading>علامات:</Subheading>
            عماری بھونکھٹ کے حملے کی وجہ سے مندرجہ ذیل علامات ظاہر ہو سکتی ہیں:
          </Description>
          <List>
            <ListItem>کٹن کے پودوں کا پتوں کا چھلنا۔</ListItem>
            <ListItem>پتوں پر کھوراکی نشانات۔</ListItem>
            <ListItem>پودوں کی کمزوری اور رکاوٹی نمو۔</ListItem>
            <ListItem>کٹن کی کلیتوں کی مکمل کھوراک۔</ListItem>
            <ListItem>
              کٹن کے کھلے بڈ اور پھولوں پر کھوراک کے نشانات اور سوراخ۔
            </ListItem>
          </List>
          <Subheading>وجوہات:</Subheading>
          عماری بھونکھٹ کیڑے کیپولیئرز کٹن کے پودوں کا چھلنا، کھلے بڈ اور کلیتوں
          کو نقصان پہنچاتے ہیں۔ ان کی تیزی سے اضافہ کار پلپلیشن کٹن کے میدانوں
          میں شدید حملہ کر سکتا ہے۔
          <Subheading>پودوں پر اثرات:</Subheading>
          عماری بھونکھٹ کی شدید کھوراک اور پیداوار میں کمی کا سبب بن سکتا ہے، جس
          سے کٹن کے پودوں کی کل صحت اور زرخیزی پر اثر انداز ہوتی ہے۔
          <Subheading>پیشگوئی اور انتظام:</Subheading>
          عماری بھونکھٹ کے انتظام اور کنٹرول کے لئے مندرجہ ذیل تدابیر کو مد نظر
          رکھیں:
          <List>
            <ListItem>
              <strong>1. مانیٹرنگ:</strong> کٹن کے میدانوں کو عماری بھونکھٹ کے
              حملے کی علامات کے لئے باقاعدہ معائنہ کریں۔ جلدی پہچان کی اجازت
              فوری انٹروینشن ممکن بناتی ہے۔
            </ListItem>
            <ListItem>
              <strong>2. حیاتی کنٹرول:</strong> عماری بھونکھٹ کے قدرتی دشمن،
              مثلاً پرندے اور فائدے مند کیڑے، کی موجودگی کو بڑھائیں تاکہ ان کی
              پپوپلیشن کو کنٹرول کیا جا سکے۔
            </ListItem>
            <ListItem>
              <strong>3. میکینکل کنٹرول:</strong> ممکنہ ہونے پر پودوں سے کیڑے کا
              انتخاب کریں اور ہٹا دیں، خاص طور پر حملے کے ابتدائی مراحل میں۔
            </ListItem>
            <ListItem>
              <strong>4. بی ٹی کیڈے مار:</strong> عماری بھونکھٹ کو کنٹرول کرنے
              کے لئے بیکلس تھورنگیئنس (بی ٹی)، ایک قدرتی بائیولوجی کیڑے مار، کا
              استعمال کریں۔ موصوفہ اطلاقی رہنماؤں کو پیروی کریں۔
            </ListItem>
            <ListItem>
              <strong>5. ایمیمیکٹن بینزویٹ:</strong> ایمیمیکٹن بینزویٹ، ایک کیڑے
              مار کی ایکسٹینسائڈ ہے جو عماری بھونکھٹ سمیت کیڑے کو کنٹرول کرتا
              ہے۔ موصوفہ اطلاقی رہنماؤں کو پیروی کریں۔
            </ListItem>
          </List>
          <Subheading>عماری بھونکھٹ کی شدید کھوراک کے لئے:</Subheading>
          <List>
            <ListItem>
              شدید حملے کی صورت میں، ماہرین زراعت یا ایکسٹینشن سروسز سے مشورہ
              کریں تاکہ مناسب کیڑے مار کی تجویزات حاصل کریں۔ وہ مندرجہ ذیل قدرتی
              اور کیمیائی کیڑے مار کے اشتراکی تدابیر کو پیش کر سکتے ہیں تاکہ
              عماری بھونکھٹ کے پیداوار کو کنٹرول کیا جا سکے۔
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
              دیں۔ بارش کے دوران اطلاقات سے بچنے کے لئے انتظامات کریں اور محیطی
              تجاویزوں کے لحاظ سے اطلاق کریں۔
            </ListItem>
          </List>
          <Subheading>مقامی ضوابط اور حفاظتی تدابیر:</Subheading>
          <p>
            کیڑے مار اور کیمیائی کیڑے مار کے استعمال سے متعلق مقامی ضوابط اور
            حفاظتی تدابیر کا ہمیشہ پالنا ضروری ہے۔
          </p>
          <p>
            کیڑے مار اور کیمیائی کیڑے مار کو ہینڈل کرنے اور ان کا استعمال کرنے
            کے دوران پرسنل پروٹیکٹو ایکوپمنٹ (پی پی ای) اور مناسب اطلاق کی
            تکنیکیں استعمال کریں۔
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
