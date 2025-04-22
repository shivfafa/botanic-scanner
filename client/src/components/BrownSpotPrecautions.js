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

export default function BrownSpotPrecautions() {
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
    <Heading>Rice Brown Spot Disease (چاول کی براؤن اسپاٹ بیماری)</Heading>
    <Description>
      <strong>Description:</strong> Rice Brown Spot, caused by the fungus
      Bipolaris oryzae (syn. Cochliobolus miyabeanus), is a common fungal
      disease that affects rice plants. The fungus infects the leaves, leaf
      sheaths, and panicles of the rice plant, leading to characteristic brown
      spots with a yellow halo. These spots can coalesce, causing extensive
      damage to the foliage and affecting rice yield.
    </Description>
    <Subheading>Symptoms (علامات):</Subheading>
    <List>
      <ListItem>Formation of small, oval-shaped brown spots on leaves.</ListItem>
      <ListItem>
        Spots may have a yellow halo surrounding them.
      </ListItem>
      <ListItem>
        In severe cases, spots may coalesce and cause large lesions on leaves
        and leaf sheaths.
      </ListItem>
      <ListItem>
        Infected panicles may have dark, sunken lesions, leading to reduced
        grain quality and yield.
      </ListItem>
    </List>
    <Subheading>Causes (وجہ):</Subheading>
    Rice Brown Spot is caused by the fungus Bipolaris oryzae. The fungus
    typically survives on rice residues in the soil and can be spread through
    infected seeds, wind, water, or farm equipment.
    <Subheading>Impact on Crops (فصلوں پر اثرات):</Subheading>
    Rice Brown Spot can result in reduced photosynthetic activity and
    premature aging of leaves, leading to decreased yield and poor grain
    quality. Severe infections can cause significant economic losses for rice
    farmers.
    <Subheading>Prevention and Management (روک تھام اور انتظام):</Subheading>
    While complete eradication of Rice Brown Spot may not be possible,
    several measures can help manage and minimize its impact:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties (مزاحمت کی اقسام):</strong> Planting rice
        varieties with resistance to Rice Brown Spot can reduce disease severity.
      </ListItem>
      <ListItem>
        <strong>2. Crop Rotation (فصل کی روٹیشن):</strong> Avoid consecutive rice
        plantings in the same field to break the disease cycle.
      </ListItem>
      <ListItem>
        <strong>3. Seed Treatment (بیج کی تدارک):</strong> Use certified
        disease-free seeds or treat seeds with appropriate fungicides before
        planting.
      </ListItem>
      <ListItem>
        <strong>4. Fungicides (فنگی سائیڈز):</strong> Apply fungicides containing
        Tricyclazole, Pyroquilon, Benzimidazole, or Isoprothiolane to control
        the disease. Follow recommended application rates and safety guidelines.
      </ListItem>
      <ListItem>
        <strong>5. Proper Irrigation (مناسب آبپاشی):</strong> Avoid excessive
        irrigation, as waterlogged conditions can favor disease development.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Brown Spot. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the disease.
    <Description>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Triple Superphosphate: Provides phosphorus, essential for root
          development and overall plant health.
        </ListItem>
        <ListItem>
          Monoammonium Phosphate: Supplies nitrogen and phosphorus for healthy
          plant growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Tricyclazole: An effective fungicide specifically used for controlling
          Rice Brown Spot.
        </ListItem>
        <ListItem>
          Pyroquilon: Provides preventive and curative action against fungal
          infections.
        </ListItem>
        <ListItem>
          Benzimidazole: Controls a broad spectrum of fungal pathogens,
          including Bipolaris oryzae.
        </ListItem>
        <ListItem>
          Isoprothiolane: Provides protection against Rice Brown Spot and
          suppresses fungal growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>Early Detection of Rice Brown Spot (چاول کی براؤن اسپاٹ کی جلد شناخت):</Subheading>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Increase the application of nitrogen-based fertilizers, such as
          Monoammonium Phosphate, to support rice plants' recovery and
          resistance to disease.
        </ListItem>
      </List>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Apply a targeted fungicide like Tricyclazole or Pyroquilon immediately
          after detecting Rice Brown Spot symptoms. Early intervention can
          prevent the spread of the disease to other plants and minimize damage.
        </ListItem>
      </List>
      <Subheading>Severe Rice Brown Spot Outbreak (چاول کی براؤن اسپاٹ کے شدید پھیلاؤ):</Subheading>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Use a balanced fertilizer that includes essential nutrients like
          nitrogen, phosphorus, and potassium to support the overall health of
          rice plants during severe infections.
        </ListItem>
      </List>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          In cases of severe Rice Brown Spot outbreaks, consult with
          agricultural experts or extension services for appropriate pesticide
          recommendations. They may suggest a combination of fungicides to
          manage the disease effectively.
        </ListItem>
      </List>
    </Description>
    <Subheading>Disease Resistance and Crop Rotation (بیماری مزاحمت اور فصل کی روٹیشن):</Subheading>
    <strong>Fertilizers (کھاد):</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, indirectly enhancing rice plants' disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the fungal population. Implement crop rotation
        practices to break the disease cycle and minimize the recurrence of Rice
        Brown Spot.
      </ListItem>
    </List>
    <Subheading>Weather and Environmental Factors (موسم اور ماحولیاتی عوامل):</Subheading>
    <strong>Fertilizers (کھاد):</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing
        nitrogen applications to prevent leaching and potential environmental
        issues.
      </ListItem>
    </List>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply fungicides
        proactively when conditions are favorable for Rice Brown Spot
        development.
      </ListItem>
    </List>
    <Subheading>Local Regulations and Safety (مقامی ضوابط اور حفاظتی تدابیر):</Subheading>
    <p>
      Always follow local regulations and safety guidelines regarding the use
      of fertilizers and pesticides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques
      when handling and applying fertilizers and pesticides.
    </p>
    <p>
      It is essential to follow the recommended application rates and timings
      to avoid any negative effects on the environment and non-target
      organisms. Consult with agricultural experts or local extension services
      for proper usage guidelines and safety precautions.
    </p>
  </Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
  <Container>
    <Heading>(Rice Brown Spot Disease) چاول کی براؤن اسپاٹ بیماری</Heading>
    <Description>
      <strong>Description (تفصیل):</strong> چاول کی براؤن اسپاٹ بیماری جو کے
      کارندہ فنگس Bipolaris oryzae (سائن. Cochliobolus miyabeanus) سے پیدا
      ہوتی ہے، چاول کے پودوں کو متاثر کرتی ہے۔ یہ کارندہ پتے، پتوں کے
      خول، اور پھول دانے تک میں داخل ہوتا ہے، جس سے پتے پر بھورے رنگ کے
      چھوٹے دائرے نمودار ہوتے ہیں جو پیلا حلقہ ہوتا ہے۔ یہ دائرے ملاوٹ ہو
      سکتے ہیں، جس سے پتوں اور پتوں کے خول پر وسیع مقامات پر نقصان
      پہنچ سکتا ہے۔
    </Description>
    <Subheading>(Symptoms) علامات:</Subheading>
    <List>
      <ListItem>پتوں پر چھوٹے، انڈے کی شکل کے بھورے دائرے کی شکل بننا۔</ListItem>
      <ListItem>دائرے کے ارد گرد پیلا حلقہ ہو سکتا ہے۔</ListItem>
      <ListItem>شدید صورتحال میں، دائرے ملاوٹ ہو کر پتے اور پتوں کے خول پر
        بڑے بڑے زخم نمودار ہو سکتے ہیں۔</ListItem>
      <ListItem>متاثرہ پھول دانے پر سیاہ، دباوں والے زخم ہو سکتے ہیں، جس سے
        چاول کی معیار و کمیت متاثر ہو سکتی ہے۔</ListItem>
    </List>
    <Subheading>(Causes) وجہ:</Subheading>
    چاول کی براؤن اسپاٹ بیماری کی وجہ فنگس Bipolaris oryzae ہے۔ عام طور
    پر یہ کارندہ زمین میں چاول کی باقیات پر بقائیہ رکھتا ہے اور متاثرہ بیج،
    ہوا، پانی، یا زرخیز آلات کے ذرائع سے پھیلا سکتا ہے۔
    <Subheading>(Impact on Crops) فصلوں پر اثرات:</Subheading>
    چاول کی براؤن اسپاٹ بیماری کی بنا پر پتوں کی فوٹوسنتی کی کمی اور پتوں
    کی جلد کے مقدمے کی جلد کی عجلتی عمر ہو سکتی ہے، جس سے کمی اور بدکار
    چاول کی باقیات ہو سکتی ہے۔ شدید متاثرہ پھول دانے کی کھیپ پر چھائے ہوئے
    زخم ہو سکتے ہیں، جس سے چاول کے کمی اور بدکار ہو سکتے ہیں۔
    <Subheading>(Prevention and Management) روک تھام اور انتظام:</Subheading>
    مکمل طور پر چاول کی براؤن اسپاٹ کے خاتمے کا مقصد حاصل کرنا ممکن نہیں
    ہوسکتا، لیکن چند تدابیر سے اس کا اثر کم کیا جاسکتا ہے:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties (مزاحمت کی اقسام):</strong> چاول کے
        براؤن اسپاٹ سے متاثرہ مضبوط قسم کے اقسام کی کاشت کرنے سے بیماری کی
        شدت کم ہوسکتی ہے۔
      </ListItem>
      <ListItem>
        <strong>2. Crop Rotation (فصل کی روٹیشن):</strong> ایک ہی خیط میں چاول کی
        متواتر کاشت نہ کرنے سے بیماری کا دور چلا جا سکتا ہے۔
      </ListItem>
      <ListItem>
        <strong>3. Seed Treatment (بیج کی تدارک):</strong> مناسب فنگی
        کشتکاروں سے پہلے تصدیق شدہ بیماری سے پاک بیج استعمال کریں یا بیجوں
        کو مناسب فنگی مار کے آمادہ کریں۔
      </ListItem>
      <ListItem>
        <strong>4. Fungicides (فنگی سائیڈز):</strong> ٹرائیکلوزول، پائروکویلون،
        بینزیمڈازول، یا ایسوپروتھائلین شامل فنگی سائیڈز کا استعمال بیماری
        کو کنٹرول کرنے کے لئے کیا جاسکتا ہے۔ موصوف اطلاقی شرح اور حفاظتی تدابیر
        کے ساتھ ان استعمال کریں۔
      </ListItem>
      <ListItem>
        <strong>5. Proper Irrigation (مناسب آبپاشی):</strong> زیادہ آب پانی کے
        اجلاس سے بچیں، کیونکہ پانی بھری موسمات میں بیماری کی تشکیل کو
        فائدہ مند بنا سکتا ہے۔
      </ListItem>
    </List>
    <Subheading>(Fertilizer and Pesticide Use) کھاد اور کیڑے ماردار کا استعمال:</Subheading>
    کھاد اور کیڑے ماردار کے استعمال سے چاول کی براؤن اسپاٹ کے اثرات کا
    انتظام کیا جا سکتا ہے۔ کھاد کے مناسب استعمال اور نشانہ بندی شدہ کیڑے
    ماردار کے استعمال سے چاول کے پودوں کی عمومی صحت کو بہتر بنایا جاسکتا
    ہے اور بیماری کو کنٹرول کیا جاسکتا ہے۔
    <Description>
      <strong>(Fertilizers) کھاد:</strong>
      <List>
        <ListItem>
          ٹرپل سپرفاسفیٹ: روٹ کی ترقی اور کلیتی پودوں کے لئے ضروری فاسفورس
          مہیا کرتا ہے۔
        </ListItem>
        <ListItem>
          منو ایمونیم فاسفیٹ: صحیح پودوں کی ترقی کے لئے نائٹروجن اور فاسفورس
          مہیا کرتا ہے۔
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>(Pesticides) کیڑے ماردار:</strong>
      <List>
        <ListItem>
          ٹرائیکلوزول: چاول کے براؤن اسپاٹ کو کنٹرول کرنے کے لئے خصوصی
          طور پر استعمال کیا جانے والا فنگی سائیڈ ہے۔
        </ListItem>
        <ListItem>
          پائروکویلون: فنگل انفیکشن کے خلاف محافظتی کارکردگی فراہم کرتا ہے۔
        </ListItem>
        <ListItem>
          بینزیمڈازول: بائی پولیریس اوریزے جیسے فنگل پیٹھائی کونوس، کنٹرول کرتا
          ہے۔
        </ListItem>
        <ListItem>
          ایسوپروتھائلین: چاول کے براؤن اسپاٹ کے خلاف محافظت فراہم کرتا ہے اور
          فنگل کی نمو کو روکتا ہے۔
        </ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>(Early Detection of Rice Brown Spot) چاول کی براؤن اسپاٹ کی جلد
        شناخت:</Subheading>
      <strong>(Fertilizers) کھاد:</strong>
      <List>
        <ListItem>
          چاول کے متاثرہ پودوں کی بحالی اور بیماری کے خلاف مضبوطی کے لئے
          نائٹروجن کی بنیاد پر کھاد کی اطلاقی شرح بڑھائیں۔
        </ListItem>
      </List>
      <strong>(Pesticides) کیڑے ماردار:</strong>
      <List>
        <ListItem>
          چاول کی براؤن اسپاٹ کے علامات کی تشخیص کے فوراً بعد ٹرائیکلوزول یا
          پائروکویلون جیسے نشانہ بندی شدہ فنگی سائیڈز کا فوری استعمال کریں۔
          جلدی انٹروینشن بیماری کے دوسرے پودوں تک پھیلنے سے بچا سکتا ہے اور
          نقصان کم کیا جاسکتا ہے۔
        </ListItem>
      </List>

      <Subheading>(Severe Rice Brown Spot Outbreak) شدید چاول کی براؤن اسپاٹ کے
        پھوٹنے پر:</Subheading>
      <strong>(Fertilizers) کھاد:</strong>
      <List>
        <ListItem>
          شدید چاول کی براؤن اسپاٹ کے پھوٹنے کے معاملے میں، کلسیم، فاسفورس، اور
          پوٹاشیم جیسے ضروری عناصر کے ساتھ موزوں کھاد کا استعمال کریں تاکہ چاول
          کے پودوں کی عمومی صحت کی حفاظت کی جا سکے، کیونکہ شدید انفیکشن پودوں
          کے عناصر کی ذخیرہ ختم کرسکتا ہے۔
        </ListItem>
      </List>
      <strong>(Pesticides) کیڑے ماردار:</strong>
      <List>
        <ListItem>
          شدید چاول کی براؤن اسپاٹ کے پھوٹنے کے مواقع پر، زراعتی ماہرین یا
          توسیعی خدمات سے مناسب کیڑے ماردار کی تجویزات کے لئے مشورہ کریں۔ وہ
          بیماری کے مہاربی کنٹرول کے لئے سسٹمیک اور پروٹیکٹو فنگی سائیڈز کے
          مجموعہ کا استعمال مشورہ دے سکتے ہیں۔
        </ListItem>
      </List>

      <Subheading>(Disease Resistance and Crop Rotation) مزاحمت اور فصل کی روٹیشن:</Subheading>
      <strong>(Fertilizers) کھاد:</strong>
      <List>
        <ListItem>
          زمین کی صحت اور زرخیزی کو بہتر بنانے کے لئے زمین میں آلودگی کی
          مضبوطی کے لئے آلودگی اور کمپوسٹ کو ضمیمہ کریں جس سے پودوں کی مزاحمت
          کو بہتر بنایا جا سکتا ہے۔
        </ListItem>
      </List>
      <strong>(Pesticides) کیڑے ماردار:</strong>
      <List>
        <ListItem>
          فنگل آبادی میں مزید حرکت پذیری کے خطرے کم کرنے کے لئے مختلف فنگلوں کے
          ساتھ کیڑے ماردار کو روٹیٹ کریں۔ چاول کی براؤن اسپاٹ کے دور چلے کو
          توڑنے اور کم کرنے کے لئے فصل کی روٹیشن تراکیب کا اطلاق کریں۔
        </ListItem>
      </List>

      <Subheading>(Weather and Environmental Factors) موسم اور ماحولیاتی عوامل:</Subheading>
      <strong>(Fertilizers) کھاد:</strong>
      <List>
        <ListItem>
          موسمیاتی شرائط کے مطابق کھاد کے اطلاق کی توقیت اور شرح کو ترتیب دیں۔
          بڑھتی بارش کے دوران، نائٹروجن کے اطلاق کو کم کرنے کا خیال کریں تاکہ
          لیچنگ اور ممکنہ ماحولیاتی مسائل سے بچایا جا سکے۔
        </ListItem>
      </List>
      <strong>(Pesticides) کیڑے ماردار:</strong>
      <List>
        <ListItem>
          موسم کے پیش بینی اور بیماری کے خطرے کی الرٹس کا مطالعہ کریں تاکہ
          چاول کی براؤن اسپاٹ کے تشکیل کے موسمیاتی حوالے سے تاکتیکلی طور پر
          فنگی سائیڈز کا اطلاق کیا جاسکے۔
        </ListItem>
      </List>
    </Description>
    <Subheading>(Local Regulations and Safety) مقامی ضوابط اور حفاظت:</Subheading>

    <p>کھاد اور کیڑے ماردار کے استعمال سے متعلق مقامی ضوابط اور حفاظتی
      مشورے کا خیال رکھیں۔</p>
    <p>فنگی سائیڈز اور کھاد کو ہینڈل کرنے اور استعمال کرنے کے وقت موزوں
      شخصی تحفظ کا استعمال کریں۔</p>

  </Container>
</Urdu>

    </>
  );
}
