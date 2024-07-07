"use client";
import { useState } from "react";
import Article from "@/components/Article";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "New Study Reveals the Impact of Social Media on Mental Health",
      content:
        "A recent study conducted by researchers at Harvard University has shed light on the significant impact of social media on mental health. The study found that prolonged use of social media platforms can lead to increased feelings of anxiety, depression, and loneliness. The researchers recommend setting time limits for social media usage and engaging in more face-to-face interactions to mitigate these effects.",
      status: "uncertain",
      date: new Date("2023-01-01"),
    },
    // Add more articles here...
    {
      id: 2,
      title:
        "Breakthrough in Renewable Energy: Scientists Develop More Efficient Solar Panels",
      content:
        "Scientists at MIT have developed a new type of solar panel that is significantly more efficient than current models. The breakthrough technology uses a novel material that captures a wider range of the solar spectrum, resulting in a 20% increase in energy conversion efficiency. This advancement could lead to more affordable and widespread use of solar power, contributing to the global efforts to combat climate change.",
      status: "uncertain",
      date: new Date("2023-02-01"),
    },
    {
      id: 3,
      title:
        "The Rise of Remote Work: How Companies Are Adapting to the New Normal",
      content:
        "The COVID-19 pandemic has accelerated the adoption of remote work across various industries. Companies are now investing in digital infrastructure and flexible work policies to accommodate their employees. While remote work offers benefits such as reduced commute times and increased flexibility, it also presents challenges like maintaining team cohesion and managing work-life balance. Experts believe that hybrid work models will become the standard in the post-pandemic world.",
      status: "uncertain",
      date: new Date("2023-03-01"),
    },
    {
      id: 4,
      title:
        "Advancements in Artificial Intelligence: What to Expect in the Next Decade",
      content:
        "Artificial Intelligence (AI) is poised to revolutionize multiple sectors in the coming years. Experts predict that AI will enhance capabilities in healthcare, finance, and transportation, among others. Key developments include AI-driven diagnostics, automated financial analysis, and self-driving vehicles. While these advancements promise to improve efficiency and productivity, they also raise ethical and regulatory concerns that need to be addressed.",
      status: "uncertain",
      date: new Date("2023-04-01"),
    },
    // ...add up to 20 articles.
    {
      id: 5,
      title: "Exploring the Depths of the Ocean: New Discoveries",
      content:
        "Marine biologists have discovered new species in the depths of the ocean, revealing the vast biodiversity that exists in the unexplored regions of our planet. These findings highlight the importance of ocean conservation efforts to protect these unique ecosystems.",
      status: "uncertain",
      date: new Date("2023-05-01"),
    },
    {
      id: 6,
      title: "The Future of Electric Vehicles: Trends and Innovations",
      content:
        "The electric vehicle (EV) market is rapidly evolving with advancements in battery technology, autonomous driving, and charging infrastructure. Industry experts predict a significant increase in EV adoption over the next decade, driven by environmental concerns and government incentives.",
      status: "uncertain",
      date: new Date("2023-06-01"),
    },
    {
      id: 7,
      title: "Health Benefits of a Plant-Based Diet",
      content:
        "Recent research has shown that a plant-based diet can provide numerous health benefits, including reduced risk of chronic diseases, improved weight management, and better overall wellness. Nutritionists recommend incorporating more plant-based foods into your daily diet.",
      status: "uncertain",
      date: new Date("2023-07-01"),
    },
    {
      id: 8,
      title: "Advancements in Space Exploration: Mars Missions",
      content:
        "Space agencies around the world are making significant progress in their missions to explore Mars. With upcoming rover landings and potential human missions, the next decade promises to be an exciting time for space exploration.",
      status: "uncertain",
      date: new Date("2023-08-01"),
    },
    {
      id: 9,
      title: "Artificial Intelligence in Healthcare: Benefits and Challenges",
      content:
        "AI technology is transforming the healthcare industry by improving diagnostic accuracy, optimizing treatment plans, and enhancing patient care. However, there are challenges related to data privacy, ethical considerations, and the need for robust regulatory frameworks.",
      status: "uncertain",
      date: new Date("2023-09-01"),
    },
    {
      id: 10,
      title: "Climate Change and Its Impact on Global Ecosystems",
      content:
        "The effects of climate change are becoming increasingly evident, with rising temperatures, melting ice caps, and more frequent extreme weather events. Scientists are urging immediate action to mitigate these impacts and protect global ecosystems.",
      status: "uncertain",
      date: new Date("2023-10-01"),
    },
    {
      id: 11,
      title: "Innovations in Renewable Energy: Solar and Wind Power",
      content:
        "Renewable energy sources such as solar and wind power are seeing rapid advancements, making them more efficient and cost-effective. These innovations are crucial for transitioning to a sustainable energy future.",
      status: "uncertain",
      date: new Date("2023-11-01"),
    },
    {
      id: 12,
      title: "The Evolution of 5G Technology and Its Applications",
      content:
        "5G technology is revolutionizing telecommunications with faster speeds, lower latency, and greater connectivity. Its applications span various sectors, including healthcare, transportation, and smart cities.",
      status: "uncertain",
      date: new Date("2023-12-01"),
    },
    {
      id: 13,
      title: "Breakthroughs in Biotechnology: CRISPR and Gene Editing",
      content:
        "Biotechnology is advancing rapidly with breakthroughs in gene editing technologies like CRISPR. These innovations hold promise for treating genetic disorders, improving crop yields, and advancing scientific research.",
      status: "uncertain",
      date: new Date("2024-01-01"),
    },
    {
      id: 14,
      title: "The Role of Big Data in Business Decision Making",
      content:
        "Big data analytics is transforming the business landscape by providing insights that drive strategic decision-making. Companies are leveraging big data to optimize operations, enhance customer experiences, and gain a competitive edge.",
      status: "uncertain",
      date: new Date("2024-02-01"),
    },
    {
      id: 15,
      title: "Sustainable Agriculture: Practices for the Future",
      content:
        "Sustainable agriculture practices are essential for ensuring food security and protecting the environment. Farmers are adopting techniques such as crop rotation, organic farming, and precision agriculture to achieve sustainability goals.",
      status: "uncertain",
      date: new Date("2024-03-01"),
    },
    {
      id: 16,
      title: "The Impact of Digital Transformation on Industries",
      content:
        "Digital transformation is reshaping industries by integrating digital technologies into all aspects of business operations. This shift is driving innovation, improving efficiency, and creating new business models.",
      status: "uncertain",
      date: new Date("2024-04-01"),
    },
    {
      id: 17,
      title: "Exploring the Potential of Quantum Computing",
      content:
        "Quantum computing is emerging as a revolutionary technology with the potential to solve complex problems that are beyond the capabilities of classical computers. Researchers are making significant strides in developing practical quantum computers.",
      status: "uncertain",
      date: new Date("2024-05-01"),
    },
    {
      id: 18,
      title: "The Future of Urban Mobility: Smart Cities and Transportation",
      content:
        "Smart cities are leveraging advanced technologies to enhance urban mobility, reduce traffic congestion, and improve public transportation systems. These innovations are creating more sustainable and livable urban environments.",
      status: "uncertain",
      date: new Date("2024-06-01"),
    },
    {
      id: 19,
      title: "The Importance of Cybersecurity in the Digital Age",
      content:
        "As cyber threats become more sophisticated, the importance of cybersecurity cannot be overstated. Organizations are investing in advanced security measures to protect their data and systems from cyber attacks.",
      status: "uncertain",
      date: new Date("2024-07-01"),
    },
    {
      id: 20,
      title: "The Role of Education in Shaping the Future Workforce",
      content:
        "Education systems are evolving to prepare students for the future workforce by emphasizing skills such as critical thinking, creativity, and digital literacy. These changes are essential for adapting to the rapidly changing job market.",
      status: "uncertain",
      date: new Date("2024-08-01"),
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredArticles = articles
    .filter((article) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchLower) ||
        article.content.toLowerCase().includes(searchLower)
      );
    })
    .sort((a, b) =>
      sortOrder === "newest" ? b.date - a.date : a.date - b.date
    );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const markAsTrue = (id) => {
    setArticles(
      articles.map((article) =>
        article.id === id ? { ...article, status: "true" } : article
      )
    );
    setSelectedArticle(null);
  };

  const markAsFalse = (id) => {
    setArticles(
      articles.map((article) =>
        article.id === id ? { ...article, status: "false" } : article
      )
    );
    setSelectedArticle(null);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`pb-10 ${
        theme.includes("light")
          ? "text-gray-900 bg-gray-100/40"
          : "text-white bg-gray-900"
      } px-20`}
    >
      <h1 className="font-extrabold p-10 text-center">Uncertain Articles</h1>
      <div className="mb-4 flex justify-between">
        <div className="w-1/2">
          <SearchBar
            theme={theme}
            text="Search Article"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <select
          value={sortOrder}
          onChange={handleSort}
          className={`border p-4 cursor-pointer ${
            theme.includes("light")
              ? "text-gray-700 bg-white"
              : "text-gray-200 bg-gray-800 border-gray-800"
          } p-2 rounded-3xl`}
        >
          <option
            className={`p-4 h-10 ${
              theme.includes("light")
                ? "text-gray-700 bg-white"
                : "text-gray-200 bg-gray-800"
            }`}
            value="newest"
          >
            Newest
          </option>
          <option
            className={`p-4 h-10 ${
              theme.includes("light")
                ? "text-gray-700 bg-white"
                : "text-gray-200 bg-gray-800"
            }`}
            value="oldest"
          >
            Oldest
          </option>
        </select>
      </div>
      <div className="grid pt-6 grid-responsive gap-20">
        {currentArticles.map((article) => (
          <Article
            theme={theme}
            key={article.id}
            id={article.id}
            title={article.title}
            content={article.content}
            onClick={() => setSelectedArticle(article)}
            onMarkTrue={() => markAsTrue(article.id)}
            onMarkFalse={() => markAsFalse(article.id)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(filteredArticles.length / articlesPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 border rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
      {selectedArticle && (
        <Modal
          theme={theme}
          title={selectedArticle.title}
          content={selectedArticle.content}
          onClose={() => setSelectedArticle(null)}
          onMarkTrue={() => markAsTrue(selectedArticle.id)}
          onMarkFalse={() => markAsFalse(selectedArticle.id)}
        />
      )}
    </div>
  );
}