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

export default function RedRotPrecautions() {
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
    <Heading>Sugarcane Red Rot (சர்க்கரை வாட்டின் சிவப்பு சாவி)</Heading>
    <Description>
      <strong>Description (விளக்கம்):</strong> Sugarcane red rot, also known as
      red rot disease or Colletotrichum falcatum, is a fungal disease that
      affects sugarcane plants. The disease is caused by the fungus
      Colletotrichum falcatum, which enters the sugarcane plant through wounds
      or natural openings. Once inside the plant, the fungus attacks and
      colonizes the vascular tissues, leading to the discoloration of the inner
      stalk tissues and the development of red lesions.
      <Subheading>Symptoms (அலாமதுகள்):</Subheading>
      The symptoms of sugarcane red rot include:
    </Description>
    <List>
      <ListItem>Development of red to dark-brown lesions on the inner stalk.</ListItem>
      <ListItem>
        Discoloration of the vascular tissues, giving the affected area a red
        appearance.
      </ListItem>
      <ListItem>Stunting of the affected sugarcane plants.</ListItem>
      <ListItem>Reddish appearance of the internodes.</ListItem>
      <ListItem>
        Wilting and drying of leaves in severe cases, leading to the death of
        the plant.
      </ListItem>
    </List>
    <Subheading>Causes (காரணம்):</Subheading>
    Sugarcane red rot is caused by the fungus Colletotrichum falcatum. The
    fungus gains entry into the sugarcane plant through wounds or natural
    openings, such as leaf scars or cut ends. Once inside the plant, it
    attacks the vascular tissues, interfering with the transport of water and
    nutrients, and leading to the development of red lesions and wilting of
    leaves.
    <Subheading>Impact on Crops:</Subheading>
    Sugarcane red rot can have significant negative effects on sugarcane
    crops. The infection causes damage to the vascular system, disrupting the
    flow of water and nutrients, which ultimately affects the growth and
    development of the plants. In severe cases, the affected plants may die,
    leading to a reduction in sugarcane yields.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for sugarcane red rot once the plant is
    infected, several preventive and management measures can help reduce its
    impact and prevent further spread. These measures include:
    <List>
      <ListItem>
        <strong>1. Sanitation:</strong> Remove and destroy infected plant
        debris to prevent the spread of the fungus. Avoid planting sugarcane in
        areas where the disease occurred previously.
      </ListItem>
      <ListItem>
        <strong>2. Use of Disease-Free Planting Material:</strong> Plant
        disease-free sugarcane seedlings or cuttings to avoid introducing the
        fungus into new areas.
      </ListItem>
      <ListItem>
        <strong>3. Crop Rotation:</strong> Practice crop rotation with
        non-susceptible crops to break the disease cycle and reduce the buildup
        of the pathogen in the soil.
      </ListItem>
      <ListItem>
        <strong>4. Proper Irrigation:</strong> Ensure proper irrigation
        practices to avoid water stress, which can make the plants more
        susceptible to infection.
      </ListItem>
      <ListItem>
        <strong>5. Fungicides:</strong> Fungicide applications can be used to
        protect healthy plants from infection. Consult agricultural experts for
        proper fungicide selection and application guidelines.
      </ListItem>
    </List>
    <Subheading>Fertilizer and Pesticide Use (உரங்களும் பூச்சி மருந்துகளின் பயன்பாடு):</Subheading>
    The use of fertilizers and pesticides can help in managing and reducing
    the impact of sugarcane red rot. Proper application of fertilizers can
    improve the overall health of the plants, making them more resilient to
    infections.
    <Description>
      <strong>Fertilizers (உரங்கள்):</strong>
      <List>
        <ListItem>
          Triple Superphosphate: Provides phosphorus, essential for plant
          growth and development.
        </ListItem>
        <ListItem>
          Monoammonium Phosphate: Supplies nitrogen and phosphorus, promoting
          healthy foliage and root development.
        </ListItem>
      </List>
    </Description>
    <Description>
      <strong>Pesticides (பசுமை மருந்துகள்):</strong>
      <List>
        <ListItem>
          Tebuconazole: An effective fungicide against various fungal diseases,
          including sugarcane red rot.
        </ListItem>
        <ListItem>
          Propiconazole: Provides systemic protection and controls fungal growth
          on the plant's tissues.
        </ListItem>
        <ListItem>
          Thiophanate-methyl: A protective fungicide that prevents fungal
          infection by forming a barrier on the plant's surface.
        </ListItem>
      </List>
    </Description>
    <Subheading>Early Detection of Sugarcane Red Rot:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Increase the application of fertilizers containing phosphorus, such as
        triple superphosphate or monoammonium phosphate, to support the
        sugarcane's recovery and strengthen its resistance to disease.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Apply a targeted fungicide like tebuconazole or propiconazole
        immediately after detecting sugarcane red rot symptoms. Early
        intervention can prevent the spread of the disease to other plants and
        minimize damage.
      </ListItem>
    </List>

    <Subheading>Severe Sugarcane Red Rot Outbreak:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Use a balanced fertilizer that includes essential nutrients like
        nitrogen, phosphorus, and potassium to support the overall health of the
        sugarcane plants, as severe infections can deplete the plant's nutrient
        reserves.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        In cases of severe sugarcane red rot outbreaks, consult with
        agricultural experts or extension services for appropriate pesticide
        recommendations. They may suggest a combination of systemic and
        protective fungicides to manage the disease effectively.
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
        developing resistance in the fungal population. Implement crop rotation
        practices to break the disease cycle and minimize the recurrence of
        sugarcane red rot.
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
        Monitor weather forecasts and disease risk alerts to apply fungicides
        proactively when conditions are favorable for sugarcane red rot
        development.
      </ListItem>
    </List>

    <Subheading>Local Regulations and Safety:</Subheading>

    <p>
      Always follow local regulations and safety guidelines regarding the use
      of fertilizers and pesticides.
    </p>
    <p>
      Use personal protective equipment (PPE) and proper application techniques
      when handling and applying fertilizers and pesticides.
    </p>
  </Container>
</English>



      <Urdu style={{ display: isUrdu ? "block" : "none" }}>
      <Container>
          <Heading>
            (சர்க்கரை கம்பி சிவப்பு சடல நோய்) கந்தை சிவப்பு சடல நோய்
          </Heading>
          <Description>
            <strong>(விளக்கம்) Description:</strong> கந்தை சிவப்பு சடல நோய், 
            "Red Stripe Disease" என்ற பெயருடன் உள்ள ஒரு அழிவுநோயான பூஞ்சு நோயாகும் 
            இது கந்தை தாவரங்களில் பாதிப்பை ஏற்படுத்துகிறது. இந்த நோயின் காரணம் 
            "Colletotrichum falcatum" என்ற பூஞ்சு ஆகும், இது கந்தை தாவரங்களின் 
            상திகள் அல்லது இயற்கை திறப்புகளின் மூலம் புகுந்து, தாவரங்களின் உள் பகுதிகளில் 
            சிவப்பு நிற அழுக்கு மற்றும் சடல நோயின் தாக்கங்களை உருவாக்குகிறது, குறிப்பாக 
            இண்டர்நோட் பகுதியில், இதன் காரணமாக "சிவப்பு சடல நோய்" என அழைக்கப்படுகிறது. 
            இந்த நோய் பாதிக்கப்பட்ட தாவரங்களிலிருந்து விரைவாக பரவக் கூடியது, இது கந்தை உற்பத்தியில் 
            கடுமையான சேதங்களை ஏற்படுத்துகிறது.
          </Description>
          <Subheading>(அலாமதுகள்) Symptoms:</Subheading>
          கந்தை சிவப்பு சடல நோயின் அலாமதுகள்:
          <List>
            <ListItem>இண்டர்நோட்களில் சிவப்பு பழுப்பு அல்லது மரூன் நிற அழுக்கு.</ListItem>
            <ListItem>
              இண்டர்நோடின் சிவப்பு நிற அழுக்கு, இதனால் அவை பலவீனமாகி எளிதில் உடைந்து விடுகின்றன.
            </ListItem>
            <ListItem>
              இலைகள் சுருக்கம் மற்றும் உலர்ந்தல், இது மேலிருந்து தாழ்வின்புறம் நோக்கி பரவுகிறது.
            </ListItem>
            <ListItem>
              இலைகளின் நுரையீரல்கள் மற்றும் இடங்களில் சிவப்பு கோடுகள் தோன்றுதல்.
            </ListItem>
          </List>
          <Subheading>(காரணம்) Causes:</Subheading>
          கந்தை சிவப்பு சடல நோயின் காரணம் "Colletotrichum falcatum" பூஞ்சு ஆகும். 
          இந்த பூஞ்சு, ஈர்ப்பு அல்லது மெக்கானிக்கல் சேதம் போன்ற காரியங்கள் அல்லது இலைகளின் 
          இயற்கை திறப்புகளின் மூலம் கந்தை தாவரத்தில் புகுந்து, நரம்புகளின் மூலம் பரவி, 
          கந்தை தாவரங்களின் பிற பாதிக்கப்பட்ட பகுதிகளில் பரவுகிறது, இதனால் இண்டர்நோட்ஸ் மற்றும் 
          பிற பாதிக்கப்பட்ட பகுதிகளில் சிவப்பு நிற அழுக்குகளும் தனித்துவமான அலாமதுகள் தோன்றுகின்றன.
          <Subheading>(புவியியல் மற்றும் சூழல் காரணிகள்) Weather and Environmental Factors:</Subheading>
          கந்தை சிவப்பு சடல நோய் உற்பத்தியில் பெரும் சேதங்களை ஏற்படுத்த முடியும்.
          இண்டர்நோட் அழுக்கு தாவரத்தின் அமைப்பு வலிமையை குறைக்கின்றது, இதனால் கந்தை விழுந்து 
          உடையும். இதன் மூலம் கந்தை உற்பத்தி மற்றும் தரத்தில் குறைபாடு ஏற்படுகிறது. கடுமையான தொற்றின் 
          போது, இது பல சேதங்களை ஏற்படுத்துகிறது, இதனால் கந்தை விவசாயிகளுக்கு பொருளாதார நஷ்டங்கள் ஏற்படும்.
          <Subheading>
            (முன்னெச்சரிக்கை மற்றும் மேலாண்மை) Prevention and Management:
          </Subheading>
          கந்தை சிவப்பு சடல நோய் பாதிக்கப்பட்ட தாவரங்களுக்கு நேரடியாக வைத்தியம் இல்லை, 
          ஆனால் நோயின் தாக்கத்தை குறைத்து மேலும் பரவுவதைத் தடுக்கும் பல முன்னெச்சரிக்கை மற்றும் 
          மேலாண்மை நடவடிக்கைகள் உதவ முடியும். இந்த நடவடிக்கைகளில் உள்ளன:
          <List>
            <ListItem>
              <strong>1. பயிர் மாற்றம் (Crop Rotation):</strong> கந்தையை அதன் 
              அடுத்த பருவத்தில் பொருத்தமான இடங்களில் வளர்க்க வேண்டாம். 
              பயிர் மாற்றம் நிலத்தில் பூஞ்சு மரபணுக்கள் எண்ணிக்கையை குறைத்து 
              நோய் பரவலை தடுக்கும்.
            </ListItem>
            <ListItem>
              <strong>2. எதிர்ப்பு வகைகள் (Use of Resistant Varieties):</strong> 
              கந்தையின் எதிர்ப்பு கொண்ட வகைகள், சிரப்புவாழ் நோயை எதிர்க்க முடியும்.
            </ListItem>
            <ListItem>
              <strong>3. சுத்திகரிப்பு (Sanitation):</strong> பாதிக்கப்பட்ட தாவரங்களை 
              அகற்றுவதன் மூலம் பூஞ்சு பரவலைத் தடுக்கும். விவசாய சாதனங்களை 
              சுத்தப்படுத்தி பராமரிப்பது முக்கியம்.
            </ListItem>
            <ListItem>
              <strong>4. சரியான நீர்ப்பாசனம் (Proper Irrigation):</strong> அதிகமான நீர் வழங்குதலைத் தவிர்க்கவும், ஏனெனில் அதிக நன்கு ஈரபதம் பூஞ்சின் தாக்கங்களுக்கு உகந்த சூழலை உருவாக்கக்கூடும்.
            </ListItem>
            <ListItem>
              <strong>5. பூச்சி நாசினி (Fungicides):</strong> பூச்சி நாசினி பயன்பாட்டின் மூலம் பரவலைத் தடுப்பது. டெபோக்கோனசோல், புரோபிகோனசோல் மற்றும் தாயோஃபெனேட்-மெதல் சர்க்கரை கனி சிவப்பு பூச்சிக்கு எதிராக பயனுள்ள பூச்சி நாசினிகள் ஆகின்றன. சரியான பூச்சி நாசினி தேர்வு மற்றும் பயன்படுத்தலுக்கு விவசாய நிபுணர்களிடம் ஆலோசனை பெறவும்.
            </ListItem>
          </List>
          <Subheading>
            (உரங்கள் மற்றும் பூச்சி நாசினி பயன்பாடு) Fertilizer and Pesticide Use:
          </Subheading>
          உரங்கள் மற்றும் பூச்சி நாசினி பயன்பாட்டின் மூலம் சர்க்கரை கனி சிவப்பு பூச்சி நோயைத் தடுப்பது சாத்தியமாகும். உரங்களின் சரியான பயன்பாட்டினால் தாவரங்களின் பொது ஆரோக்கியம் மேம்படுத்தப்படலாம், இதனால் அவை தொற்று எதிர்ப்பு திறன் பெறுகின்றன. கீழ்க்காணும் உரங்கள் மற்றும் பூச்சி நாசினிகள் பயன்பாடு செய்யலாம்:
          <Description>
            <strong>உரங்கள் (Fertilizers):</strong>
            <List>
              <ListItem>
                டிரிபிள் சூப்பர்ஃபாஸ்பேட் (Triple Superphosphate): தாவரங்களுக்கு முக்கியமான கொழுப்பு அளவு ஊட்டச்சத்தினை வழங்குகிறது.
              </ListItem>
              <ListItem>
                மோனோ அமோனியம் ஃபாஸ்பேட் (Monoammonium Phosphate): ஃபாஸ்பரஸ் மற்றும் நைட்ரஜன் அளிக்கும், இது தாவரங்களின் உயரமும் வலிமையும் மேம்படுத்துகிறது.
              </ListItem>
            </List>
          </Description>
          <Description>
            <strong>பூச்சி நாசினி (Pesticides):</strong>
            <List>
              <ListItem>
                காப்பர் அடிப்படையிலான பூச்சி நாசினிகள் (Copper-based Fungicides): தாவரங்களின் நெசிலா அமைப்பை பாதுகாக்க உதவுகிறது மற்றும் இன்டர்நோடுகளில் பூஞ்சின் தடுப்பு.
              </ListItem>
              <ListItem>
                ஸ்ட்ரெப்டோமைக்சின் (Streptomycin): தாவரங்களின் உள் பகுதிகளை பாதுகாக்க உதவுகிறது மற்றும் நோயின் பரவலைத் தடுக்கும்.
              </ListItem>
              <ListItem>
                காசுகாமைசின் (Kasugamycin): தாவரங்களின் உள் பகுதிகளில் பூஞ்சின் தடுப்பு செய்ய உதவுகிறது.
              </ListItem>
            </List>
          </Description>
          <Subheading>
            (சர்க்கரை கனி சிவப்பு பூச்சி நோயின் ஆரம்ப சோதனை) Early Detection of Sugarcane Red Rot:
          </Subheading>
          <strong>உரங்கள் (Fertilizers):</strong>
          <List>
            <ListItem>
              நைட்ரஜன் அடிப்படையிலான உரங்களை அதிகரிக்கவும், உதாரணமாக யூரியா அல்லது மோனோ அமோனியம் ஃபாஸ்பேட், அதனால் சர்க்கரை கனி ஆரோக்கியமாக இருக்க உதவுகிறது மற்றும் அது நோய்க்கு எதிர்ப்பு பெறுகிறது.
            </ListItem>
          </List>
          <strong>பூச்சி நாசினி (Pesticides):</strong>
          <List>
            <ListItem>
              சர்க்கரை கனி சிவப்பு பூச்சி நோயின் அறிகுறிகள் தோன்றியவுடன் உடனடியாக டெபோக்கோனசோல் அல்லது ஸ்ட்ரெப்டோமைக்சின் போன்ற लक्षியுள்ள பூச்சி நாசினிகளைப் பயன்படுத்தவும். முன்னுரிமையான காலத்தில் இண்டர்வேன் செய்வது நோயின் பரவலைத் தடுக்க முடியும் மற்றும் பிற தாவரங்களையும் காயப்படுத்தாமல் பாதுகாக்க முடியும்.
            </ListItem>
          </List>
          <Subheading>
            (கடுமையான சர்க்கரை கனி நோய் பரவல்) Severe Sugarcane Disease Outbreak:
          </Subheading>
          <strong>பருவநிலை மற்றும் சுற்றுச்சூழல் காரணிகள்:</strong>
          <List>
            <ListItem>
              சர்க்கரை கனிசில் எந்தவொரு நோய்க்கு ஏற்படும் பருவ நிலைகள் மற்றும் சுற்றுச்சூழல் காரணிகள் மற்றும் உரங்கள் பயன்படுத்தும் நேரம் அதிகமாக இருக்கலாம்.
            </ListItem>
          </List>
          <strong>பஸ்டினுட்கள்:</strong>
          <List>
            <ListItem>
              பருவ நிலைகளுக்கு ஏற்ப உரத்தை பொருந்தும் போது மாறுபடுத்துங்கள். கடுமையான மழை நேரத்தில், உயிரணுக்கட்டுப் பொருளைப் பயன்படுத்துவதில் குறைக்க வேண்டும், அதனால் மண் அழுகி அல்லது சுற்றுச்சூழல் பிரச்சனைகள் ஏற்படாமல் இருக்கவும்.
            </ListItem>
          </List>
          <strong>பஸ்டினுட்கள் (Pesticides):</strong>
          <List>
            <ListItem>
              பருவ முன்னறிவிப்புகள் மற்றும் நோயின் ஆபத்துக்களின் மதிப்பீடுகளை கவனத்தில் கொண்டு, சரியான நேரத்தில் கசரிக்கு எதிரான பஸ்டினுட்களை பயன்படுத்துங்கள்.
            </ListItem>
          </List>
          <Subheading>(இலங்கை வழிகாட்டிகள் மற்றும் பாதுகாப்பு முன்னெச்சரிக்கை) Local Regulations and Safety:</Subheading>
          <p>
            உரங்களும் பஸ்டினுட்களும் பயன்படுத்தும் போது எப்போதும் உள்ளூர் வழிகாட்டிகளையும் பாதுகாப்பு முன்னெச்சரிக்கைகளையும் கவனிக்கவும்.
          </p>
          <p>
            உரம் மற்றும் பஸ்டினுட்களை பயன்படுத்தும் போது தனிப்பட்ட பாதுகாப்பு உபகரணங்களை (PPE) மற்றும் சரியான பயன்படுத்தும் தொழில்நுட்பங்களை பயன்படுத்தவும்.
          </p>
        </Container>
      </Urdu>
    </>
  );
}
