import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const Show = styled.div`
  .language-toggle {
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

export default function RustPrecautions() {
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
              color: "black",
              cursor: "pointer",
            }}
          >
            <span>{isUrdu ? "தமிழ்" : "English"}</span>
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
          <Heading>Common Rust Disease (عام سانس کی بیماری)</Heading>
          <Description>
            <strong>Description (விவரம் ):</strong> Common rust disease, also
            known as corn rust or Puccinia sorghi, is a fungal disease that
            affects corn plants. The disease is caused by the fungus Puccinia
            sorghi, which infects the leaves of corn plants. Common rust appears
            as small, reddish-brown to orange pustules on the upper surface of
            the leaves and may also occur on the lower surface. These pustules
            contain masses of rust-colored spores that can spread to other
            plants through wind or splashing water, leading to further
            infections.
            <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
            The symptoms of common rust disease include:
          </Description>
          <List>
            <ListItem>
              Formation of small, reddish-brown to orange pustules on the upper
              surface of leaves.
            </ListItem>
            <ListItem>
              Pustules may also appear on the lower surface of leaves.
            </ListItem>
            <ListItem>
              Yellowing of the areas surrounding the pustules.
            </ListItem>
            <ListItem>
              Stunted growth and reduced vigor of infected plants.
            </ListItem>
            <ListItem>Premature defoliation in severe cases.</ListItem>
          </List>
          <Subheading>Causes (காரணம்):</Subheading>
          Common rust disease is caused by the fungus Puccinia sorghi. The
          fungus infects corn leaves, where it produces pustules filled with
          rust-colored spores. These spores are easily dispersed by wind or
          water, allowing the disease to spread rapidly under favorable
          conditions, such as high humidity and moderate temperatures.
          <Subheading>Impact on Crops:</Subheading>
          Common rust disease can have detrimental effects on corn crops. The
          presence of pustules on leaves disrupts photosynthesis and reduces the
          plant's ability to produce energy, leading to decreased plant growth
          and yield. Severe infections can lead to premature leaf drop, which
          further diminishes the plant's productivity and may negatively impact
          overall crop quality.
          <Subheading>Prevention and Management:</Subheading>
          While common rust disease cannot be completely eradicated, various
          preventive and management measures can help mitigate its impact and
          prevent widespread damage. These measures include:
          <List>
            <ListItem>
              <strong>1. Resistant Varieties:</strong> Plant corn varieties that
              exhibit resistance to common rust disease. Resistant plants can
              withstand the infection better and may experience milder symptoms.
            </ListItem>
            <ListItem>
              <strong>2. Crop Monitoring:</strong> Regularly inspect corn fields
              for early signs of rust disease. Early detection allows for timely
              interventions to prevent the disease from spreading.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Apply fungicides containing active
              ingredients like Azoxystrobin, Propiconazole, or Pyraclostrobin as
              preventive measures. Consult agricultural experts for proper
              fungicide selection and application guidelines.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overhead irrigation
              and minimize leaf wetness to create unfavorable conditions for the
              fungus to grow and spread.
            </ListItem>
            <ListItem>
              <strong>5. Crop Rotation:</strong> Practice crop rotation to break
              the disease cycle and reduce the buildup of fungal spores in the
              soil.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (சந்தைகள் மற்றும் புழுங்கி மருந்துகளின் பயன்பாடு):
          </Subheading>
          The use of fertilizers and pesticides can play a role in managing
          common rust disease. Proper application of fertilizers can enhance the
          plant's overall health and resilience, while targeted fungicide use
          can help control the spread of the disease. Consider the following
          fertilizers and pesticides for managing common rust disease:
          <Description>
            <strong>Fertilizers (உரங்கள்):</strong>
            <List>
              <ListItem>
                Diammonium Phosphate: Provides a balanced combination of
                nitrogen and phosphorus, supporting plant growth and
                development.
              </ListItem>
              <ListItem>
                Ammonium Phosphate: Supplies essential nitrogen and phosphorus
                for healthy foliage and overall plant vigor.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (பசுமை மருந்துகள்):</strong>
            <List>
              <ListItem>
                Azoxystrobin: A systemic fungicide effective against rust
                diseases, providing preventive and curative control.
              </ListItem>
              <ListItem>
                Propiconazole: A protective and systemic fungicide that helps
                prevent and control rust infections.
              </ListItem>
              <ListItem>
                Pyraclostrobin: Offers broad-spectrum protection against various
                fungal diseases, including common rust.
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>Early Detection of Common Rust:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Increase the application of nitrogen and phosphorus-based
                fertilizers, such as Diammonium Phosphate or Ammonium Phosphate,
                to support the corn's recovery and strengthen its resistance to
                disease.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Apply a targeted fungicide like Azoxystrobin, Propiconazole, or
                Pyraclostrobin immediately after detecting common rust symptoms.
                Early intervention can prevent the spread of the disease to
                other plants and minimize damage.
              </ListItem>
            </List>
            <Subheading>Severe Common Rust Outbreak:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Use a balanced fertilizer that includes essential nutrients like
                nitrogen and phosphorus to support the overall health of the
                corn plants, as severe infections can deplete the plant's
                nutrient reserves.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                In cases of severe common rust outbreaks, consult with
                agricultural experts or extension services for appropriate
                pesticide recommendations. They may suggest a combination of
                systemic and protective fungicides to manage the disease
                effectively.
              </ListItem>
            </List>

            <Subheading>Disease Resistance and Crop Rotation:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Incorporate organic matter and compost into the soil to improve
                its health and fertility, which can indirectly enhance the
                plant's disease resistance.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Rotate pesticides with different modes of action to reduce the
                risk of developing resistance in the fungal population.
                Implement crop rotation practices to break the disease cycle and
                minimize the recurrence of common rust.
              </ListItem>
            </List>

            <Subheading>Weather and Environmental Factors:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Adjust the timing and rates of fertilizer applications based on
                weather conditions. During periods of excessive rainfall,
                consider reducing nitrogen applications to prevent leaching and
                potential environmental issues.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Monitor weather forecasts and disease risk alerts to apply
                fungicides proactively when conditions are favorable for common
                rust development.
              </ListItem>
            </List>
            <Subheading>Local Regulations and Safety:</Subheading>

            <p>
              Always follow local regulations and safety guidelines regarding
              the use of fertilizers and pesticides.
            </p>
            <p>
              Use personal protective equipment (PPE) and proper application
              techniques when handling and applying fertilizers and pesticides.
            </p>
          </Description>
          <Description>
            It is essential to follow the recommended application rates and
            timings to avoid any negative effects on the environment and
            non-target organisms. Consult with agricultural experts or local
            extension services for proper usage guidelines and safety
            precautions.
          </Description>
        </Container>
      </English>

      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
        <Container>
        <Heading>பொதுவான ரஸ்ட் நோய் (பொதுவான மூச்சு நோய்)</Heading>
<Description>
  <strong>விவரக்குறிப்பு:</strong> பொதுவான ரஸ்ட் நோய், இது கார்ன் ரஸ்ட் அல்லது பியோஸினியா சோர்கி என அழைக்கப்படுகிறது, இது வயல்களில் பக்கோசு அறிகுறிகளைக் காட்டும் ஒரு நோய் ஆகும். இந்த நோய் வயல்களின் இலைகளை பாதிக்கின்றது. பொதுவான ரஸ்ட் நோய் இலைகளின் மேல்முறையில் சிறிய, சிவப்பு மற்றும் இஞ்சிய மஞ்சள் நிற ரஸ்ட் வடிவத்தில் தோன்றுகிறது மற்றும் இலைகளின் கீழ் பாகங்களிலும் காணப்படுகிறது. இந்த ரஸ்ட் வடிவங்கள் மண்ணின் நிறத்தில் உள்ள உள்ளர்ந்த கப்பல்களில் நிரப்பப்பட்டிருப்பதாக உள்ளன, அவை காற்று அல்லது நீரின் மூலம் மற்ற தாவரங்களுக்குச் செல்ல முடியும் மற்றும் மேலும் தொற்றுகளையும் ஏற்படுத்தலாம்.
  <Subheading>அறிகுறிகள்:</Subheading>
  பொதுவான ரஸ்ட் நோயின் அறிகுறிகள் பின்வருமாறு உள்ளன:
</Description>
<List>
  <ListItem>இலைகளின் மேல்முறையில் சிறிய, சிவப்பு மற்றும் இஞ்சிய மஞ்சள் நிற ரஸ்ட் வடிவம் உருவாகின்றது.</ListItem>
  <ListItem>இலைகளின் கீழ் பகுதி சீரான ரஸ்ட் வடிவங்களைக் காண்பிக்கின்றது.</ListItem>
  <ListItem>ரஸ்ட் வடிவங்களின் சுற்றிலும் மஞ்சள் மாறிய வரைகள் தோன்றுகின்றன.</ListItem>
  <ListItem>பாதிக்கப்பட்ட தாவரங்களின் குறைபாடு மற்றும் பலவீனம்.</ListItem>
  <ListItem>கடுமையான நிலைகளில் இலைகள் கீழே விழுந்து போகின்றன.</ListItem>
</List>
<Subheading>காரணம்:</Subheading>
பொதுவான ரஸ்ட் நோயின் காரணம் பியோஸினியா சோர்கி என்ற பூஞ்சை ஆகும். இந்த பூஞ்சை காகனின் இலைகளை பாதிக்கின்றது, இங்கே இது ரஸ்ட் நிறைவுகளுடன் உள்ள கப்பல்களை உருவாக்குகிறது. இந்த கப்பல்கள் காற்று அல்லது நீரின் மூலம் எளிதாக பரவுகின்றன, இது ஏற்ற உடல் சூழல்களில் நோயின் விரைவான பரவலுக்கு உதவுகிறது, குறிப்பாக அதிக ஈரப்பதம் மற்றும் மத்திய வெப்பநிலை சூழல்களில்.
<Subheading>வயல்களில் தாக்கங்கள்:</Subheading>
பொதுவான ரஸ்ட் நோய் வயல்களில் எதிர்மறையான தாக்கங்களை ஏற்படுத்துகிறது. இலைகளில் ரஸ்ட் உள்ளதால், போட்டோசின்த்தசிஸ்ஸை பாதிக்கின்றது மற்றும் தாவரங்களுக்கு சக்தி தயாரிக்கும் திறன் குறைந்து, அதனால் தாவர வளர்ச்சி மற்றும் உற்பத்தி குறைகின்றன. கடுமையான தொற்று நிலைகளில், இலைகளின் விரைவான விழுகும் மேலும் தாவர உற்பத்தியை குறைக்கும் மற்றும் மொட்டை தரத்துக்கும் பாதிப்பை ஏற்படுத்த முடியும்.
<Subheading>தடுக்கல் மற்றும் மேலாண்மை:</Subheading>
பொதுவான ரஸ்ட் நோயைக் குறைக்க முற்றிலும் முடிவடைய முடியாது, ஆனால் பலவகையான தடுக்கல் மற்றும் மேலாண்மை நடவடிக்கைகளின் மூலம் அதன் தாக்கங்களை குறைக்க முடியும் மற்றும் பரந்த உற்பத்தி இழப்புகளை தவிர்க்க முடியும். இவையாவன:
<List>
  <ListItem>
    <strong>1. எதிர்ப்பு வகைகள் அறுவடைக் கொடுப்பது:</strong> பொதுவான ரஸ்ட் நோய்க்கு எதிர்ப்பு வகை கொண்ட காகன்களை பயிரிடுங்கள். எதிர்ப்பு வகை தாவரங்கள் நோயின் எதிர்ப்பு திறனைக் கொண்டுள்ளன மற்றும் நிலைமைகள் ஆபத்தானதாக இருந்தால் குறைந்த பாதிப்புகளை ஏற்படுத்துகின்றன.
  </ListItem>
  <ListItem>
    <strong>2. வயல்களின் கண்காணிப்பு:</strong> பொதுவான ரஸ்ட் நோயின் அறிகுறிகளை முழுமையாக பரிசோதிக்கவும். முன்னெடுக்கப்பட்ட ஆராய்ச்சியுடன் சரியான நேரத்தில் நோயின் பரவலைத் தடுப்பது.
  </ListItem>
  <ListItem>
    <strong>3. பூச்சி நாசினிகள்:</strong> நோயைக் காக்க பயிர்களில் பூச்சி நாசினிகள் பயன்படுத்துதல். விவசாய நிபுணர்களிடமிருந்து சரியான பூச்சி நாசினிகள் குறித்து ஆலோசனை பெற்றுக்கொள்ளவும்.
  </ListItem>
  <ListItem>
    <strong>4. சரியான நீர்ப்பாசனம்:</strong> மேலிருந்து நீர் தொடராதே, இலைகளின் ஈரப்பதத்தை குறைப்பதற்காக நீர்ப்பாசனத்தை குறைக்கும் முயற்சி செய்யுங்கள், இது பூஞ்சை பரவலைத் தடுக்கும்.
  </ListItem>
  <ListItem>
    <strong>5. பயிர்த் மாற்றம்:</strong> வயல்களில் பயிர்த் மாற்றம் செய்வது, நோயின் சுற்றறப்பைக் குறைத்து, காகனின் தாவரங்களில் பூஞ்சையின் பரவலை குறைக்க உதவும்.
  </ListItem>
</List>
<Subheading>உரங்களும் பூச்சி நாசினிகளும்:</Subheading>
உரங்களின் மற்றும் பூச்சி நாசினிகளின் பயன்படுத்தல் பொதுவான ரஸ்ட் நோயின் மேலாண்மையில் உதவும். உரங்களின் சரியான பயன்படுத்தல் தாவரத்தின் மொட்டை ஆரோக்கியத்தை மேம்படுத்துகிறது, இது அவற்றை தொற்றுகளுக்கு எதிரான வலுவானதாக ஆக்குகிறது. பொதுவான ரஸ்ட் நோயின் மேலாண்மைக்கு, சரியான உரங்களும் பூச்சி நாசினிகளும் பின்வருமாறு தேர்வு செய்யப்பட வேண்டும்:
<Description>
  <strong>உரங்கள் (Fertilizers):</strong>
  <List>
    <ListItem>
      டயாமோனியம் ஃபாஸ்பேட் (Diammonium Phosphate): நைட்ரஜன் மற்றும் ஃபாஸ்போரஸ் ஆகியவற்றின் சரியான கலவையை வழங்குகிறது, இது தாவர வளர்ச்சியையும் ஊக்குவிக்கின்றது.
    </ListItem>
    <ListItem>
      அமோனியம் ஃபாஸ்பேட் (Ammonium Phosphate): சரியான தாவர ஆதாரம் மற்றும் தாவர ஆரோக்கியத்திற்கு தேவையான நைட்ரஜன் மற்றும் ஃபாஸ்போரஸ் வழங்குகிறது.
    </ListItem>
  </List>
</Description>
<Description>
  <strong>பூச்சி நாசினிகள் (Pesticides):</strong>
  <List>
    <ListItem>
      அழோக்ஸிஸ்ட்ரோபின் (Azoxystrobin): ரஸ்ட் நோய்கள் போன்ற பூஞ்சை நோய்களுக்கு எதிரான செயல்திறனுள்ள பூஞ்சை நாசினி ஆகும், இது தடுக்கல் மற்றும் சிகிச்சை மேலாண்மையை வழங்குகிறது.
    </ListItem>
    <ListItem>
      பிரோபிகோனாசோல் (Propiconazole): பாதுகாப்பான மற்றும் ரஸ்ட் நோயின் தொற்றுக்களுக்கு எதிரான உதவியளிக்கும் பூஞ்சை நாசினி.
    </ListItem>
    <ListItem>
      பைராக்லோஸ்ட்ரோபின் (Pyraclostrobin): பொதுவான ரஸ்ட் மற்றும் பல பூஞ்சை நோய்களுக்கு எதிரான பரந்த திறன் கொண்ட பாதுகாப்பை வழங்குகிறது.
    </ListItem>
  </List>
</Description>

<Description>
  <Subheading>காமன் ரஸ்ட் நோயின் விரைவு கண்டறிதல்:</Subheading>
  <strong>எண்ணெய் (Fertilizers):</strong>
  <List>
    <ListItem>
      காமன் ரஸ்ட் நோயின் அறிகுறிகளை விரைவாக கண்டறிந்த பின்னர், நைட்ரஜன் மற்றும் பாஸ்பரஸ் அடிப்படையிலான எண்ணெய்களை (டையாமோனியம் ஃபாஸ்பேட் அல்லது அமோனியம் ஃபாஸ்பேட்) சரியான அளவில் பயன்படுத்தி, நொறுக்கப்பட்ட பாதிக்கப்படாத சரியாக மருந்து செய்யவும் மற்றும் நோயை எதிர்த்து நன்கு வலிமைப்படுத்தவும்.
    </ListItem>
  </List>
  <strong>படிகாதிகள் (Pesticides):</strong>
  <List>
    <ListItem>
      காமன் ரஸ்ட் நோயின் அறிகுறிகள் கண்டறியப்பட்ட உடனே, ஏசோசிக்ஸ்ட்ரோபின், ப்ரோபிகோனிசோல் அல்லது பைராக்லோஸ்ட்ரோபின் போன்ற புற்றுநோய்த் தடுப்பான் வேகமாக பயன்படுத்தவும். விரைவான பயன்பாடு நோயை மற்ற மண் கிழிந்த செடிகளுக்குப் பரவுவதைத் தடுக்கும் மற்றும் இழப்பை குறைக்கும்.
    </ListItem>
  </List>
  <Subheading>கடுமையான காமன் ரஸ்ட் நிகழ்வுகள்:</Subheading>
  <strong>எண்ணெய் (Fertilizers):</strong>
  <List>
    <ListItem>
      கடுமையான காமன் ரஸ்ட் நிகழ்வுகளில், நைட்ரஜன் மற்றும் பாஸ்பரஸ் கலந்த எண்ணெய்கள் (டையாமோனியம் ஃபாஸ்பேட் அல்லது அமோனியம் ஃபாஸ்பேட்) பயன்படுத்தவும், இதனால் முழுமையாக குணமாகும் மக்காச் செடியின் உடல் நிலை பராமரிக்கப்படுகிறது, ஏனென்றால் கடுமையான தொற்று செடியின் ஊட்டச்சத்து அமைப்பை அழிக்கக்கூடும்.
    </ListItem>
  </List>
  <strong>படிகாதிகள் (Pesticides):</strong>
  <List>
    <ListItem>
      கடுமையான காமன் ரஸ்ட் நிகழ்வுகளில், விவசாயத் துறையினரின் அல்லது விரிவாக்க சேவைகளின் உதவியுடன் சரியான படிகாதிகளை பரிந்துரைக்கலாம், அவை நோயை மீட்டெடுக்க உதவும்.
    </ListItem>
  </List>
  <Subheading>நோய் எதிர்ப்பு மற்றும் மடிப்புப் பரிமாற்றம்:</Subheading>
  <strong>எண்ணெய் (Fertilizers):</strong>
  <List>
    <ListItem>
      நிலத்தின் ஆரோக்கியம் மற்றும் பெருக்கத்தை மேம்படுத்த பசுந்தடிகள் மற்றும் கம்போஸ்ட் சேர்க்கவும், இதனால் செடிகளின் நோய் எதிர்ப்பு திறன் அதிகரிக்க முடியும்.
    </ListItem>
  </List>
  <strong>படிகாதிகள் (Pesticides):</strong>
  <List>
    <ListItem>
      பூஞ்சை இனங்களில் எதிர்ப்பு அபாயத்தை குறைக்கும் படி, வித்தியாசமான சுற்றுச்சூழல்களில் உள்ள படிகாதிகளை பரிமாறிக் கொண்டு நிலத்தில் பரவிய பரிசோதனைகளின் சுழற்சியை உடைக்கவும் மற்றும் காமன் ரஸ்ட் நோயின் மீண்டும் பரவுவதை தடுப்பதற்கு மக்காச் செடியை மாற்றவும்.
    </ListItem>
  </List>

  <Subheading>பொழுதுபோக்கு மற்றும் சூழல் தொடர்பான காரணிகள்:</Subheading>
  <strong>எண்ணெய் (Fertilizers):</strong>
  <List>
    <ListItem>
      வானிலை நிலவரத்தைப் பொருத்து எண்ணெய்களைப் பயன்படுத்துவதற்கான நேரம் மற்றும் அளவை சீரமைக்கவும். அதிக மழையின்போது, நைட்ரஜன் பயன்பாட்டை குறைத்து லீச்சிங் மற்றும் சாத்தியமான சுற்றுச்சூழல் பிரச்சனைகளை தவிர்க்கவும்.
    </ListItem>
  </List>
  <strong>படிகாதிகள் (Pesticides):</strong>
  <List>
    <ListItem>
      வானிலை முன்னறிவிப்புகள் மற்றும் நோயின் அபாய எச்சரிக்கைகள் மீது கண்காணிப்பு செய்யவும், அதன்பின் காமன் ரஸ்ட் நோயின் முன்னேற்றத்திற்கு சரியான நேரத்தில் புக்களிக்காத தடுப்பு பொருட்கள் பயன்படுத்தவும்.
    </ListItem>
  </List>
  <Subheading>பூமிக்கான சட்டங்கள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்:</Subheading>

  <p>
    எப்போதும், உள்ளூர் சட்டங்கள் மற்றும் பாதுகாப்பு நடவடிக்கைகளை பின்பற்றவும், அவை எண்ணெய்கள் மற்றும் படிகாதிகளின் பயன்பாட்டை குறித்துள்ளன.
  </p>
  <p>
    எண்ணெய்கள் மற்றும் படிகாதிகளை கையாளும் போது, தனி பாதுகாப்பு உடைகள் (PPE) மற்றும் சரியான முறையில் பயன்படுத்தவும்.
  </p>
</Description>
<Description>
  சூழலுக்கும், நோய்க்கான எதிர்மறையான தாக்கங்களை தவிர்க்கவும், உடனடி பரிந்துரைகள் மற்றும் பாதுகாப்பு நடவடிக்கைகளை பின்பற்றுவது மிகவும் முக்கியமாகும். சரியான பயன்பாட்டு வழிமுறைகள் மற்றும் பாதுகாப்பு வழிமுறைகளுக்காக விவசாயத் துறையினர்கள் அல்லது உள்ளூர் விரிவாக்க சேவைகளிடம் ஆலோசனை பெறவும்.
</Description>

        </Container>
      </Urdu>
    </>
  );
}
