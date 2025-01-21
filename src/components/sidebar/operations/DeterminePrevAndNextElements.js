// Import the sections constant from another file
import { sections } from '../SidebarContent';

// Helper function to generate links by formatting titles
const generateLink = (prefix, title) =>
    `${prefix}/${title.toLowerCase().replace(/ /g, "-")}`;

// The function to find previous and next elements
export function findPreviousAndNext(currentLink) {
    let previous = null;
    let next = null;

    // Flatten the sections data with dynamically generated links
    const flattenedData = [];

    sections.forEach((section) => {
        const sectionLink = generateLink("/docs", section.title); // Generate section link
        flattenedData.push({ title: section.title, link: sectionLink });

        section.topics.forEach((topic) => {
            const topicLink = generateLink(sectionLink, topic.title); // Generate topic link
            flattenedData.push({ title: topic.title, link: topicLink });

            topic.articles.forEach((article) => {
                flattenedData.push({ title: article.title, link: article.link }); // Keep article link as-is
            });
        });
    });

    // Find the index of the current link in the flattened data
    const currentIndex = flattenedData.findIndex((item) => item.link === currentLink);

    if (currentLink === "/docs/electronics") {
        // Special case for /docs/electronics
        previous = { title: "Introduction", link: "/docs/intro" };
        next =
            currentIndex < flattenedData.length - 1
                ? { title: flattenedData[currentIndex + 1].title, link: flattenedData[currentIndex + 1].link }
                : null;
    } else if (currentIndex !== -1) {
        // General case
        previous =
            currentIndex > 0
                ? { title: flattenedData[currentIndex - 1].title, link: flattenedData[currentIndex - 1].link }
                : null;
        next =
            currentIndex < flattenedData.length - 1
                ? { title: flattenedData[currentIndex + 1].title, link: flattenedData[currentIndex + 1].link }
                : null;
    }

    return { previous, next };
}
