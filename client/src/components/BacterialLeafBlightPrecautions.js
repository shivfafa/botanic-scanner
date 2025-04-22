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

export default function BacterialLeafBlightPrecautions() {
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
    <Heading>Rice Bacterial Leaf Blight (چاول کی بیکٹیریل پتی بیماری)</Heading>
    <Description>
      <strong>Description:</strong> Rice bacterial leaf blight, caused by the
      bacterium Xanthomonas oryzae pv. oryzae, is a devastating disease that
      affects rice plants. The bacterium infects the rice plants through wounds
      or natural openings, such as stomata. Once inside the plant, it causes
      water-soaked lesions with yellowish-green margins to appear on the leaves.
      As the disease progresses, the lesions expand and turn dark brown, leading
      to the drying and death of affected leaves. Severe infections can result
      in significant yield losses for rice farmers.
      <Subheading>Symptoms:</Subheading>
      The symptoms of rice bacterial leaf blight include:
    </Description>
    <List>
      <ListItem>Water-soaked lesions with yellowish-green margins on leaves.</ListItem>
      <ListItem>Lesions expand and turn dark brown as the disease progresses.</ListItem>
      <ListItem>Drying and death of affected leaves.</ListItem>
      <ListItem>Severe infections can lead to yield losses.</ListItem>
    </List>
    <Subheading>Causes:</Subheading>
    Rice bacterial leaf blight is caused by the bacterium Xanthomonas oryzae pv.
    oryzae. The bacterium enters the rice plant through wounds or natural
    openings, such as stomata. Once inside the plant, it multiplies and spreads
    within the vascular system, leading to the characteristic symptoms of the
    disease.
    <Subheading>Impact on Crops:</Subheading>
    Rice bacterial leaf blight can have significant negative effects on rice
    crops. The disease can lead to reduced photosynthetic capacity of the
    affected leaves, resulting in lower grain filling and reduced yield. Severe
    infections can cause premature plant senescence and complete yield loss in
    some cases.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for rice bacterial leaf blight once the plant
    is infected, several preventive and management measures can help reduce its
    impact and prevent further spread. These measures include:
    <List>
      <ListItem>
        <strong>1. Use of Disease-Free Seeds:</strong> Planting rice using
        disease-free seeds can help prevent the introduction of the bacterium
        into new fields.
      </ListItem>
      <ListItem>
        <strong>2. Avoid Overhead Irrigation:</strong> Bacterial blight spreads
        through water, so avoiding overhead irrigation can help reduce disease
        spread.
      </ListItem>
      <ListItem>
        <strong>3. Crop Rotation:</strong> Implementing crop rotation practices
        can break the disease cycle and reduce the buildup of the bacterium in
        the soil.
      </ListItem>
      <ListItem>
        <strong>4. Use of Resistant Varieties:</strong> Planting rice varieties
        that are resistant to bacterial leaf blight can provide some protection
        against the disease.
      </ListItem>
      <ListItem>
        <strong>5. Copper-Based Fungicides:</strong> Copper-based fungicides can
        be applied preventively to protect rice plants from bacterial infection.
        Consult agricultural experts for proper fungicide selection and
        application guidelines.
      </ListItem>
      <ListItem>
        <strong>6. Antibiotics:</strong> Streptomycin and kasugamycin are
        antibiotics that can be used to manage bacterial leaf blight. Consult
        agricultural experts for proper antibiotic application guidelines and
        usage restrictions.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use:</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing the
    impact of rice bacterial leaf blight. Proper application of fertilizers can
    improve the overall health of the plants, making them more resilient to
    infections. The following fertilizers and pesticides can be considered:
    <Description>
      <strong>Fertilizers:</strong>
      <List>
        <ListItem>Urea: Provides nitrogen, essential for rice growth and development.</ListItem>
        <ListItem>Ammonium Sulfate: Supplies nitrogen and promotes healthy foliage.</ListItem>
        <ListItem>
          Ammonium Phosphate: Provides phosphorus, essential for root development and overall growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides:</strong>
      <List>
        <ListItem>
          Copper-Based Fungicides: Provide preventive protection and control
          bacterial growth on the rice plant's tissues.
        </ListItem>
        <ListItem>
          Streptomycin: An antibiotic effective against bacterial pathogens,
          including Xanthomonas oryzae pv. oryzae.
        </ListItem>
        <ListItem>
          Kasugamycin: An antibiotic that can be used to manage bacterial leaf
          blight in rice plants.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Rice Bacterial Leaf Blight:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Increase the application of nitrogen-based fertilizers, such as urea or
        ammonium sulfate, to support the rice's recovery and strengthen its
        resistance to disease.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Apply a targeted pesticide like copper-based fungicides or
        kasugamycin immediately after detecting rice bacterial leaf blight
        symptoms. Early intervention can prevent the spread of the disease to
        other plants and minimize damage.
      </ListItem>
    </List>

    <Subheading>Severe Rice Bacterial Leaf Blight Outbreak:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like
        nitrogen, phosphorus, and potassium to support the overall health of the
        rice plants, as severe infections can deplete the plant's nutrient
        reserves.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        In cases of severe rice bacterial leaf blight outbreaks, consult with
        agricultural experts or extension services for appropriate pesticide
        recommendations. They may suggest a combination of systemic and
        protective pesticides to manage the disease effectively.
      </ListItem>
    </List>

    <Subheading>Disease Resistance and Crop Rotation:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, which can indirectly enhance the plant's disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the bacterial population. Implement crop
        rotation practices to break the disease cycle and minimize the recurrence
        of rice bacterial leaf blight.
      </ListItem>
    </List>

    <Subheading>Weather and Environmental Factors:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing
        nitrogen applications to prevent leaching and potential environmental
        issues.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply pesticides
        proactively when conditions are favorable for rice bacterial leaf blight
        development.
      </ListItem>
    </List>
    <Subheading>Local Regulations and Safety:</Subheading>

    <p>
      Always follow local regulations and safety guidelines regarding the use of
      fertilizers and pesticides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques
      when handling and applying fertilizers and pesticides.
    </p>
    <p>
      It is essential to follow the recommended application rates and timings to
      avoid any negative effects on the environment and non-target organisms.
      Consult with agricultural experts or local extension services for proper
      usage guidelines and safety precautions.
    </p>
  </Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
  <Container>
    <Heading>چاول کی بیکٹیریل پتی بیماری (Rice Bacterial Leaf Blight)</Heading>
    <Description>
      <strong>تفصیل (Description):</strong> چاول کی بیکٹیریل پتی بیماری، جو
      کے بیکٹیریم زنتھوموناس اورائزے پی وی اورائزے کے باعث ہوتی ہے، چاول کے پودوں
      کو متاثرہ کرنے والی ایک شدید بیماری ہے۔ بیکٹیریم پودوں کو چوتھاؤں یا
      طبیعی روائندوں کے ذرائع سے چاول کے پودوں میں داخل ہوتا ہے، مثلاً استومٹا۔
      ایک بار پودے میں داخل ہونے کے بعد، یہ پتیوں پر پانی سے بھرے ہوئے نیلے رنگ کے
      لیسنیز بنا دیتا ہے۔ بیماری کے پیش رفت کے ساتھ ساتھ، یہ لیسنیز بڑھتے ہیں اور
      سیاہی کے رنگ کو ہوتے ہیں، جس سے متاثرہ پتیاں خشک ہوتی ہیں اور مر جاتی ہیں۔
      شدید انفیکشن کی صورت میں، بیماری زیادہ پیداوار کے لئے بڑھتے ہوئے خطرے کا
      باعث بن سکتی ہے۔
      <Subheading>علامات (Symptoms):</Subheading>
      چاول کی بیکٹیریل پتی بیماری کے علامات میں شامل ہیں:
    </Description>
    <List>
      <ListItem>پتیوں پر پانی سے بھرے ہوئے نیلے رنگ کے لیسنیز۔</ListItem>
      <ListItem>بیماری کے پیش رفت کے ساتھ ساتھ، لیسنیز بڑھتے ہیں اور سیاہی کے رنگ کو ہوتے ہیں۔</ListItem>
      <ListItem>متاثرہ پتیوں کی خشک ہونا اور مرنا۔</ListItem>
      <ListItem>شدید انفیکشن کی صورت میں، پیداوار میں کمی کا شکار ہو سکتی ہے۔</ListItem>
    </List>
    <Subheading>وجوہات (Causes):</Subheading>
    چاول کی بیکٹیریل پتی بیماری کا باعث بیکٹیریم زنتھوموناس اورائزے پی وی اورائزے ہے۔
    یہ بیکٹیریم پودوں کو چوتھاؤں یا طبیعی روائندوں کے ذرائع سے چاول کے پودوں میں
    داخل ہوتا ہے، مثلاً استومٹا۔ ایک بار پودے میں داخل ہونے کے بعد، یہ پودے کے
    عروقی نظام میں تفشیش کرتا ہے، جس سے بیماری کے خصوصی علامات پیدا ہوتے ہیں۔
    <Subheading>پیداوار پر اثرات (Impact on Crops):</Subheading>
    چاول کی بیکٹیریل پتی بیماری چاول کی پیداوار پر مختلف اثرات ڈال سکتی ہے۔ بیماری
    پتیوں کی تصویر کار کا کفایت کمی کر سکتی ہے، جس سے گرین فلنگ میں کمی ہوتی ہے
    اور پیداوار کم ہوتی ہے۔ شدید انفیکشن کی صورت میں، پودے کی جلد جلد کی توسیف کیوں
    کے نتیجے میں کمی ہوتی ہے اور کچھ مواقع پر مکمل پیداوار کم ہو جاتی ہے۔
    <Subheading>روک تھام اور نظم بہبود (Prevention and Management):</Subheading>
    چاول کی بیکٹیریل پتی بیماری کو پودے میں ایک بار متاثرہ ہونے کے بعد، براہ راست علاج
    کرنے کا کوئی حل نہیں ہے لیکن اس کے دوسرے پھیلاؤ کو کم کرنے اور اس کے اثرات کو
    کم کرنے کے لئے کئی روک تھام اور نظم بہبود اقدامات مدد فراہم کر سکتے ہیں۔ یہ
    اقدامات شامل ہیں:
    <List>
      <ListItem>
        <strong>1. بیماری سے پاک بیجوں کا استعمال:</strong> بیماری سے پاک بیجوں کے
        استعمال سے نئے کھیتوں میں بیکٹیریم کی داخل ہونے کی پیش رفت روکی جا سکتی ہے۔
      </ListItem>
      <ListItem>
        <strong>2. اوپر سے پانی دینے سے اجتناب:</strong> بیکٹیریل بلائٹ پانی کے ذریعہ
        پھیلتا ہے، لہذا اوپر سے پانی دینے سے بیماری کے پھیلاؤ کو کم کرنا ممکن ہوتا ہے۔
      </ListItem>
      <ListItem>
        <strong>3. کاشت کے چکر:</strong> کاشت کے چکر اقدامات کو عمل میں لاتے ہوئے
        بیماری کے دورہ کے چکر کو توڑنا اور مٹی میں بیکٹیریم کی جمع ہونے کو کم کرنا
        ممکن ہوتا ہے۔
      </ListItem>
      <ListItem>
        <strong>4. مضبوطیت والے اقسام کا استعمال:</strong> بیکٹیریل پتی سے مضبوطیت
        والے اقسام کے چاول کے اقسام کا استعمال بیماری کے خلاف محفوظ مدت فراہم کر سکتا ہے۔
      </ListItem>
      <ListItem>
        <strong>5. کاپر بیسڈ فنگی سائیڈ:</strong> کاپر بیسڈ فنگی سائیڈ متعارف کر سکتے ہیں
        کہ بیماری سے بچاؤ کے لئے پیشگوئی طور پر استعمال کیا جائے۔ درست فنگائڈ کا
        انتخاب اور اطلاق کے راہنماؤں کے لئے زراعتی ماہرین سے مشورہ کریں۔
      </ListItem>
      <ListItem>
        <strong>6. کیٹیبائیوٹکس:</strong> کیٹیبائیوٹکس انفیکشن کو کنٹرول کرنے کے لئے
        استعمال کیے جا سکتے ہیں۔ سٹریپٹومائیسن اور کیسوگامائیسن بیکٹیریل پتی بیماری
        کے انفیکشن کو کنٹرول کرنے کے لئے استعمال کیے جا سکتے ہیں۔ درست کیٹیبائیوٹکس
        اطلاق کے راہنماؤں اور استعمال کی پابندیوں کے لئے زراعتی ماہرین سے مشورہ کریں۔
      </ListItem>
    </List>
    <Subheading>کھاد اور کیڑے ماردار کا استعمال (Fertilizer and Pesticide Use):</Subheading>
    کھاد اور کیڑے ماردار کے استعمال سے چاول کی بیکٹیریل پتی بیماری کے اثرات کو
    کم کرنا ممکن ہوتا ہے۔ کھاد کا مناسب استعمال پودوں کی کلیتی صحت کو بہتر بنا سکتا ہے
    ، جس سے وہ مختلف انفیکشنوں سے محفوظ ہو سکتے ہیں۔ مندرجہ ذیل کھاد اور کیڑے ماردار
    استعمال کی جاسکتی ہیں:
    <Description>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>یوریا: پودوں کی بڑھتی ہوئی شاخ و برگات کے لئے نائٹروجن مہیا کرتا ہے۔</ListItem>
        <ListItem>امونیم سلفیٹ: نائٹروجن فراہم کرتا ہے اور صحیح پھولوں کی ترویج کرتا ہے۔</ListItem>
        <ListItem>امونیم فاسفیٹ: کیلشیم کی موجودگی میں اضافہ کرتا ہے جو سیل وال کی بنیادی بنیاد کو مضبوط کرتا ہے۔</ListItem>
      </List>
    </Description>
    <Description>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>کاپر بیسڈ فنگی سائیڈ: چاول کی بیکٹیریل پتی بیماری کے ساتھ ساتھ دیگر فنگل بیماریوں کے خلاف بھی کارآمد ہے۔</ListItem>
        <ListItem>ستریپٹومائیسن: ایک حفاظتی کیٹیبائیوٹک جو پودے پر پھولوں کی ترویج کے لئے بیکٹیریل انفیکشن سے بچاتا ہے۔</ListItem>
        <ListItem>کیسوگامائیسن: پودے کی اندرونی حفاظت فراہم کرتا ہے اور پودوں کی بافتوں پر فنگل کی بڑھتی ہوئی تشکیل کو روکتا ہے۔</ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>چاول کی بیکٹیریل پتی بیماری کی جلد کا جلد پہچان:</Subheading>
      <strong>کھاد:</strong>
      <List>
        <ListItem>چاول کی بیکٹیریل پتی بیماری کے اثرات کو کم کرنے اور پودوں کی مضبوطیت کو بڑھانے کے لئے، نائٹروجن مہیا کرنے کے لئے یوریا یا امونیم نائٹریٹ کے اطلاق کی تعداد بڑھائیں۔</ListItem>
      </List>
      <strong>کیڑے ماردار:</strong>
      <List>
        <ListItem>چاول کی بیکٹیریل پتی بیماری کے علامات کا پتہ چلنے پر فوراً کاپر بیسڈ فنگی سائیڈ یا سٹریپٹومائیسن کی ٹارگٹ کیٹیبائیوٹک کا استعمال کریں۔ جلد مداخلت سے، بیماری کو دوسرے پودوں میں پھیلنے سے روکا جا سکتا ہے اور نقصان کو کم کیا جا سکتا ہے۔</ListItem>
      </List>

      <Subheading>شدید چاول کی بیکٹیریل پتی بیماری کا پھیلاؤ:</Subheading>
      <strong>کھاد:</strong>
      <List>
        <ListItem>شدید چاول کی بیکٹیریل پتی بیماری کے موسمی پھیلاؤ میں، نائٹروجن، فاسفورس، اور پوٹاشیم جیسے ضروری غذائی عناصر شامل کرتے ہوئے بیجوں کی کلیتی صحت کو بہتر کریں۔</ListItem>
      </List>
      <strong>کیڑے ماردار:</strong>
      <List>
        <ListItem>شدید چاول کی بیکٹیریل پتی بیماری کے موجودہ حالات میں، زراعتی ماہرین یا توسیعی خدمات سے مشورہ کریں کہ مناسب کیٹیبائیوٹک کے موصول تجویزات کے لئے۔ وہ پودوں کی خصوصیات اور ان کے ماحول کے مطابق تجویز کریں۔</ListItem>
      </List>
    </Description>
  </Container>
</Urdu>;

    </>
  );
}
