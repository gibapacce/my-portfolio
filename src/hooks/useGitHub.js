import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../constants";

export const useGitHub = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!username) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_ENDPOINTS.GITHUB_REPOS(username));

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError(err.message);

        // Fallback to mock data if API fails
        const mockRepos = [
          {
            id: 1,
            name: "portfolio-website",
            description:
              "Meu portfólio pessoal desenvolvido com React e Tailwind CSS",
            language: "JavaScript",
            stargazers_count: 15,
            html_url: "https://github.com/usuario/portfolio-website",
            topics: ["react", "tailwind", "portfolio"],
          },
          {
            id: 2,
            name: "task-manager-api",
            description:
              "API REST para gerenciamento de tarefas com Node.js e MongoDB",
            language: "JavaScript",
            stargazers_count: 8,
            html_url: "https://github.com/usuario/task-manager-api",
            topics: ["nodejs", "mongodb", "api"],
          },
          {
            id: 3,
            name: "e-commerce-frontend",
            description: "Frontend de e-commerce moderno com Vue.js e Vuetify",
            language: "Vue",
            stargazers_count: 23,
            html_url: "https://github.com/usuario/e-commerce-frontend",
            topics: ["vue", "ecommerce", "vuetify"],
          },
        ];
        setRepos(mockRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};
