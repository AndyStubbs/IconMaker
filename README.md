# IconMaker

**IconMaker** is a simple Node.js script for converting images into `.ico` format using **Sharp** and **png-to-ico** libraries. This script is ideal for creating favicon files for websites or other applications.

## Features
- Converts an input image to `.ico` format.
- Uses PNG as an intermediate format for compatibility.
- Lightweight and easy to use.

## Requirements
- Node.js (v14 or higher)
- NPM (comes with Node.js)

## Installation
1. Clone or download the repository:
   git clone https://github.com/AndyStubbs/IconMaker.git
   cd IconMaker
2. Install the required dependencies:
   npm install sharp png-to-ico

## Usage
1. Run the script with the input image filename:
   node IconMaker.js <input-file>
   Replace `<input-file>` with the path to your image file (e.g., `example.png`).

2. The script will generate an `.ico` file with the same base name as the input file in the same directory.

### Example
node IconMaker.js example.png
This command will generate an `example.ico` file in the same directory.

## Supported Formats
- The input image should be in a format supported by **Sharp** (e.g., JPEG, PNG, WebP, etc.).

## Error Handling
- If no input file is provided, the script will terminate with an error message:  
  "Please provide an input filename."
- If any issues occur during the conversion process, an error message will be displayed.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contribution
Contributions are welcome! Feel free to fork the repository, create a new branch for your changes, and submit a pull request.

---

Transform your images into `.ico` files effortlessly with **IconMaker**!
