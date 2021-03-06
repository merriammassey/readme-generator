
const renderLicenseBadge = data => {
  console.log(data.license);
  if (data.license === "none") {
    return '';
  }
  if (data.license === 'Apache 2.0') {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  }
  if (data.license === 'MIT') {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  if (data.license === 'GNU 3.0') {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }
}

const renderLicenseLink = data => {
  if (data.license === 'none') {
    return '';
  }
  if (data.license === 'Apache 2.0') {
    return "[License](https://opensource.org/licenses/Apache-2.0)"
  }
  if (data.license === 'MIT') {
    return "[License: MIT](https://opensource.org/licenses/MIT)"
  }
  if (data.license === 'GNU 3.0') {
    return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
  }
}

const generateMarkdown = data => {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Screenshot

${data.screenshot}

## License

${renderLicenseBadge(data)}
${renderLicenseLink(data)}

## Contributions

${data.contributions}

## Tests

${data.tests}

## Questions

Reach out with questions.

Email ${data.email}

GitHub [my GitHub profile](https://github.com/${data.github})
`;
}

module.exports = { renderLicenseBadge, renderLicenseLink, generateMarkdown };
