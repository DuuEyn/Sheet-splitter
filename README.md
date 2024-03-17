
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DuuEyn/Sheet-splitter">
    <img src="https://lh3.googleusercontent.com/yCF7mTvXRF_EhDf7Kun5_-LMYTbD2IL-stx_D97EzpACfhpGjY_Frx8NZw63rSn2dME0v8-Im49Mh16htvPAGmEOMhiTxDZzo6rB7MY" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Sheet-splitter</h3>

  <p align="center">
    Splits a Google Sheets file to multiple files.
    <br />
    <a href="https://github.com/DuuEyn/Sheet-splitter
"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/DuuEyn/Sheet-splitter
">View Demo</a>
    ·
    <a href="https://github.com/DuuEyn/Sheet-splitter
/issues">Report Bug</a>
    ·
    <a href="https://github.com/DuuEyn/Sheet-splitter
/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This script is intended to split an existing Google Sheets file into multiple files, one for each tab the source sheet has.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![GAS][gas.js]][gas-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* The script must be bound to a Google Sheets file.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/DuuEyn/Sheet-splitter
   ```
2. Open the target Google Spreadsheet, click `Extensions` on the menu then click `Apps Script`
   ![Menu Screenshot][menu-screenshot]
3. Copy the script in the `newSheet.gs` file and paste it in Apps Script.
4. Update the following variables with the destination folder ID, Sheet ID, and Sheet tab:
   ```sh
   var destFolder = DriveApp.getFolderById('folder_id');
   var destSheet = SpreadsheetApp.openById('sheet_id');
   destSheet.getSheetByName('sheet_tab')
   ```
5. Select the function name in the menu, in this case `newSheet`, then click `Run`
   ![GAS Screenshot][gas-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This script can quickly split a Sheets file with multiple tabs to separate files. The user can also specify which Google Drive folder to store the files to and, if needed, store the URLs of the newly created files on another spreadsheet.
This script must be bound to the target sheet and the user would have repeat the installation steps for each of the Sheets file they'd like to split.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/recommendedFeature`)
3. Commit your Changes (`git commit -m 'Add some recommendedFeature'`)
4. Push to the Branch (`git push origin feature/recommendedFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

DuuEyn - iddiche@gmail.com

Project Link: [https://github.com/DuuEyn/Sheet-splitter](https://github.com/DuuEyn/Sheet-splitter)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/DuuEyn/Sheet-splitter.svg?style=for-the-badge
[contributors-url]: https://github.com/DuuEyn/Sheet-splitter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DuuEyn/Sheet-splitter.svg?style=for-the-badge
[forks-url]: https://github.com/DuuEyn/Sheet-splitter/network/members
[stars-shield]: https://img.shields.io/github/stars/DuuEyn/Sheet-splitter.svg?style=for-the-badge
[stars-url]: https://github.com/DuuEyn/Sheet-splitter/stargazers
[issues-shield]: https://img.shields.io/github/issues/DuuEyn/Sheet-splitter.svg?style=for-the-badge
[issues-url]: https://github.com/DuuEyn/Sheet-splitter/issues
[license-shield]: https://img.shields.io/github/license/DuuEyn/Sheet-splitter.svg?style=for-the-badge
[license-url]: https://github.com/DuuEyn/Sheet-splitter/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ian-dewaine-diche-69406a2bb
[menu-screenshot]: images/menu_screenshot.png
[gas-screenshot]: images/gas_screenshot.png
[gas.js]: https://img.shields.io/badge/Google%20Apps%20Script-4A4A55?style=for-the-badge&logo=googleappsscript&logoColor=white
[gas-url]: https://www.google.com/script/start/
