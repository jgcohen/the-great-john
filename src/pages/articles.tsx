import React, { useState } from "react";

import articlesData from "../articles/articles.json";
import SEO from "./seo";
import Layout from "./layout";

const containerStyles = {
  display: "flex"as const,
  flexDirection: "column"as const,
  alignItems: "center",
};

const titleStyles = {
  color: "orange",
};
const imageStyles = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "100%", 
  height: "auto" 
};
// Définition du type Article
type Article = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};

const ArticlesList = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [showLastFive, setShowLastFive] = useState(false);

  React.useEffect(() => {
    const formattedArticles = articlesData.map((article) => ({
      ...article,
      text: article.text.replace(/\n/g, "<br />"),
    }));
    setArticles(formattedArticles);
    setCurrentIndex(formattedArticles.length - 1);
  }, []);

  const handlePrevious = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex + 1); 
    }
  };

  const handleNext = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); 
    }
  };

  const renderLastFiveTitles = () => {
    const lastIndex = articles.length;
    const startIndex = Math.max(0, lastIndex - 5);

    return articles.slice(startIndex, lastIndex).map((article) => (
      <p key={article.id} onClick={() => setCurrentIndex(article.id - 1)} style={{ cursor: "pointer" }}>
        {article.title}
      </p>
    ));
  };

  const toggleLastFive = () => {
    setShowLastFive(!showLastFive);
  };

  return (
    <Layout>
      <div style={containerStyles}>
        <SEO title="Articles" />
        {articles.length > 0 && (
          <div>
            <div style={{ marginTop: "1rem" }}>
        <button onClick={toggleLastFive}>5 derniers articles</button>
        {showLastFive && (
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "0.5rem",
              padding: "1rem",
            }}
          >
            {renderLastFiveTitles()}
          </div>
        )}
      </div>
            <h1 style={titleStyles}>{articles[currentIndex].title}</h1>
            <img
              src={articles[currentIndex].imageUrl}
              alt={articles[currentIndex].title}
              style={imageStyles}
            />
            <p dangerouslySetInnerHTML={{ __html: articles[currentIndex].text }} />
          </div>
        )}
      </div>
      <button onClick={handlePrevious} disabled={currentIndex === articles.length - 1}>
        Article précédent
      </button>
      <button onClick={handleNext} disabled={currentIndex === 0}>
        Article suivant
      </button>
    </Layout>
  );
};

export default ArticlesList;