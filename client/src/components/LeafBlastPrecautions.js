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

export default function LeafBlastPrecautions() {
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
    <Heading>Rice Leaf Blast Disease (அரிசி இலை பிளாஸ்ட் நோய்)</Heading>
    <Description>
      <strong>Description:</strong> Rice Leaf Blast, caused by the fungus
      Magnaporthe oryzae, is a destructive fungal disease that affects rice
      plants. The disease primarily targets the leaves, but it can also infect
      other parts of the plant. Infected plants show characteristic blast-like
      lesions on leaves, reducing photosynthesis and affecting grain
      development.
    </Description>
    <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
    The symptoms of Rice Leaf Blast disease include:
    <List>
      <ListItem>Formation of diamond-shaped or spindle-shaped lesions.</ListItem>
      <ListItem>
        Lesions may have gray or whitish centers and dark borders.
      </ListItem>
      <ListItem>
        Infected leaves may wither, and the disease can progress to the leaf
        collar and sheath.
      </ListItem>
      <ListItem>
        Severely infected panicles may have blank or partially filled grains.
      </ListItem>
    </List>
    <Subheading>Causes (காரணம்):</Subheading>
    Rice Leaf Blast is caused by the fungus Magnaporthe oryzae. The fungus
    spreads through water, air, and infected plant materials.
    <Subheading>Impact on Crops (விவசாய விளைவுகள்):</Subheading>
    Rice Leaf Blast can lead to a significant reduction in yield and grain
    quality. The disease can cause extensive damage to rice crops, affecting
    food security and farmers' income.
    <Subheading>Prevention and Management (தடுப்பு மற்றும் மேலாண்மை):</Subheading>
    While complete eradication of Rice Leaf Blast may not be feasible, several
    measures can help manage the disease and reduce its impact:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties (எதிர்ப்பு வகைகள்):</strong> Planting rice
        varieties with resistance to Rice Leaf Blast can significantly reduce
        disease severity.
      </ListItem>
      <ListItem>
        <strong>2. Crop Rotation (பயிர் சுழற்சி):</strong> Avoid consecutive rice
        plantings in the same field to break the disease cycle.
      </ListItem>
      <ListItem>
        <strong>3. Seed Treatment (விதை சிகிச்சை):</strong> Use certified
        disease-free seeds or treat seeds with appropriate fungicides before
        planting.
      </ListItem>
      <ListItem>
        <strong>4. Fungicides (பூஞ்சை கொல்லிகள்):</strong> Apply fungicides containing
        Pyraclostrobin, Trifloxystrobin, or Propiconazole to control the
        disease. Follow recommended application rates and safety guidelines.
      </ListItem>
      <ListItem>
        <strong>5. Proper Irrigation ( தக்க நீர்ப்பாசனம்):</strong> Avoid excessive
        irrigation, as waterlogged conditions can favor disease development.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (உரத்திற்கு உரிக்கும் மற்றும் பசுமை மருந்துகள் பயன்படுத்துதல்):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Leaf Blast. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the disease.
    <Description>
      <strong>Fertilizers (உரம்):</strong>
      <List>
        <ListItem>
          Zinc Sulfate: Provides zinc, essential for plant growth and enzyme
          activation.
        </ListItem>
        <ListItem>
          Iron Sulfate: Supplies iron, important for chlorophyll production and
          photosynthesis.
        </ListItem>
        <ListItem>
          Boric Acid: Provides boron, which is necessary for cell wall
          formation and carbohydrate metabolism.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (பசுமை மருந்துகள்):</strong>
      <List>
        <ListItem>
          Pyraclostrobin: An effective fungicide specifically used for
          controlling Rice Leaf Blast.
        </ListItem>
        <ListItem>
          Trifloxystrobin: Provides preventive and curative action against fungal
          infections.
        </ListItem>
        <ListItem>
          Propiconazole: Controls a broad spectrum of fungal pathogens,
          including Magnaporthe oryzae.
        </ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>Early Detection of Rice Leaf Blast (அன்னாசி இலை வீசல் நோயின் காலையிலான கண்டுபிடிப்பு):</Subheading>
      <strong>Fertilizers (உரம்):</strong>
      <List>
        <ListItem>
          Increase the application of zinc and iron-based fertilizers to support
          rice plants' recovery and resistance to disease.
        </ListItem>
      </List>
      <strong>Pesticides (பசுமை மருந்துகள்):</strong>
      <List>
        <ListItem>
          Apply a targeted fungicide like Pyraclostrobin or Trifloxystrobin
          immediately after detecting Rice Leaf Blast symptoms. Early
          intervention can prevent the spread of the disease to other plants and
          minimize damage.
        </ListItem>
      </List>
    </Description>
    <Subheading>Severe Rice Leaf Blast Outbreak (அன்னாசி இலை வீசல் நோயின் கடுமையான பரவல்):</Subheading>
    <strong>Fertilizers (உரம்):</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like zinc,
        iron, and boron to support the overall health of rice plants during
        severe infections.
      </ListItem>
    </List>
    <strong>Pesticides (பசுமை மருந்துகள்):</strong>
    <List>
      <ListItem>
        In cases of severe Rice Leaf Blast outbreaks, consult with agricultural
        experts or extension services for appropriate pesticide recommendations.
        They may suggest a combination of fungicides to manage the disease
        effectively.
      </ListItem>
    </List>
    <Subheading>Disease Resistance and Crop Rotation (நோய் எதிர்ப்பு மற்றும் பயிர் சுழற்சி):</Subheading>
    <strong>Fertilizers (உரம்):</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, indirectly enhancing rice plants' disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides (பசுமை மருந்துகள்):</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the fungal population. Implement crop rotation
        practices to break the disease cycle and minimize the recurrence of Rice
        Leaf Blast.
      </ListItem>
    </List>
    <Subheading>Weather and Environmental Factors (பருவநிலை மற்றும் சுற்றுச்சூழல் காரணிகள்):</Subheading>
    <strong>Fertilizers (உரம்):</strong>
    <List>
      <ListItem>
        Adjust the timing and rates of fertilizer applications based on weather
        conditions. During periods of excessive rainfall, consider reducing
        zinc and iron applications to prevent leaching and potential
        environmental issues.
      </ListItem>
    </List>
    <strong>Pesticides (பசுமை மருந்துகள்):</strong>
    <List>
      <ListItem>
        Monitor weather forecasts and disease risk alerts to apply fungicides
        proactively when conditions are favorable for Rice Leaf Blast
        development.
      </ListItem>
    </List>
    <Subheading>Local Regulations and Safety (உள்ளூர் ஒழுங்குகளும் பாதுகாப்பு நடவடிக்கைகளும்):</Subheading>
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
    <Heading>(அரிசி இலை வெடிப்பு நோய்)</Heading>
    <Description>
      <strong>விவரம்:</strong> (அரிசி இலை வெடிப்பு நோய்) என்பது அரிசி செடியை பாதிக்கும் ஒரு பூஞ்சை நோயாகும், இது (மெக்னாபோர்தே ஒரிசே) எனும் பூஞ்சையால் ஏற்படுகிறது.
    </Description>
    <Subheading>(அறிகுறிகள்)</Subheading>
    (அரிசி இலை வெடிப்பு நோய்) அறிகுறிகள்:
    <List>
      <ListItem>இலையில் நீளமான மற்றும் தண்டின் வடிவிலான படுகாயங்கள்.</ListItem>
      <ListItem>படுகாயங்களில் வெள்ளை அல்லது சாம்பல் நிற வளையங்கள்.</ListItem>
      <ListItem>பாதிக்கப்பட்ட இலைகள் கிழியும், நோய் தண்டு மற்றும் கொம்புகள் வரை பரவக்கூடும்.</ListItem>
      <ListItem>பாதிக்கப்பட்ட குழிகள் முழுமையாக அல்லது பகுதியளவில் வெறுமையாக இருக்கும்.</ListItem>
    </List>
    <Subheading>(காரணம்)</Subheading>
    (அரிசி இலை வெடிப்பு நோய்) காரணம் (மெக்னாபோர்தே ஒரிசே) பூஞ்சை. இது நீர், காற்று மற்றும் பாதிக்கப்பட்ட செடிகளின் பகுதிகள் மூலம் பரவுகிறது.
    <Subheading>(விவசாய விளைவுகள்)</Subheading>
    (அரிசி இலை வெடிப்பு நோய்) பரவுவதால் விளைச்சல் குறையும் மற்றும் தரம் பாதிக்கப்படும். இது விவசாயிகளை பொருளாதார இழப்புக்கு உள்ளாக்கும்.
    <Subheading>(தடுப்பு மற்றும் மேலாண்மை)</Subheading>
    (அரிசி இலை வெடிப்பு நோய்) முற்றிலும் அகற்ற இயலாது, ஆனால் சில நடவடிக்கைகள் மூலம் கட்டுப்படுத்த முடியும்:
    <List>
      <ListItem><strong>1. எதிர்ப்பு வகைகள்:</strong> எதிர்ப்பு வகைகள் பயிரிடல் மூலம் நோயின் தாக்கம் குறைக்கலாம்.</ListItem>
      <ListItem><strong>2. பயிர் சுழற்சி:</strong> ஒரே நிலத்தில் தொடர்ச்சியாக அரிசி விளைச்சல் தவிர்க்கவும்.</ListItem>
      <ListItem><strong>3. விதை பராமரிப்பு:</strong> ஆரோக்கியமான விதைகள் அல்லது பூஞ்சை நாசினிகளுடன் விதை பராமரிக்கவும்.</ListItem>
      <ListItem><strong>4. பூஞ்சை நாசினிகள்:</strong> பைரக்ளோஸ்ட்ரோபின், ட்ரைஃப்ளோக்ஸ்ட்ரோபின் அல்லது ப்ரோபிகோனாசோல் கொண்ட பூஞ்சை நாசினிகளை பயன்படுத்தவும்.</ListItem>
      <ListItem><strong>5. சரியான நீர்ப்பாசனம்:</strong> அதிக நீர்ப்பாசனம் தவிர்க்கவும், ஏனெனில் ஈரமான நிலை நோயை அதிகரிக்கிறது.</ListItem>
    </List>
    <Subheading>(உரமும் பூச்சி நாசினியும்)</Subheading>
    உரங்கள் மற்றும் பூச்சி நாசினிகள் நோயை கட்டுப்படுத்த உதவும்.
    <Description>
      <strong>உரங்கள்:</strong>
      <List>
        <ListItem>ஜிங்க் சல்பேட்: செடியின் வளர்ச்சி மற்றும் என்சைம்களின் செயலை ஊக்குவிக்கின்றது.</ListItem>
        <ListItem>ஐரன் சல்பேட்: குளோரோஃபில் உற்பத்திக்குத் தேவையான இரும்பு வழங்குகிறது.</ListItem>
        <ListItem>போரிக் ஆசிட்: செல்வால் அமைப்பு மற்றும் கார்போஹைட்ரேட் மாற்றத்திற்கு தேவையான போரான்.</ListItem>
      </List>
    </Description>
    <Description>
      <strong>பூச்சி நாசினிகள்:</strong>
      <List>
        <ListItem>பைரக்ளோஸ்ட்ரோபின்: இலை வெடிப்பு நோயை கட்டுப்படுத்துகிறது.</ListItem>
        <ListItem>ட்ரைஃப்ளோக்ஸ்ட்ரோபின்: பூஞ்சை தாக்கத்திலிருந்து பாதுகாக்கும்.</ListItem>
        <ListItem>ப்ரோபிகோனாசோல்: பல்வேறு பூஞ்சைகளுக்கு எதிராக செயல் படுகிறது.</ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>(அரிசி இலை வெடிப்பு நோயின் ஆரம்ப கண்டறிதல்)</Subheading>
      <strong>உரங்கள்:</strong>
      <List>
        <ListItem>அறிகுறிகள் தெரிந்தவுடன் ஜிங்க் மற்றும் இரும்பு உரங்களை அதிகரிக்கவும்.</ListItem>
      </List>
      <strong>பூச்சி நாசினிகள்:</strong>
      <List>
        <ListItem>அறிகுறிகள் தென்பட்டவுடன் பைரக்ளோஸ்ட்ரோபின் அல்லது ட்ரைஃப்ளோக்ஸ்ட்ரோபின் பயன்படுத்தவும்.</ListItem>
      </List>

      <Subheading>கடுமையான தொற்றின் போது</Subheading>
      <strong>உரங்கள்:</strong>
      <List>
        <ListItem>உரிய ஆலோசனைகளுக்கு விவசாய நிபுணர்களை அணுகவும்.</ListItem>
      </List>
      <strong>பூச்சி நாசினிகள்:</strong>
      <List>
        <ListItem>நோயை கட்டுப்படுத்த பல் வடிவ பூஞ்சை நாசினிகளை பயன்படுத்த ஆலோசனை பெறவும்.</ListItem>
      </List>

      <Subheading>நோய் எதிர்ப்பு மற்றும் பயிர் சுழற்சி</Subheading>
      <strong>உரங்கள்:</strong>
      <List>
        <ListItem>மண்ணின் ஊட்டச்சத்து மற்றும் ஆரோக்கியத்தை மேம்படுத்த குழித்தூள் அல்லது கட்டிய உரங்களை சேர்க்கவும்.</ListItem>
      </List>
      <strong>பூச்சி நாசினிகள்:</strong>
      <List>
        <ListItem>பூஞ்சை எதிர்ப்பு சக்தி உருவாகாமல் இருக்க, நாசினிகளை மாறி மாறி பயன்படுத்தவும்.</ListItem>
      </List>

      <Subheading>காலநிலை மற்றும் சுற்றுச்சூழல் காரகங்கள்</Subheading>
      <strong>உரங்கள்:</strong>
      <List>
        <ListItem>உர பயன்பாட்டை காலநிலைக்கு ஏற்ப திட்டமிடவும்.</ListItem>
      </List>
      <strong>பூச்சி நாசினிகள்:</strong>
      <List>
        <ListItem>முன்னறிவிப்பு கருவிகளைப் பயன்படுத்தி சரியான நேரத்தில் பூஞ்சை நாசினிகளைத் தெளிக்கவும்.</ListItem>
      </List>

      <Subheading>உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு</Subheading>
      <p>
        உர மற்றும் பூச்சி நாசினிகள் பயன்பாட்டில் உள்ளூர் விதிகளை பின்பற்றவும்.
      </p>
      <p>
        பயனாளரின் பாதுகாப்பு உபகரணங்கள் மற்றும் சரியான தெளிப்பு முறைகளை பின்பற்றவும்.
      </p>
    </Description>
    <Description>
      சுற்றுச்சூழலுக்கும் பயனற்ற உயிரினங்களுக்கும் பாதிப்பு ஏற்படாமல் இருக்க, விவசாய நிபுணர்களிடமோ அல்லது உள்ளூர் தொழில்நுட்ப உதவி மையங்களிடமோ ஆலோசனை பெறவும்.
    </Description>
</Container>

</Urdu>

    </>
  );
}
