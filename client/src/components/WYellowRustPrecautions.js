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

export default function WYellowRustPrecautions() {
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
    <Heading>Wheat Yellow Rust (கோதுமையின் மஞ்சள் பாசி நோய்)</Heading>
    <Description>
      <strong>Description (விவரம்):</strong> Wheat yellow rust, also known as
      stripe rust or Puccinia striiformis, is a fungal disease that affects
      wheat plants. The disease is caused by the fungus Puccinia striiformis,
      which spreads through windborne spores and infects wheat crops during
      cool and humid weather conditions.
      <Subheading>Symptoms (அறிகுறிகள் ):</Subheading>
      The symptoms of wheat yellow rust include:
    </Description>
    <List>
      <ListItem>Appearance of yellow or orange-colored stripes on the leaves.</ListItem>
      <ListItem>Reduced plant vigor and stunted growth.</ListItem>
      <ListItem>Formation of pustules containing yellow spores on the leaves.</ListItem>
      <ListItem>Premature yellowing and drying of infected leaves.</ListItem>
      <ListItem>Significant yield losses if not managed effectively.</ListItem>
    </List>
    <Subheading>Causes (காரணம்):</Subheading>
    Wheat yellow rust is caused by the fungus Puccinia striiformis. The
    disease spreads through wind-dispersed spores and thrives in cool and
    humid weather conditions, especially during the growing season of wheat.
    <Subheading>Impact on Crops:</Subheading>
    Wheat yellow rust can have severe effects on wheat crops. The disease
    reduces the photosynthetic capacity of infected leaves, leading to a
    decrease in grain production. If not adequately managed, it can cause
    significant yield losses and affect food security.
    <Subheading>Prevention and Management:</Subheading>
    While there is no direct cure for wheat yellow rust, several preventive
    and management measures can help control its spread and minimize
    damage. These measures include:
    <List>
      <ListItem>
        <strong>1. Resistant Varieties:</strong> Planting wheat varieties
        that show resistance to yellow rust can help reduce disease
        incidence.
      </ListItem>
      <ListItem>
        <strong>2. Timely Planting:</strong> Optimal planting times and
        avoiding late planting can minimize exposure to favorable
        conditions for the disease.
      </ListItem>
      <ListItem>
        <strong>3. Crop Rotation:</strong> Implementing crop rotation
        practices can break the disease cycle and reduce the buildup of
        fungal spores in the soil.
      </ListItem>
      <ListItem>
        <strong>4. Monitoring:</strong> Regularly monitor wheat fields for
        early signs of yellow rust to take timely action.
      </ListItem>
      <ListItem>
        <strong>5. Fungicides:</strong> Fungicides like Tebuconazole,
        Propiconazole, and Epoxiconazole can be used to manage the disease.
        Consult agricultural experts for proper fungicide selection and
        application guidelines.
      </ListItem>
    </List>
    <Subheading>Fertilizers:</Subheading>
    The use of fertilizers can help improve the overall health and
    resistance of wheat plants to yellow rust. Consider the following
    fertilizers:
    <Description>
      <List>
        <ListItem>Urea: Provides nitrogen, essential for wheat growth and development.</ListItem>
        <ListItem>Ammonium Nitrate: Supplies nitrogen and promotes healthy foliage.</ListItem>
      </List>
    </Description>
    <Subheading>Pesticides:</Subheading>
    Proper application of pesticides can be beneficial in managing wheat
    yellow rust. Consider using the following pesticides:
    <Description>
      <List>
        <ListItem>Tebuconazole: Effective in controlling wheat yellow rust.</ListItem>
        <ListItem>Propiconazole: Provides protection against the disease.</ListItem>
        <ListItem>Epoxiconazole: Controls and prevents yellow rust infection.</ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>Early Detection of Wheat Yellow Rust:</Subheading>
      <strong>Fertilizers:</strong>
      <List>
        <ListItem>
          Increase the application of nitrogen-based fertilizers, such as
          urea or ammonium nitrate, to support the wheat's recovery and
          strengthen its resistance to disease.
        </ListItem>
      </List>
      <strong>Pesticides:</strong>
      <List>
        <ListItem>
          Apply a targeted fungicide like Tebuconazole, Propiconazole, or
          Epoxiconazole immediately after detecting wheat yellow rust
          symptoms. Early intervention can prevent the spread of the disease
          to other plants and minimize damage.
        </ListItem>
      </List>

      <Subheading>Severe Wheat Yellow Rust Outbreak:</Subheading>
      <strong>Fertilizers:</strong>
      <List>
        <ListItem>
          Use a balanced fertilizer that includes essential nutrients like
          nitrogen, phosphorus, and potassium to support the overall health of
          the wheat plants, as severe infections can deplete the plant's
          nutrient reserves.
        </ListItem>
      </List>
      <strong>Pesticides:</strong>
      <List>
        <ListItem>
          In cases of severe wheat yellow rust outbreaks, consult with
          agricultural experts or extension services for appropriate pesticide
          recommendations. They may suggest a combination of fungicides to
          manage the disease effectively.
        </ListItem>
      </List>
    </Description>
    <Subheading>Disease Resistance and Crop Rotation:</Subheading>
    <strong>Fertilizers:</strong>
    <List>
      <ListItem>
        Incorporate organic matter and compost into the soil to improve its
        health and fertility, indirectly enhancing the plant's disease
        resistance.
      </ListItem>
    </List>
    <strong>Pesticides:</strong>
    <List>
      <ListItem>
        Rotate pesticides with different modes of action to reduce the risk of
        developing resistance in the fungal population. Implement crop
        rotation practices to break the disease cycle and minimize the
        recurrence of wheat yellow rust.
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
        Monitor weather forecasts and disease risk alerts to apply fungicides
        proactively when conditions are favorable for wheat yellow rust
        development.
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
    <Description>
      It is essential to follow the recommended application rates and
      timings to avoid any negative effects on the environment and non-target
      organisms. Consult with agricultural experts or local extension
      services for proper usage guidelines and safety precautions.
    </Description>
  </Container>
</English>;

<Urdu style={{ display: isUrdu ? "block" : "none" }}>
<Container>
    <Heading>கோதுமையின் மஞ்சள் பாசி நோய் (Wheat Yellow Rust)</Heading>
    <Description>
      <strong>விவரம்:</strong> கோதுமையின் மஞ்சள் பாசி அல்லது ஸ்டிரைப் ரஸ்ட், ஒரு போதுமான நோயாகும், இது கோதுமைப் செடிகளைக் குறுக்கின்றது. இந்த நோய், பரவலான வகை களஞ்சியமாகும், இது காற்றில் பரவக்கூடிய தோசைகளின் மூலமாக கோதுமை விளைச்சலை பாதிக்கின்றது, குறிப்பாக குளிர் மற்றும் ஈரமான காலநிலை உண்டாகும் போதெல்லாம்.
      <Subheading>அறிகுறிகள்:</Subheading>
      கோதுமையின் மஞ்சள் பாசி நோயின் அறிகுறிகளில் உள்ளவை:
    </Description>
    <List>
      <ListItem>இலைகளில் மஞ்சள் அல்லது ஆரஞ்சு நிறவிடுதிகளின் தோற்றம்.</ListItem>
      <ListItem>பாதிக்கப்பட்ட செடிகளின் வளர்ச்சி குறையும் மற்றும் வளர்ச்சி தடைபடும்.</ListItem>
      <ListItem>இலைகளில் மஞ்சள் நிற தோசைகளின் உருவாக்கம்.</ListItem>
      <ListItem>பாதிக்கப்பட்ட இலைகளின் மேல் வெள்ளையான மற்றும் சரிவழிந்த உருவாக்கம்.</ListItem>
      <ListItem>பாதிக்கப்பட்ட செடிகள் வளர்ச்சி இல்லாமல் குறையும்.</ListItem>
    </List>
    <Subheading>காரணங்கள்:</Subheading>
    கோதுமையின் மஞ்சள் பாசி நோய் Puccinia striiformis என்ற பூஞ்சை காரணமாக ஏற்படுகிறது. இந்த நோய் காற்றில் பரவக்கூடிய தோசைகளின் மூலமாக கோதுமை விளைச்சலை பாதிக்கின்றது, குறிப்பாக கோதுமை வளர்ப்பதை உடன்பட்ட குளிர் மற்றும் ஈரமான காலநிலைகளில்.
    <Subheading>பொழுதுபோக்கு பண்ணை விளைவுகளின் மீது:</Subheading>
    கோதுமையின் மஞ்சள் பாசி நோய் கோதுமை பயிர்களில் தீவிர விளைவுகளை ஏற்படுத்தக்கூடும். இந்த நோய் பாதிக்கப்பட்ட இலைகளின் ஒளி எதிர்ப்படுதலின் திறனை குறைக்கின்றது, இதனால் உற்பத்தி குறைகின்றது. இந்த நோயை சரியான முறையில் கையாளவில்லை என்றால், இது விவசாயத்திற்கு பெரிய சேதங்களை ஏற்படுத்த முடியும் மற்றும் உணவுக் காப்பாற்றல் மீது பாதிப்புகளை ஏற்படுத்தலாம்.
    <Subheading>தடுப்பு மற்றும் கட்டுப்பாடு:</Subheading>
    கோதுமையின் மஞ்சள் பாசி நோய்க்கு எந்தவொரு குறிப்பிட்ட சிகிச்சையும் இல்லை, ஆனால் அதன் பரவலைத் தடுக்கும் மற்றும் சேதங்களை குறைக்கும் பல தடுப்பு மற்றும் கட்டுப்பாட்டு நடவடிக்கைகள் உதவ முடியும். இந்த நடவடிக்கைகளில் உள்ளவை:
    <List>
      <ListItem>
        <strong>1. எதிர்ப்பு வகைகள்:</strong> கோதுமையின் மஞ்சள் பாசி நோய்க்கு பாதிக்கப்படாத கோதுமை வகைகளை பயிரிட்டால், நோயின் எண்ணிக்கை குறைக்கலாம்.
      </ListItem>
      <ListItem>
        <strong>2. நேரமான பயிரிடுதல்:</strong> சரியான பயிரிடுதலின் நேரத்தை பின்பற்றவும் மற்றும் தாமதமான பயிரிடுதலை தவிர்க்கவும், இது நோயின் பரவலுக்கு ஏற்ற சூழல்களை தடுக்கும்.
      </ListItem>
      <ListItem>
        <strong>3. பருவக் கால பயிரிடுதல்:</strong> பருவக் காலப் பயிரிடுதல் முறைகளை நடைமுறைப்படுத்தி பயிர்க்குழாய்களின் சுழற்சியை உடைக்கவும்.
      </ListItem>
      <ListItem>
        <strong>4. பரிசோதனை:</strong> கோதுமைத் தோட்டங்களை எப்போதும் பரிசோதித்து, மஞ்சள் பாசி நோயின் ஆரம்ப அறிகுறிகளை கண்டறியவும்.
      </ListItem>
      <ListItem>
        <strong>5. பூஞ்சு நாசினி:</strong> டெப்யூகோனசோல், பிரோபிகோனசோல் மற்றும் எபோசிகோனசோல் போன்ற பூஞ்சு நாசினிகள், நோயை கட்டுப்படுத்த உதவ முடியும். பயிரிடுதல் நிபுணர்களிடம் பூஞ்சு நாசினிகளைத் தேர்வு செய்யவும் மற்றும் பயன்படுத்துவதற்கான ஆலோசனைகளைப் பெறவும்.
      </ListItem>
    </List>
    <Subheading>உயிர் ஊட்டங்கள் (Fertilizers):</Subheading>
    உயிர் ஊட்டங்கள் கோதுமை செடிகளின் ஆரோக்கியம் மற்றும் பலத்தைக் கொண்டு முன்னேற்றத்தை மேம்படுத்த முடியும். கீழே கொடுக்கப்பட்டுள்ள உயிர் ஊட்டங்களின் பயன்பாட்டை கவனிக்கவும்:
    <Description>
      <List>
        <ListItem>யூரியா: கோதுமையின் வளர்ச்சிக்கும் முன்னேற்றத்துக்கும் தேவையான நைட்ரஜனை வழங்குகிறது.</ListItem>
        <ListItem>அமேனியம் நைட்ரேட்: நைட்ரஜனை வழங்குகிறது மற்றும் சரியான இலை வளர்ச்சியினை ஆதரிக்கிறது.</ListItem>
      </List>
    </Description>
    <Subheading>பராசிபிடுகள் (Pesticides):</Subheading>
    பராசிபிடுகளின் சரியான பயன்பாடு, கோதுமையின் மஞ்சள் பாசி நோயின் மேலாண்மையில் உதவி செய்யும். கீழே கொடுக்கப்பட்டுள்ள பராசிபிடுகளின் பயன்பாட்டை கவனிக்கவும்:
    <Description>
      <List>
        <ListItem>டெப்யூகோனசோல்: கோதுமையின் மஞ்சள் பாசி நோயை கட்டுப்படுத்துவதில் திறமையானது.</ListItem>
        <ListItem>ப்ரோபிகோனசோல்: நோயிலிருந்து பாதுகாப்புக்கு பாதுகாப்பான பராசிபிடு.</ListItem>
        <ListItem>எபோசிகோனசோல்: கோதுமை செடிகளின் தோற்றத்தில் பூஞ்சை தடுக்கும் மற்றும் தடுக்கும் உதவி.</ListItem>
      </List>
    </Description>
    <Description>
      <Subheading>கோதுமையின் மஞ்சள் பாசி நோயை விரைவாக அறிதல்:</Subheading>
      <strong>உயிர் ஊட்டங்கள் (Fertilizers):</strong>
      <List>
        <ListItem>
          கோதுமையின் வளர்ச்சிக்கு உதவ மற்றும் நோயின் எதிர்ப்பை பலப்படுத்த நைட்ரஜன் அடிப்படையிலான உயிர் ஊட்டங்கள் பயன்பாட்டை அதிகரிக்கவும்.
        </ListItem>
      </List>
      <strong>பராசிபிடுகள் (Pesticides):</strong>
      <List>
        <ListItem>
          கோதுமையின் மஞ்சள் பாசி நோயின் அறிகுறிகள் தென்பட்டவுடன், டெப்யூகோனசோல், பிரோபிகோனசோல் அல்லது எபோசிகோனசோல் போன்ற குறிப்பிட்ட பராசிபிடுகளைப் பயன்படுத்தவும். துவக்கத்தில் தற்காலிக தலையிடலின் மூலம் நோயின் பரவலைத் தடுப்பது மற்றும் பிற செடிகளை பாதிப்பதைக் குறைக்க முடியும்.
        </ListItem>
      </List>

      <Subheading>கோபுரமான கோதுமை மஞ்சள் பாசி நோயின் பரிமாணங்கள்:</Subheading>
      <strong>உயிர் ஊட்டங்கள் (Fertilizers):</strong>
      <List>
        <ListItem>
          தீவிர கோதுமை மஞ்சள் பாசி நோயின் பரிமாணங்களைப் பார்க்கும்போது, குளோரி, பாஸ்பரஸ் மற்றும் பொட்டாசியம் போன்ற தேவையான கூறுகள், கோதுமை செடிகளின் சரியான ஆரோக்கியத்தையும் வளர்ச்சியையும் உதவுகின்றன.
        </ListItem>
      </List>
      <strong>பராசிபிடுகள் (Pesticides):</strong>
      <List>
        <ListItem>
          கடுமையான கோதுமை மஞ்சள் பாசி நோயின் பரிமாணங்களை முன்னிட்டு, பயிரிடும் நிபுணர்கள் அல்லது பரிமாற்ற சேவைகளிடமிருந்து சரியான பராசிபிடுகளைத் தேர்ந்தெடுக்கவும். அவர்கள் நோயை எதிர்க்க உதவும் மருந்துகள் மற்றும் பாதுகாப்பு பராமரிப்பு பரிசோதனைகள் பற்றிய ஆலோசனைகளை வழங்க முடியும்.
        </ListItem>
      </List>
    </Description>
    <Subheading>நோய் எதிர்ப்பு மற்றும் பயிர் சுழற்சி:</Subheading>
    <strong>உயிர் ஊட்டங்கள் (Fertilizers):</strong>
    <List>
      <ListItem>
        மண்ணின் ஆரோக்கியத்தையும் வளத்தை மேம்படுத்த கம்போஸ்ட் மற்றும் மண்ணில் சிறந்த வளத்தை சேர்க்கவும், இது செடிகளின் நோய் எதிர்ப்பு திறனையும் மேம்படுத்தும்.
      </ListItem>
    </List>
    <strong>பராசிபிடுகள் (Pesticides):</strong>
    <List>
      <ListItem>
        பராசிபிடுகள் மூலம் பராமரிக்கும்போது, பராசிபிடுகளை மாற்றியமைத்து பூஞ்சை வேறுபாட்டை எதிர்க்க பயிரிடும் நிபுணர்களின் ஆலோசனைகளைப் பெறவும்.
      </ListItem>
    </List>

    <Subheading>காலநிலை மற்றும் சுற்றுச் சூழல் காரணிகள்:</Subheading>
    <strong>உயிர் ஊட்டங்கள் (Fertilizers):</strong>
    <List>
      <ListItem>
        காலநிலை உறுதிப்படுத்தும் போது, சரியான நேரம் மற்றும் அளவிலான ஊட்டத்தின் பயன்பாட்டை மாற்றவும். மழைக்காலத்தின் போது நைட்ரஜன் ஊட்டங்கள் பயன்பாட்டை குறைக்கவும்.
      </ListItem>
    </List>
    <strong>பராசிபிடுகள் (Pesticides):</strong>
    <List>
      <ListItem>
        காலநிலை படி, நோய் பரவல் நிலைகளை முன்னிட்டு பராசிபிடுகளைத் தவிர்க்கவும்.
      </ListItem>
    </List>
    <Subheading>பாரம்பரிய நடைமுறைகள் மற்றும் பாதுகாப்பு நடவடிக்கைகள்:</Subheading>
    <p>
      பூஞ்சு நாசினிகள் மற்றும் பராசிபிடுகளின் பயன்பாடு தொடர்புடைய பாரம்பரிய நடைமுறைகளை கவனியுங்கள்.
    </p>
    <p>
      பூஞ்சு நாசினி மற்றும் பராசிபிடுகளின் பயன்பாட்டின் போது, சரியான தனிப்பட்ட பாதுகாப்பு உபகரணங்களையும் (PPE) மற்றும் சரியான பயன்பாட்டு முறைகளையும் பயன்படுத்தவும்.
    </p>
  </Container>
</Urdu>;


    </>
  );
}
