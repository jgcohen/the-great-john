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
  
    React.useEffect(() => {
      const formattedArticles = articlesData.map((article) => ({
        ...article,
        text: article.text.replace(/\n/g, "<br />"),
      }));
      setArticles(formattedArticles);
    }, []);


  return (
    <Layout>
    <div>
        <SEO title="Articles" />
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: article.text }} />
          <img src={article.imageUrl} alt={article.title} />
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default ArticlesList;