import * as React from "react";
import articlesData from "../articles/articles.json";
import SEO from "./seo";
import Layout from "./layout";

// Définition du type Article
type Article = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};

const ArticlesList = () => {
  // Utilisation du type Article pour définir l'état articles
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const formattedArticles = articlesData.map((article) => ({
      ...article,
      text: article.text.replace(/\n/g, "<br />"),
    }));
    setArticles(formattedArticles);
  }, []);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Layout>
      <div>
        <SEO title="Articles" />
        {articles.length > 0 && (
          <div>
            <h3>{articles[currentIndex].title}</h3>
            <p dangerouslySetInnerHTML={{ __html: articles[currentIndex].text }} />
            <img src={articles[currentIndex].imageUrl} alt={articles[currentIndex].title} />
          </div>
        )}

        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Article précédent
        </button>
        <button onClick={handleNext} disabled={currentIndex === articles.length - 1}>
          Article suivant
        </button>
      </div>
    </Layout>
  );
};

export default ArticlesList;