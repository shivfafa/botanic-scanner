export const analyze = (text) => {
  text = text.toLowerCase();

  if (text.includes("greetings") || text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I assist you today?";
}

if (text.includes("salam") || text.includes("Assalam-o-Alaikum") || text.includes("aoa")) {
  return "Walaikum Assalam! How can I assist you today?";
}

if (text.includes("thank you") || text.includes("thanks")) {
    return "You're welcome! If you have any more questions, feel free to ask.";
}

if (text.includes("how are you") || text.includes("love You") || text.includes("i love you") || text.includes("love you") || text.includes("love")) {
    return "As an AI language model, I don't have feelings, but I'm here and ready to help you!";
}

  /**Corn */
  if (text.includes("describe") ||text.includes("description") ||text.includes("detailed")) {
    if (text.includes("corn") || text.includes("maize")) {
      return (
        <div>
          Corn, also known as maize, is a versatile grain crop cultivated
          worldwide. It is used as a staple food, animal feed, and raw material
          for various industrial applications. Corn plants produce cobs with
          rows of kernels, and its cultivation ranges from temperate to tropical
          regions. Corn, scientifically known as Zea mays, is a highly versatile
          grain crop that is grown and cultivated all over the world. It is
          commonly referred to as maize in many parts of the world, particularly
          in Europe and Africa. Corn has been cultivated by humans for thousands
          of years and has become one of the most important staple crops
          globally.orn is also used in the manufacturing of various industrial
          products, including biodegradable plastics, adhesives, fabrics, and
          chemicals. The by-products of corn processing, such as corn stalks and
          cobs, can be used as biomass for energy generation or as a feedstock
          for the production of paper, cardboard, and bio-based materials.
        </div>
      );
    }
  }

  if (text.includes("corn") || text.includes("maize")) {
    if (text.includes("disease") || text.includes("diseases")) {
      if (text.includes("prevention") || text.includes("treatment")) {
        return (
          <div>
            Although there is no direct cure for corn blight disease once the
            plant is infected, several preventive and management measures can
            help reduce its impact and prevent further spread. These measures
            include:
            <li>
              <b>Crop Rotation:</b> Avoid planting corn in the same field year
              after year. Practice crop rotation with other non-host crops to
              break disease cycles and reduce the buildup of pathogens in the
              soil.
            </li>
            <li>
              <b>Resistant Varieties:</b> Choose corn varieties that are
              resistant to common diseases in your region. Resistant varieties
              have genetic traits that can provide protection against specific
              diseases.
            </li>
            <li>
              <b>Clean Seeds:</b> Use certified disease-free seeds. Ensure that
              seeds are not contaminated with pathogens to prevent introducing
              diseases into your crop.
            </li>
            <li>
              <b>Field Hygiene:</b> Remove and destroy crop residues from
              previous harvests to reduce the source of pathogens. Avoid
              planting near infected crops.
            </li>
            <li>
              <b>Proper Irrigation:</b> Avoid overhead irrigation, as it can
              promote the spread of foliar diseases. Use drip or furrow
              irrigation to keep the foliage dry.
            </li>
          </div>
        );
      }
      return (
        <div>
          Corn have 3 diseases
          <br />
          <b>
            <li>Corn Blight</li>
            <li>Corn Common Rust</li>
            <li>Corn Gray Leaf Spot</li>
          </b>
        </div>
      );
    }
    if (
      text.includes("prevention") ||
      text.includes("treatment") ||
      text.includes("management")
    ) {
      return (
        <div>
          Although there is no direct cure for corn blight disease once the
          plant is infected, several preventive and management measures can help
          reduce its impact and prevent further spread. These measures include:
          <li>
            <b>Crop Rotation:</b> Avoid planting corn in the same field year
            after year. Practice crop rotation with other non-host crops to
            break disease cycles and reduce the buildup of pathogens in the
            soil.
          </li>
          <li>
            <b>Resistant Varieties:</b> Choose corn varieties that are resistant
            to common diseases in your region. Resistant varieties have genetic
            traits that can provide protection against specific diseases.
          </li>
          <li>
            <b>Clean Seeds:</b> Use certified disease-free seeds. Ensure that
            seeds are not contaminated with pathogens to prevent introducing
            diseases into your crop.
          </li>
          <li>
            <b>Field Hygiene:</b> Remove and destroy crop residues from previous
            harvests to reduce the source of pathogens. Avoid planting near
            infected crops.
          </li>
          <li>
            <b>Proper Irrigation:</b> Avoid overhead irrigation, as it can
            promote the spread of foliar diseases. Use drip or furrow irrigation
            to keep the foliage dry.
          </li>
        </div>
      );
    }

    if (text.includes("blight")) {
      if (
        text.includes("treatment") ||
        text.includes("fertilizer") ||
        text.includes("fertilizers")
      ) {
        return (
          <div>
            For corn blight, fertilizers like
            <b>
              <li>Urea</li>
            </b>
            <b>
              <li>Ammonium nitrate</li>
            </b>
            <b>
              <li>Calcium Nitrate</li>{" "}
            </b>
            can promote healthy plant growth.
          </div>
        );
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return (
          <div>
            "To control blight in corn, you can use pesticides such as
            <b>
              <li>chlorothalonil</li>
            </b>
            <b>
              <li>mancozeb</li>
            </b>
            <b>
              <li>copper-based fungicides</li>
            </b>
          </div>
        );
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Corn is typically cultivated by preparing the soil, planting seeds in rows, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for corn is usually in spring when the soil has warmed up and frost is no longer a concern.";
      }
      if (text.includes("harvesting")) {
        return "Corn is ready for harvesting when the husks have turned brown and the kernels are plump and milky. It is best to harvest in the morning when the moisture content is higher.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing corn include ensuring proper spacing between plants, providing adequate sunlight, and controlling weeds.";
      }
      if (text.includes("symptoms")) {
        return "The symptoms of corn blight vary depending on the specific pathogen involved, environmental conditions, and the stage of infection. However, common signs include the appearance of lesions on the leaves, stalks, tassels, and ears of the corn plant. These lesions may be circular or elongated and can vary in color from tan, brown, gray, or black. In some cases, the lesions may have a distinctive pattern or shape, helping in the identification of the specific pathogen causing the blight.";
      }
      return "Corn blight, also known as corn leaf blight or corn leaf spot, is a destructive plant disease that affects corn (Zea mays), one of the most important staple crops worldwide. It is caused by various pathogens, including fungi, bacteria, and viruses. Corn blight can cause significant damage to corn crops, leading to reduced yield, poor quality grain, and economic losses for farmers. Corn blight can be caused by different types of pathogens. Fungal pathogens, such as species from the genera Bipolaris, Helminthosporium, and Exserohilum, are common culprits. Bacterial pathogens, such as Xanthomonas and Pseudomonas species, can also cause blight. Additionally, viral infections, like those caused by maize dwarf mosaic virus or maize streak virus, can lead to severe damage.";
    }

    if (text.includes("rust")) {
      if (
        text.includes("treatment") ||
        text.includes("fertilizer") ||
        text.includes("fertilizers")
      ) {
        return (
          <div>
            For corn rust, fertilizers like
            <b>
              <li>diammonium phosphate</li>
            </b>
            <b>
              <li>ammonium phosphate</li>
            </b>
            can provide essential nutrients.
          </div>
        );
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return (
          <div>
            "To control rust in corn, you can use pesticides such as
            <b>
              <li>azoxystrobin</li>
            </b>
            <b>
              <li>propiconazole</li>
            </b>
            <b>
              <li>pyraclostrobin</li>{" "}
            </b>
          </div>
        );
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Corn is typically cultivated by preparing the soil, planting seeds in rows, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for corn is usually in spring when the soil has warmed up and frost is no longer a concern.";
      }
      if (text.includes("harvesting") || text.includes("harvesting season")) {
        return "Corn is ready for harvesting when the husks have turned brown and the kernels are plump and milky. It is best to harvest in the morning when the moisture content is higher.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing corn include ensuring proper spacing between plants, providing adequate sunlight, and controlling weeds.";
      }
      if (text.includes("symptoms")) {
        return "The symptoms of corn common rust are characterized by the appearance of small, oval to elongated, raised pustules or lesions on the leaves, husks, and sometimes the stalks of infected corn plants. These pustules typically start as small, yellow-orange spots and progress to develop a dusty, reddish-brown to dark-brown coloration. The lesions can be scattered randomly or form linear patterns along the leaf veins. As the disease progresses, the pustules may coalesce, leading to the browning and drying of affected plant tissues.";
      }

      return "Corn common rust is a plant disease caused by the fungal pathogen Puccinia sorghi. It is one of the most prevalent and economically important diseases affecting corn (Zea mays) crops worldwide. Common rust can cause significant yield losses and reduce the quality of corn grain if left unmanaged.The development and severity of corn common rust are influenced by environmental conditions. The disease thrives in moderate temperatures (68-77°F or 20-25°C) and high humidity, making it more prevalent during periods of warm, humid weather. Overhead irrigation, dew, or rain showers that result in prolonged leaf wetness can create favorable conditions for the rust fungus to infect and spread. ";
    }

    if (text.includes("gray leaf spot")) {
      if (
        text.includes("treatment") ||
        text.includes("fertilizer") ||
        text.includes("fertilizers")
      ) {
        return (
          <div>
            For gray leaf spot in corn, fertilizers like
            <b>
              <li>potassium sulfate</li>
            </b>
            <b>
              <li> potassium nitrate</li>
            </b>
            can support plant growth
          </div>
        );
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return (
          <div>
            "To manage gray leaf spot in corn, you can use pesticides such as
            <b>
              <li>azoxystrobin</li>
              <li>propiconazole</li>
              <li>trifloxystrobin</li>
            </b>
          </div>
        );
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Corn is typically cultivated by preparing the soil, planting seeds in rows, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for corn is usually in spring when the soil has warmed up and frost is no longer a concern.";
      }
      if (text.includes("harvesting")) {
        return "Corn is ready for harvesting when the husks have turned brown and the kernels are plump and milky. It is best to harvest in the morning when the moisture content is higher.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing corn include ensuring proper spacing between plants, providing adequate sunlight, and controlling weeds.";
      }
      if (text.includes("symptoms")) {
        return "The symptoms of corn gray leaf spot typically appear on the lower leaves of the corn plant and progress upward as the disease advances. Initially, small, rectangular to oval-shaped lesions with characteristic grayish-green centers and dark brown borders develop on the leaves. These lesions may enlarge over time, becoming elongated and parallel to the leaf veins. In severe cases, the lesions can coalesce, covering large portions of the leaf surface. The affected leaves may exhibit a frosted or grayish appearance due to the accumulation of fungal spores on the lesions.";
      }

      return "Corn gray leaf spot, caused by the fungal pathogen Cercospora zeae-maydis, is a common and destructive disease that affects corn (Zea mays) crops worldwide. It is particularly prevalent in regions with warm and humid climates. Gray leaf spot can cause significant yield losses if not properly managed.The gray leaf spot fungus overwinters in crop debris and can survive in the soil for extended periods. Spores produced on infected leaves are spread by wind, rain splashes, or mechanical means, facilitating the disease's spread within and between fields. Continuous corn production and the use of susceptible corn hybrids can contribute to the buildup of inoculum and increase disease pressure.";
    }

    // Corn cultivation process
    if (text.includes("cultivation process") || text.includes("cultivation") || text.includes("cultivate")) {
      return "Corn is typically cultivated by preparing the soil, planting seeds in rows, and providing adequate water and nutrients throughout the growth cycle.";
    }

    // Corn sowing season
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for corn is usually in spring when the soil has warmed up and frost is no longer a concern.";
    }

    // Corn harvesting
    if (
      text.includes("harvesting") ||
      text.includes("harvesting Season") ||
      text.includes("harvest")
    ) {
      return "Corn is ready for harvesting when the husks have turned brown and the kernels are plump and milky. It is best to harvest in the morning when the moisture content is higher.";
    }

    // Corn general tips
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing corn include ensuring proper spacing between plants, providing adequate sunlight, and controlling weeds.";
    }

    // Handle other corn-related queries
    return "Corn is a cereal plant cultivated for its edible grain, commonly used in various food and industrial products.";
  }

  if (text.includes("blight")) {
    if (
      text.includes("treatment") ||
      text.includes("fertilizer") ||
      text.includes("fertilizers")
    ) {
      return (
        <div>
          For corn blight, fertilizers like
          <b>
            <li>Urea</li>
          </b>
          <b>
            <li>Ammonium nitrate</li>
          </b>
          <b>
            <li>Calcium Nitrate</li>{" "}
          </b>
          can promote healthy plant growth.
        </div>
      );
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return (
        <div>
          "To control blight in corn, you can use pesticides such as
          <b>
            <li>chlorothalonil</li>
          </b>
          <b>
            <li>mancozeb</li>
          </b>
          <b>
            <li>copper-based fungicides</li>
          </b>
        </div>
      );
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Corn is typically cultivated by preparing the soil, planting seeds in rows, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for corn is usually in spring when the soil has warmed up and frost is no longer a concern.";
    }
    if (text.includes("harvesting")) {
      return "Corn is ready for harvesting when the husks have turned brown and the kernels are plump and milky. It is best to harvest in the morning when the moisture content is higher.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing corn include ensuring proper spacing between plants, providing adequate sunlight, and controlling weeds.";
    }
    if (text.includes("symptoms")) {
      return "The symptoms of corn blight vary depending on the specific pathogen involved, environmental conditions, and the stage of infection. However, common signs include the appearance of lesions on the leaves, stalks, tassels, and ears of the corn plant. These lesions may be circular or elongated and can vary in color from tan, brown, gray, or black. In some cases, the lesions may have a distinctive pattern or shape, helping in the identification of the specific pathogen causing the blight.";
    }
    return "Corn blight, also known as corn leaf blight or corn leaf spot, is a destructive plant disease that affects corn (Zea mays), one of the most important staple crops worldwide. It is caused by various pathogens, including fungi, bacteria, and viruses. Corn blight can cause significant damage to corn crops, leading to reduced yield, poor quality grain, and economic losses for farmers. Corn blight can be caused by different types of pathogens. Fungal pathogens, such as species from the genera Bipolaris, Helminthosporium, and Exserohilum, are common culprits. Bacterial pathogens, such as Xanthomonas and Pseudomonas species, can also cause blight. Additionally, viral infections, like those caused by maize dwarf mosaic virus or maize streak virus, can lead to severe damage.";
  }

  if (text.includes("rust")) {
    if (
      text.includes("treatment") ||
      text.includes("fertilizer") ||
      text.includes("fertilizers")
    ) {
      return (
        <div>
          For corn rust, fertilizers like
          <b>
            <li>diammonium phosphate</li>
          </b>
          <b>
            <li>ammonium phosphate</li>
          </b>
          can provide essential nutrients.
        </div>
      );
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return (
        <div>
          "To control rust in corn, you can use pesticides such as
          <b>
            <li>azoxystrobin</li>
          </b>
          <b>
            <li>propiconazole</li>
          </b>
          <b>
            <li>pyraclostrobin</li>{" "}
          </b>
        </div>
      );
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Corn is typically cultivated by preparing the soil, planting seeds in rows, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for corn is usually in spring when the soil has warmed up and frost is no longer a concern.";
    }
    if (text.includes("harvesting") || text.includes("harvesting season")) {
      return "Corn is ready for harvesting when the husks have turned brown and the kernels are plump and milky. It is best to harvest in the morning when the moisture content is higher.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing corn include ensuring proper spacing between plants, providing adequate sunlight, and controlling weeds.";
    }
    if (text.includes("symptoms")) {
      return "The symptoms of corn common rust are characterized by the appearance of small, oval to elongated, raised pustules or lesions on the leaves, husks, and sometimes the stalks of infected corn plants. These pustules typically start as small, yellow-orange spots and progress to develop a dusty, reddish-brown to dark-brown coloration. The lesions can be scattered randomly or form linear patterns along the leaf veins. As the disease progresses, the pustules may coalesce, leading to the browning and drying of affected plant tissues.";
    }

    return "Corn common rust is a plant disease caused by the fungal pathogen Puccinia sorghi. It is one of the most prevalent and economically important diseases affecting corn (Zea mays) crops worldwide. Common rust can cause significant yield losses and reduce the quality of corn grain if left unmanaged.The development and severity of corn common rust are influenced by environmental conditions. The disease thrives in moderate temperatures (68-77°F or 20-25°C) and high humidity, making it more prevalent during periods of warm, humid weather. Overhead irrigation, dew, or rain showers that result in prolonged leaf wetness can create favorable conditions for the rust fungus to infect and spread. ";
  }

  if (text.includes("gray leaf spot")) {
    if (
      text.includes("treatment") ||
      text.includes("fertilizer") ||
      text.includes("fertilizers")
    ) {
      return (
        <div>
          For gray leaf spot in corn, fertilizers like
          <b>
            <li>potassium sulfate</li>
          </b>
          <b>
            <li> potassium nitrate</li>
          </b>
          can support plant growth
        </div>
      );
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return (
        <div>
          "To manage gray leaf spot in corn, you can use pesticides such as
          <b>
            <li>azoxystrobin</li>
            <li>propiconazole</li>
            <li>trifloxystrobin</li>
          </b>
        </div>
      );
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Corn is typically cultivated by preparing the soil, planting seeds in rows, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for corn is usually in spring when the soil has warmed up and frost is no longer a concern.";
    }
    if (text.includes("harvesting")) {
      return "Corn is ready for harvesting when the husks have turned brown and the kernels are plump and milky. It is best to harvest in the morning when the moisture content is higher.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing corn include ensuring proper spacing between plants, providing adequate sunlight, and controlling weeds.";
    }
    if (text.includes("symptoms")) {
      return "The symptoms of corn gray leaf spot typically appear on the lower leaves of the corn plant and progress upward as the disease advances. Initially, small, rectangular to oval-shaped lesions with characteristic grayish-green centers and dark brown borders develop on the leaves. These lesions may enlarge over time, becoming elongated and parallel to the leaf veins. In severe cases, the lesions can coalesce, covering large portions of the leaf surface. The affected leaves may exhibit a frosted or grayish appearance due to the accumulation of fungal spores on the lesions.";
    }

    return "Corn gray leaf spot, caused by the fungal pathogen Cercospora zeae-maydis, is a common and destructive disease that affects corn (Zea mays) crops worldwide. It is particularly prevalent in regions with warm and humid climates. Gray leaf spot can cause significant yield losses if not properly managed.The gray leaf spot fungus overwinters in crop debris and can survive in the soil for extended periods. Spores produced on infected leaves are spread by wind, rain splashes, or mechanical means, facilitating the disease's spread within and between fields. Continuous corn production and the use of susceptible corn hybrids can contribute to the buildup of inoculum and increase disease pressure.";
  }

  /** ########################################################### */

  /**Cotton  */
  if (text.includes("describe") || text.includes("description") ||   text.includes("detailed")) {
    if (text.includes("cotton")) {
      return (
        <div>
          Cotton is a soft, fluffy fiber that grows in a protective case, known
          as a boll, around the seeds of the cotton plant (scientifically known
          as Gossypium). It is one of the most important and widely cultivated
          fiber crops in the world, used primarily in the textile industry to
          make clothing, fabrics, and various other products.
          <br />
          <br />
          The cotton plant is a shrub-like perennial with broad, green leaves
          and beautiful flowers. After pollination, the flowers develop into
          cotton bolls, each containing multiple seeds surrounded by the cotton
          fibers. These fibers are composed mainly of cellulose, a natural
          polymer that gives cotton its softness and strength.
          <br />
          <br />
          Cotton has been cultivated for thousands of years and has played a
          significant role in shaping human history and economies. It is grown
          in various countries with suitable climates, including the United
          States, India, China, and many others. The cotton industry has evolved
          with technological advancements, leading to increased efficiency in
          harvesting and processing cotton fibers.
          <br />
          <br />
          Besides its use in textiles, cottonseed is also valuable as a source
          of oil, which is used in cooking and various industrial applications.
          Additionally, cottonseed meal is used as animal feed, making cotton
          cultivation a multi-faceted agricultural endeavor.
        </div>
      );
    }
  }

  if (text.includes("cotton") || text.includes("cotton plant")) {
    if (text.includes("disease") || text.includes("diseases")) {
      if (
        text.includes("prevention") ||
        text.includes("treatment") ||
        text.includes("management")
      ) {
        return (
          <div>
            Although there is no direct cure for cotton plant diseases once the
            plant is infected, several preventive and management measures can
            help reduce their impact and prevent further spread. These measures
            include:
            <li>
              <b>Crop Rotation:</b> Avoid planting cotton in the same field year
              after year. Practice crop rotation with other non-host crops to
              break disease cycles and reduce the buildup of pathogens in the
              soil.
            </li>
            <li>
              <b>Resistant Varieties:</b> Choose cotton varieties that are
              resistant to common diseases in your region. Resistant varieties
              have genetic traits that can provide protection against specific
              diseases.
            </li>
            <li>
              <b>Clean Seeds:</b> Use certified disease-free seeds. Ensure that
              seeds are not contaminated with pathogens to prevent introducing
              diseases into your crop.
            </li>
            <li>
              <b>Field Hygiene:</b> Remove and destroy crop residues from
              previous harvests to reduce the source of pathogens. Avoid
              planting near infected crops.
            </li>
            <li>
              <b>Proper Irrigation:</b> Avoid overhead irrigation, as it can
              promote the spread of foliar diseases. Use drip or furrow
              irrigation to keep the foliage dry.
            </li>
          </div>
        );
      }
      return (
        <div>
          Cotton plants can be affected by various diseases, including:
          <br />
          <b>
            <li>Cotton Aphids</li>
            <li>Cotton Army Worm</li>
            <li>Cotton Bacterial Blight</li>
            <li>Cotton Powdery Mildew</li>
            <li>Cotton Target Spot</li>
          </b>
        </div>
      );
    }

    if (text.includes("aphids")) {
      if (text.includes("fertilizers")) {
        return "For cotton aphids, fertilizers like ammonium sulfate and potassium nitrate can help with plant nutrition.";
      }
      if (text.includes("pesticides")) {
        return "To control aphids in cotton, you can use pesticides such as imidacloprid, acetamiprid, dinotefuran, and thiamethoxam.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
      }
      if (text.includes("harvesting")) {
        return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
      }
      if (text.includes("symptoms")) {
        return "The presence of cotton aphids (Aphis gossypii) on cotton plants can be identified through various symptoms. Here are some common signs of a cotton aphid infestation:Sticky residue: Cotton aphids excrete a sugary substance called honeydew while feeding. This sticky residue can accumulate on the leaves, stems, and other plant parts. The honeydew can attract ants and serve as a medium for the growth of sooty mold, resulting in black fungal growth on the plant surface.Distorted and curling leaves: As cotton aphids feed on the sap of the plant, they can cause leaves to become distorted, curled, or puckered. These physical changes in the leaves are often a response to the feeding activity and the damage caused by the aphids.Yellowing leaves: Infested cotton plants may exhibit yellowing or chlorosis of the leaves. This yellowing can occur as a result of the aphids' feeding activity, which disrupts the flow of nutrients within the plant.Stunted growth: Severe infestations of cotton aphids can lead to stunted growth in cotton plants. The feeding activity of the aphids can impair the plant's ability to photosynthesize and absorb nutrients, resulting in reduced growth and vigor.Wilting or plant decline: In extreme cases, where cotton aphid populations are high and prolonged feeding occurs, affected plants may show signs of wilting or overall decline. This can be a result of the cumulative impact of the aphids' feeding, nutrient depletion, and the stress placed on the plant.";
      }

      return "Cotton aphids, also known as Aphis gossypii, are small sap-sucking insects that infest cotton plants (Gossypium spp.). They are a common and economically significant pest in cotton-growing regions worldwide. Cotton aphids feed on the sap of the plant, causing damage and reducing cotton yields.Cotton aphids are typically pale yellow, green, or light brown in color, but their appearance can vary depending on environmental conditions and the specific population. They have pear-shaped bodies and long antennae. These aphids reproduce rapidly, with females giving birth to live nymphs, bypassing the egg-laying stage. This allows their populations to increase quickly under favorable conditions.";
    }

    if (text.includes("army worm")) {
      if (text.includes("fertilizers")) {
        return "For army worms in cotton, fertilizers like triple superphosphate and monoammonium phosphate can provide necessary nutrients.";
      }
      if (text.includes("pesticides")) {
        return "To control army worms in cotton, you can use pesticides such as Bacillus thuringiensis (Bt) and emamectin benzoate.";
      }
      if (text.includes("cultivation process") || text.includes("cultivate")) {
        return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season")) {
        return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
      }
      if (text.includes("harvesting")) {
        return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
      }
      if (text.includes("general tips")) {
        return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
      }
      if (text.includes("symtoms")) {
        return "The following are common symptoms and signs of a cotton armyworm infestation:Defoliation: Cotton armyworm larvae feed on the leaves of cotton plants, causing defoliation. They consume leaf tissue, leaving behind ragged edges or completely skeletonized leaves. Severe infestations can result in significant leaf loss, affecting the plant's ability to photosynthesize and potentially leading to reduced yields.Holes in leaves and bolls: The feeding activity of cotton armyworm caterpillars can create holes in cotton leaves, buds, and even developing bolls. This damage can provide entry points for secondary infections by pathogens.Larval presence: The presence of cotton armyworm larvae on the cotton plants is an obvious sign of an infestation. The caterpillars are often active at night and hide during the day in plant debris, soil cracks, or curled leaves. Their presence can be confirmed by carefully inspecting the foliage and plant parts. Frass or droppings: Another indication of a cotton armyworm infestation is the presence of dark green or black droppings, known as frass. These droppings may accumulate on leaves or around feeding sites, providing visual evidence of caterpillar activity.";
      }
      return "The cotton armyworm, also known as the beet armyworm or Spodoptera exigua, is a common pest that infests cotton plants (Gossypium spp.) and other crops. It is a voracious feeder and can cause significant damage if left uncontrolled. The larvae, or caterpillars, of the cotton armyworm are primarily responsible for crop damage.The cotton armyworm undergoes complete metamorphosis, progressing through egg, larval, pupal, and adult stages. It is the larval stage that causes the most harm to cotton plants. The larvae have a smooth body with distinct longitudinal stripes and a range of color variations, including shades of green, brown, and black.";
    }

    if (text.includes("bacterial blight")) {
      if (text.includes("fertilizers")) {
        return "For bacterial blight in cotton, fertilizers like muriate of potash and potassium nitrate can support plant growth.";
      }
      if (text.includes("pesticides")) {
        return "To manage bacterial blight in cotton, you can use copper-based fungicides, streptomycin, and kasugamycin.";
      }
      if (text.includes("cultivation process") || text.includes("cultivate")) {
        return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season")) {
        return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
      }
      if (text.includes("harvesting")) {
        return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
      }
      if (text.includes("general tips")) {
        return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
      }
      if (text.includes("symtoms")) {
        return "Symptoms of corn bacterial blight typically appear as long, narrow, water-soaked lesions that run parallel to the leaf veins. The lesions are initially yellow and later turn brown or grayish. They may also have a wavy appearance and can eventually coalesce, causing extensive damage to the leaves. In severe cases, the disease can spread to the husks, stalks, and tassels of the corn plant.";
      }
      return "Corn bacterial blight, also known as bacterial leaf streak of corn, is a plant disease caused by the bacterium Xanthomonas vasicola pv. vasculorum (Xvv). It primarily affects corn plants and can result in significant yield losses if not properly managed.Corn bacterial blight is spread through infected seeds, debris, and wind-driven rain. The bacteria can survive on crop residues and in infected plant debris, allowing it to persist from one growing season to the next. Warm and humid conditions favor the development and spread of the disease.";
    }

    if (text.includes("powdery mildew")) {
      if (text.includes("fertilizers")) {
        return "For powdery mildew in cotton, fertilizers like zinc sulfate, iron sulfate, and boric acid can help with nutrient balance.";
      }
      if (text.includes("pesticides")) {
        return "To control powdery mildew in cotton, you can use pesticides such as sulfur, trifloxystrobin, and thiophanate-methyl.";
      }
      if (text.includes("cultivation process") || text.includes("cultivate")) {
        return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season")) {
        return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
      }
      if (text.includes("harvesting")) {
        return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
      }
      if (text.includes("general tips")) {
        return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of cotton powdery mildew typically appear as a powdery white or grayish coating on the leaves, stems, and sometimes even on the bolls of cotton plants. The affected plant tissues may become distorted or stunted, and severe infections can lead to premature defoliation. In addition to the visible signs, infected plants may also exhibit reduced vigor and decreased yield.";
      }
      return "Cotton powdery mildew is a fungal disease that affects cotton plants. It is caused by the fungus known as Golovinomyces gossypii (formerly known as Erysiphe gossypii). Powdery mildew is a common and widespread disease that can cause significant damage to cotton crops if left untreated.Cotton powdery mildew thrives under warm and humid conditions, with temperatures between 20°C and 30°C (68°F to 86°F) being optimal for its growth and development. The fungus spreads through wind-dispersed spores, which can travel long distances and infect nearby plants.";
    }

    if (text.includes("target spot")) {
      if (text.includes("fertilizers")) {
        return "For target spot in cotton, fertilizers like calcium nitrate and calcium ammonium nitrate can provide necessary nutrients.";
      }
      if (text.includes("pesticides")) {
        return "To manage target spot in cotton, you can use pesticides such as triadimefon, pyraclostrobin, and azoxystrobin.";
      }
      if (text.includes("cultivation process")) {
        return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season")) {
        return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
      }
      if (text.includes("harvesting")) {
        return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
      }
      if (text.includes("general tips")) {
        return "Some general tips for growing cotton include managing pests, providingsufficient irrigation, and practicing proper weed control.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of cotton target spot typically appear as circular to irregularly shaped lesions on the leaves. The lesions are tan to brown in color with a distinct concentric ring pattern, resembling a target. As the disease progresses, the lesions can enlarge and coalesce, leading to defoliation and reduced photosynthetic capacity of the plant. In severe cases, target spot can also affect the bolls, causing blemishes and reducing fiber quality.";
      }
      return "Cotton target spot, also known as Corynespora leaf spot, is a fungal disease that affects cotton plants. It is caused by the fungus Corynespora cassiicola. Target spot can lead to significant yield losses if not properly managed. Target spot thrives under warm and humid conditions, with temperatures between 20°C and 30°C (68°F to 86°F) and high relative humidity favoring disease development. The fungus spreads through wind-dispersed spores and can survive in crop debris and on alternate host plants.";
    }

    return "Cotton, a versatile natural fiber, is widely cultivated and utilized for numerous purposes. It is primarily grown for its soft and breathable properties, making it a popular choice for clothing and textiles. Cotton plants produce fluffy bolls filled with fibers that can be spun into yarn or thread. ";
  }

  if (text.includes("aphids")) {
    if (text.includes("fertilizers")) {
      return "For cotton aphids, fertilizers like ammonium sulfate and potassium nitrate can help with plant nutrition.";
    }
    if (text.includes("pesticides")) {
      return "To control aphids in cotton, you can use pesticides such as imidacloprid, acetamiprid, dinotefuran, and thiamethoxam.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
    }
    if (text.includes("harvesting")) {
      return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
    }
    if (text.includes("symptoms")) {
      return "The presence of cotton aphids (Aphis gossypii) on cotton plants can be identified through various symptoms. Here are some common signs of a cotton aphid infestation:Sticky residue: Cotton aphids excrete a sugary substance called honeydew while feeding. This sticky residue can accumulate on the leaves, stems, and other plant parts. The honeydew can attract ants and serve as a medium for the growth of sooty mold, resulting in black fungal growth on the plant surface.Distorted and curling leaves: As cotton aphids feed on the sap of the plant, they can cause leaves to become distorted, curled, or puckered. These physical changes in the leaves are often a response to the feeding activity and the damage caused by the aphids.Yellowing leaves: Infested cotton plants may exhibit yellowing or chlorosis of the leaves. This yellowing can occur as a result of the aphids' feeding activity, which disrupts the flow of nutrients within the plant.Stunted growth: Severe infestations of cotton aphids can lead to stunted growth in cotton plants. The feeding activity of the aphids can impair the plant's ability to photosynthesize and absorb nutrients, resulting in reduced growth and vigor.Wilting or plant decline: In extreme cases, where cotton aphid populations are high and prolonged feeding occurs, affected plants may show signs of wilting or overall decline. This can be a result of the cumulative impact of the aphids' feeding, nutrient depletion, and the stress placed on the plant.";
    }

    return "Cotton aphids, also known as Aphis gossypii, are small sap-sucking insects that infest cotton plants (Gossypium spp.). They are a common and economically significant pest in cotton-growing regions worldwide. Cotton aphids feed on the sap of the plant, causing damage and reducing cotton yields.Cotton aphids are typically pale yellow, green, or light brown in color, but their appearance can vary depending on environmental conditions and the specific population. They have pear-shaped bodies and long antennae. These aphids reproduce rapidly, with females giving birth to live nymphs, bypassing the egg-laying stage. This allows their populations to increase quickly under favorable conditions.";
  }

  if (text.includes("army worm")) {
    if (text.includes("fertilizers")) {
      return "For army worms in cotton, fertilizers like triple superphosphate and monoammonium phosphate can provide necessary nutrients.";
    }
    if (text.includes("pesticides")) {
      return "To control army worms in cotton, you can use pesticides such as Bacillus thuringiensis (Bt) and emamectin benzoate.";
    }
    if (text.includes("cultivation process")) {
      return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season")) {
      return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
    }
    if (text.includes("harvesting")) {
      return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
    }
    if (text.includes("general tips")) {
      return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
    }
    if (text.includes("symtoms")) {
      return "The following are common symptoms and signs of a cotton armyworm infestation:Defoliation: Cotton armyworm larvae feed on the leaves of cotton plants, causing defoliation. They consume leaf tissue, leaving behind ragged edges or completely skeletonized leaves. Severe infestations can result in significant leaf loss, affecting the plant's ability to photosynthesize and potentially leading to reduced yields.Holes in leaves and bolls: The feeding activity of cotton armyworm caterpillars can create holes in cotton leaves, buds, and even developing bolls. This damage can provide entry points for secondary infections by pathogens.Larval presence: The presence of cotton armyworm larvae on the cotton plants is an obvious sign of an infestation. The caterpillars are often active at night and hide during the day in plant debris, soil cracks, or curled leaves. Their presence can be confirmed by carefully inspecting the foliage and plant parts. Frass or droppings: Another indication of a cotton armyworm infestation is the presence of dark green or black droppings, known as frass. These droppings may accumulate on leaves or around feeding sites, providing visual evidence of caterpillar activity.";
    }
    return "The cotton armyworm, also known as the beet armyworm or Spodoptera exigua, is a common pest that infests cotton plants (Gossypium spp.) and other crops. It is a voracious feeder and can cause significant damage if left uncontrolled. The larvae, or caterpillars, of the cotton armyworm are primarily responsible for crop damage.The cotton armyworm undergoes complete metamorphosis, progressing through egg, larval, pupal, and adult stages. It is the larval stage that causes the most harm to cotton plants. The larvae have a smooth body with distinct longitudinal stripes and a range of color variations, including shades of green, brown, and black.";
  }

  if (text.includes("bacterial blight")) {
    if (text.includes("fertilizers")) {
      return "For bacterial blight in cotton, fertilizers like muriate of potash and potassium nitrate can support plant growth.";
    }
    if (text.includes("pesticides")) {
      return "To manage bacterial blight in cotton, you can use copper-based fungicides, streptomycin, and kasugamycin.";
    }
    if (text.includes("cultivation process")) {
      return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season")) {
      return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
    }
    if (text.includes("harvesting")) {
      return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
    }
    if (text.includes("general tips")) {
      return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
    }
    if (text.includes("symtoms")) {
      return "Symptoms of corn bacterial blight typically appear as long, narrow, water-soaked lesions that run parallel to the leaf veins. The lesions are initially yellow and later turn brown or grayish. They may also have a wavy appearance and can eventually coalesce, causing extensive damage to the leaves. In severe cases, the disease can spread to the husks, stalks, and tassels of the corn plant.";
    }
    return "Corn bacterial blight, also known as bacterial leaf streak of corn, is a plant disease caused by the bacterium Xanthomonas vasicola pv. vasculorum (Xvv). It primarily affects corn plants and can result in significant yield losses if not properly managed.Corn bacterial blight is spread through infected seeds, debris, and wind-driven rain. The bacteria can survive on crop residues and in infected plant debris, allowing it to persist from one growing season to the next. Warm and humid conditions favor the development and spread of the disease.";
  }

  if (text.includes("powdery mildew")) {
    if (text.includes("fertilizers")) {
      return "For powdery mildew in cotton, fertilizers like zinc sulfate, iron sulfate, and boric acid can help with nutrient balance.";
    }
    if (text.includes("pesticides")) {
      return "To control powdery mildew in cotton, you can use pesticides such as sulfur, trifloxystrobin, and thiophanate-methyl.";
    }
    if (text.includes("cultivation process")) {
      return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season")) {
      return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
    }
    if (text.includes("harvesting")) {
      return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
    }
    if (text.includes("general tips")) {
      return "Some general tips for growing cotton include managing pests, providing sufficient irrigation, and practicing proper weed control.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of cotton powdery mildew typically appear as a powdery white or grayish coating on the leaves, stems, and sometimes even on the bolls of cotton plants. The affected plant tissues may become distorted or stunted, and severe infections can lead to premature defoliation. In addition to the visible signs, infected plants may also exhibit reduced vigor and decreased yield.";
    }
    return "Cotton powdery mildew is a fungal disease that affects cotton plants. It is caused by the fungus known as Golovinomyces gossypii (formerly known as Erysiphe gossypii). Powdery mildew is a common and widespread disease that can cause significant damage to cotton crops if left untreated.Cotton powdery mildew thrives under warm and humid conditions, with temperatures between 20°C and 30°C (68°F to 86°F) being optimal for its growth and development. The fungus spreads through wind-dispersed spores, which can travel long distances and infect nearby plants.";
  }

  if (text.includes("target spot")) {
    if (text.includes("fertilizers")) {
      return "For target spot in cotton, fertilizers like calcium nitrate and calcium ammonium nitrate can provide necessary nutrients.";
    }
    if (text.includes("pesticides")) {
      return "To manage target spot in cotton, you can use pesticides such as triadimefon, pyraclostrobin, and azoxystrobin.";
    }
    if (text.includes("cultivation process")) {
      return "Cotton is typically cultivated by preparing the soil, planting seeds or seedlings, and providing adequate water and nutrients throughout the growth cycle.";
    }
    if (text.includes("sowing season")) {
      return "The ideal sowing season for cotton varies depending on the region, but it is generally sown in spring or early summer when the soil temperature is warm.";
    }
    if (text.includes("harvesting")) {
      return "Cotton bolls are ready for harvesting when they have fully matured and burst open. Harvesting is usually done by hand or using mechanical equipment.";
    }
    if (text.includes("general tips")) {
      return "Some general tips for growing cotton include managing pests, providingsufficient irrigation, and practicing proper weed control.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of cotton target spot typically appear as circular to irregularly shaped lesions on the leaves. The lesions are tan to brown in color with a distinct concentric ring pattern, resembling a target. As the disease progresses, the lesions can enlarge and coalesce, leading to defoliation and reduced photosynthetic capacity of the plant. In severe cases, target spot can also affect the bolls, causing blemishes and reducing fiber quality.";
    }
    return "Cotton target spot, also known as Corynespora leaf spot, is a fungal disease that affects cotton plants. It is caused by the fungus Corynespora cassiicola. Target spot can lead to significant yield losses if not properly managed. Target spot thrives under warm and humid conditions, with temperatures between 20°C and 30°C (68°F to 86°F) and high relative humidity favoring disease development. The fungus spreads through wind-dispersed spores and can survive in crop debris and on alternate host plants.";
  }

  /** ########################################################### */

  /**rice */
  if (
    text.includes("describe") ||
    text.includes("description") ||
    text.includes("detailed")
  ) {
    if (text.includes("rice")) {
      return (
        <div>
          Rice is a staple food and one of the most important cereal grains
          consumed by a large part of the world's population. It is the seed of
          the Oryza sativa or Oryza glaberrima plant, which belongs to the grass
          family.
          <br />
          <br />
          Rice is primarily cultivated in flooded fields, known as paddy fields
          or rice paddies, where water management plays a crucial role in its
          growth. There are several varieties of rice, each with its unique
          characteristics, flavors, and culinary uses.
          <br />
          <br />
          Rice is a significant source of carbohydrates, providing energy to
          billions of people worldwide. When cooked, it becomes soft and fluffy,
          making it a versatile ingredient in various cuisines. It serves as an
          accompaniment to many dishes, can be used in desserts, and is
          processed into numerous products like rice flour, rice bran oil, and
          rice cakes.
          <br />
          <br />
          The cultivation of rice has a rich history, dating back thousands of
          years, and has shaped the cultures and economies of many regions. It
          is a staple food in countries across Asia, Africa, and Latin America.
          Rice cultivation has also led to the development of sophisticated
          irrigation systems and farming techniques.
          <br />
          <br />
          Beyond its significance as a dietary staple, rice plays a crucial role
          in cultural traditions and rituals in various societies. It symbolizes
          prosperity, fertility, and is associated with celebrations and
          religious ceremonies.
        </div>
      );
    }
  }

  if (text.includes("rice") || text.includes("rice plant")) {
    if (text.includes("disease") || text.includes("diseases")) {
      if (
        text.includes("prevention") ||
        text.includes("treatment") ||
        text.includes("management")
      ) {
        return (
          <div>
            Although there is no direct cure for rice plant diseases once the
            plant is infected, several preventive and management measures can
            help reduce their impact and prevent further spread. These measures
            include:
            <li>
              <b>Crop Rotation:</b> Avoid planting rice in the same field year
              after year. Practice crop rotation with other non-host crops to
              break disease cycles and reduce the buildup of pathogens in the
              soil.
            </li>
            <li>
              <b>Resistant Varieties:</b> Choose rice varieties that are
              resistant to common diseases in your region. Resistant varieties
              have genetic traits that can provide protection against specific
              diseases.
            </li>
            <li>
              <b>Clean Seeds:</b> Use certified disease-free seeds. Ensure that
              seeds are not contaminated with pathogens to prevent introducing
              diseases into your crop.
            </li>
            <li>
              <b>Field Hygiene:</b> Remove and destroy crop residues from
              previous harvests to reduce the source of pathogens. Avoid
              planting near infected crops.
            </li>
            <li>
              <b>Proper Irrigation:</b> Maintain appropriate water management
              practices to avoid waterlogged or drought-stressed conditions,
              which can make rice plants more susceptible to diseases.
            </li>
          </div>
        );
      }
      return (
        <div>
          Rice plants can be affected by various diseases, including:
          <br />
          <b>
            <li>Bacterial Blight</li>
            <li>Brown Spot</li>
            <li>Hispa</li>
            <li>Leaf Blast</li>
            <li>Tungro</li>
          </b>
        </div>
      );
    }

    if (
      text.includes("bacterial blight") ||
      text.includes("blight") ||
      text.includes("bacterial")
    ) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For bacterial blight in rice, fertilizers like urea, ammonium sulfate, and ammonium phosphate can support plant growth.";
      }
      if (text.includes("pesticides") || text.includes("pestide")) {
        return "To manage bacterial blight in rice, you can use copper-based fungicides, streptomycin, and kasugamycin.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
      }
      if (text.includes("harvesting")) {
        return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of rice bacterial blight vary depending on the stage of infection. In the early stages, water-soaked lesions with yellowish-green halos appear on the leaves. As the disease progresses, the lesions elongate and become necrotic, turning brown or grayish in color. They can spread along the leaf veins and cause wilting, drying, and death of the affected leaves. Infected panicles may exhibit dark, water-soaked lesions and can fail to produce grains or have partially filled grains.";
      }
      return "Rice bacterial blight, caused by the bacterium Xanthomonas oryzae pv. oryzae (Xoo), is a serious and destructive disease that affects rice plants. It can cause significant yield losses if not properly managed.Rice bacterial blight spreads through infected seeds, contaminated irrigation water, wind-driven rain, and mechanical means such as farm equipment. The bacterium can survive in crop residues, soil, and water, allowing it to persist from one season to the next.";
    }

    if (
      text.includes("brown spot") ||
      text.includes("spot") ||
      text.includes("brown")
    ) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For brown spot in rice, fertilizers like triple superphosphate and monoammonium phosphate can provide essential nutrients.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "To control brown spot in rice, you can use pesticides such as tricyclazole, pyroquilon, benzimidazole, and isoprothiolane.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
      }
      if (text.includes("harvesting")) {
        return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of rice brown spot typically appear as small, oval to elongated brown or dark brown lesions on the leaves. The lesions may have a yellow halo surrounding them, giving them a characteristic eye-spot appearance. As the disease progresses, the lesions can enlarge and coalesce, leading to extensive blighting of the leaves. Severe infections can cause premature leaf senescence, reduced photosynthetic capacity, and ultimately yield reduction.";
      }
      return "Rice brown spot, caused by the fungus Cochliobolus miyabeanus (formerly known as Bipolaris oryzae), is a common foliar disease that affects rice plants. It is prevalent in many rice-growing regions worldwide and can cause yield losses if not properly managed.Rice brown spot is favored by warm and humid conditions, typically occurring at temperatures between 20°C and 30°C (68°F to 86°F) with high relative humidity. The fungus spreads through infected seeds, wind-dispersed spores, and contaminated irrigation water. It can survive in crop debris and soil, facilitating its persistence from one season to the next.";
    }

    if (text.includes("hispa")) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For hispa in rice, fertilizers like muriate of potash and potassium nitrate can support plant nutrition.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "To control hispa in rice, you can use pesticides such as carbaryl, imidacloprid, fipronil, and thiamethoxam.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
      }
      if (text.includes("harvesting")) {
        return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of rice hispa infestation include the folding and rolling of leaves by the larvae. They feed on the tissues inside the folded leaves, causing characteristic longitudinal white streaks or patches. Heavy infestations can result in extensive leaf damage, leading to reduced photosynthetic capacity, stunting of plants, and yield losses. In severe cases, the insect can also attack the panicles, causing empty or partially filled grains..";
      }
      return "Rice hispa, also known as the rice leaf-folder, is a common insect pest that affects rice plants. It is caused by the larvae of the insect species Marasmia exigua (formerly known as Hieroglyphus oryzae). Rice hispa can cause significant damage to rice crops if not properly managed.The adult rice hispa is a small, slender, yellowish-brown insect with characteristic black markings on its wings. The larvae are greenish in color and have a habit of folding and tying leaves together to create shelters where they feed.";
    }

    if (text.includes("leaf blast") || text.includes("blast")) {
      if (text.includes("fertilizers")) {
        return "For leaf blast in rice, fertilizers like zinc sulfate, iron sulfate, and boric acid can help with nutrient balance.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "To control leaf blast in rice, you can use pesticides such as pyraclostrobin, trifloxystrobin, and propiconazole.";
      }
      if (text.includes("cultivation process") || text.includes("pesticide")) {
        return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
      }
      if (text.includes("harvesting")) {
        return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
      }
      if (text.includes("symptoms") || text.includes("symptom")) {
        return "Symptoms of rice leaf blast typically appear as elliptical to spindle-shaped lesions on the leaves. The lesions start as small, water-soaked spots that gradually expand and turn brown or grayish in the center. As they mature, the lesions develop a characteristic gray or whitish center with a dark brown border, resembling a blast crater. In severe cases, the lesions can coalesce, leading to blighting of entire leaves and even the panicles. Infected panicles may exhibit sterile florets or develop grayish spore masses.";
      }
      return "Rice leaf blast, caused by the fungus Magnaporthe oryzae, is a destructive disease that affects rice plants. It is one of the most significant diseases of rice worldwide and can cause substantial yield losses if not properly managed.";
    }

    if (text.includes("tungro")) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For tungro in rice, fertilizers like magnesium sulfate and magnesium nitrate can support plant growth.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "To manage tungro in rice, seed treatments with imidacloprid, thiamethoxam, and clothianidin can be helpful.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
      }
      if (text.includes("harvesting")) {
        return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
      }
      if (text.includes("symptoms") || text.includes("symptom")) {
        return "Symptoms of rice tungro vary depending on the stage of infection and the combination of viruses present. Common symptoms include stunting, yellowing of leaves (chlorosis), and reduced tillering. Infected plants may exhibit leaf rolling, leaf discoloration, and a general decline in plant health. In severe cases, the plants may fail to produce panicles or produce panicles with fewer grains.";
      }
      return "Rice tungro is a viral disease complex that affects rice plants. It is caused by a combination of two viruses: Rice tungro spherical virus (RTSV) and Rice tungro bacilliform virus (RTBV). Rice tungro can cause severe damage to rice crops and result in significant yield losses.Rice tungro is transmitted by the green leafhopper (Nephotettix spp.), which acts as a vector for the viruses. The leafhoppers acquire the viruses by feeding on infected plants and then transmit them to healthy plants while feeding. Both the viruses and the leafhopper vectors can persist in rice-growing areas.";
    }

    // Add other conditions specific to rice plant information here if needed

    return "Rice is a staple food and one of the most important cereal grains consumed by a large part of the world's population. It is the seed of the Oryza sativa or Oryza glaberrima plant, which belongs to the grass family. Rice is primarily cultivated in flooded fields, known as paddy fields or rice paddies, where water management plays a crucial role in its growth.";
  }

  if (
    text.includes("bacterial blight") ||
    text.includes("blight") ||
    text.includes("bacterial")
  ) {
    if (text.includes("fertilizers") || text.includes("fertilizer")) {
      return "For bacterial blight in rice, fertilizers like urea, ammonium sulfate, and ammonium phosphate can support plant growth.";
    }
    if (text.includes("pesticides") || text.includes("pestide")) {
      return "To manage bacterial blight in rice, you can use copper-based fungicides, streptomycin, and kasugamycin.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
    }
    if (text.includes("harvesting")) {
      return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of rice bacterial blight vary depending on the stage of infection. In the early stages, water-soaked lesions with yellowish-green halos appear on the leaves. As the disease progresses, the lesions elongate and become necrotic, turning brown or grayish in color. They can spread along the leaf veins and cause wilting, drying, and death of the affected leaves. Infected panicles may exhibit dark, water-soaked lesions and can fail to produce grains or have partially filled grains.";
    }
    return "Rice bacterial blight, caused by the bacterium Xanthomonas oryzae pv. oryzae (Xoo), is a serious and destructive disease that affects rice plants. It can cause significant yield losses if not properly managed.Rice bacterial blight spreads through infected seeds, contaminated irrigation water, wind-driven rain, and mechanical means such as farm equipment. The bacterium can survive in crop residues, soil, and water, allowing it to persist from one season to the next.";
  }

  if (
    text.includes("brown spot") ||
    text.includes("spot") ||
    text.includes("brown")
  ) {
    if (text.includes("fertilizers") || text.includes("fertilizer")) {
      return "For brown spot in rice, fertilizers like triple superphosphate and monoammonium phosphate can provide essential nutrients.";
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return "To control brown spot in rice, you can use pesticides such as tricyclazole, pyroquilon, benzimidazole, and isoprothiolane.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
    }
    if (text.includes("harvesting")) {
      return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of rice brown spot typically appear as small, oval to elongated brown or dark brown lesions on the leaves. The lesions may have a yellow halo surrounding them, giving them a characteristic eye-spot appearance. As the disease progresses, the lesions can enlarge and coalesce, leading to extensive blighting of the leaves. Severe infections can cause premature leaf senescence, reduced photosynthetic capacity, and ultimately yield reduction.";
    }
    return "Rice brown spot, caused by the fungus Cochliobolus miyabeanus (formerly known as Bipolaris oryzae), is a common foliar disease that affects rice plants. It is prevalent in many rice-growing regions worldwide and can cause yield losses if not properly managed.Rice brown spot is favored by warm and humid conditions, typically occurring at temperatures between 20°C and 30°C (68°F to 86°F) with high relative humidity. The fungus spreads through infected seeds, wind-dispersed spores, and contaminated irrigation water. It can survive in crop debris and soil, facilitating its persistence from one season to the next.";
  }

  if (text.includes("hispa")) {
    if (text.includes("fertilizers") || text.includes("fertilizer")) {
      return "For hispa in rice, fertilizers like muriate of potash and potassium nitrate can support plant nutrition.";
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return "To control hispa in rice, you can use pesticides such as carbaryl, imidacloprid, fipronil, and thiamethoxam.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
    }
    if (text.includes("harvesting")) {
      return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of rice hispa infestation include the folding and rolling of leaves by the larvae. They feed on the tissues inside the folded leaves, causing characteristic longitudinal white streaks or patches. Heavy infestations can result in extensive leaf damage, leading to reduced photosynthetic capacity, stunting of plants, and yield losses. In severe cases, the insect can also attack the panicles, causing empty or partially filled grains..";
    }
    return "Rice hispa, also known as the rice leaf-folder, is a common insect pest that affects rice plants. It is caused by the larvae of the insect species Marasmia exigua (formerly known as Hieroglyphus oryzae). Rice hispa can cause significant damage to rice crops if not properly managed.The adult rice hispa is a small, slender, yellowish-brown insect with characteristic black markings on its wings. The larvae are greenish in color and have a habit of folding and tying leaves together to create shelters where they feed.";
  }

  if (text.includes("leaf blast") || text.includes("blast")) {
    if (text.includes("fertilizers")) {
      return "For leaf blast in rice, fertilizers like zinc sulfate, iron sulfate, and boric acid can help with nutrient balance.";
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return "To control leaf blast in rice, you can use pesticides such as pyraclostrobin, trifloxystrobin, and propiconazole.";
    }
    if (text.includes("cultivation process") || text.includes("pesticide")) {
      return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
    }
    if (text.includes("harvesting")) {
      return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
    }
    if (text.includes("symptoms") || text.includes("symptom")) {
      return "Symptoms of rice leaf blast typically appear as elliptical to spindle-shaped lesions on the leaves. The lesions start as small, water-soaked spots that gradually expand and turn brown or grayish in the center. As they mature, the lesions develop a characteristic gray or whitish center with a dark brown border, resembling a blast crater. In severe cases, the lesions can coalesce, leading to blighting of entire leaves and even the panicles. Infected panicles may exhibit sterile florets or develop grayish spore masses.";
    }
    return "Rice leaf blast, caused by the fungus Magnaporthe oryzae, is a destructive disease that affects rice plants. It is one of the most significant diseases of rice worldwide and can cause substantial yield losses if not properly managed.";
  }

  if (text.includes("tungro")) {
    if (text.includes("fertilizers") || text.includes("fertilizer")) {
      return "For tungro in rice, fertilizers like magnesium sulfate and magnesium nitrate can support plant growth.";
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return "To manage tungro in rice, seed treatments with imidacloprid, thiamethoxam, and clothianidin can be helpful.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Rice is typically cultivated by flooding the fields, transplanting young seedlings, and managing water levels throughout the growth cycle.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for rice depends on the type of rice and the region. Generally, it is sown in spring or early summer when the temperature and water conditions are suitable.";
    }
    if (text.includes("harvesting")) {
      return "Rice is ready for harvesting when the grains have ripened and the stalks have turned golden. Harvesting is done by cutting the rice stalks and drying the grains.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing rice include ensuring proper water management, controlling weeds, and using suitable rice varieties for your region.";
    }
    if (text.includes("symptoms") || text.includes("symptom")) {
      return "Symptoms of rice tungro vary depending on the stage of infection and the combination of viruses present. Common symptoms include stunting, yellowing of leaves (chlorosis), and reduced tillering. Infected plants may exhibit leaf rolling, leaf discoloration, and a general decline in plant health. In severe cases, the plants may fail to produce panicles or produce panicles with fewer grains.";
    }
    return "Rice tungro is a viral disease complex that affects rice plants. It is caused by a combination of two viruses: Rice tungro spherical virus (RTSV) and Rice tungro bacilliform virus (RTBV). Rice tungro can cause severe damage to rice crops and result in significant yield losses.Rice tungro is transmitted by the green leafhopper (Nephotettix spp.), which acts as a vector for the viruses. The leafhoppers acquire the viruses by feeding on infected plants and then transmit them to healthy plants while feeding. Both the viruses and the leafhopper vectors can persist in rice-growing areas.";
  }

  /** ########################################################### */

  /**sugarcane  */
  if (
    text.includes("describe") ||
    text.includes("description") ||
    text.includes("detailed")
  ) {
    if (text.includes("sugarcane")) {
      return (
        <div>
          Sugarcane is a tall perennial grass (Saccharum officinarum) widely
          cultivated for its sweet juice, which is used to produce sugar and
          various other sugarcane-derived products. It belongs to the grass
          family and is known for its rapid growth and high sugar content.
          <br />
          <br />
          Sugarcane is typically grown in tropical and subtropical regions,
          where warm temperatures and abundant sunlight promote its growth. The
          plant has thick, fibrous stalks that can reach several meters in
          height. Sugarcane cultivation involves planting stem cuttings in
          well-prepared soil and providing adequate irrigation to support its
          growth.
          <br />
          <br />
          The primary economic importance of sugarcane lies in its role as a
          major source of sucrose, which is extracted from the plant's juice
          through a process called sugar milling. This sucrose-rich juice is
          then processed to produce various forms of sugar, such as granulated
          sugar, brown sugar, and molasses. Additionally, sugarcane byproducts,
          like bagasse (the fibrous residue after juice extraction), are used
          for energy production, animal feed, and as raw material in the paper
          and pulp industry.
          <br />
          <br />
          Sugarcane has a significant cultural and historical impact in regions
          where it is cultivated. Its cultivation has a long history, dating
          back thousands of years, and has played a vital role in the
          development of various civilizations. The crop is associated with
          celebrations, festivals, and traditional rituals in many societies.
          <br />
          <br />
          Due to its high water requirement and vulnerability to pests and
          diseases, sugarcane cultivation demands careful management and
          monitoring. Modern agricultural practices, including genetic
          improvements and integrated pest management, have contributed to
          increasing sugarcane yields and sustainable production.
        </div>
      );
    }
  }

  // Handle sugarcane diseases
  if (text.includes("sugarcane")) {
    if (text.includes("disease") || text.includes("diseases")) {
      return (
        <div>
          Sugarcane can be affected by various diseases, including:
          <br />
          <b>
            <li>Bacterial Blight</li>
            <li>Red Rot</li>
            <li>Rust</li>
          </b>
        </div>
      );
    }
  }

  if (text.includes("sugarcane")) {
    
      if ( text.includes("prevention") ||  text.includes("treatment") ||  text.includes("management")) {
       
       
        return (
          <div>
            Although there is no direct cure for sugarcane diseases once the
            crop is infected, several preventive and management measures can
            help reduce their impact and prevent further spread. These measures
            include:
            <li>
              <b>Crop Rotation:</b> Avoid planting sugarcane in the same field
              year after year. Practice crop rotation with other non-host crops
              to break disease cycles and reduce the buildup of pathogens in the
              soil.
            </li>
            <li>
              <b>Resistant Varieties:</b> Choose sugarcane varieties that are
              resistant to common diseases in your region. Resistant varieties
              have genetic traits that can provide protection against specific
              diseases.
            </li>
            <li>
              <b>Clean Planting Material:</b> Use disease-free stem cuttings or
              seedlings from certified sources to avoid introducing pathogens
              into your sugarcane crop.
            </li>
            <li>
              <b>Field Hygiene:</b> Remove and destroy infected plant materials,
              including crop residues and affected sugarcane stalks, to reduce
              the source of pathogens. Avoid planting near infected crops.
            </li>
            <li>
              <b>Water Management:</b> Maintain appropriate water management
              practices to prevent waterlogging, as it can create favorable
              conditions for certain sugarcane diseases. Additionally, ensure
              sufficient irrigation during dry periods to avoid drought-stressed
              plants, which may become more susceptible to diseases.
            </li>
          </div>
        );
      
      
    }
    if (
      text.includes("bacterial blight") ||
      text.includes("blight") ||
      text.includes("bacterial")
    ) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For bacterial blight in sugarcane, fertilizers like nitrogen, phosphorus, and potassium can support plant growth and overall health.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "To manage bacterial blight in sugarcane, copper-based bactericides can be applied to control the disease.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation") || text.includes("cultivate")
      ) {
        return "Sugarcane is typically cultivated by planting stem cuttings called setts, which are placed in furrows or trenches in prepared soil. Adequate irrigation, weed control, and proper nutrient management throughout the growth cycle are crucial.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for sugarcane varies depending on the region, climate, and specific sugarcane variety. It is commonly planted at the beginning of the rainy season to ensure sufficient moisture for establishment.";
      }
      if (text.includes("harvesting")) {
        return "Sugarcane is ready for harvesting when it reaches physiological maturity, usually after 10 to 18 months of growth. Harvesting involves cutting the mature stalks close to the ground and removing leaves before transporting them to the sugar mill for processing.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing sugarcane include selecting disease-free setts, maintaining proper spacing between plants, providing adequate irrigation, and implementing pest and weed management practices.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of sugarcane bacterial blight include water-soaked lesions with yellow halos on leaves, stems, and stalks. Lesions may enlarge and turn brown, leading to the drying and wilting of affected plant parts. Severe infections can result in yield losses and the spread of the disease to nearby plants.";
      }
      return "Bacterial blight is a significant disease of sugarcane caused by the bacterium Xanthomonas albilineans. It affects the leaves, stems, and stalks of sugarcane plants, leading to reduced vigor, stunted growth, and yield losses. Bacterial blight is favored by warm and humid conditions, and the bacterium can spread through infected planting material, insect vectors, and mechanical means.";
    }

    if (text.includes("red rot")) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For red rot in sugarcane, proper nutrient management, including balanced fertilization with nitrogen, phosphorus, and potassium, is crucial for overall plant health and disease resistance.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "Currently, there are no effective chemical control measures available for red rot in sugarcane. Cultural practices, such as the use of disease-free setts, crop rotation, and removal of infected plants, can help manage the disease.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation")
      ) {
        return "Sugarcane cultivation involves planting setts in well-prepared soil, providing regular irrigation, managing weeds and pests, and applying appropriate fertilizers. Disease management practices, such as the use of disease-free planting material and field sanitation, are crucial for controlling red rot.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The sowing season for sugarcane depends on the region and climate. It is typically planted at the onset of the rainy season or during favorable weather conditions to ensure adequate soil moisture for germination and establishment.";
      }
      if (text.includes("harvesting")) {
        return "Sugarcane is harvested when it reaches maturity, usually after 10 to 18 months of growth. Harvesting involves cutting the mature stalks close to the ground and removing the leaves before transporting them to the sugar mill for processing.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for managing red rot in sugarcane include using disease-free planting material, practicing crop rotation, adopting resistant sugarcane varieties, implementing field sanitation measures, and monitoring for early symptoms of the disease.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of red rot in sugarcane include reddish discoloration of the internal vascular tissues, particularly in the lower nodes of the stalk. Infected stalks may exhibit rotting, wilting, and the presence of red or dark brown masses of fungal spores. Red rot can cause significant yield losses and negatively impact sugar quality.";
      }
      return "Red rot is a destructive disease of sugarcane caused by the fungus Colletotrichum falcatum. It affects the vascular system of sugarcane plants, leading to the rotting and discoloration of internal tissues. Red rot is favored by warm and humid conditions and can spread through infected setts, soil, and contaminated tools or equipment.";
    }

    if (text.includes("rust")) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For rust management in sugarcane, balanced fertilization with essential nutrients like nitrogen, phosphorus, and potassium can help maintain plant health and strengthen disease resistance.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "Currently, there are no effective chemical control measures available for rust in sugarcane. Cultural practices, including the use of disease-free setts, planting resistant varieties, and implementing proper field sanitation, are important for rust management.";
      }
      if (
        text.includes("cultivation process") ||
        text.includes("cultivation")
      ) {
        return "Sugarcane cultivation involves planting setts in well-prepared soil, providing adequate irrigation, managing pests and weeds, and ensuring proper nutrition. Disease management practices, such as the use of resistant varieties and removal of infected plants or debris, are crucial for controlling rust.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The sowing season for sugarcane varies depending on the region and climate. It is typically planted at the beginning of the rainy season or during favorable weather conditions to ensure optimal growth and establishment.";
      }
      if (text.includes("harvesting")) {
        return "Sugarcane is harvested when it reaches maturity, usually after 10 to 18 months of growth. Harvesting involves cutting the mature stalks close to the ground and removing the leaves before transporting them to the sugar mill for processing.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for managing rust in sugarcane include selecting resistant varieties, implementing proper field sanitation practices, managing weed hosts, and monitoring for early signs of the disease. Additionally, maintaining optimum growing conditions and providing balanced nutrition contribute to disease resistance.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of rust in sugarcane include the appearance of reddish-brown to orange-brown pustules on the leaves and stems. These pustules contain masses of fungal spores. Severe infections can lead to premature leaf senescence, reduced photosynthetic activity, and decreased cane yield.";
      }
      return "Rust is a fungal disease that affects sugarcaneI apologize for the incomplete response. Here's the updated code structure that provides information about sugarcane and its associated diseases: Bacterial Blight, Red Rot, and Rust:";
    }

    return "Sugarcane, a tall perennial grass, is a significant crop cultivated in many tropical and subtropical regions around the world. It is primarily grown for its sweet sap, which is rich in sucrose and serves as a valuable source of sugar production. Sugarcane plants consist of thick stalks that store the sugary juice, making them the main focus of cultivation. The sugarcane industry plays a vital role in the global sugar market. The stalks are harvested and processed to extract the juice, which is then subjected to various purification and crystallization processes to obtain sugar in its various forms, such as granulated sugar, brown sugar, and molasses. Sugarcane's high sugar content also makes it a suitable raw material for the production of ethanol, a biofuel used as a renewable energy source. In addition to its role in the sugar industry, sugarcane has various other applications. Bagasse, the fibrous residue left after extracting the juice, is commonly used as a renewable source of bioenergy in the form of biomass pellets or for the generation of heat and electricity. Moreover, bagasse can be transformed into pulp for the production of paper and cardboard.";
  }

  

  if (
    text.includes("bacterial blight") ||  text.includes("blight") ||  text.includes("bacterial")) {
    if (text.includes("fertilizers") || text.includes("fertilizer")) {
      return "For bacterial blight in sugarcane, fertilizers like nitrogen, phosphorus, and potassium can support plant growth and overall health.";
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return "To manage bacterial blight in sugarcane, copper-based bactericides can be applied to control the disease.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Sugarcane is typically cultivated by planting stem cuttings called setts, which are placed in furrows or trenches in prepared soil. Adequate irrigation, weed control, and proper nutrient management throughout the growth cycle are crucial.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The ideal sowing season for sugarcane varies depending on the region, climate, and specific sugarcane variety. It is commonly planted at the beginning of the rainy season to ensure sufficient moisture for establishment.";
    }
    if (text.includes("harvesting")) {
      return "Sugarcane is ready for harvesting when it reaches physiological maturity, usually after 10 to 18 months of growth. Harvesting involves cutting the mature stalks close to the ground and removing leaves before transporting them to the sugar mill for processing.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for growing sugarcane include selecting disease-free setts, maintaining proper spacing between plants, providing adequate irrigation, and implementing pest and weed management practices.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of sugarcane bacterial blight include water-soaked lesions with yellow halos on leaves, stems, and stalks. Lesions may enlarge and turn brown, leading to the drying and wilting of affected plant parts. Severe infections can result in yield losses and the spread of the disease to nearby plants.";
    }
    return "Bacterial blight is a significant disease of sugarcane caused by the bacterium Xanthomonas albilineans. It affects the leaves, stems, and stalks of sugarcane plants, leading to reduced vigor, stunted growth, and yield losses. Bacterial blight is favored by warm and humid conditions, and the bacterium can spread through infected planting material, insect vectors, and mechanical means.";
  }

  if (text.includes("red rot")) {
    if (text.includes("fertilizers") || text.includes("fertilizer")) {
      return "For red rot in sugarcane, proper nutrient management, including balanced fertilization with nitrogen, phosphorus, and potassium, is crucial for overall plant health and disease resistance.";
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return "Currently, there are no effective chemical control measures available for red rot in sugarcane. Cultural practices, such as the use of disease-free setts, crop rotation, and removal of infected plants, can help manage the disease.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Sugarcane cultivation involves planting setts in well-prepared soil, providing regular irrigation, managing weeds and pests, and applying appropriate fertilizers. Disease management practices, such as the use of disease-free planting material and field sanitation, are crucial for controlling red rot.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The sowing season for sugarcane depends on the region and climate. It is typically planted at the onset of the rainy season or during favorable weather conditions to ensure adequate soil moisture for germination and establishment.";
    }
    if (text.includes("harvesting")) {
      return "Sugarcane is harvested when it reaches maturity, usually after 10 to 18 months of growth. Harvesting involves cutting the mature stalks close to the ground and removing the leaves before transporting them to the sugar mill for processing.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for managing red rot in sugarcane include using disease-free planting material, practicing crop rotation, adopting resistant sugarcane varieties, implementing field sanitation measures, and monitoring for early symptoms of the disease.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of red rot in sugarcane include reddish discoloration of the internal vascular tissues, particularly in the lower nodes of the stalk. Infected stalks may exhibit rotting, wilting, and the presence of red or dark brown masses of fungal spores. Red rot can cause significant yield losses and negatively impact sugar quality.";
    }
    return "Red rot is a destructive disease of sugarcane caused by the fungus Colletotrichum falcatum. It affects the vascular system of sugarcane plants, leading to the rotting and discoloration of internal tissues. Red rot is favored by warm and humid conditions and can spread through infected setts, soil, and contaminated tools or equipment.";
  }

  if (text.includes("rust")) {
    if (text.includes("fertilizers") || text.includes("fertilizer")) {
      return "For rust management in sugarcane, balanced fertilization with essential nutrients like nitrogen, phosphorus, and potassium can help maintain plant health and strengthen disease resistance.";
    }
    if (text.includes("pesticides") || text.includes("pesticide")) {
      return "Currently, there are no effective chemical control measures available for rust in sugarcane. Cultural practices, including the use of disease-free setts, planting resistant varieties, and implementing proper field sanitation, are important for rust management.";
    }
    if (text.includes("cultivation process") || text.includes("cultivation")) {
      return "Sugarcane cultivation involves planting setts in well-prepared soil, providing adequate irrigation, managing pests and weeds, and ensuring proper nutrition. Disease management practices, such as the use of resistant varieties and removal of infected plants or debris, are crucial for controlling rust.";
    }
    if (text.includes("sowing season") || text.includes("sowing")) {
      return "The sowing season for sugarcane varies depending on the region and climate. It is typically planted at the beginning of the rainy season or during favorable weather conditions to ensure optimal growth and establishment.";
    }
    if (text.includes("harvesting")) {
      return "Sugarcane is harvested when it reaches maturity, usually after 10 to 18 months of growth. Harvesting involves cutting the mature stalks close to the ground and removing the leaves before transporting them to the sugar mill for processing.";
    }
    if (text.includes("general tips") || text.includes("tips")) {
      return "Some general tips for managing rust in sugarcane include selecting resistant varieties, implementing proper field sanitation practices, managing weed hosts, and monitoring for early signs of the disease. Additionally, maintaining optimum growing conditions and providing balanced nutrition contribute to disease resistance.";
    }
    if (text.includes("symptoms")) {
      return "Symptoms of rust in sugarcane include the appearance of reddish-brown to orange-brown pustules on the leaves and stems. These pustules contain masses of fungal spores. Severe infections can lead to premature leaf senescence, reduced photosynthetic activity, and decreased cane yield.";
    }
    return "Rust is a fungal disease that affects sugarcaneI apologize for the incomplete response. Here's the updated code structure that provides information about sugarcane and its associated diseases: Bacterial Blight, Red Rot, and Rust:";
  }

  /** ########################################################### */

  /**wheat */
  if (text.includes("wheat")) {
    if (text.includes("disease") || text.includes("diseases")) {
      return (
        <div>
          Wheat can be affected by various diseases, including:
          <br />
          <b>
            <li>Brown Rust</li>
            <li>Septoria</li>
            <li>Powdery Mildew</li>
            <li>Yellow Rust</li>
          </b>
        </div>
      );
    }
  }
  

  if (text.includes("wheat")) {
    if (text.includes("prevention") || text.includes("treatment") || text.includes("management")) {
      return (
        <div>
          Although there is no direct cure for wheat diseases once the crop is infected, several preventive and management measures can help reduce their impact and prevent further spread. These measures include:
          <li>
            <b>Crop Rotation:</b> Avoid planting wheat in the same field year after year. Practice crop rotation with other non-host crops to break disease cycles and reduce the buildup of pathogens in the soil.
          </li>
          <li>
            <b>Resistant Varieties:</b> Choose wheat varieties that are resistant to common diseases in your region. Resistant varieties have genetic traits that can provide protection against specific diseases.
          </li>
          <li>
            <b>Clean Planting Material:</b> Use disease-free seeds or seedlings from certified sources to avoid introducing pathogens into your wheat crop.
          </li>
          <li>
            <b>Field Hygiene:</b> Remove and destroy infected plant materials, including crop residues and affected wheat plants, to reduce the source of pathogens. Avoid planting near infected crops.
          </li>
          <li>
            <b>Proper Nutrition:</b> Ensure balanced fertilization and provide adequate nutrients to maintain plant health and strengthen disease resistance.
          </li>
        </div>
      );
    }
    if (text.includes("brown rust") || text.includes("rust")) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For brown rust in wheat, fertilizers like urea, ammonium nitrate, and calcium nitrate can provide essential nutrients.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "To control brown rust in wheat, you can use pesticides such as triadimefon, tebuconazole, and propiconazole.";
      }
      if (text.includes("cultivation process") || text.includes("cultivation") || text.includes("cultivate")) {
        return "Wheat is typically cultivated by preparing the soil, sowing seeds, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for wheat depends on the region and the type of wheat, but it is generally sown in the fall or early spring.";
      }
      if (text.includes("harvesting")) {
        return "Wheat is ready for harvesting when the grains have ripened and turned golden or brown. Harvesting is typically done by cutting the wheat stalks and threshing to separate the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing wheat include choosing suitable wheat varieties, providing sufficient irrigation, and managing pests and weeds.";
      }
      if (text.includes("symptoms") || text.includes("symptom")) {
        return "Symptoms of wheat brown rust appear as small, reddish-brown pustules or lesions on the leaves, stems, and glumes of wheat plants. These pustules contain masses of fungal spores, which give them a powdery or rusty appearance. The lesions can expand and merge, leading to extensive browning of the affected plant parts. Severe infections can result in premature senescence of leaves, reduced photosynthetic activity, and ultimately yield reduction.";
      }
      return "Wheat brown rust, also known as wheat leaf rust, is a fungal disease caused by the pathogen Puccinia triticina. It is a common and economically significant disease that affects wheat crops worldwide. Brown rust can cause yield losses and reduce grain quality if not managed properly.Brown rust thrives under cool to moderately warm temperatures, typically between 15°C and 25°C (59°F to 77°F), with high humidity or moisture on the leaf surface. The fungus spreads through wind-dispersed spores, which can travel long distances and infect nearby wheat plants.";
    }

    if (text.includes("septoria")) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For septoria in wheat, fertilizers like diammonium phosphate and ammonium phosphate can support plant growth.";
      }
      if (text.includes("pesticides") || text.includes("pesticide]")) {
        return "To manage septoria in wheat, you can use pesticides such as azoxystrobin and pyraclostrobin.";
      }
      if (text.includes("cultivation process") || text.includes("cultivation") || text.includes("cultivate")) {
        return "Wheat is typically cultivated by preparing the soil, sowing seeds, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for wheat depends on the region and the type of wheat, but it is generally sown in the fall or early spring.";
      }
      if (text.includes("harvesting")) {
        return "Wheat is ready for harvesting when the grains have ripened and turned golden or brown. Harvesting is typically done by cutting the wheat stalks and threshing to separate the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing wheat include choosing suitable wheat varieties, providing sufficient irrigation, and managing pests and weeds.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of wheat Septoria initially appear as small, dark brown to black spots or lesions on the lower leaves of the plant. The lesions often have a distinct yellow halo surrounding them. As the disease progresses, the lesions can enlarge and coalesce, resulting in larger irregularly shaped blotches on the leaves. The centers of the lesions may turn gray or tan, while the edges remain brown. Severely infected leaves can exhibit significant yellowing, drying, and premature senescence.";
      }
      return "Wheat Septoria, also known as Septoria leaf blotch, is a fungal disease that affects wheat crops. It is caused by the pathogens Septoria tritici and Septoria nodorum. Septoria leaf blotch is one of the most common and economically important diseases of wheat worldwide.Septoria diseases in wheat are favored by cool and wet weather conditions. The pathogens survive in crop debris and can be spread through rain splash, wind, or irrigation water. The spores of the pathogens can also be seedborne, leading to initial infections in the new crop.";
    }

    if (text.includes("powdery mildew") || text.includes("powdery") || text.includes("mildew")) {
      if (text.includes("fertilizers") || text.includes("fertilizer")) {
        return "For wheat powdery mildew, fertilizers like potassium nitrate and potassium sulfate can help with nutrient balance.";
      }
      if (text.includes("pesticides") || text.includes("pesticide")) {
        return "To control wheat powdery mildew, you can use pesticides such as propiconazole, tebuconazole, and myclobutanil.";
      }
      if (text.includes("cultivation process") || text.includes("cultivation") || text.includes("cultivate")) {
        return "Wheat is typically cultivated by preparing the soil, sowing seeds, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for wheat depends on the region and the type of wheat, but it is generally sown in the fall or early spring.";
      }
      if (text.includes("harvesting")) {
        return "Wheat is ready for harvesting when the grains have ripened and turned golden or brown. Harvesting is typically done by cutting the wheat stalks and threshing to separate the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing wheat include choosing suitable wheat varieties, providing sufficient irrigation, and managing pests and weeds.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of wheat powdery mildew typically appear as white to grayish powdery patches on the leaves, stems, and heads of wheat plants. These patches consist of fungal spores and mycelium. Initially, the patches may be small and isolated, but they can rapidly expand and cover larger areas of the plant. Severely infected leaves can become distorted, curl, and exhibit premature senescence.";
      }

      return "Wheat powdery mildew is a fungal disease caused by several species of the Blumeria and Erysiphe genera. It commonly affects wheat crops and can cause significant yield losses if not properly managed.Powdery mildew thrives under moderate temperatures (around 20°C to 25°C or 68°F to 77°F) with high humidity and poor air circulation. The fungus spreads through wind-dispersed spores, which can travel short distances and infect nearby wheat plants. Overwintering of the fungus occurs on crop debris and volunteer plants.";
    }

    if (text.includes("yellow rust") || text.includes("yellow")) {
      if (text.includes("fertilizers") || text.includes("fertilizers")) {
        return "For yellow rust in wheat, fertilizers like urea and ammonium nitrate can provide essential nutrients.";
      }
      if (text.includes("pesticides") ||text.includes("pesticide")) {
        return "To control yellow rust in wheat, you can use pesticides such as tebuconazole, propiconazole, and epoxiconazole.";
      }
      if (text.includes("cultivation process") || text.includes("cultivation")) {
        return "Wheat is typically cultivated by preparing the soil, sowing seeds, and providing adequate water and nutrients throughout the growth cycle.";
      }
      if (text.includes("sowing season") || text.includes("sowing")) {
        return "The ideal sowing season for wheat depends on the region and the type of wheat, but it is generally sown in the fall or early spring.";
      }
      if (text.includes("harvesting")) {
        return "Wheat is ready for harvesting when the grains have ripened and turned golden or brown. Harvesting is typically done by cutting the wheat stalks and threshing to separate the grains.";
      }
      if (text.includes("general tips") || text.includes("tips")) {
        return "Some general tips for growing wheat include choosing suitable wheat varieties, providing sufficient irrigation, and managing pests and weeds.";
      }
      if (text.includes("symptoms")) {
        return "Symptoms of wheat yellow rust appear as yellow to orange-yellow stripes or pustules on the leaves, stems, and sometimes the heads of wheat plants. These stripes typically follow the veins of the leaves, hence the name stripe rust. The pustules contain masses of fungal spores. As the disease progresses, the stripes can merge and cover larger areas of the plant. Severely infected leaves may exhibit necrosis, premature senescence, and reduced photosynthetic activity.";
      }
      return "Wheat yellow rust, also known as stripe rust, is a fungal disease caused by the pathogen Puccinia striiformis f. sp. tritici. It is a significant and widespread disease of wheat that can cause substantial yield losses if not properly managed.Wheat yellow rust is favored by cool temperatures (around 10°C to 15°C or 50°F to 59°F) and high humidity. The fungus spreads through wind-dispersed spores, which can travel long distances and infect nearby wheat plants. The spores can also survive on living host plants during mild winters and re-infect new crops in the following season.      ";
    }

    // Handle other wheat-related queries
    return "Wheat, one of the most widely cultivated cereal crops, plays a vital role in global food production. It is a versatile grain that is grown in diverse climates, ranging from temperate to tropical regions. ";
  }

  // Default response if the query doesn't match any crops or diseases
  return "I'm sorry, I don't have information about that crop or disease. Can you please rephrase your question?";
};
