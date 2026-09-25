// src/utils/skillsUtils.js

export const getCategoryRoute = (skill) => {
  if (!skill) return "/projects";
  const title = (skill.title || "").toLowerCase();
  const id = (skill.id || "").toLowerCase();

  if (
    title.includes("full stack") ||
    title.includes("web") ||
    id.includes("stack") ||
    title.includes("api") ||
    title.includes("integration") ||
    id.includes("api") ||
    title.includes("n8n") ||
    title.includes("automation") ||
    id.includes("automation") ||
    title.includes("qa") ||
    title.includes("quality") ||
    title.includes("testing") ||
    id.includes("qa")
  ) {
    return "/projects?category=website";
  }

  if (title.includes("ui") || title.includes("ux") || id.includes("ui-ux")) {
    return "/projects?category=ui-ux";
  }

  if (title.includes("graphic") || id.includes("graphic")) {
    return "/projects?category=graphic-design";
  }

  return "/projects";
};

export const getCollabSubject = (skill) => {
  if (!skill) return "Project Collaboration";
  const title = (skill.title || "").toLowerCase();

  if (title.includes("full stack") || title.includes("web")) {
    return "Full-Stack Development Inquiry";
  }
  if (title.includes("api") || title.includes("integration")) {
    return "API Integration Inquiry";
  }
  if (title.includes("ui") || title.includes("ux")) {
    return "UI/UX Design Inquiry";
  }
  if (title.includes("qa") || title.includes("testing")) {
    return "QA Testing Inquiry";
  }
  if (title.includes("wordpress")) {
    return "WordPress Customization Inquiry";
  }
  if (title.includes("ai") || title.includes("automation")) {
    return "AI & Automation Inquiry";
  }
  return "Project Collaboration";
};

export const getTechLogoPath = (tech) => {
  const name = (tech.name || "").toLowerCase();
  if (name.includes("html")) return "/assets/white-logos/html-5.svg";
  if (name.includes("css")) return "/assets/white-logos/css.svg";
  if (name.includes("tailwind")) return "/assets/white-logos/tailwind.svg";
  if (name.includes("bootstrap")) return "/assets/white-logos/bootstrap.svg";
  if (name.includes("javascript")) return "/assets/white-logos/javascript.svg";
  if (name.includes("react")) return "/assets/white-logos/react-js.svg";
  if (name.includes("next")) return "/assets/white-logos/next-js.svg";
  if (name.includes("php")) return "/assets/white-logos/php.svg";
  if (name.includes("node")) return "/assets/white-logos/node-js.svg";
  if (name.includes("python")) return "/assets/white-logos/python.svg";
  if (name.includes("c#")) return "/assets/white-logos/c-sharp.svg";
  if (name.includes(".net")) return "/assets/white-logos/dotnet.svg";
  if (name.includes("c++")) return "/assets/white-logos/c-plus-plus.svg";
  if (name.includes("java")) return "/assets/white-logos/java.svg";
  if (name.includes("mysql server") || name.includes("ms sql server")) return "/assets/white-logos/mysql-server.svg";
  if (name.includes("mysql")) return "/assets/white-logos/mysql.svg";
  if (name.includes("github")) return "/assets/white-logos/github.svg";
  if (name.includes("git")) return "/assets/white-logos/git.svg";
  if (name.includes("wordpress")) return "/assets/white-logos/wordpress.svg";
  if (name.includes("n8n")) return "/assets/white-logos/n8n.svg";
  if (name.includes("figma")) return "/assets/white-logos/figma.svg";
  if (name.includes("vs code") || name.includes("vscode")) return "/assets/white-logos/vscode.svg";
  if (name.includes("postman")) return "/assets/white-logos/postman.svg";
  if (name.includes("webflow")) return "/assets/white-logos/figma.svg";
  if (name.includes("photoshop")) return "/assets/white-logos/photoshop.svg";
  if (name.includes("canva")) return "/assets/white-logos/canva.svg";
  if (name.includes("asana")) return "/assets/white-logos/asana.svg";
  if (name.includes("jira")) return "/assets/white-logos/jira.svg";
  if (name.includes("linux")) return "/assets/white-logos/linux.svg";
  return "/assets/white-logos/vscode.svg";
};

export const getOrderedItems = (categoryName, items) => {
  if (!items) return [];
  let cloned = [...items];

  if (categoryName.toLowerCase().includes("back-end")) {
    const javaIdx = cloned.findIndex(i => i.name.toLowerCase().includes("java") && !i.name.toLowerCase().includes("script"));
    const netIdx = cloned.findIndex(i => i.name.toLowerCase().includes(".net"));
    if (javaIdx !== -1 && netIdx !== -1) {
      const temp = cloned[javaIdx];
      cloned[javaIdx] = cloned[netIdx];
      cloned[netIdx] = temp;
    }
  } else if (categoryName.toLowerCase().includes("front-end")) {
    const nextIdx = cloned.findIndex(i => i.name.toLowerCase().includes("next.js"));
    if (nextIdx !== -1) {
      const [nextItem] = cloned.splice(nextIdx, 1);
      cloned.push(nextItem);
    }
  } else if (categoryName.toLowerCase().includes("software")) {
    const n8nIdx = cloned.findIndex(i => i.name.toLowerCase().includes("n8n"));
    if (n8nIdx !== -1) {
      const [n8nItem] = cloned.splice(n8nIdx, 1);
      cloned.push(n8nItem);
    }
  }

  return cloned;
};

export const isFullWidthOnMobile = (categoryName, techName) => {
  const cat = categoryName.toLowerCase();
  const name = techName.toLowerCase();
  if (cat.includes("back-end") && name.includes(".net")) return true;
  if (cat.includes("front-end") && name.includes("next.js")) return true;
  if (cat.includes("software") && name.includes("n8n")) return true;
  return false;
};