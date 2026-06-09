const SkillsSection = () => {
    const skills = [
      {
        title: "Frontend",
        icon: "fas fa-laptop-code",
        items: [
          { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
          { name: "CSS3/Tailwind", icon: "fab fa-css3-alt", color: "text-blue-500" },
          { name: "Boostrap", icon: "fab fa-boostrap-alt", color: "text-blue-500" },
          { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
          { name: "Angular", icon: "fab fa-angular", color: "text-blue-400" },
          { name: "Vue.js", icon: "fab fa-vuejs", color: "text-green-500" },
        ]
      },
      {
        title: "Backend",
        icon: "fas fa-server",
        items: [
          { name: "Node.js", icon: "fab fa-node-js", color: "text-green-600" },
          { name: "MongoDB", icon: "fas fa-database", color: "text-blue-400" },
          { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-600" },
          { name: "Python", icon: "fab fa-python", color: "text-blue-700" },
          { name: "CodeIgniter", icon: "fas fa-fire", color: "text-orange-500" },
          { name: "Symfony", icon: "fas fa-symfony", color: "text-orange-500" },
          { name: "Firebase", icon: "fas fa-fire", color: "text-orange-500" },
        ]
      },
      {
        title: "Design",
        icon: "fas fa-palette",
        items: [
          { name: "Figma", icon: "fab fa-figma", color: "text-purple-500" },
          { name: "Adobe XD", icon: "fab fa-adobe", color: "text-pink-600" },
          { name: "UI/UX Design", icon: "fas fa-paint-brush", color: "text-green-500" },
          { name: "Responsive Design", icon: "fas fa-mobile-alt", color: "text-blue-500" },
          { name: "Design Thinking", icon: "fas fa-chart-line", color: "text-yellow-500" },
        ]
      },
      {
        title: "Autres",
        icon: "fas fa-tools",
        items: [
          { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
          { name: "GitHub", icon: "fab fa-github", color: "text-gray-800 dark:text-gray-300" },
          { name: "GitLab", icon: "fab fa-gitlab", color: "text-gray-800 dark:text-gray-300" },
          { name: "Docker", icon: "fab fa-docker", color: "text-blue-500" },
          { name: "AWS Basics", icon: "fas fa-cloud", color: "text-blue-300" },
          { name: "CLI", icon: "fas fa-terminal", color: "text-gray-600" },
        ]
      }
    ];
  
    return (
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes compétences</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <div 
              key={category.title} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md card-hover fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <i className={`${category.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center">
                    <i className={`${item.icon} ${item.color} mr-2`}></i> {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SkillsSection;