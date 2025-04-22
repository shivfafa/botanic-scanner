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

export default function HispaPrecautions() {
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
    <Heading>Rice Hispa Disease (چاول کی ہسپا بیماری)</Heading>
    <Description>
      <strong>Description (تفصیل):</strong> Rice Hispa, scientifically known as
      Dicladispa armigera, is a common insect pest that affects rice plants.
      The adult Hispa beetles feed on the leaves of rice plants, while the
      larvae cause damage by mining inside the leaves. Severe infestations can
      lead to significant yield losses in rice crops.
    </Description>
    <Subheading>Symptoms (علامات):</Subheading>
    The symptoms of Rice Hispa disease include:
    <List>
      <ListItem>Presence of small, elongated holes on the leaves.</ListItem>
      <ListItem>
        White or transparent windowpane-like patches caused by larval feeding.
      </ListItem>
      <ListItem>Curled or rolled leaves due to damage.</ListItem>
      <ListItem>
        In severe cases, defoliation and reduced growth of rice plants.
      </ListItem>
    </List>
    <Subheading>Causes (وجہ):</Subheading>
    Rice Hispa is caused by the feeding activities of the Hispa beetles and
    their larvae on rice plants.
    <Subheading>Impact on Crops (فصلوں پر اثرات):</Subheading>
    Rice Hispa infestations can lead to reduced photosynthetic activity and
    stunted growth of rice plants, resulting in decreased yield and poor grain
    quality.
    <Subheading>Prevention and Management (روک تھام اور انتظام):</Subheading>
    Several measures can help manage and minimize the impact of Rice Hispa
    disease:
    <List>
      <ListItem>
        <strong>1. Monitoring:</strong> Regularly inspect rice fields for early
        signs of Hispa infestation and take prompt action if detected.
      </ListItem>
      <ListItem>
        <strong>2. Biological Control:</strong> Encourage natural predators
        like spiders, ladybugs, and parasitoid wasps that feed on Hispa beetles
        and larvae.
      </ListItem>
      <ListItem>
        <strong>3. Cultural Practices:</strong> Adopt practices like clean
        cultivation, proper field drainage, and removal of weed hosts to
        minimize Hispa populations.
      </ListItem>
      <ListItem>
        <strong>4. Chemical Control:</strong> When Hispa populations exceed
        economic thresholds, use pesticides to control the infestation. Apply
        pesticides during the early stages of the pest's life cycle for better
        efficacy.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Hispa disease. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the infestation.
    <Description>
      <strong>Fertilizers (کھاد):</strong>
      <List>
        <ListItem>
          Muriate of Potash: Supplies potassium, essential for plant
          development and overall growth.
        </ListItem>
        <ListItem>
          Potassium Nitrate: Provides nitrogen and potassium for healthy plant
          growth.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (کیڑے ماردار):</strong>
      <List>
        <ListItem>
          Carbaryl: An effective insecticide used for controlling Rice Hispa.
        </ListItem>
        <ListItem>
          Imidacloprid: A systemic insecticide that targets sucking insects
          like Hispa beetles.
        </ListItem>
        <ListItem>
          Fipronil: Provides broad-spectrum control against various pests,
          including Rice Hispa.
        </ListItem>
        <ListItem>
          Thiamethoxam: A neonicotinoid insecticide effective against Hispa
          beetles and larvae.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Rice Hispa (چاول کی ہسپا کی جلد شناخت):</Subheading>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        Apply a targeted insecticide like Carbaryl or Imidacloprid immediately
        after detecting Rice Hispa symptoms. Early intervention can prevent the
        infestation from spreading and causing significant damage.
      </ListItem>
    </List>
    <Subheading>Severe Rice Hispa Infestation (چاول کی ہسپا کی شدید واقعت):</Subheading>
    <strong>Pesticides (کیڑے ماردار):</strong>
    <List>
      <ListItem>
        In cases of severe Rice Hispa infestations, consult with agricultural
        experts or extension services for appropriate pesticide
        recommendations. They may suggest a combination of insecticides to
        manage the infestation effectively.
      </ListItem>
    </List>
    <Subheading>Biological Control (حیاتیاتی ناظمہ بندی):</Subheading>
    <List>
      <ListItem>
        Promote the presence of natural enemies like spiders, ladybugs, and
        parasitoid wasps that feed on Rice Hispa beetles and larvae.
      </ListItem>
    </List>
    <Subheading>Cultural Practices (ثقافتی تراکیب):</Subheading>
    <List>
      <ListItem>
        Implement practices like clean cultivation, proper field drainage, and
        removal of weed hosts to reduce Hispa populations in rice fields.
      </ListItem>
    </List>
    <Subheading>Chemical Control (کیمیائی ناظمہ بندی):</Subheading>
    <List>
      <ListItem>
        Apply pesticides containing Carbaryl, Imidacloprid, Fipronil, or
        Thiamethoxam during the early stages of Hispa infestation when the pest
        is more vulnerable.
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
    <Heading>چاول کی ہسپا بیماری (Rice Hispa Disease)</Heading>
    <Description>
      <strong>تفصیل (Description):</strong> چاول کی ہسپا، جس کو سائنسی طور پر
      ڈکلاڈیسپا آرمیگرا کہا جاتا ہے، ایک عام کیڑا بیماری ہے جو چاول کے پودوں
      پر اثر انداز ہوتی ہے۔ بالغ ہسپا کیچوئیں چاول کے پتوں کو کاٹتی ہیں، جبکہ
      کیڑوں کی کیچوئیں پتوں کے اندر کھود کر نقصان پہنچاتی ہیں۔ شدید بھراؤ میں
      چاول کی فصل میں نقصان پیدا ہوتا ہے۔
    </Description>
    <Subheading>علامات (Symptoms):</Subheading>
    چاول کی ہسپا بیماری کی علامات میں شامل ہیں:
    <List>
      <ListItem>پتوں پر چھوٹے، لمبے نشانے۔</ListItem>
      <ListItem>
        کیچوں کی کھوراک سے پیدا ہونے والے سفید یا شفاف کھچکچہ دار دائرہ۔
      </ListItem>
      <ListItem>نقصان سے پتے موڑے ہوئے ہوتے ہیں۔</ListItem>
      <ListItem>شدید بھراؤ میں پتے کاٹ دیئے جانے سے پودے کی روئی کم ہوتی ہے۔</ListItem>
    </List>
    <Subheading>وجہ (Causes):</Subheading>
    چاول کی ہسپا کا سبب ہسپا کیچوں اور ان کے کیچوں کی کھوراک ہے جو چاول کے
    پودوں پر کھاتے ہیں۔
    <Subheading>فصلوں پر اثرات (Impact on Crops):</Subheading>
    چاول کی ہسپا کیچوں کے حملے سے چاول کی فصل کی زرخیزی کم ہو جاتی ہے اور
    پودوں کی روئی پر اثر انداز ہوتا ہے، جس سے فصل کی کاٹی کم ہوتی ہے اور دانے
    کی معیار بہتر نہیں ہوتا۔
    <Subheading>روک تھام اور انتظام (Prevention and Management):</Subheading>
    چاول کی ہسپا بیماری کے اثرات کو کم کرنے کے لئے کئی تدابیر اختیار کی جا سکتی
    ہیں:
    <List>
      <ListItem>
        <strong>1. نگرانی (Monitoring):</strong> چاول کے کھیتوں کو مستقل دوری
        میں چیک کریں تاکہ ہسپا کے حملے کے ابتدائی علامات کا پتہ چل سکے اور
        جلدی اقدامات اٹھائے جا سکیں۔
      </ListItem>
      <ListItem>
        <strong>2. حیاتیاتی ناظمہ بندی (Biological Control):</strong> ہسپا کیچوں
        اور ان کے کیچوں کو کھاتے ہوئے حیاتی دشمنوں جیسے مکھیاں، بھنڈیں اور
        پیڑوں سے بھرنے کے لئے ترغیب دیں۔
      </ListItem>
      <ListItem>
        <strong>3. ثقافتی تراکیب (Cultural Practices):</strong> چاول کے کھیتوں میں
        ہسپا کیچوں کی تعداد کو کم کرنے کے لئے صاف کشائی، مناسب کھیت کا
        نکاسی اور جھاڑوں کے میزبانوں کے ختم کرنے جیسی تدابیر اختیار کریں۔
      </ListItem>
      <ListItem>
        <strong>4. کیمیائی ناظمہ بندی (Chemical Control):</strong> ہسپا کیچوں کی
        تعداد اقتصادی حد سے زیادہ ہونے پر کیچوں کو کنٹرول کرنے کے لئے کیڑے
        ماردار استعمال کریں۔ کیچوں کی حیاتی دورے کے ابتدائی مراحل میں کیڑے
        ماردار لگائیں تاکہ ان کے اثرات کو کم کیا جا سکے۔
      </ListItem>
    </List>
    <Subheading>کھاد اور کیڑے ماردار کا استعمال (Fertilizer and Pesticide Use):</Subheading>
    کھاد اور کیڑے ماردار کے استعمال سے چاول کی ہسپا بیماری کے اثرات کو کم کرنا
    ممکن ہے۔ کھاد اور ہدفمند کیڑے ماردار کا استعمال چاول کے پودوں کی عمومی
    صحت کو بہتر بنا سکتا ہے اور کیچوں کے حملے کو کنٹرول کر سکتا ہے۔
    <Description>
      <strong>کھاد (Fertilizers):</strong>
      <List>
        <ListItem>
          Muriate of Potash: پودوں کی ترقی اور کلی کے لئے ضروری پوٹاشیم فراہم
          کرتا ہے۔
        </ListItem>
        <ListItem>
          Potassium Nitrate: صحیح پودوں کی ترقی کے لئے نائٹروجن اور پوٹاشیم
          فراہم کرتا ہے۔
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>کیڑے ماردار (Pesticides):</strong>
      <List>
        <ListItem>
          Carbaryl: چاول کی ہسپا کے کنٹرول کے لئے موثر کیڑے ماردار استعمال
          ہوتا ہے۔
        </ListItem>
        <ListItem>
          Imidacloprid: ہسپا کیچوں اور ان کے کیچوں جیسے چوسنے والے کیڑے کے خلاف
          ایک سسٹمک کیڑے ماردار ہے۔
        </ListItem>
        <ListItem>
          Fipronil: چاول کی ہسپا کے ساتھ ساتھ مختلف کیڑے کے خلاف بڑی رقبتی
          کاروائی پیش کرتا ہے۔
        </ListItem>
        <ListItem>
          Thiamethoxam: ہسپا کیچوں اور ان کے کیچوں کے خلاف ایک نئیکوٹینائیڈ
          کیڑے ماردار ہے۔
        </ListItem>
      </List>
    </Description>
    <Subheading>چاول کی ہسپا کی جلد شناخت (Early Detection of Rice Hispa):</Subheading>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        چاول کی ہسپا کی علامات کا پتہ لگنے کے بعد فوراً کاربیرل یا امیڈاکلوپرڈ
        جیسے ہدفمند کیڑے ماردار کا استعمال کریں۔ جلدی اقدامات کا انتظام
        بڑھنے سے کیچوں کے حملے کو روکا جا سکتا ہے اور نقصان کم ہوسکتا ہے۔
      </ListItem>
    </List>
    <Subheading>چاول کی ہسپا کی شدید واقعت (Severe Rice Hispa Infestation):</Subheading>
    <strong>کیڑے ماردار (Pesticides):</strong>
    <List>
      <ListItem>
        شدید چاول کی ہسپا کیچوں کے حملوں کی صورت میں زراعتی ماہرین یا توسیعی
        خدمات سے مناسب کیڑے ماردار کے تجویزات کے لئے رابطہ کریں۔ وہ ترغیب دیں
        گے کہ کسی مختلف کیڑے ماردار کے تنوع کے ساتھ ہسپا کیچوں کے لئے مناسب
        کیڑے ماردار کے مجموعے کو مد نظر رکھتے ہوئے بیماری کا انتظام کیا جا
        سکتا ہے۔
      </ListItem>
    </List>
    <Subheading>حیاتیاتی ناظمہ بندی (Biological Control):</Subheading>
    <List>
      <ListItem>
        ہسپا کیچوں اور ان کے کیچوں کے خلاف مکھیاں، بھنڈیں اور پیڑوں جیسے
        حیاتی دشمنوں کو فروغ دینے کی کوشش کریں۔
      </ListItem>
    </List>
    <Subheading>ثقافتی تراکیب (Cultural Practices):</Subheading>
    <List>
      <ListItem>
        چاول کے کھیتوں میں ہسپا کیچوں کی تعداد کم کرنے کے لئے صاف کشائی،
        مناسب کھیت کا نکاسی اور جھاڑوں کے میزبانوں کے ختم کرنے جیسی تدابیر
        اختیار کریں۔
      </ListItem>
    </List>
    <Subheading>کیمیائی ناظمہ بندی (Chemical Control):</Subheading>
    <List>
      <ListItem>
        ہسپا کیچوں کی تعداد اقتصادی حد سے زیادہ ہونے پر کاربیرل، امیڈاکلوپرڈ،
        فپرونل یا تھائمیتھوکسم جیسے کیڑے ماردار کو استعمال کریں۔
      </ListItem>
    </List>
    <Subheading>مقامی ضوابط اور حفاظتی تدابیر (Local Regulations and Safety):</Subheading>
    <p>
      کھاد اور کیڑے ماردار کے استعمال کے بارے میں مقامی ضوابط اور حفاظتی
      تدابیر کا خیال رکھیں۔
    </p>
    <p>
      کھاد اور کیڑے ماردار کے استعمال کے دوران شخصی تحفظی سامان (PPE) اور
      مناسب کارروائی تکنیک استعمال کریں۔
    </p>
    <p>
      ماحول اور غیر ہدف جانداروں پر کسی برا اثر ہونے سے بچنے کے لئے موصوفہ
      اطمینان کرنا ضروری ہے۔ مقامی زرعی ماہرین یا توسیعی خدمات سے موافق استعمال
      کے دستورالعمل اور حفاظتی تحاظرات کی مشورہ کریں۔
    </p>
  </Container>
</Urdu>

    </>
  );
}
