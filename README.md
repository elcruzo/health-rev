# HealthRev - Cutting-Edge Health Management System

HealthRev is a cutting-edge health management system implemented as a Swift application with a Docker container. It empowers patients with greater control over their healthcare, aids healthcare providers in making accurate diagnoses, and addresses issues of bias and efficiency within the healthcare system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Installation

### Prerequisites

Before you can run HealthRev, make sure you have the following prerequisites installed on your system:

- Swift (version 5.9)
- Docker (version 21.0)
- Any other specific dependencies

### Installation Steps

1. Clone the HealthRev repository to your local machine:

   ```bash
   git clone https://github.com/elcruzo/health-rev.git
   ```
   
2. ```bash
   cd health-rev
   ```

3. ```bash
   swift build
   ```

4. ```bash
   docker build -t health-rev:latest .
   ```

5. ```bash
   docker run -p 8080:8080 health-rev:latest
   ```

## Usage
To use HealthRev, follow these steps:

1. Open your web browser and navigate to http://localhost:8080.
2. Follow the on-screen instructions for patients or healthcare providers.

## Contributing
We welcome contributions from the community! If you'd like to contribute to HealthRev, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code is well-documented.
4. Submit a pull request.
   
## License
This project is licensed under the [LICENSE](LICENSE) - see the LICENSE file for details.

## Acknowledgments
This project was designed by a four-person team at [HackHavard2023](https://hackharvard.io/). We are: [ElCruzo](https://github.com/elcruzo), [Candice](https://github.com/CandiceHines), [Nia](https://github.com/NiaAnderson), [James](https://github.com/James23xr) for their contributions to this project.

## Contact
If you have questions or need further assistance, feel free to contact us.
