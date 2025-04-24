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

export default function WSeptoriaPrecautions() {
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
          <Heading>Wheat Septoria  (கோதுமையின் ஸெப்டோரியா நோய்)</Heading>
          <Description>
            <strong>Description (விவரம்):</strong> Wheat Septoria, also known as
            Septoria leaf spot or Septoria tritici, is a common fungal disease
            that affects wheat plants. The disease is caused by the fungus
            Septoria tritici, which mainly targets the leaves of the wheat
            plant. The fungus forms small, dark-colored lesions with light
            centers on the leaves, which can coalesce and cover larger areas of
            the leaf surface over time. Severe infections can lead to premature
            defoliation and reduced grain yield.
            <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
            The symptoms of Wheat Septoria include:
          </Description>
          <List>
            <ListItem>
              Formation of small, dark-colored lesions with light centers on
              wheat leaves.
            </ListItem>
            <ListItem>
              Lesions may coalesce, covering larger areas of the leaf surface.
            </ListItem>
            <ListItem>Premature defoliation in severe cases.</ListItem>
            <ListItem>
              Reduced grain yield due to the impact on plant health.
            </ListItem>
          </List>
          <Subheading>Causes (காரணம்):</Subheading>
          Wheat Septoria is caused by the fungus Septoria tritici. The fungus
          survives in crop residues and infected plant debris from previous
          seasons and can spread through wind, rain splashes, and irrigation
          water. Infection is favored by warm and humid conditions, providing
          suitable environments for fungal growth and disease development.
          <Subheading>Impact on Crops:</Subheading>
          Wheat Septoria can significantly affect wheat crops, especially when
          weather conditions are conducive to disease development. The formation
          of lesions on wheat leaves reduces the photosynthetic area, affecting
          the plant's ability to produce and store energy. As a result, the
          wheat plant's overall health and grain yield are compromised.
          <Subheading>Prevention and Management:</Subheading>
          While complete eradication of Wheat Septoria is challenging, several
          preventive and management measures can help reduce its impact on wheat
          crops. These measures include:
          <List>
            <ListItem>
              <strong>1. Crop Rotation:</strong> Practice crop rotation to
              reduce the buildup of the fungus in the soil. Avoid planting wheat
              in fields where the disease occurred in the previous season.
            </ListItem>
            <ListItem>
              <strong>2. Resistant Varieties:</strong> Plant wheat varieties
              that have some resistance to Wheat Septoria. Resistant varieties
              can show reduced disease severity and help maintain better crop
              health.
            </ListItem>
            <ListItem>
              <strong>3. Fungicides:</strong> Fungicides can be applied
              preventively during periods of high disease pressure. Consult
              agricultural experts for proper fungicide selection and
              application guidelines.
            </ListItem>
            <ListItem>
              <strong>4. Removal of Infected Debris:</strong> Remove and destroy
              infected wheat debris to reduce the chances of disease spread to
              new plants.
            </ListItem>
            <ListItem>
              <strong>5. Proper Irrigation:</strong> Avoid overhead irrigation,
              as wet conditions can favor disease development. Use drip
              irrigation or other methods that minimize leaf wetness.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (சந்தைகள் மற்றும் புழுங்கி மருந்துகளின் பயன்பாடு):
          </Subheading>
          The use of fertilizers and pesticides can play a role in managing
          Wheat Septoria. Proper fertilization can improve the wheat plant's
          health and resilience to infections, while targeted use of pesticides
          can help control the disease's spread. The following fertilizers and
          pesticides can be considered:
          <Description>
            <strong>Fertilizers (சந்தை):</strong>
            <List>
              <ListItem>
                Nitrogen-based fertilizers: Provide essential nutrients for
                wheat growth and development.
              </ListItem>
              <ListItem>
                Phosphorus and potassium-based fertilizers: Support overall
                plant health and strengthen resistance to diseases.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (பசுமை மருந்துகள்):</strong>
            <List>
              <ListItem>
                Azoxystrobin or other fungicides effective against Septoria
                tritici: Applied preventively during high disease pressure
                periods to protect wheat plants from infection.
              </ListItem>
              <ListItem>
                Triazole-based fungicides: Provide systemic protection and
                control of the disease on wheat leaves.
              </ListItem>
            </List>
          </Description>
          <Subheading>Early Detection of Wheat Septoria:</Subheading>
          <strong>Fertilizers:</strong>
          <List>
            <ListItem>
              Increase nitrogen-based fertilizer application to support the
              wheat's recovery and strengthen its resistance to the disease.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              Apply a targeted fungicide like azoxystrobin or triazole-based
              fungicides immediately after detecting Wheat Septoria symptoms.
              Early intervention can prevent the spread of the disease to other
              plants and minimize damage.
            </ListItem>
          </List>
          <Subheading>Severe Wheat Septoria Outbreak:</Subheading>
          <strong>Fertilizers:</strong>
          <List>
            <ListItem>
              Use a balanced fertilizer that includes essential nutrients like
              nitrogen, phosphorus, and potassium to support the overall health
              of the wheat plants, as severe infections can deplete the plant's
              nutrient reserves.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              In cases of severe Wheat Septoria outbreaks, consult with
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
              its health and fertility, indirectly enhancing the wheat plant's
              disease resistance.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              Rotate pesticides with different modes of action to reduce the
              risk of developing resistance in the fungal population. Implement
              crop rotation practices to break the disease cycle and minimize
              the recurrence of Wheat Septoria.
            </ListItem>
          </List>
          <Subheading>Weather and Environmental Factors:</Subheading>
          <strong>Fertilizers:</strong>
          <List>
            <ListItem>
              Adjust the timing and rates of fertilizer applications based on
              weather conditions. During periods of excessive rainfall, consider
              reducing nitrogen applications to prevent leaching and potential
              environmental issues.
            </ListItem>
          </List>
          <strong>Pesticides:</strong>
          <List>
            <ListItem>
              Monitor weather forecasts and disease risk alerts to apply
              fungicides proactively when conditions are favorable for Wheat
              Septoria development.
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
        <Heading>கோதுமையின் ஸெப்டோரியா நோய் (Wheat Septoria)</Heading>
<Description>
  <strong>விவரம்:</strong> கோதுமையின் ஸெப்டோரியா நோய் (Septoria), பல பெயர்களால் அறியப்படும் ஒரு பொதுவான பூஞ்சை நோயாகும், இது கோதுமை செடிகளை பாதிக்கிறது. இந்த நோய் "ஸெப்டோரியா டிரிடிசி" (Septoria tritici) எனும் பூஞ்சையால் ஏற்படுகிறது, இது பெரும்பாலும் கோதுமையின் இலைகளை தாக்குகிறது. இலைகளில் சிறிய, கருப்பு புள்ளிகள் தோன்றும், அவை நடுவில் ஒளிரும் பகுதியைக் கொண்டிருக்கும் மற்றும் காலப்போக்கில் இலை முழுவதும் பரவுகின்றன. கடுமையான தொற்றில், இலைகள் விரைவாக உதிர்வதற்கும் விளைச்சல் குறைவதற்கும் வழிவகுக்கும்.
  <Subheading>அறிகுறிகள்:</Subheading>
  கோதுமை ஸெப்டோரியா நோயின் அறிகுறிகள்:
</Description>
<List>
  <ListItem>கோதுமை இலைகளில் புள்ளிகள் உருவாகுதல்.</ListItem>
  <ListItem>புள்ளிகள் ஒன்றிணைந்து இலை முழுவதையும் மூடியிருத்தல்.</ListItem>
  <ListItem>இலைகள் விரைவாக உதிர்வது.</ListItem>
  <ListItem>கோதுமை விளைச்சல் குறைவாகும்.</ListItem>
</List>
<Subheading>காரணங்கள்:</Subheading>
ஸெப்டோரியா நோய் "ஸெப்டோரியா டிரிடிசி" பூஞ்சையால் ஏற்படுகிறது. இது முந்தைய பயிர்களின் மீதமுள்ள பகுதியிலும், பாதிக்கப்பட்ட செடிகளில் வாழ்ந்து, காற்று, மழை அல்லது பாசனத்தால் பரவுகிறது. ஈரமான மற்றும் சூடான காலநிலையில்தான் இந்த பூஞ்சை விரைவாக வளர்ந்து, நோயை ஏற்படுத்துகிறது.
<Subheading>செடிகளின் மீது தாக்கங்கள்:</Subheading>
இந்த நோய் கோதுமை விளைச்சலை பெரிதும் பாதிக்கக்கூடியது, குறிப்பாக நோய்த்தொற்றுக்கு ஏற்ற சூழ்நிலை இருக்கும்போது. இலைகளில் புள்ளிகள் தோன்றுவதால், ஒளிச்சேர்க்கையின் பரப்பளவு குறைவதுடன் செடியின் சக்தியும் குறைகிறது. இதனால் செடியின் வளர்ச்சி மற்றும் விளைச்சல் குறைகிறது.
<Subheading>தடுப்பும் மேலாண்மையும்:</Subheading>
ஸெப்டோரியா நோயை முற்றிலும் ஒழைப்பது கடினம், ஆனால் சில தடுப்பு மற்றும் மேலாண்மை வழிமுறைகள் அதன் தாக்கத்தை குறைக்க முடியும். அவை:
<List>
  <ListItem>
    <strong>1. பயிர் சுழற்சி:</strong> நோய் பாதித்த இடத்தில் அடுத்த பருவத்தில் பயிர் இடாமல், மண்中的 பூஞ்சையின் அளவைக் குறைக்க முடியும்.
  </ListItem>
  <ListItem>
    <strong>2. நோய்த்தடுப்பு வகைகள்:</strong> ஸெப்டோரியா நோய்க்கு எதிர்ப்பு கொண்ட கோதுமை வகைகளை தேர்ந்தெடுக்கவும். இது நோயின் தீவிரத்தைக் குறைக்கும்.
  </ListItem>
  <ListItem>
    <strong>3. பூச்சிக்கொல்லிகள்:</strong> நோய் தொற்றின் போது பாதுகாப்பாக பூச்சிக்கொல்லிகளை பயன்படுத்தவும். விவசாய நிபுணரின் ஆலோசனையுடன் சரியான பூச்சிக்கொல்லியை தேர்வு செய்யவும்.
  </ListItem>
  <ListItem>
    <strong>4. பாதிக்கப்பட்ட இடங்களை அகற்றல்:</strong> பாதிக்கப்பட்ட பசுமை பகுதியை அகற்றி, புதிய செடிகளுக்கு நோய்த் தொற்று பரவாமல் பார்த்துக் கொள்ளவும்.
  </ListItem>
  <ListItem>
    <strong>5. சரியான பாசனம்:</strong> மேலிருந்து தண்ணீர் தெளிப்பதை தவிர்க்கவும். இது ஈரப்பதத்தை அதிகரித்து நோய் பரவவைக்கலாம். பூக்கள் ஈரமாகாத விதத்தில் பாசனம் செய்யவும்.
  </ListItem>
</List>

<Subheading>உரமும் பூச்சி மருந்தும் பயன்படுத்துதல்:</Subheading>
உரங்களும் பூச்சி மருந்துகளும் கோதுமை செப்டோரியா நோயை கட்டுப்படுத்துவதில் முக்கிய பங்கு வகிக்கின்றன. சரியான உரங்களை பயன்படுத்துவதால் கோதுமை செடியின் ஆரோக்கியம் மேம்படலாம், மேலும் குறிப்பிட்ட பூச்சி மருந்துகளைப் பயன்படுத்துவதால் நோய் பரவலை தடுக்க முடியும். கீழ்க்கண்ட உரங்கள் மற்றும் பூச்சி மருந்துகள் பயன்படுத்தப்படலாம்:

<Description>
  <strong>உரங்கள் (Fertilizers):</strong>
  <List>
    <ListItem>
      நைட்ரஜன் அடங்கிய உரங்கள்: கோதுமை வளர்ச்சிக்குத் தேவையானவை.
    </ListItem>
    <ListItem>
      பாஸ்பரஸ் மற்றும் பொட்டாசியம் அடங்கிய உரங்கள்: செடியின் ஆரோக்கியத்தை மேம்படுத்தி நோய்களை எதிர்க்க உதவுகின்றன.
    </ListItem>
  </List>
</Description>

<Description>
  <strong>பூச்சி மருந்துகள் (Pesticides):</strong>
  <List>
    <ListItem>
      அசோக்ஸிஸ்ட்ரோபின் அல்லது செப்டோரியா டிரிட்டிசி எதிரான பிற மருந்துகள்: நோயின் ஆரம்பத்தில் தடுப்புத் தொழிலுக்கு பயன்படுத்தலாம்.
    </ListItem>
    <ListItem>
      ட்ரைஅசோல் அடிப்படையிலான பூச்சி மருந்துகள்: இவை இலைகளில் நோயை கட்டுப்படுத்தவும் பாதுகாக்கவும் உதவுகின்றன.
    </ListItem>
  </List>
</Description>

<Subheading>கோதுமை செப்டோரியாவின் ஆரம்ப அடையாளங்கள்:</Subheading>
<strong>உரங்கள் (Fertilizers):</strong>
<List>
  <ListItem>
    நோயின் ஆரம்ப அறிகுறிகள் தென்படும் போது நைட்ரஜன் உரங்களை சரியாகப் பயன்படுத்தி செடியின் செயல்திறனை காக்கலாம்.
  </ListItem>
</List>

<strong>பூச்சி மருந்துகள் (Pesticides):</strong>
<List>
  <ListItem>
    நோயின் ஆரம்ப அறிகுறிகள் தென்படும் போது அசோக்ஸிஸ்ட்ரோபின் அல்லது ட்ரைஅசோல் அடிப்படையிலான மருந்துகளை உடனடியாகப் பயன்படுத்த வேண்டும். இது நோயை பரவாமல் தடுக்க உதவும்.
  </ListItem>
</List>

<Subheading>தீவிர செப்டோரியா பரவலுக்கு:</Subheading>
<strong>உரங்கள் (Fertilizers):</strong>
<List>
  <ListItem>
    தீவிர பரவலான போது, நைட்ரஜன், பாஸ்பரஸ் மற்றும் பொட்டாசியம் அடங்கிய உரங்களைப் பயன்படுத்தி செடியின் ஆரோக்கியத்தை மேம்படுத்தலாம்.
  </ListItem>
</List>

<strong>பூச்சி மருந்துகள் (Pesticides):</strong>
<List>
  <ListItem>
    தீவிர பாதிப்பு ஏற்பட்டால், வேளாண்மை நிபுணர்கள் அல்லது விரிவாக்க சேவைகளை அணுகி சரியான பூச்சி மருந்து பரிந்துரைகளைப் பெற வேண்டும்.
  </ListItem>
</List>

<Subheading>நோயை எதிர்கொள்வது மற்றும் பயிர் சுழற்சி:</Subheading>
<strong>உரங்கள் (Fertilizers):</strong>
<List>
  <ListItem>
    மண்ணின் நிலை மற்றும் வளத்தை மேம்படுத்த கம்போஸ்ட் மற்றும் இயற்கை உரங்களைச் சேர்க்கவும். இது நோய்க்கு எதிரான சக்தியை அதிகரிக்கும்.
  </ListItem>
</List>

<strong>பூச்சி மருந்துகள் (Pesticides):</strong>
<List>
  <ListItem>
    பூச்சி மருந்துகளை மாறும் செயன்முறை கொண்டதாக மாற்றிக் கொண்டு பயன்படுத்த வேண்டும். நோய் மடங்க முடிய Crop Rotation (பயிர் சுழற்சி) முறைகளை பயன்படுத்துங்கள்.
  </ListItem>
</List>

<Subheading>காலநிலை மற்றும் சுற்றுச்சூழல் காரணிகள்:</Subheading>
<strong>உரங்கள் (Fertilizers):</strong>
<List>
  <ListItem>
    காலநிலை அடிப்படையில் உரப் பயன்பாட்டின் நேரமும் அளவும் சீரமைக்க வேண்டும். அதிகமழை நேரத்தில் நைட்ரஜன் அளவை குறைத்து ஊறுபோகும் சிக்கல்களை தவிர்க்க வேண்டும்.
  </ListItem>
</List>

<strong>பூச்சி மருந்துகள் (Pesticides):</strong>
<List>
  <ListItem>
    காலநிலை எச்சரிக்கைகள் மற்றும் நோய் அபாய முன்னறிவிப்புகளை கவனித்து, முன்னதாகவே பூச்சி மருந்துகளைப் பயன்படுத்துங்கள்.
  </ListItem>
</List>

<Subheading>உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்:</Subheading>
<p>
  உரம் மற்றும் பூச்சி மருந்துகளைப் பயன்படுத்தும் பொழுது உள்ளூர் விதிமுறைகளையும் பாதுகாப்பு வழிகாட்டுதல்களையும் பின்பற்றுங்கள்.
</p>
<p>
  பயன்பாட்டின் போது தனிநபர் பாதுகாப்பு உபகரணங்களை (PPE) அணியவும், சரியான முறையில் பயன்படுத்தவும்.
</p>
<p>
  சுற்றுச்சூழலுக்கும், தீவிரமான பல்லுயிர்களுக்கும் பாதிப்பு ஏற்படாமல் இருக்க, பரிந்துரைக்கப்பட்ட பாதுகாப்பு நடைமுறைகளைப் பின்பற்றவும். தெளிவான வழிகாட்டுதல்களுக்கு வேளாண்மை நிபுணர்கள் அல்லது உள்ளூர் விரிவாக்க சேவைகளை அணுகுங்கள்.
</p>
        </Container>
      </Urdu>
    </>
  );
}
