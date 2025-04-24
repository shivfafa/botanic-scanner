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
          <Heading>
            Cotton Powdery Mildew Disease (کپاس کی پاﺅڈری ملڈو مرض)
          </Heading>
          <Description>
            <strong>Description:</strong> Cotton Powdery Mildew is a fungal
            disease that affects cotton plants. It is characterized by the
            appearance of a powdery, whitish-gray fungal growth on the surfaces
            of leaves, stems, and other plant parts. This disease can negatively
            impact cotton crops, leading to reduced yield and economic losses
            for farmers.
          </Description>
          <Subheading>Symptoms:</Subheading>
          Symptoms of Cotton Powdery Mildew Disease include:
          <List>
            <ListItem>
              Powdery white-gray fungal growth on leaves and stems.
            </ListItem>
            <ListItem>
              Infected plant parts may become distorted and stunted.
            </ListItem>
            <ListItem>
              Yellowing of infected leaves and premature leaf drop.
            </ListItem>
            <ListItem>
              Reduced photosynthesis and impaired plant growth.
            </ListItem>
            <ListItem>
              Severe infestations can lead to boll shedding and yield reduction.
            </ListItem>
          </List>
          <Subheading>Causes:</Subheading>
          Cotton Powdery Mildew is caused by the fungal pathogen{" "}
          <em>Erysiphe cichoracearum</em>. The disease spreads through airborne
          spores and can be favored by high humidity, moderate temperatures, and
          crowded planting conditions.
          <Subheading>Impact on Crops:</Subheading>
          The disease can severely affect cotton plants, reducing their ability
          to produce healthy bolls and impacting overall crop yield and quality.
          <Subheading>Prevention and Management:</Subheading>
          To manage and control Cotton Powdery Mildew Disease, consider the
          following strategies:
          <List>
            <ListItem>
              <strong>1. Plant Resistant Varieties:</strong> Choose cotton
              varieties with resistance to Powdery Mildew if available in your
              region.
            </ListItem>
            <ListItem>
              <strong>2. Proper Spacing:</strong> Avoid overcrowding plants to
              promote air circulation and reduce humidity around the foliage.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Apply appropriate fungicides
              containing Sulfur, Trifloxystrobin, or Thiophanate-methyl
              following recommended dosages and application schedules.
            </ListItem>
            <ListItem>
              <strong>4. Crop Rotation:</strong> Practice crop rotation with
              non-host plants to break the disease cycle.
            </ListItem>
            <ListItem>
              <strong>5. Pruning:</strong> Remove and destroy infected plant
              parts to limit disease spread.
            </ListItem>
            <ListItem>
              <strong>6. Weather Monitoring:</strong> Be vigilant during periods
              of high humidity and moderate temperatures, as these conditions
              can promote disease development.
            </ListItem>
            <ListItem>
              <strong>7. Clean Field Practices:</strong> Keep the cotton fields
              and surrounding areas clean to minimize overwintering of the
              pathogen.
            </ListItem>
          </List>
          <Subheading>Fertilizers:</Subheading>
          <List>
            <ListItem>
              Zinc Sulfate: Supplies essential zinc to improve plant health and
              growth.
            </ListItem>
            <ListItem>
              Iron Sulfate: Provides iron, which is vital for chlorophyll
              production and photosynthesis.
            </ListItem>
            <ListItem>
              Boric Acid: Supplies boron, an important micronutrient for cotton
              plants' reproductive processes.
            </ListItem>
          </List>
          <Subheading>Pesticides:</Subheading>
          <List>
            <ListItem>
              Sulfur: A fungicide effective against Powdery Mildew and other
              fungal diseases.
            </ListItem>
            <ListItem>
              Trifloxystrobin: Another fungicide option for controlling fungal
              pathogens, including Powdery Mildew.
            </ListItem>
            <ListItem>
              Thiophanate-methyl: A systemic fungicide that provides
              broad-spectrum disease control for cotton plants.
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
  <Heading>
    பருத்தி பவுடரி மில்டியூ நோய் (Cotton Powdery Mildew Disease)
  </Heading>
  <Description>
    <strong>விளக்கம்:</strong> பருத்தி பவுடரி மில்டியூ நோய் ஒரு பூஞ்சை நோயாகும்
    இது பருத்தி தாவரங்களில் பாதிக்கின்றது. இந்த நோயின் அடையாளம் சிவப்பு, வெள்ளை
    அல்லது மஞ்சள் நிற துணிப் போன்ற குறியீடுகளாக காணப்படுகிறது, அவை இலைகளில், பழங்களில் மற்றும்
    பிற தாவரப் பகுதிகளில் தோன்றுகின்றன. இந்த நோய் பருத்தி உற்பத்தியில் எதிர்மறை
    விளைவுகளை ஏற்படுத்துகிறது, இதனால் பருத்தி உற்பத்தி குறைந்து விவசாயிகளுக்கு
    பொருளாதார நஷ்டம் ஏற்படும்.
  </Description>
  <Subheading>அலாமதுகள்:</Subheading>
  பருத்தி பவுடரி மில்டியூ நோயின் அலாமதுகள் பின்வருமாறு உள்ளன:
  <List>
    <ListItem>
      இலைகளும் மற்றும் கிளைகளில் பூஞ்சை போன்ற வெள்ளை சிவப்பு குறியீடுகளின் தோற்றம்.
    </ListItem>
    <ListItem>பாதிக்கப்பட்ட தாவரப் பகுதிகளில் மாற்றம் மற்றும் தடுமாற்றம்.</ListItem>
    <ListItem>
      பாதிக்கப்பட்ட இலைகளின் மஞ்சளாக மாறுதல் மற்றும் விரைவில் விழும் அபாயம்.
    </ListItem>
    <ListItem>
      குறைந்த பரிசோதனை மற்றும் தாவர வளர்ச்சியில் தடுமாற்றம்.
    </ListItem>
    <ListItem>
      கடுமையான தாக்கத்தில், பூப்பழம் விழுதல் மற்றும் உற்பத்தி குறைபாடு.
    </ListItem>
  </List>
  <Subheading>காரணங்கள்:</Subheading>
  பருத்தி பவுடரி மில்டியூ நோயின் காரணம் பூஞ்சை பீதம்{" "}
  <em>Erysiphe cichoracearum</em> ஆகும். இந்த நோய் காற்று மூலங்களின் மூலம்
  பரவுகிறது மற்றும் இது அதிக ஈரப்பதம், மிதமான வெப்பநிலை மற்றும் நிலத்தில்
  கூடும் பொருட்கள் இருக்கும் போது வளர்க்கின்றது.
  <Subheading>தாவரங்களில் விளைவுகள்:</Subheading>
  இந்த நோய் பருத்தி தாவரங்களை தீவிரமாக பாதிக்கலாம், இதனால் அவை உரிய பூப்பழம்
  உற்பத்தி செய்யும் திறன் பாதிக்கப்படுகின்றது மற்றும் மொத்த பருத்தி உற்பத்தி
  மற்றும் தரத்தில் பாதிப்புகளை ஏற்படுத்துகின்றது.
  <Subheading>கணிக்கைகள் மற்றும் மேலாண்மை:</Subheading>
  பருத்தி பவுடரி மில்டியூ நோயை மேலாண்மை மற்றும் கட்டுப்படுத்துவதற்கான
  வழிமுறைகள் பின்வருமாறு உள்ளன:
  <List>
    <ListItem>
      <strong>1. வலிமையான வகைகள்:</strong> உங்கள் பகுதியில் பருத்தி பவுடரி மில்டியூ
      நோயிலிருந்து பாதுகாக்கப்பட்ட வகைகள் கிடைத்தால் அவற்றை தேர்வு செய்யவும்.
    </ListItem>
    <ListItem>
      <strong>2. சரியான தூரம்:</strong> தாவரங்களின் கூடுகையை தவிர்க்கவும்,
      இலைகளுக்கு சுற்று காற்று வளரவுக்காக மற்றும் ஈரப்பதம் குறைக்கவும்.
    </ListItem>
    <ListItem>
      <strong>3. பூஞ்சை மருந்துகள்:</strong> சல்பர், டிரைபுளோக்ஸ்ட்ராபின் அல்லது
      தையோபினேட்-மேத்தெய்ல் கொண்ட பூஞ்சை மருந்துகளின் பயன்படுத்தவும் மற்றும்
      குறிப்பிட்ட பயன்பாட்டு குறியீடுகளையும் முறைமைகளையும் பின்பற்றவும்.
    </ListItem>
    <ListItem>
      <strong>4. பாதுக்காப்பு பிரிவு:</strong> குறைந்தபட்சம் பரவலுக்கு
      பாதுக்காப்பு பிரிவில் நுழையவும்.
    </ListItem>
    <ListItem>
      <strong>5. தாவர பரிசோதனை:</strong> பாதிக்கப்பட்ட தாவரப் பகுதிகளை நசுக்கி
      அகற்றவும், இதனால் நோயின் பரவல் குறையும.
    </ListItem>
    <ListItem>
      <strong>6. பருவ பரிசோதனை:</strong> உயர்ந்த ஈரப்பதம் மற்றும் மிதமான வெப்பநிலைக்கு
      கவனமாக இருங்கள், இது நோயின் அதிக பரவலைக் குறிக்கக் கூடும்.
    </ListItem>
    <ListItem>
      <strong>7. சுத்தமான நிலம்:</strong> பருத்தி நிலங்கள் மற்றும் சுற்றுவட்டார பகுதிகளைக்
      குளிர்ந்த வைக்கும்.
    </ListItem>
  </List>
  <Subheading>பூஞ்சை மருந்துகளுக்கான உர:</Subheading>
  <List>
    <ListItem>
      சிங்க் சல்பேட்: தாவரங்களின் ஆரோக்கியம் மற்றும் வளர்ச்சியை மேம்படுத்தும்
      தேவையான சிங்க்.
    </ListItem>
    <ListItem>
      இரன் சல்பேட்: குளோரோபைல் உற்பத்தி மற்றும் ஒளி உருவாக்கத்திற்காக தேவையானது.
    </ListItem>
    <ListItem>
      போரிக் அமிலம்: பருத்தி தாவரங்களின் இனப்பெருக்க செயல்பாட்டிற்கு முக்கியமான
      மைக்ரோ நியூட்ரியண்ட்.
    </ListItem>
  </List>
  <Subheading>பூஞ்சை மருந்துகளுக்கான மருந்து வாணிகங்கள்:</Subheading>
  <List>
    <ListItem>
      சல்பர்: பருத்தி பவுடரி மில்டியூ மற்றும் பிற பூஞ்சை நோய்களுடன் தொடர்புடைய
      காரிகமான பூஞ்சை மருந்து.
    </ListItem>
    <ListItem>
      டிரைபுளோக்ஸ்ட்ராபின்: பருத்தி பவுடரி மில்டியூ மற்றும் பிற பூஞ்சை நோய்களை
      கட்டுப்படுத்த உதவுமொரு பூஞ்சை மருந்து.
    </ListItem>
    <ListItem>
      தையோபினேட்-மேத்தெய்ல்: பருத்தி தாவரங்களுக்கு பூஞ்சை நோய்களை முறையாக கட்டுப்படுத்தும்
      மருந்து.
    </ListItem>
  </List>
  <Subheading>பருவ மற்றும் சுற்றுச்சூழல் காரணிகள்:</Subheading>
  <List>
    <ListItem>
      பருவ நிலைகளுக்கு ஏற்ப பூஞ்சை மருந்துகளின் பயன்படுத்தும் நேரம் மற்றும் குறிப்புகளை
      அமைக்கவும். அதிக மழை காலங்களில் மருந்து பயன்படுத்துவதை தவிர்க்கவும்.
    </ListItem>
  </List>
  <Subheading>உள்ளூர் ஒழுங்குகளும் பாதுகாப்பு நடவடிக்கைகள்:</Subheading>
  <p>
    பூஞ்சை மருந்துகள் மற்றும் அவர்களது பயன்படுத்தும் போது உள்ளூர் ஒழுங்குகளும்
    பாதுகாப்பு நடவடிக்கைகளையும் எப்பொழுதும் பின்பற்ற வேண்டும்.
  </p>
  <p>
    பூஞ்சை மருந்துகளை கையாளும் போது தனிப்பட்ட பாதுகாப்பு உபகரணங்களை (PPE)
    பயன்படுத்தி மற்றும் சரியான பயன்பாட்டு தொழில்நுட்பங்களை பின்பற்றவும்.
  </p>
  <p>
    சூழல் மற்றும் தேவையற்ற பாதிப்புகளிலிருந்து பாதுகாப்பு பெற, குறிப்பிட்ட
    பயன்பாட்டு குறியீடுகள் மற்றும் பாதுகாப்பு வழிமுறைகளை பின்பற்றவும்.
  </p>
</Container>

      </Urdu>
    </>
  );
}
