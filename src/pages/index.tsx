import * as React from "react";

import Layout from "./layout";
import SEO from "./seo";
// import ecoIcon from "/images/eco-icon.svg";
// import securityIcon from "/images/security-icon.svg";
// import showcaseIcon from "/images/showcase-icon.svg";
// import ecommerceIcon from "/images/ecommerce-icon.svg";
// import saasIcon from "/images/saas.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const services = [
  {
    title: "Audit Ecoconception",
    description:
      "Évaluation de la conception d'un produit, d'un service ou d'un processus du point de vue de son impact environnemental. Identification des aspects à améliorer pour réduire l'impact environnemental, tout en optimisant la performance et l'efficacité globales.",
  },
  {
    title: "Audit cybersécurité",
    description:
      "Évaluation de la sécurité d'un système informatique ou d'une infrastructure numérique. Identification des vulnérabilités potentielles et prévention des attaques, violations de données et failles de sécurité.",
  },
  {
    title: "Développement de site vitrine",
    description:
      "Création d'un site web pour présenter l'activité, les produits ou les services d'une entreprise de manière claire et attrayante. Renforcement de la visibilité et de l'image de marque en ligne.",
  },
  {
    title: "Développement de site e-commerce",
    description:
      "Création d'un site web pour vendre des produits ou des services en ligne. Mise en place de fonctionnalités telles que des catalogues de produits, des systèmes de paiement sécurisés, des paniers d'achat, et plus encore.",
  },
  {
    title: "Développement de SaaS",
    description:
      "Création d'un logiciel en tant que service (SaaS) pour répondre aux besoins spécifiques des entreprises. Fourniture d'un logiciel personnalisé accessible en ligne via un abonnement, sans investir dans l'infrastructure et les ressources nécessaires.",
  },
];
const servicesSectionStyles = {
  marginBottom: "2rem",
};

const servicesContainerStyles = {
  display: "flex"as const,
  flexWrap: "wrap"as const,
  justifyContent: "space-evenly"as const,
  alignItems: "center"as const,
};

const serviceCardStyles = {
  padding: "1rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  backgroundColor: "#ffffff",
  width: "calc(50% - 2rem)",
  marginBottom: "1rem",
  height: "150px",
};

const serviceTitleStyles = {
  marginBottom: "1rem",
};
const flexStyles = {
  display: "flex",
};
const imageStyles = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "100%", 
  height: "auto" 
};
const halfWidthStyle = {
  width: "50%",
};

const sectionStyles = {
  marginBottom: "2rem",
  padding: "20px",
};

const headingStyles = {
  textAlign: "center" as const,
};

const paragraphStyles = {
  marginBottom: "1rem",
};

const orangeBackground = {
  backgroundColor: "#FFE6CC",
};
const IndexPage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCarouselChange = (index: number) => {
    setCarouselIndex(index);
  };
  return (
    <Layout>
      <SEO title="Accueil" />

      <section style={sectionStyles}>
        
        <h2 style={headingStyles}>Pourquoi j'ai choisi de faire de l'écoconception</h2>
        <div style={flexStyles}>
          <div style={halfWidthStyle}>
            <p style={paragraphStyles}>
        En tant que développeur web, j'ai toujours été passionné par la technologie et son impact sur notre vie quotidienne. Cependant, j'ai également été préoccupé par l'impact environnemental de l'industrie du développement web. J'ai donc décidé de me concentrer sur l'écoconception dans mon travail pour faire ma part pour l'environnement.

L'écoconception consiste à concevoir des produits ou des services de manière à minimiser leur impact environnemental tout en maximisant leur efficacité et leur performance. Dans le développement web, cela peut se traduire par des pratiques telles que la réduction de la consommation d'énergie des serveurs, l'optimisation des images et des fichiers pour réduire leur taille, la conception de sites web plus économes en énergie, et bien plus encore.

Je crois fermement que nous avons tous un rôle à jouer dans la protection de notre planète, et en tant que développeur web, je suis déterminé à utiliser mes compétences pour avoir un impact positif. Je suis convaincu que l'écoconception peut non seulement aider à préserver notre environnement, mais aussi améliorer l'expérience utilisateur et la performance des sites web que je crée.

En fin de compte, mon amour pour le développement web durable est motivé par ma passion pour la technologie et mon désir de contribuer à un monde plus respectueux de l'environnement. Je suis fier de travailler dans un domaine qui me permet de faire une différence, même si c'est à petite échelle.
        </p>
        </div>
       
        <div style={halfWidthStyle}>
            <img
              src="/images/download.jpg"
              alt="Ecoconception"
              style={imageStyles}
            />
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyles, ...orangeBackground }}>
        <h2 style={headingStyles}>Les interets de l'écoconception</h2>
        <div style={flexStyles}>
          <div style={halfWidthStyle}>
          <img
              src="/images/download.jpg"
              alt="Ecoconception"
              style={imageStyles}
            />
        </div>
       
        <div style={halfWidthStyle}>
            <p style={paragraphStyles}>
        L'écoconception présente de nombreux avantages en termes de performance, ce qui profite directement à vos clients. Tout d'abord, une conception économe en énergie peut contribuer à réduire les coûts d'exploitation d'un site web en minimisant la consommation d'énergie des serveurs. Cela peut se traduire par une diminution des coûts de maintenance et d'hébergement, et donc une réduction des coûts pour vos clients.

