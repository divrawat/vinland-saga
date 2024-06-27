import { DOMAIN } from "../config";

const generateRobotsTxt = () => {
    let robotsTxtContent = `User-agent: *
Disallow: /images/
Sitemap: ${DOMAIN}/sitemap.xml
`;
    return robotsTxtContent;
};

export const getServerSideProps = async ({ res }) => {
    const robotsTxtContent = generateRobotsTxt();
    res.setHeader("Content-Type", "text/plain");
    res.write(robotsTxtContent);
    res.end();
    return { props: {} }
}

const RobotsTxt = () => { return null; };
export default RobotsTxt;