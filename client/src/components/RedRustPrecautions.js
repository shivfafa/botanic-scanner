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

export default function RedRustPrecautions() {
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
<Heading>Sugarcane Red Rust</Heading>
<Description>
<strong>Description:</strong> Sugarcane red rust, also known as red rust disease, is a fungal infection that affects sugarcane plants. It is caused by the fungus Puccinia melanocephala, which primarily attacks the leaves of the sugarcane plant. The disease is characterized by the development of reddish-brown, elongated, and powdery pustules on the leaf surface, which contain fungal spores. These pustules can coalesce, leading to the yellowing and drying of leaves, and can severely impact the overall health and productivity of sugarcane crops.
<Subheading>Symptoms:</Subheading>
The symptoms of sugarcane red rust include:
</Description>
<List>
<ListItem>Formation of reddish-brown, elongated pustules on the upper leaf surface.</ListItem>
<ListItem>
Pustules may merge, causing larger lesions with irregular edges.
</ListItem>
<ListItem>Yellowing of leaves, starting from the tips and progressing towards the base.</ListItem>
<ListItem>Premature drying and shedding of infected leaves.</ListItem>
<ListItem>
Severe infections can lead to stunted growth and reduced cane yield.
</ListItem>
</List>
<Subheading>Causes:</Subheading>
Sugarcane red rust is caused by the fungus Puccinia melanocephala. The disease spreads through airborne spores and can be facilitated by wind, rain, or mechanical means. Warm and humid weather conditions favor the rapid development and spread of the fungus, making sugarcane crops more susceptible during such periods.
<Subheading>Impact on Crops:</Subheading>
Sugarcane red rust can have significant negative effects on sugarcane crops. The infection weakens the plant by affecting its photosynthetic capacity and nutrient absorption, leading to reduced cane growth and sugar content. Severe and uncontrolled outbreaks can cause significant economic losses due to decreased yields and compromised sugar quality.
<Subheading>Prevention and Management:</Subheading>
While complete eradication of sugarcane red rust may be challenging, various preventive and management strategies can help reduce its impact and spread. These measures include:
<List>
<ListItem>
<strong>1. Resistant Varieties:</strong> Planting sugarcane varieties that exhibit resistance to red rust can help minimize the disease's impact. Consult local agricultural authorities for information on suitable resistant cultivars.
</ListItem>
<ListItem>
<strong>2. Sanitation:</strong> Properly manage and dispose of crop residues to reduce the presence of the fungus in the field. This includes the removal and destruction of infected plant material after harvest.
</ListItem>
<ListItem>
<strong>3. Fungicides:</strong> Application of appropriate fungicides can help control the spread of red rust. Consult agricultural experts for guidance on fungicide selection and application timing.
</ListItem>
<ListItem>
<strong>4. Monitoring:</strong> Regularly inspect sugarcane fields for early signs of red rust and take immediate action if detected. Early intervention can prevent the disease from spreading to healthy plants.
</ListItem>
<ListItem>
<strong>5. Crop Rotation:</strong> Practicing crop rotation with non-host crops can disrupt the disease cycle and reduce the fungus's build-up in the soil.
</ListItem>
<ListItem>
<strong>6. Weather Monitoring:</strong> Monitor weather conditions, especially during periods of high humidity and rainfall, and be prepared to implement preventive measures when conditions favor disease development.
</ListItem>
</List>
<Subheading>Fertilizer and Pesticide Use:</Subheading>
Proper fertilizer application can improve the plant's overall health, making it more resilient to infections. Recommended fertilizers for sugarcane cultivation include those containing nitrogen, phosphorus, and potassium to support robust growth and development.
<Subheading>Local Regulations and Safety:</Subheading>
<p>
  Always follow local regulations and safety guidelines regarding the use of fertilizers and pesticides.
</p>
<p>
  Use personal protective equipment (PPE) and proper application techniques when handling and applying fertilizers and pesticides.
</p>
</Container>
</English>





<Urdu style={{ display: isUrdu ? "block" : "none" }}>
<Container>
<Heading>சர்க்கரை கனி சிவப்பு உருகல்</Heading>
<Description>
<strong>விளக்கம்:</strong> சர்க்கரை கனி சிவப்பு உருகல், மேலும் சிவப்பு உருகல் நோயாகவும் அறியப்படுகிறது, இது ஒரு விவசாய நோயாகும், இது கனி மாலிகையை தாக்கும் இயற்கை பூஞ்சை தொற்று ஆகும். இந்த பூஞ்சை Puccinia melanocephala எனப்படும் வகை மூலம் ஏற்படுகிறது, இது அடிப்படையாக கனி இலைகளை பாதிக்கின்றது. இந்த நோயின் அறிகுறி என்பது இலை மீது சிவப்பு பழுப்பு நிறத்தில் நீளமான கறுப்பான புள்ளிகள் தோன்றுகின்றன, அவை பூஞ்சை ஸ்போர்களால் நிரப்பப்படுகின்றன. இந்த கறுப்பான புள்ளிகள் கலந்து, இலைகளின் மடிக்கலை மற்றும் சுருண்டலுக்கு காரணமாகின்றன, மேலும் கனி வகை மற்றும் உற்பத்தி மீது பாதிப்பை ஏற்படுத்த முடியும்.
</Description>
<Subheading>அறிகுறிகள்:</Subheading>
சர்க்கரை கனி சிவப்பு உருகலின் அறிகுறிகள்:

<List>
<ListItem>இலைகளின் மேற்பரப்பில் சிவப்பு பழுப்பு நிறத்தில் நீளமான கறுப்பான புள்ளிகள் தோன்றுதல்.</ListItem>
<ListItem>கறுப்பான புள்ளிகள் கலந்து, அவற்றின் வழிகளின் நடுவில் பெரிய புள்ளிகள் தோன்றலாம்.</ListItem>
<ListItem>இலைகளின் மஞ்சள் நிறமாக மாறுதல், இது மேற்பரப்பில் தொடங்கி அடிப்பகுதியில் பரவுகிறது.</ListItem>
<ListItem>பாதிக்கப்பட்ட இலைகள் விரைந்து சுருங்கி விழப்போகின்றன.</ListItem>
<ListItem>கடுமையான தொற்றுகள் உண்டானால், புழங்கல் மற்றும் சர்க்கரை கனி உற்பத்தி குறைவாகும்.</ListItem>
</List>
<Subheading>காரணங்கள்:</Subheading>
சர்க்கரை கனி சிவப்பு உருகலின் காரணம் Puccinia melanocephala எனப்படும் பூஞ்சை வகையாகும். இந்த நோய் காற்றின் மூலம் பரவும் ஸ்போர்களால் பரவுகிறது, மேலும் காற்று, மழை அல்லது மெக்கானிக்கல் முறைகள் மூலம் பரவல் ஏற்படுகிறது. சூடான மற்றும் ஈரமான பருவ நிலைகள் பூஞ்சை விரைவான வளர்ச்சிக்கும் பரவலுக்கும் உதவுகின்றன, இதனால் இந்த பருவங்களில் கனி பயிர்கள் அதிகப் பட்ச அபாயத்திற்கு உள்ளாகின்றன.

<Subheading>பயிர்களுக்கு தாக்கம்:</Subheading>
சர்க்கரை கனி சிவப்பு உருகல், கனி பயிர்களின் விளைவுகளுக்கு நெகிழ்வுகளை உருவாக்கும். இந்த தொற்று, வினோத வேதியியல் மற்றும் ஊட்டச்சத்து அடிப்படையை பாதித்துப் பயிரின் தக்கவைத்தலை குறைத்து, சர்க்கரையின் அளவு குறையும். கடுமையான மற்றும் கட்டுப்பாட்டில்லாத பரவலின் காரணமாக பயிர்களின் உற்பத்தி குறைவாகி, சர்க்கரையின் தரம் பாதிக்கப்படும்.

<Subheading>தடுக்குமுறை மற்றும் மேலாண்மை:</Subheading>
சர்க்கரை கனி சிவப்பு உருகலின் முழுமையான நீக்குதல் கடினமாக இருக்கலாம், ஆனால் பல தடுக்குமுறை மற்றும் மேலாண்மை நடவடிக்கைகள், இந்த நோயின் தாக்கங்களை குறைக்கும் மற்றும் பரவலை தடுக்க உதவுகின்றன. இந்த நடவடிக்கைகள்:

<List>
<ListItem>
<strong>1. பாதிப்புகளுக்கு எதிரான நிலைகள்:</strong> சிவப்பு உருகலுக்கு எதிராக நிலைகளின் பயிர்களை உற்பத்தி செய்தால் இந்த நோயின் தாக்கங்களை குறைக்கலாம். சரியான மக்காணா உற்பத்தி நிறுவனங்களுடன் தொடர்பு கொண்டு, பாதிப்புகளுக்கு எதிரான நிலைகளின் விவரங்களைப் பெறவும்.
</ListItem>
<ListItem>
<strong>2. சுத்தம்:</strong> பயிர்கள் பராமரிப்பு செய்யும் போது, பாதிக்கப்பட்ட கனி பயிர்களை வெட்டிக்கொண்டு அழிப்பது, இது பூஞ்சை தொற்றின் பரவலை குறைக்கும்.
</ListItem>
<ListItem>
<strong>3. பூஞ்சை கொறுக்கி:</strong> சரியான பூஞ்சை கொறுக்கி பயன்படுத்துதல், சிவப்பு உருகலின் பரவலை கட்டுப்படுத்த உதவலாம். பூஞ்சை கொறுக்கி பயன்படுத்துவதற்கு முன்பு, களத்துறை நிபுணர்களிடம் ஆலோசனை பெறவும்.
</ListItem>
<ListItem>
<strong>4. கண்காணிப்பு:</strong> சிவப்பு உருகலின் பாதிப்புகளை உறுதிப்படுத்த, கனி நிலங்கள் பரிசோதிக்கப்படும் மற்றும் தொடர் தூரிகையில் கண்காணிக்கப்படுவதாக உறுதி செய்யவும். அவை எடுக்கும் நடவடிக்கைகளில் மிகுந்த முக்கியத்துவம்.
</ListItem>
<ListItem>
<strong>5. பயிர்களுக்கான மாற்றம்:</strong> பூஞ்சை சமயங்களில் மாறுபட்ட நிலைகளுக்கு பயிர்களை மாற்றுவது, பூஞ்சை நீக்குவதற்கு உதவும்.
</ListItem>
<ListItem>
<strong>6. பருவ நிலைகள் பார்வை:</strong> பருவ நிலைகள், குறிப்பாக வெப்பமான மற்றும் மழைக்கான நிலைகள் மூலம், பார்வை வைத்து சரியான நடவடிக்கைகள் எடுத்துக் கொள்ளவும்.
</ListItem>
</List>
<Subheading>உரங்கள் மற்றும் பூச்சி மருந்துகளின் பயன்பாடு:</Subheading>
சரியான உரங்களின் பயன்பாடு, பயிர்களின் சக்தி அளவையும் அதிகரிக்க உதவும், இது தொற்றுகள் ஏற்படும் சாத்தியங்களை குறைக்கும். கனி பயிர்களுக்கு பரிந்துரைக்கப்படும் உரங்களில், நைட்ரஜன், பாஸ்போரஸ் மற்றும் பொட்டாசியம் ஆகியவை உள்ளன, இது செல்வாக்கான வளர்ச்சியை ஆதரிக்கின்றன.

<Subheading>பாதுகாப்பு வழிகாட்டிகள் மற்றும் இட local வழிகாட்டிகள்:</Subheading>

<p>
  எப்போதும் உரம் மற்றும் பூச்சி மருந்துகளின் பயன்பாட்டின் போது, இட local வழிகாட்டிகள் மற்றும் பாதுகாப்பு நெறிமுறைகளை பின்பற்றவும்.
</p>
<p>
  உரங்கள் மற்றும் பூச்சி மருந்துகளைப் பயன்படுத்தும் போது, தனிப்பட்ட பாதுகாப்பு உபகரணங்களை (PPE) பயன்படுத்தவும் மற்றும் முறையான பயன்பாட்டுக் கலைஞர்களை பின்பற்றவும்.
</p>
</Container>
</Urdu>
    </>
  );
}
