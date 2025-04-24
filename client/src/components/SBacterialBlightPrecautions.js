import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
    display: flex;
    justify-content: flex-start;  /* Align to the left */
    margin-top: 30px;
    margin-left: 40px;  /* Adjust margin for left alignment */
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
  direction: ltr;  /* Change from rtl to ltr for left-to-right text */
  text-align: left;  /* Align text to the left for Tamil/English */
`;


const English = styled.section``;

export default function SBActerialBlightPrecautions() {
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
            <span>{isUrdu ? "தமிழ்" : "English"}</span>
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
    <Heading>Sugarcane Bacterial Blight (گنا بیکٹیریل بلائٹ)</Heading>
    <Description>
      <strong>Description (விளக்கம்):</strong> Sugarcane bacterial blight is a
      serious disease that affects sugarcane plants. It is caused by the
      bacterium Xanthomonas albilineans, which enters the plant through wounds or
      natural openings. The disease is characterized by white or yellow streaks
      on the leaves, which eventually turn brown and dry out. As the infection
      progresses, the leaves may exhibit a "scalded" appearance. Sugarcane
      bacterial blight can lead to reduced cane yield and economic losses for
      sugarcane farmers.
      <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
      The symptoms of sugarcane bacterial blight include:
    </Description>
    <List>
      <ListItem>White or yellow streaks on the leaves.</ListItem>
      <ListItem>Streaks turning brown and drying out.</ListItem>
      <ListItem>
        Leaves exhibiting a "scalded" appearance due to bacterial infection.
      </ListItem>
      <ListItem>Reduced cane yield and plant vigor.</ListItem>
    </List>
    <Subheading>Causes (காரணம்):</Subheading>
    Sugarcane bacterial blight is caused by the bacterium Xanthomonas albilineans.
    The bacterium infects the sugarcane plant through wounds or natural openings,
    such as leaf scars or stomata. Once inside the plant, it multiplies and spreads,
    leading to the characteristic symptoms observed on the leaves.
    <Subheading>Impact on Crops:</Subheading>
    Sugarcane bacterial blight can have significant negative effects on sugarcane
    crops. The disease causes leaf damage and reduces the plant's photosynthetic
    capacity, resulting in reduced cane yield and lower sugar content in the
    harvested crop. Severe infections can lead to substantial economic losses for
    sugarcane growers.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for sugarcane bacterial blight, several
    preventive and management measures can help mitigate its impact and prevent
    further spread. These measures include:
    <List>
      <ListItem>
        <strong>1. Planting Resistant Varieties:</strong> Choose sugarcane varieties
        that have shown resistance to bacterial blight to reduce the risk of
        infection.
      </ListItem>
      <ListItem>
        <strong>2. Sanitation:</strong> Remove and destroy infected plant material to
        limit the spread of the bacteria. Avoid planting sugarcane in areas with a
        history of bacterial blight.
      </ListItem>
      <ListItem>
        <strong>3. Proper Irrigation:</strong> Maintain optimal irrigation practices to
        prevent water stress, which can make plants more susceptible to infection.
      </ListItem>
      <ListItem>
        <strong>4. Copper-Based Fungicides:</strong> Apply copper-based fungicides as a
        preventive measure to protect plants from bacterial blight. Consult
        agricultural experts for proper fungicide selection and application guidelines.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (சந்தைகள் மற்றும் புழுங்கி மருந்துகளின் பயன்பாடு):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing the impact
    of sugarcane bacterial blight. Proper application of fertilizers can improve the
    overall health of the plants, making them more resilient to infections.
    <Description>
      <strong>Fertilizers (சந்தை):</strong>
      <List>
        <ListItem>Urea: Provides nitrogen, essential for plant growth and development.</ListItem>
        <ListItem>Ammonium Sulfate: Supplies nitrogen and promotes healthy foliage.</ListItem>
        <ListItem>Ammonium Phosphate: Provides phosphorus, essential for root development.</ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (பசுமை மருந்துகள்):</strong>
      <List>
        <ListItem>
          Copper-based Fungicides: Provide systemic protection and control bacterial
          growth on the plant's tissues.
        </ListItem>
        <ListItem>Streptomycin: An antibiotic effective against bacterial pathogens.</ListItem>
        <ListItem>Kasugamycin: A bactericide used to control bacterial diseases.</ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Sugarcane Bacterial Blight:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Increase the application of nitrogen-based fertilizers, such as urea or
        ammonium sulfate, to support sugarcane's recovery and strengthen its
        resistance to disease.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Apply a targeted bactericide like streptomycin or kasugamycin immediately
        after detecting sugarcane bacterial blight symptoms. Early intervention can
        prevent the spread of the disease to other plants and minimize damage.
      </ListItem>
    </List>

    <Subheading>Severe Sugarcane Bacterial Blight Outbreak:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like nitrogen,
        phosphorus, and potassium to support the overall health of the sugarcane
        plants, as severe infections can deplete the plant's nutrient reserves.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        In cases of severe sugarcane bacterial blight outbreaks, consult with
        agricultural experts or extension services for appropriate bactericide
        recommendations. They may suggest a combination of systemic and protective
        bactericides to manage the disease effectively.
      </ListItem>
    </List>

    <Subheading>Disease Resistance and Planting Practices:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its health
        and fertility, which can indirectly enhance the plant's disease resistance.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Rotate bactericides with different modes of action to reduce the risk of
        developing resistance in the bacterial population. Implement planting
        practices that promote good airflow and reduce leaf wetness to minimize
        bacterial blight incidence.
      </ListItem>
    </List>

    <Subheading>Weather and Environmental Factors:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing nitrogen
        applications to prevent leaching and potential environmental issues.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply bactericides
        proactively when conditions are favorable for sugarcane bacterial blight
        development.
      </ListItem>
    </List>

    <Subheading>Local Regulations and Safety:</Subheading>

    <p>
      Always follow local regulations and safety guidelines regarding the use of
      fertilizers and bactericides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques when
      handling and applying fertilizers and bactericides.
    </p>
  </Container>
</English>

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
<Container>
    <Heading>சர்க்கரைத்தேரி பாக்டீரியா பிளைட் (Sugarcane Bacterial Blight)</Heading>
    <Description>
      <strong>விளக்கம் (Description):</strong> சர்க்கரைத்தேரி பாக்டீரியா பிளைட் என்பது சர்க்கரைப்பயிர்களின் பாவனையை பாதிக்கும் ஒரு தீவிர நோயாகும். இந்த நோய் கிருமிகள் நேரடியாக அல்லது இயற்கை வழிகளில் நுழைகின்றன, உதாரணமாக, இலையின் குறியீட்டுகள் அல்லது ஸ்டோமாடாவுக்கு மூலம். நோயின் அறிகுறிகளாக வெள்ளை அல்லது மஞ்சள் நிறத்தில் கோடுகளின் தோற்றம், அதன்பின் அது பழுப்பு நிறம் ஆகி சுருங்குவது. நோய் அதிகரிக்கும்போது, இலைகள் பரவலாக காணப்படலாம். சர்க்கரைத்தேரி பாக்டீரியா பிளைட் சர்க்கரைப்பயிரின் உற்பத்தியை குறைத்து, விவசாயிகளுக்கு பொருளாதார பாதிப்பை ஏற்படுத்தலாம்.
      <Subheading>அறிகுறிகள் (Symptoms):</Subheading>
      சர்க்கரைத்தேரி பாக்டீரியா பிளைட்டின் அறிகுறிகளாக உள்ளன:
    </Description>
    <List>
      <ListItem>இலையில் வெள்ளை அல்லது மஞ்சள் நிற கோடுகள் தோற்றம்.</ListItem>
      <ListItem>கோடுகளின் பழுப்பு நிறம் மற்றும் சுருங்குதல்.</ListItem>
      <ListItem>இலைகள் பரவலாக காணப்படுதல், இது பாக்டீரிய நோயின் காரணமாக ஏற்படும்.</ListItem>
      <ListItem>சர்க்கரைப்பயிரின் உற்பத்தி குறைவு மற்றும் செடி வாழ்வின் குறைவு.</ListItem>
    </List>
    <Subheading>காரணங்கள் (Causes):</Subheading>
    சர்க்கரைத்தேரி பாக்டீரியா பிளைட் இன் காரணம் Xanthomonas albilineans என்ற பாக்டீரியா ஆகும். இந்த பாக்டீரியா செடிக்கு குறியீட்டுகள் அல்லது ஸ்டோமாடா மூலம் பாதிப்பை ஏற்படுத்துகின்றது. ஒருமுறை இது செடியின் உள்ளே நுழைந்ததும், அது வேகமாக பெருக்கிக்கொண்டு பரவுகிறது, இதனால் இலையில் குறிப்பிட்ட அறிகுறிகள் தோன்றுகின்றன.
    <Subheading>விவசாய உற்பத்தி மீது பாதிப்புகள் (Impact on Crops):</Subheading>
    சர்க்கரைத்தேரி பாக்டீரியா பிளைட் சர்க்கரைப்பயிரின் விவசாயத்தில் மிக மோசமான பாதிப்புகளை ஏற்படுத்தலாம். இந்த நோய் இலையை சேதப்படுத்தி செடியின் பூச்சி சுழற்சி திறனைக் குறைக்கின்றது, இதனால் உற்பத்தி குறைந்து, கிடைக்கும் பயிரில் சர்க்கரையின் அளவு குறைகின்றது. கடுமையான பாதிப்பின் போது விவசாயிகளுக்கு பொருளாதார இழப்புகள் ஏற்படலாம்.
    <Subheading>தடுப்பு மற்றும் மேலாண்மை (Prevention and Management):</Subheading>
    சர்க்கரைத்தேரி பாக்டீரியா பிளைட் எவ்வாறு முழுமையான முறையில் குணமடைந்து குணப்படுத்தப்படும் என்றால், நோயின் பாதிப்பை குறைக்கும் மற்றும் மேலும் பரவலை தடுக்கும் பல தடுப்பு மற்றும் மேலாண்மை நடவடிக்கைகள் மேற்கொள்ளப்படலாம். இதில் உள்ளவை:
    <List>
      <ListItem>
        <strong>1. பலவந்த வகைகளின் பயிர்ச்சி:</strong> பாக்டீரியா பிளைட்டுக்கு எதிரான முந்தைய நிலைகள் கொண்ட சர்க்கரைப்பயிரின் வகைகளை தேர்வு செய்யவும், இதனால் பாதிப்பின் ஆபத்து குறைக்கப்படலாம்.
      </ListItem>
      <ListItem>
        <strong>2. சுத்தம்:</strong> பாதிக்கப்பட்ட செடி பொருட்களை அகற்றுவதன் மூலம் பாக்டீரியாவின் பரவலைத் தடுக்கும். சர்க்கரைத் தோட்டங்களில் பாக்டீரியா பிளைட் பரவிய இடங்களில் பயிர்ச்சியை தவிர்க்கவும்.
      </ListItem>
      <ListItem>
        <strong>3. சரியான தண்ணீர் புழக்கம்:</strong> செடிகளை மிக அதிக நீரேற்றத்திலிருந்து பாதுகாக்க குறைந்த அளவு நீர்ப்பாசன முறையை ஏற்கவும், இது பாக்டீரியா பரவலை குறைக்கும்.
      </ListItem>
      <ListItem>
        <strong>4. கோப்பர் அடிப்படையிலான பூச்சிக்கொல்லிகள்:</strong> பாக்டீரியா பிளைட்டுக்கு எதிராக கோப்பர் அடிப்படையிலான பூச்சிக்கொல்லிகள் பயன்படுத்தவும். சரியான பூச்சிக்கொல்லி தேர்வு மற்றும் பயன்படுத்துவதற்கான விவசாய ஆலோசனைகளைப் பெறவும்.
      </ListItem>
    </List>
    <Subheading>சர்க்கரைப்பயிரின் உரமும் பூச்சிக்கொல்லி பயன்பாடு (Fertilizer and Pesticide Use):</Subheading>
    சர்க்கரைத்தேரி பாக்டீரியா பிளைட்டை கட்டுப்படுத்த உரங்களும் பூச்சிக்கொல்லிகளும் உதவலாம். உரங்களின் சரியான பயன்பாட்டினால் செடியின் மொத்த ஆரோக்கியத்தை மேம்படுத்துவதன் மூலம் அவை நோய் எதிர்ப்பு அதிகரிக்கின்றன.
    <Description>
      <strong>உரங்கள் (Fertilizers):</strong>
      <List>
        <ListItem>உரியா: செடிகளின் வளர்ச்சிக்கும் முன்னேற்றத்திற்கும் தேவையான நைட்ரஜனை வழங்குகிறது.</ListItem>
        <ListItem>அமோனியம் சல்பேட்: நைட்ரஜனை வழங்குகிறது மற்றும் சரியான இலையின் புத்துணர்வு வளர்ச்சியை ஊக்குவிக்கிறது.</ListItem>
        <ListItem>அமோனியம் பாஸ்பேட்: köணின் வளர்ச்சிக்கான தேவையான பாஸ்பரஸ் வழங்குகிறது.</ListItem>
      </List>
    </Description>
    <Description>
      <strong>பூச்சிக்கொல்லிகள் (Pesticides):</strong>
      <List>
        <ListItem>கோப்பரின் அடிப்படையில் உள்ள பூச்சிக்கொல்லிகள்: செடிகளின் உள்ளே பாக்டீரியாவின் வளர்ச்சியைத் தடுப்பவை மற்றும் பாக்டீரியா பிளைட் எதிராக பாதுகாப்பை வழங்கும்.</ListItem>
        <ListItem>ஸ்ட்ரெப்டோமைசின்: பாக்டீரியா எதிராக பலவீனமான எண்டி-பயோடிக்ஸ்.</ListItem>
        <ListItem>காசோகாமைசின்: பாக்டீரியா நோய்களை கட்டுப்படுத்த பயன்படும் பாக்டெரயிட்.</ListItem>
      </List>
    </Description>
    <Subheading>சர்க்கரைத்தேரி பாக்டீரியா பிளைட் அடையாளம் கண்டு பிடிப்பு (Early Detection of Sugarcane Bacterial Blight):</Subheading>
    <strong>உரங்கள் (Fertilizers):</strong>
    <List>
      <ListItem>
        சர்க்கரைப்பயிரின் முன்னேற்றத்தைப் பெற உதவும் மற்றும் நோய் எதிர்ப்பு மையமாக்க பயன்படுத்த உரங்களை பரிந்துரைக்கவும்.
      </ListItem>
    </List>
    <strong>பூச்சிக்கொல்லிகள் (Pesticides):</strong>
    <List>
      <ListItem>
        சர்க்கரைப்பயிரின் பாக்டீரியா பிளைட் அறிகுறிகள் கண்டுபிடித்தவுடன், உடனே ஸ்ட்ரெப்டோமைசின் அல்லது காசோகாமைசின் போன்ற உரமாகக் குறிப்பிடப்படும் பூச்சிக்கொல்லிகளை பயன்படுத்தவும். முன்னதாக நடவடிக்கைகளை எடுப்பது நோய் பரவலையே தடுக்கக்கூடும்.
      </ListItem>
    </List>

    <Subheading>கடுமையான சர்க்கரைத்தேரி பாக்டீரியா பிளைட் பரவல் (Severe Sugarcane Bacterial Blight Outbreak):</Subheading>
    <strong>உரங்கள் (Fertilizers):</strong>
    <List>
      <ListItem>
        கடுமையான சர்க்கரைத்தேரி பாக்டீரியா பிளைட் பரவல் சூழலில், சர்க்கரைப்பயிரின் மொத்த ஆரோக்கியத்தை மேம்படுத்த நைட்ரஜன், பாஸ்பரஸ், மற்றும் பொட்டாசியம் போன்ற தேவையான கூறுகளை வழங்கும் உரங்களை பயன்படுத்தவும்.
      </ListItem>
    </List>
    <strong>பூச்சிக்கொல்லிகள் (Pesticides):</strong>
    <List>
      <ListItem>
        கடுமையான சர்க்கரைத்தேரி பாக்டீரியா பிளைட் பரவல் சூழலில், விவசாய ஆலோசகர்களை அணுகி பரிந்துரைக்கப்படும்வேலை பெற்ற பூச்சிக்கொல்லிகளைப் பயன்படுத்தவும்.
      </ListItem>
    </List>

    <Subheading>நோயின் எதிர்ப்பு மற்றும் செடி பயிர்ச்சி நடைமுறைகள் (Disease Resistance and Planting Practices):</Subheading>
    <strong>உரங்கள் (Fertilizers):</strong>
    <List>
      <ListItem>
        மின் மற்றும் மேலாண்மையின் நோக்கத்தில் செடி பயிர்ச்சியில் உள்ள கருத்துகளை விரிவாக்கத்தை உறுதிப்படுத்தவும். தவிர்ந்தும் கோப்பர் பூச்சிக்கொல்லிகளை சரியான நேரத்தில் பயன்படுத்தவும்.
      </ListItem>
    </List>
</Container>
</Urdu>

    </>
  );
}
