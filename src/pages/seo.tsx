import * as React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default SEO;