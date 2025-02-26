<<<<<<< HEAD
# swaglabs_assessment
=======
# SwagLabs Assessment

This repository contains the technical assessment for SwagLabs. The assessment includes various tasks and test cases to ensure the functionality of the application.

## Description

The SwagLabs assessment is designed to evaluate the following:
- User authentication
- Product listing
- Checkout process

## How to Run Tests

1. **Install Node**:You will need to install Node.js:
   https://nodejs.org/en/

2. **Clone the repository**
   git clone  https://github.com/NavdeepKaurHara/swaglabs_assessment

3. **Navigate to project directory**: SwagLabs


4. **Install Dependencies**: Install the required dependencies.
    ```bash
    npm install
    ```
5. **Check node and cypress version**: To make sure everything is installed.
    ```bash
    npx cypress -v && node -v
    ```
    if not installed,install cypress 
    ```bash
    npm install cypress --save-dev
    ```


6. **Run Tests**: Execute the test suite using the following command.
    ```bash
    npm test
    ```
    To Execute tests in browser 
    ```bash
    npm cypress open
    ```


7. After running tests report will be generated. Navigate to reports folder and open index.html in browser. Please find sample report  snapshot in the project folder-> sample_report.png
   
   Please find videos for test run in reports/videos.
   
   If something fails please find screenshots in reports/screenshots
    

For any issues or questions, please contact author @ navdeep.hara.qat@gmail.com
>>>>>>> master
