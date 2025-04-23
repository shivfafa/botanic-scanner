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

export default function BlightPrecautions() {
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
          <Heading>Corn Blight Disease (சோளத்தின் ஆலுமினம் நோய்)</Heading>
          <Description>
            <strong>Description (விவரம்):</strong> Corn blight disease, also
            known as corn smut or Ustilago maydis, is a fungal disease that
            affects corn plants. The disease is caused by the fungus Ustilago
            maydis, which enters the corn plant through wounds or natural
            openings. Once inside the plant, the fungus proliferates and induces
            the formation of large, swollen, blackish-gray galls on various
            parts of the plant, including leaves, stems, and ears. These galls
            can rupture, releasing dark powdery spores that can spread to other
            plants, leading to further infections.
            <Subheading>Symptoms (அறிகுறிகள்):</Subheading>
            The symptoms of corn blight disease include:
          </Description>
          <List>
            <ListItem>Formation of swollen, black galls on the plant.</ListItem>
            <ListItem>Distorted growth of infected plant parts.</ListItem>
            <ListItem>
              Galls may burst open, releasing dark powdery spores that can
              spread to nearby healthy plants.
            </ListItem>
            <ListItem>Yellowing and wilting of leaves.</ListItem>
            <ListItem>Reduced yield and quality of corn ears.</ListItem>
          </List>
          <Subheading>Causes (وجہ):</Subheading>
          Corn blight disease is caused by the fungus Ustilago maydis. The
          fungus enters the corn plant through wounds or natural openings, such
          as leaf scars or flower openings. Once inside the plant, the fungus
          infects the plant's tissues and induces the formation of galls by
          manipulating the plant's growth hormones. As the galls develop, they
          become filled with dark-colored spores, which are later released to
          infect other plants or persist in the soil for future infections.
          <Subheading>Impact on Crops:</Subheading>
          Corn blight disease can have significant negative effects on corn
          crops. The formation of galls interferes with normal plant growth,
          leading to reduced plant vigor and productivity. Infected plants may
          show stunted growth, and ears of corn may be deformed or reduced in
          size. In severe cases, the disease can cause widespread damage,
          resulting in significant economic losses for farmers.
          <Subheading>Prevention and Management:</Subheading>
          Although there is no direct cure for corn blight disease once the
          plant is infected, several preventive and management measures can help
          reduce its impact and prevent further spread. These measures include:
          <List>
            <ListItem>
              <strong>1. Crop Rotation:</strong> Avoid planting corn in the same
              field where the disease occurred in the previous season. Crop
              rotation helps break the disease cycle and reduces the buildup of
              fungal spores in the soil.
            </ListItem>
            <ListItem>
              <strong>2. Use of Resistant Varieties:</strong> Planting corn
              varieties that are resistant to corn blight can provide some
              protection against the disease.
            </ListItem>
            <ListItem>
              <strong>3. Sanitation:</strong> Remove and destroy infected plant
              debris to prevent the spread of spores. Regularly clean farm
              equipment to avoid contamination.
            </ListItem>
            <ListItem>
              <strong>4. Proper Irrigation:</strong> Avoid overwatering, as
              excessive moisture can create a favorable environment for disease
              development.
            </ListItem>
            <ListItem>
              <strong>5. Fungicides:</strong> Fungicide applications can be used
              preventively to protect healthy plants from infection. Consult
              agricultural experts for proper fungicide selection and
              application guidelines.
            </ListItem>
          </List>
          <Subheading>
            Fertilizer and Pesticide Use (کھاد اور کیڑے ماردار کا استعمال):
          </Subheading>
          The use of fertilizers and pesticides can help in managing and
          reducing the impact of corn blight disease. Proper application of
          fertilizers can improve the overall health of the plants, making them
          more resilient to infections. The following fertilizers and pesticides
          can be considered:
          <Description>
            <strong>Fertilizers (کھاد):</strong>
            <List>
              <ListItem>
                Urea: Provides nitrogen, essential for plant growth and
                development.
              </ListItem>
              <ListItem>
                Ammonium Nitrate: Supplies nitrogen and promotes healthy
                foliage.
              </ListItem>
              <ListItem>
                Calcium Nitrate: Enhances calcium availability, which supports
                cell wall strength.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>Pesticides (کیڑے ماردار):</strong>
            <List>
              <ListItem>
                Chlorothalonil: A broad-spectrum fungicide effective against
                various fungal diseases, including corn blight.
              </ListItem>
              <ListItem>
                Mancozeb: A protective fungicide that prevents fungal infection
                by forming a barrier on the plant's surface.
              </ListItem>
              <ListItem>
                Copper-Based Fungicides: Provide systemic protection and control
                fungal growth on the plant's tissues.
              </ListItem>
            </List>
          </Description>
          <Description>
            <Subheading>Early Detection of Corn Blight:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Increase the application of nitrogen-based fertilizers, such as
                urea or ammonium nitrate, to support the corn's recovery and
                strengthen its resistance to disease.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                Apply a targeted fungicide like chlorothalonil or mancozeb
                immediately after detecting corn blight symptoms. Early
                intervention can prevent the spread of the disease to other
                plants and minimize damage.
              </ListItem>
            </List>

            <Subheading>Severe Corn Blight Outbreak:</Subheading>
            <strong>Fertilizers:</strong>
            <List>
              <ListItem>
                Use a balanced fertilizer that includes essential nutrients like
                nitrogen, phosphorus, and potassium to support the overall
                health of the corn plants, as severe infections can deplete the
                plant's nutrient reserves.
              </ListItem>
            </List>
            <strong>Pesticides:</strong>
            <List>
              <ListItem>
                In cases of severe corn blight outbreaks, consult with
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
                minimize the recurrence of corn blight.
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
                fungicides proactively when conditions are favorable for corn
                blight development.
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
          <Heading>Corn Blight Disease (சோளத்தின் ஆலுமினம் நோய்)</Heading>
          <Description>
          <strong>விவரம் (Description):</strong>மக்காச்சோளத்தின் ஆலுமினம் நோய், இது "கார்ன் ஸ்மட்" 
            அல்லது "ஸ்டிலாகோமைட்ஸ்" என்ற பெயர்களால் பரிச்சயமாக உள்ளது, ஒரு தீவிர நோயாகும், 
            இது மக்காச்சோளச் செடிகளை பாதிக்கிறது. இந்த நோய் ஸ்டிலாகோமைட்ஸ் என்ற பூஞ்சையால் 
            ஏற்படுகிறது, இது செடியின் காயங்களோ அல்லது இயற்கை திறப்புகளோ மூலம் உட்புகுகிறது. 
            அதன் பிறகு பூஞ்சை செடியின் உட்பகுதியில் பரவி, கணிகளை உருவாக்கும் செயல்பாட்டை அதிகரிக்கிறது. 
            இதன் விளைவாக, செடியின் இலைகள், தண்டு மற்றும் கான்களில் கட்டிகள் உருவாகின்றன. 
            அந்த கட்டிகளில் பூஞ்சையின் கருப்புப் ப灰 நிறத் துகள்கள் காணப்படுகின்றன, இவை மழையினால் 
            வெடிக்கக்கூடும். அந்த வெடித்த கட்டிகள் நிறமுடைய துகள்களை வெளியிடும், அவை புதிய செடிகளையும் 
            பாதிக்கக்கூடியவை.
          </Description>
          <Subheading>அறிகுறிகள் (Symptoms):</Subheading>
          <List>
          <ListItem>செடியில் கட்டிகள் உருவாகும் சாத்தியம்.</ListItem>
          <ListItem>பாதிக்கப்பட்ட செடியின் உள் பகுதி சேதமடையும்.</ListItem>
          <ListItem>
            கட்டிகள் வெடிக்கக்கூடும், அதனால் கருப்பாக மறைந்திருக்கும் துகள்கள் வெளியேறும்,
            அவை புதிய செடிகளையும் பாதிக்கக்கூடும்.
          </ListItem>
          <ListItem>இலைகள் மஞ்சளாகி உதிர்வதுடன்.</ListItem>
          <ListItem>மக்காச்சோளத்தின் கான்கள் குறைவாகவும், அளவிலும் குறைவாகவும் இருக்கும்.</ListItem>

          </List>

          <Subheading>காரணம் (Reason):</Subheading>

          <Description>
            மக்காச்சோளத்தின் ஆலுமினம் நோயுக்குக் காரணமானது ஸ்டிலாகோமைட்ஸ் என்ற பூஞ்சை, இது
            செடியின் காயங்களோ அல்லது இயற்கை திறப்புகளோ மூலம் உட்புகுகிறது. பின்னர் இந்த
            பூஞ்சை செடியின் உள்ளே பரவி, கணிகளை உருவாக்கும் செயல்பாட்டை அதிகரிக்கிறது மற்றும்
            இதன் விளைவாக கட்டிகளும், பூஞ்சையின் உள்ளே உருவாகும் விதைகளும் தோன்றுகின்றன.
          </Description>


          <Subheading>பயிர்கள் மீது தாக்கங்கள் (Impact on Crops):</Subheading>
          <Description>
            மக்காச்சோளத்தின் ஆலுமினம் நோயால் மக்காச்சோளப் பயிர்களில் பெரிய சேதங்கள் ஏற்படலாம்.
            கட்டிகள் உருவாவதால் செடியின் இயல்பான வளர்ச்சி மற்றும் உற்பத்தி பாதிக்கப்படும்.
            பாதிக்கப்பட்ட செடியின் வளர்ச்சி நிற்கும், மேலும் மக்காச்சோள கான்களின் வடிவத்தில்
            மாற்றம் ஏற்படலாம். கடுமையான நிலைமையில், இந்த நோய் மேலும் சேதத்தை உண்டாக்கும்,
            இது விவசாயிகளுக்கு பொருளாதார ரீதியாக பெரிய இழப்புகளை ஏற்படுத்தக்கூடும்.
          </Description>


          <Subheading>
            தடுப்பு மற்றும் மேலாண்மை (Prevention and Management):
          </Subheading>
          <Description>
            செடிகள் பாதிக்கப்பட்ட பிறகு, மக்காச்சோளத்தின் ஆலுமினம் நோயுக்கு நேரடி சிகிச்சை இல்லை. ஆனால் சில தடுப்பு மற்றும் மேலாண்மை நடவடிக்கைகள் மூலம் அதன் தாக்கங்களை குறைக்கலாம் மற்றும் பரவலைத் தடுக்கலாம். சில முக்கியமான நடவடிக்கைகள் பின்வருமாறு:
          </Description>
          <List>
            <ListItem>
              <strong>1. பயிர் மாற்றம்:</strong> கடந்த சீசனில் நோய் இருந்த பகுதியில் மக்காச்சோளை சாகுபடி செய்ய வேண்டாம். பயிர் மாற்றம் நோயின் சுழற்சியை உடைக்கும் மற்றும் பூஞ்சையின் அழுத்தத்தை குறைக்கும்.
            </ListItem>
            <ListItem>
              <strong>2. வலிமையான இனங்களின் பயிரிடல்:</strong> நோய்களுக்கு எதிராக பாதுகாப்பளிக்கக்கூடிய மக்காச்சோள இனம் தேர்ந்தெடுக்கவும்.
            </ListItem>
            <ListItem>
              <strong>3. சுத்தம்:</strong> பாதிக்கப்பட்ட செடியின் கழிவுகளை சுத்தமாக அகற்றுங்கள், பூஞ்சையின் பரவலை தடுக்க இது அவசியம். பண்ணை மற்றும் மண்ணை அடிக்கடி சுத்தமாக்கி புதிய செடிகள் பாதிக்கப்படாமல் காத்திடவும்.
            </ListItem>
            <ListItem>
              <strong>4. சரியான நீர்ப்பாசனம்:</strong> அதிக நீர்ப்பாசனத்தை தவிர்க்கவும், ஏனெனில் அதிக ஈரப்பதம் பூஞ்சை வளர்வதற்கு உகந்த சூழலை உருவாக்கும்.
            </ListItem>
            <ListItem>
              <strong>5. பூச்சி ஒழிப்பான்:</strong> தடுப்பு நடவடிக்கையாக பூச்சி ஒழிப்பான் பயன்படுத்தலாம். சரியான பயன்பாட்டுக்காக வேளாண்மை நிபுணர்களிடம் ஆலோசனை பெறவும்.
            </ListItem>
            
            <Subheading>
            உரம் மற்றும் பூச்சி ஒழிப்பான் பயன்பாடு (Fertilizer and Pesticide Use):
          </Subheading>
          <Description>
            உரம் மற்றும் பூச்சி ஒழிப்பான்களைப் பயன்படுத்துவதன் மூலம் மக்காச்சோளத்தின் ஆலுமினம் நோயின் தாக்கத்தை குறைக்கலாம். சரியான உரத்தின் பயன்படுத்துதலைப் பயன்படுத்துவது செடியின் முழு ஆரோக்கியத்தை ஆதரிக்கும், இது நோய்களுக்கான எதிர்ப்பு உருவாக்குகிறது. கீழே சில உரங்களும் பூச்சி ஒழிப்பான்களின் உதாரணங்களும் கொடுக்கப்பட்டுள்ளன:
          </Description>

          </List>

          <Subheading>
            உரம் மற்றும் பூச்சி ஒழிப்பான் பயன்பாடு (Fertilizer and Pesticide Use):
          </Subheading>
          <Description>
            உரம் மற்றும் பூச்சி ஒழிப்பான்களின் பயன்படுத்துதலால் மக்காச்சோளத்தின் ஆலுமினம் நோயின் தாக்கத்தை குறைக்கலாம். சரியான உரம் செடியின் முழுமையான ஆரோக்கியத்தை ஆதரிக்கக்கூடும், இது நோய்களுக்கு எதிரான எதிர்ப்பு உருவாக்கும். கீழே சில உரங்களும் பூச்சி ஒழிப்பான்களின் உதாரணங்களும் கொடுக்கப்பட்டுள்ளன:
          </Description>

          <Description>
          <strong>உரம் (Fertilizers):</strong>
          <List>
            <ListItem>
              யூரியா: செடியின் வளர்ச்சி மற்றும் முன்னேற்றத்திற்கு தேவையான நைட்ரஜன் வழங்குகிறது.
            </ListItem>
            <ListItem>
              அமோனியம் நைட்ரேட்: நைட்ரஜன் வழங்கி செடியின் இலைகளை சரியான முறையில் வளர்க்கிறது.
            </ListItem>
            <ListItem>
              கால்சியம் நைட்ரேட்: செல் சுவர் வலிமையை அதிகரிக்கும் கால்சியம் பயன்பாட்டை மேம்படுத்துகிறது.
            </ListItem>
          </List>
        </Description>
        <Description>
          <strong>பூச்சி ஒழிப்பான் (Pesticides):</strong>
          <List>
            <ListItem>
              கிளோரோத்திலோன்: மக்காச்சோளத்தின் ஆலுமினம் நோயான பல்வேறு பூஞ்சை நோய்களுக்கு எதிராக பயனுள்ள பூஞ்சை ஒழிப்பான்.
            </ListItem>
            <ListItem>
              மன்கோசிப்: பூஞ்சை விரிவாக்கத்தை தடுக்கும் ஒரு பாதுகாப்பான பூஞ்சை ஒழிப்பான்.
            </ListItem>
            <ListItem>
              கூப்பர் அடிப்படையிலான பூஞ்சை ஒழிப்பான்கள்: செடியின் உள்ளே பூஞ்சையின் அழுத்தத்தை தடுக்கும் மற்றும் பூஞ்சையின் அம்சங்களை கட்டுப்படுத்துகிறது.
            </ListItem>
          </List>
        </Description>

        <Description>
          <Subheading>மக்காச்சோளத்தின் பிளைட் வேகமான கண்டறிதல்:</Subheading>
          <strong>உரம்:</strong>
          <List>
            <ListItem>
              நிலங்களில் நைட்ரஜன் அடிப்படையிலான உரங்களை அதிகரிக்கவும், ஏனெனில் இது மக்காச்சோளத்தின் ஆரோக்கியத்தை மேம்படுத்த உதவும் மற்றும் நோயைக் கொடுக்க எதிர்ப்பு திறனை அதிகரிக்கும்.
            </ListItem>
          </List>
          <strong>பூச்சி ஒழிப்பான்:</strong>
          <List>
            <ListItem>
              மக்காச்சோள பிளைட் அறிகுறிகளின் கண்டறிதலுக்குப் பிறகு உடனடியாக கிளோரோத்திலோன் அல்லது மன்கோசிப் போன்ற குறிப்பிட்ட பூஞ்சை ஒழிப்பான்களை பயன்படுத்து. வேகமான நடவடிக்கைகள் மற்ற செடிகளுக்கு நோயின் பரவலைத் தடுக்கவும் மற்றும் பாதிப்பை குறைக்கும்.
            </ListItem>
          </List>
          <Subheading>கடுமையான மக்காச்சோள பிளைட் பரவல்:</Subheading>
          <strong>உரம்:</strong>
          <List>
            <ListItem>
              கடுமையான தொற்றின் நிலையில, மக்காச்சோள நிலங்களில் நைட்ரஜன், பாஸ்பரஸ் மற்றும் பொட்டாசியம் கொண்ட சமநிலை உரங்களை பயன்படுத்தவும், ஏனெனில் கடுமையான தொற்றின் காரணமாக செடிகளின் தேவையான சேமிப்புகள் முடிவடைகின்றன.
            </ListItem>
          </List>
          <strong>பூச்சி ஒழிப்பான்:</strong>
          <List>
            <ListItem>
              கடுமையான மக்காச்சோள பிளைட் பரவலின் நிலையைப் படி, விவசாய நிபுணர்களோ அல்லது விரிவாக்க சேவைகளோ எங்களுக்கு சரியான பூச்சி ஒழிப்பான்களுக்கு அறிவுரைகளை பெற உதவ முடியும்.
            </ListItem>
          </List>
          <Subheading>நோய்க்கு எதிர்ப்பு மற்றும் பயிர் சுழற்சி:</Subheading>
          <strong>உரம்:</strong>
          <List>
            <ListItem>
              மண்ணில் சோழம் மற்றும் கம்போஸ்டைப் பயன்படுத்தி நிலத்தின் ஆரோக்கியத்தையும் சோழத்தை மேம்படுத்தவும், இது செடியின் நோய் எதிர்ப்பு திறனை மேம்படுத்துகிறது.
            </ListItem>
          </List>
          <strong>பூச்சி ஒழிப்பான்:</strong>
          <List>
            <ListItem>
              பூஞ்சை எதிர்ப்பு விகிதத்தை குறைக்க உறுதிப்படுத்தும் பல்வேறு நடவடிக்கைகளுடன் பூஞ்சை ஒழிப்பான்களை மாற்றி மாற்றி பயன்படுத்தவும். குறிப்பாக, மக்காச்சோள பிளைட்டின் பரவலைத் தவிர்க்க மற்றும் குறைக்க பயிர் சுழற்சி முறைகளை பயன்படுத்தவும்.
            </ListItem>
          </List>
          <Subheading>பின்னணி மற்றும் சுற்றுச்சூழல் காரணிகள்:</Subheading>
          <strong>உரம்:</strong>
          <List>
            <ListItem>
              பருவநிலை மாறுபாடுகளுக்கு ஏற்ப உரத்தின் பயன்பாட்டின் நேரம் மற்றும் அளவைக் கட்டுப்படுத்தவும். அதிக மழையின் போது, நைட்ரஜன் பயன்பாட்டை குறைப்பது அவசியம், இது அழுகும் மற்றும் சுற்றுச்சூழல் பிரச்சினைகளைத் தவிர்க்க உதவும்.
            </ListItem>
          </List>
          <strong>பூச்சி ஒழிப்பான்:</strong>
          <List>
            <ListItem>
              பருவநிலை முன்னறிவிப்புகள் மற்றும் நோயின் ஆபத்து மதிப்பீடுகளை கவனமாகப் பார்க்கவும், அதன் பிறகு மக்காச்சோள பிளைட்டின் தாக்கத்தைத் தவிர்க்க பூஞ்சை ஒழிப்பான்களை செயல்படுத்தவும்.
            </ListItem>
          </List>
          <Subheading>உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்:</Subheading>

          <p>
            உரங்களின் மற்றும் பூச்சி ஒழிப்பான்களின் பயன்பாட்டிற்கான உள்ளூர் விதிமுறைகள் மற்றும் பாதுகாப்பு அறிவுறுத்தல்களை எப்போதும் பின்பற்ற வேண்டும்.
          </p>
          <p>
            உரங்கள் மற்றும் பூச்சி ஒழிப்பான்களை கையாளும் போது, தனிப்பட்ட பாதுகாப்பு உபகரணங்கள் (PPE) மற்றும் சரியான பயன்பாட்டு தொழில்நுட்பங்களைப் பயன்படுத்தவும்.
          </p>
        </Description>



        <Description>
          நோயின் பாதிப்புக்கு உட்பட்ட இல்லாத பகுதிகள் மற்றும் குறிப்பற்ற நாடுகளுக்கு மாறுபட்ட புறப்பட்ட வழிகளில் எதிர்மறை விளைவுகளைக் குறைக்க, முறையான வழிகாட்டியுடன் காலம் மற்றும் இடத்தில் பயன்படுத்துவது அவசியமாகும். நிர்வாக சேவைகளிலோ அல்லது உள்ளூர் விரிவாக்க சேவைகளிலோ ஆலோசனை பெற்றுக் கொள்ளவும்.
        </Description>


        </Container>
      </Urdu>
    </>
  );
}