En outre, une conception écoconçue peut également améliorer la vitesse de chargement des pages, ce qui est un facteur important pour l'expérience utilisateur. Les sites web écoconçus ont tendance à être plus légers en termes de taille de fichier et de code, ce qui permet aux pages de se charger plus rapidement. Cela peut contribuer à améliorer la satisfaction des utilisateurs et à réduire le taux de rebond, ce qui est bénéfique pour les objectifs commerciaux de vos clients.

Enfin, une conception écoconçue peut également améliorer la durée de vie d'un site web. En minimisant les demandes de ressources énergétiques, le site peut réduire l'usure des équipements et prolonger leur durée de vie. Cela peut permettre aux clients de bénéficier d'une plus grande longévité de leur site web et de réduire la fréquence des mises à jour coûteuses.

En somme, l'écoconception peut offrir des avantages significatifs en termes de performance pour les sites web, ce qui peut se traduire par des économies de coûts et une meilleure expérience utilisateur. En tant que développeur web axé sur l'écoconception, je m'engage à fournir des solutions durables qui bénéficient à la fois à l'environnement et aux clients.
</p>
          </div>
        </div>
      </section>

      <section style={sectionStyles}>
        
        <h2 style={headingStyles}>Qui suis je</h2>
        <div style={flexStyles}>
          <div style={halfWidthStyle}>
            <p style={paragraphStyles}>
            Je m'appelle Jonathan et je suis passionné par le développement web et l'écoconception. Après avoir travaillé successivement dans le bien-être, le management et les ressources humaines, j'ai décidé de me reconvertir dans le développement web pour avoir un impact positif sur la planète.

Mon parcours m'a amené à prendre conscience de l'importance de la durabilité et de la responsabilité environnementale, et j'ai donc décidé de me consacrer à un domaine où je pourrais appliquer ces principes. En tant que développeur web, j'ai été fasciné par la façon dont la technologie peut être utilisée pour créer des solutions innovantes et durables.

Ma passion pour l'écoconception est née de ma conviction que nous avons tous un rôle à jouer pour protéger notre planète et que les développeurs web ont une responsabilité particulière en raison de leur impact sur l'environnement. Je crois que l'écoconception peut aider à minimiser cet impact tout en améliorant la performance et l'efficacité des sites web.

En somme, mon expérience et ma passion pour le développement web et l'écoconception ont été motivées par mon désir de contribuer à un monde plus durable et responsable. Je suis convaincu que nous pouvons tous apporter notre pierre à l'édifice et je suis fier de travailler dans un domaine qui me permet de faire ma part pour l'environnement.
        </p>
        </div>
       
        <div style={halfWidthStyle}>
            <img
              src="/images/download.jpg"
              alt="Ecoconception"
              style={imageStyles}
            />
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyles, ...orangeBackground }}>
        <h2 style={headingStyles}>Témoignages de clients</h2>
        <Carousel
          selectedItem={carouselIndex}
          onChange={handleCarouselChange}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={false}
        >
          <div>
            <blockquote>
              <p style={paragraphStyles}>
                "J'ai adoré travailler avec John, il est un excellent développeur et ses compétences en écoconception ont vraiment amélioré les performances de mon site."
              </p>
              <cite>Client satisfait 1</cite>
            </blockquote>
          </div>
          <div>
            <blockquote>
              <p style={paragraphStyles}>
                "John a su trouver des solutions innovantes et écologiques pour notre projet. Je recommande vivement ses services!"
              </p>
              <cite>Client satisfait 2</cite>
            </blockquote>
          </div>
          <div>
            <blockquote>
              <p style={paragraphStyles}>
                "Le professionnalisme de John et son approche éco-responsable ont été un véritable atout pour la réussite de notre site web."
              </p>
              <cite>Client satisfait 3</cite>
            </blockquote>
          </div>
        </Carousel>
      </section>

      <section style={servicesSectionStyles}>
  <h2>Services proposés</h2>
  <div style={servicesContainerStyles}>
    {services.map((service, index) => (
      <div style={serviceCardStyles}>
        <h3 style={serviceTitleStyles}>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
</section>
    </Layout>
  );
};

export default IndexPage;