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
    <Heading>Rice Brown Spot Disease (நெல் பழுப்பு புள்ளி நோய்)</Heading>
    <Description>
      <strong>Description:</strong> Rice Brown Spot, caused by the fungus
      Bipolaris oryzae (syn. Cochliobolus miyabeanus), is a common fungal
      disease that affects rice plants. The fungus infects the leaves, leaf
      sheaths, and panicles of the rice plant, leading to characteristic brown
      spots with a yellow halo. These spots can coalesce, causing extensive
      damage to the foliage and affecting rice yield.
    </Description>
    <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
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
    <Subheading>Causes (காரணம்):</Subheading>
    Rice Brown Spot is caused by the fungus Bipolaris oryzae. The fungus
    typically survives on rice residues in the soil and can be spread through
    infected seeds, wind, water, or farm equipment.
    <Subheading>Impact on Crops (பயிர்களில் விளைவுகள்):</Subheading>
    Rice Brown Spot can result in reduced photosynthetic activity and
    premature aging of leaves, leading to decreased yield and poor grain
    quality. Severe infections can cause significant economic losses for rice
    farmers.
    <Subheading>Prevention and Management (தடுப்பு மற்றும் மேலாண்மை):</Subheading>
    While complete eradication of Rice Brown Spot may not be possible,
    several measures can help manage and minimize its impact:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties (நோய் எதிர்ப்பு வகைகள்):</strong> Planting rice
        varieties with resistance to Rice Brown Spot can reduce disease severity.
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
        <strong>4. Fungicides (பூஞ்சைக் கொல்லிகள்):</strong> Apply fungicides containing
        Tricyclazole, Pyroquilon, Benzimidazole, or Isoprothiolane to control
        the disease. Follow recommended application rates and safety guidelines.
      </ListItem>
      <ListItem>
        <strong>5. Proper Irrigation (பொருத்தமான நீர்ப்பாசனம்):</strong> Avoid excessive
        irrigation, as waterlogged conditions can favor disease development.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (உரங்கள் மற்றும் பூச்சிக்கொல்லிகள் பயன்பாடு):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of Rice Brown Spot. Proper application of fertilizers and
    targeted use of pesticides can improve the overall health of the rice
    plants and control the disease.
    <Description>
      <strong>Fertilizers (உரங்கள்):</strong>
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
  <Subheading>Early Detection of Rice Brown Spot (அரிசி பிரவுன் ஸ்பாட்டின் ஆரம்ப கண்டறிதல்):</Subheading>
  <strong>Fertilizers (உரம்):</strong>
  <List>
    <ListItem>
      Increase the application of nitrogen-based fertilizers, such as
      Monoammonium Phosphate, to support rice plants' recovery and
      resistance to disease.
    </ListItem>
  </List>
  <strong>Pesticides (பூச்சி கொல்லிகள்):</strong>
  <List>
    <ListItem>
      Apply a targeted fungicide like Tricyclazole or Pyroquilon immediately
      after detecting Rice Brown Spot symptoms. Early intervention can
      prevent the spread of the disease to other plants and minimize damage.
    </ListItem>
  </List>
  <Subheading>Severe Rice Brown Spot Outbreak (அரிசி பிரவுன் ஸ்பாட்டின் கடுமையான பரவல்):</Subheading>
  <strong>Fertilizers (உரம்):</strong>
  <List>
    <ListItem>
      Use a balanced fertilizer that includes essential nutrients like
      nitrogen, phosphorus, and potassium to support the overall health of
      rice plants during severe infections.
    </ListItem>
  </List>
  <strong>Pesticides (பூச்சி கொல்லிகள்):</strong>
  <List>
    <ListItem>
      In cases of severe Rice Brown Spot outbreaks, consult with
      agricultural experts or extension services for appropriate pesticide
      recommendations. They may suggest a combination of fungicides to
      manage the disease effectively.
    </ListItem>
  </List>
</Description>
<Subheading>Disease Resistance and Crop Rotation (நோய் எதிர்ப்பு மற்றும் பயிர் மாற்றம்):</Subheading>
<strong>Fertilizers (உரம்):</strong>
<List>
  <ListItem>
    Incorporate organic matter and compost into the soil to improve its
    health and fertility, indirectly enhancing rice plants' disease
    resistance.
  </ListItem>
</List>
<strong>Pesticides (பூச்சி கொல்லிகள்):</strong>
<List>
  <ListItem>
    Rotate pesticides with different modes of action to reduce the risk of
    developing resistance in the fungal population. Implement crop rotation
    practices to break the disease cycle and minimize the recurrence of Rice
    Brown Spot.
  </ListItem>
</List>
<Subheading>Weather and Environmental Factors (வானிலை மற்றும் சுற்றுச்சூழல் காரணிகள்):</Subheading>
<strong>Fertilizers (உரம்):</strong>
<List>
  <ListItem>
    Adjust the timing and rates of fertilizer applications based on weather
    conditions. During periods of excessive rainfall, consider reducing
    nitrogen applications to prevent leaching and potential environmental
    issues.
  </ListItem>
</List>
<strong>Pesticides (பூச்சி கொல்லிகள்):</strong>
<List>
  <ListItem>
    Monitor weather forecasts and disease risk alerts to apply fungicides
    proactively when conditions are favorable for Rice Brown Spot
    development.
  </ListItem>
