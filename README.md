# 🍔 SwiggyAI - AI-Powered Food Ordering Platform

An intelligent food ordering application featuring an AI chatbot with voice recognition capabilities. Order food seamlessly through natural language conversations and voice commands.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🤖 **AI-Powered Chatbot** - Intelligent food ordering assistant with natural language processing
- 🎤 **Voice Recognition** - Order food using voice commands
- 🛒 **Smart Cart Management** - Dynamic cart with real-time updates
- 🏪 **Restaurant Discovery** - Browse top restaurants and food categories
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎯 **Contextual Ordering** - Specify quantity, price range, customizations, and preferences
- ⭐ **Rating-Based Search** - Filter restaurants by ratings
- 💬 **Real-time Chat Interface** - Interactive conversation with the food assistant

## 🚀 Demo

Check out the live demo: [SwiggyAI Live](https://your-demo-link.com)

## 📸 Screenshots

![Home Page](./screenshots/home.png)
![Chatbot Interface](./screenshots/chatbot.png)

## 🛠️ Technologies Used

### Frontend

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing

### UI Components

- **shadcn/ui** - Beautiful and accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### State Management & Data

- **TanStack Query** - Server state management
- **React Context API** - Cart and global state management

### Additional Features

- **Web Speech API** - Voice recognition
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Sonner** - Toast notifications

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **bun** - Package manager

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/i24hour/swiggyAI.git
cd swiggyAI
```

2. **Install dependencies**

```bash
npm install
# or
bun install
```

3. **Start the development server**

```bash
npm run dev
# or
bun run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
# or
bun run build
```

The optimized build will be generated in the `dist` folder.

## 🎯 Usage

### Ordering with Chatbot

The AI chatbot understands natural language. Here are some example commands:

- **Basic order**: "Order 2 pizzas"
- **With price limit**: "Get me 3 burgers under ₹150"
- **With customization**: "Order 1 biryani with extra raita"
- **With restaurant**: "Get me 2 dosas from Prakash Restaurant"
- **With rating**: "Order pizza from a 4.5 rating restaurant"
- **Complex order**: "Order 2 samosas under ₹100 with green chutney from a 4 star restaurant"

### Voice Commands

Click the microphone icon in the chatbot to use voice commands. Speak naturally:

- "Order two butter chicken"
- "Get me three cheese pizzas under two hundred rupees"

## 📁 Project Structure

```
swiggyAI/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── FoodChatbot.tsx
│   │   ├── RestaurantCard.tsx
│   │   └── ...
│   ├── contexts/       # React contexts (Cart, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── package.json
└── vite.config.ts
```

## 🎨 Key Components

- **FoodChatbot** - AI chatbot with voice recognition
- **RestaurantCard** - Restaurant display component
- **FoodCategory** - Food category carousel
- **CartContext** - Global cart state management
- **Navbar** - Navigation with cart integration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Priyanshu**

- GitHub: [@i24hour](https://github.com/i24hour)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Unsplash](https://unsplash.com/) for food images
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives

## 📧 Contact

For any queries or suggestions, feel free to reach out:

- Create an issue on [GitHub](https://github.com/i24hour/swiggyAI/issues)
- Email: your.email@example.com

---

Made with ❤️ by Priyanshu
