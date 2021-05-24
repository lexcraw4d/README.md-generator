// function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.project}                                   

  
#### Table of Contents
  * [About](#About)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Questions](#Questions)
  
# About
${data.description}


# Installation
${data.installation}

# Usage
${data.usage}
 

# Contribution
${data.contribution}

# Questions

## Github
You can access my project via my Github at (https://github.com/${data.name})


## License
${data.license}


If you have any questions or concerns please feel free to reach out to me at ${data.email}.

`;
}

module.exports = generateMarkdown;
