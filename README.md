# AI Blog Visualizer Chrome Extension

## Description

AI Blog Visualizer is a powerful Chrome extension that transforms any blog post into engaging, illustrated slides using artificial intelligence. This tool helps readers better understand and visualize content by automatically generating relevant images and organizing text into digestible slide formats.

## Features

- 🤖 **AI-Powered Visualization**: Automatically generates relevant illustrations for blog content
- 📱 **Slide Generation**: Converts long-form blog posts into easy-to-read slide presentations
- 🎨 **Smart Content Processing**: Intelligently breaks down articles into key points
- 🔧 **Easy Integration**: Works on any website with a simple click
- 💾 **Local Storage**: Saves your visualizations for later viewing

## How It Works

1. Navigate to any blog post or article
2. Click the AI Blog Visualizer extension icon
3. The extension processes the content and generates illustrated slides
4. View your transformed content in an engaging slide format

## Installation

### From Source (Developer Mode)
1. Clone this repository or download the ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The AI Blog Visualizer icon will appear in your Chrome toolbar

## Technical Details

- **Manifest Version**: 3 (Latest Chrome Extension standard)
- **Permissions**: 
  - `activeTab`: Access current tab content
  - `storage`: Save user preferences and visualizations
  - `scripting`: Inject content processing scripts
- **Host Permissions**: Communicates with local AI service on `localhost:5000`

## Project Structure

```
ai-blog-visualizer/
├── manifest.json       # Extension configuration
├── popup.html         # Extension popup interface
├── popup.js          # Popup functionality
├── content.js        # Content script for webpage interaction
├── styles.css        # Styling for the popup
├── icon.png          # Extension icon
└── README.md         # This file
```

## Development Setup

1. Ensure you have a local AI service running on port 5000
2. Load the extension in developer mode
3. Make changes to the code
4. Reload the extension in `chrome://extensions/`

## Technologies Used

- **JavaScript**: Core extension logic
- **HTML/CSS**: User interface
- **Chrome Extension APIs**: Browser integration
- **AI Integration**: Content processing and image generation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Future Enhancements

- [ ] Support for multiple AI providers
- [ ] Custom slide templates
- [ ] Export to PDF functionality
- [ ] Social media sharing
- [ ] Collaborative features
- [ ] Mobile app version

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for better content consumption**
