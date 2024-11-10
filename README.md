This is a Next.js project bootstrapped with create-next-app.
Setting up the project

    git clone https://github.com/ScriptingMage/TourismTechnology2024.git or git clone git@github.com:ScriptingMage/TourismTechnology2024.git

    cd TourismTechnology2024/wwbs/

    npm install

    npx prisma generate

    npm run dev or npm run build npm start

========================================================================================
.env Setup

You will need 2 variables in your .env file. NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN DATABASE_URL

The NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN is used to make mapbox, the js map library accessible. The DATABASE_URL makes saving booking-details possible. In our case, we used Prisma DB to connect to PostgreSQL
