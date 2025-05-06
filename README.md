# SkincareEdu

A Next.js application for personalized skincare education, combining features from Stilla, SkinVision, and Think Dirty apps. The platform offers ingredient scanning, skin monitoring, and customized education classes focused on the 30-step Vaseline and vitamin E oil skincare routine.

## Features

- **Ingredient Scanner**: Analyze skincare products for safety and compatibility with your skin
- **Skin Monitoring Dashboard**: Track changes in your skin over time with photo uploads
- **Education Classes**: Interactive tutorials on skincare routines, particularly the 30-step Vaseline method
- **Personalized Recommendations**: Get tailored advice based on your skin type and concerns

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **APIs**: Open Food Facts (ingredient data)
- **Automation**: n8n for workflows (reminders, data syncing)
- **Deployment**: Multi-Cloud Platform (MCP) ready

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/skincareedu.git
   cd skincareedu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Update the variables with your specific values

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
skincareedu/
├── src/
│   ├── app/             # App router pages and layouts
│   ├── components/      # React components
│   └── lib/             # Utility functions and services
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── ...configuration files
```

## Key Components

- **IngredientScanner**: Analyzes product barcodes to check ingredients
- **SkinMonitoring**: Allows tracking skin changes with photo uploads
- **EducationClasses**: Provides interactive classes on skincare routines

## Deployment

The application is designed to work with Multi-Cloud Platforms (MCP) and includes Docker configuration for containerized deployment.

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Integration with n8n

The project can connect to n8n for workflow automation such as:

- Daily skincare routine reminders
- Progress tracking notifications
- Data synchronization between services

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by features from Stilla, SkinVision, and Think Dirty apps
- Based on scientific research on the effectiveness of Vaseline and vitamin E oil for skincare 