</List>
<Subheading>Local Regulations and Safety (உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்):</Subheading>

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
<Heading>(நெல் பழுப்பு புள்ளி நோய்) Rice Brown Spot Disease</Heading>  
    <Description>  
      <strong>விளக்கம்:</strong> நெல் பழுப்பு புள்ளி நோய் என்பது Bipolaris oryzae (அறிவியல் பெயர்: Cochliobolus miyabeanus) என்ற பூஞ்சைக் காளானால் ஏற்படுகிறது. இந்த நோய் நெல் செடிகளின் இலைகள், இலை உறைகள் மற்றும் தானியங்களை பாதிக்கிறது. இலையில் பழுப்பு நிறத்தில் சிறிய வட்டங்கள் தோன்றுகின்றன, அவற்றைச் சுற்றி மஞ்சள் வளையம் இருக்கும். இந்த புள்ளிகள் இணைந்து பெரிய பகுதிகளுக்கு பரவலாம்.  
    </Description>  
    <Subheading>அறிகுறிகள்:</Subheading>  
    <List>  
      <ListItem>இலைகளில் சிறிய, முட்டை வடிவ பழுப்பு வட்டங்கள் தோன்றுதல்.</ListItem>  
      <ListItem>வட்டத்தைச் சுற்றி மஞ்சள் வளையம் இருக்கலாம்.</ListItem>  
      <ListItem>கடுமையான நிலையில், இவை இணைந்து இலைகள் மற்றும் இலை உறைகளில் பெரிய காயங்களை உருவாக்கலாம்.</ListItem>  
      <ListItem>பாதிக்கப்பட்ட தானியங்களில் கருப்பு நிறத்தில் அழுத்தப்பட்ட காயங்கள் தோன்றலாம், இது நெலின் தரம் மற்றும் அளவை பாதிக்கும்.</ListItem>  
    </List>  
    <Subheading>காரணம்:</Subheading>  
    நெல் பழுப்பு புள்ளி நோய் Bipolaris oryzae என்ற பூஞ்சைக் காளானால் ஏற்படுகிறது. இந்த காளான் மண்ணில் உள்ள நெல் எச்சங்களில் உயிர் வாழ்கிறது. பாதிக்கப்பட்ட விதைகள், காற்று, நீர் அல்லது விவசாய கருவிகள் மூலம் பரவுகிறது.  

    <Subheading>பயிர்களில் விளைவுகள்:</Subheading>  
    இந்த நோய் இலைகளின் ஒளிச்சேர்க்கை திறனை குறைக்கிறது. கடுமையான நிலையில், தானியங்களின் அளவு மற்றும் தரம் குறைகிறது.  

    <Subheading>தடுப்பு மற்றும் மேலாண்மை:</Subheading>  
    <List>  
      <ListItem>  
        <strong>1. நோய் எதிர்ப்பு வகைகள்:</strong> நோயை எதிர்க்கும் நெல் வகைகளை பயிரிடவும்.  
      </ListItem>  
      <ListItem>  
        <strong>2. பயிர் சுழற்சி:</strong> தொடர்ச்சியாக நெல் பயிரிடுவதை தவிர்க்கவும்.  
      </ListItem>  
      <ListItem>  
        <strong>3. விதை சிகிச்சை:</strong> நோயற்ற விதைகளை பயன்படுத்தவும் அல்லது பூஞ்சைக் கொல்லிகள் மூலம் விதைகளை சிகிச்சை செய்யவும்.  
      </ListItem>  
      <ListItem>  
        <strong>4. பூஞ்சைக் கொல்லிகள்:</strong> டிரைக்ளோசோல், பைராக்ளோன் போன்றவற்றை பயன்படுத்தலாம்.  
      </ListItem>  
      <ListItem>  
        <strong>5. சரியான நீர்ப்பாசனம்:</strong> அதிகப்படியான நீரை தவிர்க்கவும்.  
      </ListItem>  
    </List>  

    <Subheading>உரங்கள் மற்றும் பூச்சிக்கொல்லிகள்:</Subheading>  
    <Description>  
      <strong>உரங்கள்:</strong>  
      <List>  
        <ListItem>டிரிபிள் சூப்பர் பாஸ்பேட்: வேர் வளர்ச்சிக்கு உதவுகிறது.</ListItem>  
        <ListItem>மோனோ அம்மோனியம் பாஸ்பேட்: நைட்ரஜன் மற்றும் பாஸ்பரஸ் அளிக்கிறது.</ListItem>  
      </List>  
    </Description>  
    <Description>  
      <strong>பூச்சிக்கொல்லிகள்:</strong>  
      <List>  
        <ListItem>டிரைக்ளோசோல்: இந்த நோயை கட்டுப்படுத்த பயன்படுகிறது.</ListItem>  
        <ListItem>பைராக்ளோன்: பூஞ்சை தொற்றுக்கு எதிராக பாதுகாப்பு அளிக்கிறது.</ListItem>  
      </List>  
    </Description>  

    <Subheading>உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு:</Subheading>  
    <p>உரங்கள் மற்றும் பூச்சிக்கொல்லிகளை பயன்படுத்தும் போது உள்ளூர் விதிமுறைகளை பின்பற்றவும்.</p>  
    <p>பாதுகாப்பு உபகரணங்களை பயன்படுத்தவும்.</p>  
</Container>
</Urdu>

    </>
  );
}
